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
import { familyPriceSummary, maintenanceSummary } from "@/data/pricing";
import { PricingSection } from "@/components/pricing/PricingSection";

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
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  serviceType: "CRM Software for SMB",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Salesforce'un karmaşık yapısı yerine PORTZEN; KOBİ ihtiyacına uygun, esnek, hızlı kurulan CRM ve satış otomasyonu çözümü. Logo / Mikro / Netsis entegre, KVKK gerekliliklerini dikkate alarak kurgulanır."
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
        text: "Salesforce kullanıcı başına ücretlendirir; enterprise ölçekli implementasyon partneri bütçesi eklenince KOBİ için orantısız kalır. KOBİ ekipleri çoğu zaman Salesforce'un yalnızca temel modüllerini (pipeline, deal, contact) kullanır. PORTZEN aynı temel CRM ihtiyacını sabit paket mantığı ile karşılar."
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
        text: "Evet. Salesforce REST API ile account, contact, opportunity, activity history, custom field ve attachment çekilir. Workflow ve process builder akışları PORTZEN'de yeniden tasarlanır. Taşıma süresi kapsama göre teklifte yazılı olarak belirtilir."
      }
    },
    {
      "@type": "Question",
      name: "Salesforce'un AI Einstein özelliği önemli, bunu nasıl yapacaksınız?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Einstein'in temel kullanım alanları: lead scoring, opportunity forecasting, next best action, e-mail içerik önerisi. PORTZEN; kurumsal AI motor altyapısı ve custom LLM katmanı ile bu yetenekleri sunar. Üstelik prompt'lar sizin kontrolünüzdedir, kara kutu değildir ve ek lisans yoktur."
      }
    },
    {
      "@type": "Question",
      name: "Enterprise için ne kadar ölçeklenebilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN Kurumsal iş otomasyonu paketinde 12 iş akışı, 6 uygulama bağlantısı, 2 özel API bağlantısı, test ortamı ve dokümantasyon bulunur. Çok kullanıcılı ve çoklu marka senaryoları için mimari, kapasite ihtiyacına göre teklif aşamasında planlanır."
      }
    },
    {
      "@type": "Question",
      name: "Salesforce'ın AppExchange ekosistemi yok, eksiklik olmaz mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AppExchange'in temel kullanım alanları (e-posta entegrasyonu, takvim sync, doküman imza, telefon CTI, marketing) PORTZEN'de native gelir veya hazır connector ile bağlanır. Çok özel ihtiyaçlar için n8n + custom workflow ile aynı çözümü kurarız; teslim süresi kapsama göre teklifte yazılı olarak belirtilir."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe destek ve eğitim nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp + telefon + e-mail Türkçe canlı destek tüm paketlerde dahil. Ekip eğitimi Büyüme ve Kurumsal paketlerde dahildir; Türkçe video kütüphanesi de sunulur. Salesforce Türkçe arayüz var ama destek dokümantasyonu büyük çoğunlukla İngilizcedir."
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
  { metric: "API ile", label: "Salesforce'tan veri taşıma" },
  { metric: "KVKK", label: "Açık rıza akışı; veri bölgesi teklifte yazılı" },
  { metric: "Türkçe", label: "Arayüz + destek + eğitim" }
];

const painPoints = [
  {
    title: "Kullanıcı başına ücretlendirme",
    desc: "Salesforce Sales Cloud kullanıcı başı lisans mantığıyla çalışır. Ekibiniz büyüdükçe fatura katlanır, bütçe öngörülemez hale gelir."
  },
  {
    title: "Karmaşıklık ve öğrenme eğrisi",
    desc: "Salesforce'un modüllerinin önemli bir kısmı KOBİ'nin günlük işinde kullanılmaz. Ekibin sistemi etkin kullanması için uzun bir öğrenme süreci gerekebilir."
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
  { feature: "Kurulum süresi", manychat: "3-9 ay (partner ile)", portzen: "Teklifte yazılı" },
  { feature: "Türkçe destek", manychat: "Plana özel, sınırlı", portzen: "Tüm paketlerde dahil" },
  { feature: "Logo / Mikro / Netsis entegre", manychat: "Yok, custom dev", portzen: "Hazır connector" },
  { feature: "WhatsApp Business API", manychat: "Service Cloud ek modül", portzen: "Uygulama bağlantısı olarak kurulur" },
  { feature: "AI (lead scoring, forecasting)", manychat: "Einstein: ek lisans", portzen: "Kurumsal AI motor + custom LLM dahil" },
  { feature: "KVKK + TR sunucu", manychat: "ABD/AB sunucu", portzen: "Veri bölgesi teklifte yazılı (sunucu gideri hariç)" },
  { feature: "Sözleşme süresi", manychat: "Yıllık peşin tipik", portzen: "Teklifte yazılı" },
  { feature: "Ek modül kuralı", manychat: "Service / Marketing / CPQ ayrı lisans", portzen: "Kapsam pakette yazılı; CRM lisansı ayrı" }
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
    description: "Ekip eğitimi (Büyüme ve Kurumsal paketlerde dahil), ilk 30 gün kurulum hatalarının giderilmesi; sonrasında isteğe bağlı aylık bakım."
  }
];

