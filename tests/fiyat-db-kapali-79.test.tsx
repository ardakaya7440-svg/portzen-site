/**
 * DB erişilemezken 79 etkilenen sayfanın TÜMÜ: render olur (200 muadili), DB fiyatı yazmaz, JSON-LD'de Offer/price yok,
 * metadata'da tutar yok, fiyat gösteren sayfalarda tarafsız metin var.
 */
import fs from "node:fs";
import path from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import { resetNextCache } from "./mocks/next-cache";
import { LIVE, seedPublished } from "./helpers/db";
import { jsonLd, renderHtml, priceMultiset } from "./helpers/render";
import { loadLiveDiff, loadRoute } from "./helpers/fiyat-sayfalari";
import { formatTL } from "@/data/pricing";

const rows = loadLiveDiff();
const root = path.resolve(import.meta.dirname, "..");

/** Sayfanın kaynağındaki (yer tutucusuz) sabit TL rakamları: piyasa aralıkları, rakip fiyatları, örnekler. DB kapalıyken görünebilecek tek tutarlar bunlar + limit sabitleridir. */
function literalFigures(urlPath: string): Set<string> {
  const segs = urlPath.replace(/^\//, "").split("/");
  let file: string | null = null;
  if (segs[0] === "blog" && segs[1]) file = path.join(root, "content/blog", `${segs[1]}.md`);
  else if (segs.length === 2) file = path.join(root, "content/landings", segs[0], `${segs[1]}.json`);
  const out = new Set<string>();
  if (file && fs.existsSync(file)) {
    const raw = fs.readFileSync(file, "utf8").replace(/\{\{[^}]*\}\}/g, "");
    // "1,000 TL" / "12.499 TL" gibi yazımlar: tam metin ve son sayı grubu (priceMultiset eşleşmesi son gruba da denk gelebilir)
    for (const m of raw.matchAll(/[\d][\d.,]* ?(?:TL|₺)/g)) {
      const num = m[0].replace(/ ?(?:TL|₺)$/, "");
      out.add(`${num} TL`);
      out.add(`${num.split(/[.,]/).pop()} TL`);
      out.add(`${num.replace(/\D/g, "").slice(-3)} TL`); // düz yazılmış "5000 TL" → "000 TL"
    }
  }
  return out;
}
const CAPS = new Set([30000, 100000, 250000]); // reklam harcama sınırları: fiyat değil, kodda sabit

// DB'de bulunan her tutarın biçimli hali (sınırlar hariç)
const dbValues = new Set<string>();
(function walk(x: unknown) {
  if (typeof x === "number") {
    if (!CAPS.has(x)) dbValues.add(formatTL(x));
  } else if (x && typeof x === "object") Object.values(x).forEach(walk);
})(LIVE);

beforeAll(async () => {
  resetNextCache();
  await seedPublished();
  const dead = Promise.reject(new Error("Neon erişilemiyor (test)"));
  dead.catch(() => {});
  globalThis.__portzenDb = dead as never;
});

describe("DB kapalı: 79 sayfa fiyatsız ve sağlam", () => {
  for (const row of rows) {
    it(row.path, async () => {
      const r = await loadRoute(row.path);
      const html = await renderHtml(await r.page());
      const shown = Object.keys(priceMultiset(html)).map((s) => s.replace(" / ay", ""));
      // Görünen her tutar ya içerik dosyasındaki sabit (piyasa/örnek) rakam ya da kodlanmış limittir; başka kaynaktan tutar OLAMAZ
      const allowed = literalFigures(row.path);
      for (const c of CAPS) allowed.add(formatTL(c));
      const unexplained = shown.filter((s) => !allowed.has(s));
      expect(unexplained, `${row.path} açıklanamayan tutar (DB/kod fiyatı sızdı?)`).toEqual([]);

      const ld = JSON.stringify(jsonLd(html));
      expect(ld).not.toMatch(/"@type":"Offer"/);
      expect(ld).not.toMatch(/"price"/);

      const md = await r.metadata();
      expect(String(md?.description ?? "")).not.toMatch(/\d{1,3}(\.\d{3})* TL/);

      // canlıda DB fiyatı gösteren sayfa, DB kapalıyken tarafsız metin göstermeli
      const liveShowsDbPrice = Object.keys(row.live).some((s) => dbValues.has(s.replace(" / ay", "")));
      if (liveShowsDbPrice) expect(html.toLowerCase()).toMatch(/güncel fiyat (bilgisi )?için bizimle iletişime geçin|iletişime geçin/);
    });
  }
});
