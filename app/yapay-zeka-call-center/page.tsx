import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneForwarded,
  Mic,
  Bot,
  MessageCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  Search,
  Users,
  BarChart3,
  Calendar,
  Target,
  ShieldCheck,
  Zap,
  Headphones
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Yapay Zeka Call Center | Türkçe Sesli AI Müşteri Hizmetleri - PORTZEN",
  description:
    "Yapay zeka call center kurulumu: 7/24 Türkçe sesli müşteri desteği, çağrı karşılama, randevu açma. Personel maliyeti olmadan profesyonel çağrı merkezi.",
  keywords: [
    "yapay zeka call center",
    "ai call center",
    "sesli yapay zeka",
    "türkçe voice bot",
    "ai çağrı merkezi",
    "yapay zeka müşteri hizmetleri",
    "voice ai türkiye",
    "otomatik çağrı sistemi",
    "yapay zeka telefon asistanı",
    "kobi call center"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/yapay-zeka-call-center",
    siteName: "PORTZEN",
    title: "Yapay Zeka Call Center | Türkçe Sesli AI Müşteri Hizmetleri - PORTZEN",
    description:
      "7/24 Türkçe konuşan yapay zeka call center. Çağrı karşılama, randevu açma, sipariş alma, fiyat bilgisi. 5 kişilik ekip yerine tek AI asistan, aylık 12.000 TL'den."
  },
  twitter: {
    card: "summary_large_image",
    title: "Yapay Zeka Call Center | Türkçe Sesli AI Müşteri Hizmetleri",
    description:
      "PORTZEN AI Call Center: 7/24 Türkçe sesli müşteri desteği, çağrı karşılama, randevu ve sipariş. Personel maliyeti olmadan çağrı merkezi."
  },
  alternates: { canonical: "https://portzenai.com/yapay-zeka-call-center" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Yapay Zeka Call Center Kurulumu ve Yönetimi",
  serviceType: "Yapay Zeka Call Center Kurulumu ve Yönetimi",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressCountry: "TR"
    }
  },
  areaServed: [
    { "@type": "Country", name: "Turkey" }
  ],
  description:
    "PORTZEN, KOBİ ve kurumsal işletmeler için Türkçe konuşan yapay zeka call center kurar. 7/24 çağrı karşılama, randevu açma, fiyat bilgisi, sipariş alma ve gerektiğinde insan operatöre aktarım. ElevenLabs, OpenAI Realtime API, Deepgram ve Twilio altyapısı ile düşük gecikmeli, doğal Türkçe aksanlı sesli AI asistan.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "TRY",
    lowPrice: "12000",
    highPrice: "85000",
    priceRange: "₺12.000-₺85.000/ay",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Müşteri robot olduğunu anlar mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ElevenLabs Türkçe sesleri ve OpenAI Realtime API'nin düşük gecikmeli konuşma altyapısı sayesinde ilk 30-60 saniyede fark edilmesi zor. Yine de biz baştan dürüst konumlandırmayı öneriyoruz: 'Merhaba, ben AI asistanıyım' cümlesi güveni artırıyor ve şikayet oranını düşürüyor. Marka tercih ederse tam gizli mod da mümkün."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe aksanı nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ElevenLabs'in Türkçe optimize edilmiş sesleri artık İstanbul Türkçesine çok yakın telaffuz sunuyor. Bölgesel aksanlar (Ege, Karadeniz, Doğu) da opsiyonel. Vurgu, tonlama ve doğal duraklar var, robotik değil. 1 haftalık test sürecinde 20-30 gerçek çağrı dinlenip ince ayar yapılır - jargon, sektörel terim ve markaya özel kelimeler eklenir."
      }
    },
    {
      "@type": "Question",
      name: "Karmaşık soruda ne olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI'nın cevaplayamayacağı, öfkeli müşteri veya iptal-şikayet gibi hassas durumlar için insan operatöre aktarım kuralları baştan yazılır. 3 senaryo mümkün: (1) canlı transfer - bir çalışanınızın telefonuna aktarılır, (2) geri arama kaydı - iletişim bilgisi + konu alınıp size iletilir, (3) WhatsApp yönlendirme - müşteriye WhatsApp AI asistanı üzerinden devam mesajı gider. Aktarım kuralları paneldeki karar ağacında görsel olarak yönetilir."
      }
    },
    {
      "@type": "Question",
      name: "Telefon numarası nasıl alınır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İki seçenek var. Birincisi: Twilio veya Vonage üzerinden yeni bir Türkiye numarası (0850, 0212, 0216 gibi) alıp AI'ya bağlarız - 3-5 iş gününde kullanılabilir. İkincisi: mevcut numaranıza SIP trunk veya çağrı yönlendirme kurulur, arayanları AI karşılar. Mevcut PBX santral (3CX, Netgsm, Vodafone İş Ortağım vb.) çoğu senaryoda desteklenir. Kurulum bir kez, aylık numara bedeli 300-800 TL aralığındadır."
      }
    },
    {
      "@type": "Question",
      name: "Mevcut CRM'e bağlanır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Türkiye'de yaygın CRM'lerin çoğuna (Hubspot, Zoho, Pipedrive, Bitrix24, Netgsm CRM, Setrow, Loopus, custom sistemler) entegrasyon kurulur. Her çağrının özeti, arayan bilgisi, alınan aksiyon (randevu, sipariş, geri arama) otomatik CRM'e kart olarak düşer. Ayrıca Google Sheets, Excel ve WhatsApp Business üzerinden basit entegrasyonlar da mümkün. Detaylı akış için CRM Otomasyonu sayfamıza bakabilirsiniz."
      }
    },
    {
      "@type": "Question",
      name: "KVKK uyumu var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. AI call center KVKK aydınlatma metni çağrının başında oynatılır, kayıt ve kişisel veri işleme onayı alınır. Ses kayıtları AB veya Türkiye lokasyonlu sunucularda saklanır (Twilio EU, Vonage EU seçenekleri). Kişisel veriler şifrelenmiş şekilde tutulur, süreli imha politikası uygulanır. Aydınlatma metni ve açık rıza şablonları PORTZEN tarafından hukuk danışmanı desteğiyle hazırlanır."
      }
    },
    {
      "@type": "Question",
      name: "Kaç günde kurulur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ortalama 14 gün. İlk hafta brief, persona tanımı, bilgi tabanı hazırlığı ve numara temini. İkinci hafta test çağrıları, senaryo ince ayarı ve KVKK belgeleri. Basit senaryolarda (sadece çağrı karşılama + FAQ) 7 gün yeterli olabiliyor. Sipariş alma, randevu açma ve CRM entegrasyonu olan projelerde 21 güne çıkabilir. Kurulum sonrası ilk 30 gün haftalık ince ayar dahildir."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Yapay Zeka Call Center",
      item: "https://portzenai.com/yapay-zeka-call-center"
    }
  ]
};

