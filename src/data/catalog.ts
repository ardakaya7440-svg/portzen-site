import type { FamilyId, SingleId } from "./pricing";

/**
 * Hizmet kataloğu — navbar, ana sayfa hizmet kartları ve admin "hizmet görselleri" aynı listeyi kullanır.
 * Yalnızca var olan hizmet sayfaları listelenir.
 */
export type CatalogCategory = "sosyal-medya" | "ai-otomasyon" | "web-yazilim";
export type VisualKind = "social" | "video" | "film" | "ads" | "chat" | "webchat" | "dm" | "flow" | "phone" | "web" | "dashboard" | "app" | "game";

export interface ServiceItem {
  label: string;
  href: string;
  /** Kart açıklaması: bir-iki kısa cümle */
  short: string;
  /** Kartta gösterilecek fiyat kaynağı */
  price?: { family: FamilyId } | { single: SingleId };
  visual: VisualKind;
}

export interface ServiceGroup {
  id: CatalogCategory;
  title: string;
  intro: string;
  links: ServiceItem[];
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "sosyal-medya",
    title: "Sosyal medya ve içerik",
    intro: "Hesap yönetimi, kısa video, AI reklam filmi ve reklam yönetimi.",
    links: [
      {
        label: "Sosyal medya yönetimi",
        href: "/sosyal-medya-yonetimi",
        short: "Aylık içerik planı, tasarım, paylaşım ve aylık rapor.",
        price: { family: "sosyal-medya" },
        visual: "social"
      },
      {
        label: "Kısa video üretimi",
        href: "/sosyal-medya-viral-video",
        short: "Reels, TikTok ve Shorts için kurgu, altyazı ve kapak.",
        price: { family: "kisa-video" },
        visual: "video"
      },
      {
        label: "AI reklam filmi",
        href: "/yapay-zeka-video-uretimi",
        short: "Yapay zekâ ile üretilen, markanıza göre kurgulanan reklam filmleri.",
        price: { family: "ai-reklam-filmi" },
        visual: "film"
      },
      {
        label: "Reklam yönetimi (Meta ve Google)",
        href: "/meta-reklam-ajansi",
        short: "Kampanya kurulumu, hedefleme, takip ve aylık rapor.",
        price: { family: "reklam-yonetimi" },
        visual: "ads"
      }
    ]
  },
  {
    id: "ai-otomasyon",
    title: "AI ve otomasyon",
    intro: "Mesajlara yanıt veren asistanlar ve tekrar eden işleri üstlenen akışlar.",
    links: [
      {
        label: "WhatsApp AI asistanı",
        href: "/whatsapp-ai-asistani",
        short: "Sık sorulan soruları yanıtlar, talebi toplar, gerekirse ekibe aktarır.",
        price: { family: "ai-musteri-asistani" },
        visual: "chat"
      },
      {
        label: "Web sitesi AI chatbot",
        href: "/ai-chatbot-turkce",
        short: "Sitenizdeki ziyaretçi sorularını Türkçe yanıtlayan asistan.",
        price: { family: "ai-musteri-asistani" },
        visual: "webchat"
      },
      {
        label: "Instagram DM otomasyonu",
        href: "/instagram-dm-otomasyonu",
        short: "Anahtar kelimeye göre kural tabanlı otomatik DM yanıtları.",
        price: { single: "instagram-dm" },
        visual: "dm"
      },
      {
        label: "AI telefon asistanı",
        href: "/yapay-zeka-call-center",
        short: "Gelen aramaları karşılayan, notu ekibe ileten sesli asistan.",
        price: { single: "ai-telefon-asistani" },
        visual: "phone"
      },
      {
        label: "CRM ve iş otomasyonu",
        href: "/crm-otomasyonu",
        short: "Form, CRM, e-posta ve tablolar arasında otomatik iş akışları.",
        price: { family: "is-otomasyonu" },
        visual: "flow"
      }
    ]
  },
  {
    id: "web-yazilim",
    title: "Web ve yazılım",
    intro: "Kurumsal site, e-ticaret, özel web uygulaması ve mobil uygulama.",
    links: [
      {
        label: "Web tasarım ve e-ticaret",
        href: "/web-tasarim",
        short: "Kurumsal site ve e-ticaret; mobil uyumlu, hızlı, yönetilebilir.",
        price: { family: "kurumsal-web-sitesi" },
        visual: "web"
      },
      {
        label: "Özel web uygulaması",
        href: "/hizmetler/web-yazilim",
        short: "Rezervasyon, sipariş, müşteri paneli gibi işletmeye özel sistemler.",
        price: { single: "ozel-web-uygulamasi" },
        visual: "dashboard"
      },
      {
        label: "Mobil uygulama",
        href: "/hizmetler/mobil-uygulama",
        short: "iOS ve Android için uygulama; mevcut sistemlerinizle entegre.",
        price: { single: "mobil-uygulama" },
        visual: "app"
      },
      {
        label: "Mobil oyun",
        href: "/hizmetler/mobil-oyun",
        short: "Fikirden mağaza yayınına mobil oyun geliştirme.",
        price: { single: "mobil-oyun" },
        visual: "game"
      }
    ]
  }
];

export const ALL_SERVICES: ServiceItem[] = SERVICE_GROUPS.flatMap((g) => g.links);
export const SERVICE_KEYS = ALL_SERVICES.map((s) => s.href);
export const CATEGORY_LABEL: Record<CatalogCategory, string> = {
  "sosyal-medya": "Sosyal medya ve içerik",
  "ai-otomasyon": "AI ve otomasyon",
  "web-yazilim": "Web ve yazılım"
};
export function serviceByHref(href: string) {
  return ALL_SERVICES.find((s) => s.href === href) ?? null;
}
export function categoryOf(href: string): CatalogCategory | null {
  return SERVICE_GROUPS.find((g) => g.links.some((l) => l.href === href))?.id ?? null;
}
