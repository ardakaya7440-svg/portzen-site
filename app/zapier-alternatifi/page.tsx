import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  X,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  Workflow,
  Plug,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  Languages,
  Wallet,
  Boxes
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Zapier Alternatifi | Türk Uygulamalarına Entegre Otomasyon — PORTZEN",
  description:
    "Zapier'in dolar fiyatı yerine n8n + Make + özel kod ile Logo, Mikro, NetGSM, Iyzico entegre TL otomasyon. KOBİ için 24.000 TL'den, KVKK uyumlu.",
  keywords: [
    "zapier alternatifi",
    "zapier türkçe",
    "zapier yerine ne",
    "n8n türkiye",
    "make integromat türkçe",
    "logo otomasyon",
    "mikro entegrasyon",
    "iş otomasyonu türkiye"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/zapier-alternatifi",
    siteName: "PORTZEN",
    title: "Zapier Alternatifi | PORTZEN n8n + Make + Özel Kod",
    description:
      "Zapier'in $99 USD/ay yerine ₺24.000 TL/ay. Logo, Mikro, NetGSM, Iyzico hazır entegrasyon. Türkçe panel, KVKK uyumlu."
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapier Alternatifi | PORTZEN",
    description:
      "Türk uygulamaları (Logo, Mikro, NetGSM) entegre, TL fiyat, KVKK uyumlu otomasyon."
  },
  alternates: { canonical: "https://portzenai.com/zapier-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Zapier Alternatifi — PORTZEN n8n + Make + Özel Otomasyon",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "portzenajans@gmail.com"
  },
  serviceType: "Business Process Automation",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Zapier'in eksik kaldığı Türk uygulamalarına (Logo, Mikro, Netsis, NetGSM, Iyzico) entegre, TL faturalı, Türkçe destekli ve KVKK uyumlu otomasyon altyapısı.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺12000-₺50000",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Zapier'den n8n'e taşıma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mevcut Zap'larınızı analiz edip 14-21 iş gününde n8n + Make üzerinde yeniden kuruyoruz. Eski sistemi kapatmadan paralel test ediyoruz, kesinti sıfır."
      }
    },
    {
      "@type": "Question",
      name: "n8n self-hosted mı yoksa Zapier gibi cloud mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İkisi de mümkün. Çoğu KOBİ için PORTZEN'in yönettiği bulut sunucuda n8n çalıştırıyoruz — Zapier gibi bakım dert değil. KVKK için isteyene Türkiye sunucusunda self-hosted kurulum da yapıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Logo, Mikro, Netsis gibi Türk muhasebe yazılımlarına entegre olur mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Logo Tiger/Go, Mikro Run, Netsis Wings için hazır webhook + API katmanımız var. Zapier'de hiçbiri yok, custom integration için ayrı geliştirici tutmanız gerekiyordu."
      }
    },
    {
      "@type": "Question",
      name: "NetGSM, Iletimerkezi gibi Türk SMS sağlayıcıları için connector var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. NetGSM, İletimerkezi, Verimor, Sms.net ve Mutlu Cep için kurulu connector. Zapier'in Twilio (USD bazlı) zorunluluğu yok."
      }
    },
    {
      "@type": "Question",
      name: "Aylık operasyon ücreti dahilinde ne var?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunucu kira, n8n + Make lisans, bakım, hata izleme, ayda 4 saatlik akış güncelleme, Türkçe canlı destek (WhatsApp + telefon) ve aylık performans raporu."
      }
    },
    {
      "@type": "Question",
      name: "Mevcut Zapier Zap'larım taşınır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zapier'in JSON export dosyasını alıp n8n eşdeğer akışlarına manuel dönüştürüyoruz. Birebir taşıma değil; aynı işin daha verimli kurulması. Genelde toplam node sayısı %30-40 azalır."
      }
    },
    {
      "@type": "Question",
      name: "Limit aşımında ne olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zapier'in Task tabanlı sayacı yerine PORTZEN aylık execution + sunucu kaynağı limiti koyar. Aşımda otomatik durmaz, paket büyütme önerisi gelir. Sürpriz fatura yok."
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
      name: "Zapier Alternatifi",
      item: "https://portzenai.com/zapier-alternatifi"
    }
  ]
};