const heroStats = [
  { metric: "7/24", label: "Kesintisiz çağrı karşılama" },
  { metric: "50+", label: "Eş zamanlı görüşme kapasitesi" },
  { metric: "%85", label: "Personel maliyet tasarrufu" },
  { metric: "14 gün", label: "Ortalama canlıya alma süresi" }
];

const differentiators = [
  {
    icon: BarChart3,
    title: "Personel maliyetinin altıda biri",
    desc: "5 kişilik bir çağrı merkezi ekibinin aylık toplam maliyeti (maaş, SGK, ekipman, yer) 130.000-160.000 TL. AI call center başlangıç paketi 12.000 TL, kurumsal seviyede 45.000 TL. Aynı kapasiteyi %75-85 daha az maliyetle sunuyor, hastalık ve tatilde kesinti yok."
  },
  {
    icon: Clock,
    title: "7/24 açık, tatilde bile çalışır",
    desc: "Gece 03:00'te randevu almak isteyen hasta, pazar günü sipariş vermek isteyen müşteri, resmi tatilde acil arayan mülk sahibi. Klasik çağrı merkezi hepsini kaçırır. AI call center hepsini karşılar, ertesi gün ekibinize hazır özet sunar."
  },
  {
    icon: Users,
    title: "Aynı anda 50+ görüşme",
    desc: "Sezonsal yoğunlukta klasik merkez çöker: müşteri bekletilir, meşgul çalar, kaçırılan çağrı olur. AI paralel altyapı ile 50+ eş zamanlı görüşme yapabilir. Cuma akşamı restoran rezervasyonu, aylık kampanya gecesi e-ticaret çağrı patlaması sorun olmaktan çıkar."
  },
  {
    icon: Mic,
    title: "Türkçe doğal aksan, sektöre özel dil",
    desc: "ElevenLabs Türkçe sesler ile İstanbul Türkçesine yakın doğal telaffuz. Sağlık, restoran, emlak gibi sektörlerin kendi jargonu bilgi tabanına yüklenir. Robotik ton yok, tonlama var, duraklar doğal. Bölgesel aksanlar (Ege, Karadeniz) opsiyonel."
  }
];

