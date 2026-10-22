import publishedPrices from "./pricing.published.json";

/**
 * PORTZEN fiyat listesi — sitedeki TÜM fiyatların tek kaynağı.
 *
 * Kurallar
 * - Tutarlar TL ve KDV hariçtir. Sayfalara elle fiyat yazılmaz; bu dosyadan okunur.
 * - Paket sırası veri olarak Başlangıç → Büyüme → Kurumsal'dır; kartlar masaüstünde
 *   Kurumsal / Büyüme / Başlangıç sırasıyla gösterilir (bkz. PricingSection).
 * - "…'den başlayan" ifadesi yalnızca özel proje hizmetlerinde (startingAt) kullanılır.
 * - İlk ay toplamı gibi türetilmiş tutarlar burada hesaplanır, elle yazılmaz.
 */

export type TierId = "baslangic" | "buyume" | "kurumsal";
export type Billing = "monthly" | "project" | "one-time";

export const TIER_NAMES: Record<TierId, string> = {
  baslangic: "Başlangıç",
  buyume: "Büyüme",
  kurumsal: "Kurumsal"
};

/** Masaüstünde kartların gösterim sırası */
export const DISPLAY_ORDER: TierId[] = ["kurumsal", "buyume", "baslangic"];
export const RECOMMENDED_TIER: TierId = "buyume";

export const BILLING_LABEL: Record<Billing, string> = {
  monthly: "aylık",
  project: "proje başı",
  "one-time": "tek seferlik kurulum"
};

export const BILLING_SUFFIX: Record<Billing, string> = {
  monthly: "/ ay",
  project: "/ proje",
  "one-time": "tek seferlik"
};

export interface Tier {
  id: TierId;
  price: number;
  /** Kartın üstündeki hedef müşteri cümlesi */
  audience: string;
  /** Kartta gösterilen en önemli 4–6 fayda */
  highlights: string[];
  /** Aylık hizmetin ayrıca alınan tek seferlik kurulum bedeli */
  setupFee?: number;
  /** Tek seferlik kurulum hizmetlerinde isteğe bağlı aylık bakım */
  maintenance?: number;
}

export interface DetailRow {
  label: string;
  values: Record<TierId, string>;
}

export interface PricingFamily {
  id: FamilyId;
  title: string;
  /** Formlar ve WhatsApp mesajları için kısa ad */
  formLabel: string;
  billing: Billing;
  tiers: Record<TierId, Tier>;
  details: DetailRow[];
  /** Fiyatın yanında görünen dahil olmayan giderler ve kurallar */
  notes: string[];
  /** Bu ailenin fiyatlarını gösteren sayfa yolu */
  href: string;
}

export type FamilyId =
  | "sosyal-medya"
  | "kisa-video"
  | "ai-reklam-filmi"
  | "reklam-yonetimi"
  | "ai-musteri-asistani"
  | "is-otomasyonu"
  | "kurumsal-web-sitesi"
  | "e-ticaret"
  | "web-bakim";

/** Reklam yönetiminde paket başına yönetilen azami aylık harcama (TL) */
export const AD_SPEND_CAP: Record<TierId, number> = { baslangic: 30000, buyume: 100000, kurumsal: 250000 };
/** Harcama sınırı aşıldığında yalnızca aşan tutara uygulanan oran */
export const AD_OVERAGE_RATE = 0.1;
/** AI müşteri asistanında aylık AI yanıt kotası */
/** Web bakım: paket başına aylık TOPLAM bakım/değişiklik saati (birikmez, devretmez) */
export const WEB_MAINTENANCE_HOURS: Record<TierId, number> = { baslangic: 1, buyume: 3, kurumsal: 6 };

/** Tüm paketler için: adetler o paketin toplam hakkıdır, alt paketten birikmez */
export const QUOTA_NOTE =
  "Her paketteki içerik, video, kanal, şube, entegrasyon ve AI yanıt sayıları o paketin toplam hakkıdır. Üst paket, alt paketin uyumlu özelliklerini içerebilir; alt paketin adetleri üst pakete eklenmez.";

export const AI_REPLY_QUOTA: Record<TierId, number> = { baslangic: 1000, buyume: 4000, kurumsal: 12000 };

/** İş otomasyonu: isteğe bağlı aylık bakım (2. aydan itibaren) */
const AUTOMATION_MAINTENANCE: Record<TierId, number> = { baslangic: 1500, buyume: 3500, kurumsal: 9900 };

const n = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const pct = (r: number) => `%${Math.round(r * 100)}`;

const row = (label: string, b: string, g: string, k: string): DetailRow => ({
  label,
  values: { baslangic: b, buyume: g, kurumsal: k }
});