const features = [
  { icon: Briefcase, title: "Sade ama yeterli CRM", desc: "Pipeline, deal, contact, account, activity history. KOBİ'nin günlük kullandığı temel CRM modülleri, sade bir arayüzde." },
  { icon: MessageCircle, title: "WhatsApp + e-mail + telefon birleşik", desc: "Tüm kanallar tek panelden takip edilir. Salesforce'ta WhatsApp ek lisans; PORTZEN'de uygulama bağlantısı olarak kurulur, Meta mesaj ücretleri ayrıdır." },
  { icon: Sparkles, title: "AI lead scoring + forecasting", desc: "Premium AI motor altyapısı ve custom LLM katmanı ile lead skorlama, opportunity forecast, next best action önerisi. Einstein'in pratik karşılığı." },
  { icon: Building2, title: "Logo / Mikro / Netsis entegre", desc: "Türk muhasebe yazılımları için hazır connector. Müşteri PORTZEN'de açılınca otomatik Logo cari kartı oluşur." },
  { icon: ShieldCheck, title: "KVKK + veri bölgesi", desc: "Self-hosted kurulum mümkündür; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir (sunucu gideri hizmet bedeline dahil değildir). Açık rıza akışı ve veri silme talep yönetimi dahil; aydınlatma metni ve VERBİS kaydı hariç." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek + eğitim", desc: "WhatsApp + telefon ile Türkçe destek tüm paketlerde. Ekip eğitimi Büyüme ve Kurumsal paketlerde dahil; Türkçe video kütüphanesi." }
];

const faqs = [
  {
    q: "Salesforce gerçekten KOBİ için fazla mı geliyor?",
    a: `Salesforce Sales Cloud kullanıcı başına ücretlendirir; Professional, Enterprise ve Unlimited planlarında kullanıcı sayısı arttıkça fatura katlanır. Üstüne implementasyon partneri bütçesi ekstra ister. KOBİ ekipleri çoğu zaman Salesforce'un yalnızca temel modüllerini (pipeline, deal, contact, basic otomasyon) kullanır — geri kalanı atıl kalır. PORTZEN aynı temel CRM ihtiyacını sabit paket mantığı ile karşılar. PORTZEN iş otomasyonu paketleri tek seferliktir (KDV hariç): ${familyPriceSummary("is-otomasyonu")}. İsteğe bağlı aylık bakım ikinci aydan itibaren ${maintenanceSummary()}.`
  },
  {
    q: "HubSpot Free + Pipedrive + Zoho yetmez mi, neden PORTZEN?",
    a: "Bu araçların hepsi kendi içinde işini yapar ama silo halinde kalır. Lead bir araçta, deal başka araçta, otomasyon üçüncü yerde, WhatsApp dördüncü yerde, Logo muhasebe beşinci yerde. Sürekli copy-paste, manuel veri girişi ve veri tutarsızlığı yaşanır. PORTZEN bu araçları orkestre eder: HubSpot Free veya Zoho veya Pipedrive'ı backend CRM olarak kullanır, üst katmanda WhatsApp Business API + Logo entegrasyonu + AI lead scoring + custom workflow ile bağlar. Tek panelden yönetir; backend CRM lisansı hizmet bedeline dahil değildir."
  },
  {
    q: "Salesforce'tan veri taşıma mümkün mü?",
    a: "Evet. Salesforce REST API ve Bulk API üzerinden tüm account, contact, lead, opportunity, activity history, attachment, custom field ve custom object verileri çekilir, PORTZEN'e aktarılır. Workflow Rules, Process Builder ve Flow akışları PORTZEN'in custom workflow editöründe yeniden tasarlanır (kopya değil, optimize edilerek). Taşıma süresi kapsama göre teklifte yazılı olarak belirtilir. Geçiş sürecinde Salesforce paralel çalışmaya devam edebilir, böylece kesinti riski en aza iner."
  },
  {
    q: "Salesforce'un AI Einstein özelliği önemli, bunu nasıl yapacaksınız?",
    a: "Einstein'in pratik kullanım alanları: lead scoring, opportunity forecasting, next best action, e-mail içerik önerisi, anomali tespiti. PORTZEN bu yetenekleri kurumsal AI motor altyapısı ve custom LLM kombinasyonu ile sunar. Lead scoring için kendi promptlarınızı yazabilir veya hazır şablonları kullanabilirsiniz. Forecasting için geçmiş deal verisi ile pattern recognition. Üstelik kullanılan modeller ve promptlar sizin kontrolünüzdedir, Einstein'in kara kutu yapısı yerine şeffaftır. Einstein ek lisans olarak faturalanır; PORTZEN'de AI özellikleri ayrı lisans gerektirmez, kurulum kapsamında tanımlanır."
  },
  {
    q: "Enterprise için ne kadar ölçeklenebilir?",
    a: "PORTZEN Kurumsal iş otomasyonu paketinde 12 iş akışı, 6 uygulama bağlantısı, 2 özel API bağlantısı, test ortamı ve dokümantasyon bulunur. Çok kullanıcılı, çoklu marka, çoklu departman ve çoklu ülke senaryoları için mimari, kapasite ihtiyacına göre teklif aşamasında planlanır. Veri tabanı PostgreSQL, mesaj kuyruğu Redis, API katmanı yatay ölçeklenebilir. Salesforce kadar kapsamlı bir Service Cloud / Marketing Cloud / CPQ paketine ihtiyaç duyarsanız bu uçların hangisinin gerçekten KOBİ-orta segmente uygun olduğunu birlikte değerlendiririz."
  },
  {
    q: "Salesforce'ın AppExchange ekosistemi yok, eksiklik olmaz mı?",
    a: "AppExchange'in en çok kullanılan alanları (e-posta entegrasyonu, takvim sync, doküman imza, telefon CTI, marketing automation, anket, doküman üretimi) PORTZEN'de native gelir veya hazır connector ile bağlanır. Google Workspace + Microsoft 365 + DocuSign + Calendly + Typeform + Notion + Slack + Zoom için kutudan çıkar çıkmaz çalışır. Çok özel ihtiyaçlar için n8n + custom workflow ile aynı çözümü kurarız (teslim süresi kapsama göre teklifte yazılı olarak belirtilir); bu akışlar paketinizin iş akışı sayısına dahil edilir, aşan kısım ayrıca tekliflendirilir."
  },
  {
    q: "Türkçe destek ve eğitim nasıl?",
    a: "WhatsApp + telefon + e-mail üzerinden Türkçe canlı destek tüm PORTZEN paketlerinde dahildir; en kısa sürede dönüş yapıyoruz. Ekip eğitimi (panel kullanımı, deal yönetimi, raporlama, otomasyon) Büyüme ve Kurumsal paketlerde dahildir; Türkçe video kütüphanesi de sunulur. Salesforce Türkçe arayüz seçeneği sunar ama Trailhead eğitim içeriği ve destek dokümantasyonu büyük çoğunlukla İngilizcedir."
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
              <span className="text-ink">Salesforce Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Salesforce Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Salesforce Alternatifi: KOBİ İçin Esnek, Türkçe Destekli CRM + AI
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Salesforce KOBİ için fazla geliyor: kullanıcı başına lisanslama + implementasyon partneri zorunluluğu bütçeyi katlar. Üstelik ekipler çoğu zaman Salesforce&apos;un yalnızca temel modüllerini kullanıyor. PORTZEN; HubSpot Free / Zoho / Pipedrive seviyesinde sade CRM + custom workflow + AI ile aynı işi çok daha sade bir modelle yapar.
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
                  <Link
                    href="/crm-otomasyonu"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
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
                      "border-3 border-ink/15 p-5 shadow-brutal rounded-2xl",
                      i % 2 === 0 ? "bg-light" : "bg-light text-ink"
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
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Salesforce&apos;un KOBİ için 6 zayıf yönü
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Salesforce enterprise için iyi, KOBİ ihtiyacı için orantısız.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-ink/10 bg-light p-5 h-full rounded-2xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-ink/10 bg-slate text-white mb-4 rounded-full">
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
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Yan yana karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Salesforce Enterprise vs PORTZEN - 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[700px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Salesforce Enterprise</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-light text-ink">PORTZEN</th>
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
                      <td className="p-4 text-center text-sm bg-light text-ink">
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
              <strong>Kaynak:</strong> Salesforce özellik ve modül bilgileri salesforce.com/products&apos;tan derlenmiştir; modül ve fiyatlar değişebilir, güncel bilgi için resmi sayfayı kontrol edin.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. PORTZEN ÇÖZÜMÜ */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Taşıma süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Salesforce&apos;tan 4 adımda nasıl çıkarsınız?
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 bg-lime shadow-brutal-sm mb-4 rounded-full">
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
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                PORTZEN&apos;in farkı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Salesforce&apos;ta ek modül gerektiren 6 yetenek
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
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
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: B2B yazılım firması
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Salesforce Enterprise&apos;dan PORTZEN&apos;e örnek bir geçiş: aynı ekip, daha sade bir sistem.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda satış temsilcileri, müşteri yöneticileri ve satış müdürlerinden oluşan bir ekiple Salesforce Sales Cloud Enterprise kullanan bir B2B yazılım firması düşünelim. Kullanıcı başı lisans, Einstein AI ek lisansı ve implementasyon partneri danışmanlığı birlikte KOBİ ölçeğinde ciddi bir bütçe kalemi oluşturuyor.
                </p>
                <p>
                  Bu tür kurulumlarda tipik 3 sıkıntı görülür: (1) Salesforce&apos;un kullanılan kısmı pipeline + deal + activity history + temel rapordan ibarettir, diğer modüller atıl kalır, (2) Logo Tiger entegrasyonu olmadığı için müşteri ve fatura verisi elle aktarılır, (3) Trendyol B2B / Hepsiburada Kurumsal mağazasından gelen lead&apos;ler Salesforce&apos;a manuel girilir, bir kısmı takipten düşer.
                </p>
                <p>
                  Örnek kurulumda Salesforce&apos;tan account, contact, açık opportunity ve activity history kayıtları taşınır. Backend CRM olarak Pipedrive seçilir; üzerine PORTZEN orkestrasyon katmanı kurulur. Logo Tiger çift yönlü entegre edilir (müşteri = otomatik cari, deal kapanışı = otomatik fatura). WhatsApp, Meta&apos;nın resmi WhatsApp Business API&apos;si üzerinden bağlanır. AI lead scoring + opportunity forecasting dil modeli altyapısı ile kurulur.
                </p>
                <p>
                  İş akışında değişen: ekip aynı pipeline ile çalışır; müşteri ve fatura verisi Logo ile otomatik eşlenir, pazaryeri ve WhatsApp lead&apos;leri CRM&apos;e kendiliğinden düşer, AI skoru satış ekibinin hangi lead&apos;e önce döneceğini gösterir. Hizmet bedeli TL bazlı ve kapsamı yazılı bir çalışma modeliyle faturalanır.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Lead önceliği</div>
                  <div className="font-display text-4xl font-black mb-1">AI skor</div>
                  <div className="text-sm">Satış ekibi sıcak lead&apos;e önce döner</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Logo entegrasyonu</div>
                  <div className="font-display text-4xl font-black text-ink">Çift yön</div>
                  <div className="text-sm">Müşteri = cari, deal = fatura</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Veri taşıma</div>
                  <div className="font-display text-4xl font-black text-ink">API ile</div>
                  <div className="text-sm">Account, contact, opportunity, activity</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="is-otomasyonu" heading="CRM ve iş otomasyonu fiyatları" intro="Kurulum tek seferliktir; ilk 30 gün kurulum hatalarının giderilmesi dahildir, isteğe bağlı aylık bakım ikinci aydan itibaren başlar. CRM, sunucu ve harici yazılım lisansları hariçtir. Tutarlar TL ve KDV hariçtir." />

      {/* 8. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Salesforce&apos;tan geçmeden önce merak edilenler
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-lime pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <Briefcase className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">HubSpot vs Zoho karar</h3>
                <p className="text-sm opacity-85 mb-3">
                  Hangi backend CRM size daha uygun, yan yana detaylı karşılaştırma.
                </p>
                <Link href="/blog/hubspot-vs-zoho-crm-turkce" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Blog Karşılaştırma <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <Users className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">CRM otomasyonu detayı</h3>
                <p className="text-sm opacity-85 mb-3">
                  PORTZEN CRM otomasyonunun tam içeriği, modüller ve örnek senaryolar.
                </p>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  CRM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-section bg-white">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Salesforce&apos;tan sade bir CRM&apos;e geçelim.
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
                <a
                  href="tel:+905318639117"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  <Phone className="h-4 w-4" /> Hemen Ara
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
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
