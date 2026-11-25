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
  | "web-bakim"
  | "online-is-paketi";

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

const n = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const pct = (r: number) => `%${Math.round(r * 100)}`;

const row = (label: string, b: string, g: string, k: string): DetailRow => ({
  label,
  values: { baslangic: b, buyume: g, kurumsal: k }
});

export const PRICING_STRUCTURE: Record<FamilyId, PricingFamily> = {
  "sosyal-medya": {
    id: "sosyal-medya",
    title: "Sosyal medya yönetimi",
    formLabel: "Sosyal medya yönetimi",
    billing: "monthly",
    href: "/sosyal-medya-yonetimi",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: NaN,
        audience: "Tek kanalda düzenli görünmek isteyen küçük işletmeler",
        highlights: ["1 kanal yönetimi", "Ayda 10 özgün içerik", "8 tasarım + 2 video", "4 Story uyarlaması"]
      },
      buyume: {
        id: "buyume",
        price: NaN,
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
        price: NaN,
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
        price: NaN,
        audience: "Ayda birkaç dikey video paylaşmak isteyen işletmeler",
        highlights: ["Ayda 4 kısa video", "15–30 saniye", "1 format", "Reels, TikTok ve Shorts için dikey kurgu"]
      },
      buyume: {
        id: "buyume",
        price: NaN,
        audience: "Her hafta düzenli video yayınlamak isteyen markalar",
        highlights: ["Ayda 12 kısa video", "15–45 saniye", "2 format", "Senaryo ve hook yazımı", "AI seslendirme"]
      },
      kurumsal: {
        id: "kurumsal",
        price: NaN,
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
        price: NaN,
        audience: "Tek ürün veya kampanya için kısa bir reklam filmi isteyenler",
        highlights: ["1 film", "10–15 saniye", "En fazla 3 sahne", "1 format", "AI seslendirme dahil"]
      },
      buyume: {
        id: "buyume",
        price: NaN,
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
        price: NaN,
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
        price: NaN,
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
        price: NaN,
        audience: "Meta ve Google'da birlikte reklam veren KOBİ'ler",
        highlights: ["Meta + Google", "2 reklam hesabı", "4 aktif kampanya", `Aylık ${n(AD_SPEND_CAP.buyume)} TL'ye kadar harcama yönetimi`]
      },
      kurumsal: {
        id: "kurumsal",
        price: NaN,
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
        price: NaN,
        setupFee: NaN,
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
        price: NaN,
        setupFee: NaN,
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
        price: NaN,
        setupFee: NaN,
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
        price: NaN,
        maintenance: NaN,
        audience: "Birkaç tekrarlayan işi otomatikleştirmek isteyen işletmeler",
        highlights: ["2 iş akışı", "2 uygulama bağlantısı", "İlk 30 gün kurulum hatalarının giderilmesi"]
      },
      buyume: {
        id: "buyume",
        price: NaN,
        maintenance: NaN,
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
        price: NaN,
        maintenance: NaN,
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
      // Tutarlar fiyat kaynağından (veritabanı) türetilir; bkz. buildPrices
      row("İsteğe bağlı bakım (2. aydan)", "", "", "")
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
        price: NaN,
        audience: "Hızlı ve düzgün bir tanıtım sitesine ihtiyacı olan işletmeler",
        highlights: ["3–5 sayfa", "Standart bileşenlerle tasarım", "Mobil uyum", "İletişim formu", "Temel SEO"]
      },
      buyume: {
        id: "buyume",
        price: NaN,
        audience: "İçeriğini kendisi yöneten ve aramada bulunmak isteyen KOBİ'ler",
        highlights: ["10 sayfa", "Markaya özel 3 sayfa şablonu", "CMS ve blog", "Teknik SEO", "Ölçümleme kurulumu"]
      },
      kurumsal: {
        id: "kurumsal",
        price: NaN,
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
        price: NaN,
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
        price: NaN,
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
        price: NaN,
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
        price: NaN,
        audience: "Tanıtım sitesi veya landing page sahipleri",
        highlights: [`Ayda toplam ${WEB_MAINTENANCE_HOURS.baslangic} saat bakım ve değişiklik`]
      },
      buyume: {
        id: "buyume",
        price: NaN,
        audience: "Sitesini düzenli güncelleyen işletmeler",
        highlights: [`Ayda toplam ${WEB_MAINTENANCE_HOURS.buyume} saat bakım ve değişiklik`]
      },
      kurumsal: {
        id: "kurumsal",
        price: NaN,
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
  },

  /**
   * Online İş Kurma Paketi — e-ticaret sitesi (kurulum) + sosyal medya ve reklam yönetimi (aylık)
   * + 2 hediye AI reklam filmi. Fiyat, bileşenleri ayrı almaya göre en az %30 düşüktür
   * (karşılaştırma /online-is-kurma-paketi sayfasında bileşen fiyatlarından otomatik hesaplanır).
   */
  "online-is-paketi": {
    id: "online-is-paketi",
    title: "Online İş Kurma Paketi",
    formLabel: "Online İş Kurma Paketi",
    billing: "monthly",
    href: "/online-is-kurma-paketi",
    tiers: {
      baslangic: {
        id: "baslangic",
        price: NaN,
        setupFee: NaN,
        audience: "Dropshipping'e veya ilk online mağazasına başlayan girişimciler",
        highlights: [
          "E-ticaret sitesi: hazır tema, 50 ürün, ödeme + kargo",
          "Sosyal medya yönetimi: 1 kanal, ayda 10 içerik",
          "Reklam yönetimi: Meta veya Google, 2 kampanya",
          "Hediye: 2 AI reklam filmi (10–15 sn)"
        ]
      },
      buyume: {
        id: "buyume",
        price: NaN,
        setupFee: NaN,
        audience: "Fiziksel mağazasını online satışa taşıyan işletmeler",
        highlights: [
          "E-ticaret sitesi: özel arayüz, 250 ürün, 1 pazaryeri, kupon",
          "Sosyal medya yönetimi: 3 kanal, ayda 20 içerik (8 video)",
          "Meta reklam yönetimi dahil",
          "Hediye: 2 AI reklam filmi (30 sn, 2 format)"
        ]
      },
      kurumsal: {
        id: "kurumsal",
        price: NaN,
        setupFee: NaN,
        audience: "Geniş katalogla, birden fazla şube veya pazaryerinde satış yapan markalar",
        highlights: [
          "E-ticaret sitesi: 1.000 ürün, 2 dil, 2 pazaryeri, ERP bağlayıcısı",
          "Sosyal medya yönetimi: 5 kanal, ayda 30 içerik, aylık çekim",
          "Meta + Google reklam yönetimi dahil",
          "Hediye: 2 AI reklam filmi (60 sn, özel konsept)"
        ]
      }
    },
    details: [
      row("E-ticaret sitesi (kurulum)", "E-ticaret Başlangıç kapsamı", "E-ticaret Büyüme kapsamı", "E-ticaret Kurumsal kapsamı"),
      row("Ürün aktarımı (dosyadan)", "50", "250", "1.000"),
      row("Pazaryeri bağlayıcısı", "—", "1", "2"),
      row("Sosyal medya yönetimi (aylık)", "Başlangıç: 1 kanal, 10 içerik", "Büyüme: 3 kanal, 20 içerik", "Kurumsal: 5 kanal, 30 içerik"),
      row(
        "Reklam yönetimi (aylık)",
        `Meta veya Google; 2 kampanya, aylık ${n(AD_SPEND_CAP.baslangic)} TL'ye kadar harcama`,
        `Meta; 2 kampanya, aylık ${n(AD_SPEND_CAP.baslangic)} TL'ye kadar harcama`,
        `Meta + Google; 4 kampanya, aylık ${n(AD_SPEND_CAP.buyume)} TL'ye kadar harcama`
      ),
      row("Hediye AI reklam filmi", "2 × 10–15 sn", "2 × 30 sn, 2 format", "2 × 60 sn, özel konsept"),
      row("Taahhüt", "Yok", "Yok", "Yok")
    ],
    notes: [
      "Kurulum bedeli e-ticaret sitesini kapsar ve bir kez ödenir; aylık ücret sosyal medya ve reklam yönetimini kapsar.",
      "Taahhüt yoktur; aylık hizmeti istediğiniz ayın sonunda bırakabilirsiniz. Site sizde kalır.",
      "Hediye 2 AI reklam filmi site yayına alınırken teslim edilir.",
      "Reklam harcaması, e-ticaret altyapı/lisans abonelikleri, ödeme komisyonları ve kargo ücretleri dahil değildir."
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

export const SINGLE_STRUCTURE: Record<SingleId, SingleService> = {
  "landing-page": {
    id: "landing-page",
    title: "Landing page",
    formLabel: "Landing page",
    price: NaN,
    billing: "project",
    summary: "Tek sayfa, 6 bölüme kadar.",
    notes: ["Hosting, alan adı ve harici lisanslar hariçtir."],
    href: "/web-tasarim"
  },
  "instagram-dm": {
    id: "instagram-dm",
    title: "Instagram DM pazarlama otomasyonu",
    formLabel: "Instagram DM otomasyonu",
    price: NaN,
    billing: "one-time",
    setupFee: NaN,
    monthly: NaN,
    summary: "Yorum ve hikâye etkileşimine kural tabanlı otomatik DM. AI yanıt hizmeti değildir.",
    notes: ["Otomasyon platformu aboneliği hariçtir.", "AI ile serbest soru yanıtlama, AI müşteri asistanı kapsamındadır."],
    href: "/instagram-dm-otomasyonu"
  },
  "ai-telefon-asistani": {
    id: "ai-telefon-asistani",
    title: "AI telefon asistanı",
    formLabel: "AI telefon asistanı",
    price: NaN,
    billing: "monthly",
    setupFee: NaN,
    monthly: NaN,
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
    price: NaN,
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
    price: NaN,
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
    price: NaN,
    billing: "project",
    startingAt: true,
    summary: "Casual ve hyper-casual mobil oyun. Kesin bedel mekanik, seviye ve sanat kapsamına göre teklifte belirlenir.",
    notes: ["Mağaza hesapları, lisanslı müzik, sunucu ve pazarlama bütçesi hariçtir."],
    href: "/hizmetler/mobil-oyun"
  }
};

/* ------------------------------------------------------------------ */
/* Fiyat verisi: TEK KAYNAK Neon veritabanıdır                         */
/* ------------------------------------------------------------------ */
/**
 * Bu dosyada HİÇBİR tutar yoktur. Yukarıdaki PRICING_STRUCTURE / SINGLE_STRUCTURE yalnızca yapıyı
 * (paketler, kapsam metinleri, hangi pakette kurulum/bakım alanı olduğu) taşır; fiyat alanları NaN'dır
 * ve yalnızca "bu alan var" anlamına gelir. Tutarlar yayımlanmış sürümden (price_versions, status='published')
 * gelir: src/server/price-source.ts → getPrices() → buildPrices(). Veritabanı okunamazsa tutar gösterilmez.
 */
export type TierPrice = { price: number; setupFee?: number; maintenance?: number };
export type SinglePrice = { price: number; setupFee?: number; monthly?: number };
export interface PriceData {
  families: Record<FamilyId, Record<TierId, TierPrice>>;
  singles: Record<SingleId, SinglePrice>;
}

const TIER_IDS: TierId[] = ["baslangic", "buyume", "kurumsal"];

/** Fiyat okunamadığında tutar yerine gösterilen tarafsız metin (CTA ile birlikte) */
export const PRICE_CONTACT_TEXT = "Güncel fiyat bilgisi için bizimle iletişime geçin";
/** Tablo hücreleri için en kısa karşılığı */
export const PRICE_CONTACT_SHORT = "İletişime geçin";
/** Cümle içinde kullanılan kısa karşılığı */
export const PRICE_CONTACT_INLINE = "güncel fiyat için bizimle iletişime geçin";

const okAmount = (v: unknown): v is number => typeof v === "number" && Number.isInteger(v) && v > 0 && v <= 10_000_000;
const has = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v);

/** Fiyat verisini doğrular; yalnızca yapıda var olan alanlara izin verir. Hata listesi döner. */
export function validatePriceData(data: unknown): string[] {
  const errors: string[] = [];
  const d = data as PriceData;
  if (!d || typeof d !== "object" || !d.families || !d.singles) return ["Fiyat verisi eksik."];
  for (const f of Object.values(PRICING_STRUCTURE)) {
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
  for (const s of Object.values(SINGLE_STRUCTURE)) {
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

/**
 * YALNIZCA admin düzenleyicisi için: sürümde bulunmayan (sonradan eklenmiş) paket/hizmetler için boş (0) alanlar açar,
 * böylece yönetici değerleri girebilir. 0 bir fiyat değildir: validatePriceData 0'ı reddeder, yayımlanamaz ve
 * herkese açık sayfalara hiçbir zaman ulaşmaz (genel okuma yolu bu fonksiyonu kullanmaz).
 */
export function scaffoldPriceData(data: Partial<PriceData> | null | undefined): PriceData {
  const out = JSON.parse(JSON.stringify(data ?? {})) as PriceData;
  out.families = out.families ?? ({} as PriceData["families"]);
  out.singles = out.singles ?? ({} as PriceData["singles"]);
  for (const f of Object.values(PRICING_STRUCTURE)) {
    out.families[f.id] = out.families[f.id] ?? ({} as Record<TierId, TierPrice>);
    for (const id of TIER_IDS) {
      const b = f.tiers[id];
      const cur = out.families[f.id][id];
      out.families[f.id][id] = {
        price: cur?.price ?? 0,
        ...(b.setupFee !== undefined ? { setupFee: cur?.setupFee ?? 0 } : {}),
        ...(b.maintenance !== undefined ? { maintenance: cur?.maintenance ?? 0 } : {})
      };
    }
  }
  for (const s of Object.values(SINGLE_STRUCTURE)) {
    const cur = out.singles[s.id];
    out.singles[s.id] = {
      price: cur?.price ?? 0,
      ...(s.setupFee !== undefined ? { setupFee: cur?.setupFee ?? 0 } : {}),
      ...(s.monthly !== undefined ? { monthly: cur?.monthly ?? 0 } : {})
    };
  }
  return out;
}

/** 24900 → "24.900 TL" (ortama bağlı olmayan biçimlendirme). Geçersiz/eksik tutar için boş metin. */
export function formatTL(n: number): string {
  if (!has(n)) return "";
  const s = Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${s} TL`;
}

/** Paketin üç kademesinin fiyatları da biliniyor mu? */
export function familyAvailable(f: PricingFamily): boolean {
  return TIER_IDS.every((id) => {
    const t = f.tiers[id];
    return has(t.price) && (t.setupFee === undefined || has(t.setupFee)) && (t.maintenance === undefined || has(t.maintenance));
  });
}

/** Tekil hizmetin gösterilecek fiyatı biliniyor mu? */
export function singleAvailable(s: SingleService): boolean {
  return has(s.price) && (s.setupFee === undefined || has(s.setupFee)) && (s.monthly === undefined || has(s.monthly));
}

/** Aylık hizmet + kurulum için ilk ay toplamı */
export function firstMonthTotal(t: Tier): number | null {
  return t.setupFee && has(t.setupFee) && has(t.price) ? t.price + t.setupFee : null;
}

/** "9.900 TL / ay" gibi kısa gösterim (fiyat yoksa boş metin) */
export function tierPriceLabel(f: PricingFamily, id: TierId): string {
  const t = f.tiers[id];
  if (!has(t.price)) return "";
  const base = formatTL(t.price);
  return f.billing === "one-time" ? `${base} tek seferlik` : `${base} ${BILLING_SUFFIX[f.billing]}`;
}

/** Fiyat bilinmiyorsa cümle içinde kullanılabilen tarafsız ifade döner */
export function singlePriceLabel(s: SingleService): string {
  if (!singleAvailable(s)) return PRICE_CONTACT_INLINE;
  if (s.startingAt) return `${formatTL(s.price)}'den başlayan proje bedeli`;
  if (s.setupFee && s.monthly) return `${formatTL(s.setupFee)} kurulum + ${formatTL(s.monthly)} / ay`;
  return `${formatTL(s.price)} ${BILLING_SUFFIX[s.billing]}`;
}

/** Ailenin en düşük ve en yüksek ana fiyatı; fiyat yoksa null */
export function familyRange(f: PricingFamily): { low: number; high: number } | null {
  if (!familyAvailable(f)) return null;
  const prices = Object.values(f.tiers).map((t) => t.price);
  return { low: Math.min(...prices), high: Math.max(...prices) };
}

/** Boş liste yerine undefined: JSON-LD'de "offers" alanı hiç yazılmaz */
export function nonEmpty<T>(list: T[]): T[] | undefined {
  return list.length ? list : undefined;
}

/** Çözümlenmiş fiyat kitabı: bir sayfa üretiminde kullanılan TEK fiyat görünümü */
export interface Prices {
  /** Fiyat kaynağı (veritabanı) okunabildi mi? false ise hiçbir tutar yoktur (alanlar NaN) */
  available: boolean;
  version: number | null;
  publishedAt: string | null;
  PRICING: Record<FamilyId, PricingFamily>;
  SINGLE: Record<SingleId, SingleService>;
  /** "Başlangıç 9.900 TL / ay, Büyüme …" — fiyat yoksa tarafsız cümle */
  familyPriceSummary(fid: FamilyId): string;
  /** "1.500 / 3.500 / 9.900 TL / ay" — fiyat yoksa tarafsız cümle */
  maintenanceSummary(): string;
  /** İçerik dosyalarındaki {{...}} yer tutucularını çözer */
  resolvePriceTokens(text: string, opts?: { strict?: boolean }): string;
}
export type PriceSource = Prices;

const NAN_MARK = "__NaN__";
const clone = <T,>(v: T): T =>
  JSON.parse(
    JSON.stringify(v, (_k, x) => (typeof x === "number" && Number.isNaN(x) ? NAN_MARK : x)),
    (_k, x) => (x === NAN_MARK ? NaN : x)
  );

/**
 * Yayımlanmış (ya da önizlenen taslak) fiyat verisinden fiyat kitabı üretir. data=null → hiçbir tutar yok.
 * Verinin eksik bıraktığı paket/hizmet için tutar UYDURULMAZ; o kalem "fiyat yok" kalır.
 */
export function buildPrices(data: PriceData | null, meta: { version?: number | null; publishedAt?: string | null } = {}): Prices {
  const PRICING = clone(PRICING_STRUCTURE);
  const SINGLE = clone(SINGLE_STRUCTURE);
  if (data) {
    for (const f of Object.values(PRICING)) {
      for (const id of TIER_IDS) {
        const v = data.families?.[f.id]?.[id];
        const t = f.tiers[id];
        if (!v) continue;
        if (okAmount(v.price)) t.price = v.price;
        if (t.setupFee !== undefined && okAmount(v.setupFee)) t.setupFee = v.setupFee;
        if (t.maintenance !== undefined && okAmount(v.maintenance)) t.maintenance = v.maintenance;
      }
      // Ayrıntı tablosundaki bakım satırı da aynı kaynaktan türetilir
      if (TIER_IDS.every((id) => has(f.tiers[id].maintenance))) {
        for (const r of f.details) {
          if (r.label.startsWith("İsteğe bağlı bakım")) {
            for (const id of TIER_IDS) r.values[id] = `${formatTL(f.tiers[id].maintenance!)} / ay`;
          }
        }
      }
    }
    for (const s of Object.values(SINGLE)) {
      const v = data.singles?.[s.id];
      if (!v) continue;
      if (s.setupFee !== undefined && okAmount(v.setupFee)) s.setupFee = v.setupFee;
      if (s.monthly !== undefined && okAmount(v.monthly)) s.monthly = v.monthly;
      // Kurulum + aylık hizmetlerde "price" türetilir: aylık hizmetlerde aylık ücret, tek seferliklerde kurulum.
      if (s.setupFee !== undefined && s.monthly !== undefined) {
        if (has(s.setupFee) && has(s.monthly)) s.price = s.billing === "monthly" ? s.monthly : s.setupFee;
      } else if (okAmount(v.price)) s.price = v.price;
    }
  }

  const familyPriceSummary = (fid: FamilyId): string => {
    const f = PRICING[fid];
    if (!familyAvailable(f)) return PRICE_CONTACT_INLINE;
    return TIER_IDS.map((id) => {
      const t = f.tiers[id];
      let out = `${TIER_NAMES[id]} ${tierPriceLabel(f, id)}`;
      if (t.setupFee) out += ` + ${formatTL(t.setupFee)} kurulum (ilk ay ${formatTL(t.price + t.setupFee)})`;
      if (fid === "web-bakim") out += ` (toplam ${WEB_MAINTENANCE_HOURS[id]} saat)`;
      return out;
    }).join(", ");
  };

  const maintenanceSummary = (): string => {
    const t = PRICING["is-otomasyonu"].tiers;
    if (!familyAvailable(PRICING["is-otomasyonu"])) return PRICE_CONTACT_INLINE;
    return `${formatTL(t.baslangic.maintenance!).replace(" TL", "")} / ${formatTL(t.buyume.maintenance!).replace(" TL", "")} / ${formatTL(t.kurumsal.maintenance!)} / ay`;
  };

  /**
   * İçerik dosyalarındaki (JSON/Markdown) fiyat yer tutucularını çözer. İçerik dosyaları tutar içermez:
   *   {{fiyatlar:FAMILY}} {{fiyat:FAMILY:TIER}} {{kurulum:FAMILY:TIER}} {{ilkay:FAMILY:TIER}}
   *   {{bakim:TIER}} {{tekil:SINGLE}}  → veritabanı fiyatından
   *   {{reklam-limit:TIER}} {{ai-kota:TIER}} → paket kotaları (fiyat değil; koddaki sabitler)
   * Fiyat okunamıyorsa yer tutucu tarafsız bir ifadeye dönüşür. Bilinmeyen yer tutucu strict modda hata verir
   * (test bunu tüm içerik dosyalarında zorlar); çalışma anında sayfa 500 vermesin diye tarafsız ifade basılır.
   */
  const resolvePriceTokens = (text: string, opts: { strict?: boolean } = {}): string =>
    text.replace(/\{\{([a-z-]+):([a-z-]+)(?::([a-z]+))?\}\}/g, (all, kind: string, a: string, b?: string) => {
      const fam = (PRICING as Record<string, PricingFamily>)[a];
      const isTier = (id: string | undefined): id is TierId => id === "baslangic" || id === "buyume" || id === "kurumsal";
      const bad = () => {
        if (opts.strict) throw new Error(`Geçersiz fiyat yer tutucusu: ${all}`);
        return PRICE_CONTACT_INLINE;
      };
      switch (kind) {
        case "fiyatlar":
          if (!fam) return bad();
          return familyPriceSummary(a as FamilyId);
        case "fiyat":
          if (!fam || !isTier(b)) return bad();
          return has(fam.tiers[b].price) ? tierPriceLabel(fam, b) : PRICE_CONTACT_INLINE;
        case "kurulum": {
          if (!fam || !isTier(b) || fam.tiers[b].setupFee === undefined) return bad();
          const v = fam.tiers[b].setupFee!;
          return has(v) ? formatTL(v) : PRICE_CONTACT_INLINE;
        }
        case "ilkay": {
          if (!fam || !isTier(b) || fam.tiers[b].setupFee === undefined) return bad();
          const v = firstMonthTotal(fam.tiers[b]);
          return v === null ? PRICE_CONTACT_INLINE : formatTL(v);
        }
        case "bakim": {
          if (!isTier(a)) return bad();
          const m = PRICING["is-otomasyonu"].tiers[a].maintenance;
          return m !== undefined && has(m) ? `${formatTL(m)} / ay` : PRICE_CONTACT_INLINE;
        }
        case "tekil": {
          const s = (SINGLE as Record<string, SingleService>)[a];
          if (!s) return bad();
          return singleAvailable(s) ? singlePriceLabel(s) : PRICE_CONTACT_INLINE;
        }
        case "reklam-limit":
          if (!isTier(a)) return bad();
          return formatTL(AD_SPEND_CAP[a]);
        case "ai-kota":
          if (!isTier(a)) return bad();
          return n(AI_REPLY_QUOTA[a]);
      }
      return bad();
    });

  return {
    available: data !== null,
    version: meta.version ?? null,
    publishedAt: meta.publishedAt ?? null,
    PRICING,
    SINGLE,
    familyPriceSummary,
    maintenanceSummary,
    resolvePriceTokens
  };
}

/* ------------------------------------------------------------------ */
/* Yardımcılar (fiyat içermez)                                         */
/* ------------------------------------------------------------------ */

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

/** Schema.org Offer listesi — paket fiyatları KDV hariç TRY. Fiyat bilinmiyorsa BOŞ liste (Offer yazılmaz). */
export function familyOffersSchema(f: PricingFamily) {
  if (!familyAvailable(f)) return [];
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

/** Hizmet formundaki seçenekler (iletişim sayfası) — yalnızca ad listesi */
export const SERVICE_OPTIONS: string[] = [
  ...Object.values(PRICING_STRUCTURE).map((f) => f.formLabel),
  ...Object.values(SINGLE_STRUCTURE).map((s) => s.formLabel)
];

/** Tekil hizmetler için schema.org Offer listesi (aylık ücret + varsa tek seferlik kurulum). Fiyat yoksa boş liste. */
export function singleOffersSchema(s: SingleService) {
  if (!singleAvailable(s)) return [];
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
