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
  BookOpen,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  Utensils,
  TrendingUp,
  CalendarCheck,
  Megaphone
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SambaPOS Alternatifi | AI Destekli Restoran Yönetimi - PORTZEN",
  description:
    "SambaPOS yalnızca POS, PORTZEN ise restoranınız için bütünsel sistem. POS veri yorumlama, CRM, WhatsApp sipariş, web rezervasyon ve sosyal medya tek panelde.",
  keywords: [
    "sambapos alternatifi",
    "restoran yönetim yazılımı",
    "restoran pos sistemi",
    "ai destekli pos",
    "restoran crm",
    "whatsapp siparis sistemi",
    "online rezervasyon yazılımı",
    "restoran sosyal medya yönetimi"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/sambapos-alternatifi",
    siteName: "PORTZEN",
    title: "SambaPOS Alternatifi | AI Destekli Restoran Yönetimi - PORTZEN",
    description:
      "Sadece POS değil, restoranınız için bütünsel yönetim. POS yorumlama, CRM, WhatsApp sipariş, rezervasyon ve sosyal medya."
  },
  twitter: {
    card: "summary_large_image",
    title: "SambaPOS Alternatifi | PORTZEN",
    description:
      "Restoran POS, CRM, sipariş ve rezervasyon tek panelde. AI destekli yorumlama dahil."
  },
  alternates: { canonical: "https://portzenai.com/sambapos-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SambaPOS Alternatifi, PORTZEN Restoran Yönetim Sistemi",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "Restaurant Management Software",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "SambaPOS sadece kasa yönetimine odaklanırken PORTZEN restoranınızın POS verisini yorumlayan, CRM, WhatsApp sipariş, web rezervasyon ve sosyal medya yönetimini birleştiren bütünsel bir sistemdir."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "PORTZEN mevcut SambaPOS kurulumumun yerini alıyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tercihe bağlı. SambaPOS'u kasa yazılımı olarak tutmak isteyenlere POS verisini API ile çekip yorumlayan analitik katman ekliyoruz. Sıfırdan kurulum isteyenlere ise PORTZEN bütünsel POS modülünü kuruyoruz."
      }
    },
    {
      "@type": "Question",
      name: "AI destekli POS yorumlama ne demek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN günlük POS verinizi otomatik analiz eder. Hangi saat diliminde hangi ürün satıyor, hangi masa kombinasyonu kar getiriyor, hangi garson sepet ortalamasını yükseltiyor. Haftalık rapor üretir."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp sipariş sistemi resmi mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Meta iş ortağı resmi WhatsApp Business API kullanılır. Müşteri menüyü WhatsApp üzerinden görür, sipariş verir, ödeme linki gönderilir, sipariş mutfağa otomatik düşer."
      }
    },
    {
      "@type": "Question",
      name: "Web rezervasyon ile takvim entegrasyonu var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Var. Restoranın web sitesine yerleşik rezervasyon takvimi kuruyoruz. Müşteri tarih, saat, kişi sayısı seçer, otomatik onay ve hatırlatma mesajı alır. No-show oranı düşer."
      }
    },
    {
      "@type": "Question",
      name: "Sosyal medya yönetimi paket dahil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pro ve Kurumsal paketlerde Instagram ve TikTok içerik planlama, çekim, kurgu ve yayın yönetimi dahildir. Başlangıç paketinde ayrı modül olarak teklif edilir."
      }
    },
    {
      "@type": "Question",
      name: "POS donanımı, yazıcı ve terminal PORTZEN ile uyumlu mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Epson TM serisi, Star Micronics mutfak yazıcıları, Ingenico ve Verifone kart terminalleri PORTZEN ile sorunsuz çalışır. Yeni kurulum için anahtar teslim donanım paketi sunarız."
      }
    },
    {
      "@type": "Question",
      name: "Kaç şubeli işletme için uygun mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tek şubeden 50+ şubeye kadar tüm yapılar için ölçeklenir. Çok şubeli yapılarda merkezi panel ile tüm şubeleri tek ekranda yönetir, karşılaştırmalı raporlar alırsınız."
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
      name: "SambaPOS Alternatifi",
      item: "https://portzenai.com/sambapos-alternatifi"
    }
  ]
};