export const PRICING: Record<FamilyId, PricingFamily> = {
  "sosyal-medya": {
    id: "sosyal-medya",
    title: "Sosyal medya yönetimi",
    formLabel: "Sosyal medya yönetimi",
    billing: "monthly",
    href: "/sosyal-medya-yonetimi",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: 9900,
        audience: "Tek kanalda düzenli görünmek isteyen küçük işletmeler",
        highlights: ["1 kanal yönetimi", "Ayda 10 özgün içerik", "8 tasarım + 2 video", "4 Story uyarlaması"]
      },
      buyume: {
        id: "buyume",
        price: 24900,
        audience: "2–3 kanalda büyümek ve reklama başlamak isteyen KOBİ'ler",
        highlights: [
          "3 kanal yönetimi",
          "Ayda 20 özgün içerik: 12 tasarım + 8 video",
          "12 Story uyarlaması",
          "Hafta içi günlük moderasyon kontrolü",
          "Meta reklam yönetimi dahil (Reklam yönetimi Başlangıç kapsamı)"
        ]
      },
      kurumsal: {
        id: "kurumsal",
        price: 79900,
        audience: "Aynı markada birden fazla şubesi olan, çekim ve geniş reklam yönetimi isteyen işletmeler",
        highlights: [
          "5 kanal yönetimi",
          "Ayda 30 özgün içerik: 18 tasarım + 12 video",
          "24 Story uyarlaması",
          "Ayda 1 gün (8 saat) İzmir içi çekim",
          "Aynı markada 3 şube",
          "Meta + Google reklam yönetimi dahil (Reklam yönetimi Büyüme kapsamı)"
        ]
      }
    },
    details: [
      row("Kanal", "1", "3", "5"),
      row("Özgün içerik / ay", "10", "20", "30"),
      row("Tasarım / ay", "8", "12", "18"),
      row("Video / ay", "2", "8", "12"),
      row("Story uyarlaması / ay", "4", "12", "24"),
      row("Moderasyon", "—", "Hafta içi günlük kontrol", "Hafta içi günlük kontrol"),
      row(
        "Dahil reklam yönetimi",
        "—",
        `Meta; 1 hesap, 2 aktif kampanya, aylık ${n(AD_SPEND_CAP.baslangic)} TL'ye kadar harcama`,
        `Meta + Google; 2 hesap, 4 aktif kampanya, aylık ${n(AD_SPEND_CAP.buyume)} TL'ye kadar harcama`
      ),
      row("Saha çekimi", "—", "—", "Ayda 1 gün (8 saat), İzmir içi"),
      row("Şube", "—", "—", "Aynı markada 3 şube")
    ],
    notes: [
      "Reklam harcaması hizmet bedeline dahil değildir; reklam platformuna sizin ödeme yönteminizle ödenir.",
      `Dahil harcama sınırı aşılırsa yalnızca aşan tutarın ${pct(AD_OVERAGE_RATE)}'u eklenir.`,
      "Ayrı reklam yönetimi paketine geçerseniz paketteki reklam hizmetinin bedeli mahsup edilir; aynı hizmet iki kez ücretlendirilmez."
    ]
  },

  "kisa-video": {
    id: "kisa-video",
    title: "Kısa video üretimi",
    formLabel: "Kısa video üretimi",
    billing: "monthly",
    href: "/sosyal-medya-viral-video",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: 6900,
        audience: "Ayda birkaç dikey video paylaşmak isteyen işletmeler",
        highlights: ["Ayda 4 kısa video", "15–30 saniye", "1 format", "Reels, TikTok ve Shorts için dikey kurgu"]
      },
      buyume: {
        id: "buyume",
        price: 14900,
        audience: "Her hafta düzenli video yayınlamak isteyen markalar",
        highlights: ["Ayda 12 kısa video", "15–45 saniye", "2 format", "Senaryo ve hook yazımı", "AI seslendirme"]
      },
      kurumsal: {
        id: "kurumsal",
        price: 39900,
        audience: "İki marka için yüksek hacimli video ihtiyacı olan işletmeler",
        highlights: [
          "Ayda 24 kısa video",
          "15–60 saniye",
          "3 format",
          "2 marka",
          "Ayda 6 videoda özel AI sahneleri"
        ]
      }
    },
    details: [
      row("Video / ay", "4", "12", "24"),
      row("Süre", "15–30 sn", "15–45 sn", "15–60 sn"),
      row("Format", "1", "2", "3"),
      row("Senaryo ve hook", "—", "Dahil", "Dahil"),
      row("AI seslendirme", "—", "Dahil", "Dahil"),
      row("Özel AI sahneleri", "—", "—", "Ayda 6 videoda"),
      row("Marka", "1", "1", "2")
    ],
    notes: ["Saha çekimi bu paketlere dahil değildir."]
  },

  "ai-reklam-filmi": {
    id: "ai-reklam-filmi",
    title: "AI reklam filmi",
    formLabel: "AI reklam filmi",
    billing: "project",
    href: "/yapay-zeka-video-uretimi",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: 2900,
        audience: "Tek ürün veya kampanya için kısa bir reklam filmi isteyenler",
        highlights: ["1 film", "10–15 saniye", "En fazla 3 sahne", "1 format", "AI seslendirme dahil"]
      },
      buyume: {
        id: "buyume",
        price: 7900,
        audience: "Reklamını birden fazla platformda yayınlayacak işletmeler",
        highlights: [
          "1 film",
          "En fazla 30 saniye / 6 sahne",
          "2 format",
          "Aynı filmden 2 kısa kesit",
          "AI seslendirme dahil"
        ]
      },
      kurumsal: {
        id: "kurumsal",
        price: 19900,
        audience: "Özel konseptli marka veya lansman filmi isteyen markalar",
        highlights: [
          "1 film",
          "En fazla 60 saniye / 12 sahne",
          "Özel konsept",
          "Storyboard",
          "3 format",
          "AI seslendirme dahil"
        ]
      }
    },
    details: [
      row("Film", "1", "1", "1"),
      row("Süre / sahne", "10–15 sn, en fazla 3 sahne", "En fazla 30 sn / 6 sahne", "En fazla 60 sn / 12 sahne"),
      row("Format", "1", "2", "3"),
      row("Kısa kesit", "—", "2", "—"),
      row("Konsept ve storyboard", "—", "—", "Özel konsept + storyboard"),
      row("AI seslendirme", "Dahil", "Dahil", "Dahil")
    ],
    notes: ["Saha çekimi dahil değildir."]
  },

  "reklam-yonetimi": {
    id: "reklam-yonetimi",
    title: "Reklam yönetimi",
    formLabel: "Reklam yönetimi",
    billing: "monthly",
    href: "/meta-reklam-ajansi",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: 4900,
        audience: "Reklama tek platformla adım atan işletmeler",
        highlights: [
          "Meta veya Google",
          "1 reklam hesabı",
          "2 aktif kampanya",
          `Aylık ${n(AD_SPEND_CAP.baslangic)} TL'ye kadar harcama yönetimi`
        ]
      },
      buyume: {
        id: "buyume",
        price: 9900,
        audience: "Meta ve Google'da birlikte reklam veren KOBİ'ler",
        highlights: ["Meta + Google", "2 reklam hesabı", "4 aktif kampanya", `Aylık ${n(AD_SPEND_CAP.buyume)} TL'ye kadar harcama yönetimi`]
      },
      kurumsal: {
        id: "kurumsal",
        price: 24900,
        audience: "Çok hesaplı ve yüksek bütçeli reklam yapıları",
        highlights: ["Meta + Google", "4 reklam hesabı", "8 aktif kampanya", `Aylık ${n(AD_SPEND_CAP.kurumsal)} TL'ye kadar harcama yönetimi`]
      }
    },
    details: [
      row("Platform", "Meta veya Google", "Meta + Google", "Meta + Google"),
      row("Reklam hesabı", "1", "2", "4"),
      row("Aktif kampanya", "2", "4", "8"),
      row(
        "Yönetilen aylık harcama",
        `${n(AD_SPEND_CAP.baslangic)} TL'ye kadar`,
        `${n(AD_SPEND_CAP.buyume)} TL'ye kadar`,
        `${n(AD_SPEND_CAP.kurumsal)} TL'ye kadar`
      )
    ],
    notes: [
      "Reklam harcaması hizmet bedeline dahil değildir.",
      `Harcama sınırının üstüne yalnızca aşan tutarın ${pct(AD_OVERAGE_RATE)}'u eklenir.`,
      "Sosyal medya paketindeki reklam hizmetinden ayrı reklam paketine geçerken dahil hizmet bedeli mahsup edilir."
    ]
  },

  "ai-musteri-asistani": {
    id: "ai-musteri-asistani",
    title: "AI müşteri asistanı (WhatsApp ve web chatbot)",
    formLabel: "AI müşteri asistanı",
    billing: "monthly",
    href: "/whatsapp-ai-asistani",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: 2900,
        setupFee: 4900,
        audience: "Sık sorulan soruları otomatik yanıtlamak isteyen küçük işletmeler",
        highlights: [
          "1 kanal: WhatsApp veya web sitesi",
          "Sık sorulan soruları yanıtlama",
          "Müşteri bilgisi toplama",
          "Gerektiğinde yetkili kişiye yönlendirme",
          `Ayda ${n(AI_REPLY_QUOTA.baslangic)} AI yanıtı`
        ]
      },
      buyume: {
        id: "buyume",
        price: 6900,
        setupFee: 14900,
        audience: "Randevu alan ve müşteri kaydını CRM'de tutan KOBİ'ler",
        highlights: [
          "2 kanal",
          "Randevu alma",
          "Standart CRM entegrasyonu",
          `Ayda ${n(AI_REPLY_QUOTA.buyume)} AI yanıtı`,
          "Ayda 2 saat iyileştirme"
        ]
      },
      kurumsal: {
        id: "kurumsal",
        price: 19900,
        setupFee: 49900,
        audience: "Birden fazla şubesi ve kanalı olan işletmeler",
        highlights: [
          "Web + WhatsApp + Instagram",
          "3 şube",
          "4 standart entegrasyon",
          `Ayda ${n(AI_REPLY_QUOTA.kurumsal)} AI yanıtı`,
          "Ayda 6 saat iyileştirme"
        ]
      }
    },
    details: [
      row("Kanal", "1 (WhatsApp veya web)", "2", "Web + WhatsApp + Instagram"),
      row("SSS yanıtlama ve bilgi toplama", "Dahil", "Dahil", "Dahil"),
      row("İnsana yönlendirme", "Dahil", "Dahil", "Dahil"),
      row("Randevu", "—", "Dahil", "Dahil"),
      row("Entegrasyon", "—", "Standart CRM", "4 standart entegrasyon"),
      row("Şube", "—", "—", "3"),
      row("AI yanıtı / ay", n(AI_REPLY_QUOTA.baslangic), n(AI_REPLY_QUOTA.buyume), n(AI_REPLY_QUOTA.kurumsal)),
      row("İyileştirme / ay", "—", "2 saat", "6 saat")
    ],
    notes: [
      "Aylık ücretin yanında tek seferlik kurulum bedeli vardır; ilk ay toplamı kartta gösterilir.",
      "Meta mesaj ücretleri ve harici platform ücretleri hizmet bedeline dahil değildir; teklifte ayrıca belirtilir.",
      "Instagram'da yorum ve hikâyeye otomatik DM gönderen kural tabanlı pazarlama otomasyonu ayrı bir hizmettir."
    ]
  },

  "is-otomasyonu": {
    id: "is-otomasyonu",
    title: "İş otomasyonu (CRM, n8n ve Make)",
    formLabel: "İş otomasyonu",
    billing: "one-time",
    href: "/crm-otomasyonu",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: 14900,
        maintenance: AUTOMATION_MAINTENANCE.baslangic,
        audience: "Birkaç tekrarlayan işi otomatikleştirmek isteyen işletmeler",
        highlights: ["2 iş akışı", "2 uygulama bağlantısı", "İlk 30 gün kurulum hatalarının giderilmesi"]
      },
      buyume: {
        id: "buyume",
        price: 34900,
        maintenance: AUTOMATION_MAINTENANCE.buyume,
        audience: "Satış ve operasyon süreçlerini birbirine bağlamak isteyen KOBİ'ler",
        highlights: [
          "6 iş akışı",
          "4 uygulama bağlantısı",
          "Hata bildirimi",
          "Ekip eğitimi",
          "İlk 30 gün kurulum hatalarının giderilmesi"
        ]
      },
      kurumsal: {
        id: "kurumsal",
        price: 89900,
        maintenance: AUTOMATION_MAINTENANCE.kurumsal,
        audience: "Özel sistemlerini bağlamak ve test ortamında çalışmak isteyen işletmeler",
        highlights: [
          "12 iş akışı",
          "6 uygulama bağlantısı",
          "2 özel API bağlantısı",
          "Test ortamı",
          "Dokümantasyon"
        ]
      }
    },
    details: [
      row("İş akışı", "2", "6", "12"),
      row("Bağlanan uygulama", "2", "4", "6"),
      row("Özel API bağlantısı", "—", "—", "2"),
      row("Hata bildirimi", "—", "Dahil", "Dahil"),
      row("Eğitim", "—", "Dahil", "Dahil"),
      row("Test ortamı ve dokümantasyon", "—", "—", "Dahil"),
      row("Kurulum hatalarının giderilmesi", "İlk 30 gün", "İlk 30 gün", "İlk 30 gün"),
      row(
        "İsteğe bağlı bakım (2. aydan)",
        `${n(AUTOMATION_MAINTENANCE.baslangic)} TL / ay`,
        `${n(AUTOMATION_MAINTENANCE.buyume)} TL / ay`,
        `${n(AUTOMATION_MAINTENANCE.kurumsal)} TL / ay`
      )
    ],
    notes: [
      "Kurulum tek seferliktir. İlk 30 gün kurulum hatalarının giderilmesi dahildir; isteğe bağlı aylık bakım ikinci aydan itibaren başlar.",
      "CRM, sunucu ve harici yazılım lisansları hariçtir."
    ]
  },

  "kurumsal-web-sitesi": {
    id: "kurumsal-web-sitesi",
    title: "Kurumsal web sitesi",
    formLabel: "Kurumsal web sitesi",
    billing: "project",
    href: "/web-tasarim",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: 9900,
        audience: "Hızlı ve düzgün bir tanıtım sitesine ihtiyacı olan işletmeler",
        highlights: ["3–5 sayfa", "Standart bileşenlerle tasarım", "Mobil uyum", "İletişim formu", "Temel SEO"]
      },
      buyume: {
        id: "buyume",
        price: 29900,
        audience: "İçeriğini kendisi yöneten ve aramada bulunmak isteyen KOBİ'ler",
        highlights: ["10 sayfa", "Markaya özel 3 sayfa şablonu", "CMS ve blog", "Teknik SEO", "Ölçümleme kurulumu"]
      },
      kurumsal: {
        id: "kurumsal",
        price: 79900,
        audience: "İki dilli, özel tasarımlı ve entegrasyonlu kurumsal site isteyen markalar",
        highlights: [
          "20 sayfa",
          "2 dil",
          "Özel tasarım",
          "CMS ve blog",
          "2 standart entegrasyon",
          "2 kampanya sayfası"
        ]
      }
    },
    details: [
      row("Sayfa", "3–5", "10", "20"),
      row("Tasarım", "Standart bileşenler", "Markaya özel 3 sayfa şablonu", "Özel tasarım"),
      row("Dil", "1", "1", "2"),
      row("İçerik yönetimi", "—", "CMS + blog", "CMS + blog"),
      row("SEO", "Temel SEO", "Teknik SEO", "Teknik SEO"),
      row("Ölçümleme", "—", "Dahil", "Dahil"),
      row("Entegrasyon", "İletişim formu", "İletişim formu", "2 standart entegrasyon"),
      row("Kampanya sayfası", "—", "—", "2")
    ],
    notes: ["Hosting, alan adı, çeviri ve harici lisanslar hariçtir.", "Yayından sonraki bakım ayrı bir aylık hizmettir (Web bakım)."]
  },

  "e-ticaret": {
    id: "e-ticaret",
    title: "E-ticaret sitesi",
    formLabel: "E-ticaret sitesi",
    billing: "project",
    href: "/web-tasarim",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: 24900,
        audience: "Hazır altyapıyla online satışa başlamak isteyen işletmeler",
        highlights: [
          "Hazır altyapı ve tema uyarlaması",
          "Dosyadan 50 ürün aktarımı",
          "Ödeme bağlantısı",
          "Kargo bağlantısı"
        ]
      },
      buyume: {
        id: "buyume",
        price: 54900,
        audience: "Pazaryeriyle birlikte satış yapan ve kampanya kurgulayan mağazalar",
        highlights: [
          "Dosyadan 250 ürün aktarımı",
          "Özel arayüz",
          "1 hazır pazaryeri bağlayıcısı",
          "Kampanya ve kupon"
        ]
      },
      kurumsal: {
        id: "kurumsal",
        price: 129900,
        audience: "Geniş katalogla iki dilde ve birden fazla pazaryerinde satan markalar",
        highlights: [
          "Dosyadan 1.000 ürün aktarımı",
          "2 dil",
          "2 pazaryeri bağlayıcısı",
          "1 hazır ERP/muhasebe bağlayıcısı"
        ]
      }
    },
    details: [
      row("Ürün aktarımı (dosyadan)", "50", "250", "1.000"),
      row("Arayüz", "Hazır tema uyarlaması", "Özel arayüz", "Özel arayüz"),
      row("Ödeme ve kargo bağlantısı", "Dahil", "Dahil", "Dahil"),
      row("Pazaryeri bağlayıcısı", "—", "1", "2"),
      row("Kampanya / kupon", "—", "Dahil", "Dahil"),
      row("Dil", "1", "1", "2"),
      row("ERP / muhasebe bağlayıcısı", "—", "—", "1 hazır bağlayıcı")
    ],
    notes: ["Özel ERP geliştirmesi ve altyapı lisansları ayrıca tekliflendirilir."]
  },

  "web-bakim": {
    id: "web-bakim",
    title: "Web bakım",
    formLabel: "Web bakım",
    billing: "monthly",
    href: "/web-tasarim",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: 1500,
        audience: "Tanıtım sitesi veya landing page sahipleri",
        highlights: [`Ayda toplam ${WEB_MAINTENANCE_HOURS.baslangic} saat bakım ve değişiklik`]
      },
      buyume: {
        id: "buyume",
        price: 3500,
        audience: "Sitesini düzenli güncelleyen işletmeler",
        highlights: [`Ayda toplam ${WEB_MAINTENANCE_HOURS.buyume} saat bakım ve değişiklik`]
      },
      kurumsal: {
        id: "kurumsal",
        price: 7500,
        audience: "E-ticaret, çok dilli veya entegrasyonlu siteler",
        highlights: [`Ayda toplam ${WEB_MAINTENANCE_HOURS.kurumsal} saat bakım ve değişiklik`]
      }
    },
    details: [
      row(
        "Bakım ve değişiklik / ay (toplam)",
        `${WEB_MAINTENANCE_HOURS.baslangic} saat`,
        `${WEB_MAINTENANCE_HOURS.buyume} saat`,
        `${WEB_MAINTENANCE_HOURS.kurumsal} saat`
      )
    ],
    notes: [
      "Saatler o paketin aylık toplam hakkıdır; paketler arasında birbirine eklenmez.",
      "Kullanılmayan saatler sonraki aya devretmez.",
      "Yeni modül ve kapsamlı tasarım çalışmaları bakıma dahil değildir, ayrıca tekliflendirilir.",
      "Hosting, alan adı ve harici lisanslar hariçtir."
    ]
  }
};

