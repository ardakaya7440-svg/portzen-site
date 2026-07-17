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
  Users,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  Briefcase
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Salesforce Alternatifi | KOBİ İçin Esnek CRM + AI - PORTZEN",
  description:
    "Salesforce KOBİ için overkill. PORTZEN; HubSpot Free + Zoho + Pipedrive seviyesinde sade CRM + custom workflow + AI ile Salesforce'un yerini alır.",
  keywords: [
    "salesforce alternatifi",
    "salesforce türkçe",
    "kobi crm yazılımı",
    "zoho crm alternatif",
    "pipedrive alternatif",
    "salesforce yerine ne",
    "kvkk uyumlu enterprise crm",
    "esnek crm türkiye"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/salesforce-alternatifi",
    siteName: "PORTZEN",
    title: "Salesforce Alternatifi | KOBİ İçin Esnek CRM + AI - PORTZEN",
    description:
      "Salesforce'un karmaşıklığı yerine sade, esnek, Türkçe destekli CRM + custom workflow + AI."
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Alternatifi | PORTZEN",
    description:
      "KOBİ için Salesforce'a değil ihtiyaca uygun CRM. Esnek, Türkçe destekli, hızlı kurulum."
  },
  alternates: { canonical: "https://portzenai.com/salesforce-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Salesforce Alternatifi - PORTZEN KOBİ CRM ve Otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "CRM Software for SMB",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Salesforce'un karmaşık yapısı yerine PORTZEN; KOBİ ihtiyacına uygun, esnek, hızlı kurulan CRM ve satış otomasyonu çözümü. Logo / Mikro / Netsis entegre, KVKK uyumlu."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Salesforce gerçekten KOBİ için fazla mı geliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salesforce kullanıcı başına ücretlendirir; enterprise ölçekli implementasyon partneri bütçesi eklenince KOBİ için orantısız kalır. KOBİ ekibi genelde Salesforce'un sadece %15-20'sini kullanır. PORTZEN aynı temel CRM ihtiyacını sabit paket mantığı ile karşılar."
      }
    },
    {
      "@type": "Question",
      name: "HubSpot Free + Pipedrive + Zoho yetmez mi, neden PORTZEN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bu araçların hepsi kendi içinde iyidir ama silo halinde kalır. Lead bir yerde, deal başka yerde, otomasyon üçüncü yerde. PORTZEN bunları orkestra eder: HubSpot / Pipedrive / Zoho'yu backend olarak kullanır, üst katmanda WhatsApp + Logo entegrasyonu + AI ile bağlar."
      }
    },
    {
      "@type": "Question",
      name: "Salesforce'tan veri taşıma mümkün mü?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Salesforce REST API ile account, contact, opportunity, activity history, custom field ve attachment çekilir. Workflow ve process builder akışları PORTZEN'de yeniden tasarlanır. Tipik taşıma 21-30 iş günü sürer."
      }
    },
    {
      "@type": "Question",
      name: "Salesforce'un AI Einstein özelliği önemli, bunu nasıl yapacaksınız?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Einstein'in temel kullanım alanları: lead scoring, opportunity forecasting, next best action, e-mail içerik önerisi. PORTZEN; OpenAI GPT ve custom LLM ile bu yetenekleri sunar. Üstelik prompt'lar sizin kontrolünüzdedir, kara kutu değildir ve ek lisans yoktur."
      }
    },
    {
      "@type": "Question",
      name: "Enterprise için ne kadar ölçeklenebilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN Kurumsal pakette self-hosted Türkiye sunucu, adanmış proje yöneticisi, özel API geliştirme ve SLA bulunur. 200+ kullanıcı, milyonlarca kayıt ve karmaşık çoklu marka senaryolarında çalışır. Mimari mikroservis tabanlıdır."
      }
    },
    {
      "@type": "Question",
      name: "Salesforce'ın AppExchange ekosistemi yok, eksiklik olmaz mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AppExchange'in temel kullanım alanları (e-posta entegrasyonu, takvim sync, doküman imza, telefon CTI, marketing) PORTZEN'de native gelir veya hazır connector ile bağlanır. Çok özel ihtiyaçlar için n8n + custom workflow ile aynı çözümü 4-8 günde kurarız."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe destek ve eğitim nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp + telefon + e-mail Türkçe canlı destek tüm paketlerde dahil. 8 saatlik canlı Türkçe ekip eğitimi, Türkçe video kütüphanesi paket dahil. Salesforce Türkçe arayüz var ama destek dokümantasyonu büyük çoğunlukla İngilizcedir."
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
      name: "Salesforce Alternatifi",
      item: "https://portzenai.com/salesforce-alternatifi"
    }
  ]
};

