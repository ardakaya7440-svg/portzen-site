#!/usr/bin/env node
/**
 * SALT OKUMA: Neon'daki YAYIMLANMIŞ fiyat sürümünün siteye yetip yetmediğini denetler (hiçbir şey yazmaz).
 *   PORTZEN_DATABASE_URL=... node scripts/fiyat-db-kontrol.mjs
 * Beklenen yapı scripts/fiyat-yapi.json dosyasındadır (tests/fiyat-koruma.test.ts kod yapısıyla eşitliğini doğrular).
 * Eksik/geçersiz kalem: o kalem sitede fiyatsız ("Güncel fiyat bilgisi için bizimle iletişime geçin") görünür — yayımlamadan önce
 * admin panelinde (Fiyatlar → yeni taslak) tamamlanmalıdır. Parola veya URL ekrana yazılmaz.
 * Çıkış kodu: 0 = tam, 1 = eksik/geçersiz kalem var, 2 = bağlantı/okuma hatası.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const url = process.env.PORTZEN_DATABASE_URL;
if (!url) {
  console.error("PORTZEN_DATABASE_URL tanımlı değil.");
  process.exit(2);
}
const shape = JSON.parse(fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "fiyat-yapi.json"), "utf8"));
const local = /localhost|127\.0\.0\.1/.test(url);
const pool = new pg.Pool({ connectionString: url, max: 1, connectionTimeoutMillis: 8000, ssl: local || /sslmode=disable/.test(url) ? undefined : { rejectUnauthorized: false } });
const ok = (v) => Number.isInteger(v) && v > 0 && v <= 10_000_000;
try {
  await pool.query("begin read only");
  const r = (await pool.query(`select id, status, published_at, data from price_versions where status = 'published'`)).rows[0];
  await pool.query("rollback");
  if (!r) {
    console.log("Yayımlanmış fiyat sürümü YOK: tüm sayfalar fiyatsız görünür.");
    process.exit(1);
  }
  const data = typeof r.data === "string" ? JSON.parse(r.data) : r.data;
  console.log(`Yayımlanmış sürüm: v${r.id} (${r.published_at ? new Date(r.published_at).toISOString() : "?"})`);
  const missing = [];
  for (const [fid, f] of Object.entries(shape.families))
    for (const [tid, fields] of Object.entries(f))
      for (const field of fields) if (!ok(data?.families?.[fid]?.[tid]?.[field])) missing.push(`families/${fid}/${tid}/${field}`);
  for (const [sid, fields] of Object.entries(shape.singles))
    for (const field of fields) if (!ok(data?.singles?.[sid]?.[field])) missing.push(`singles/${sid}/${field}`);
  if (missing.length) {
    console.log(`EKSİK/GEÇERSİZ ${missing.length} kalem (bu kalemler sitede fiyatsız görünür):`);
    for (const m of missing) console.log("  - " + m);
    process.exit(1);
  }
  console.log("Tüm paket ve hizmet kalemleri tam.");
} catch (e) {
  console.error("Okuma hatası:", e.message);
  process.exit(2);
} finally {
  await pool.end().catch(() => {});
}