const stats = [
  { metric: "5'i 1", label: "POS, CRM, sipariş, rezervasyon, sosyal" },
  { metric: "21 gün", label: "Tam kurulum ve eğitim" },
  { metric: "%30", label: "Ortalama sepet artışı" },
  { metric: "7/24", label: "AI sipariş yanıtlama" }
];

const painPoints = [
  {
    title: "Sadece kasa yazılımı",
    desc: "SambaPOS güçlü bir POS, ama CRM, müşteri sadakat programı, WhatsApp sipariş ve rezervasyon için ek modül ya da üçüncü parti yazılım almak gerekir."
  },
  {
    title: "POS verisi raporda kalıyor",
    desc: "SambaPOS detaylı rapor üretir ama veriyi yorumlayan, aksiyon önerisi çıkaran bir katman yoktur. Hangi ürün düşüşte, hangi saat boş, manuel bakmak zorundasınız."
  },
  {
    title: "WhatsApp sipariş ekstra",
    desc: "WhatsApp üzerinden sipariş için Glovo, Yemeksepeti veya üçüncü parti çözüm gerekir. Her sipariş üzerinden platform komisyonu ödersiniz."
  },
  {
    title: "Sosyal medya kopuk",
    desc: "Instagram ve TikTok içerikleri ayrı bir ajans tarafından yönetilir. POS verisi ile sosyal medya stratejisi arasında köprü kurulmaz."
  },
  {
    title: "Web rezervasyon yok",
    desc: "Rezervasyon almak için OpenTable, Quandoo gibi platformlara aylık ücret veya rezervasyon başı komisyon ödenir."
  },
  {
    title: "Çoklu şube yönetimi karmaşık",
    desc: "Her şubede ayrı SambaPOS kurulumu yapılır; merkezi raporlama, şube karşılaştırma, merkezi menü yönetimi için ek lisans gerekir."
  }
];

const comparisonRows = [
  { feature: "POS kasa modülü", samba: "Güçlü ana ürün", portzen: "Dahil veya SambaPOS ile entegre" },
  { feature: "AI destekli satış yorumlama", samba: "Yok, manuel rapor", portzen: "Haftalık otomatik içgörü raporu" },
  { feature: "Müşteri CRM ve sadakat", samba: "Sınırlı modül", portzen: "Tam CRM, segment, kampanya" },
  { feature: "WhatsApp sipariş sistemi", samba: "Üçüncü parti entegrasyon", portzen: "Resmi WhatsApp Business API dahil" },
  { feature: "Web rezervasyon takvimi", samba: "Yok, harici platform", portzen: "Web sitenize yerleşik, komisyonsuz" },
  { feature: "Sosyal medya yönetimi", samba: "Yok", portzen: "Pro ve Kurumsal pakette dahil" },
  { feature: "Çoklu şube merkezi panel", samba: "Ek lisans", portzen: "Tüm paketlerde dahil" },
  { feature: "Kurulum süresi", samba: "1 ile 2 hafta sadece POS", portzen: "21 gün tüm sistem" },
  { feature: "Fiyat modeli", samba: "Kapsam bazlı", portzen: "Brief'te belirlenir" },
  { feature: "Türkçe canlı destek", samba: "Forum ve bayi", portzen: "WhatsApp ve telefon, aynı gün" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Restoran analizi",
    description: "Mevcut POS verinizi, sipariş kanallarınızı, müşteri profilinizi inceliyoruz. Hangi modüllerin önce kurulacağına birlikte karar veriyoruz."
  },
  {
    icon: Sparkles,
    title: "Sistem kurulumu",
    description: "POS, CRM, WhatsApp sipariş, web rezervasyon ve sosyal medya modülleri 14 günde kuruluyor. Donanım entegrasyonları test ediliyor."
  },
  {
    icon: BookOpen,
    title: "Ekip eğitimi",
    description: "Garson, kasiyer, müdür ve mutfak ekibine ayrı ayrı 2 saatlik canlı Türkçe eğitim. Kullanım video kütüphanesi paneliniz içinde."
  },
  {
    icon: CheckCircle2,
    title: "Devamlı optimizasyon",
    description: "AI içgörü raporları haftalık, sosyal medya içerik planı aylık, sezon kampanyaları çeyreklik olarak ekibinizle planlanır."
  }
];