/* ------------------------------------------------------------------ */
/* Tekil fiyatlı hizmetler                                             */
/* ------------------------------------------------------------------ */

export type SingleId =
  | "landing-page"
  | "instagram-dm"
  | "ai-telefon-asistani"
  | "ozel-web-uygulamasi"
  | "mobil-uygulama"
  | "mobil-oyun";

export interface SingleService {
  id: SingleId;
  title: string;
  formLabel: string;
  /** Ana fiyat */
  price: number;
  billing: Billing;
  /** "…'den başlayan" — yalnızca özel proje hizmetleri */
  startingAt?: boolean;
  /** Aylık hizmetlerde tek seferlik kurulum */
  setupFee?: number;
  /** Kurulumu olan hizmette aylık ücret */
  monthly?: number;
  summary: string;
  notes: string[];
  href: string;
}

export const SINGLE: Record<SingleId, SingleService> = {
  "landing-page": {
    id: "landing-page",
    title: "Landing page",
    formLabel: "Landing page",
    price: 5900,
    billing: "project",
    summary: "Tek sayfa, 6 bölüme kadar.",
    notes: ["Hosting, alan adı ve harici lisanslar hariçtir."],
    href: "/web-tasarim"
  },
  "instagram-dm": {
    id: "instagram-dm",
    title: "Instagram DM pazarlama otomasyonu",
    formLabel: "Instagram DM otomasyonu",
    price: 4900,
    billing: "one-time",
    setupFee: 4900,
    monthly: 1500,
    summary: "Yorum ve hikâye etkileşimine kural tabanlı otomatik DM. AI yanıt hizmeti değildir.",
    notes: ["Otomasyon platformu aboneliği hariçtir.", "AI ile serbest soru yanıtlama, AI müşteri asistanı kapsamındadır."],
    href: "/instagram-dm-otomasyonu"
  },
  "ai-telefon-asistani": {
    id: "ai-telefon-asistani",
    title: "AI telefon asistanı",
    formLabel: "AI telefon asistanı",
    price: 4900,
    billing: "monthly",
    setupFee: 14900,
    monthly: 4900,
    summary: "Gelen aramaları karşılayan sesli asistan; aylık ücret yönetim bedelidir.",
    notes: [
      "Dakika ve hat ücretleri sağlayıcı giderine %20 işletim payı eklenerek ayrıca faturalanır.",
      "Hat ve dakika gideri kullanıma göre değişir; teklifte sağlayıcı tarifesiyle birlikte gösterilir."
    ],
    href: "/yapay-zeka-call-center"
  },
  "ozel-web-uygulamasi": {
    id: "ozel-web-uygulamasi",
    title: "Özel web uygulaması",
    formLabel: "Özel web uygulaması",
    price: 79900,
    billing: "project",
    startingAt: true,
    summary: "İşletmenize özel rezervasyon, sipariş, müşteri paneli veya iç sistem. Kesin bedel kapsama göre teklifte belirlenir.",
    notes: ["Sunucu, alan adı ve üçüncü taraf servis ücretleri hariçtir."],
    href: "/hizmetler/web-yazilim"
  },
  "mobil-uygulama": {
    id: "mobil-uygulama",
    title: "Mobil uygulama",
    formLabel: "Mobil uygulama",
    price: 120000,
    billing: "project",
    startingAt: true,
    summary: "iOS ve Android uygulama. Kesin bedel ekran, rol ve entegrasyon sayısına göre teklifte belirlenir.",
    notes: ["Apple ve Google geliştirici hesap ücretleri, sunucu ve üçüncü taraf servisler hariçtir."],
    href: "/hizmetler/mobil-uygulama"
  },
  "mobil-oyun": {
    id: "mobil-oyun",
    title: "Mobil oyun",
    formLabel: "Mobil oyun",
    price: 150000,
    billing: "project",
    startingAt: true,
    summary: "Casual ve hyper-casual mobil oyun. Kesin bedel mekanik, seviye ve sanat kapsamına göre teklifte belirlenir.",
    notes: ["Mağaza hesapları, lisanslı müzik, sunucu ve pazarlama bütçesi hariçtir."],
    href: "/hizmetler/mobil-oyun"
  }
};

