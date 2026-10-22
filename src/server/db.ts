import "server-only";
import path from "node:path";
import { MIGRATIONS } from "./schema";

/**
 * Veritabanı erişimi.
 * - Üretim (Vercel): PORTZEN_DATABASE_URL zorunlu (Vercel → Storage → Neon, "PORTZEN" önekiyle bağlandı).
 *   Projede eskiden kalma bir DATABASE_URL olduğu için o ad bilerek KULLANILMAZ.
 * - Yerel önizleme: PORTZEN_DATABASE_URL yoksa diskte kalıcı PGlite (gerçek Postgres, WASM) kullanılır: .data/pglite
 *   PGlite tek süreçlidir; yalnızca yerel önizleme içindir. Vercel'de dosya sistemi geçici olduğundan
 *   orada PORTZEN_DATABASE_URL olmadan çalışmayı reddeder.
 */
export type Row = Record<string, unknown>;
export interface Db {
  query<T extends Row = Row>(sql: string, params?: unknown[]): Promise<{ rows: T[] }>;
  /** Tek bağlantı üzerinde işlem (BEGIN/COMMIT, hata olursa ROLLBACK) */
  tx<R>(fn: (q: Db["query"]) => Promise<R>): Promise<R>;
  kind: "postgres" | "pglite";
}

declare global {
  // eslint-disable-next-line no-var
  var __portzenDb: Promise<Db> | undefined;
}

async function connect(): Promise<Db> {
  const url = process.env.PORTZEN_DATABASE_URL;
  if (url) {
    const { Pool } = await import("pg");
    const local = /localhost|127\.0\.0\.1/.test(url);
    const pool = new Pool({
      connectionString: url,
      max: 5,
      ssl: local || /sslmode=disable/.test(url) ? undefined : { rejectUnauthorized: false }
    });
    return {
      kind: "postgres",
      query: async (sql, params) => {
        const r = await pool.query(sql, params as unknown[]);
        return { rows: r.rows };
      },
      tx: async (fn) => {
        const client = await pool.connect();
        try {
          await client.query("begin");
          const out = await fn(async (sql, params) => ({ rows: (await client.query(sql, params as unknown[])).rows }));
          await client.query("commit");
          return out;
        } catch (e) {
          await client.query("rollback");
          throw e;
        } finally {
          client.release();
        }
      }
    };
  }
  if (process.env.VERCEL) {
    throw new Error("PORTZEN_DATABASE_URL tanımlı değil. Üretimde kalıcı Postgres bağlantısı gerekir.");
  }
  const { PGlite } = await import("@electric-sql/pglite");
  const dir = process.env.PGLITE_DIR ?? path.join(process.cwd(), ".data", "pglite");
  const pg = new PGlite(dir);
  await pg.waitReady;
  return {
    kind: "pglite",
    query: async (sql, params) => {
      const r = await pg.query(sql, params as unknown[]);
      return { rows: r.rows as never[] };
    },
    tx: (fn) =>
      pg.transaction((t) => fn(async (sql, params) => ({ rows: (await t.query(sql, params as unknown[])).rows as never[] })))
  };
}

async function migrate(db: Db) {
  await db.query(`create table if not exists schema_migrations (id int primary key, applied_at timestamptz not null default now())`);
  const done = new Set((await db.query<{ id: number }>(`select id from schema_migrations`)).rows.map((r) => Number(r.id)));
  for (const m of MIGRATIONS) {
    if (done.has(m.id)) continue;
    await db.tx(async (q) => {
      for (const stmt of m.sql) await q(stmt);
      if (m.seed) await m.seed(q);
      await q(`insert into schema_migrations (id) values ($1)`, [m.id]);
    });
  }
}

export function getDb(): Promise<Db> {
  if (!globalThis.__portzenDb) {
    globalThis.__portzenDb = (async () => {
      const db = await connect();
      await migrate(db);
      return db;
    })().catch((e) => {
      globalThis.__portzenDb = undefined;
      throw e;
    });
  }
  return globalThis.__portzenDb;
}

/** Build aşamasında (next build) veritabanına bağlanılmaz; anlık görüntü (snapshot) kullanılır. */
export const IS_BUILD = process.env.NEXT_PHASE === "phase-production-build";
