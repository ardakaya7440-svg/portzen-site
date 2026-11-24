/**
 * Site ortamı. NEXT_PUBLIC_SITE_ENV tanımsız/boşsa "production" sayılır:
 * canlı Vercel hiçbir env değişikliği olmadan bugünkü gibi davranır.
 * Staging açıkça NEXT_PUBLIC_SITE_ENV=staging ile ayarlanır → izleme yok, noindex.
 */
export const SITE_ENV = process.env.NEXT_PUBLIC_SITE_ENV || "production";
export const IS_PRODUCTION_SITE = SITE_ENV === "production";