const stats = [
  { metric: "%70", label: "Aylık maliyet tasarrufu" },
  { metric: "40+", label: "Türk uygulama connector" },
  { metric: "KVKK", label: "Türkiye sunucu opsiyonu" },
  { metric: "21 gün", label: "Taşıma + kurulum süresi" }
];

const painPoints = [
  {
    title: "USD fiyat acımasız",
    desc: "Zapier Pro $29 USD/ay (≈ ₺1.200), Team $69 USD (≈ ₺2.800). Task arttıkça katlanır, kur tutmaz."
  },
  {
    title: "Türk uygulamaları yok",
    desc: "Logo, Mikro, Netsis, NetGSM, İletimerkezi, Param, Iyzico, Sipay — Zapier'in 7.000+ app listesinde hiçbiri yok. Hepsini elle webhook'la çözmek zorundasınız."
  },
  {
    title: "Karmaşık akışlarda pahalı",
    desc: "Bir Multi-step Zap birden çok Task harcar. Günde 100 lead getirmek bile aylık limiti hızla bitirir, paket büyütmek zorunda kalırsınız."
  },
  {
    title: "Türkçe doküman ve destek yok",
    desc: "Tüm Zapier eğitim materyali, hata mesajı ve destek e-posta cevabı İngilizce. Ekibinizin Zap kuran kişisi sürekli çeviri yapıyor."
  },
  {
    title: "KVKK için kapalı kutu",
    desc: "Zapier verileri ABD sunucularında işler. KVKK aydınlatma metni, veri lokalizasyonu, VERBİS kayıt — hepsi sizin başınızın belası."
  }
];

const comparisonRows = [
  { feature: "Para birimi", manychat: "USD ($29-$799)", portzen: "TL (₺12.000-₺48.000)" },
  { feature: "Türk muhasebe (Logo/Mikro/Netsis)", manychat: "Yok", portzen: "Hazır connector" },
  { feature: "Türk SMS (NetGSM/İletimerkezi)", manychat: "Yok — Twilio zorunlu", portzen: "5+ Türk sağlayıcı" },
  { feature: "Türk ödeme (Iyzico/Param/PayTR)", manychat: "Yok", portzen: "Hazır entegrasyon" },
  { feature: "WhatsApp Business API resmi", manychat: "Sınırlı, 3rd party", portzen: "Meta resmi iş ortağı" },
  { feature: "Otomasyon motoru", manychat: "Sadece Zapier", portzen: "n8n + Make + özel kod" },
  { feature: "Yerel canlı destek", manychat: "E-mail, İngilizce", portzen: "Türkçe WhatsApp + telefon" },
  { feature: "Sözleşme süresi", manychat: "Aylık ama Task sayar", portzen: "Aylık esnek, execution bazlı" },
  { feature: "KVKK + veri lokalizasyonu", manychat: "ABD sunucu, sorumluluk sizde", portzen: "TR sunucu opsiyonel, paket dahil" },
  { feature: "Kurulum + ilk akış desteği", manychat: "Self-service", portzen: "Tam kurulum + ekip eğitimi" }
];

const solutionSteps = [
  {
    icon: Workflow,
    title: "Brief",
    description: "Mevcut Zap'larınızı listeliyoruz; hangileri kalsın, hangileri iyileşsin — n8n'in görsel editöründe yeniden tasarlıyoruz."
  },
  {
    icon: Plug,
    title: "Entegrasyon",
    description: "Logo/Mikro/NetGSM/Iyzico gibi Türk uygulamalarına webhook + API bağlantıları 5-10 günde kurulur."
  },
  {
    icon: Sparkles,
    title: "Eğitim",
    description: "Ekibinize 3 saatlik canlı eğitim — n8n panelini Türkçe gösteriyoruz, basit akış değişikliklerini kendiniz yapabilirsiniz."
  },
  {
    icon: CheckCircle2,
    title: "Canlı",
    description: "Eski Zap'lar açık kalır, paralel 5 gün test ediyoruz. Onaydan sonra Zapier hesabınızı iptal edip TL faturaya geçiyorsunuz."
  }
];

