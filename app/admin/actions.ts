"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { type PriceData, validatePriceData } from "@/data/pricing";
import { SERVICE_KEYS } from "@/data/catalog";
import { attemptLogin, audit, logout, requireAdmin } from "@/server/auth";
import { getDb } from "@/server/db";
import { UploadError, deleteMediaIfOrphan, storeUpload } from "@/server/media";
import * as prices from "@/server/prices";

/* ───────── yardımcılar ───────── */

const enc = encodeURIComponent;
function back(path: string, kind: "ok" | "err", msg: string): never {
  redirect(`${path}${path.includes("?") ? "&" : "?"}${kind}=${enc(msg)}`);
}
function text(fd: FormData, key: string, max: number): string | null {
  const v = fd.get(key);
  if (typeof v !== "string") return null;
  const t = v.trim().replace(/\r\n/g, "\n");
  if (!t) return null;
  return t.slice(0, max);
}
function int(fd: FormData, key: string): number | null {
  const v = Number(fd.get(key));
  return Number.isInteger(v) && v > 0 ? v : null;
}
/** Yalnızca http(s) bağlantıları kabul edilir */
function link(fd: FormData, key: string): { ok: true; value: string | null } | { ok: false } {
  const v = text(fd, key, 500);
  if (!v) return { ok: true, value: null };
  try {
    const u = new URL(v);
    if (u.protocol !== "https:" && u.protocol !== "http:") return { ok: false };
    return { ok: true, value: u.toString() };
  } catch {
    return { ok: false };
  }
}
function file(fd: FormData, key: string): File | null {
  const f = fd.get(key);
  return f instanceof File && f.size > 0 ? f : null;
}
function files(fd: FormData, key: string): File[] {
  return fd.getAll(key).filter((f): f is File => f instanceof File && f.size > 0);
}
function contentChanged() {
  revalidateTag("cms");
}

/* ───────── oturum ───────── */

export async function loginAction(_prev: { error?: string } | undefined, fd: FormData) {
  const email = String(fd.get("email") ?? "").slice(0, 200);
  const password = String(fd.get("password") ?? "").slice(0, 500);
  const r = await attemptLogin(email, password);
  if (!r.ok) return { error: r.error };
  redirect("/admin");
}

export async function logoutAction() {
  logout();
  redirect("/admin/giris");
}

/* ───────── fiyatlar ───────── */

export async function newPriceDraftAction(fd: FormData) {
  const s = requireAdmin();
  const from = int(fd, "from");
  if (!from) back("/admin/fiyatlar", "err", "Kaynak sürüm seçilmedi.");
  const id = await prices.createDraft(from, s.sub);
  await audit(s.sub, "price.draft.create", { id, from });
  redirect(`/admin/fiyatlar/${id}`);
}

export async function savePriceDraftAction(
  _prev: { errors?: string[]; saved?: string } | undefined,
  fd: FormData
): Promise<{ errors?: string[]; saved?: string }> {
  const s = requireAdmin();
  const id = int(fd, "id");
  if (!id) return { errors: ["Sürüm bulunamadı."] };
  let data: PriceData;
  try {
    data = JSON.parse(String(fd.get("data") ?? ""));
  } catch {
    return { errors: ["Fiyat verisi okunamadı."] };
  }
  const errors = await prices.saveDraft(id, data, text(fd, "note", 200));
  if (errors.length) return { errors };
  await audit(s.sub, "price.draft.save", { id });
  revalidatePath(`/admin/fiyatlar/${id}`);
  if (fd.get("intent") === "preview") redirect(`/admin/fiyatlar/${id}/onizleme`);
  return { saved: new Date().toISOString() };
}

export async function deletePriceDraftAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  if (id) {
    await prices.deleteDraft(id);
    await audit(s.sub, "price.draft.delete", { id });
  }
  back("/admin/fiyatlar", "ok", "Taslak silindi.");
}

export async function publishPriceAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  if (!id) back("/admin/fiyatlar", "err", "Sürüm bulunamadı.");
  const v = await prices.getVersion(id);
  if (!v || v.status !== "draft") back("/admin/fiyatlar", "err", "Yalnızca taslak yayımlanabilir.");
  const errs = validatePriceData(v.data);
  if (errs.length) back(`/admin/fiyatlar/${id}`, "err", errs.join(" "));
  try {
    await prices.publishVersion(id);
  } catch (e) {
    back(`/admin/fiyatlar/${id}`, "err", (e as Error).message);
  }
  const hook = await prices.triggerRebuild();
  await audit(s.sub, "price.publish", { id, rebuild: hook });
  back("/admin/fiyatlar", hook.triggered ? "ok" : "err", `v${id} yayımlandı. ${hook.message}`);
}