const capabilities = [
  {
    icon: PhoneIncoming,
    title: "Gelen çağrıları karşılar",
    desc: "Türkçe olarak arayanı selamlar, konuyu dinler, gerekli soruları sorar. Ses tonu, tonlama ve duraklar doğal. KVKK aydınlatma metni gerekiyorsa baştan otomatik oynatılır.",
    color: "bg-brand-blue"
  },
  {
    icon: Calendar,
    title: "Randevu açar, iptal eder, ertelenir",
    desc: "Klinik, oto servis, güzellik salonu, konsültasyon randevusu. Uygun saati müsaitlik takviminden okur, çakışmayı önler, randevuyu Google Calendar veya CRM'e yazar. İptal ve erteleme aynı çağrıda çözülür.",
    color: "bg-brand-pink"
  },
  {
    icon: Phone,
    title: "Fiyat ve ürün bilgisi verir",
    desc: "Bilgi tabanına yüklü hizmet, ürün ve fiyat listesinden anında yanıt. Kampanyalar, indirimler ve özel koşullar da tanımlanabilir. Hangi soruyu kaç kez sorulduğunu raporlar - satış ekibine geri bildirim.",
    color: "bg-brand-yellow"
  },
  {
    icon: PhoneCall,
    title: "Sipariş alır",
    desc: "Restoran paket sipariş, e-ticaret telefon siparişi, hizmet talebi. Ürün + adet + adres + ödeme yöntemi soru akışında toplanır. Sipariş POS'a, mutfağa veya CRM'e otomatik düşer. Onay SMS/WhatsApp ile müşteriye gider.",
    color: "bg-brand-green"
  },
  {
    icon: Bot,
    title: "Sık sorulan sorulara anlık cevap",
    desc: "Çalışma saatleri, adres, iade politikası, kargo süresi, garanti kapsamı. FAQ bilgi tabanına yüklendikten sonra AI bu soruları anında yanıtlar. Her ay hangi yeni sorunun geldiği raporlanır, bilgi tabanı büyür.",
    color: "bg-brand-purple"
  },
  {
    icon: PhoneForwarded,
    title: "Gerektiğinde insan operatöre aktarır",
    desc: "Öfkeli müşteri, iptal talebi, şikayet, karmaşık teknik sorun. Önceden yazılı kurallara göre AI çağrıyı ilgili çalışana aktarır, WhatsApp'a yönlendirir veya geri arama listesine kaydeder. Kimse cevapsız kalmaz.",
    color: "bg-brand-orange"
  }
];

const techStack = [
  {
    icon: Mic,
    name: "ElevenLabs",
    role: "Türkçe konuşan AI ses",
    desc: "Türkçe optimize edilmiş nöral ses modelleri ile İstanbul Türkçesine yakın doğal telaffuz. Kadın, erkek, farklı yaş ve ton seçenekleri. Bölgesel aksan ve markaya özel klon ses seçeneği. Endüstri lideri konuşma kalitesi.",
    color: "bg-brand-pink"
  },
  {
    icon: Zap,
    name: "OpenAI Realtime API",
    role: "Düşük gecikmeli konuşma motoru",
    desc: "Konuşmaya cevap verme gecikmesi 300-500 ms - yani doğal insan tempo. Klasik çağrı botlarındaki 2-3 saniye sessizlik burada yok. Aynı anda dinler ve yanıt üretir, sözü kesme (interrupt) tanır.",
    color: "bg-brand-yellow"
  },
  {
    icon: Headphones,
    name: "Deepgram",
    role: "Türkçe konuşma tanıma (STT)",
    desc: "Speech-to-text (konuşmayı yazıya çevirme) motorumuz Deepgram. Türkçe için %92-95 doğruluk. Gürültülü ortamda bile isim, adres ve sipariş detayı doğru anlaşılır. Sektörel jargon eğitilebilir.",
    color: "bg-brand-blue"
  },
  {
    icon: Phone,
    name: "Twilio + Vonage",
    role: "Telefon altyapısı",
    desc: "Türkiye numaraları (0850, 0212, 0216), SIP trunk desteği, çağrı kayıt, IVR (interactive voice response - sesli menü) altyapısı. AB lokasyonu KVKK uyumu için kritik. Mevcut PBX santralinizle entegrasyon mümkün.",
    color: "bg-brand-green"
  }
];

