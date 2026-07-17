import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  MessageCircle,
  Check,
  X,
  ShieldCheck,
  Bot,
  Wallet,
  Globe2,
  Users,
  Sparkles,
  HeadphonesIcon,
  Zap,
  RefreshCw
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Intercom Alternatifi | Türkçe KOBİ Çözümü — PORTZEN",
  description:
    "PORTZEN, KOBİ'ler için Türkçe destekli, KVKK uyumlu Intercom alternatifidir. WhatsApp + Instagram + Web Chat tek panelde. 14 günde geçiş.",
  keywords: [
    "intercom alternatifi",
    "intercom türkçe",
    "intercom yerine",
    "kobi müşteri destek yazılımı",
    "türkçe canlı destek",
    "kvkk uyumlu chat",
    "intercom türkiye fiyat"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/intercom-alternatifi",
    siteName: "PORTZEN",
    title: "Intercom Alternatifi | Türkçe KOBİ Çözümü — PORTZEN",
    description:
      "Intercom yerine Türkçe destek, KVKK uyumu. WhatsApp + Instagram + Web Chat tek panelde."
  },
  twitter: {
    card: "summary_large_image",
    title: "Intercom Alternatifi — PORTZEN",
    description:
      "Türkçe destekli, KVKK uyumlu Intercom alternatifi. 14 günde geçiş."
  },
  alternates: { canonical: "https://portzenai.com/intercom-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Intercom Alternatifi — PORTZEN Müşteri Destek Platformu",
  serviceType: "Müşteri Destek ve Canlı Sohbet Yazılımı",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Intercom yerine Türkçe destekli, KVKK uyumlu KOBİ müşteri destek platformu. WhatsApp, Instagram DM ve Web Chat tek panelde, AI asistan destekli."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Intercom'dan PORTZEN'e geçiş ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standart taşıma süresi 7-14 iş günüdür. Mevcut Intercom hesabınızdaki konuşma geçmişi, müşteri kayıtları ve makro yanıtlar PORTZEN paneline aktarılır. Geçiş sırasında hizmetiniz kesintisiz devam eder."
      }
    },
    {
      "@type": "Question",
      name: "Mevcut Intercom konuşma geçmişimi aktarabilir miyiz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Intercom API üzerinden son 24 ayın konuşma geçmişini, müşteri profillerini, etiketleri ve makro yanıtları PORTZEN paneline export ediyoruz. Geçişte hiçbir veri kaybı yaşanmaz."
      }
    },
    {
      "@type": "Question",
      name: "Ekip eğitimi dahil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Kurulum sonrası 2 saatlik canlı online eğitim ve ekip için Türkçe video kılavuz veriyoruz. Eğitim sonrası 30 gün boyunca destek hattımız tüm sorularınızı yanıtlar."
      }
    },
    {
      "@type": "Question",
      name: "KVKK uyumu nasıl sağlanıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tüm müşteri verileri Türkiye'deki sunucularda saklanır. KVKK aydınlatma metni, açık rıza akışı, veri silme talebi yönetimi sistem içine entegredir. Veri sorumlusu sözleşmesi (Data Processing Agreement) standart olarak sunulur."
      }
    },
    {
      "@type": "Question",
      name: "Sözleşme süresi var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aylık ödeme seçeneği vardır, taahhüt yoktur. İptal istediğinizde 30 gün önceden bildirim yeterlidir, veri export desteği ücretsiz sunulur."
      }
    },
    {
      "@type": "Question",
      name: "Hangi kanalları tek panelde toplayabiliyorum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp Business API, Instagram DM, Facebook Messenger, web sitesi canlı sohbeti, e-posta ve Telegram tek panelden yönetilir. Intercom'un aksine WhatsApp ve Instagram standart pakete dahildir, ekstra ücret yoktur."
      }
    },
    {
      "@type": "Question",
      name: "AI asistan özellikleri Intercom Fin AI ile karşılaştırılabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. PORTZEN AI asistanı premium dil modelleri ve Türkçeye özel katmanlarla çalışır, sektör bazlı eğitilir. Intercom Fin AI'nin yanıt başına ekstra ücreti yerine paket içinde sınırsız AI yanıt sunulur."
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
      name: "Intercom Alternatifi",
      item: "https://portzenai.com/intercom-alternatifi"
    }
  ]
};

