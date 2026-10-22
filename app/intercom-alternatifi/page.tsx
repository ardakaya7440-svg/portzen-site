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
import { formatTL, AI_REPLY_QUOTA } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Intercom Alternatifi | Türkçe KOBİ Çözümü — PORTZEN",
  description:
    "PORTZEN, KOBİ'ler için Türkçe destekli, KVKK gerekliliklerini dikkate alan bir Intercom alternatifidir. WhatsApp + Instagram + Web Chat tek panelde; geçiş süresi kapsama göre teklifte yazılı olarak belirtilir.",
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
      "Intercom yerine Türkçe destek, KVKK gereklilikleri gözetilerek kurulum. WhatsApp + Instagram + Web Chat tek panelde."
  },
  twitter: {
    card: "summary_large_image",
    title: "Intercom Alternatifi — PORTZEN",
    description:
      "Türkçe destekli, KVKK gereklilikleri gözetilerek kurulan Intercom alternatifi."
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
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Intercom yerine Türkçe destekli, KVKK gerekliliklerini dikkate alarak kurulan KOBİ müşteri destek platformu. WhatsApp, Instagram DM ve Web Chat tek panelde, AI asistan destekli."
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
        text: "Taşıma süresi veri hacmi ve kapsama göre teklifte yazılı olarak belirtilir. Mevcut Intercom hesabınızdaki konuşma geçmişi, müşteri kayıtları ve makro yanıtlar PORTZEN paneline aktarılır. Geçiş sırasında Intercom paralel çalışmaya devam eder."
      }
    },
    {
      "@type": "Question",
      name: "Mevcut Intercom konuşma geçmişimi aktarabilir miyiz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Intercom API üzerinden son 24 ayın konuşma geçmişini, müşteri profillerini, etiketleri ve makro yanıtları PORTZEN paneline export ediyoruz. Aktarım sonrası kayıtlar birlikte kontrol edilir."
      }
    },
    {
      "@type": "Question",
      name: "Ekip eğitimi dahil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulum sonrası ekibe canlı online eğitim ve Türkçe video kılavuz veriyoruz. Eğitim süresi ve kurulum sonrası destek kapsamı teklifte yazılı olarak belirtilir."
      }
    },
    {
      "@type": "Question",
      name: "KVKK uyumu nasıl sağlanıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulum KVKK gerekliliklerini dikkate alarak kurgulanır: aydınlatma metni, açık rıza akışı ve veri silme talebi yönetimi yapılandırılır. Verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Veri işlemeye ilişkin sözleşme maddeleri teklif aşamasında yazılı olarak netleştirilir."
      }
    },
    {
      "@type": "Question",
      name: "Sözleşme süresi var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Ayrılırken verileriniz dışa aktarılarak teslim edilir."
      }
    },
    {
      "@type": "Question",
      name: "Hangi kanalları tek panelde toplayabiliyorum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp Business API, Instagram DM ve web sitesi canlı sohbeti tek panelden yönetilir; Facebook Messenger, e-posta ve Telegram gibi ek kanallar teklifte yazılı olarak belirtilir. Kanal kapsamı pakete göre değişir: Başlangıç pakette tek kanal (WhatsApp veya web sitesi), Kurumsal pakette Web + WhatsApp + Instagram. Meta mesaj ücretleri hizmet bedeline dahil değildir."
      }
    },
    {
      "@type": "Question",
      name: "AI asistan özellikleri Intercom Fin AI ile karşılaştırılabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. PORTZEN AI asistanı premium dil modelleri ve Türkçeye özel katmanlarla çalışır, sektör bazlı eğitilir. Intercom Fin AI'nin yanıt başına ekstra ücreti yerine paket içinde net AI yanıt kotası sunulur."
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
  { metric: "3'ü 1'de", label: "WhatsApp + IG + Web Chat tek panel (Kurumsal)" },
  { metric: "Türkçe", label: "Arayüz ve destek" },
  { metric: `${formatTL(AI_REPLY_QUOTA.baslangic).replace(" TL", "")}–${formatTL(AI_REPLY_QUOTA.kurumsal).replace(" TL", "")}`, label: "AI yanıt / ay (pakete göre)" },
  { metric: "KVKK", label: "Aydınlatma + açık rıza akışı" }
];