export async function restorePriceAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  if (!id) back("/admin/fiyatlar", "err", "Sürüm bulunamadı.");
  const newId = await prices.restoreVersion(id, s.sub);
  const hook = await prices.triggerRebuild();
  await audit(s.sub, "price.restore", { from: id, id: newId, rebuild: hook });
  back("/admin/fiyatlar", hook.triggered ? "ok" : "err", `v${id} fiyatları v${newId} olarak yeniden yayımlandı. ${hook.message}`);
}

export async function rebuildAction() {
  const s = requireAdmin();
  const hook = await prices.triggerRebuild();
  await audit(s.sub, "site.rebuild", hook);
  back("/admin/fiyatlar", hook.triggered ? "ok" : "err", hook.message);
}

/* ───────── markalar ───────── */

const BRANDS = "/admin/markalar";

export async function createBrandAction(fd: FormData) {
  const s = requireAdmin();
  const name = text(fd, "name", 80);
  const kind = fd.get("kind") === "tool" ? "tool" : "client";
  const url = link(fd, "url");
  const logo = file(fd, "logo");
  if (!name) back(BRANDS, "err", "Marka adı gerekli.");
  if (!url.ok) back(BRANDS, "err", "Bağlantı http:// veya https:// ile başlamalı.");
  if (!logo) back(BRANDS, "err", "Logo dosyası seçin.");
  let logoId: string;
  try {
    logoId = await storeUpload(logo, "logo");
  } catch (e) {
    back(BRANDS, "err", e instanceof UploadError ? e.message : "Logo yüklenemedi.");
  }
  const db = await getDb();
  const r = await db.query<{ id: number }>(
    `insert into brands (name, kind, url, logo_id, sort)
     values ($1, $2, $3, $4, coalesce((select max(sort) + 1 from brands where kind = $2), 0)) returning id`,
    [name, kind, url.value, logoId]
  );
  await audit(s.sub, "brand.create", { id: r.rows[0].id, name });
  contentChanged();
  back(BRANDS, "ok", `“${name}” eklendi ve şeritte görünüyor.`);
}

export async function updateBrandAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const name = text(fd, "name", 80);
  const kind = fd.get("kind") === "tool" ? "tool" : "client";
  const url = link(fd, "url");
  if (!id || !name) back(BRANDS, "err", "Marka adı gerekli.");
  if (!url.ok) back(BRANDS, "err", "Bağlantı http:// veya https:// ile başlamalı.");
  const db = await getDb();
  const old = (await db.query<{ logo_id: string | null }>(`select logo_id from brands where id = $1`, [id])).rows[0];
  if (!old) back(BRANDS, "err", "Marka bulunamadı.");
  let logoId = old.logo_id;
  const logo = file(fd, "logo");
  if (logo) {
    try {
      logoId = await storeUpload(logo, "logo");
    } catch (e) {
      back(BRANDS, "err", e instanceof UploadError ? e.message : "Logo yüklenemedi.");
    }
  }
  await db.query(`update brands set name = $2, kind = $3, url = $4, logo_id = $5, updated_at = now() where id = $1`, [
    id,
    name,
    kind,
    url.value,
    logoId
  ]);
  if (logo) await deleteMediaIfOrphan(old.logo_id);
  await audit(s.sub, "brand.update", { id, name, logoReplaced: Boolean(logo) });
  contentChanged();
  back(BRANDS, "ok", `“${name}” güncellendi.`);
}

export async function toggleBrandAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const db = await getDb();
  await db.query(`update brands set visible = not visible, updated_at = now() where id = $1`, [id]);
  await audit(s.sub, "brand.toggle", { id });
  contentChanged();
  back(BRANDS, "ok", "Görünürlük değiştirildi.");
}

/** Aynı türdeki komşuyla sıra değiştirir */
async function swapSort(table: "brands" | "testimonials" | "works", id: number, dir: "up" | "down", groupCol: string | null) {
  const db = await getDb();
  await db.tx(async (q) => {
    // Sıraları önce 0..n olarak normalize et
    const cur = (await q(`select id, ${groupCol ?? "null"} as g from ${table} where id = $1`, [id])).rows[0] as { id: number; g: unknown } | undefined;
    if (!cur) return;
    const rows = (
      await q(`select id from ${table} ${groupCol ? `where ${groupCol} = $1` : ""} order by sort, id`, groupCol ? [cur.g] : [])
    ).rows.map((r) => Number(r.id));
    const i = rows.indexOf(Number(id));
    const j = dir === "up" ? i - 1 : i + 1;
    if (i < 0 || j < 0 || j >= rows.length) return;
    [rows[i], rows[j]] = [rows[j], rows[i]];
    for (let k = 0; k < rows.length; k++) await q(`update ${table} set sort = $2 where id = $1`, [rows[k], k]);
  });
}

