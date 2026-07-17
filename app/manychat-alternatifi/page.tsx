import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  X,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
  ShieldCheck,
  Bot,
  Wallet,
  Globe2,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  Languages,
  CreditCard
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ManyChat Alternatifi | Türkiye için Yerel WhatsApp+IG AI — PORTZEN",
  description:
    "ManyChat yerine Türkçe destek + resmi WhatsApp Business API + yerel ödeme entegrasyonu. KOBİ'lere özel TL paketler, KVKK uyumlu, 14 günde devreye girer.",
  keywords: [
    "manychat alternatifi",
    "manychat türkçe",
    "manychat yerine ne",
    "whatsapp bot türkiye",
    "instagram dm bot türkçe",
    "chatbot platform türkiye",
    "manychat tr alternatif",
    "kvkk uyumlu chatbot"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/manychat-alternatifi",
    siteName: "PORTZEN",
    title: "ManyChat Alternatifi | Türkiye için Yerel WhatsApp+IG AI — PORTZEN",
    description:
      "Türkçe destek, TL fiyat, resmi WhatsApp Business API, Iyzico entegre, KVKK uyumlu — ManyChat'in KOBİ için gerçek alternatifi."
  },
  twitter: {
    card: "summary_large_image",
    title: "ManyChat Alternatifi | PORTZEN",
    description:
      "ManyChat'in dolar fiyatı ve İngilizce arayüzü yerine Türkçe, TL ve KVKK uyumlu çözüm."
  },
  alternates: { canonical: "https://portzenai.com/manychat-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ManyChat Alternatifi — PORTZEN WhatsApp+IG AI Asistanı",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "Conversational AI",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Türkiye pazarına özel WhatsApp Business API ve Instagram DM otomasyonu. ManyChat'in eksik kaldığı Türkçe destek, TL fiyat, KVKK uyumu ve yerel entegrasyonlar.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺8500-₺50000",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ManyChat'ten PORTZEN'e taşınma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mevcut ManyChat akışlarınızı analiz edip 10-14 iş gününde PORTZEN üzerinde yeniden kuruyoruz. Eski sistemi kapatmadan paralel test edip onaydan sonra geçiş yapıyoruz, böylece kesinti olmuyor."
      }
    },
    {
      "@type": "Question",
      name: "ManyChat'teki mevcut abonelerimi/kullanıcılarımı kaybeder miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. ManyChat'teki abone listenizi CSV olarak export edip PORTZEN'e import ediyoruz. WhatsApp Business API üzerinden onaylı şablonlarla iletişimi tekrar başlatıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "ManyChat'in WhatsApp entegrasyonu resmi değil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ManyChat WhatsApp için 3rd party çözümler kullanır ve Meta'nın resmi WhatsApp Business Platform iş ortağı listesinde değildir. PORTZEN doğrudan Meta'nın resmi WhatsApp Business API'sini kullanır — banlanma riski yoktur."
      }
    },
    {
      "@type": "Question",
      name: "İptal koşulları nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ManyChat'in yıllık peşin ödemesinin aksine PORTZEN aylık esnek faturalama yapar. 30 gün önceden bildirimle istediğiniz zaman iptal edebilirsiniz, ceza yok."
      }
    },
    {
      "@type": "Question",
      name: "KVKK uyumu için ne yapmam gerekiyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN, tüm konuşma verilerini Türkiye lokasyonlu sunucularda saklar. KVKK aydınlatma metni, açık rıza akışı ve veri silme talep süreçlerini sizin için hazır kurarız — ManyChat'te bu süreçleri kendiniz yönetmek zorundasınız."
      }
    },
    {
      "@type": "Question",
      name: "Iyzico ve Param gibi yerel ödeme sistemleri entegre olur mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, Iyzico, Param, PayTR ve Sipay ile hazır entegrasyonumuz var. ManyChat'in sadece Stripe (USD bazlı) ödeme akışı yerine TL ödeme alabilirsiniz."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe doğal dil işleme ManyChat'ten farklı mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ManyChat'in İngilizce odaklı NLP'si Türkçe çekim eklerinde ve kibarlık kalıplarında zayıftır. PORTZEN, GPT-4 tabanlı motoru Türkçe konuşma örnekleriyle özel olarak ayarlar — 'fiyatınız ne kadar acaba?' ile 'fiyat ne' aynı şekilde anlaşılır."
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
      name: "ManyChat Alternatifi",
      item: "https://portzenai.com/manychat-alternatifi"
    }
  ]
};