const problems = [
  "Intercom USD bazlı fatura kesiyor; kur arttıkça KOBİ bütçesi USD bazlı bir SaaS'a kilitleniyor.",
  "WhatsApp Business API ve Instagram entegrasyonu Intercom'da ekstra paket; toplam fatura ekstra kalemlerle katlanıyor.",
  "Türkçe canlı destek yok; sorun yaşadığınızda yazışmalar İngilizce ve çoğunlukla e-posta üzerinden ilerliyor.",
  "AI asistan (Fin AI) yanıt başına ekstra ücret alır — yüksek mesaj hacmiyle fatura hızla büyür.",
  "Verinin nerede tutulduğu ve KVKK akışları (aydınlatma, açık rıza) sizin kurmanıza kalıyor; veri işleme sözleşmesi tedarikçinin standart şablonuna sıkışmış durumda."
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
    description: "Paketinizdeki kanallar (Kurumsal pakette WhatsApp + Instagram + Web Chat) tek panelde aktif. AI asistan sektörünüze göre eğitilir."
  },
  {
    icon: HeadphonesIcon,
    title: "Eğit",
    description: "Ekibe canlı online eğitim ve Türkçe video kılavuz; kurulum sonrası destek kapsamı teklifte yazılı."
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
    title: "KVKK akışları",
    desc: "KVKK aydınlatma ve açık rıza akışı kurulumda yapılandırılır; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir."
  },
  {
    icon: Bot,
    title: "Pakete göre net AI yanıt kotası",
    desc: "Premium dil modeli + Türkçe optimizasyon katmanı, sektör bazlı eğitim. Yanıt başına ek ücret yok, paket içinde."
  },
  {
    icon: Globe2,
    title: "Çok kanallı tek panel",
    desc: "WhatsApp, Instagram DM, Facebook, Web Chat, e-posta, Telegram — hepsi tek arayüzde. Paketteki kanal sayısı pakete göre değişir."
  },
  {
    icon: Users,
    title: "Türk müşteri profili",
    desc: "Türk müşterinin satın alma alışkanlığına, ton beklentisine ve sektör jargonuna uygun bot davranışı."
  }
];

const comparison = [
  { feature: "Fiyat modeli", intercom: "USD bazlı", portzen: "TL aylık paket + kurulum" },
  { feature: "WhatsApp Business API", intercom: "Ekstra paket", portzen: "Tüm paketlerde (Başlangıç'ta WhatsApp veya web)" },
  { feature: "Instagram DM", intercom: "Ekstra paket", portzen: "Kurumsal pakette dahil" },
  { feature: "AI yanıt ücreti", intercom: "Yanıt başına ekstra ücret (Fin AI)", portzen: `Pakette dahil: ayda ${formatTL(AI_REPLY_QUOTA.baslangic).replace(" TL", "")} / ${formatTL(AI_REPLY_QUOTA.buyume).replace(" TL", "")} / ${formatTL(AI_REPLY_QUOTA.kurumsal).replace(" TL", "")}` },
  { feature: "Türkçe canlı destek", intercom: false, portzen: true },
  { feature: "Türkçe arayüz", intercom: "Kısmi çeviri", portzen: "Tam Türkçe" },
  { feature: "KVKK aydınlatma akışı", intercom: false, portzen: true },
  { feature: "Veri bölgesi", intercom: "AB / ABD", portzen: "Teklifte yazılı" },
  { feature: "e-Arşiv / yerel fatura", intercom: false, portzen: true },
  { feature: "Sözleşme taahhüdü", intercom: "Yıllık zorunlu", portzen: "Teklifte yazılı" }
];

