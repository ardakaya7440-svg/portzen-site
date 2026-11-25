/**
 * 79 fiyat sayfası: DB'ye yazılan (sentetik) fiyat ile render edilen fiyat aynı olmalı.
 * A kümesi seed'lenir -> sayfada A değerleri var, B değerleri yok; sonra B seed'lenir (önbellek sıfırlanarak) -> tersi.
 * (Gerçek canlı site karşılaştırması çalışma zamanında scripts/fiyat-karsilastir.mjs ile yapılır; fixture'da gerçek fiyat YOKTUR.)
 */
import { describe, expect, it } from "vitest";
import { resetNextCache } from "./mocks/next-cache";
import { SEED_A, SEED_B, seedPublished } from "./helpers/db";
import { priceMultiset, renderHtml } from "./helpers/render";
import { loadAffectedPaths, loadRoute } from "./helpers/fiyat-sayfalari";
import { formatTL } from "@/data/pricing";

const paths = loadAffectedPaths();
const CAPS = ["30.000 TL", "100.000 TL", "250.000 TL"];

function values(d: unknown, out = new Set<string>()) {
  if (typeof d === "number") out.add(formatTL(d));
  else if (d && typeof d === "object") Object.values(d).forEach((v) => values(v, out));
  return out;
}
const A = values(SEED_A);
const B = values(SEED_B);

async function shown(seed: typeof SEED_A, path: string) {
  resetNextCache();
  await seedPublished(seed);
  const html = await renderHtml(await (await loadRoute(path)).page());
  return new Set(Object.keys(priceMultiset(html)).map((s) => s.replace(" / ay", "")));
}

describe("79 sayfa: render edilen fiyat = DB'ye yazılan fiyat", () => {
  it("79 sayfa listesi", () => expect(paths).toHaveLength(79));
  it("sentetik kümeler birbirinden ve limit sabitlerinden ayrık", () => {
    expect([...A].filter((x) => B.has(x) || CAPS.includes(x))).toEqual([]);
    expect([...B].filter((x) => CAPS.includes(x))).toEqual([]);
  });
  for (const p of paths) {
    it(p, async () => {
      const a = await shown(SEED_A, p);
      const b = await shown(SEED_B, p);
      const aHits = [...a].filter((s) => A.has(s));
      const bHits = [...b].filter((s) => B.has(s));
      expect(aHits.length, `${p}: A değeri görünmedi`).toBeGreaterThan(0);
      expect(bHits.length, `${p}: B değeri görünmedi`).toBeGreaterThan(0);
      expect([...a].filter((s) => B.has(s)), `${p}: A seed'inde B değeri`).toEqual([]);
      expect([...b].filter((s) => A.has(s)), `${p}: B seed'inde A değeri`).toEqual([]);
    });
  }
});
