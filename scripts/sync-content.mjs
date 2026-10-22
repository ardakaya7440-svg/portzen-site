#!/usr/bin/env node
/**
 * Build öncesi (npm run build → prebuild) çalışır:
 *  1) Yayımlanmış fiyat sürümünü veritabanından okuyup pricing.published.json dosyasına yazar.
 *  2) Herkese açık içerik anlık görüntüsünü cms.snapshot.json dosyasına yazar.
 *
 * Nereye yazılır?
 *  - PORTZEN_DATABASE_URL varsa (gerçek veritabanı, ör. Vercel): src/data/ altındaki dosyalar güncellenir.
 *  - PORTZEN_DATABASE_URL yoksa (yerel önizleme, PGlite): yalnızca .data/generated/ altına yazılır.
 *    src/data/ altındaki dosyalara dokunulmaz; böylece yerelde denenen fiyat/içerik yanlışlıkla
 *    git'e veya canlıya taşınmaz. Önizleme derlemesi PZ_PREVIEW_DATA_DIR ile bu klasörü kullanır.
 * Veritabanına ulaşılamazsa mevcut dosyalar kullanılır.
 * Vercel'de PORTZEN_DATABASE_URL tanımlıyken okuma başarısız olursa build durur: eski fiyatla yayın yapılmaz.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const local = !process.env.PORTZEN_DATABASE_URL;
const outDir = local ? path.join(root, ".data", "generated") : path.join(root, "src", "data");
const PRICES = path.join(outDir, "pricing.published.json");
const SNAP = path.join(outDir, "cms.snapshot.json");
const strict = Boolean(process.env.VERCEL && process.env.PORTZEN_DATABASE_URL);

// Yerel modda çıktı klasörü her zaman eksiksiz olsun: varsayılanlarla başlat
if (local) {
  fs.mkdirSync(outDir, { recursive: true });
  for (const f of ["pricing.published.json", "cms.snapshot.json"]) {
    const dst = path.join(outDir, f);
    if (!fs.existsSync(dst)) fs.copyFileSync(path.join(root, "src", "data", f), dst);
  }
}

async function open() {
  if (process.env.PORTZEN_DATABASE_URL) {
    const { default: pg } = await import("pg");
    const local = /localhost|127\.0\.0\.1/.test(process.env.PORTZEN_DATABASE_URL);
    const pool = new pg.Pool({
      connectionString: process.env.PORTZEN_DATABASE_URL,
      max: 1,
      ssl: local || /sslmode=disable/.test(process.env.PORTZEN_DATABASE_URL) ? undefined : { rejectUnauthorized: false }
    });
    return { q: (s, p) => pool.query(s, p), close: () => pool.end() };
  }
  if (process.env.VERCEL) return null; // Vercel'de yerel veritabanı yok
  const dir = process.env.PGLITE_DIR ?? path.join(root, ".data", "pglite");
  if (!fs.existsSync(dir)) return null;
  const { PGlite } = await import("@electric-sql/pglite");
  const db = new PGlite(dir);
  await db.waitReady;
  return { q: (s, p) => db.query(s, p), close: () => db.close() };
}

const ref = (id, kind, w, h) => (id ? { id: String(id), kind: kind === "video" ? "video" : "image", width: w == null ? null : Number(w), height: h == null ? null : Number(h) } : null);
const d10 = (v) => (v == null ? null : v instanceof Date ? v.toISOString().slice(0, 10) : String(v).slice(0, 10));

async function main() {
  let db;
  try {
    db = await open();
  } catch (e) {
    if (strict) throw e;
    console.warn("[sync-content] veritabanı açılamadı, mevcut dosyalar kullanılacak:", e.message);
    return;
  }
  if (!db) {
    console.log("[sync-content] yerel veritabanı yok; mevcut fiyat ve içerik dosyaları kullanılacak.");
    return;
  }
  try {
    const exists = await db.q(`select to_regclass('public.price_versions') as t`);
    if (!exists.rows[0]?.t) {
      console.log("[sync-content] tablolar henüz yok; mevcut dosyalar kullanılacak.");
      return;
    }
    const pub = (await db.q(`select id, data, note, published_at from price_versions where status = 'published'`)).rows[0];
    if (pub) {
      const data = typeof pub.data === "string" ? JSON.parse(pub.data) : pub.data;
      const out = { version: Number(pub.id), publishedAt: pub.published_at ? new Date(pub.published_at).toISOString() : null, note: pub.note ?? null, data };
      fs.writeFileSync(PRICES, JSON.stringify(out, null, 2) + "\n");
      console.log(`[sync-content] yayımlanmış fiyat sürümü v${out.version} → ${path.relative(root, PRICES)}`);
    }
    const brands = (await db.q(`select b.id, b.name, b.kind, b.url, m.id as mid, m.kind as mkind, m.width, m.height from brands b left join media m on m.id = b.logo_id where b.visible = true and b.logo_id is not null order by b.kind, b.sort, b.id`)).rows;
    const tests = (await db.q(`select t.*, m.id as mid, m.kind as mkind, m.width, m.height from testimonials t left join media m on m.id = t.avatar_id where t.status = 'published' order by t.sort, t.id`)).rows;
    const works = (await db.q(`select w.*, m.id as mid, m.kind as mkind, m.width, m.height from works w left join media m on m.id = w.cover_media_id where w.status = 'published' order by w.sort, w.id`)).rows;
    const wm = (await db.q(`select wm.work_id, m.id, m.kind, m.width, m.height from work_media wm join media m on m.id = wm.media_id join works w on w.id = wm.work_id and w.status = 'published' order by wm.sort, m.created_at`)).rows;
    const by = new Map();
    for (const r of wm) by.set(Number(r.work_id), [...(by.get(Number(r.work_id)) ?? []), ref(r.id, r.kind, r.width, r.height)]);
    const all = works.map((r) => ({
      id: Number(r.id), kind: r.kind, title: r.title, summary: r.summary ?? null, category: r.category, serviceKey: r.service_key ?? null,
      alt: r.alt ?? null, projectUrl: r.project_url ?? null, videoUrl: r.video_url ?? null, isDemo: Boolean(r.is_demo),
      cover: ref(r.mid, r.mkind, r.width, r.height), media: by.get(Number(r.id)) ?? []
    }));
    const snap = {
      brands: brands.map((r) => ({ id: Number(r.id), name: r.name, kind: r.kind, url: r.url ?? null, logo: ref(r.mid, r.mkind, r.width, r.height) })),
      testimonials: tests.map((r) => ({
        id: Number(r.id), body: r.body, displayName: r.display_name, company: r.company ?? null, title: r.title ?? null,
        avatar: ref(r.mid, r.mkind, r.width, r.height), reviewDate: d10(r.review_date), rating: r.rating == null ? null : Number(r.rating),
        source: r.source, sourceUrl: r.source_url ?? null
      })),
      works: all.filter((w) => w.kind === "work"),
      services: all.filter((w) => w.kind === "service")
    };
    fs.writeFileSync(SNAP, JSON.stringify(snap, null, 2) + "\n");
    console.log(`[sync-content] içerik: ${snap.brands.length} marka, ${snap.testimonials.length} yorum, ${snap.works.length} iş, ${snap.services.length} hizmet görseli.`);
  } finally {
    await db.close();
  }
}

main().catch((e) => {
  console.error("[sync-content] HATA:", e);
  process.exit(strict ? 1 : 0);
});
