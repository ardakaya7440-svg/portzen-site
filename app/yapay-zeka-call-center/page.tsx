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
import { SinglePriceSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";
import { SINGLE, singleOffersSchema, singlePriceLabel } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Yapay Zeka Call Center | Türkçe Sesli AI Müşteri Hizmetleri - PORTZEN",
  description:
    "Yapay zeka call center kurulumu: 7/24 Türkçe sesli müşteri desteği, çağrı karşılama, randevu açma. Rutin çağrıları AI karşılar, gerektiğinde ekibinize aktarır.",
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
      "7/24 Türkçe konuşan yapay zeka call center. Çağrı karşılama, randevu açma, sipariş alma, fiyat bilgisi. Rutin çağrılar için AI birinci hat, gerektiğinde insan operatöre aktarım."
  },
  twitter: {
    card: "summary_large_image",
    title: "Yapay Zeka Call Center | Türkçe Sesli AI Müşteri Hizmetleri",
    description:
      "PORTZEN AI Call Center: 7/24 Türkçe sesli müşteri desteği, çağrı karşılama, randevu ve sipariş. Rutin çağrılar AI'da, hassas çağrılar ekibinizde."
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
    telephone: "+905318639117",
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
  offers: singleOffersSchema(SINGLE["ai-telefon-asistani"]),
  description:
    "PORTZEN, KOBİ ve kurumsal işletmeler için Türkçe konuşan yapay zeka call center kurar. 7/24 çağrı karşılama, randevu açma, fiyat bilgisi, sipariş alma ve gerektiğinde insan operatöre aktarım. Premium Türkçe ses kütüphanesi, kurumsal sesli AI konuşma altyapısı, kurumsal konuşma tanıma motoru ve kurumsal telefon altyapısı ile düşük gecikmeli, doğal Türkçe aksanlı sesli AI asistan."
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
        text: "Premium Türkçe ses kütüphanesi ve düşük gecikmeli kurumsal sesli AI konuşma altyapısı doğal bir konuşma hedefler. Yine de biz baştan dürüst konumlandırmayı öneriyoruz: 'Merhaba, ben AI asistanıyım' cümlesi beklentiyi baştan netleştirir. Marka tercih ederse tam gizli mod da mümkün."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe aksanı nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premium Türkçe ses kütüphanemiz artık İstanbul Türkçesine çok yakın telaffuz sunuyor. Bölgesel aksanlar (Ege, Karadeniz, Doğu) da opsiyonel. Vurgu, tonlama ve doğal duraklar var, robotik değil. Test sürecinde örnek çağrılar dinlenip ince ayar yapılır - jargon, sektörel terim ve markaya özel kelimeler eklenir."
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
        text: "İki seçenek var. Birincisi: kurumsal telefon altyapımız üzerinden yeni bir Türkiye numarası (0850, 0212, 0216 gibi) alıp AI'ya bağlarız; kullanıma açılma süresi numara sağlayıcısının sürecine bağlıdır. İkincisi: mevcut numaranıza SIP trunk veya çağrı yönlendirme kurulur, arayanları AI karşılar. Mevcut PBX santral (3CX, Netgsm, Vodafone İş Ortağım vb.) çoğu senaryoda desteklenir. Kurulum bedeli bir kez alınır; numara/hat ve dakika gideri sağlayıcı tarifesine %20 işletim payı eklenerek ayrıca faturalanır."
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
        text: "AI call center KVKK gerekliliklerini dikkate alarak kurgulanır: aydınlatma metni çağrının başında oynatılır, kayıt ve kişisel veri işleme onayı alınır. Ses kayıtlarının hangi sağlayıcıda ve bölgede tutulacağı, şifreleme ve saklama/imha süresi kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Aydınlatma metni ve açık rıza şablonları hazırlanır; nihai hukuki kontrolün kendi hukuk danışmanınızca yapılmasını öneririz."
      }
    },
    {
      "@type": "Question",
      name: "Kaç günde kurulur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Süreç brief, persona tanımı, bilgi tabanı hazırlığı ve numara temini ile başlar; ardından test çağrıları, senaryo ince ayarı ve KVKK belgeleri gelir. Sadece çağrı karşılama + SSS içeren basit senaryolar, sipariş alma, randevu açma ve CRM entegrasyonu içeren projelere göre daha kısa sürer. Canlıya geçiş sonrası ince ayar kapsamı da teklifte belirtilir."
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
  { metric: "Türkçe", label: "Sesli asistan" },
  { metric: "İnsan devri", label: "Gerektiğinde operatöre aktarım" },
  { metric: "Tek seferlik", label: "Kurulum + aylık yönetim bedeli" }
];