const stats = [
  { metric: "Sade", label: "KOBİ ihtiyacına göre" },
  { metric: "30 gün", label: "Salesforce'tan tam taşıma" },
  { metric: "KVKK", label: "TR sunucu opsiyonu" },
  { metric: "Türkçe", label: "Arayüz + destek + eğitim" }
];

const painPoints = [
  {
    title: "Kullanıcı başına ücretlendirme",
    desc: "Salesforce Sales Cloud kullanıcı başı lisans mantığıyla çalışır. Ekibiniz büyüdükçe fatura katlanır, bütçe öngörülemez hale gelir."
  },
  {
    title: "Karmaşıklık ve öğrenme eğrisi",
    desc: "Salesforce'un %80'i KOBİ'nin kullanmadığı modüllerden oluşur. Ekibinizin etkin kullanması için 8-12 hafta eğitim gerekir."
  },
  {
    title: "Implementasyon partneri zorunluluğu",
    desc: "Salesforce kurulumu genelde bir partner üzerinden yapılır. Implementasyon bütçesi kurulum aşamasında sürpriz kalemler getirir."
  },
  {
    title: "Türk muhasebe entegrasyonu yok",
    desc: "Logo Tiger, Mikro Run, Netsis için AppExchange'de connector yoktur. Custom integration ekstra geliştirme bütçesi ister."
  },
  {
    title: "WhatsApp Business yok",
    desc: "Salesforce Service Cloud'da WhatsApp Conversations modülü var ama ek lisans ve ek setup gerektirir."
  },
  {
    title: "KVKK uyumu sizde",
    desc: "Salesforce verileri ABD / AB sunucularında işler. KVKK aydınlatma, açık rıza akışı ve veri silme süreçleri sizin sorumluluğunuzdadır."
  }
];

const comparisonRows = [
  { feature: "Ticari model", manychat: "Kullanıcı başı + implementasyon partneri", portzen: "Kapsam bazlı, brief görüşmesinde net" },
  { feature: "Implementasyon süreci", manychat: "Partner zorunlu, uzun süreç", portzen: "PORTZEN ekibi, tek muhatap" },
  { feature: "Kurulum süresi", manychat: "3-9 ay (partner ile)", portzen: "21-30 iş günü" },
  { feature: "Türkçe destek", manychat: "Plana özel, sınırlı", portzen: "Tüm paketlerde dahil" },
  { feature: "Logo / Mikro / Netsis entegre", manychat: "Yok, custom dev", portzen: "Hazır connector" },
  { feature: "WhatsApp Business API", manychat: "Service Cloud ek modül", portzen: "Giriş paketinde dahil" },
  { feature: "AI (lead scoring, forecasting)", manychat: "Einstein: ek lisans", portzen: "OpenAI + custom LLM dahil" },
  { feature: "KVKK + TR sunucu", manychat: "ABD/AB sunucu", portzen: "TR opsiyonu, Kurumsal pakette" },
  { feature: "Sözleşme süresi", manychat: "Yıllık peşin tipik", portzen: "Aylık esnek" },
  { feature: "Ek modül kuralı", manychat: "Service / Marketing / CPQ ayrı lisans", portzen: "Tek pakette her şey dahil" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Keşif",
    description: "Mevcut Salesforce kurulumunuz, gerçekten kullanılan modüller ve gereksiz kalan özellikler birlikte haritalanır."
  },
  {
    icon: Sparkles,
    title: "Mimari tasarım",
    description: "Backend CRM olarak HubSpot Free / Zoho / Pipedrive seçilir, üzerine PORTZEN orkestrasyon ve AI katmanı eklenir."
  },
  {
    icon: Briefcase,
    title: "Veri taşıma",
    description: "Salesforce API üzerinden account, contact, opportunity, activity ve custom field'lar PORTZEN'e aktarılır."
  },
  {
    icon: CheckCircle2,
    title: "Eğitim + canlıya alış",
    description: "8 saatlik canlı Türkçe ekip eğitimi, ardından pilot ay süresince haftalık optimizasyon toplantısı."
  }
];

