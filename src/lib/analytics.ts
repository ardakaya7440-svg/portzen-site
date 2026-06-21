/* ============================================================
   GA4 Custom Events — PORTZEN
   ============================================================
   Built-in Enhanced Measurement (otomatik track):
   - page_view, scroll, click (outbound), file_download, video

   Bu helper ile özel event'ler için:
   - trackEvent('event_name', { ...params })
   - trackWhatsAppClick(source)
   - trackPhoneClick(source)
   - trackCtaClick(label, source)
   - trackLeadFormSubmit(formName)
   ============================================================ */

import { sendGAEvent } from "@next/third-parties/google";

type GaEventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params?: GaEventParams) {
  try {
    sendGAEvent("event", name, params ?? {});
  } catch {
    // SSR / ad-block gibi durumda sessizce yut
  }
}

/** WhatsApp CTA tıklama */
export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", { source, channel: "whatsapp" });
}

/** Telefon CTA tıklama */
export function trackPhoneClick(source: string) {
  trackEvent("phone_click", { source, channel: "phone" });
}

/** Email CTA tıklama */
export function trackEmailClick(source: string) {
  trackEvent("email_click", { source, channel: "email" });
}

/** Genel CTA buton tıklama */
export function trackCtaClick(label: string, source: string) {
  trackEvent("cta_click", { label, source });
}

/** Lead form gönderim — en kritik conversion event */
export function trackLeadFormSubmit(formName: string, leadSource?: string) {
  trackEvent("lead_form_submit", { form_name: formName, lead_source: leadSource ?? "unknown" });
  // Aynı zamanda "generate_lead" standart event'i (GA4 conversion'a alır)
  trackEvent("generate_lead", { form_name: formName });
}

/** Fiyat paketi tıklama — alıcı niyeti yüksek */
export function trackPricingClick(packageName: string, service: string) {
  trackEvent("pricing_click", { package_name: packageName, service });
}

/** Sektörel / lokasyon landing'e geçiş */
export function trackLandingClick(landingType: "sector" | "location" | "comparison", landingSlug: string) {
  trackEvent("landing_click", { landing_type: landingType, landing_slug: landingSlug });
}