const differentiators = [
  {
    icon: BarChart3,
    title: "Farklı bir maliyet yapısı",
    desc: "5 kişilik bir çağrı merkezi ekibinin aylık toplam maliyeti (maaş, SGK, ekipman, yer) ciddi bir rakam tutar. AI call center rutin çağrılar için aylık yönetim bedeli ve kullanım kadar dakika gideriyle çalışır; hastalık ve tatil nedeniyle kesinti olmaz."
  },
  {
    icon: Clock,
    title: "7/24 açık, tatilde bile çalışır",
    desc: "Gece 03:00'te randevu almak isteyen hasta, pazar günü sipariş vermek isteyen müşteri, resmi tatilde acil arayan mülk sahibi. Klasik çağrı merkezi hepsini kaçırır. AI call center hepsini karşılar, ertesi gün ekibinize hazır özet sunar."
  },
  {
    icon: Users,
    title: "Aynı anda birden fazla görüşme",
    desc: "Sezonsal yoğunlukta klasik merkez zorlanır: müşteri bekletilir, meşgul çalar, kaçırılan çağrı olur. AI paralel altyapı ile aynı anda birden fazla görüşmeyi karşılayabilir; eş zamanlı kapasite kullanılan telefon altyapısına göre teklifte belirtilir. Cuma akşamı restoran rezervasyonu veya kampanya gecesi gelen çağrılar daha kolay karşılanır."
  },
  {
    icon: Mic,
    title: "Türkçe doğal aksan, sektöre özel dil",
    desc: "Premium Türkçe ses kütüphanesi ile İstanbul Türkçesine yakın doğal telaffuz. Sağlık, restoran, emlak gibi sektörlerin kendi jargonu bilgi tabanına yüklenir. Robotik ton yok, tonlama var, duraklar doğal. Bölgesel aksanlar (Ege, Karadeniz) opsiyonel."
  }
];

