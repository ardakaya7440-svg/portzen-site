/**
 * "Fiyat kaynağı yok" durumlarında HİÇBİR paket tutarı görünmemeli:
 *  (a) çalışma anında DB erişilemiyor, (b) Docker build aşaması (NEXT_PHASE=phase-production-build, DB yok).
 * İstisna: reklam harcama sınırları (30.000 / 100.000 / 250.000 TL) ve AI yanıt kotaları. Bunlar kodda sabit PAKET KAPSAMI
 * limitleridir (DB'deki fiyat sürümünde yoktur, admin düzenleyemez); fiyat değildir ve bu testte açıkça izin listesindedir.
 * Aşağıdaki desen sayfa HTML'inin TAMAMINDA (kartlar, SSS, JSON-LD) aranır.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { resetNextCache } from "./mocks/next-cache";
import { SEED_A, seedPublished } from "./helpers/db";
import { renderHtml } from "./helpers/render";
import { loadRoute } from "./helpers/fiyat-sayfalari";
import { getDb } from "@/server/db";

const AMOUNT = /\d{1,3}(?:\.\d{3})+\s?(?:TL|₺)/g;
const LIMITS = new Set(["30.000 TL", "100.000 TL", "250.000 TL"]);
const ROUTES = ["/fiyatlar", "/sosyal-medya-yonetimi", "/sosyal-medya-ajansi", "/meta-reklam-ajansi", "/", "/crm-otomasyonu", "/online-is-kurma-paketi"];

function amounts(html: string): string[] {
  const text = html.replace(/<[^>]*>/g, "\n");
  return (text.match(AMOUNT) ?? []).map((m) => m.replace(/\s/g, " ")).filter((m) => !LIMITS.has(m));
}

let realDb: unknown;
afterEach(() => {
  if (realDb) globalThis.__portzenDb = realDb as never;
  vi.resetModules();
  delete process.env.NEXT_PHASE;
});

describe("fiyat kaynağı yok: tutar YOK", () => {
  it("DB erişilemiyor (çalışma anı)", async () => {
    await getDb();
    realDb = globalThis.__portzenDb;
    resetNextCache();
    await seedPublished(); // DB'de fiyat olsa bile erişilemiyorsa görünmemeli
    const dead = Promise.reject(new Error("db yok (test)"));
    dead.catch(() => {});
    globalThis.__portzenDb = dead as never;
    for (const r of ROUTES) {
      const html = await renderHtml(await (await loadRoute(r)).page());
      expect(amounts(html), r).toEqual([]);
    }
  });

  it("Docker build aşaması (DB yok, NEXT_PHASE=phase-production-build)", async () => {
    await getDb();
    realDb = globalThis.__portzenDb;
    resetNextCache();
    await seedPublished(); // build'de DB'de veri olsa bile okunmamalı
    vi.resetModules();
    process.env.NEXT_PHASE = "phase-production-build";
    for (const r of ROUTES) {
      const html = await renderHtml(await (await loadRoute(r)).page());
      expect(amounts(html), r).toEqual([]);
      if (r === "/fiyatlar") expect(html).toContain("Güncel fiyat bilgisi için bizimle iletişime geçin");
    }
  });

  it("DB varken yalnızca DB değerleri görünür ve sürüm işareti yazılır (data-fiyat-surum)", async () => {
    await getDb();
    realDb = globalThis.__portzenDb;
    globalThis.__portzenDb = realDb as never;
    resetNextCache();
    const id = await seedPublished(SEED_A);
    const html = await renderHtml(await (await loadRoute("/sosyal-medya-yonetimi")).page());
    expect(html).toContain(`data-fiyat-surum="${id}"`);
    const allowed = new Set<string>();
    const walk = (x: unknown) => {
      if (typeof x === "number") allowed.add(`${String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} TL`);
      else if (x && typeof x === "object") Object.values(x).forEach(walk);
    };
    walk(SEED_A);
    // türetilmiş toplamlar (ilk ay vb.) da DB'den hesaplanır; burada tek tek DB değeri olmayanlar yalnız toplamlardır
    const stray = amounts(html).filter((a) => !allowed.has(a));
    expect(stray).toEqual([]);
  });
});