/* ------------------------------------------------------------------ */
/* Yayımlanmış fiyat sürümü (admin paneli → /admin/fiyatlar)           */
/* ------------------------------------------------------------------ */
/**
 * Yalnızca tutarlar düzenlenebilir: paket bedeli, kurulum ve (varsa) bakım.
 * Kapsam, metin ve paket yapısı bu dosyada kalır. Yayımlanan sürüm build öncesinde
 * (scripts/sync-content.mjs) veritabanından pricing.published.json dosyasına yazılır
 * ve aşağıda modül yüklenirken PRICING / SINGLE üzerine uygulanır. Böylece kartlar,
 * karşılaştırmalar, SSS'ler, JSON-LD ve WhatsApp mesajları tek kaynaktan beslenir.
 */
export type TierPrice = { price: number; setupFee?: number; maintenance?: number };
export type SinglePrice = { price: number; setupFee?: number; monthly?: number };
export interface PriceData {
  families: Record<FamilyId, Record<TierId, TierPrice>>;
  singles: Record<SingleId, SinglePrice>;
}
export interface PublishedPrices {
  version: number;
  publishedAt: string | null;
  note: string | null;
  data: PriceData;
}

const TIER_IDS: TierId[] = ["baslangic", "buyume", "kurumsal"];

export function extractPriceData(
  families: Record<FamilyId, PricingFamily> = PRICING,
  singles: Record<SingleId, SingleService> = SINGLE
): PriceData {
  const fam = {} as PriceData["families"];
  for (const f of Object.values(families)) {
    fam[f.id] = {} as Record<TierId, TierPrice>;
    for (const id of TIER_IDS) {
      const t = f.tiers[id];
      fam[f.id][id] = {
        price: t.price,
        ...(t.setupFee !== undefined ? { setupFee: t.setupFee } : {}),
        ...(t.maintenance !== undefined ? { maintenance: t.maintenance } : {})
      };
    }
  }
  const sing = {} as PriceData["singles"];
  for (const s of Object.values(singles)) {
    sing[s.id] = {
      price: s.price,
      ...(s.setupFee !== undefined ? { setupFee: s.setupFee } : {}),
      ...(s.monthly !== undefined ? { monthly: s.monthly } : {})
    };
  }
  return { families: fam, singles: sing };
}