const features = [
  { icon: TrendingUp, title: "AI POS yorumlama", desc: "Günlük POS verisi otomatik analiz edilir, hangi ürün düşüşte, hangi saat boş, hangi menü kar getiriyor, haftalık rapor olarak gelir." },
  { icon: MessageCircle, title: "WhatsApp sipariş", desc: "Resmi WhatsApp Business API ile müşteri menüyü görür, sipariş verir, ödeme linki alır, mutfağa otomatik düşer. Platform komisyonu yok." },
  { icon: CalendarCheck, title: "Web rezervasyon", desc: "Restoran sitesinde yerleşik rezervasyon takvimi. Tarih, saat, kişi sayısı seçimi, otomatik WhatsApp onay ve hatırlatma." },
  { icon: Utensils, title: "Çoklu şube merkezi", desc: "Tek panelden tüm şubelerin satışını, stoğunu, personelini görün. Şube karşılaştırma raporları otomatik üretilir." },
  { icon: Megaphone, title: "Sosyal medya entegre", desc: "Instagram ve TikTok içerik planı POS verisine göre kurulur. Çok satan menü, sezon kampanyası, influencer eşleştirme tek planda." },
  { icon: ShieldCheck, title: "Türk donanım uyumlu", desc: "Epson, Star Micronics, Ingenico, Verifone, e-Belge entegrasyonu hazır. Yeni kurulum için anahtar teslim donanım paketi." }
];