const features = [
  { icon: Briefcase, title: "Sade ama yeterli CRM", desc: "Pipeline, deal, contact, account, activity history. Salesforce'un %15-20'sini hızlı ve sade kullanım." },
  { icon: MessageCircle, title: "WhatsApp + e-mail + telefon birleşik", desc: "Tüm kanallar tek panelden takip edilir. Salesforce'ta WhatsApp ek lisans, PORTZEN'de giriş paketinde dahil." },
  { icon: Sparkles, title: "AI lead scoring + forecasting", desc: "OpenAI + custom LLM ile lead skorlama, opportunity forecast, next best action önerisi. Einstein'in pratik karşılığı." },
  { icon: Building2, title: "Logo / Mikro / Netsis entegre", desc: "Türk muhasebe yazılımları için hazır connector. Müşteri PORTZEN'de açılınca otomatik Logo cari kartı oluşur." },
  { icon: ShieldCheck, title: "KVKK + TR sunucu opsiyonu", desc: "Kurumsal pakette self-hosted Türkiye sunucu. Açık rıza akışı, veri silme talep yönetimi ve VERBİS kayıt desteği dahil." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek + eğitim", desc: "WhatsApp + telefon ile Türkçe destek tüm paketlerde. 8 saatlik canlı ekip eğitimi ve Türkçe video kütüphanesi." }
];

const packages = [
  {
    name: "Başlangıç",
    color: "bg-paper",
    features: [
      "5 kullanıcıya kadar",
      "Sınırsız kişi + şirket + deal",
      "2 pipeline + 10 otomasyon",
      "WhatsApp + e-mail kutusu",
      "KVKK paketi dahil"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Pro",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "15 kullanıcıya kadar",
      "Sınırsız pipeline + otomasyon",
      "AI lead scoring + forecasting",
      "Logo / Mikro / Netsis hazır entegre",
      "Custom report + dashboard",
      "Haftalık optimizasyon"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Kurumsal",
    color: "bg-paper",
    features: [
      "Sınırsız kullanıcı",
      "Self-hosted TR sunucu (KVKK)",
      "Özel API + SLA",
      "Adanmış proje yöneticisi",
      "7/24 öncelikli destek",
      "Çoklu marka + departman yönetimi"
    ],
    cta: "Görüşme Al"
  }
];

const faqs = [
  {
    q: "Salesforce gerçekten KOBİ için fazla mı geliyor?",
    a: "Salesforce Sales Cloud kullanıcı başına ücretlendirir; Professional, Enterprise ve Unlimited planlarında kullanıcı sayısı arttıkça fatura katlanır. Üstüne implementasyon partneri bütçesi ekstra ister. KOBİ ekibi genellikle Salesforce'un sadece %15-20'sini (pipeline, deal, contact, basic otomasyon) kullanır — geri kalanı atıl kalır. PORTZEN aynı temel CRM ihtiyacını sabit paket mantığı ile karşılar. Fiyat, ihtiyacına göre kişiselleştiriliyor; 30 dakikalık ücretsiz brief görüşmesinde net rakam paylaşıyoruz."
  },
  {
    q: "HubSpot Free + Pipedrive + Zoho yetmez mi, neden PORTZEN?",
    a: "Bu araçların hepsi kendi içinde işini yapar ama silo halinde kalır. Lead bir araçta, deal başka araçta, otomasyon üçüncü yerde, WhatsApp dördüncü yerde, Logo muhasebe beşinci yerde. Sürekli copy-paste, manuel veri girişi ve veri tutarsızlığı yaşanır. PORTZEN bu araçları orkestre eder: HubSpot Free veya Zoho veya Pipedrive'ı backend CRM olarak kullanır, üst katmanda WhatsApp Business API + Logo entegrasyonu + AI lead scoring + custom workflow ile bağlar. Tek panelden yönetir, tek faturada toplar."
  },
  {
    q: "Salesforce'tan veri taşıma mümkün mü?",
    a: "Evet. Salesforce REST API ve Bulk API üzerinden tüm account, contact, lead, opportunity, activity history, attachment, custom field ve custom object verileri çekilir, PORTZEN'e aktarılır. Workflow Rules, Process Builder ve Flow akışları PORTZEN'in custom workflow editöründe yeniden tasarlanır (kopya değil, optimize edilerek). Tipik taşıma 21-30 iş günü sürer. Pilot ay süresince Salesforce paralel çalışmaya devam edebilir, sıfır kesinti riski."
  },
  {
    q: "Salesforce'un AI Einstein özelliği önemli, bunu nasıl yapacaksınız?",
    a: "Einstein'in pratik kullanım alanları: lead scoring, opportunity forecasting, next best action, e-mail içerik önerisi, anomali tespiti. PORTZEN bu yetenekleri OpenAI GPT ve custom LLM kombinasyonu ile sunar. Lead scoring için kendi promptlarınızı yazabilir veya hazır şablonları kullanabilirsiniz. Forecasting için geçmiş deal verisi ile pattern recognition. Üstelik kullanılan modeller ve promptlar sizin kontrolünüzdedir, Einstein'in kara kutu yapısı yerine şeffaftır. Einstein ek lisans olarak faturalanır; PORTZEN'de AI Pro paketinde dahildir."
  },
  {
    q: "Enterprise için ne kadar ölçeklenebilir?",
    a: "PORTZEN Kurumsal pakette self-hosted Türkiye sunucu opsiyonu, adanmış proje yöneticisi, özel API geliştirme, SLA garantisi ve 7/24 öncelikli destek bulunur. Mimari mikroservis tabanlıdır; 200+ kullanıcı, milyonlarca kayıt, çoklu marka, çoklu departman, çoklu ülke senaryolarında çalışır. Veri tabanı PostgreSQL, mesaj kuyruğu Redis, API katmanı yatay ölçeklenebilir. Salesforce kadar kapsamlı bir Service Cloud / Marketing Cloud / CPQ paketine ihtiyaç duyarsanız bu uçların hangisinin gerçekten KOBİ-orta segmente uygun olduğunu birlikte değerlendiririz."
  },
  {
    q: "Salesforce'ın AppExchange ekosistemi yok, eksiklik olmaz mı?",
    a: "AppExchange'in en çok kullanılan alanları (e-posta entegrasyonu, takvim sync, doküman imza, telefon CTI, marketing automation, anket, doküman üretimi) PORTZEN'de native gelir veya hazır connector ile bağlanır. Google Workspace + Microsoft 365 + DocuSign + Twilio + Calendly + Typeform + Notion + Slack + Zoom için kutudan çıkar çıkmaz çalışır. Çok özel ihtiyaçlar için n8n + custom workflow ile aynı çözümü 4-8 günde kurar, ayrı lisans ödemezsiniz."
  },
  {
    q: "Türkçe destek ve eğitim nasıl?",
    a: "WhatsApp + telefon + e-mail üzerinden Türkçe canlı destek tüm PORTZEN paketlerinde dahildir; mesai içinde aynı gün dönüş, Kurumsal pakette 7/24. 8 saatlik canlı Türkçe ekip eğitimi (panel kullanımı, deal yönetimi, raporlama, otomasyon) ve Türkçe video kütüphanesi paket dahildir. Salesforce Türkçe arayüz seçeneği sunar ama Trailhead eğitim içeriği ve destek dokümantasyonu büyük çoğunlukla İngilizcedir."
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
              <span className="text-ink">Salesforce Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Salesforce Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Salesforce Alternatifi: KOBİ İçin Esnek, Türkçe Destekli CRM + AI
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Salesforce KOBİ için fazla geliyor: kullanıcı başına lisanslama + implementasyon partneri zorunluluğu bütçeyi katlar. Üstelik ekibiniz Salesforce'un sadece %15-20'sini kullanıyor. PORTZEN; HubSpot Free / Zoho / Pipedrive seviyesinde sade CRM + custom workflow + AI ile aynı işi çok daha sade bir modelle yapar.
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-purple text-paper"
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
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Salesforce'un KOBİ için 6 zayıf yönü
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Salesforce enterprise için iyi, KOBİ ihtiyacı için orantısız.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5] h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-paper bg-brand-purple text-paper mb-4">
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
                Salesforce Enterprise vs PORTZEN - 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Salesforce Enterprise</th>
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
              <strong>Kaynak:</strong> Salesforce özellik ve modül bilgileri salesforce.com/products'tan derlenmiştir; karşılaştırma PORTZEN taşıma deneyimlerine dayanır.
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
                Salesforce'tan 30 günde nasıl çıkarsınız?
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
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                PORTZEN'in farkı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Salesforce'ta ek modül gerektiren 6 yetenek
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

      {/* 6. USE CASE */}
      <section className="bg-brand-purple text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek bir vaka: İstanbul B2B yazılım firması
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Salesforce Enterprise'dan PORTZEN'e - aynı ekip, çok daha sade sistem.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  İstanbul'da bir B2B yazılım firması (12 satış temsilcisi, 4 müşteri yöneticisi, 2 satış müdürü) 4 yıldır Salesforce Sales Cloud Enterprise kullanıyordu. Kullanıcı başı lisans + Einstein AI ek lisans + implementasyon partnerinden aylık danışmanlık — birlikte KOBİ ölçeğinde ciddi bir yıllık bütçe kalemine dönüşmüştü.
                </p>
                <p>
                  3 ana sıkıntı vardı: (1) Salesforce'un kullanılan kısmı pipeline + deal + activity history + temel rapor; %80 modül atıl kalıyordu, (2) Logo Tiger entegrasyonu olmadığı için müşteri ve fatura verisi sürekli copy-paste ile aktarılıyordu, (3) Trendyol B2B / Hepsiburada Kurumsal mağazasından gelen lead'ler Salesforce'a manuel giriliyor, çoğu kayboluyordu.
                </p>
                <p>
                  PORTZEN 28 günde devreye alındı. Salesforce'tan 4.200 account + 18.000 contact + 980 açık opportunity + 240.000 activity history taşındı. Backend CRM olarak Pipedrive Advanced seçildi; üzerine PORTZEN orkestrasyon katmanı kuruldu. Logo Tiger çift yönlü entegre edildi (müşteri = otomatik cari, deal kapanışı = otomatik fatura). WhatsApp Business API resmi olarak aktive edildi, lead'lerin %40'ı WhatsApp üzerinden geliyor zaten. AI lead scoring + opportunity forecasting OpenAI GPT-4 ile kuruldu.
                </p>
                <p>
                  3 ay sonra: aynı ekip aynı pipeline ile çalışıyor ama günlük manuel iş %60 azaldı. Lead-müşteri dönüşümü %12'den %29'a çıktı (AI scoring + sıcak lead odağı). Toplam yıllık maliyet ciddi ölçüde düştü, kur farkından etkilenmeyen öngörülebilir bir çalışma modeli oldu.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Lead - müşteri</div>
                  <div className="font-display text-4xl font-black mb-1">%12 → %29</div>
                  <div className="text-sm">AI lead scoring ile</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Manuel iş yükü</div>
                  <div className="font-display text-4xl font-black text-brand-pink">-%60</div>
                  <div className="text-sm">Logo + WhatsApp otomasyonu</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Devreye alış</div>
                  <div className="font-display text-4xl font-black text-brand-green">28 gün</div>
                  <div className="text-sm">240K activity history dahil</div>
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
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Çalışma modeli
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                3 paket - kullanıcı başına ekstra yok
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Salesforce'un kullanıcı başına ücretlendirmesinin aksine PORTZEN sabit paket mantığı ile çalışır. Ekibinizi büyütmek faturanızı katlayan değildir. Net rakamlar brief görüşmesinde paylaşılır.
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
                  <div className="text-xs font-bold opacity-75 mb-6">Kapsam brief görüşmesinde netleştirilir</div>
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
                <div className="font-display text-lg font-black mb-1">HubSpot da alternatif olabilir mi?</div>
                <p className="text-sm opacity-90">
                  Salesforce'tan kaçmak istiyorsanız HubSpot da rakip ama o da KOBİ için pahalı; bizim HubSpot alternatifi sayfamıza göz atın.
                </p>
              </div>
              <Link
                href="/hubspot-alternatifi"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                HubSpot Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
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
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Salesforce'tan geçmeden önce merak edilenler
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
                <Briefcase className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">HubSpot vs Zoho karar</h3>
                <p className="text-sm opacity-85 mb-3">
                  Hangi backend CRM size daha uygun, yan yana detaylı karşılaştırma.
                </p>
                <Link href="/blog/hubspot-vs-zoho-crm-turkce" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Blog Karşılaştırma <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Users className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">CRM otomasyonu detayı</h3>
                <p className="text-sm opacity-85 mb-3">
                  PORTZEN CRM otomasyonunun tam içeriği, modüller ve referans vakalar.
                </p>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  CRM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
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
                Salesforce'tan sade bir CRM'e geçelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                30 dakikalık ücretsiz brief görüşmesinde mevcut Salesforce kurulumunuzu, gerçekten kullanılan modülleri ve gereksiz kalan yetenekleri analiz ediyoruz. Hangi backend CRM (HubSpot Free / Zoho / Pipedrive) sizin senaryonuza uyacağını netleştiriyor, kapsam ve net rakamı bu görüşmede paylaşıyoruz.
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
                  <a href="mailto:destek@portzenai.com" className="font-bold hover:underline break-all">destek@portzenai.com</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Konum</div>
                  <span className="font-bold">İzmir, Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  CRM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/hubspot-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  HubSpot Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/hubspot-vs-zoho-crm-turkce" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: HubSpot vs Zoho <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/logo-yazilim-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Logo Yazılım Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
