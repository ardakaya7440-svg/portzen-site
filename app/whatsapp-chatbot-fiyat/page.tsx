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

export const metadata: Metadata = {
  title: "WhatsApp Chatbot Fiyat Rehberi — 2026 Türkiye | PORTZEN",
  description:
    "WhatsApp chatbot maliyetini belirleyen faktörler: mesaj hacmi, entegrasyon, AI etkisi. Kişiselleştirilmiş fiyat için ücretsiz brief görüşmesi.",
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
      "WhatsApp chatbot fiyatını belirleyen faktörler, rakip karşılaştırması ve PORTZEN'in çalışma modeli. Net rakam brief görüşmesinde paylaşılır."
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Chatbot Fiyatı 2026",
    description:
      "Kapsam bazlı çalışan, brief görüşmesinde net rakam paylaşan Türkçe fiyatlandırma rehberi."
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
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "WhatsApp Business API üzerinden çalışan, sektör bazlı eğitilmiş AI chatbot. Kapsam bazlı çalışan paketler, Logo/Mikro/Iyzico entegrasyonu, KVKK uyumlu."
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
        text: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Mesaj hacmi, sektör karmaşıklığı, entegrasyon sayısı ve AI kapasitesi ana belirleyiciler. 30 dakikalık ücretsiz brief görüşmesinde net rakam paylaşıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Aylık ek mesaj ücreti var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN paketleri aylık belirli mesaj limitiyle gelir. Limit aşıldığında ek mesaj ücreti kapsam bazlı belirlenir. WhatsApp Business API'nin Meta'ya ödenen mesaj başına servis ücreti ayrıca işler."
      }
    },
    {
      "@type": "Question",
      name: "Kurulum tek seferlik mi, aylık mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulum tek seferlik bir çalışmadır, aylık ücret sadece operasyon, bakım, optimizasyon ve sunucu maliyetlerini içerir. Kapsam bazlı çalışıyoruz; net rakam brief görüşmesinde paylaşılır."
      }
    },
    {
      "@type": "Question",
      name: "Sözleşme süresi var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aylık ödeme opsiyonu vardır, taahhüt yoktur. Yıllık ödemede indirim uygulanır. İptal istediğinizde 30 gün önceden bildirim yeterli."
      }
    },
    {
      "@type": "Question",
      name: "İlk ay deneme imkanı var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Pilot kurulum sonrası ilk 2 hafta test sürecidir. Bu süre içinde performanstan memnun kalmazsanız geçişten vazgeçebilirsiniz; kurulum ücretinin bir bölümü iade edilir."
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
        text: "Standart entegrasyonlar (Google Takvim, HubSpot, Bitrix, Calendly) Pro pakete dahildir. Logo, Mikro, Iyzico, Netgsm gibi özel entegrasyonlar için tek seferlik geliştirme kapsamı çıkarıyoruz; net rakam brief görüşmesinde paylaşılır."
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
  { metric: "14 gün", label: "Standart kurulum" },
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
    desc: "Google Takvim ve HubSpot standart. Logo, Mikro, Iyzico, NetGSM, özel CRM her biri kapsam bazlı tek seferlik geliştirme gerektirir."
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
  { feature: "Aylık başlangıç", manychat: "Kapsam bazlı", tidio: "Kapsam bazlı", wati: "Kapsam bazlı", portzen: "Brief görüşmesinde" },
  { feature: "Para birimi", manychat: "Döviz", tidio: "Döviz", wati: "Döviz", portzen: "Yerli, sabit" },
  { feature: "Türkçe arayüz", manychat: false, tidio: false, wati: false, portzen: true },
  { feature: "Türkçe destek", manychat: false, tidio: false, wati: false, portzen: true },
  { feature: "Logo/Mikro entegrasyon", manychat: false, tidio: false, wati: false, portzen: true },
  { feature: "Iyzico entegrasyon", manychat: false, tidio: false, wati: false, portzen: true },
  { feature: "KVKK + TR sunucu", manychat: false, tidio: false, wati: false, portzen: true },
  { feature: "AI yanıt limiti", manychat: "1.000/ay", tidio: "100/ay", wati: "Yok", portzen: "Sınırsız" },
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

const packages = [
  {
    name: "Başlangıç",
    scope: "KOBİ için hızlı başlangıç",
    color: "bg-paper",
    features: [
      "Aylık 2.500 mesaja kadar",
      "Standart soru-cevap senaryoları",
      "WhatsApp Business API (resmi)",
      "Google Takvim entegrasyonu",
      "Aylık 1 optimizasyon turu",
      "E-posta destek"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Pro",
    scope: "Yoğun trafik + AI doğal dil",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "Aylık 10.000 mesaja kadar",
      "AI doğal dil yanıtı (premium dil modeli)",
      "CRM entegrasyonu (HubSpot/Bitrix)",
      "Sipariş alma + ödeme akışı",
      "Haftalık optimizasyon",
      "WhatsApp + telefon destek",
      "Aylık performans raporu"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Kurumsal",
    scope: "Çoklu şube ve özel entegrasyon",
    color: "bg-paper",
    features: [
      "Sınırsız mesaj",
      "Birden fazla numara/şube",
      "Logo/Mikro/Iyzico entegrasyon",
      "Adanmış proje yöneticisi",
      "SLA + öncelikli destek",
      "Özel API geliştirme",
      "Aylık detaylı analiz raporu"
    ],
    cta: "Görüşme Al"
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
    desc: "Türkçe, KVKK uyumlu, yerli Intercom alternatifi.",
    href: "/intercom-alternatifi"
  },
  {
    title: "AI Chatbot Türkçe",
    desc: "Türkçe doğal yanıt veren yerli AI chatbot.",
    href: "/ai-chatbot-turkce"
  },
  {
    title: "Instagram DM Otomasyonu",
    desc: "Instagram DM'leri otomatik yanıtla, satışa çevir.",
    href: "/instagram-dm-otomasyonu"
  }
];

const faqs = [
  {
    q: "WhatsApp chatbot fiyatı 2026'da ne kadar?",
    a: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Net fiyat 5 faktöre bağlıdır: aylık mesaj hacmi, sektör karmaşıklığı, entegrasyon sayısı, AI kapasitesi ve resmi BSP üzerinden mesaj maliyeti. 30 dakikalık ücretsiz brief görüşmesinde net rakam paylaşıyoruz. Hemen /iletisim üzerinden yaz."
  },
  {
    q: "Aylık ek mesaj ücreti var mı?",
    a: "PORTZEN paketleri belirli aylık mesaj limitiyle gelir (2.500 / 10.000 / sınırsız). Başlangıç ve Pro pakette limit aşılırsa ek mesaj ücreti kapsam bazlı belirlenir. Buna ek olarak WhatsApp Business API'nin Meta'ya ödenen servis ücreti vardır (pazarlama, hizmet/destek, doğrulama mesajları için Meta'nın güncel tarifesi geçerlidir)."
  },
  {
    q: "Kurulum tek seferlik mi, aylık mı?",
    a: "Kurulum tek seferlik bir çalışmadır. İlk brief, bilgi tabanı oluşturma, senaryo geliştirme, API bağlama, test ve canlıya alma aşamalarını içerir. Aylık ücret sadece operasyon, bakım, optimizasyon, sunucu maliyetleri ve düzenli güncellemeleri kapsar. Kapsam bazlı çalışıyoruz; net rakam brief görüşmesinde paylaşılır."
  },
  {
    q: "Sözleşme süresi var mı?",
    a: "Aylık ödeme opsiyonu vardır, taahhüt yoktur. Yıllık ödemede indirim uygulanır. İptal istediğinizde 30 gün önceden e-posta bildirimi yeterli. Veri ve konuşma geçmişi export desteği ücretsiz verilir."
  },
  {
    q: "İlk ay deneme imkanı var mı?",
    a: "Evet. Kurulum sonrası ilk 2 hafta pilot/test sürecidir. Bu süre içinde gerçek müşteri mesajlarıyla canlı test yapılır; performans veya yanıt kalitesinden memnun kalmazsanız geçişten vazgeçebilirsiniz. Bu durumda kurulum bedelinin bir bölümü iade edilir."
  },
  {
    q: "WhatsApp Business API resmi maliyeti nedir?",
    a: "Meta'nın WhatsApp Business API tarifesi konuşma kategorisine göre değişir (pazarlama, hizmet/destek, doğrulama, fayda mesajları). Müşteri başlatan konuşmaların ilk 24 saati ücretsizdir. Bu maliyetler aylık paket ücrete dahil değildir; Meta tarafından doğrudan faturalandırılır veya BSP üzerinden yansıtılır. Güncel Meta tarifesini brief görüşmesinde birlikte hesaplıyoruz."
  },
  {
    q: "Hangi entegrasyonlar fiyatı artırır?",
    a: "Standart entegrasyonlar Pro pakete dahildir: Google Takvim, HubSpot, Bitrix24, Calendly, Notion, Trello. Türk sektörüne özel entegrasyonlar (Logo Tiger, Mikro, Iyzico, NetGSM SMS, özel ERP API'leri) için tek seferlik kapsam çıkarıyoruz; net rakam brief görüşmesinde paylaşılır."
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
              <span className="text-ink">WhatsApp Chatbot Fiyat</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-orange text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Calculator className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Fiyat Rehberi 2026</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  WhatsApp Chatbot Fiyatı Ne Kadar? — 2026 Türkiye Rehberi
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  WhatsApp chatbot fiyatı ihtiyacına göre kişiselleştiriliyor. Bu sayfada fiyatı belirleyen 5 faktörü, yurtdışı rakiplerle (ManyChat, Tidio, Wati) net karşılaştırmayı, 3 sektörden kapsam örneklerini ve PORTZEN'in çalışma modelini bulacaksınız. Net rakam brief görüşmesinde paylaşılır.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Fiyat Teklifi <ArrowUpRight className="h-4 w-4" />
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-purple text-paper"
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
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5 FACTORS */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Fiyatlandırma Mantığı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                WhatsApp chatbot fiyatını belirleyen 5 faktör
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Aşağıdaki 5 değişken birleşerek toplam fiyatı oluşturur. Net teklif için keşif görüşmesinde her birini birlikte değerlendiririz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {factors.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-yellow shadow-brutal-sm mb-4">
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
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Rakip karşılaştırması
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                ManyChat vs Tidio vs Wati vs PORTZEN
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
                    <th className="p-4 text-center font-black uppercase text-xs">Tidio</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Wati</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-brand-yellow text-ink">PORTZEN</th>
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
                      <td className="p-4 text-center bg-brand-yellow/30 text-xs font-bold text-ink">
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
      <section className="bg-brand-green text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Sektör bazlı kapsam örnekleri
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl mb-10">
              3 sektörden gerçek WhatsApp chatbot kapsam örnekleri
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {sectorPricing.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                  <div className="inline-block border-3 border-ink bg-brand-yellow px-3 py-1 text-xs font-black uppercase mb-4">
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
                      <div className="text-sm font-bold text-brand-pink">Brief görüşmesinde</div>
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
              <strong>Not:</strong> Yukarıdaki kapsamlar gerçek müşteri projelerinden özetlenmiştir. Sizin özel ihtiyacınız için net rakam, 15 dakikalık keşif görüşmesinde çıkar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. PRICING */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Çalışma modeli
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                PORTZEN'in 3 WhatsApp Chatbot paketi
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Kapsam bazlı çalışıyoruz; sürpriz kalem yok. Tüm paketler resmi WhatsApp Business API üzerinden çalışır. Net rakam brief görüşmesinde paylaşılır.
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
                  <div className="text-sm font-bold opacity-75 mb-6">{p.scope}</div>
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
          <Reveal delay={400}>
            <div className="mt-8 border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-[260px]">
                <PieChart className="h-6 w-6 shrink-0 mt-1 text-brand-yellow" />
                <div>
                  <div className="font-display text-lg font-black mb-1">WhatsApp Business API maliyeti</div>
                  <p className="text-sm opacity-90">
                    Meta'nın mesaj başına ücreti (pazarlama, hizmet/destek, doğrulama kategorileri) paket ücrete dahil değildir. Doğrudan Meta tarafından faturalandırılır; güncel tarife brief görüşmesinde birlikte hesaplanır.
                  </p>
                </div>
              </div>
              <Link
                href="/whatsapp-ai-asistani"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                AI Asistan Detayı <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
                <div className="border-l-3 border-brand-yellow pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CROSS-LINK STRIP */}
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

      {/* 9. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Size özel net fiyat çıkaralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde sektörünüze ve mesaj hacminize göre net teklif paylaşıyoruz. Aynı gün dönüyoruz, taahhüt yok.
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