const features = [
  { icon: Boxes, title: "n8n + Make + özel kod", desc: "Tek motor değil; üç ayrı otomasyon altyapısını birlikte kullanıp her senaryoya en verimlisini seçiyoruz." },
  { icon: Plug, title: "40+ Türk connector", desc: "Logo Tiger/Go, Mikro Run, Netsis, NetGSM, İletimerkezi, Iyzico, Param, PayTR, Trendyol, N11, Hepsiburada — hepsi hazır." },
  { icon: Languages, title: "Türkçe panel + dokümentasyon", desc: "Ekibinizin n8n editörünü görsel olarak Türkçe kullanması için özel dokümantasyon ve video eğitim." },
  { icon: ShieldCheck, title: "KVKK + TR sunucu", desc: "İsteğe bağlı self-hosted Türkiye sunucusu. KVKK aydınlatma metni, VERBİS kayıt desteği paket dahil." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon ile aynı gün dönüş. Zapier'in e-mail-only İngilizce desteği yerine gerçek insan." },
  { icon: Wallet, title: "TL faturalama", desc: "Sabit aylık TL fatura, KDV dahil, e-Arşiv. Task aşım sürprizleri yok, execution bazlı şeffaf limit." }
];

const packages = [
  {
    name: "Başlangıç",
    price: "12.000 TL",
    period: "/ay",
    setup: "Kurulum: 30.000 TL",
    color: "bg-paper",
    features: [
      "5 aktif otomasyon akışı",
      "Aylık 10.000 execution",
      "10 Türk connector aktif",
      "n8n cloud (PORTZEN yönetir)",
      "Aylık 2 saat akış güncelleme"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Pro",
    price: "24.000 TL",
    period: "/ay",
    setup: "Kurulum: 45.000 TL",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "20 aktif akış",
      "Aylık 50.000 execution",
      "Sınırsız Türk connector",
      "n8n + Make + WhatsApp API",
      "Logo/Mikro hazır entegre",
      "Aylık 8 saat geliştirme"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "48.000 TL",
    period: "/ay",
    setup: "Kurulum: 75.000 TL+",
    color: "bg-paper",
    features: [
      "Sınırsız akış + execution",
      "Self-hosted TR sunucu (KVKK)",
      "Özel API geliştirme",
      "Adanmış proje yöneticisi",
      "SLA + öncelikli destek",
      "Aylık detaylı analiz raporu"
    ],
    cta: "Kurumsal Teklif"
  }
];

const faqs = [
  {
    q: "Zapier'den n8n'e taşıma süresi ne kadar?",
    a: "Mevcut Zap sayısına bağlı. 5-10 Zap için 14 gün, 20-30 Zap için 21 gün tipik. Zapier'in JSON export'unu alıp her akışı n8n eşdeğeriyle yeniden kuruyoruz. Eski sistemi kapatmadan paralel test ediyoruz."
  },
  {
    q: "n8n self-hosted mı, cloud mu?",
    a: "İkisi de mümkün. Başlangıç ve Pro pakette PORTZEN'in yönettiği bulut sunucuda n8n çalıştırıyoruz — bakım, güncelleme, monitör dert değil. Kurumsal pakette KVKK için Türkiye lokasyonlu self-hosted opsiyonu var."
  },
  {
    q: "Logo, Mikro, Netsis gibi Türk muhasebe yazılımlarına entegre olur mu?",
    a: "Evet. Logo Tiger/Go, Mikro Run/Fly, Netsis Wings için hazır webhook + REST API katmanımız var. Zapier'in 7.000+ app listesinde hiçbiri yok — orada custom integration için ayrı geliştirici tutmanız gerekiyordu, burada hazır."
  },
  {
    q: "NetGSM, Iletimerkezi gibi Türk SMS sağlayıcıları için connector var mı?",
    a: "NetGSM, İletimerkezi, Verimor, Sms.net, Mutlu Cep ve Vodafone Mesaj Servisleri için hazır connector. Zapier'in Twilio (USD faturalı) zorunluluğu yok — Türk SMS sağlayıcısıyla TL fatura."
  },
  {
    q: "Aylık operasyon ücreti dahilinde ne var?",
    a: "Sunucu kira (eğer cloud), n8n + Make lisans, otomatik bakım + güncelleme, hata izleme + alarm, aylık 2-8 saatlik akış güncelleme veya yeni akış kurulumu, Türkçe canlı destek (WhatsApp + telefon, aynı gün dönüş) ve aylık performans raporu."
  },
  {
    q: "Mevcut Zapier Zap'larım birebir taşınır mı?",
    a: "Birebir değil; aynı işin daha verimli kurulması. Zapier'de 5 Task harcayan bir multi-step Zap, n8n'de tek node ile çözülebilir. Genelde toplam node/execution sayısı %30-40 azalır, maliyet düşer."
  },
  {
    q: "Limit aşımında sürpriz fatura olur mu?",
    a: "Hayır. Zapier'in Task aşımında otomatik üst plana atma davranışı bizde yok. Execution limit dolduğunda akışlar durmaz, sadece size 'paket büyütme' önerisi gelir ve onay verirseniz yeni paket başlar. Onaysız fatura artışı yok."
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
              <span className="text-ink">Zapier Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-orange text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Workflow className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Zapier Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Zapier Alternatifi: n8n + Make + Türk Uygulamalarına Entegre Otomasyon
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Zapier'in USD faturası, Türk uygulamalarına entegrasyon eksikliği ve İngilizce paneli yerine PORTZEN n8n + Make + özel kod kombinasyonunu kullanır. Logo, Mikro, NetGSM, Iyzico hazır bağlı; TL fatura, Türkçe destek, KVKK uyumlu.
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
                  <Link
                    href="/crm-otomasyonu"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    CRM Otomasyonu <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={cn(
                      "border-3 border-ink p-5 shadow-brutal",
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-orange text-paper"
                    )}
                  >
                    <div className="font-display text-3xl md:text-4xl font-black leading-none mb-2">
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

      {/* 2. NEDEN ALTERNATİF */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Zapier'in Türk pazarında 5 zayıflığı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Zapier KOBİ için lüks — Türk uygulamalarına bağlanamadığında daha da pahalı.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5] h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-paper bg-brand-orange text-paper mb-4">
                    <X className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-black mb-2">{p.title}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KARŞILAŞTIRMA TABLOSU */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Yan yana karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Zapier vs PORTZEN — 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Zapier</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-brand-yellow text-ink">PORTZEN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink/10 bg-paper">
                      <td className="p-4 font-bold text-sm text-ink">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-ink/80">
                        <div className="flex flex-col items-center gap-1">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-xs">{row.manychat}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center text-sm bg-brand-yellow/30 text-ink">
                        <div className="flex flex-col items-center gap-1">
                          <Check className="h-4 w-4 text-green-700" />
                          <span className="text-xs font-bold">{row.portzen}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm text-ink/60 max-w-2xl">
              <strong>Kaynak:</strong> Zapier fiyatları zapier.com/pricing'den (Ocak 2026), karşılaştırma PORTZEN müşteri taşıma deneyimlerinden derlenmiştir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. PORTZEN ÇÖZÜMÜ */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Taşıma süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Zapier'den 21 günde nasıl çıkarsınız?
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-yellow shadow-brutal-sm mb-4">
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <h3 className="font-display text-xl font-black mb-2 text-ink">{s.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                PORTZEN'in farkı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Zapier'de olmayan 6 özellik
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <Icon className="h-7 w-7 text-ink mb-4" />
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{f.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDY */}
      <section className="bg-brand-orange text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek bir taşıma: İstanbul ajansı
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Aylık $99'dan ₺12.000'e — Logo entegre, NetGSM ile SMS, n8n + Make hibrit.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  İstanbul Şişli'de 22 kişilik bir dijital reklam ajansı 2 yıldır Zapier Team planı kullanıyordu. Aylık $99 USD (≈ ₺4.000), ek Task paketleriyle bazı aylarda $145'e çıkıyordu. 14 aktif Zap vardı: Facebook Lead Ads → Google Sheets, Sheets → Slack, Sheets → e-mail bildirimi, Sheets → Trello, Calendly → Notion, vs.
                </p>
                <p>
                  3 büyük sorun vardı: (1) Yeni gelen lead'leri Logo Tiger'a müşteri kaydı olarak da açmak istiyorlardı ama Zapier'de Logo connector yoktu — geliştirici tutup 8 ay önce kurduğu webhook çoktan bozulmuştu, (2) SMS bildirimleri Twilio üzerinden USD ödeniyordu, Türk numarasına SMS başına $0.04 yani ₺1.60 — pahalı, (3) KVKK aydınlatma metni Zapier'in kayıt akışında devrede değildi, bir uyarı geldi.
                </p>
                <p>
                  18 günde tüm akışları n8n + Make hibridine taşıdık: Logo Tiger için hazır API katmanımızı bağladık (her yeni lead otomatik cari kayıt + cari kart), Twilio yerine NetGSM bağladık (SMS başına ₺0.18 — Twilio'nun 1/9'u), KVKK aydınlatma formunu Notion'da otomatik tutan akış kurduk. Aylık fatura $99 (≈₺4.000) + ek SMS'lerle ortalama ₺8.500'den, sabit ₺12.000'e çıktı — ama SMS maliyeti $400 USD'den (≈₺16.000) ₺2.200'e düştü. Net tasarruf ayda ₺13.700.
                </p>
                <p>
                  En önemlisi: 14 Zap'tan 9 n8n akışına indirdik. Aynı iş, daha az node, daha az execution.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Zapier (toplam)</div>
                  <div className="font-display text-3xl font-black mb-1">$99 + SMS</div>
                  <div className="text-sm">Aylık ortalama ≈ ₺24.000</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">PORTZEN'de</div>
                  <div className="font-display text-3xl font-black text-brand-green">₺12.000/ay</div>
                  <div className="text-sm">Sabit, SMS dahil, KDV dahil</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">SMS maliyeti</div>
                  <div className="font-display text-4xl font-black mb-1">₺16k → ₺2.2k</div>
                  <div className="text-sm">Twilio → NetGSM</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Aktif akış</div>
                  <div className="font-display text-4xl font-black text-brand-pink">14 → 9</div>
                  <div className="text-sm">Daha az node, aynı iş</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şeffaf TL fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                3 paket — execution bazlı, Task sürpriz yok
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Zapier'in Task aşımında otomatik üst plana atma alışkanlığı bizde yok. Sabit TL fatura, KDV dahil.
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
                    <span className="font-display text-4xl font-black">{p.price}</span>
                    <span className="text-sm opacity-70">{p.period}</span>
                  </div>
                  <div className="text-xs font-bold opacity-75 mb-6">{p.setup}</div>
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
            <div className="mt-8 border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-black mb-1">Detaylı çözüm sayfası</div>
                <p className="text-sm opacity-90">
                  PORTZEN'in CRM ve süreç otomasyonu sistemi tam olarak ne içeriyor.
                </p>
              </div>
              <Link
                href="/crm-otomasyonu"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                CRM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Zapier'den geçmeden önce merak edilenler
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-brand-yellow pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">ManyChat'i de mi düşünüyorsunuz?</h3>
                <p className="text-sm opacity-85 mb-3">
                  ManyChat'in dolar fiyatı ve KVKK uyumsuzluğu yerine yerel WhatsApp + IG çözümü.
                </p>
                <Link href="/manychat-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  ManyChat Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">HubSpot pahalı geliyor mu?</h3>
                <p className="text-sm opacity-85 mb-3">
                  HubSpot Starter $800/ay yerine TL fiyatlı, Türk muhasebe entegre CRM otomasyonu.
                </p>
                <Link href="/hubspot-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  HubSpot Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-section bg-paper">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Zapier faturasını TL'ye çevirelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Zap'larınızı listeliyoruz, hangilerinin n8n'de daha verimli kurulacağını gösteriyoruz. Tahmini tasarruf hesabı çıkarıyoruz.
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
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <a
                  href="tel:+905015884853"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <Phone className="h-4 w-4" /> Hemen Ara
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div>
                  <a href="tel:+905015884853" className="font-bold hover:underline">0501 588 48 53</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">E-posta</div>
                  <a href="mailto:portzenajans@gmail.com" className="font-bold hover:underline break-all">portzenajans@gmail.com</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Konum</div>
                  <span className="font-bold">İzmir — Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link href="/blog/crm-otomasyonu-rehberi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: CRM Otomasyonu Rehberi <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/whatsapp-ai-asistani" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  WhatsApp AI Asistanı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/instagram-dm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Instagram DM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