const capabilities = [
  {
    icon: PhoneIncoming,
    title: "Gelen çağrıları karşılar",
    desc: "Türkçe olarak arayanı selamlar, konuyu dinler, gerekli soruları sorar. Ses tonu, tonlama ve duraklar doğal. KVKK aydınlatma metni gerekiyorsa baştan otomatik oynatılır.",
    color: "bg-light"
  },
  {
    icon: Calendar,
    title: "Randevu açar, iptal eder, ertelenir",
    desc: "Klinik, oto servis, güzellik salonu, konsültasyon randevusu. Uygun saati müsaitlik takviminden okur, çakışmayı önler, randevuyu Google Calendar veya CRM'e yazar. İptal ve erteleme aynı çağrıda çözülür.",
    color: "bg-light"
  },
  {
    icon: Phone,
    title: "Fiyat ve ürün bilgisi verir",
    desc: "Bilgi tabanına yüklü hizmet, ürün ve fiyat listesinden anında yanıt. Kampanyalar, indirimler ve özel koşullar da tanımlanabilir. Hangi soruyu kaç kez sorulduğunu raporlar - satış ekibine geri bildirim.",
    color: "bg-light"
  },
  {
    icon: PhoneCall,
    title: "Sipariş alır",
    desc: "Restoran paket sipariş, e-ticaret telefon siparişi, hizmet talebi. Ürün + adet + adres + ödeme yöntemi soru akışında toplanır. Sipariş POS'a, mutfağa veya CRM'e otomatik düşer. Onay SMS/WhatsApp ile müşteriye gider.",
    color: "bg-light"
  },
  {
    icon: Bot,
    title: "Sık sorulan sorulara anlık cevap",
    desc: "Çalışma saatleri, adres, iade politikası, kargo süresi, garanti kapsamı. FAQ bilgi tabanına yüklendikten sonra AI bu soruları anında yanıtlar. Her ay hangi yeni sorunun geldiği raporlanır, bilgi tabanı büyür.",
    color: "bg-light"
  },
  {
    icon: PhoneForwarded,
    title: "Gerektiğinde insan operatöre aktarır",
    desc: "Öfkeli müşteri, iptal talebi, şikayet, karmaşık teknik sorun. Önceden yazılı kurallara göre AI çağrıyı ilgili çalışana aktarır, WhatsApp'a yönlendirir veya geri arama listesine kaydeder. Çağrı cevapsız kalmak yerine yönlendirilir.",
    color: "bg-light"
  }
];

const techStack = [
  {
    icon: Mic,
    name: "Premium Türkçe Ses Kütüphanesi",
    role: "Türkçe konuşan AI ses",
    desc: "Türkçe optimize edilmiş nöral ses modelleri ile İstanbul Türkçesine yakın doğal telaffuz. Kadın, erkek, farklı yaş ve ton seçenekleri. Bölgesel aksan ve markaya özel klon ses seçeneği. Konuşma kalitesi için seçilmiş ses modelleri.",
    color: "bg-light"
  },
  {
    icon: Zap,
    name: "Kurumsal Sesli AI Motoru",
    role: "Düşük gecikmeli konuşma motoru",
    desc: "Düşük gecikme hedeflenir; amaç, klasik çağrı botlarındaki uzun sessizlikler olmadan doğal bir konuşma temposudur. Aynı anda dinler ve yanıt üretir, sözü kesme (interrupt) tanır.",
    color: "bg-light"
  },
  {
    icon: Headphones,
    name: "Kurumsal Konuşma Tanıma",
    role: "Türkçe konuşma tanıma (STT)",
    desc: "Speech-to-text (konuşmayı yazıya çevirme) motorumuz kurumsal seviye. Türkçe için yüksek doğruluk hedeflenir; doğruluk ortam gürültüsüne ve hat kalitesine göre değişebilir. Sektörel jargon eğitilebilir.",
    color: "bg-light"
  },
  {
    icon: Phone,
    name: "Kurumsal Telefon Altyapısı",
    role: "Telefon altyapısı",
    desc: "Türkiye numaraları (0850, 0212, 0216), SIP trunk desteği, çağrı kayıt, IVR (interactive voice response - sesli menü) altyapısı. Veri lokasyonu KVKK açısından önemlidir; kullanılacak bölge teklifte yazılı olarak belirtilir. Mevcut PBX santralinizle entegrasyon mümkün.",
    color: "bg-light"
  }
];

