import "server-only";
import { type PriceData, validatePriceData } from "@/data/pricing";
import { getDb } from "./db";

export interface PriceVersion {
  id: number;
  status: "draft" | "published" | "archived";
  note: string | null;
  basedOn: number | null;
  createdBy: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  data: PriceData;
}

type R = Record<string, unknown>;
const iso = (v: unknown) => (v == null ? null : v instanceof Date ? v.toISOString() : String(v));
const map = (r: R): PriceVersion => ({
  id: Number(r.id),
  status: r.status as PriceVersion["status"],
  note: (r.note as string) ?? null,
  basedOn: r.based_on == null ? null : Number(r.based_on),
  createdBy: (r.created_by as string) ?? null,
  createdAt: iso(r.created_at)!,
  updatedAt: iso(r.updated_at)!,
  publishedAt: iso(r.published_at),
  data: (typeof r.data === "string" ? JSON.parse(r.data) : r.data) as PriceData
});

export async function listVersions(): Promise<PriceVersion[]> {
  const db = await getDb();
  return (await db.query<R>(`select * from price_versions order by id desc limit 100`)).rows.map(map);
}

export async function getVersion(id: number): Promise<PriceVersion | null> {
  const db = await getDb();
  const r = (await db.query<R>(`select * from price_versions where id = $1`, [id])).rows[0];
  return r ? map(r) : null;
}

export async function getPublished(): Promise<PriceVersion | null> {
  const db = await getDb();
  const r = (await db.query<R>(`select * from price_versions where status = 'published'`)).rows[0];
  return r ? map(r) : null;
}

/** Var olan bir sürümü temel alan yeni taslak (yayımlanmışa dokunmaz) */
export async function createDraft(fromId: number, actor: string): Promise<number> {
  const src = await getVersion(fromId);
  if (!src) throw new Error("Kaynak sürüm bulunamadı.");
  const db = await getDb();
  const r = await db.query<{ id: number }>(
    `insert into price_versions (data, status, note, based_on, created_by) values ($1::jsonb, 'draft', $2, $3, $4) returning id`,
    [JSON.stringify(src.data), `v${src.id} temel alınarak`, src.id, actor]
  );
  return Number(r.rows[0].id);
}

export async function saveDraft(id: number, data: PriceData, note: string | null): Promise<string[]> {
  const errors = validatePriceData(data);
  if (errors.length) return errors;
  const db = await getDb();
  const r = await db.query(
    `update price_versions set data = $2::jsonb, note = $3, updated_at = now() where id = $1 and status = 'draft' returning id`,
    [id, JSON.stringify(data), note]
  );
  if (!r.rows.length) return ["Yalnızca taslaklar düzenlenebilir."];
  return [];
}

export async function deleteDraft(id: number) {
  const db = await getDb();
  await db.query(`delete from price_versions where id = $1 and status = 'draft'`, [id]);
}

/** Taslağı yayımlar: önceki yayımlanmış sürüm arşive alınır (tek işlem). */
export async function publishVersion(id: number): Promise<void> {
  const v = await getVersion(id);
  if (!v || v.status !== "draft") throw new Error("Yalnızca taslak yayımlanabilir.");
  const errors = validatePriceData(v.data);
  if (errors.length) throw new Error(errors.join(" "));
  const db = await getDb();
  await db.tx(async (q) => {
    await q(`update price_versions set status = 'archived', updated_at = now() where status = 'published'`);
    await q(`update price_versions set status = 'published', published_at = now(), updated_at = now() where id = $1`, [id]);
  });
}

/** Eski bir sürüme dönüş: o sürümün kopyası yeni sürüm olarak yayımlanır (geçmiş korunur). */
export async function restoreVersion(id: number, actor: string): Promise<number> {
  const v = await getVersion(id);
  if (!v) throw new Error("Sürüm bulunamadı.");
  const db = await getDb();
  const r = await db.query<{ id: number }>(
    `insert into price_versions (data, status, note, based_on, created_by) values ($1::jsonb, 'draft', $2, $3, $4) returning id`,
    [JSON.stringify(v.data), `v${v.id} sürümüne geri dönüş`, v.id, actor]
  );
  const newId = Number(r.rows[0].id);
  await publishVersion(newId);
  return newId;
}

/**
 * Yayımlanan fiyatların siteye yansıması için yeniden derleme tetikler.
 * Üretimde: Vercel Deploy Hook (DEPLOY_HOOK_URL). Build öncesi betik yayımlanmış sürümü okur.
 */
export async function triggerRebuild(): Promise<{ triggered: boolean; message: string }> {
  const url = process.env.DEPLOY_HOOK_URL;
  if (!url) {
    return { triggered: false, message: "DEPLOY_HOOK_URL tanımlı değil; fiyatlar bir sonraki derlemede (deploy) siteye yansır." };
  }
  try {
    const res = await fetch(url, { method: "POST", cache: "no-store" });
    if (!res.ok) return { triggered: false, message: `Derleme tetiklenemedi (HTTP ${res.status}).` };
    return { triggered: true, message: "Yeniden derleme başlatıldı. Fiyatlar derleme bitince (genelde birkaç dakika) canlıda görünür." };
  } catch (e) {
    return { triggered: false, message: `Derleme tetiklenemedi: ${(e as Error).message}` };
  }
}
