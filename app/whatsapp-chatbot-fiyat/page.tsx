import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  MessageCircle,
  Check,
  X,
  Bot,
  Layers,
  Plug,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Calculator,
  PieChart
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PRICING, formatTL, familyPriceSummary, AI_REPLY_QUOTA } from "@/data/pricing";

export const metadata: Metadata = {
  title: "WhatsApp Chatbot Fiyat Rehberi — 2026 Türkiye | PORTZEN",
  description:
    `WhatsApp chatbot fiyatları 2026 (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Paket kapsamları, AI yanıt kotaları ve fiyatı etkileyen faktörler.`,
  keywords: [
    "whatsapp chatbot fiyat",
    "whatsapp chatbot fiyatları 2026",
    "whatsapp bot ne kadar",
    "whatsapp business api fiyat",
    "manychat türkiye fiyat",
    "wati fiyat",
    "tidio whatsapp fiyat",
    "whatsapp otomasyon maliyet"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/whatsapp-chatbot-fiyat",
    siteName: "PORTZEN",
    title: "WhatsApp Chatbot Fiyatı Ne Kadar? — 2026 Türkiye Rehberi",
    description:
      "WhatsApp chatbot fiyatlarımız, paket kapsamları, fiyatı etkileyen faktörler ve rakip karşılaştırması. Tutarlar KDV hariçtir."
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Chatbot Fiyatı 2026",
    description:
      "Yazılı paket fiyatları, kapsamlar ve fiyatı etkileyen faktörler."
  },
  alternates: { canonical: "https://portzenai.com/whatsapp-chatbot-fiyat" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp Chatbot Kurulum Hizmeti",
  serviceType: "WhatsApp Business API Chatbot ve Otomasyon",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "WhatsApp Business API üzerinden çalışan, sektör bazlı eğitilmiş AI chatbot. Üç paket, yazılı fiyat; Logo/Mikro/Iyzico entegrasyonu ayrıca tekliflendirilir. KVKK gereklilikleri dikkate alınarak kurgulanır (açık rıza, aydınlatma akışı)."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "WhatsApp chatbot fiyatı 2026'da ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `PORTZEN'de WhatsApp chatbot (AI müşteri asistanı) aylık ücret ve tek seferlik kurulumdan oluşur (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Meta mesaj ücretleri ayrıca belirtilir.`
      }
    },
    {
      "@type": "Question",
      name: "Aylık ek mesaj ücreti var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Paketler aylık AI yanıt kotasıyla gelir: Başlangıç ${formatTL(AI_REPLY_QUOTA.baslangic).replace(" TL", "")}, Büyüme ${formatTL(AI_REPLY_QUOTA.buyume).replace(" TL", "")}, Kurumsal ${formatTL(AI_REPLY_QUOTA.kurumsal).replace(" TL", "")}. WhatsApp Business API'nin Meta'ya ödenen mesaj ücretleri hizmet bedeline dahil değildir ve ayrıca belirtilir.`
      }
    },
    {
      "@type": "Question",
      name: "Kurulum tek seferlik mi, aylık mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulum tek seferlik bir çalışmadır; aylık ücret operasyonu, sunucu maliyetlerini ve pakete göre aylık iyileştirme saatlerini kapsar. Kurulum bedeli ve aylık ücret her paket için yazılıdır; ilk ay toplamı fiyat kartında gösterilir."
      }
    },
    {
      "@type": "Question",
      name: "Sözleşme süresi var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir."
      }
    },
    {
      "@type": "Question",
      name: "Canlıya almadan önce test yapılıyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Kurulum sonrası canlıya geçmeden önce gerçek senaryolarla test yapılır ve yanıtlar bu aşamada ince ayarlanır. Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp Business API resmi maliyeti nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta'nın WhatsApp Business API tarifesi konuşma kategorisine göre değişir (pazarlama, hizmet/destek, doğrulama). Müşteri başlatan konuşmaların ilk 24 saati ücretsizdir. Brief görüşmesinde güncel Meta tarifesini birlikte hesaplıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Hangi entegrasyonlar fiyatı artırır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standart CRM entegrasyonu Büyüme paketinde, 4 standart entegrasyon Kurumsal pakette dahildir. Logo, Mikro, Iyzico, Netgsm gibi özel entegrasyonlar ayrıca tekliflendirilir."
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
      name: "WhatsApp Chatbot Fiyat",
      item: "https://portzenai.com/whatsapp-chatbot-fiyat"
    }
  ]
};