const faqs = [
  {
    q: "PORTZEN mevcut SambaPOS kurulumumun yerini alıyor mu?",
    a: "Tercihe bağlı. SambaPOS'u kasa yazılımı olarak tutmak isteyenlere POS verisini API ile çekip yorumlayan analitik katman ekliyoruz. Bu durumda CRM, WhatsApp sipariş, rezervasyon ve sosyal medya PORTZEN üzerinden, kasa SambaPOS üzerinden çalışır. Sıfırdan kurulum isteyenlere ise PORTZEN bütünsel POS modülünü kuruyoruz, donanımı yeniden konfigüre ediyoruz."
  },
  {
    q: "AI destekli POS yorumlama ne demek?",
    a: "PORTZEN günlük POS verinizi otomatik analiz eder. Hangi saat diliminde hangi ürün satıyor, hangi masa kombinasyonu kar getiriyor, hangi garson hangi menüde sepet ortalamasını yükseltiyor, hangi menü düşüşte, hangi ürün stok dışı olduğunda alternatif öneri gerekiyor. Bu içgörüleri haftalık rapor olarak ekibinize Türkçe sunar ve aksiyon önerisi çıkarır."
  },
  {
    q: "WhatsApp sipariş sistemi resmi mi, banlanma riski var mı?",
    a: "Evet, resmi. Meta iş ortağı WhatsApp Business API kullanılır, banlanma riski yoktur. Müşteri menüyü WhatsApp üzerinden görür, sepete ekler, sipariş verir, ödeme linki ile öder, sipariş mutfağa otomatik düşer. SambaPOS'ta yerleşik değildir, üçüncü parti modül veya Glovo, Yemeksepeti gibi platformlar gerekir, her sipariş üzerinden platform komisyonu ödenir."
  },
  {
    q: "Web rezervasyon ile takvim ve hatırlatma entegrasyonu var mı?",
    a: "Var. Restoranınızın web sitesine yerleşik rezervasyon takvimi kuruyoruz. Müşteri tarih, saat ve kişi sayısı seçer, otomatik onay mesajı ile WhatsApp ve e-mail alır. Rezervasyondan 4 saat önce hatırlatma WhatsApp mesajı gönderilir, no-show oranı tipik olarak %20 düşer. OpenTable ve Quandoo gibi platformlara aylık ücret veya komisyon ödemezsiniz."
  },
  {
    q: "Sosyal medya yönetimi paket dahil mi?",
    a: "Pro ve Kurumsal paketlerde Instagram ve TikTok içerik planlama, çekim, kurgu ve yayın yönetimi dahildir. Aylık 12 ile 20 arası post, sezon kampanyası, influencer eşleştirme paketleri sunulur. Başlangıç paketinde ayrı modül olarak teklif edilir. Detay için /sosyal-medya-ajansi sayfasını inceleyin."
  },
  {
    q: "POS donanımı, yazıcı ve terminal, PORTZEN ile uyumlu mu?",
    a: "Mevcut Epson TM serisi yazıcılar, Star Micronics mutfak yazıcıları, Ingenico ve Verifone kart terminalleri, e-Belge cihazları PORTZEN ile sorunsuz çalışır. Yeni kurulum ise tavsiye paketi sunarız, anahtar teslim kurulum yaparız. Donanım kapsamı ve maliyeti brief görüşmesinde net paylaşılıyor."
  },
  {
    q: "Kaç şubeli işletme için uygun mu?",
    a: "Tek şubeden 50+ şubeye kadar tüm yapılar için ölçeklenir. Çok şubeli işletmelerde merkezi panel üzerinden tüm şubeleri tek ekrandan yönetir, şube karşılaştırmalı raporlar alırsınız. Şube bazlı kullanıcı yetkilendirme, merkezi menü yönetimi, transfer takibi dahildir."
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
              <span className="text-ink">SambaPOS Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Utensils className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">SambaPOS Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  SambaPOS alternatifi, AI destekli bütünsel restoran yönetim sistemi
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  SambaPOS güçlü bir kasa yazılımı, fakat restoranınızın CRM, WhatsApp sipariş, web rezervasyon ve sosyal medya yönetimi için ayrı ayrı modül ve ajans gerekir. PORTZEN bu beş katmanı tek panelde birleştirir, POS verinizi AI ile yorumlar.
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
                    href="/crm-otomasyonu/restoran"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Restoran CRM <ArrowUpRight className="h-4 w-4" />
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
                SambaPOS'un kapsam sınırları
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                SambaPOS sadece kasa. Restoran yönetimi bundan çok daha fazlasıdır.
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
                SambaPOS vs PORTZEN, restoran yönetiminde 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">SambaPOS</th>
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
                          <span className="text-xs">{row.samba}</span>
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
              <strong>Kaynak:</strong> Ürün karşılaştırma PORTZEN müşteri taşıma deneyimlerinden derlenmiştir.
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
                Geçiş süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                21 günde restoranınızda tam sistem
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
                SambaPOS'un yapmadığı, PORTZEN'in dahil ettiği 6 katman
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

      {/* 6. USE CASES */}
      <section className="bg-brand-purple text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Kullanım örnekleri
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              SambaPOS sadece kasa. PORTZEN restoranın tüm dijital varlığı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  <strong>İzmir Alsancak, 80 koltuk Akdeniz mutfağı restoranı.</strong> SambaPOS kullanıyordu, günlük 250 ile 300 sipariş alıyordu. Sosyal medya dış ajansta, rezervasyon Instagram DM üzerinden manuel, WhatsApp sipariş hiç yoktu. POS verisi günlük rapora geliyordu ama kimse incelemiyordu. PORTZEN kurulumundan sonra POS verisi AI ile yorumlandı, salı akşamlarının boş olduğu tespit edildi, salı akşamına özel ikili menü kampanyası yapıldı. Web siteye rezervasyon takvimi eklendi, Instagram DM'den gelen sorular otomatik takvime yönlendirildi. WhatsApp sipariş açıldı, Yemeksepeti'ne ödenen %18 komisyon yerine sıfır komisyon ile teslimat siparişi alındı. Dört ayda sepet ortalaması %28 arttı.
                </p>
                <p>
                  <strong>Ankara Çankaya, 3 şubeli kafe zinciri.</strong> Her şubede SambaPOS, ama merkezi raporlama Excel'den yapılıyordu. Personel kim ne kadar satıyor, hangi şube hangi ürünü iyi satıyor, manuel görülemiyordu. PORTZEN merkezi panel kuruldu, üç şube tek ekranda gözlemlenmeye başlandı. Hangi şubenin hangi saat dilimi düştüğü ortaya çıktı, şubeye özel happy hour kampanyaları yapıldı. Sosyal medya yönetimi PORTZEN'e geçti, üç şubenin de Instagram'ı tek planda yönetildi, içerik POS verisine göre kurgulandı, en çok satan menüler vurgulandı.
                </p>
                <p>
                  <strong>Bodrum, sezonluk fine dining restoranı.</strong> Yaz sezonu rezervasyon yönetimi OpenTable üzerinden yapılıyordu, aylık sabit abonelik gideri vardı. PORTZEN web rezervasyon takvimi kuruldu, OpenTable iptal edildi. Rezervasyon öncesi WhatsApp hatırlatma mesajı kuruldu, no-show oranı %22'den %6'ya düştü. Sezon sonunda POS verisi analiz edildi, hangi şarap eşleştirmesinin sepeti yükselttiği tespit edildi, ertesi sezona menü stratejisi buna göre güncellendi.
                </p>
                <p>
                  <strong>İstanbul Kadıköy, 2 şubeli Türk mutfağı.</strong> Yemeksepeti, Getir Yemek, Trendyol Yemek üzerinden gelen siparişlerin komisyonu aylık ciroyu sıkıştırıyordu. PORTZEN WhatsApp sipariş sistemi kuruldu, mevcut müşterilere WhatsApp ile menü gönderildi, sadakat indirimi tanıtıldı. Altı ayda WhatsApp üzerinden gelen siparişler toplam teslimatın %40'ına çıktı, platform komisyonu net kar olarak işletmeye kaldı.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Sepet ortalaması</div>
                  <div className="font-display text-4xl font-black mb-1">+%28</div>
                  <div className="text-sm">AI içgörü ile kampanya</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">No-show oranı</div>
                  <div className="font-display text-4xl font-black mb-1">%22 → %6</div>
                  <div className="text-sm">WhatsApp hatırlatma ile</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Platform komisyonu</div>
                  <div className="font-display text-4xl font-black text-brand-pink">%18 → %0</div>
                  <div className="text-sm">WhatsApp sipariş ile</div>
                </div>
              </div>
            </Reveal>
          </div>
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
                SambaPOS'tan geçmeden önce merak edilenler
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
                <HeadphonesIcon className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">Restoran WhatsApp AI</h3>
                <p className="text-sm opacity-85 mb-3">
                  Sipariş alan, menü gösteren, rezervasyon yönlendiren AI asistan.
                </p>
                <Link href="/whatsapp-ai-asistani/restoran" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Detayları Gör <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">Sosyal Medya Ajansı</h3>
                <p className="text-sm opacity-85 mb-3">
                  Restoran POS verisi ile entegre Instagram ve TikTok içerik yönetimi.
                </p>
                <Link href="/sosyal-medya-ajansi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Sosyal Medya <ArrowUpRight className="h-3.5 w-3.5" />
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
                Restoranınızı bütünsel sisteme taşıyalım
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut SambaPOS kurulumunuzu analiz ediyoruz. POS, CRM, WhatsApp sipariş, rezervasyon ve sosyal medya katmanlarınızı haritalıyoruz, hangisinin önce kurulacağını netleştiriyoruz.
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
                <Link href="/whatsapp-ai-asistani/restoran" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Restoran WhatsApp AI <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/web-tasarim/restoran" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Restoran Web Tasarım <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/sosyal-medya-ajansi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Sosyal Medya Ajansı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/crm-otomasyonu/restoran" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Restoran CRM <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