export async function moveBrandAction(fd: FormData) {
  requireAdmin();
  const id = int(fd, "id");
  if (id) await swapSort("brands", id, fd.get("dir") === "up" ? "up" : "down", "kind");
  contentChanged();
  redirect(BRANDS);
}

export async function deleteBrandAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const db = await getDb();
  const r = (await db.query<{ logo_id: string | null; name: string }>(`delete from brands where id = $1 returning logo_id, name`, [id])).rows[0];
  if (r) await deleteMediaIfOrphan(r.logo_id);
  await audit(s.sub, "brand.delete", { id, name: r?.name });
  contentChanged();
  back(BRANDS, "ok", "Marka kaldırıldı.");
}

/* ───────── müşteri yorumları ───────── */

const REVIEWS = "/admin/yorumlar";

export async function saveTestimonialAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const formPath = id ? `${REVIEWS}/${id}` : `${REVIEWS}/yeni`;
  const body = text(fd, "body", 2000);
  const displayName = text(fd, "display_name", 80);
  const company = text(fd, "company", 120);
  const title = text(fd, "title", 120);
  const source = fd.get("source") === "google" ? "google" : "direct";
  const sourceUrl = link(fd, "source_url");
  const ratingRaw = String(fd.get("rating") ?? "");
  const rating = ratingRaw === "" ? null : Number(ratingRaw);
  const dateRaw = text(fd, "review_date", 10);
  const publish = fd.get("intent") === "publish";

  if (!body || body.length < 5) back(formPath, "err", "Yorum metni gerekli.");
  if (!displayName) back(formPath, "err", "Görünen ad gerekli.");
  if (!sourceUrl.ok) back(formPath, "err", "Kaynak bağlantısı http:// veya https:// ile başlamalı.");
  if (rating !== null && !(Number.isInteger(rating) && rating >= 1 && rating <= 5)) back(formPath, "err", "Puan 1–5 arası olmalı ya da boş bırakılmalı.");
  if (dateRaw && (!/^\d{4}-\d{2}-\d{2}$/.test(dateRaw) || Number.isNaN(Date.parse(dateRaw)) || Date.parse(dateRaw) > Date.now() + 86400_000)) {
    back(formPath, "err", "Tarih geçersiz.");
  }

  const db = await getDb();
  let avatarId: string | null = null;
  let oldAvatar: string | null = null;
  if (id) {
    const old = (await db.query<{ avatar_id: string | null }>(`select avatar_id from testimonials where id = $1`, [id])).rows[0];
    if (!old) back(REVIEWS, "err", "Yorum bulunamadı.");
    avatarId = old.avatar_id;
    oldAvatar = old.avatar_id;
  }
  const avatar = file(fd, "avatar");
  if (avatar) {
    try {
      avatarId = await storeUpload(avatar, "avatar");
    } catch (e) {
      back(formPath, "err", e instanceof UploadError ? e.message : "Görsel yüklenemedi.");
    }
  } else if (fd.get("remove_avatar") === "1") {
    avatarId = null;
  }

  const params = [body, displayName, company, title, avatarId, dateRaw, rating, source, sourceUrl.value];
  let savedId = id;
  if (id) {
    await db.query(
      `update testimonials set body=$2, display_name=$3, company=$4, title=$5, avatar_id=$6, review_date=$7, rating=$8, source=$9, source_url=$10,
         status = case when $11::boolean then 'published' else status end, updated_at = now() where id = $1`,
      [id, ...params, publish]
    );
  } else {
    const r = await db.query<{ id: number }>(
      `insert into testimonials (body, display_name, company, title, avatar_id, review_date, rating, source, source_url, status, sort)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, coalesce((select max(sort) + 1 from testimonials), 0)) returning id`,
      [...params, publish ? "published" : "draft"]
    );
    savedId = Number(r.rows[0].id);
  }
  if (oldAvatar && oldAvatar !== avatarId) await deleteMediaIfOrphan(oldAvatar);
  await audit(s.sub, id ? "review.update" : "review.create", { id: savedId, publish });
  contentChanged();
  back(`${REVIEWS}/${savedId}`, "ok", publish ? "Yorum kaydedildi ve yayımlandı." : "Taslak kaydedildi.");
}