const stats = [
  { metric: "5", label: "Fiyatı belirleyen faktör" },
  { metric: "Tek seferlik", label: "Kurulum + aylık ücret" },
  { metric: "3", label: "Farklı kapsam paketi" },
  { metric: "7/24", label: "Aktif operasyon" }
];

const problems = [
  "Yurtdışı chatbot sağlayıcıları (ManyChat, Wati) döviz bazlı çalışır; kur arttıkça aylık fatura tahmin edilemiyor.",
  "Türk sektörlerine özel entegrasyon (Logo, Mikro, Iyzico, NetGSM) yurtdışı platformlarda yok veya zor.",
  "WhatsApp Business API'nin Meta tarafından ücretlendirilen mesaj maliyetleri konuşma türüne göre değişiyor; net hesap zor.",
  "Kurulum ile aylık operasyon ayrımı net değil, fiyatlandırma kafa karıştırıcı.",
  "AI yanıt kapasitesi sınırsız mı, kullanım bazlı mı belirsiz; sürpriz fatura geliyor."
];

const factors = [
  {
    icon: TrendingUp,
    title: "Mesaj hacmi",
    desc: "Aylık 1.000 mesaj ile 50.000 mesaj arasında fark var. Hacim arttıkça aylık ücret yükselir, mesaj başına maliyet düşer."
  },
  {
    icon: Layers,
    title: "Sektör karmaşıklığı",
    desc: "Standart soru-cevap (restoran, butik) en uygun fiyat. Karmaşık akışlar (klinik tedavi süreci, finansal danışmanlık) ek senaryo geliştirme gerektirir."
  },
  {
    icon: Plug,
    title: "Entegrasyon sayısı",
    desc: "Google Takvim ve HubSpot gibi standart entegrasyonlar Büyüme ve Kurumsal paketlerde dahildir. Logo, Mikro, Iyzico, NetGSM, özel CRM her biri kapsam bazlı tek seferlik geliştirme gerektirir ve ayrıca tekliflendirilir."
  },
  {
    icon: ShieldCheck,
    title: "WhatsApp Business API resmi mi?",
    desc: "Meta onaylı resmi BSP üzerinden gitmek zorunlu. Resmi olmayan çözümler yasak ve KVKK riski taşır. Resmi BSP üzerinden ek mesaj ücreti vardır."
  },
  {
    icon: Bot,
    title: "AI kapasitesi",
    desc: "Sadece kural bazlı bot mu, yoksa premium dil modeli destekli doğal dil mi? AI ne kadar gelişmişse aylık ücret artar; manuel iş azalır."
  }
];

const comparison = [
  { feature: "Aylık başlangıç", manychat: "Kapsam bazlı", tidio: "Kapsam bazlı", wati: "Kapsam bazlı", portzen: `${formatTL(PRICING["ai-musteri-asistani"].tiers.baslangic.price)} / ay + ${formatTL(PRICING["ai-musteri-asistani"].tiers.baslangic.setupFee ?? 0)} kurulum` },
  { feature: "Para birimi", manychat: "Döviz", tidio: "Döviz", wati: "Döviz", portzen: "Yerli, sabit" },
  { feature: "Türkçe arayüz", manychat: false, tidio: false, wati: false, portzen: true },
  { feature: "Türkçe destek", manychat: false, tidio: false, wati: false, portzen: true },
  { feature: "Logo/Mikro entegrasyon", manychat: false, tidio: false, wati: false, portzen: "Ayrıca teklifle" },
  { feature: "Iyzico entegrasyon", manychat: false, tidio: false, wati: false, portzen: "Ayrıca teklifle" },
  { feature: "KVKK aydınlatma + rıza akışı kurulumu", manychat: false, tidio: false, wati: false, portzen: true },
  { feature: "AI yanıt limiti", manychat: "1.000/ay", tidio: "100/ay", wati: "Yok", portzen: `${formatTL(AI_REPLY_QUOTA.baslangic).replace(" TL", "")} / ${formatTL(AI_REPLY_QUOTA.buyume).replace(" TL", "")} / ${formatTL(AI_REPLY_QUOTA.kurumsal).replace(" TL", "")} ay` },
  { feature: "Sektör bazlı eğitim", manychat: false, tidio: false, wati: false, portzen: true }
];

const sectorPricing = [
  {
    sector: "Eczane",
    desc: "Reçete bilgisi, stok sorgulama, kampanya bildirimi, hatırlatma",
    scope: "Tek şube, standart senaryolar",
    volume: "~2.500 mesaj/ay"
  },
  {
    sector: "Estetik Klinik",
    desc: "Randevu açma, tedavi süreç anlatımı, hatırlatma, takip",
    scope: "Google Takvim + CRM entegrasyonu",
    volume: "~8.000 mesaj/ay"
  },
  {
    sector: "E-Ticaret",
    desc: "Sipariş takibi, iade, kampanya, Iyzico ödeme entegrasyonu",
    scope: "Çoklu entegrasyon + katalog",
    volume: "~25.000 mesaj/ay"
  }
];


