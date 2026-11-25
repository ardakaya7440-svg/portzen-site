import "server-only";
import { cache } from "react";
import { unstable_cache, updateTag } from "next/cache";
import { type PriceData, type Prices, buildPrices } from "@/data/pricing";
import { IS_BUILD } from "./db";
import { getPublished, publishVersion, restoreVersion } from "./prices";

/**
 * FİYAT TEK KAYNAĞI — Neon veritabanı (price_versions, status = 'published').
 *
 * Tüm sayfalar (paket kartları, karşılaştırma tabloları, SSS metinleri, <title>/description, JSON-LD) fiyatı
 * YALNIZCA getPrices() ile alır. Repoda başka hiçbir tutar yoktur.
 *
 * Önbellek (ISR benzeri, sunucu yükü düşük):
 *  - Yayımlanmış sürüm `unstable_cache` ile "fiyatlar" etiketiyle saklanır (en çok 1 saat). Sayfa başına
 *    veritabanı sorgusu YOKTUR; bu etiketi kullanan sayfaların tam-rota önbelleği de aynı etikete bağlanır.
 *  - Admin yayımla/geri al işlemi updateTag("fiyatlar") çağırır → etiketli veri ve sayfalar anında geçersiz olur,
 *    ilk istekte yeniden üretilir. Commit, build, deploy veya servis yeniden başlatma GEREKMEZ.
 *
 * Veritabanı okunamazsa (ya da build sırasında, Docker build'inde veritabanı yoktur):
 *  - getPrices() "fiyat yok" kitabı döner (available=false): sayfalar tutar yerine tarafsız metin + iletişim CTA'sı
 *    gösterir, JSON-LD/metadata'ya fiyat yazılmaz, sayfa 200 döner.
 *  - Hata KALICI önbelleğe alınmaz: "fiyatlar-erisilemedi" kaydı (5 sn) sayfanın yeniden doğrulama süresini 5 sn'ye
 *    indirir ve aynı etikete bağlıdır; veritabanı dönünce sayfalar kendiliğinden fiyatla yenilenir.
 */
export const PRICE_TAG = "fiyatlar";
/** Başarılı okumanın önbellek süresi (sn). Admin değişikliği updateTag ile anında yansır; bu yalnızca güvenlik ağıdır. */
export const PRICE_REVALIDATE_SECONDS = 3600;
/** Hata durumunda sayfaların yeniden doğrulama süresi (sn) */
export const PRICE_FAILURE_REVALIDATE_SECONDS = 5;
const DB_TIMEOUT_MS = 8000;

export interface PriceSnapshot {
  version: number;
  publishedAt: string | null;
  data: PriceData;
}

let failedAt = 0;
let lastError: Error | null = null;

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  let t: ReturnType<typeof setTimeout>;
  const timer = new Promise<never>((_, rej) => {
    t = setTimeout(() => rej(new Error("Fiyat veritabanı zaman aşımı")), ms);
  });
  return Promise.race([p, timer]).finally(() => clearTimeout(t));
}

/** Veritabanından yayımlanmış sürümü okur. Hata fırlatır (unstable_cache hatayı ÖNBELLEĞE ALMAZ). */
async function readPublishedSnapshot(): Promise<PriceSnapshot> {
  // Süreç içi kısa devre: veritabanı yeni çöktüyse her istek bağlantı denemesiyle beklemesin
  if (lastError && Date.now() - failedAt < PRICE_FAILURE_REVALIDATE_SECONDS * 1000) throw lastError;
  try {
    const v = await withTimeout(getPublished(), DB_TIMEOUT_MS);
    if (!v || !v.data || typeof v.data !== "object" || !v.data.families || !v.data.singles) {
      throw new Error("Yayımlanmış fiyat sürümü yok ya da okunamadı");
    }
    lastError = null;
    return { version: v.id, publishedAt: v.publishedAt, data: v.data };
  } catch (e) {
    lastError = e instanceof Error ? e : new Error(String(e));
    failedAt = Date.now();
    throw lastError;
  }
}

const cachedSnapshot = unstable_cache(readPublishedSnapshot, ["fiyatlar-yayimlanmis-v1"], {
  tags: [PRICE_TAG],
  revalidate: PRICE_REVALIDATE_SECONDS
});

/** Yalnızca "bu üretim kısa ömürlü olmalı" işareti: etiketi ve kısa yeniden doğrulama süresini sayfaya bağlar */
const failureMarker = unstable_cache(async () => 1, ["fiyatlar-erisilemedi-v1"], {
  tags: [PRICE_TAG],
  revalidate: PRICE_FAILURE_REVALIDATE_SECONDS
});

async function loadSnapshot(): Promise<PriceSnapshot | null> {
  if (IS_BUILD) {
    // next build: veritabanına bağlanılmaz, fiyat gömülmez. Sayfa fiyatsız üretilir ve 5 sn sonra bayat sayılır,
    // ilk istekte (ya da scripts/fiyat-isit.mjs ile) veritabanı fiyatıyla yeniden üretilir.
    await failureMarker();
    return null;
  }
  try {
    return await cachedSnapshot();
  } catch (e) {
    console.error("[fiyat] veritabanından fiyat okunamadı; sayfalar fiyatsız gösterilecek:", (e as Error).message);
    try {
      await failureMarker();
    } catch {
      /* önbellek işareti de yazılamadıysa yine fiyatsız devam */
    }
    return null;
  }
}

/** Bir istek/üretim içinde tek kez çözülür (React cache); sayfa, generateMetadata ve bileşenler aynı kitabı paylaşır. */
export const getPrices = cache(async (): Promise<Prices> => {
  const snap = await loadSnapshot();
  return snap ? buildPrices(snap.data, { version: snap.version, publishedAt: snap.publishedAt }) : buildPrices(null);
});

/** Etiketli fiyat önbelleğini ve ona bağlı sayfaları anında geçersiz kılar (yalnızca Server Action içinde). */
export function invalidatePrices(): void {
  updateTag(PRICE_TAG);
}

/** Admin "Yayımla": sürümü yayımlar, ardından fiyat etiketini geçersiz kılar (deploy/hook gerekmez). */
export async function publishPriceVersion(id: number): Promise<void> {
  await publishVersion(id);
  invalidatePrices();
}

/** Admin "Bu sürüme dön": eski sürümün kopyasını yayımlar ve fiyat etiketini geçersiz kılar. */
export async function restorePriceVersion(id: number, actor: string): Promise<number> {
  const newId = await restoreVersion(id, actor);
  invalidatePrices();
  return newId;
}
