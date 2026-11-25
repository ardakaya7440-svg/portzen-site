import seedA from "../fixtures/sentetik-fiyatlar-a.json";
import seedB from "../fixtures/sentetik-fiyatlar-b.json";
import type { PriceData } from "@/data/pricing";
import { getDb } from "@/server/db";

/**
 * SENTETİK fiyatlar (gerçek fiyat DEĞİL): A kümesi 1.117 × n, B kümesi 1.117 × n + 1. İki küme birbirinden ve
 * kodlanmış limitlerden ayrıktır; test bir sayfada hangi kümenin görüldüğünü ayırt edebilir.
 * Gerçek canlı ↔ yeni örnek karşılaştırması çalışma zamanında scripts/fiyat-karsilastir.mjs ile yapılır.
 */
export const SEED_A = seedA as unknown as PriceData;
export const SEED_B = seedB as unknown as PriceData;
export const LIVE = SEED_A; // geriye dönük ad (testlerde "DB'deki yayımlı sürüm")

/** Tabloyu temizleyip verilen (sentetik) veriyle tek bir yayımlanmış sürüm yazar. Yalnızca bellekteki PGlite. */
export async function seedPublished(data: PriceData = SEED_A) {
  const db = await getDb();
  await db.query(`delete from price_versions`);
  const r = await db.query<{ id: number }>(
    `insert into price_versions (data,status,note,published_at) values ($1::jsonb,'published','sentetik',now()) returning id`,
    [JSON.stringify(data)]
  );
  return Number(r.rows[0].id);
}

export const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v));