export async function setTestimonialStatusAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const status = fd.get("status") === "published" ? "published" : "draft";
  const db = await getDb();
  await db.query(`update testimonials set status = $2, updated_at = now() where id = $1`, [id, status]);
  await audit(s.sub, "review.status", { id, status });
  contentChanged();
  back(String(fd.get("return") ?? REVIEWS).startsWith("/admin/") ? String(fd.get("return")) : REVIEWS, "ok", status === "published" ? "Yayımlandı." : "Taslağa alındı.");
}

export async function moveTestimonialAction(fd: FormData) {
  requireAdmin();
  const id = int(fd, "id");
  if (id) await swapSort("testimonials", id, fd.get("dir") === "up" ? "up" : "down", null);
  contentChanged();
  redirect(REVIEWS);
}

export async function deleteTestimonialAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const db = await getDb();
  const r = (await db.query<{ avatar_id: string | null }>(`delete from testimonials where id = $1 returning avatar_id`, [id])).rows[0];
  if (r) await deleteMediaIfOrphan(r.avatar_id);
  await audit(s.sub, "review.delete", { id });
  contentChanged();
  back(REVIEWS, "ok", "Yorum kaldırıldı.");
}

/* ───────── görseller ve işler ───────── */

const WORKS = "/admin/isler";
const CATS = ["sosyal-medya", "ai-otomasyon", "web-yazilim"];

export async function saveWorkAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const kind = fd.get("kind") === "service" ? "service" : "work";
  const formPath = id ? `${WORKS}/${id}` : `${WORKS}/yeni?tur=${kind}`;
  const title = text(fd, "title", 120);
  const summary = text(fd, "summary", 400);
  const category = String(fd.get("category") ?? "");
  const serviceKeyRaw = text(fd, "service_key", 200);
  const alt = text(fd, "alt", 200);
  const projectUrl = link(fd, "project_url");
  const videoUrl = link(fd, "video_url");
  const isDemo = fd.get("is_demo") === "1";
  const publish = fd.get("intent") === "publish";

  if (!title) back(formPath, "err", "Başlık gerekli.");
  if (!CATS.includes(category)) back(formPath, "err", "Hizmet kategorisi seçin.");
  if (serviceKeyRaw && !SERVICE_KEYS.includes(serviceKeyRaw)) back(formPath, "err", "Geçersiz hizmet sayfası.");
  if (kind === "service" && !serviceKeyRaw) back(formPath, "err", "Hizmet görseli için hizmet sayfası seçin.");
  if (!projectUrl.ok || !videoUrl.ok) back(formPath, "err", "Bağlantılar http:// veya https:// ile başlamalı.");

  const db = await getDb();
  const uploads = files(fd, "media");
  const newIds: string[] = [];
  try {
    for (const f of uploads.slice(0, 8)) newIds.push(await storeUpload(f, "photo", { allowVideo: true }));
  } catch (e) {
    for (const m of newIds) await deleteMediaIfOrphan(m);
    back(formPath, "err", e instanceof UploadError ? e.message : "Dosya yüklenemedi.");
  }

  const values = [kind, title, summary, category, serviceKeyRaw, alt, projectUrl.value, videoUrl.value, isDemo];
  const workId = await db.tx(async (q) => {
    let wid = id;
    if (id) {
      const r = await q(
        `update works set kind=$2, title=$3, summary=$4, category=$5, service_key=$6, alt=$7, project_url=$8, video_url=$9, is_demo=$10, updated_at=now()
         where id = $1 returning id`,
        [id, ...values]
      );
      if (!r.rows.length) return null;
    } else {
      const r = await q(
        `insert into works (kind, title, summary, category, service_key, alt, project_url, video_url, is_demo, sort)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9, coalesce((select max(sort) + 1 from works), 0)) returning id`,
        values
      );
      wid = Number(r.rows[0].id);
    }
    const base = Number((await q(`select coalesce(max(sort) + 1, 0) as n from work_media where work_id = $1`, [wid])).rows[0].n);
    for (let k = 0; k < newIds.length; k++) {
      await q(`insert into work_media (work_id, media_id, sort) values ($1, $2, $3)`, [wid, newIds[k], base + k]);
    }
    // Kapak yoksa ilk görseli kapak yap
    await q(
      `update works set cover_media_id = (select wm.media_id from work_media wm join media m on m.id = wm.media_id
                                          where wm.work_id = $1 order by (m.kind = 'image') desc, wm.sort limit 1)
        where id = $1 and cover_media_id is null`,
      [wid]
    );
    return wid;
  });
  if (!workId) back(WORKS, "err", "Kayıt bulunamadı.");

  // Yayın kontrolü: görsel ve alternatif metin olmadan yayımlanmaz
  if (publish) {
    const w = (await db.query<{ cover_media_id: string | null; alt: string | null }>(`select cover_media_id, alt from works where id = $1`, [workId])).rows[0];
    if (!w.cover_media_id) back(`${WORKS}/${workId}`, "err", "Kaydedildi ama yayımlanmadı: önce görsel veya video yükleyin.");
    if (!w.alt) back(`${WORKS}/${workId}`, "err", "Kaydedildi ama yayımlanmadı: görsel için alternatif metin (alt) yazın.");
    await db.query(`update works set status = 'published', updated_at = now() where id = $1`, [workId]);
  }
  await audit(s.sub, id ? "work.update" : "work.create", { id: workId, kind, publish, uploads: newIds.length });
  contentChanged();
  back(`${WORKS}/${workId}`, "ok", publish ? "Kaydedildi ve yayımlandı." : "Taslak kaydedildi.");
}

