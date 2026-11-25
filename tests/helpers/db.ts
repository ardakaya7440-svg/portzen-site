import fixture from "../fixtures/canli-fiyatlar.json";
import type { PriceData } from "@/data/pricing";
import { getDb } from "@/server/db";

export const LIVE = fixture as unknown as PriceData;

/** Tabloyu temizleyip CANLI değerlerle (fixture) tek bir yayımlanmış sürüm yazar. Yalnızca bellekteki PGlite. */
export async function seedPublished(data: PriceData = LIVE) {
  const db = await getDb();
  await db.query(`delete from price_versions`);
  const r = await db.query<{ id: number }>(
    `insert into price_versions (data,status,note,published_at) values ($1::jsonb,'published','canli degerler',now()) returning id`,
    [JSON.stringify(data)]
  );
  return Number(r.rows[0].id);
}

export const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v));