const okAmount = (v: unknown): v is number => typeof v === "number" && Number.isInteger(v) && v > 0 && v <= 10_000_000;

/** Fiyat verisini doğrular; yalnızca yapıda var olan alanlara izin verir. Hata listesi döner. */
export function validatePriceData(data: unknown): string[] {
  const errors: string[] = [];
  const d = data as PriceData;
  if (!d || typeof d !== "object" || !d.families || !d.singles) return ["Fiyat verisi eksik."];
  for (const f of Object.values(PRICING)) {
    for (const id of TIER_IDS) {
      const t = d.families[f.id]?.[id];
      const base = f.tiers[id];
      const label = `${f.title} / ${TIER_NAMES[id]}`;
      if (!t) { errors.push(`${label}: değer yok.`); continue; }
      if (!okAmount(t.price)) errors.push(`${label}: paket bedeli geçersiz.`);
      if ((base.setupFee !== undefined) !== (t.setupFee !== undefined)) errors.push(`${label}: kurulum alanı yapıyla uyuşmuyor.`);
      else if (t.setupFee !== undefined && !okAmount(t.setupFee)) errors.push(`${label}: kurulum bedeli geçersiz.`);
      if ((base.maintenance !== undefined) !== (t.maintenance !== undefined)) errors.push(`${label}: bakım alanı yapıyla uyuşmuyor.`);
      else if (t.maintenance !== undefined && !okAmount(t.maintenance)) errors.push(`${label}: bakım bedeli geçersiz.`);
    }
  }
  for (const s of Object.values(SINGLE)) {
    const v = d.singles[s.id];
    if (!v) { errors.push(`${s.title}: değer yok.`); continue; }
    if (!okAmount(v.price)) errors.push(`${s.title}: bedel geçersiz.`);
    if ((s.setupFee !== undefined) !== (v.setupFee !== undefined)) errors.push(`${s.title}: kurulum alanı yapıyla uyuşmuyor.`);
    else if (v.setupFee !== undefined && !okAmount(v.setupFee)) errors.push(`${s.title}: kurulum bedeli geçersiz.`);
    if ((s.monthly !== undefined) !== (v.monthly !== undefined)) errors.push(`${s.title}: aylık alanı yapıyla uyuşmuyor.`);
    else if (v.monthly !== undefined && !okAmount(v.monthly)) errors.push(`${s.title}: aylık bedel geçersiz.`);
  }
  return errors;
}

