#!/usr/bin/env node
/**
 * Dağıtım sonrası ısıtma (salt okuma GET): build sırasında veritabanı olmadığından sayfalar fiyatsız üretilir ve 5 sn sonra
 * bayat sayılır; ilk ziyaretçi bayat sayfayı görmesin diye tüm sayfalara bir kez istek atılır (arka planda yeniden üretilir),
 * kısa bekleme sonrası ikinci turda fiyatlı sürüm doğrulanır.
 *
 *   node scripts/fiyat-isit.mjs http://127.0.0.1:3400
 *   node scripts/fiyat-isit.mjs http://127.0.0.1:3400 --paths dosya.txt --delay 150
 *
 * Çıkış kodu: 0 = tüm sayfalar fiyatlı, 3 = hâlâ "fiyat kaynağı okunamadı" gösteren sayfa var (DB erişimini kontrol edin).
 */
import fs from "node:fs";

const args = process.argv.slice(2);
const base = (args.find((a) => /^https?:\/\//.test(a)) ?? "").replace(/\/$/, "");
const opt = (n, d) => (args.includes(n) ? args[args.indexOf(n) + 1] : d);
if (!base) {
  console.error("Kullanım: node scripts/fiyat-isit.mjs <taban-url> [--paths dosya] [--delay ms]");
  process.exit(2);
}
const delay = Number(opt("--delay", "150"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const get = async (p) => {
  const r = await fetch(base + p, { signal: AbortSignal.timeout(30_000), headers: { "user-agent": "portzen-fiyat-isit/1" } });
  return { status: r.status, body: await r.text() };
};

async function paths() {
  const f = opt("--paths", null);
  if (f) return fs.readFileSync(f, "utf8").split("\n").map((l) => l.trim().split("\t")[0]).filter(Boolean);
  const sm = await get("/sitemap.xml");
  return [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/^https?:\/\/[^/]+/, "") || "/");
}

const list = await paths();
console.log(`Isıtma: ${list.length} sayfa (${base})`);
for (const p of list) {
  try {
    await get(p);
  } catch (e) {
    console.log(`HATA ${p}: ${e.message}`);
  }
  await sleep(delay);
}
await sleep(7000); // bayat sayfaların arka plan yenilemesi bitsin
let neutral = 0;
for (const p of list) {
  try {
    const r = await get(p);
    if (r.status !== 200) console.log(`HTTP ${r.status} ${p}`);
    if (/data-fiyat-yok/.test(r.body)) {
      neutral++;
      console.log(`FİYATSIZ ${p}`);
    }
  } catch (e) {
    console.log(`HATA ${p}: ${e.message}`);
  }
  await sleep(delay);
}
console.log(neutral ? `\n${neutral} sayfa hâlâ fiyatsız (DB/yayımlı sürüm kontrol edilmeli).` : "\nTüm sayfalar fiyatlı.");
process.exit(neutral ? 3 : 0);