export async function setWorkStatusAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const status = fd.get("status") === "published" ? "published" : "draft";
  const db = await getDb();
  if (status === "published") {
    const w = (await db.query<{ cover_media_id: string | null; alt: string | null }>(`select cover_media_id, alt from works where id = $1`, [id])).rows[0];
    if (!w?.cover_media_id || !w.alt) back(id ? `${WORKS}/${id}` : WORKS, "err", "Yayımlamak için kapak görseli ve alternatif metin gerekli.");
  }
  await db.query(`update works set status = $2, updated_at = now() where id = $1`, [id, status]);
  await audit(s.sub, "work.status", { id, status });
  contentChanged();
  back(WORKS, "ok", status === "published" ? "Yayımlandı." : "Taslağa alındı.");
}

export async function setCoverAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const media = String(fd.get("media") ?? "");
  const db = await getDb();
  await db.query(
    `update works set cover_media_id = $2, updated_at = now() where id = $1 and exists (select 1 from work_media where work_id = $1 and media_id = $2::uuid)`,
    [id, media]
  );
  await audit(s.sub, "work.cover", { id, media });
  contentChanged();
  back(`${WORKS}/${id}`, "ok", "Kapak seçildi.");
}

export async function moveWorkMediaAction(fd: FormData) {
  requireAdmin();
  const id = int(fd, "id");
  const media = String(fd.get("media") ?? "");
  const dir = fd.get("dir") === "up" ? -1 : 1;
  const db = await getDb();
  await db.tx(async (q) => {
    const rows = (await q(`select media_id from work_media where work_id = $1 order by sort`, [id])).rows.map((r) => String(r.media_id));
    const i = rows.indexOf(media);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= rows.length) return;
    [rows[i], rows[j]] = [rows[j], rows[i]];
    for (let k = 0; k < rows.length; k++) await q(`update work_media set sort = $3 where work_id = $1 and media_id = $2`, [id, rows[k], k]);
  });
  contentChanged();
  redirect(`${WORKS}/${id}`);
}

export async function removeWorkMediaAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const media = String(fd.get("media") ?? "");
  const db = await getDb();
  await db.tx(async (q) => {
    await q(`delete from work_media where work_id = $1 and media_id = $2::uuid`, [id, media]);
    await q(
      `update works set cover_media_id = (select media_id from work_media where work_id = $1 order by sort limit 1)
        where id = $1 and cover_media_id = $2::uuid`,
      [id, media]
    );
    // Görseli kalmayan yayımlanmış kayıt taslağa alınır
    await q(`update works set status = 'draft' where id = $1 and cover_media_id is null`, [id]);
  });
  await deleteMediaIfOrphan(media);
  await audit(s.sub, "work.media.remove", { id, media });
  contentChanged();
  back(`${WORKS}/${id}`, "ok", "Dosya kaldırıldı.");
}

export async function moveWorkAction(fd: FormData) {
  requireAdmin();
  const id = int(fd, "id");
  if (id) await swapSort("works", id, fd.get("dir") === "up" ? "up" : "down", "kind");
  contentChanged();
  redirect(WORKS);
}

export async function deleteWorkAction(fd: FormData) {
  const s = requireAdmin();
  const id = int(fd, "id");
  const db = await getDb();
  const media = (await db.query<{ media_id: string }>(`select media_id from work_media where work_id = $1`, [id])).rows.map((r) => r.media_id);
  await db.query(`delete from works where id = $1`, [id]);
  for (const m of media) await deleteMediaIfOrphan(m);
  await audit(s.sub, "work.delete", { id });
  contentChanged();
  back(WORKS, "ok", "Kayıt kaldırıldı.");
}
