#!/usr/bin/env node
/**
 * KESİNLİKLE SALT OKUMA: Neon'daki YAYIMLANMIŞ fiyat sürümünün, sitedeki herhangi bir sayfanın kullandığı HER fiyat anahtarını
 * içerip içermediğini denetler. Yalnızca tek bir SELECT çalıştırır; bağlantı `default_transaction_read_only=on` ile açılır ve
 * sorgu `BEGIN READ ONLY` işleminde (SET TRANSACTION READ ONLY eşdeğeri) yapılır: veritabanı yazmayı reddeder.
 * Çıktı yalnızca anahtar yollarını ve VAR/EKSİK durumunu yazar (tutar, bağlantı adresi, parola YAZILMAZ).
 *
 * Çalıştırma (üretim konteynerinde; node ve pg mevcut, env konteynerin kendisinden gelir):
 *   docker exec <konteyner> node scripts/fiyat-db-kontrol.mjs
 *   (Coolify: uygulamanın Terminal sekmesinden `node scripts/fiyat-db-kontrol.mjs`)
 * Yerelde: PORTZEN_DATABASE_URL=... node scripts/fiyat-db-kontrol.mjs
 * Beklenen yapı scripts/fiyat-yapi.json'dadır (tests/fiyat-yapi.test.ts kodla eşitliğini doğrular).
 * Çıkış kodu: 0 = her anahtar var ve geçerli (>0 tam sayı); 1 = eksik/geçersiz anahtar ya da yayımlı sürüm yok; 2 = bağlantı/okuma hatası.
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
const pool = new pg.Pool({ connectionString: url, max: 1, connectionTimeoutMillis: 8000, options: "-c default_transaction_read_only=on", ssl: local || /sslmode=disable/.test(url) ? undefined : { rejectUnauthorized: false } });
const ok = (v) => Number.isInteger(v) && v > 0 && v <= 10_000_000;
try {
  await pool.query("begin read only");
  await pool.query("set transaction read only");
  const r = (await pool.query(`select id, status, published_at, data from price_versions where status = 'published'`)).rows[0];
  await pool.query("rollback");
  if (!r) {
    console.log("SONUÇ: yayımlanmış fiyat sürümü YOK: tüm anahtarlar eksik, sayfalar fiyatsız görünür.");
    process.exit(1);
  }
  const data = typeof r.data === "string" ? JSON.parse(r.data) : r.data;
  console.log(`Yayımlanmış sürüm: v${r.id}`);
  const missing = [];
  let total = 0;
  const check = (key, v) => {
    total++;
    const good = ok(v);
    console.log(`${good ? "VAR  " : "EKSİK"} ${key}`);
    if (!good) missing.push(key);
  };
  for (const [fid, f] of Object.entries(shape.families))
    for (const [tid, fields] of Object.entries(f)) for (const field of fields) check(`families/${fid}/${tid}/${field}`, data?.families?.[fid]?.[tid]?.[field]);
  for (const [sid, fields] of Object.entries(shape.singles)) for (const field of fields) check(`singles/${sid}/${field}`, data?.singles?.[sid]?.[field]);
  if (missing.length) {
    console.log(`\nSONUÇ: ${missing.length}/${total} anahtar EKSİK/GEÇERSİZ (bu kalemler sitede fiyatsız görünür).`);
    process.exit(1);
  }
  console.log(`\nSONUÇ: ${total}/${total} anahtar tam.`);
} catch (e) {
  // Hata iletisi bağlantı adresi/sunucu adı içerebilir; yalnızca kod/ad yazılır
  console.error("Okuma hatası:", e.code ?? e.name);
  process.exit(2);
} finally {
  await pool.end().catch(() => {});
}