function overlay(families: Record<FamilyId, PricingFamily>, singles: Record<SingleId, SingleService>, data: PriceData) {
  for (const f of Object.values(families)) {
    for (const id of TIER_IDS) {
      const v = data.families[f.id]?.[id];
      if (!v) continue;
      const t = f.tiers[id];
      t.price = v.price;
      if (t.setupFee !== undefined && v.setupFee !== undefined) t.setupFee = v.setupFee;
      if (t.maintenance !== undefined && v.maintenance !== undefined) t.maintenance = v.maintenance;
    }
    // Ayrıntı tablosundaki bakım satırı da aynı kaynaktan türetilir
    if (TIER_IDS.every((id) => f.tiers[id].maintenance !== undefined)) {
      for (const r of f.details) {
        if (r.label.startsWith("İsteğe bağlı bakım")) {
          for (const id of TIER_IDS) r.values[id] = `${formatTL(f.tiers[id].maintenance!)} / ay`;
        }
      }
    }
  }
  for (const s of Object.values(singles)) {
    const v = data.singles[s.id];
    if (!v) continue;
    if (s.setupFee !== undefined && v.setupFee !== undefined) s.setupFee = v.setupFee;
    if (s.monthly !== undefined && v.monthly !== undefined) s.monthly = v.monthly;
    // Kurulum + aylık hizmetlerde "price" türetilir: aylık hizmetlerde aylık ücret, tek seferliklerde kurulum.
    if (s.setupFee !== undefined && s.monthly !== undefined) s.price = s.billing === "monthly" ? s.monthly : s.setupFee;
    else s.price = v.price;
  }
}