const sectors = [
  {
    name: "Klinik",
    desc: "Randevu alma, doktor müsaitlik kontrolü, tahlil sonuç bilgilendirme, hasta hatırlatma çağrıları.",
    color: "bg-brand-blue",
    link: "/whatsapp-ai-asistani/klinik"
  },
  {
    name: "Restoran",
    desc: "Rezervasyon açma, paket sipariş alma, menü ve fiyat sorgusu, iptal yönetimi, sadakat programı.",
    color: "bg-brand-yellow",
    link: "/whatsapp-ai-asistani/restoran"
  },
  {
    name: "Emlak",
    desc: "Mülk sorgulama, portföy bilgisi, danışman yönlendirme, ekspertiz talebi, satış-kira ayrımı.",
    color: "bg-brand-orange",
    link: "/whatsapp-ai-asistani/emlak"
  },
  {
    name: "Oto Servis",
    desc: "Bakım randevusu, arıza dinleme, fiyat tahmini, servis durumu takibi, hatırlatma çağrıları.",
    color: "bg-brand-purple",
    link: "/whatsapp-ai-asistani/oto-servis"
  },
  {
    name: "E-ticaret",
    desc: "Sipariş takibi, iade süreci, kargo durumu, ürün stok bilgisi, kampanya bilgilendirme.",
    color: "bg-brand-green",
    link: "/crm-otomasyonu/e-ticaret"
  },
  {
    name: "Otel",
    desc: "Rezervasyon alma, check-in bilgisi, oda müsaitlik, fiyat sorgusu, çoklu dil desteği.",
    color: "bg-brand-pink",
    link: "/whatsapp-ai-asistani/otel"
  }
];

const packages = [
  {
    name: "Başlangıç",
    price: "12.000 TL",
    period: "/ay",
    desc: "Tek sektör, temel karşılama için KOBİ'ler",
    color: "bg-paper",
    features: [
      "Aylık 500 dakika konuşma hakkı",
      "1 sektör, 1 senaryo",
      "Türkçe ElevenLabs sesi (1 karakter)",
      "Temel FAQ bilgi tabanı",
      "Google Sheets veya Excel kayıt",
      "KVKK aydınlatma metni",
      "Aylık 1 rapor + ince ayar",
      "E-posta desteği"
    ],
    cta: "Başlangıç Paketi Konuşalım"
  },
  {
    name: "Büyüme",
    price: "25.000 TL",
    period: "/ay",
    desc: "Çoklu senaryo, aktif çağrı hacmi",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "Aylık 2.000 dakika konuşma hakkı",
      "3-5 senaryo (randevu + sipariş + FAQ)",
      "2 farklı Türkçe ses karakteri",
      "Genişletilmiş bilgi tabanı",
      "CRM entegrasyonu (Hubspot, Zoho, Bitrix, Pipedrive)",
      "İnsan operatöre canlı transfer",
      "WhatsApp yönlendirme entegrasyonu",
      "Aylık 2 rapor + haftalık ince ayar",
      "Öncelikli WhatsApp destek"
    ],
    cta: "Büyüme Paketi Al"
  },
  {
    name: "Kurumsal",
    price: "45.000 TL+",
    period: "/ay",
    desc: "Sınırsız hat, çoklu numara, tam entegrasyon",
    color: "bg-paper",
    features: [
      "Sınırsız dakika (fair use)",
      "Çoklu senaryo + çoklu numara",
      "Marka özel klon ses (opsiyonel)",
      "Özel bilgi tabanı + günlük güncelleme",
      "Custom CRM ve ERP entegrasyonu",
      "Ses kaydı analitiği + duygu analizi",
      "Adanmış proje yöneticisi",
      "7/24 SLA garantili destek",
      "Aylık 4 strateji toplantısı",
      "Bölgesel aksan opsiyonu"
    ],
    cta: "Kurumsal Teklif Al"
  }
];