const crossLinks = [
  {
    title: "WhatsApp AI Asistanı",
    desc: "WhatsApp Business API üzerinden 7/24 yanıt veren AI asistan.",
    href: "/whatsapp-ai-asistani"
  },
  {
    title: "Instagram DM Otomasyonu",
    desc: "Yorum ve hikâye etkileşimine kural tabanlı otomatik DM (AI yanıt hizmeti değildir).",
    href: "/instagram-dm-otomasyonu"
  },
  {
    title: "CRM Otomasyonu",
    desc: "Müşteri verilerini tek panelde yönet, satış sürecini otomatikleştir.",
    href: "/crm-otomasyonu"
  },
  {
    title: "AI Chatbot Türkçe",
    desc: "Türkçe doğal yanıt veren, KVKK gereklilikleri gözetilerek kurulan AI chatbot.",
    href: "/ai-chatbot-turkce"
  }
];

const faqs = [
  {
    q: "Intercom'dan PORTZEN'e geçiş ne kadar sürer?",
    a: "Taşıma süresi veri hacmi ve kapsama göre teklifte yazılı olarak belirtilir. Mevcut Intercom hesabınızdaki konuşma geçmişi, müşteri kayıtları, etiketler ve makro yanıtlar PORTZEN paneline aktarılır. Geçiş sırasında Intercom paralel olarak çalışmaya devam eder; PORTZEN test ve onay sonrası tam devreye alınır; böylece geçiş sırasında mevcut kanallarınız açık kalır."
  },
  {
    q: "Mevcut Intercom konuşma geçmişimi aktarabilir miyim?",
    a: "Evet. Intercom REST API üzerinden son 24 ayın tüm konuşma geçmişini, müşteri profillerini, etiketleri, makro yanıtları ve bilgi tabanı (Help Center) makalelerini PORTZEN paneline aktarıyoruz. Taşıma kapsamı teklifte yazılı olarak belirtilir."
  },
  {
    q: "Ekip eğitimi dahil mi? Ne kadar sürer?",
    a: "Kurulum sonrası canlı online eğitim veriyoruz (Zoom / Google Meet). Ek olarak Türkçe video kılavuz seti ve adım adım PDF rehber gönderiyoruz. Eğitim süresi ve kurulum sonrası destek kapsamı teklifte yazılı olarak belirtilir."
  },
  {
    q: "KVKK açısından Intercom'a göre nasıl farklı?",
    a: "Intercom verileri AB ve ABD sunucularında tutar. PORTZEN kurulumu KVKK gerekliliklerini dikkate alarak kurgulanır: aydınlatma metni, açık rıza akışı ve veri silme talebi yönetimi kurulumda yapılandırılır; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Veri işlemeye ilişkin sözleşme maddeleri teklif aşamasında yazılı olarak netleştirilir."
  },
  {
    q: "Sözleşme süresi var mı? Çıkış zor mu?",
    a: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Ayrılırken verileriniz CSV + JSON olarak dışa aktarılarak teslim edilir."
  },
  {
    q: "Hangi kanalları tek panelde toplayabilirim?",
    a: "WhatsApp Business API, Instagram DM ve web sitesi canlı sohbeti tek panelden yönetilir; Facebook Messenger, e-posta ve Telegram gibi ek kanallar teklifte yazılı olarak belirtilir. Intercom WhatsApp ve Instagram için ayrı paket alır; PORTZEN'de kanal kapsamı pakete göre değişir: Başlangıç pakette tek kanal (WhatsApp veya web sitesi), Kurumsal pakette Web + WhatsApp + Instagram."
  },
  {
    q: "AI asistan kapasitesi Intercom Fin AI ile yarışır mı?",
    a: "Evet. PORTZEN AI asistanı premium dil modelleri + Türkçeye optimize edilmiş katmanlarla çalışır, sizin bilgi tabanınızla eğitilir. Intercom Fin AI yanıt başına ekstra ücret alırken PORTZEN'de her pakette aylık net bir AI yanıt kotası vardır; kota pakete göre değişir, Kurumsal pakette en yüksektir. Türk müşteri profiline (sen/siz ayrımı, ton, sektör jargonu) hassas yanıtlar üretir."
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
              <span className="text-ink">Intercom Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Zap className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">SaaS Karşılaştırması</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Intercom Alternatifi | KOBİ İçin Türkçe, KVKK Odaklı
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Intercom KOBİ bütçesi için ağır: WhatsApp ve Instagram ekstra ücret, AI yanıtları yanıt başına ek ücretli. PORTZEN bu kanalları Türkçe destekle, KVKK gerekliliklerini dikkate alarak tek panelde sunar; üç kanal birlikte Kurumsal pakette yer alır. Mevcut Intercom verilerinizin taşınma süresi kapsama göre teklifte yazılı olarak belirtilir.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Ücretsiz Geçiş Planı <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
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

      {/* 2. PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
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
                <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Geçiş Süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Intercom&apos;dan PORTZEN&apos;e 4 adımda taşınma
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Hizmet kesintisi yaşamamanız için Intercom paralel çalışırken PORTZEN&apos;i kurar, test eder, devreye alırız.
              </p>
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

      {/* 3.5 COMPARISON TABLE */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Yan yana karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Intercom vs PORTZEN — 10 kritik fark
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[600px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Intercom</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-light text-ink">PORTZEN</th>
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
                      <td className="p-4 text-center bg-light text-sm font-bold text-ink">
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
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                PORTZEN&apos;in farkları
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Türk KOBİ&apos;sine özel tasarlandı
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

      {/* 5. CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: B2B SaaS şirketi
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek senaryo: Intercom&apos;dan geçen bir SaaS şirketi 3 kanalı tek panelde nasıl toplar?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Bu örnek senaryoda bir B2B SaaS şirketi Intercom Starter paketinde çalışıyor. WhatsApp eklendiğinde fatura artıyor, Instagram DM entegrasyonu ekstra kalem, Fin AI yanıtları da yanıt başına ek ücretli. Dolar bazlı, öngörülmesi zor bir maliyet birikiyor.
                </p>
                <p>
                  Diğer sorunlar: Türkçe destek alınamıyor, KVKK akışları için ayrıca hukuk danışmanlığı gerekiyor, müşteri verileri Avrupa sunucularında ve kurum içi denetimde verinin nerede tutulduğu soruluyor.
                </p>
                <p>
                  Geçişte konuşma kayıtları, müşteri profilleri ve makro yanıtlar API üzerinden taşınır. Kurumsal pakette WhatsApp + Instagram + Web Chat tek panelde açılır. AI asistan şirketin SaaS dokümantasyonuyla beslenir.
                </p>
                <p>
                  İş akışında değişen şu: üç kanaldan gelen mesajlar tek panelde görülür, sık sorular AI asistanla yanıtlanır, karmaşık konular ekibe devredilir. Ücret TL paket + kurulum olarak planlanır (Meta mesaj ücretleri ayrıca ödenir); verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Panel</div>
                  <div className="font-display text-4xl font-black mb-1">Tek panel</div>
                  <div className="text-sm">WhatsApp + IG + Web Chat (Kurumsal)</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Sık sorular</div>
                  <div className="font-display text-4xl font-black mb-1">AI yanıt</div>
                  <div className="text-sm">Paketteki aylık AI yanıt kotasıyla</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Geçiş</div>
                  <div className="font-display text-4xl font-black text-ink">Paralel</div>
                  <div className="text-sm">Intercom açıkken kurulum ve test</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
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
                <div className="border-l-3 border-lime pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CROSS-LINK STRIP */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                İlgili hizmetler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                PORTZEN&apos;in diğer çözümleri
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {crossLinks.map((link, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link
                  href={link.href}
                  className="block border-3 border-ink/15 bg-paper p-5 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl"
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
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                3 kanalı tek panelde birleştirelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz geçiş analizi: mevcut Intercom kullanımınızı inceliyor, PORTZEN&apos;e taşıma planını ve kapsam farkını çıkarıyoruz. En kısa sürede dönüş yapıyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905318639117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:destek@portzenai.com"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  E-posta Gönder <ArrowUpRight className="h-4 w-4" />
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
