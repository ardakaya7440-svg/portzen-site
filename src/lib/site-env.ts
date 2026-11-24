/**
 * Site ortamı. NEXT_PUBLIC_SITE_ENV tanımsız/boşsa "production" sayılır:
 * canlı Vercel hiçbir env değişikliği olmadan bugünkü gibi davranır.
 * Staging açıkça NEXT_PUBLIC_SITE_ENV=staging ile ayarlanır → izleme yok, noindex.
 */
export const SITE_ENV = process.env.NEXT_PUBLIC_SITE_ENV || "production";
export const IS_PRODUCTION_SITE = SITE_ENV === "production";

type RobotsValue = { index: boolean; follow: boolean };
const NO_INDEX: RobotsValue = { index: false, follow: false };

/**
 * Sayfa düzeyinde robots meta değeri. Production'da verilen değeri aynen döner;
 * staging/önizleme gibi production dışı ortamlarda her zaman noindex, nofollow.
 * (Sayfa metadata'sı layout'u ezdiği için her sayfa robots tanımı bununla sarılmalı.)
 */
export function pageRobots<T extends RobotsValue>(prodValue: T): T | RobotsValue {
  return IS_PRODUCTION_SITE ? prodValue : NO_INDEX;
}