const comparison = [
  {
    criteria: "Aylık toplam maliyet",
    classic: "130.000-160.000 TL (5 kişi + yer + ekipman)",
    ai: "12.000-45.000 TL"
  },
  {
    criteria: "Çalışma saatleri",
    classic: "08:00-18:00, hafta içi",
    ai: "7/24, tatil dahil kesintisiz"
  },
  {
    criteria: "Eş zamanlı görüşme kapasitesi",
    classic: "5 kişi = 5 çağrı",
    ai: "50+ paralel çağrı"
  },
  {
    criteria: "Hastalık, izin, tatil",
    classic: "Kaçınılmaz kesinti",
    ai: "Yok, kesintisiz servis"
  },
  {
    criteria: "Kalite ve ton tutarlılığı",
    classic: "Kişiden kişiye, günden güne değişken",
    ai: "%100 sabit, script'e uygun"
  },
  {
    criteria: "Kurulum ve devreye alma",
    classic: "İşe alma + eğitim (2-3 ay)",
    ai: "14 gün ortalama"
  },
  {
    criteria: "Ölçeklenme",
    classic: "Yeni kişi = yeni maliyet",
    ai: "Dakika paketi artırılır"
  },
  {
    criteria: "Raporlama ve kayıt",
    classic: "Manuel, kısıtlı, zaman alır",
    ai: "Otomatik özet + tam ses kaydı"
  }
];