const stats = [
  { metric: "%62", label: "Aylık maliyet tasarrufu (USD→TL)" },
  { metric: "Resmi", label: "WhatsApp Business API" },
  { metric: "KVKK", label: "Türkiye sunucusu + aydınlatma" },
  { metric: "14 gün", label: "Taşıma + kurulum süresi" }
];

const painPoints = [
  {
    title: "Arayüz sadece İngilizce",
    desc: "ManyChat'in tüm paneli, eğitim materyali ve destek belgeleri İngilizce. Ekibinizin bot kuran kişisi bile akışları kurarken Google Translate ile boğuşuyor."
  },
  {
    title: "USD fiyat, TL kazanç",
    desc: "Aylık $15-$145 USD ödüyorsunuz, kur arttıkça maliyetiniz katlanıyor. ManyChat'in TL faturalama veya yerel ödeme seçeneği yok."
  },
  {
    title: "WhatsApp resmi değil",
    desc: "ManyChat WhatsApp için 3rd party gateway kullanıyor — Meta tarafından numaranızın askıya alınma riski daima var."
  },
  {
    title: "Türk ödeme sistemleri entegre değil",
    desc: "Iyzico, Param, PayTR yok. Sadece Stripe ile USD ödeme alabiliyorsunuz; KOBİ müşterileri 3D Secure'la TL ödeyemiyor."
  },
  {
    title: "KVKK uyumu sizin sorununuz",
    desc: "Veri AB/ABD sunucularında. KVKK aydınlatma metni, veri silme talebi yönetimi, açık rıza — hepsini elle siz kurmak zorundasınız."
  }
];

const comparisonRows = [
  { feature: "Arayüz dili", manychat: "Sadece İngilizce", portzen: "Türkçe + İngilizce", manychatYes: false, portzenYes: true },
  { feature: "Para birimi", manychat: "USD", portzen: "TL (KDV dahil)", manychatYes: false, portzenYes: true },
  { feature: "WhatsApp Business API (resmi)", manychat: "3rd party gateway", portzen: "Meta resmi iş ortağı", manychatYes: false, portzenYes: true },
  { feature: "KVKK uyumu", manychat: "Sizin sorumluluğunuzda", portzen: "Tam paket dahil", manychatYes: false, portzenYes: true },
  { feature: "Türk ödeme (Iyzico/Param/PayTR)", manychat: "Yok", portzen: "Hazır entegre", manychatYes: false, portzenYes: true },
  { feature: "Türk muhasebe (Logo/Mikro)", manychat: "Yok", portzen: "Webhook + API", manychatYes: false, portzenYes: true },
  { feature: "Yerel canlı destek", manychat: "E-mail, 24-48 sa", portzen: "WhatsApp + telefon, aynı gün", manychatYes: false, portzenYes: true },
  { feature: "Sözleşme süresi", manychat: "Yıllık peşin", portzen: "Aylık esnek", manychatYes: false, portzenYes: true },
  { feature: "Veri lokalizasyonu", manychat: "ABD/AB sunucu", portzen: "Türkiye sunucusu", manychatYes: false, portzenYes: true },
  { feature: "Başlangıç fiyatı", manychat: "$15-$145/ay USD", portzen: "₺8.500-₺32.000/ay", manychatYes: false, portzenYes: true }
];

