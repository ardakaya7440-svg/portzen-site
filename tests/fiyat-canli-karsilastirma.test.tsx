import { beforeAll, describe, expect, it } from "vitest";
import fixture from "./fixtures/canli-fiyatlar.json";
import { getDb } from "@/server/db";
import { renderHtml, priceMultiset } from "./helpers/render";
import { loadLiveDiff, loadRoute } from "./helpers/fiyat-sayfalari";

const rows = loadLiveDiff();

beforeAll(async () => {
  const db = await getDb();
  await db.query(`insert into price_versions (data,status,note,published_at) values ($1::jsonb,'published','canli','2026-11-25')`, [JSON.stringify(fixture)]);
});

describe("79 etkilenen sayfa: DB fiyatı (canlı değerler) ile render edilen fiyatlar canlı site ile aynı", () => {
  it("79 sayfa listesi okundu", () => {
    expect(rows).toHaveLength(79);
  });
  for (const row of rows) {
    it(`${row.path}`, async () => {
      const r = await loadRoute(row.path);
      const html = await renderHtml(await r.page());
      const got = priceMultiset(html);
      expect(got).toEqual(row.live);
    });
  }
});