const faqs = [
  {
    q: "Müşteri robot olduğunu anlar mı?",
    a: "ElevenLabs Türkçe sesleri ve OpenAI Realtime API'nin düşük gecikmeli konuşma altyapısı sayesinde ilk 30-60 saniyede fark edilmesi zor. Yine de biz baştan dürüst konumlandırmayı öneriyoruz: 'Merhaba, ben AI asistanıyım' cümlesi güveni artırıyor ve şikayet oranını düşürüyor. Marka tercih ederse tam gizli mod da mümkün, ancak KVKK ve tüketici hukuku açısından dürüst yaklaşım daha güvenli."
  },
  {
    q: "Türkçe aksanı nasıl?",
    a: "ElevenLabs'in Türkçe optimize edilmiş sesleri artık İstanbul Türkçesine çok yakın telaffuz sunuyor. Bölgesel aksanlar (Ege, Karadeniz, Doğu) da opsiyonel olarak eklenebilir. Vurgu, tonlama ve doğal duraklar var, robotik değil. 1 haftalık test sürecinde 20-30 gerçek çağrı dinlenip ince ayar yapılır. Jargon, sektörel terim, marka ismi ve özel kelimeler telaffuz sözlüğüne eklenir - örneğin 'PORTZEN', 'ekshoz', 'radyoterapi' gibi kelimeler doğru telaffuz edilir."
  },
  {
    q: "Karmaşık soruda ne olur, AI kaybolur mu?",
    a: "AI'nın cevaplayamayacağı, öfkeli müşteri veya iptal-şikayet gibi hassas durumlar için insan operatöre aktarım kuralları baştan yazılır. 3 senaryo mümkün: (1) canlı transfer - bir çalışanınızın telefonuna anında aktarılır, (2) geri arama kaydı - iletişim bilgisi ve konu alınıp size özet olarak iletilir, en geç 2 saat içinde aranır, (3) WhatsApp yönlendirme - müşteriye WhatsApp AI asistanı üzerinden yazılı devam mesajı gider. Aktarım kuralları paneldeki karar ağacında görsel olarak yönetilir, siz istediğiniz zaman değiştirebilirsiniz."
  },
  {
    q: "Telefon numarası nasıl alınır, mevcut numarama bağlanır mı?",
    a: "İki seçenek var. Birincisi: Twilio veya Vonage üzerinden yeni bir Türkiye numarası (0850, 0212, 0216, 0232 gibi) alıp AI'ya bağlarız - 3-5 iş gününde kullanılabilir hâle gelir. İkincisi: mevcut numaranıza SIP trunk (IP tabanlı telefon hattı) veya çağrı yönlendirme kurulur, arayanları AI karşılar. Mevcut PBX santral (3CX, Netgsm, Vodafone İş Ortağım, Türk Telekom Kurumsal vb.) çoğu senaryoda desteklenir. Kurulum ücreti bir kez alınır, aylık numara bedeli 300-800 TL aralığındadır ve pakete ek olarak faturalanır."
  },
  {
    q: "Mevcut CRM'e bağlanır mı?",
    a: "Evet. Türkiye'de yaygın CRM'lerin çoğuna (Hubspot, Zoho, Pipedrive, Bitrix24, Netgsm CRM, Setrow, Loopus, MikroCRM, custom sistemler) entegrasyon kurulur. Her çağrının özeti, arayan bilgisi, ses kaydı linki, alınan aksiyon (randevu tarihi, sipariş detayı, geri arama talebi) otomatik olarak CRM'e kart olarak düşer. Ayrıca Google Sheets, Excel, WhatsApp Business ve e-posta üzerinden basit entegrasyonlar da mümkün. Detaylı akış için CRM Otomasyonu sayfamıza bakabilirsiniz."
  },
  {
    q: "KVKK uyumu var mı, ses kayıtları nerede saklanıyor?",
    a: "Evet, tam KVKK uyumu var. AI call center KVKK aydınlatma metni çağrının başında otomatik oynatılır, kayıt ve kişisel veri işleme onayı alınır. Ses kayıtları AB veya Türkiye lokasyonlu sunucularda saklanır (Twilio EU, Vonage EU seçenekleri kullanılır). Kişisel veriler AES-256 şifreleme ile tutulur, süreli imha politikası (varsayılan 90 gün) uygulanır. Aydınlatma metni ve açık rıza şablonları PORTZEN tarafından hukuk danışmanı desteğiyle hazırlanır, sözleşmenizle birlikte teslim edilir."
  },
  {
    q: "Kaç günde kurulur, süreç ne kadar sürer?",
    a: "Ortalama 14 gün. İlk hafta brief, persona tanımı, bilgi tabanı hazırlığı ve numara temini. İkinci hafta test çağrıları, senaryo ince ayarı, CRM entegrasyonu ve KVKK belgeleri. Basit senaryolarda (sadece çağrı karşılama + FAQ) 7 gün yeterli olabiliyor. Sipariş alma, randevu açma ve karmaşık CRM entegrasyonu olan projelerde 21 güne çıkabilir. Kurulum sonrası ilk 30 gün haftalık ince ayar dahildir, bu sürede AI'nın Türkçe doğruluğu ve senaryo akıcılığı sabit tempoyla iyileştirilir."
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. HERO */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-ink/60">
              <Link href="/" className="hover:text-ink transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Yapay Zeka Call Center</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <PhoneCall className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Yapay Zeka Call Center</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Yapay Zeka Call Center - Türkçe Sesli AI Müşteri Hizmetleri
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  7/24 Türkçe konuşan yapay zeka call center kurulumu. Personel maliyeti olmadan çağrı karşılama, randevu açma, sipariş alma ve fiyat bilgisi. 5 kişilik ekibin maliyetinin altıda birine, aynı anda 50 çağrı kapasitesi. ElevenLabs Türkçe sesi, OpenAI Realtime API ve Twilio altyapısı ile doğal aksan, düşük gecikme, KVKK uyumlu.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905015884853"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((s, i) => (
                  <div
                    key={i}
                    className={cn(
                      "border-3 border-ink p-5 shadow-brutal",
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-blue text-paper"
                    )}
                  >
                    <div className="font-display text-4xl md:text-5xl font-black leading-none mb-2">
                      {s.metric}
                    </div>
                    <div className="text-xs font-medium opacity-90">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. NEDEN AI CALL CENTER */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Neden AI Call Center
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Klasik çağrı merkezi Türkiye KOBİ'sine ağır.
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                5 kişilik bir çağrı merkezi kurmak, işletmek ve büyütmek Türkiye'de bir orta ölçekli işletmenin en pahalı gider kalemi hâline geliyor. AI call center bu maliyet yapısını baştan değiştiriyor, üstelik hizmet kalitesi ve kapasite artıyor. İşte dört temel farklılık:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-paper bg-paper/5 p-6 shadow-[8px_8px_0_#FFFDF5]">
                    <Icon className="h-8 w-8 text-brand-yellow mb-4" />
                    <h3 className="font-display text-xl font-black mb-3">{d.title}</h3>
                    <p className="text-body opacity-85 leading-relaxed">{d.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. NE YAPIYOR */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Ne yapıyor?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yapay zeka call center gerçekte hangi görevleri yerine getirir?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                AI call center sadece "merhaba, hoş geldiniz" diyen bir karşılama robotu değil. Gerçek işleri yapan tam bir müşteri hizmetleri operatörü. İşte devreye alınan tipik senaryolarda AI'nın üstlendiği 6 ana görev:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink shadow-brutal-sm mb-4", c.color)}>
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{c.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{c.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* WhatsApp AI alternatif linki */}
          <Reveal delay={400}>
            <div className="mt-10 border-3 border-ink bg-brand-green text-paper p-6 shadow-brutal">
              <div className="flex flex-wrap items-start gap-4">
                <MessageCircle className="h-8 w-8 shrink-0" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-xl font-black mb-2">Sesli değil yazılı asistan mı arıyorsunuz?</h3>
                  <p className="text-sm opacity-90 leading-relaxed mb-3">
                    Müşterileriniz daha çok WhatsApp'tan mı yazıyor? WhatsApp AI Asistanı ürünümüz sesli çağrı yerine yazılı sohbet üzerinden aynı işleri yapar, üstelik daha uygun maliyetlidir.
                  </p>
                  <Link href="/whatsapp-ai-asistani" className="inline-flex items-center gap-1 text-sm font-bold uppercase hover:gap-2 transition-all">
                    WhatsApp AI Asistanı incele <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. TEKNOLOJİ ALTYAPISI */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Teknoloji altyapısı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Endüstri lideri altyapı, Türkçe'ye özel optimize.
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                AI call center'ın kalitesi kullandığı altyapıdan geliyor. PORTZEN tek bir sağlayıcıya değil, her katmanda en iyisine bağlanıyor: ses üretiminde ElevenLabs, konuşma anlamada Deepgram, düşünme motorunda OpenAI Realtime API, telefon hattında Twilio ve Vonage. Bu kombinasyon Türkçe için özel ayarlanır.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-paper bg-paper/5 p-6 shadow-[8px_8px_0_#FFFDF5]">
                    <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-paper shadow-[4px_4px_0_#FFFDF5] mb-4", t.color)}>
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <div className="font-display text-xl font-black mb-1">{t.name}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-yellow mb-3">{t.role}</div>
                    <p className="text-sm opacity-85 leading-relaxed">{t.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SEKTÖREL KULLANIM */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sektörel kullanım
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sektörünüze özel senaryo, günlük iş yükü kadar somut.
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                AI call center'ın gücü genel amaçlı değil, sektöre göre uzmanlaşmış senaryo yazımından geliyor. Bir kliniğin randevu akışı ile bir restoranın rezervasyon akışı aynı olamaz. PORTZEN her sektör için ayrı bir senaryo kitabı kullanır - sık gelen sorular, tipik akış, aktarım kuralları, entegrasyon noktaları sektöre özel. İşte en aktif olduğumuz 6 sektör:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <Link
                  href={s.link}
                  className={cn(
                    "block border-3 border-ink p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full text-ink",
                    s.color
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-display text-xl font-black">{s.name}</div>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-8 text-sm text-ink/60 max-w-2xl">
              Sektörünüz listede değil mi? Endişelenmeyin, kuaför, eczane, avukat, muhasebe, spor salonu, kargo, sigorta ve daha fazlası için de senaryo yazıyoruz. Keşif görüşmesinde sektörünüze özel akış önerisi sunuyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. FİYAT PAKETLERİ */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şeffaf fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yapay zeka call center fiyatları - net aralıklar
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                AI call center fiyatlandırması dakika bazlıdır, sözleşme dışı sürpriz gider olmaz. Üç paket net yayında. Tam rakam; aylık dakika hacmi, senaryo sayısı, entegrasyon kapsamı ve bölgesel aksan gibi özelleştirmelere göre keşif görüşmesinde netleşir. Kurulum ücreti pakete dahildir, ekstra numara bedeli aylık 300-800 TL.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={cn(
                    "border-3 border-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full flex flex-col relative",
                    p.color,
                    "text-ink"
                  )}
                >
                  {p.badge && (
                    <div className="absolute -top-3 left-6 border-3 border-ink bg-brand-pink text-paper px-2 py-0.5 text-xs font-black uppercase shadow-brutal-sm">
                      {p.badge}
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-black mb-2">{p.name}</h3>
                  <div className="mb-1">
                    <span className="font-display text-3xl font-black">{p.price}</span>
                    <span className="text-sm opacity-70">{p.period}</span>
                  </div>
                  <div className="text-xs font-bold opacity-75 mb-6">{p.desc}</div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-4 py-2.5 text-xs font-bold uppercase text-paper shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    {p.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mt-8 text-sm text-ink/60 max-w-2xl">
              <strong>Not:</strong> Dakika hakkı aşılırsa ek dakika 4-8 TL aralığında faturalanır. Numara bedeli (Twilio/Vonage) aylık 300-800 TL, pakete ek. Kurumsal pakette fair use politikası uygulanır - aylık 10.000 dakika üzeri kullanımlar önceden bildirilir.
            </p>
          </Reveal>

          {/* İç link bloğu - diğer hizmetlere */}
          <Reveal delay={400}>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Link
                href="/whatsapp-ai-asistani"
                className="block border-3 border-ink bg-brand-green text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <MessageCircle className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">WhatsApp AI Asistanı</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Sesli değil, yazılı asistan. WhatsApp üzerinden 7/24 müşteri desteği - AI call center'ın yazılı kardeşi.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/crm-otomasyonu"
                className="block border-3 border-ink bg-brand-purple text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Target className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">CRM Otomasyonu</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  AI call center'ın topladığı arayan bilgileri, randevu ve siparişleri CRM'e otomatik akıtma katmanı.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/web-tasarim"
                className="block border-3 border-ink bg-brand-blue text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Sparkles className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">Web Tasarım</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Site içi çağrı formu, tık-ara butonu ve landing sayfa entegrasyonu. AI call center'a giden trafiği artırır.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. KARŞILAŞTIRMA TABLOSU */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Klasik çağrı merkezi vs AI call center
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Karar vermeden önce iki modeli yan yana koymak faydalı. Aşağıdaki tablo Türkiye'de tipik bir 5 kişilik çağrı merkezi ekibi ile aynı iş yükünü karşılayan bir AI call center'ı 8 kriterde kıyaslıyor. Sayılar 2026 Türkiye ortalamalarıdır.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-3 border-paper bg-paper/5 shadow-[8px_8px_0_#FFFDF5] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_1.5fr] border-b-3 border-paper bg-ink font-display text-sm font-black uppercase">
                <div className="p-4 border-r-3 border-paper">Kriter</div>
                <div className="p-4 border-r-3 border-paper text-paper/70">Klasik Çağrı Merkezi</div>
                <div className="p-4 text-brand-yellow">AI Call Center</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={i}
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_1.5fr] text-sm",
                    i !== comparison.length - 1 && "border-b-3 border-paper/30"
                  )}
                >
                  <div className="p-4 border-r-3 md:border-r-3 border-paper/30 font-bold">{row.criteria}</div>
                  <div className="p-4 border-r-3 md:border-r-3 border-paper/30 opacity-80">{row.classic}</div>
                  <div className="p-4 font-bold text-brand-yellow">{row.ai}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-brand-yellow shrink-0" />
                <p className="text-sm opacity-85 leading-relaxed">
                  <strong className="text-paper">Not:</strong> AI call center klasik ekibin tamamen yerine geçmek zorunda değil. En yaygın modelde AI birinci hattı (rutin çağrılar) karşılar, karmaşık veya hassas çağrıları 1-2 insan operatöre aktarır. Bu hibrit yaklaşım hem maliyeti düşürür hem de müşteri memnuniyetini korur.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yapay zeka call center hakkında merak edilenler
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-brand-pink pl-6">
                  <h3 className="font-display text-xl font-black mb-3 text-ink">{f.q}</h3>
                  <p className="text-body text-ink/75 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Blog iç link bloğu */}
          <Reveal delay={300}>
            <div className="mt-12 border-3 border-ink bg-brand-yellow p-6 shadow-brutal">
              <div className="flex items-start gap-4 flex-wrap">
                <Search className="h-6 w-6 shrink-0 text-ink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-3 text-ink">Daha derin okuma için blog yazılarımız</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/blog/whatsapp-ai-asistani-nedir" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        WhatsApp AI Asistanı nedir, nasıl çalışır <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/yapay-zeka-musteri-hizmetleri" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        Yapay zeka müşteri hizmetleri KOBİ için nasıl işler <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/ai-chatbot-bilgi-tabani" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        AI chatbot bilgi tabanı hazırlama rehberi <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-blue p-8 md:p-14 shadow-brutal-lg text-paper">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Çağrı merkezinizi AI'ya devredelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz demo görüşmesinde canlı bir AI call center örneği dinletiyoruz, sektörünüze özel senaryo öneriyoruz. Aylık personel maliyetinizi kaç bin TL düşüreceğinizi, kaç günde canlıya alacağınızı net konuşuyoruz. Hemen WhatsApp yazın veya iletişim formunu doldurun, aynı gün dönüyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Mesaj At
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-paper/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div>
                  <a href="tel:+905015884853" className="font-bold hover:underline">0501 588 48 53</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">E-posta</div>
                  <a href="mailto:destek@portzenai.com" className="font-bold hover:underline break-all">destek@portzenai.com</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Konum</div>
                  <span className="font-bold">İzmir - Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