const stats = [
  { metric: "3'ü 1'de", label: "WhatsApp + IG + Web Chat tek panel" },
  { metric: "14 gün", label: "Standart geçiş süresi" },
  { metric: "Sınırsız", label: "AI yanıt + Türkçe eğitim" },
  { metric: "100%", label: "KVKK + Türkiye sunucu" }
];

const problems = [
  "Intercom USD bazlı fatura kesiyor; kur arttıkça KOBİ bütçesi USD bazlı bir SaaS'a kilitleniyor.",
  "WhatsApp Business API ve Instagram entegrasyonu Intercom'da ekstra paket; toplam fatura ekstra kalemlerle katlanıyor.",
  "Türkçe canlı destek yok; sorun yaşadığınızda 7-10 saat aralıklı İngilizce e-posta yazışması.",
  "AI asistan (Fin AI) yanıt başına ekstra ücret alır — yüksek mesaj hacmiyle fatura hızla büyür.",
  "KVKK uyum sertifikası net değil, Türkiye sunucu opsiyonu yok; veri sorumlusu sözleşmesi tedarikçi standart şablonuna sıkışmış durumda."
];

const solutionSteps = [
  {
    icon: Sparkles,
    title: "Brief",
    description: "Mevcut Intercom kullanımınızı analiz eder, hangi özelliklerin kritik olduğunu birlikte çıkarırız."
  },
  {
    icon: RefreshCw,
    title: "Taşı",
    description: "Konuşma geçmişi, müşteri profilleri, makro yanıtlar ve etiketler PORTZEN paneline aktarılır."
  },
  {
    icon: Bot,
    title: "Kur",
    description: "WhatsApp + Instagram + Web Chat tek panelde aktif. AI asistan sektörünüze göre eğitilir."
  },
  {
    icon: HeadphonesIcon,
    title: "Eğit",
    description: "Ekibe canlı online eğitim, Türkçe video kılavuz ve 30 gün öncelikli destek hattı."
  }
];

const features = [
  {
    icon: Wallet,
    title: "Sabit çalışma modeli",
    desc: "Dolar kurundan etkilenmez, sabit fatura ile bütçe planı net yapılır."
  },
  {
    icon: HeadphonesIcon,
    title: "Türkçe canlı destek",
    desc: "WhatsApp + telefon + e-posta. Sorununuzu Türkçe anlatın, Türkçe çözüm alın."
  },
  {
    icon: ShieldCheck,
    title: "KVKK + TR sunucu",
    desc: "Tüm veriler Türkiye'deki sunucularda. DPA sözleşmesi standart, KVKK aydınlatma akışı içeride."
  },
  {
    icon: Bot,
    title: "Sınırsız AI yanıt",
    desc: "Premium dil modeli + Türkçe optimizasyon katmanı, sektör bazlı eğitim. Yanıt başına ek ücret yok, paket içinde."
  },
  {
    icon: Globe2,
    title: "Çok kanallı tek panel",
    desc: "WhatsApp, Instagram DM, Facebook, Web Chat, e-posta, Telegram — hepsi tek arayüzde."
  },
  {
    icon: Users,
    title: "Türk müşteri profili",
    desc: "Türk müşterinin satın alma alışkanlığına, ton beklentisine ve sektör jargonuna uygun bot davranışı."
  }
];

const comparison = [
  { feature: "Fiyat modeli", intercom: "USD bazlı", portzen: "Brief'te belirlenir" },
  { feature: "WhatsApp Business API", intercom: "Ekstra paket", portzen: "Dahil" },
  { feature: "Instagram DM", intercom: "Ekstra paket", portzen: "Dahil" },
  { feature: "AI yanıt ücreti", intercom: "Yanıt başına ekstra ücret (Fin AI)", portzen: "Sınırsız (dahil)" },
  { feature: "Türkçe canlı destek", intercom: false, portzen: true },
  { feature: "Türkçe arayüz", intercom: "Kısmi çeviri", portzen: "Tam Türkçe" },
  { feature: "KVKK aydınlatma akışı", intercom: false, portzen: true },
  { feature: "Türkiye sunucu", intercom: false, portzen: true },
  { feature: "e-Arşiv / yerel fatura", intercom: false, portzen: true },
  { feature: "Sözleşme taahhüdü", intercom: "Yıllık zorunlu", portzen: "Aylık opsiyonu var" }
];