const solutionSteps = [
  {
    icon: MessageCircle,
    title: "Brief",
    description: "Mevcut ManyChat akışlarınızı export edip birlikte inceliyoruz — hangi senaryolar kalsın, hangileri iyileşsin."
  },
  {
    icon: Bot,
    title: "Kurulum",
    description: "Resmi WhatsApp Business API başvurusu + Instagram bağlantısı + Türkçe NLP eğitimi 5-7 günde tamamlanır."
  },
  {
    icon: Sparkles,
    title: "Eğitim",
    description: "Ekibinize 2 saatlik canlı eğitim. Türkçe panelden senaryo değiştirmeyi gösteriyoruz, kimseye ManyChat dökümanı okutturmuyoruz."
  },
  {
    icon: CheckCircle2,
    title: "Canlı",
    description: "Eski sistemle paralel 3 gün test, sonra geçiş. Aboneler, etiketler, akışlar — hiçbir veri kaybolmaz."
  }
];

const features = [
  { icon: Languages, title: "Türkçe NLP", desc: "GPT-4 tabanlı motoru Türkçe konuşma örnekleriyle özel eğitim — 'fiyatınız ne acaba' ile 'fiyat ne' aynı algılanır." },
  { icon: ShieldCheck, title: "Resmi WhatsApp API", desc: "Meta'nın resmi iş ortağı altyapısı. 3rd party banlanma riski yok, yeşil tik onayı dahil." },
  { icon: CreditCard, title: "Iyzico + Param + PayTR", desc: "Müşteri WhatsApp'tan link tıklayıp 3D Secure ile TL kart ödemesi yapar — komisyon Stripe'tan düşük." },
  { icon: Globe2, title: "KVKK Aydınlatma", desc: "Açık rıza akışı, veri silme talep formu, Türkiye sunucusu — hepsi hazır kurulur." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon ile aynı gün dönüş. ManyChat'in e-mail-only desteği yerine gerçek insan." },
  { icon: Wallet, title: "TL faturalama", desc: "Aylık TL fatura, KDV dahil, e-Arşiv. Kur dalgalanmasından etkilenmezsiniz." }
];

const packages = [
  {
    name: "Başlangıç",
    price: "8.500 TL",
    period: "/ay",
    setup: "Kurulum: 25.000 TL",
    color: "bg-paper",
    features: [
      "Aylık 2.000 mesaja kadar",
      "WhatsApp Business API resmi",
      "Türkçe panel + 5 senaryo",
      "Iyzico veya Param entegre",
      "KVKK aydınlatma paketi"
    ],
    cta: "Projeyi Konuşalım"
  },
  {
    name: "Pro",
    price: "17.000 TL",
    period: "/ay",
    setup: "Kurulum: 35.000 TL",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "Aylık 8.000 mesaja kadar",
      "WhatsApp + Instagram DM birlikte",
      "Sınırsız senaryo + akış",
      "Iyzico + Param + PayTR üçü birden",
      "Logo/Mikro muhasebe webhook",
      "Haftalık optimizasyon"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "32.000 TL",
    period: "/ay",
    setup: "Kurulum: 50.000 TL+",
    color: "bg-paper",
    features: [
      "Sınırsız mesaj + numara",
      "Çoklu şube yönetimi",
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
    q: "ManyChat'ten PORTZEN'e taşınma süresi ne kadar?",
    a: "Mevcut ManyChat akışlarınızı analiz edip 10-14 iş gününde PORTZEN üzerinde yeniden kuruyoruz. Eski sistemi kapatmadan paralel test edip onaydan sonra geçiş yapıyoruz, böylece kesinti olmuyor."
  },
  {
    q: "ManyChat'teki mevcut abonelerimi/kullanıcılarımı kaybeder miyim?",
    a: "Hayır. ManyChat'teki abone listenizi CSV olarak export edip PORTZEN'e import ediyoruz. Etiketler, segmentler ve geçmiş konuşma metadata'sı taşınır. WhatsApp Business API üzerinden onaylı şablonlarla iletişimi sürdürürsünüz."
  },
  {
    q: "ManyChat'in WhatsApp entegrasyonu resmi değil mi?",
    a: "ManyChat WhatsApp için 3rd party gateway kullanır ve Meta'nın resmi WhatsApp Business Solution Provider listesinde yer almaz. Bu da numaranızın askıya alınma riskini artırır. PORTZEN doğrudan Meta'nın resmi WhatsApp Business API'sini kullanır."
  },
  {
    q: "İptal koşulları nasıl?",
    a: "ManyChat genellikle yıllık peşin ödeme talep eder, iadesi karmaşıktır. PORTZEN aylık esnek faturalama yapar — 30 gün önceden bildirimle istediğiniz zaman iptal edebilirsiniz, ceza veya iade prosedürü yok."
  },
  {
    q: "KVKK uyumu için ne yapmam gerekiyor?",
    a: "Hiçbir şey. PORTZEN tüm konuşma verilerini Türkiye lokasyonlu sunucularda saklar. KVKK aydınlatma metni, açık rıza akışı, veri silme talep süreci ve VERBİS uyumlu kayıt sürecini sizin için hazır kurarız. ManyChat'te bu yükümlülük tamamen sizdedir."
  },
  {
    q: "Iyzico ve Param gibi yerel ödeme sistemleri entegre olur mu?",
    a: "Evet. Iyzico, Param, PayTR ve Sipay ile hazır entegrasyonumuz var. Müşteri WhatsApp'tan ödeme linkine tıklar, 3D Secure ile TL kart ödemesi yapar — başarılı olunca otomatik teyit mesajı gider. ManyChat'in sadece Stripe (USD) ödeme akışı yerine bu yerlidir."
  },
  {
    q: "Türkçe doğal dil işleme ManyChat'ten farklı mı?",
    a: "ManyChat'in İngilizce odaklı NLP'si Türkçe çekim eklerinde ('alabilir miyim', 'alır mıyım', 'alma') ve kibarlık kalıplarında ('acaba', 'lütfen', 'ricam') zayıftır. PORTZEN, GPT-4 motoru Türkçe konuşma örnekleriyle özel ayarlanır — KOBİ müşterinizin kendiliğinden konuştuğu cümleleri ilk seferde anlar."
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
              <span className="text-ink">ManyChat Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-pink text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">ManyChat Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  ManyChat Alternatifi: Türkiye için Yerel WhatsApp + Instagram AI
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  ManyChat KOBİ için fazla pahalı, sadece İngilizce, USD faturalı ve KVKK'ya uyumsuz. PORTZEN aynı işi resmi WhatsApp Business API, Türkçe panel, TL fiyat ve Iyzico/Param entegrasyonu ile yapıyor — üstelik 14 günde taşıma garantisi.
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
                    href="/whatsapp-ai-asistani"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    WhatsApp AI Asistanı <ArrowUpRight className="h-4 w-4" />
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-pink text-paper"
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
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Neden ManyChat'ten kaçıyorsunuz?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                ManyChat KOBİ için fazla pahalı, fazla yabancı, fazla uyumsuz.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5] h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-paper bg-brand-pink text-paper mb-4">
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
                ManyChat vs PORTZEN — 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">ManyChat</th>
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
              <strong>Kaynak:</strong> ManyChat fiyatları manychat.com/pricing'den (Ocak 2026), karşılaştırma PORTZEN müşteri taşıma deneyimlerinden derlenmiştir.
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
                ManyChat'ten 14 günde nasıl çıkarsınız?
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
                ManyChat'te olmayan 6 özellik
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
      <section className="bg-brand-green text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek bir taşıma: İzmir butiği
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Aylık $89'dan ₺17.000'e — Iyzico entegre, KVKK uyumlu, TL faturalı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  İzmir Alsancak'taki bir kadın giyim butiği 18 aydır ManyChat Pro kullanıyordu. Aylık $89 USD (yaklaşık ₺3.000 başlangıçta, kur farkıyla ₺4.500'e çıkmıştı), üstelik Stripe komisyonu da USD bazında. Müşterilerinin %95'i Türkçe ödeme yapmak istiyor ama 3D Secure ile TL kart ödemesi alamıyordu.
                </p>
                <p>
                  Brief görüşmesinde 3 ana sorunu listelediler: (1) WhatsApp numaraları 3 kez askıya alınmıştı çünkü ManyChat resmi WBA değildi, (2) KVKK aydınlatma metnini avukatlarına 4.500 TL ödeyip yazdırmışlardı ama akış kurulu değildi, (3) abone listesi 8.400 kişiydi ve kaybetmekten korkuyorlardı.
                </p>
                <p>
                  10 günde tüm akışlarını PORTZEN'e taşıdık: resmi WhatsApp Business API ile yeşil tik aldık, Iyzico entegre edip TL ödeme akışı kurduk, KVKK aydınlatma metnini WhatsApp şablonu olarak onaylattık. 8.400 abone CSV ile geçti, etiketler dahil. İlk ay raporda: ödeme dönüşümü %23'ten %41'e çıktı (3D Secure ile güven arttı), aylık maliyet $89'dan ₺17.000'e — kur farkı dahil bile %62 düşüş.
                </p>
                <p>
                  Şu an müşterinin aylık WhatsApp üzerinden TL gelirinin %38'i bu sistemden geliyor. Kur ne olursa olsun fatura sabit.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">ManyChat'te</div>
                  <div className="font-display text-3xl font-black mb-1">$89/ay</div>
                  <div className="text-sm">≈ ₺4.500 (kur dalgalı)</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">PORTZEN'de</div>
                  <div className="font-display text-3xl font-black text-brand-green">₺17.000/ay</div>
                  <div className="text-sm">Sabit, KDV dahil, e-Arşiv</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Ödeme dönüşümü</div>
                  <div className="font-display text-4xl font-black mb-1">%23 → %41</div>
                  <div className="text-sm">Iyzico 3D Secure ile</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Taşınan abone</div>
                  <div className="font-display text-4xl font-black text-brand-pink">8.400</div>
                  <div className="text-sm">Veri kaybı sıfır, etiketler dahil</div>
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
                Şeffaf TL fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                3 paket — hepsi TL, hepsi KDV dahil
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                ManyChat'in dolar bazlı planlarının aksine sabit TL fiyat. Kur arttı diye faturalanız artmaz.
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
                  PORTZEN'in WhatsApp AI asistan sistemi tam olarak ne içeriyor — özellikler, vakalar, detaylar.
                </p>
              </div>
              <Link
                href="/whatsapp-ai-asistani"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                WhatsApp AI Asistanı <ArrowUpRight className="h-3.5 w-3.5" />
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
                ManyChat'ten geçmeden önce merak edilenler
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
                <h3 className="font-display text-base font-black mb-2">Zapier de mi pahalı geliyor?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Zapier'in USD fiyatları ve Türk uygulamalarına entegrasyon eksikliği yerine yerel n8n+Make kombinasyonu.
                </p>
                <Link href="/zapier-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Zapier Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">Tidio kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Tidio'nun chat-only odağı yerine WhatsApp + IG + chat tek panelde — Türk pazarına özel.
                </p>
                <Link href="/tidio-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Tidio Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
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
                ManyChat'i bırakın. PORTZEN'i kuralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut ManyChat akışlarınızı analiz edip TL'li, KVKK uyumlu PORTZEN paketini netleştiriyoruz. Aynı gün dönüş.
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
                  <span className="font-bold">İzmir — Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link href="/blog/whatsapp-ai-asistani-nedir" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: WhatsApp AI Asistanı Nedir <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/instagram-dm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Instagram DM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  CRM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
