/**
 * Fiyat tek kaynağı: DB → getPrices → sayfalar; admin yayımla → etiket geçersiz → yeni fiyat; DB kapalıyken fiyatsız sayfa.
 * Gerçek Neon'a bağlanılmaz: bellekte PGlite; next/cache tests/mocks/next-cache.ts ile taklit edilir.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cacheCalls, resetNextCache, updateTag } from "./mocks/next-cache";
import { LIVE, clone, seedPublished } from "./helpers/db";
import { jsonLd, renderHtml, priceMultiset } from "./helpers/render";
import { loadRoute } from "./helpers/fiyat-sayfalari";
import { getDb } from "@/server/db";
import { PRICE_CONTACT_TEXT, formatTL } from "@/data/pricing";
import * as prices from "@/server/prices";
import { PRICE_TAG, getPrices } from "@/server/price-source";

// Admin sunucu eylemi: oturum/denetim ve yönlendirme taklit edilir, fiyat mantığı GERÇEK kullanılır
vi.mock("@/server/auth", () => ({
  requireAdmin: async () => ({ sub: "test-admin" }),
  audit: async () => {},
  attemptLogin: async () => ({ ok: true }),
  logout: async () => {}
}));
vi.mock("next/navigation", async (orig) => ({
  ...(await orig<typeof import("next/navigation")>()),
  redirect: (url: string) => {
    throw Object.assign(new Error("NEXT_REDIRECT"), { url });
  }
}));

const actions = await import("../app/admin/actions");

async function runAction(fn: (fd: FormData) => Promise<unknown>, fields: Record<string, string>): Promise<string | undefined> {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.set(k, v);
  try {
    await fn(fd);
  } catch (e) {
    if ((e as Error).message === "NEXT_REDIRECT") return (e as { url: string }).url;
    throw e;
  }
}

let realDb: Promise<unknown>;
beforeEach(async () => {
  resetNextCache();
  await getDb();
  realDb = globalThis.__portzenDb!;
});
afterEach(() => {
  globalThis.__portzenDb = realDb as never;
  vi.useRealTimers();
});

async function breakDb() {
  const dead = Promise.reject(new Error("Neon erişilemiyor (test)"));
  dead.catch(() => {});
  globalThis.__portzenDb = dead as never;
}

describe("getPrices: tek kaynak ve önbellek", () => {
  it("DB'deki yayımlı sürümü okur ve canlı değerleri döner", async () => {
    await seedPublished();
    const p = await getPrices();
    expect(p.available).toBe(true);
    expect(p.PRICING["sosyal-medya"].tiers.buyume.price).toBe(24900);
    expect(p.PRICING["reklam-yonetimi"].tiers.baslangic.price).toBe(3000);
    expect(p.PRICING["is-otomasyonu"].tiers.baslangic.maintenance).toBe(4000);
    expect(p.PRICING["is-otomasyonu"].tiers.buyume.maintenance).toBe(6000);
    expect(p.familyPriceSummary("sosyal-medya")).toContain("Büyüme 24.900 TL / ay");
  });

  it("ikinci okuma önbellekten gelir: veritabanına sorgu gitmez", async () => {
    await seedPublished();
    await getPrices();
    const db = await getDb();
    const orig = db.query;
    let n = 0;
    db.query = (async (...a: Parameters<typeof orig>) => {
      n++;
      return orig(...a);
    }) as typeof orig;
    try {
      for (let i = 0; i < 5; i++) await getPrices();
    } finally {
      db.query = orig;
    }
    expect(n).toBe(0);
    expect(cacheCalls.filter((c) => c.hit).length).toBeGreaterThanOrEqual(5);
  });

  it("DB'de olmayan kalem için tutar uydurmaz (kod varsayılanı yok)", async () => {
    const partial = clone(LIVE);
    delete (partial.families as Record<string, unknown>)["online-is-paketi"];
    await seedPublished(partial);
    const p = await getPrices();
    expect(p.available).toBe(true);
    expect(Number.isNaN(p.PRICING["online-is-paketi"].tiers.baslangic.price)).toBe(true);
    const html = await renderHtml(await (await loadRoute("/online-is-kurma-paketi")).page());
    expect(html).toContain(PRICE_CONTACT_TEXT);
    expect(html).not.toContain("10.400 TL");
    expect(JSON.stringify(jsonLd(html))).not.toContain('"Offer"');
  });
});

describe("Admin yayımla: derleme/deploy olmadan yeni fiyat, etiket geçersiz kılınır", () => {
  it("taslak kaydı canlıyı değiştirmez; yayımla 'fiyatlar' etiketini geçersiz kılar ve sayfa yeni fiyatı gösterir", async () => {
    const v1 = await seedPublished();
    const before = await renderHtml(await (await loadRoute("/sosyal-medya-yonetimi")).page());
    expect(before).toContain("24.900 TL / ay");

    // Admin akışı: yayındakinden taslak → fiyatı değiştir → kaydet (admin sunucu eyleminin kullandığı işlevler)
    const draftId = await prices.createDraft(v1, "test-admin");
    const changed = clone(LIVE);
    changed.families["sosyal-medya"].buyume.price = 26900;
    expect(await prices.saveDraft(draftId, changed, "test")).toEqual([]);

    // Henüz yayımlanmadı: önbellekteki canlı fiyat aynı kalır
    expect((await getPrices()).PRICING["sosyal-medya"].tiers.buyume.price).toBe(24900);
    expect(updateTag).not.toHaveBeenCalled();

    // Yayımla (gerçek admin eylemi)
    const url = await runAction(actions.publishPriceAction, { id: String(draftId) });
    expect(url).toContain("ok=");
    expect(updateTag).toHaveBeenCalledWith(PRICE_TAG);

    const p = await getPrices();
    expect(p.version).toBe(draftId);
    expect(p.PRICING["sosyal-medya"].tiers.buyume.price).toBe(26900);
    const after = await renderHtml(await (await loadRoute("/sosyal-medya-yonetimi")).page());
    expect(after).toContain("26.900 TL / ay");
    expect(after).not.toContain("24.900 TL / ay");
    expect(await (await (await loadRoute("/fiyatlar")).metadata())?.description).toBeTruthy();
    // JSON-LD Offer fiyatı aynı kaynaktan (Offer üreten sayfa: /sosyal-medya-ajansi)
    const ajans = await renderHtml(await (await loadRoute("/sosyal-medya-ajansi")).page());
    const offers = JSON.stringify(jsonLd(ajans));
    expect(offers).toContain('"price":26900');
    expect(offers).not.toContain('"price":24900');
    // generateMetadata da aynı kaynaktan
    const md = await (await loadRoute("/fiyatlar")).metadata();
    expect(String(md?.description)).toContain("aylık");
  });

  it("eski sürüme dönüş de etiketi geçersiz kılar", async () => {
    const v1 = await seedPublished();
    const d = await prices.createDraft(v1, "t");
    const changed = clone(LIVE);
    changed.singles["landing-page"].price = 6500;
    await prices.saveDraft(d, changed, null);
    await runAction(actions.publishPriceAction, { id: String(d) });
    expect((await getPrices()).SINGLE["landing-page"].price).toBe(6500);
    updateTag.mockClear();
    const url = await runAction(actions.restorePriceAction, { id: String(v1) });
    expect(url).toContain("ok=");
    expect(updateTag).toHaveBeenCalledWith(PRICE_TAG);
    expect((await getPrices()).SINGLE["landing-page"].price).toBe(5900);
  });

  it("DEPLOY_HOOK_URL tanımlı olsa bile fiyat akışı HTTP isteği atmaz", async () => {
    process.env.DEPLOY_HOOK_URL = "http://127.0.0.1:9/hook";
    const spy = vi.spyOn(globalThis, "fetch");
    try {
      const v1 = await seedPublished();
      const d = await prices.createDraft(v1, "t");
      await runAction(actions.publishPriceAction, { id: String(d) });
      expect(spy).not.toHaveBeenCalled();
    } finally {
      spy.mockRestore();
      delete process.env.DEPLOY_HOOK_URL;
    }
  });
});

describe("DB erişilemiyor: fiyatsız ama sağlam sayfa", () => {
  it("getPrices fiyat yok kitabı döner; hata kısa ömürlü işaretlenir ve DB dönünce fiyat geri gelir", async () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    await seedPublished();
    await breakDb();
    const down = await getPrices();
    expect(down.available).toBe(false);
    expect(down.version).toBeNull();
    expect(Number.isNaN(down.PRICING["sosyal-medya"].tiers.buyume.price)).toBe(true);
    // Başarısızlık uzun önbelleğe ALINMAZ: kısa (5 sn) "erişilemedi" kaydı + aynı etiket
    const marker = cacheCalls.find((c) => c.keys[0] === "fiyatlar-erisilemedi-v1");
    expect(marker?.revalidate).toBe(5);
    expect(marker?.tags).toContain(PRICE_TAG);

    // DB döner; kısa devre süresi (5 sn) geçince fiyat kendiliğinden gelir (servis yeniden başlatma yok)
    globalThis.__portzenDb = realDb as never;
    vi.setSystemTime(Date.now() + 6000);
    // "erişilemedi" kaydı da 5 sn sonra sona erdiği için sayfa yeniden üretilir
    const up = await getPrices();
    expect(up.available).toBe(true);
    expect(up.PRICING["sosyal-medya"].tiers.buyume.price).toBe(24900);
  });

  it("build aşaması: veritabanına dokunmaz, fiyatsız döner", async () => {
    vi.resetModules();
    process.env.NEXT_PHASE = "phase-production-build";
    globalThis.__portzenDb = undefined;
    try {
      const src = await import("@/server/price-source");
      const p = await src.getPrices();
      expect(p.available).toBe(false);
      expect(globalThis.__portzenDb).toBeUndefined(); // hiç bağlantı denenmedi
    } finally {
      delete process.env.NEXT_PHASE;
      globalThis.__portzenDb = realDb as never;
      vi.resetModules();
    }
  });

  it("sayfa 200 render olur: tutar yok, tarafsız metin + CTA var, JSON-LD'de Offer/price yok, metadata'da tutar yok", async () => {
    await seedPublished();
    await breakDb();
    for (const route of ["/", "/fiyatlar", "/sosyal-medya-yonetimi", "/online-is-kurma-paketi", "/yapay-zeka-call-center"]) {
      const r = await loadRoute(route);
      const html = await renderHtml(await r.page());
      const ld = JSON.stringify(jsonLd(html));
      expect(ld, route).not.toMatch(/"@type":"Offer"/);
      expect(ld, route).not.toMatch(/"price"/);
      expect(ld.length, `${route} JSON-LD (SEO işaretlemesi) yerinde`).toBeGreaterThan(50);
      const md = await r.metadata();
      expect(String(md?.description ?? ""), route).not.toMatch(/\d TL/);
      if (route !== "/") expect(html, route).toContain("iletişime geçin");
      // DB fiyatı olarak yazılabilecek hiçbir tutar bulunmamalı (kota/limit sabitleri hariç)
      const shown = Object.keys(priceMultiset(html));
      for (const s of shown) {
        expect(["30.000 TL", "100.000 TL", "250.000 TL"], `${route}: ${s}`).toContain(s);
      }
    }
  });

  it("fiyat bilgisi iletişim CTA'sı ile birlikte gelir (WhatsApp + form bağlantısı)", async () => {
    await breakDb();
    const html = await renderHtml(await (await loadRoute("/fiyatlar")).page());
    expect(html).toContain("wa.me/");
    expect(html).toContain("/iletisim?hizmet=");
    expect(html).toContain(formatTL(30000)); // sınır sabiti fiyat değildir
  });
});