/** Önizleme için: verilen taslak fiyatları uygulanmış BAĞIMSIZ kopyalar döner (canlı veriye dokunmaz). */
export type PriceSource = { families: Record<FamilyId, PricingFamily>; singles: Record<SingleId, SingleService> };
export function withPriceData(data: PriceData): PriceSource {
  const families = JSON.parse(JSON.stringify(PRICING)) as Record<FamilyId, PricingFamily>;
  const singles = JSON.parse(JSON.stringify(SINGLE)) as Record<SingleId, SingleService>;
  overlay(families, singles, data);
  return { families, singles };
}

/** Koddaki başlangıç değerleri (yayımlanmış sürüm uygulanmadan önce) — ilk kurulum tohumu */
export const CODE_DEFAULT_PRICES: PriceData = extractPriceData();

const PUBLISHED = publishedPrices as unknown as PublishedPrices;
if (PUBLISHED.version > 0) {
  const errs = validatePriceData(PUBLISHED.data);
  // Geçersiz yayımlanmış veri sessizce yok sayılmaz: yanlış fiyatla yayına çıkmamak için build durur.
  if (errs.length) throw new Error(`pricing.published.json geçersiz: ${errs.join(" ")}`);
  overlay(PRICING, SINGLE, PUBLISHED.data);
}
/** Sitede şu an uygulanan fiyat sürümü */
export const PRICE_VERSION = { version: PUBLISHED.version, publishedAt: PUBLISHED.publishedAt };


/* ------------------------------------------------------------------ */
/* Yardımcılar                                                         */
/* ------------------------------------------------------------------ */

/** 24900 → "24.900 TL" (ortama bağlı olmayan biçimlendirme) */
export function formatTL(n: number): string {
  const s = Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${s} TL`;
}

/** Aylık hizmet + kurulum için ilk ay toplamı */
export function firstMonthTotal(t: Tier): number | null {
  return t.setupFee ? t.price + t.setupFee : null;
}

/** "9.900 TL / ay" gibi kısa gösterim */
export function tierPriceLabel(f: PricingFamily, id: TierId): string {
  const t = f.tiers[id];
  const base = formatTL(t.price);
  return f.billing === "one-time" ? `${base} tek seferlik` : `${base} ${BILLING_SUFFIX[f.billing]}`;
}

export function singlePriceLabel(s: SingleService): string {
  if (s.startingAt) return `${formatTL(s.price)}'den başlayan proje bedeli`;
  if (s.setupFee && s.monthly) return `${formatTL(s.setupFee)} kurulum + ${formatTL(s.monthly)} / ay`;
  return `${formatTL(s.price)} ${BILLING_SUFFIX[s.billing]}`;
}

/** Ailenin en düşük ve en yüksek ana fiyatı (yapılandırılmış veri için) */
export function familyRange(f: PricingFamily): { low: number; high: number } {
  const prices = Object.values(f.tiers).map((t) => t.price);
  return { low: Math.min(...prices), high: Math.max(...prices) };
}

export const WHATSAPP_NUMBER = "905318639117";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Paket kartı ve formlar için önceden doldurulmuş mesaj */
export function packageMessage(serviceLabel: string, tierName?: string, priceLabel?: string): string {
  const parts = [`Merhaba PORTZEN, ${serviceLabel}`];
  if (tierName) parts[0] += ` – ${tierName} paketi`;
  if (priceLabel) parts[0] += ` (${priceLabel}, KDV hariç)`;
  return `${parts[0]} hakkında bilgi ve teklif almak istiyorum.`;
}

/** /iletisim formuna hizmet ve paket bilgisini taşıyan bağlantı */
export function contactHref(serviceLabel: string, tierName?: string): string {
  const q = new URLSearchParams({ hizmet: serviceLabel });
  if (tierName) q.set("paket", tierName);
  return `/iletisim?${q.toString()}`;
}

/** Schema.org Offer listesi — paket fiyatları KDV hariç TRY */
export function familyOffersSchema(f: PricingFamily) {
  return (["baslangic", "buyume", "kurumsal"] as TierId[]).map((id) => {
    const t = f.tiers[id];
    return {
      "@type": "Offer",
      name: `${f.title} — ${TIER_NAMES[id]}`,
      price: t.price,
      priceCurrency: "TRY",
      valueAddedTaxIncluded: false,
      ...(f.billing === "monthly"
        ? { priceSpecification: { "@type": "UnitPriceSpecification", price: t.price, priceCurrency: "TRY", unitCode: "MON", valueAddedTaxIncluded: false } }
        : {})
    };
  });
}