const crossLinks = [
  {
    title: "WhatsApp AI Asistanı",
    desc: "WhatsApp Business API üzerinden 7/24 yanıt veren AI asistan.",
    href: "/whatsapp-ai-asistani"
  },
  {
    title: "Instagram DM Otomasyonu",
    desc: "Instagram DM'leri otomatik yanıtla, satışa çevir.",
    href: "/instagram-dm-otomasyonu"
  },
  {
    title: "CRM Otomasyonu",
    desc: "Müşteri verilerini tek panelde yönet, satış sürecini otomatikleştir.",
    href: "/crm-otomasyonu"
  },
  {
    title: "AI Chatbot Türkçe",
    desc: "Türkçe doğal yanıt veren, KVKK uyumlu yerli AI chatbot.",
    href: "/ai-chatbot-turkce"
  }
];

const faqs = [
  {
    q: "Intercom'dan PORTZEN'e geçiş ne kadar sürer?",
    a: "Standart taşıma süresi 7-14 iş günüdür. Mevcut Intercom hesabınızdaki konuşma geçmişi, müşteri kayıtları, etiketler ve makro yanıtlar PORTZEN paneline aktarılır. Geçiş sırasında Intercom paralel olarak çalışmaya devam eder; PORTZEN test ve onay sonrası tam devreye alınır. Hizmet kesintisi yaşanmaz."
  },
  {
    q: "Mevcut Intercom konuşma geçmişimi aktarabilir miyim?",
    a: "Evet. Intercom REST API üzerinden son 24 ayın tüm konuşma geçmişini, müşteri profillerini, etiketleri, makro yanıtları ve bilgi tabanı (Help Center) makalelerini PORTZEN paneline aktarıyoruz. Ek ücret yoktur, taşıma paketine dahildir."
  },
  {
    q: "Ekip eğitimi dahil mi? Ne kadar sürer?",
    a: "Evet. Kurulum sonrası 2 saatlik canlı online eğitim veriyoruz (Zoom / Google Meet). Ek olarak Türkçe video kılavuz seti ve adım adım PDF rehber gönderiyoruz. Eğitim sonrası 30 gün boyunca öncelikli destek hattımız tüm sorularınızı yanıtlar."
  },
  {
    q: "KVKK uyumu Intercom'a göre nasıl farklı?",
    a: "Intercom verileri AB ve ABD sunucularında tutar; Türkiye'de veri yerelleştirme garantisi vermez. PORTZEN'de tüm müşteri verisi Türkiye'deki sunucularda saklanır. KVKK aydınlatma metni, açık rıza akışı ve veri silme talebi yönetimi sistem içinde hazır gelir. Veri Sorumlusu - Veri İşleyen sözleşmesi (DPA) standart olarak sunulur."
  },
  {
    q: "Sözleşme süresi var mı? Çıkış zor mu?",
    a: "Aylık ödeme opsiyonu vardır, taahhüt yoktur. İptal istediğinizde 30 gün önceden e-posta bildirimi yeterli; veri export desteği (CSV + JSON) ücretsiz verilir. Intercom'un aksine yıllık zorunlu kontrat yoktur."
  },
  {
    q: "Hangi kanalları tek panelde toplayabilirim?",
    a: "WhatsApp Business API, Instagram DM, Facebook Messenger, web sitesi canlı sohbeti, e-posta ve Telegram tek panelden yönetilir. Intercom WhatsApp ve Instagram için ayrı paket alır; PORTZEN'de bu kanallar Başlangıç paketine dahildir."
  },
  {
    q: "AI asistan kapasitesi Intercom Fin AI ile yarışır mı?",
    a: "Evet. PORTZEN AI asistanı premium dil modelleri + Türkçeye optimize edilmiş katmanlarla çalışır, sizin bilgi tabanınızla eğitilir. Intercom Fin AI yanıt başına ekstra ücret alırken PORTZEN AI yanıtları paket içinde sınırsızdır. Türk müşteri profiline (sen/siz ayrımı, ton, sektör jargonu) hassas yanıtlar üretir."
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
              <span className="text-ink">Intercom Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-pink text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Zap className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">SaaS Karşılaştırması</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Intercom Alternatifi | KOBİ İçin Türkçe ve KVKK Uyumlu
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Intercom KOBİ bütçesi için ağır: WhatsApp ve Instagram ekstra ücret, AI yanıtları yanıt başına ek ücretli. PORTZEN tüm bu kanalları Türkçe destekle, KVKK uyumlu olarak tek panelde sunar. Mevcut Intercom verileriniz 14 günde taşınır.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Geçiş Planı <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905015884853"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Sor
                  </a>
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

      {/* 2. PROBLEM */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Intercom kullanıcılarının ortak şikayetleri
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Intercom faturası her ay büyüyor, Türkçe destek alamıyorsunuz.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Geçiş Süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Intercom'dan PORTZEN'e 4 adımda taşınma
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Hizmet kesintisi yok, veri kaybı yok. Intercom paralel çalışırken PORTZEN'i kurar, test eder, devreye alırız.
              </p>
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

      {/* 3.5 COMPARISON TABLE */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Yan yana karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Intercom vs PORTZEN — 10 kritik fark
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[600px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Intercom</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-brand-yellow text-ink">PORTZEN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink/10 bg-paper">
                      <td className="p-4 font-bold text-ink">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-ink/80">
                        {typeof row.intercom === "boolean" ? (
                          row.intercom ? <Check className="h-5 w-5 text-green-700 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                        ) : (
                          row.intercom
                        )}
                      </td>
                      <td className="p-4 text-center bg-brand-yellow/30 text-sm font-bold text-ink">
                        {typeof row.portzen === "boolean" ? (
                          row.portzen ? <Check className="h-5 w-5 text-green-700 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                        ) : (
                          row.portzen
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                PORTZEN'in farkları
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Türk KOBİ'sine özel tasarlandı
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

      {/* 5. CASE STUDY */}
      <section className="bg-brand-green text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek vaka: İzmir SaaS Startup
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Intercom'dan PORTZEN'e geçen İzmirli SaaS startup, 3 kanalı tek panele aldı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  İzmir merkezli B2B SaaS şirketi, 18 aydır Intercom Starter paketinde çalışıyordu. WhatsApp eklendiğinde fatura fırladı, Instagram DM entegrasyonu ekstra kalem, Fin AI yanıtları da yanıt başına ekstra ücretli. Dolar bazlı öngörülemez bir maliyet birikmişti.
                </p>
                <p>
                  Şikayetleri tek değildi: Türkçe destek alamıyorlardı, KVKK uyum için hukuk danışmanına 12 saat ödediler, müşteri verileri Avrupa sunucularındaydı. Kurum içi denetimde "veri yerelleştirme" maddesi takıldı.
                </p>
                <p>
                  PORTZEN'e geçiş 12 iş günü sürdü. Son 18 ayın 47.000 konuşma kaydı, 2.300 müşteri profili ve 84 makro yanıt API üzerinden taşındı. WhatsApp + Instagram + Web Chat tek panelde aktif oldu. AI asistanı şirketin SaaS dokümantasyonuyla eğitildi.
                </p>
                <p>
                  Geçişten 3 ay sonraki tablo net: sabit fatura (kur etkisinden bağımsız), Türkçe canlı destek WhatsApp üzerinden anında, KVKK denetimi temiz geçti. Ekip arayüze 1 günde uyum sağladı, müşteri yanıt süresi 4 saatten 22 dakikaya indi.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Kanal sayısı</div>
                  <div className="font-display text-4xl font-black mb-1">3 → 1</div>
                  <div className="text-sm">WhatsApp + IG + Web Chat tek panel</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Yanıt süresi</div>
                  <div className="font-display text-4xl font-black mb-1">4 sa → 22 dk</div>
                  <div className="text-sm">Türkçe destek hattı sayesinde</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Geçiş süresi</div>
                  <div className="font-display text-4xl font-black text-brand-pink">12 gün</div>
                  <div className="text-sm">47.000 konuşma + 2.300 müşteri</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Geçiş öncesi merak edilenler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Intercom kullanıcılarının sorduğu 7 soru
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
        </div>
      </section>

      {/* 7. CROSS-LINK STRIP */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                İlgili hizmetler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                PORTZEN'in diğer çözümleri
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {crossLinks.map((link, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link
                  href={link.href}
                  className="block border-3 border-ink bg-paper p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full"
                >
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{link.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-3">{link.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink">
                    İncele <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                3 kanalı tek panelde birleştirelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz geçiş analizi: mevcut Intercom kullanımınızı inceliyor, PORTZEN'e taşıma planını ve kapsam farkını çıkarıyoruz. Aynı gün dönüyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:destek@portzenai.com"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  E-posta Gönder <ArrowUpRight className="h-4 w-4" />
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
          </div>
        </div>
      </section>
    </>
  );
}
