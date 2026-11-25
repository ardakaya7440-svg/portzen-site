import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { PRICING_STRUCTURE, SINGLE_STRUCTURE } from "@/data/pricing";

/** scripts/fiyat-db-kontrol.mjs'in beklediği yapı, koddaki yapıyla aynı olmalı (üretmek için: UPDATE_FIYAT_YAPI=1 npx vitest run tests/fiyat-yapi.test.ts) */
function expected() {
  const families: Record<string, Record<string, string[]>> = {};
  for (const f of Object.values(PRICING_STRUCTURE)) {
    families[f.id] = {};
    for (const [tid, t] of Object.entries(f.tiers))
      families[f.id][tid] = ["price", ...(t.setupFee !== undefined ? ["setupFee"] : []), ...(t.maintenance !== undefined ? ["maintenance"] : [])];
  }
  const singles: Record<string, string[]> = {};
  for (const s of Object.values(SINGLE_STRUCTURE)) singles[s.id] = ["price", ...(s.setupFee !== undefined ? ["setupFee"] : []), ...(s.monthly !== undefined ? ["monthly"] : [])];
  return { families, singles };
}

describe("scripts/fiyat-yapi.json", () => {
  it("koddaki fiyat yapısıyla aynı", () => {
    const file = path.resolve(import.meta.dirname, "../scripts/fiyat-yapi.json");
    if (process.env.UPDATE_FIYAT_YAPI) fs.writeFileSync(file, JSON.stringify(expected(), null, 2) + "\n");
    expect(JSON.parse(fs.readFileSync(file, "utf8"))).toEqual(expected());
  });
});