const sectors = [
  {
    name: "Klinik",
    desc: "Randevu alma, doktor müsaitlik kontrolü, tahlil sonuç bilgilendirme, hasta hatırlatma çağrıları.",
    color: "bg-light",
    link: "/whatsapp-ai-asistani/klinik"
  },
  {
    name: "Restoran",
    desc: "Rezervasyon açma, paket sipariş alma, menü ve fiyat sorgusu, iptal yönetimi, sadakat programı.",
    color: "bg-light",
    link: "/whatsapp-ai-asistani/restoran"
  },
  {
    name: "Emlak",
    desc: "Mülk sorgulama, portföy bilgisi, danışman yönlendirme, ekspertiz talebi, satış-kira ayrımı.",
    color: "bg-light",
    link: "/whatsapp-ai-asistani/emlak"
  },
  {
    name: "Oto Servis",
    desc: "Bakım randevusu, arıza dinleme, fiyat tahmini, servis durumu takibi, hatırlatma çağrıları.",
    color: "bg-light",
    link: "/whatsapp-ai-asistani/oto-servis"
  },
  {
    name: "E-ticaret",
    desc: "Sipariş takibi, iade süreci, kargo durumu, ürün stok bilgisi, kampanya bilgilendirme.",
    color: "bg-light",
    link: "/crm-otomasyonu/e-ticaret"
  },
  {
    name: "Otel",
    desc: "Rezervasyon alma, check-in bilgisi, oda müsaitlik, fiyat sorgusu, çoklu dil desteği.",
    color: "bg-light",
    link: "/whatsapp-ai-asistani/otel"
  }
];