const crossLinks = [
  {
    title: "WhatsApp AI Asistanı",
    desc: "WhatsApp Business API üzerinden 7/24 yanıt veren AI asistan.",
    href: "/whatsapp-ai-asistani"
  },
  {
    title: "Intercom Alternatifi",
    desc: "Türkçe, KVKK gereklilikleri dikkate alınarak kurgulanan yerli Intercom alternatifi.",
    href: "/intercom-alternatifi"
  },
  {
    title: "AI Chatbot Türkçe",
    desc: "Türkçe doğal yanıt veren yerli AI chatbot.",
    href: "/ai-chatbot-turkce"
  },
  {
    title: "Instagram DM Otomasyonu",
    desc: "Yorum ve hikâye etkileşimine kural tabanlı otomatik DM. AI ile serbest yanıt ayrı hizmettir (AI müşteri asistanı).",
    href: "/instagram-dm-otomasyonu"
  }
];

const faqs = [
  {
    q: "WhatsApp chatbot fiyatı 2026'da ne kadar?",
    a: `PORTZEN'de WhatsApp chatbot (AI müşteri asistanı) aylık ücret ve tek seferlik kurulumdan oluşur (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Paketler arasındaki fark kanal sayısı, randevu ve CRM entegrasyonu, şube sayısı ve aylık AI yanıt kotasıdır. Meta mesaj ücretleri ve harici platform ücretleri ayrıca belirtilir.`
  },
  {
    q: "Aylık ek mesaj ücreti var mı?",
    a: `Paketler aylık AI yanıt kotasıyla gelir: Başlangıç ${formatTL(AI_REPLY_QUOTA.baslangic).replace(" TL", "")}, Büyüme ${formatTL(AI_REPLY_QUOTA.buyume).replace(" TL", "")}, Kurumsal ${formatTL(AI_REPLY_QUOTA.kurumsal).replace(" TL", "")}. Kotayı düzenli aşan işletmelere bir üst paket önerilir. WhatsApp Business API'nin Meta'ya ödenen mesaj ücretleri (pazarlama, hizmet, doğrulama) hizmet bedeline dahil değildir ve Meta'nın güncel tarifesine göre ayrıca belirtilir.`
  },
  {
    q: "Kurulum tek seferlik mi, aylık mı?",
    a: "Kurulum tek seferlik bir çalışmadır. İlk brief, bilgi tabanı oluşturma, senaryo geliştirme, API bağlama, test ve canlıya alma aşamalarını içerir. Aylık ücret operasyonu, sunucu maliyetlerini ve pakete göre aylık iyileştirme saatlerini kapsar (Başlangıç paketinde aylık iyileştirme saati yoktur). Kurulum bedeli ve aylık ücret her paket için yazılıdır; ilk ay toplamı fiyat kartında gösterilir."
  },
  {
    q: "Sözleşme süresi var mı?",
    a: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Çalışma sona erdiğinde veri ve konuşma geçmişiniz dışa aktarılarak size teslim edilir."
  },
  {
    q: "Canlıya almadan önce test yapılıyor mu?",
    a: "Evet. Kurulum sonrası canlıya geçmeden önce gerçek müşteri senaryolarıyla test yapılır; yanıt kalitesi ve akışlar bu aşamada ince ayarlanır. Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir."
  },
  {
    q: "WhatsApp Business API resmi maliyeti nedir?",
    a: "Meta'nın WhatsApp Business API tarifesi konuşma kategorisine göre değişir (pazarlama, hizmet/destek, doğrulama, fayda mesajları). Müşteri başlatan konuşmaların ilk 24 saati ücretsizdir. Bu maliyetler aylık paket ücrete dahil değildir; Meta tarafından doğrudan faturalandırılır veya BSP üzerinden yansıtılır. Güncel Meta tarifesini brief görüşmesinde birlikte hesaplıyoruz."
  },
  {
    q: "Hangi entegrasyonlar fiyatı artırır?",
    a: "Standart CRM entegrasyonu (ör. HubSpot, Bitrix24) Büyüme paketinde, randevu dahil 4 standart entegrasyon Kurumsal pakette dahildir. Türk sektörüne özel entegrasyonlar (Logo Tiger, Mikro, Iyzico, NetGSM SMS, özel ERP API'leri) ayrıca tekliflendirilir."
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
              <span className="text-ink">WhatsApp Chatbot Fiyat</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Calculator className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Fiyat Rehberi 2026</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  WhatsApp Chatbot Fiyatı Ne Kadar? — 2026 Türkiye Rehberi
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  WhatsApp chatbot fiyatlarımız yazılıdır ve KDV hariçtir. Bu sayfada fiyatı belirleyen 5 faktörü, yurtdışı rakiplerle (ManyChat, Tidio, Wati) karşılaştırmayı, 3 sektörden kapsam örneklerini ve paketlerimizi bulacaksınız.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Ücretsiz Fiyat Teklifi <ArrowUpRight className="h-4 w-4" />
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
                Fiyat araştırırken karşılaşılan sorunlar
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Net WhatsApp chatbot fiyatı bulmak neden bu kadar zor?
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

      {/* 3. 5 FACTORS */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Fiyatlandırma Mantığı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                WhatsApp chatbot fiyatını belirleyen 5 faktör
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Aşağıdaki 5 değişken hangi paketin size uyduğunu ve pakete eklenecek kalemleri belirler. Keşif görüşmesinde her birini birlikte değerlendiririz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {factors.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 bg-lime shadow-brutal-sm mb-4 rounded-full">
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <h3 className="font-display text-xl font-black mb-2 text-ink">{f.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Rakip karşılaştırması
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                ManyChat vs Tidio vs Wati vs PORTZEN
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[700px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">ManyChat</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Tidio</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Wati</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-light text-ink">PORTZEN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink/10 bg-paper">
                      <td className="p-4 font-bold text-ink text-sm">{row.feature}</td>
                      <td className="p-4 text-center text-xs text-ink/80">
                        {typeof row.manychat === "boolean" ? (
                          row.manychat ? <Check className="h-5 w-5 text-green-700 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                        ) : (
                          row.manychat
                        )}
                      </td>
                      <td className="p-4 text-center text-xs text-ink/80">
                        {typeof row.tidio === "boolean" ? (
                          row.tidio ? <Check className="h-5 w-5 text-green-700 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                        ) : (
                          row.tidio
                        )}
                      </td>
                      <td className="p-4 text-center text-xs text-ink/80">
                        {typeof row.wati === "boolean" ? (
                          row.wati ? <Check className="h-5 w-5 text-green-700 mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />
                        ) : (
                          row.wati
                        )}
                      </td>
                      <td className="p-4 text-center bg-light text-xs font-bold text-ink">
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

      {/* 5. SECTOR CASE STUDIES */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Sektör bazlı kapsam örnekleri
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl mb-10">
              3 sektörden örnek WhatsApp chatbot kapsamları
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {sectorPricing.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="border-3 border-ink/15 bg-paper text-ink p-6 shadow-brutal h-full rounded-2xl">
                  <div className="inline-block border-3 border-ink/15 bg-slate px-3 py-1 text-xs font-black mb-4 rounded-full text-white">
                    {s.sector}
                  </div>
                  <p className="text-sm text-ink/70 mb-6 leading-relaxed">{s.desc}</p>
                  <div className="space-y-3 border-t-3 border-ink/10 pt-4">
                    <div>
                      <div className="text-xs font-bold uppercase opacity-60">Kapsam</div>
                      <div className="text-base font-black">{s.scope}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase opacity-60">Fiyat</div>
                      <div className="text-sm font-bold text-ink">Paket fiyatları aşağıda</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase opacity-60">Hacim</div>
                      <div className="text-sm font-bold">{s.volume}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="mt-8 text-sm opacity-90 max-w-3xl">
              <strong>Not:</strong> Yukarıdaki kapsamlar ve hacimler açıklayıcı örneklerdir; gerçek kapsam ihtiyacınıza göre netleşir. Paket fiyatları aşağıdadır; hangi paketin size yeteceğini 15 dakikalık keşif görüşmesinde birlikte belirleriz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="ai-musteri-asistani" heading="WhatsApp chatbot fiyatları" intro="WhatsApp ve web sitesi chatbotu aynı hizmet ailesidir. Aylık ücretin hemen altında tek seferlik kurulum bedeli ve ilk ay toplamı yazılıdır. Tutarlar TL ve KDV hariçtir." />


      {/* 7. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Fiyat öncesi merak edilenler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                WhatsApp chatbot fiyatı hakkında 7 soru
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

      {/* 8. CROSS-LINK STRIP */}
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

      {/* 9. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Size uygun paketi birlikte seçelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde sektörünüze ve mesaj hacminize göre net teklif paylaşıyoruz. En kısa sürede dönüş yapıyoruz.
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
