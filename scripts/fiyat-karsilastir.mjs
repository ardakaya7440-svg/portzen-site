#!/usr/bin/env node
/**
 * Çalışan bir PORTZEN örneğinin fiyatlarını canlı siteyle (varsayılan https://portzenai.com) sayfa sayfa karşılaştırır.
 * Salt okuma: yalnızca GET (iki tarafa da en çok ~2 istek/sn). Hiçbir şey yazmaz.
 *
 *   node scripts/fiyat-karsilastir.mjs http://127.0.0.1:3400
 *   node scripts/fiyat-karsilastir.mjs http://127.0.0.1:3400 --paths tests/fixtures/fiyat-etkilenen-sayfalar.txt
 *   node scripts/fiyat-karsilastir.mjs http://127.0.0.1:3400 --all            # canlı sitemap'teki tüm yollar
 *   node scripts/fiyat-karsilastir.mjs http://127.0.0.1:3400 --live https://portzenai.com --delay 500
 *
 * Çıkarım (eski fiyat/run.sh ile aynı): HTML etiketleri satır sonuna çevrilir, '__next' içeren satırlar atılır,
 * "N.NNN TL[ / ay]" kalıpları sayılır. Ek olarak JSON-LD içindeki "price" değerleri ayrıca karşılaştırılır.
 * Çıkış kodu: 0 = hepsi aynı, 1 = fark var, 2 = bağlantı hatası.
 */
import fs from "node:fs";

const args = process.argv.slice(2);
const base = (args.find((a) => /^https?:\/\//.test(a)) ?? "").replace(/\/$/, "");
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : def;
};
if (!base) {
  console.error("Kullanım: node scripts/fiyat-karsilastir.mjs <taban-url> [--live URL] [--paths dosya | --all] [--delay ms]");
  process.exit(2);
}
const live = (opt("--live", "https://portzenai.com") ?? "").replace(/\/$/, "");
const delay = Number(opt("--delay", "500"));
const pathsFile = opt("--paths", "tests/fixtures/fiyat-etkilenen-sayfalar.txt");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url) {
  const r = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(30_000), headers: { "user-agent": "portzen-fiyat-karsilastir/1" } });
  return { status: r.status, body: await r.text() };
}

function prices(html) {
  const out = {};
  for (const line of html.replace(/<[^>]*>/g, "\n").split("\n")) {
    if (line.includes("__next")) continue;
    for (const m of line.match(/[0-9]{1,3}(\.[0-9]{3})* TL( \/ ay)?/g) ?? []) out[m] = (out[m] ?? 0) + 1;
  }
  return out;
}

function ldPrices(html) {
  const out = {};
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    for (const p of m[1].matchAll(/"price":\s*(\d+(?:\.\d+)?)/g)) out[p[1]] = (out[p[1]] ?? 0) + 1;
  }
  return out;
}

function diff(a, b) {
  const keys = [...new Set([...Object.keys(a), ...Object.keys(b)])].sort();
  return keys.filter((k) => (a[k] ?? 0) !== (b[k] ?? 0)).map((k) => `${k}: canlı=${a[k] ?? 0} yeni=${b[k] ?? 0}`);
}

async function pathList() {
  if (args.includes("--all")) {
    const sm = await get(`${live}/sitemap.xml`);
    return [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
      const p = m[1].replace(/^https?:\/\/[^/]+/, "");
      return p || "/";
    });
  }
  return fs.readFileSync(pathsFile, "utf8").split("\n").map((l) => l.trim().split("\t")[0]).filter(Boolean);
}

let bad = 0;
let err = 0;
const paths = await pathList();
console.log(`Karşılaştırma: ${live} (canlı)  ↔  ${base} (yeni)  · ${paths.length} sayfa`);
for (const p of paths) {
  try {
    const [a, b] = [await get(live + p), await get(base + p)];
    await sleep(delay);
    if (a.status !== b.status) {
      bad++;
      console.log(`FARK ${p}: HTTP canlı=${a.status} yeni=${b.status}`);
      continue;
    }
    const d = diff(prices(a.body), prices(b.body));
    const dl = diff(ldPrices(a.body), ldPrices(b.body));
    const neutral = /data-fiyat-yok/.test(b.body);
    if (d.length || dl.length || neutral) {
      bad++;
      console.log(`FARK ${p}${neutral ? "  [fiyat kaynağı okunamadı: tarafsız metin gösteriliyor]" : ""}`);
      for (const x of d) console.log(`   metin   ${x}`);
      for (const x of dl) console.log(`   json-ld ${x}`);
    }
  } catch (e) {
    err++;
    console.log(`HATA ${p}: ${e.message}`);
  }
}
console.log(`\nBitti: ${paths.length - bad - err} aynı, ${bad} farklı, ${err} hata.`);
process.exit(err ? 2 : bad ? 1 : 0);