const comparison = [
  {
    criteria: "Aylık toplam maliyet",
    classic: "5 kişi + yer + ekipman maaş ve giderleri",
    ai: `${singlePriceLabel(SINGLE["ai-telefon-asistani"])}; dakika ve hat gideri ayrıca`
  },
  {
    criteria: "Çalışma saatleri",
    classic: "08:00-18:00, hafta içi",
    ai: "7/24, tatil dahil kesintisiz"
  },
  {
    criteria: "Eş zamanlı görüşme kapasitesi",
    classic: "5 kişi = 5 çağrı",
    ai: "Paralel çağrı (kapasite altyapıya göre)"
  },
  {
    criteria: "Hastalık, izin, tatil",
    classic: "Kaçınılmaz kesinti",
    ai: "Yok, kesintisiz servis"
  },
  {
    criteria: "Kalite ve ton tutarlılığı",
    classic: "Kişiden kişiye, günden güne değişken",
    ai: "Tanımlı script'e göre tutarlı"
  },
  {
    criteria: "Kurulum ve devreye alma",
    classic: "İşe alma + eğitim (2-3 ay)",
    ai: "Teslim süresi teklifte yazılı"
  },
  {
    criteria: "Ölçeklenme",
    classic: "Yeni kişi = yeni maliyet",
    ai: "Dakika gideri kullanım kadar faturalanır"
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
    a: "Premium Türkçe ses kütüphanesi ve düşük gecikmeli kurumsal sesli AI konuşma altyapımız doğal bir konuşma hedefler. Yine de biz baştan dürüst konumlandırmayı öneriyoruz: 'Merhaba, ben AI asistanıyım' cümlesi beklentiyi baştan netleştirir. Marka tercih ederse tam gizli mod da mümkün, ancak KVKK ve tüketici hukuku açısından dürüst yaklaşım daha güvenli."
  },
  {
    q: "Türkçe aksanı nasıl?",
    a: "Premium Türkçe ses kütüphanemiz artık İstanbul Türkçesine çok yakın telaffuz sunuyor. Bölgesel aksanlar (Ege, Karadeniz, Doğu) da opsiyonel olarak eklenebilir. Vurgu, tonlama ve doğal duraklar var, robotik değil. Test sürecinde örnek çağrılar dinlenip ince ayar yapılır. Jargon, sektörel terim, marka ismi ve özel kelimeler telaffuz sözlüğüne eklenir - örneğin 'PORTZEN', 'ekshoz', 'radyoterapi' gibi kelimeler doğru telaffuz edilir."
  },
  {
    q: "Karmaşık soruda ne olur, AI kaybolur mu?",
    a: "AI'nın cevaplayamayacağı, öfkeli müşteri veya iptal-şikayet gibi hassas durumlar için insan operatöre aktarım kuralları baştan yazılır. 3 senaryo mümkün: (1) canlı transfer - bir çalışanınızın telefonuna anında aktarılır, (2) geri arama kaydı - iletişim bilgisi ve konu alınıp size özet olarak iletilir ve geri arama listesine eklenir, (3) WhatsApp yönlendirme - müşteriye WhatsApp AI asistanı üzerinden yazılı devam mesajı gider. Aktarım kuralları paneldeki karar ağacında görsel olarak yönetilir, siz istediğiniz zaman değiştirebilirsiniz."
  },
  {
    q: "Telefon numarası nasıl alınır, mevcut numarama bağlanır mı?",
    a: "İki seçenek var. Birincisi: kurumsal telefon altyapımız üzerinden yeni bir Türkiye numarası (0850, 0212, 0216, 0232 gibi) alıp AI'ya bağlarız; kullanıma açılma süresi numara sağlayıcısının sürecine bağlıdır. İkincisi: mevcut numaranıza SIP trunk (IP tabanlı telefon hattı) veya çağrı yönlendirme kurulur, arayanları AI karşılar. Mevcut PBX santral (3CX, Netgsm, Vodafone İş Ortağım, Türk Telekom Kurumsal vb.) çoğu senaryoda desteklenir. Kurulum bedeli bir kez alınır; numara/hat ve dakika gideri sağlayıcı tarifesine %20 işletim payı eklenerek ayrıca faturalanır."
  },
  {
    q: "Mevcut CRM'e bağlanır mı?",
    a: "Evet. Türkiye'de yaygın CRM'lerin çoğuna (Hubspot, Zoho, Pipedrive, Bitrix24, Netgsm CRM, Setrow, Loopus, MikroCRM, custom sistemler) entegrasyon kurulur. Her çağrının özeti, arayan bilgisi, ses kaydı linki, alınan aksiyon (randevu tarihi, sipariş detayı, geri arama talebi) otomatik olarak CRM'e kart olarak düşer. Ayrıca Google Sheets, Excel, WhatsApp Business ve e-posta üzerinden basit entegrasyonlar da mümkün. Detaylı akış için CRM Otomasyonu sayfamıza bakabilirsiniz."
  },
  {
    q: "KVKK uyumu var mı, ses kayıtları nerede saklanıyor?",
    a: "AI call center KVKK gerekliliklerini dikkate alarak kurgulanır: aydınlatma metni çağrının başında otomatik oynatılır, kayıt ve kişisel veri işleme onayı alınır. Ses kayıtlarının hangi sağlayıcıda ve bölgede tutulacağı, şifreleme yöntemi ve saklama/imha süresi kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Aydınlatma metni ve açık rıza şablonları hazırlanıp teslim edilir; nihai hukuki kontrolün kendi hukuk danışmanınızca yapılmasını öneririz."
  },
  {
    q: "Kaç günde kurulur, süreç ne kadar sürer?",
    a: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Süreç brief, persona tanımı, bilgi tabanı hazırlığı ve numara temini ile başlar; ardından test çağrıları, senaryo ince ayarı, CRM entegrasyonu ve KVKK belgeleri gelir. Sadece çağrı karşılama + SSS içeren basit senaryolar, sipariş alma, randevu açma ve karmaşık CRM entegrasyonu içeren projelere göre daha kısa sürer. Canlıya geçiş sonrası ince ayar kapsamı da teklifte belirtilir."
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. HERO */}
      <section className="bg-white py-section">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <PhoneCall className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Yapay Zeka Call Center</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Yapay Zeka Call Center - Türkçe Sesli AI Müşteri Hizmetleri
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  7/24 Türkçe konuşan yapay zeka call center kurulumu. Rutin çağrılarda çağrı karşılama, randevu açma, sipariş alma ve fiyat bilgisi; hassas durumlarda ekibinize aktarım. Premium Türkçe ses kütüphanesi, kurumsal sesli AI konuşma altyapısı ve kurumsal telefon altyapısı ile doğal aksan ve düşük gecikme hedeflenir; akış KVKK gerekliliklerini dikkate alarak kurgulanır.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
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
                      "border-3 border-ink/15 p-5 shadow-brutal rounded-2xl",
                      i % 2 === 0 ? "bg-light" : "bg-light text-ink"
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

      <ServiceAtAGlance href="/yapay-zeka-call-center" />

      <MoreDetails title="Ayrıntılar: Neden AI call center?" summary="Maliyet yapısı, 7/24 çalışma, paralel görüşme ve Türkçe ses">
      {/* 2. NEDEN AI CALL CENTER */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Neden AI Call Center
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Klasik çağrı merkezi Türkiye KOBİ&apos;sine ağır.
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                5 kişilik bir çağrı merkezi kurmak, işletmek ve büyütmek Türkiye&apos;de bir orta ölçekli işletmenin en pahalı gider kalemi hâline geliyor. AI call center rutin çağrıları üstlenerek bu maliyet yapısını değiştirir. İşte dört temel farklılık:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/10 bg-light p-6 rounded-2xl">
                    <Icon className="h-8 w-8 text-ink mb-4" />
                    <h3 className="font-display text-xl font-black mb-3">{d.title}</h3>
                    <p className="text-body opacity-85 leading-relaxed">{d.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* 3. NE YAPIYOR */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Ne yapıyor?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yapay zeka call center gerçekte hangi görevleri yerine getirir?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                AI call center sadece &quot;merhaba, hoş geldiniz&quot; diyen bir karşılama robotu değil. Gerçek işleri yapan tam bir müşteri hizmetleri operatörü. İşte devreye alınan tipik senaryolarda AI&apos;nın üstlendiği 6 ana görev:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 shadow-brutal-sm mb-4 rounded-full", c.color)}>
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
            <div className="mt-10 border-3 border-ink/15 bg-light text-ink p-6 shadow-brutal rounded-2xl">
              <div className="flex flex-wrap items-start gap-4">
                <MessageCircle className="h-8 w-8 shrink-0" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-xl font-black mb-2">Sesli değil yazılı asistan mı arıyorsunuz?</h3>
                  <p className="text-sm opacity-90 leading-relaxed mb-3">
                    Müşterileriniz daha çok WhatsApp&apos;tan mı yazıyor? WhatsApp AI Asistanı ürünümüz sesli çağrı yerine yazılı sohbet üzerinden aynı işleri yapar, üstelik daha uygun maliyetlidir.
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

      <MoreDetails title="Ayrıntılar: Teknoloji altyapısı" summary="Ses, konuşma tanıma ve telefon altyapısı">
      {/* 4. TEKNOLOJİ ALTYAPISI */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Teknoloji altyapısı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Kurumsal altyapı, Türkçe&apos;ye özel ayar.
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                AI call center&apos;ın kalitesi kullandığı altyapıdan geliyor. PORTZEN tek bir sağlayıcıya değil, her katmanda kurumsal seviye sağlayıcılara bağlanıyor: ses üretiminde premium Türkçe ses kütüphanesi, konuşma anlamada kurumsal STT motoru, düşünme motorunda kurumsal sesli AI altyapısı, telefon hattında kurumsal PSTN operatörleri. Bu kombinasyon Türkçe için özel ayarlanır. Hangi sağlayıcıları kullandığımız iş sırrımızdır; sözleşme aşamasında NDA altında paylaşılır.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/10 bg-light p-6 rounded-2xl">
                    <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink/10 mb-4 rounded-full", t.color)}>
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <div className="font-display text-xl font-black mb-1">{t.name}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-ink mb-3">{t.role}</div>
                    <p className="text-sm opacity-85 leading-relaxed">{t.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* 5. SEKTÖREL KULLANIM */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sektörel kullanım
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sektörünüze özel senaryo, günlük iş yükü kadar somut.
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                AI call center&apos;ın gücü genel amaçlı değil, sektöre göre uzmanlaşmış senaryo yazımından geliyor. Bir kliniğin randevu akışı ile bir restoranın rezervasyon akışı aynı olamaz. PORTZEN her sektör için ayrı bir senaryo kitabı kullanır - sık gelen sorular, tipik akış, aktarım kuralları, entegrasyon noktaları sektöre özel. İşte senaryo yazdığımız 6 örnek sektör:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <Link
                  href={s.link}
                  className={cn(
                    "block border-3 border-ink/15 p-5 shadow-brutal hover:shadow-brutal-lg transition-all h-full text-ink rounded-2xl",
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

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <SinglePriceSection id="ai-telefon-asistani" heading="AI telefon asistanı fiyatı" intro="Aylık ücret yönetim bedelidir; tek seferlik kurulum ve ilk ay toplamı fiyatın hemen altında yazılıdır. Dakika ve hat ücretleri kullanıma göre değiştiği için ayrıca faturalanır. Tutarlar TL ve KDV hariçtir." />


      <MoreDetails title="Ayrıntılar: Klasik çağrı merkezi vs AI call center" summary="Genel karşılaştırma tablosu">
      {/* 8. KARŞILAŞTIRMA TABLOSU */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Klasik çağrı merkezi vs AI call center
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Karar vermeden önce iki modeli yan yana koymak faydalı. Aşağıdaki tablo Türkiye&apos;de tipik bir 5 kişilik çağrı merkezi ekibi ile aynı iş yükünü karşılayan bir AI call center&apos;ı 8 kriterde kıyaslıyor. Tablo genel bir karşılaştırmadır; gerçek rakamlar işletmeye göre değişir.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-3 border-ink/10 bg-light overflow-hidden rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_1.5fr] border-b-3 border-ink/10 bg-light font-display text-sm font-black uppercase">
                <div className="p-4 border-r-3 border-ink/10">Kriter</div>
                <div className="p-4 border-r-3 border-ink/10 text-ink/70">Klasik Çağrı Merkezi</div>
                <div className="p-4 text-ink">AI Call Center</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={i}
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_1.5fr] text-sm",
                    i !== comparison.length - 1 && "border-b-3 border-ink/10"
                  )}
                >
                  <div className="p-4 border-r-3 md:border-r-3 border-ink/10 font-bold">{row.criteria}</div>
                  <div className="p-4 border-r-3 md:border-r-3 border-ink/10 opacity-80">{row.classic}</div>
                  <div className="p-4 font-bold text-ink">{row.ai}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-ink shrink-0" />
                <p className="text-sm opacity-85 leading-relaxed">
                  <strong className="text-ink">Not:</strong> AI call center klasik ekibin tamamen yerine geçmek zorunda değil. En yaygın modelde AI birinci hattı (rutin çağrılar) karşılar, karmaşık veya hassas çağrıları 1-2 insan operatöre aktarır. Bu hibrit yaklaşım rutin iş yükünü AI&apos;ya taşırken hassas çağrıları insana bırakır.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      {/* 9. FAQ */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
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
                <div className="border-l-3 border-ink/15 pl-6">
                  <h3 className="font-display text-xl font-black mb-3 text-ink">{f.q}</h3>
                  <p className="text-body text-ink/75 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Blog iç link bloğu */}
          <Reveal delay={300}>
            <div className="mt-12 border-3 border-ink/15 bg-light p-6 shadow-brutal rounded-2xl">
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
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Çağrı merkezinizi AI&apos;ya devredelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz demo görüşmesinde canlı bir AI call center örneği dinletiyoruz, sektörünüze özel senaryo öneriyoruz. Maliyet yapısını ve teslim takvimini net konuşuyoruz. Hemen WhatsApp yazın veya iletişim formunu doldurun, en kısa sürede dönüş yapıyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905318639117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Mesaj At
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/10 grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div>
                  <a href="tel:+905318639117" className="font-bold hover:underline">0531 863 91 17</a>
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