/** Hizmet formundaki seçenekler (iletişim sayfası) */
export const SERVICE_OPTIONS: string[] = [
  ...Object.values(PRICING).map((f) => f.formLabel),
  ...Object.values(SINGLE).map((s) => s.formLabel)
];

/** Metin içinde kullanılacak paket fiyat özeti: "Başlangıç 9.900 TL / ay, Büyüme …" */
export function familyPriceSummary(fid: FamilyId): string {
  const f = PRICING[fid];
  return (["baslangic", "buyume", "kurumsal"] as TierId[])
    .map((id) => {
      const t = f.tiers[id];
      let s = `${TIER_NAMES[id]} ${tierPriceLabel(f, id)}`;
      if (t.setupFee) s += ` + ${formatTL(t.setupFee)} kurulum (ilk ay ${formatTL(t.price + t.setupFee)})`;
      if (fid === "web-bakim") s += ` (toplam ${WEB_MAINTENANCE_HOURS[id]} saat)`;
      return s;
    })
    .join(", ");
}

/** İş otomasyonu isteğe bağlı bakım özeti: "1.500 / 3.500 / 9.900 TL / ay" */
export function maintenanceSummary(): string {
  const t = PRICING["is-otomasyonu"].tiers;
  return `${formatTL(t.baslangic.maintenance ?? 0).replace(" TL", "")} / ${formatTL(t.buyume.maintenance ?? 0).replace(" TL", "")} / ${formatTL(t.kurumsal.maintenance ?? 0)} / ay`;
}

/**
 * İçerik dosyalarındaki (JSON/Markdown) fiyat yer tutucularını merkezi kaynaktan çözer.
 * İçerik dosyaları TypeScript import edemediği için fiyatlar metne elle yazılmaz; bunun yerine:
 *   {{fiyatlar:FAMILY}}          → üç paketin özeti
 *   {{fiyat:FAMILY:TIER}}        → "6.900 TL / ay"
 *   {{kurulum:FAMILY:TIER}}      → "14.900 TL"
 *   {{ilkay:FAMILY:TIER}}        → "21.800 TL"
 *   {{bakim:TIER}}               → iş otomasyonu isteğe bağlı aylık bakım, "3.500 TL / ay"
 *   {{tekil:SINGLE}}             → tekil hizmet fiyat etiketi
 *   {{reklam-limit:TIER}}        → dahil reklam harcaması sınırı
 *   {{ai-kota:TIER}}             → aylık AI yanıt kotası
 * Bilinmeyen yer tutucu build sırasında hata verir; böylece yanlış/eski fiyat sessizce yayına çıkmaz.
 */
export function resolvePriceTokens(text: string): string {
  return text.replace(/\{\{([a-z-]+):([a-z-]+)(?::([a-z]+))?\}\}/g, (all, kind: string, a: string, b?: string) => {
    const fam = (PRICING as Record<string, PricingFamily>)[a];
    const tierOf = (id?: string) => {
      if (!fam || !id || !(id in fam.tiers)) throw new Error(`Geçersiz fiyat yer tutucusu: ${all}`);
      return fam.tiers[id as TierId];
    };
    const isTier = (id: string): id is TierId => id === "baslangic" || id === "buyume" || id === "kurumsal";
    switch (kind) {
      case "fiyatlar":
        if (!fam) break;
        return familyPriceSummary(a as FamilyId);
      case "fiyat":
        tierOf(b);
        return tierPriceLabel(fam, b as TierId);
      case "kurulum": {
        const t = tierOf(b);
        if (!t.setupFee) break;
        return formatTL(t.setupFee);
      }
      case "ilkay": {
        const v = firstMonthTotal(tierOf(b));
        if (v === null) break;
        return formatTL(v);
      }
      case "bakim": {
        if (!isTier(a)) break;
        const m = PRICING["is-otomasyonu"].tiers[a].maintenance;
        if (!m) break;
        return `${formatTL(m)} / ay`;
      }
      case "tekil": {
        const s = (SINGLE as Record<string, SingleService>)[a];
        if (!s) break;
        return singlePriceLabel(s);
      }
      case "reklam-limit":
        if (!isTier(a)) break;
        return formatTL(AD_SPEND_CAP[a]);
      case "ai-kota":
        if (!isTier(a)) break;
        return n(AI_REPLY_QUOTA[a]);
    }
    throw new Error(`Geçersiz fiyat yer tutucusu: ${all}`);
  });
}

/** Tekil hizmetler için schema.org Offer listesi (aylık ücret + varsa tek seferlik kurulum) */
export function singleOffersSchema(s: SingleService) {
  const offers: Record<string, unknown>[] = [
    {
      "@type": "Offer",
      name: s.startingAt ? `${s.title} (başlangıç bedeli)` : s.title,
      price: s.price,
      priceCurrency: "TRY",
      valueAddedTaxIncluded: false,
      ...(s.billing === "monthly"
        ? { priceSpecification: { "@type": "UnitPriceSpecification", price: s.price, priceCurrency: "TRY", unitCode: "MON", valueAddedTaxIncluded: false } }
        : {})
    }
  ];
  if (s.setupFee) {
    offers.push({ "@type": "Offer", name: `${s.title} — tek seferlik kurulum`, price: s.setupFee, priceCurrency: "TRY", valueAddedTaxIncluded: false });
  }
  return offers;
}
