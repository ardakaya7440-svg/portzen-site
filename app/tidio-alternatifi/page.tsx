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
  Instagram,
  Smartphone,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  Languages
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tidio Alternatifi | WhatsApp+IG+Chat Tek Panelde — PORTZEN",
  description:
    "Tidio'nun chat-only odağı yerine WhatsApp Business API + Instagram DM + canlı chat tek panelde. KVKK uyumlu, Türkçe doğal yanıt.",
  keywords: [
    "tidio alternatifi",
    "tidio türkçe",
    "tidio yerine ne",
    "canlı destek chat türkiye",
    "whatsapp chat tek panel",
    "instagram chat tek panel",
    "kobi canlı destek",
    "kvkk uyumlu chat"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/tidio-alternatifi",
    siteName: "PORTZEN",
    title: "Tidio Alternatifi | PORTZEN WhatsApp + IG + Chat Tek Panel",
    description:
      "Tidio'nun chat-only ürünü yerine WhatsApp + Instagram DM + chat birleşik gelen kutusu. KVKK uyumlu."
  },
  twitter: {
    card: "summary_large_image",
    title: "Tidio Alternatifi | PORTZEN",
    description:
      "Tidio'da WhatsApp ekstra ödeme. PORTZEN'de hepsi tek pakette."
  },
  alternates: { canonical: "https://portzenai.com/tidio-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tidio Alternatifi — PORTZEN Birleşik Müşteri İletişim Paneli",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "Customer Communication Platform",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Tidio'nun chat-only odaklı ürünü yerine WhatsApp Business API, Instagram DM ve canlı chat'i tek panelde birleştiren, Türkiye pazarına özel müşteri iletişim platformu."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tidio'dan PORTZEN'e taşıma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mevcut Tidio bot akışlarınızı ve operatör hesaplarınızı 10-14 iş gününde PORTZEN üzerinde yeniden kuruyoruz. Konuşma geçmişi CSV olarak export edip arşivde tutulur."
      }
    },
    {
      "@type": "Question",
      name: "Tidio'da WhatsApp neden ekstra ödeme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidio'nun WhatsApp Business entegrasyonu Plus + Premium planlarına özeldir ve mesaj başına ek ücret alır. PORTZEN'de WhatsApp Business API tüm paketlerde dahildir."
      }
    },
    {
      "@type": "Question",
      name: "Instagram DM de aynı panelden yönetilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. PORTZEN'de WhatsApp + Instagram DM + canlı chat tek gelen kutusunda — bir operatör hepsini aynı yerden cevaplar. Tidio'da Instagram için ayrı entegrasyon ve ayrı paket gerekiyor."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe doğal dil işleme Tidio'dan farklı mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidio'nun Lyro AI'sı İngilizce odaklıdır, Türkçe çekim eklerinde ve günlük konuşma kalıplarında zayıftır. PORTZEN premium dil modeli motorunu Türkçe konuşma örnekleriyle özel olarak eğitir."
      }
    },
    {
      "@type": "Question",
      name: "KVKK için ne yapmam gerekiyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN tüm konuşma verilerini Türkiye lokasyonlu sunucularda saklar. KVKK aydınlatma metni, açık rıza akışı ve VERBİS kayıt desteği paket dahil. Tidio AB sunucu kullanır, KVKK uyum yükümlülüğü sizdedir."
      }
    },
    {
      "@type": "Question",
      name: "Vendor lock-in var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Tidio'nun aksine PORTZEN tüm konuşma verilerinizi istediğiniz zaman JSON/CSV olarak export etmenize izin verir. Numara sizin, veri sizin, hesap sizin — istediğiniz zaman bırakabilirsiniz."
      }
    },
    {
      "@type": "Question",
      name: "Mobile-first deneyim Tidio'da var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidio'nun chat widget'ı mobilde sıkışık durur, müşteri klavye açıkken yarısını göremez. PORTZEN'in widget'ı tam ekran moduna otomatik geçer, Türk e-ticaret mobil dönüşüm oranlarına göre tasarlanmıştır."
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
      name: "Tidio Alternatifi",
      item: "https://portzenai.com/tidio-alternatifi"
    }
  ]
};

const stats = [
  { metric: "3'ü 1'de", label: "WhatsApp + IG + Chat tek panel" },
  { metric: "Meta Resmi", label: "WhatsApp Business API ortağı" },
  { metric: "KVKK", label: "Türkiye sunucu + aydınlatma" },
  { metric: "14 gün", label: "Kurulum + taşıma süresi" }
];

const painPoints = [
  {
    title: "Sadece chat odaklı",
    desc: "Tidio temelde web sitesi canlı chat + bot ürünüdür. WhatsApp ve IG eklemek istediğinizde ayrı paket, ayrı entegrasyon, ayrı öğrenme."
  },
  {
    title: "WhatsApp ekstra ödeme",
    desc: "Tidio'nun WhatsApp Business entegrasyonu Plus + Premium plana özel, ekstra ödemeli. Mesaj başına da ekstra ücret işler."
  },
  {
    title: "Türk müşteri profili düşük",
    desc: "Tidio'nun ana pazarı ABD/AB. Türkiye'de KOBİ kitlesi, davranış desenleri ve sektör özelliklerine göre optimizasyon yok."
  },
  {
    title: "USD bazlı, kur riski",
    desc: "USD bazlı fiyat. Kur arttıkça faturanız katlanır. TL fatura yok."
  },
  {
    title: "KVKK belirsiz",
    desc: "Veri AB sunucularında işlenir. KVKK aydınlatma metni, veri silme talep yönetimi sizin yükümlülüğünüzde — kurulu akış yok."
  },
  {
    title: "Mobile UX zayıf",
    desc: "Tidio chat widget mobilde sıkışık, klavye açıkken müşteri yarısını göremez. Türk e-ticaret %75 mobil — kayıp büyük."
  }
];

const comparisonRows = [
  { feature: "Fiyat modeli", manychat: "USD bazlı", portzen: "Brief'te belirlenir" },
  { feature: "WhatsApp Business API (resmi)", manychat: "Plus+ planda + mesaj başı", portzen: "Tüm paketlerde dahil" },
  { feature: "Instagram DM tek panel", manychat: "Ayrı entegrasyon", portzen: "Tek gelen kutusu" },
  { feature: "Canlı chat widget", manychat: "Var", portzen: "Var + mobile-first" },
  { feature: "KVKK aydınlatma + TR sunucu", manychat: "Yok", portzen: "Paket dahil" },
  { feature: "Türkçe doğal yanıt (NLP)", manychat: "Lyro AI zayıf TR", portzen: "Premium dil modeli + Türkçe eğitim" },
  { feature: "Kurulum + ekip eğitimi", manychat: "Self-service", portzen: "Tam kurulum + canlı eğitim" },
  { feature: "Sözleşme süresi", manychat: "Yıllık peşin tercih", portzen: "Aylık esnek" },
  { feature: "Veri lokalizasyonu", manychat: "AB sunucu", portzen: "Türkiye sunucu opsiyonu" },
  { feature: "Vendor lock-in", manychat: "Veri export sınırlı", portzen: "JSON/CSV her zaman export" }
];

const solutionSteps = [
  {
    icon: MessageCircle,
    title: "Brief",
    description: "Mevcut Tidio bot akışlarınızı ve operatör süreçlerinizi birlikte inceliyoruz — hangileri kalsın, hangileri iyileşsin."
  },
  {
    icon: Sparkles,
    title: "Kurulum",
    description: "WhatsApp Business API başvurusu + Instagram bağlantı + chat widget + Türkçe NLP eğitimi 5-7 günde tamamlanır."
  },
  {
    icon: Smartphone,
    title: "Eğitim",
    description: "Ekibinize 2 saatlik canlı Türkçe eğitim — birleşik gelen kutusunu nasıl kullanacaklarını gösteriyoruz."
  },
  {
    icon: CheckCircle2,
    title: "Canlı",
    description: "Tidio paralel açık kalır, 3 gün test ediyoruz. Onaydan sonra Tidio hesabınızı iptal edip geçiş yapıyorsunuz."
  }
];

const features = [
  { icon: MessageCircle, title: "Birleşik gelen kutusu", desc: "WhatsApp + Instagram DM + canlı chat tek panelde. Bir operatör hepsini aynı yerden cevaplar — Tidio'da her biri ayrı." },
  { icon: ShieldCheck, title: "Resmi WhatsApp API + dahil", desc: "Meta'nın resmi iş ortağı altyapısı, giriş paketinde dahil. Tidio'da Plus+ planda ekstra ödeme." },
  { icon: Instagram, title: "Instagram DM entegre", desc: "Story yanıtları, gönderi yorumları, DM'ler — hepsi aynı kutuda. Ek entegrasyon ücreti yok." },
  { icon: Languages, title: "Türkçe NLP", desc: "Premium dil modeli motoru Türkçe konuşma örnekleriyle özel eğitim. 'Fiyat ne acaba' ile 'fiyatınız nedir' aynı algılanır." },
  { icon: Smartphone, title: "Mobile-first chat widget", desc: "Klavye açıkken müşteri tüm konuşmayı görür. Tam ekran moduna otomatik geçer. Türk mobil dönüşüm verilerine göre tasarlandı." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon ile aynı gün dönüş. Tidio'nun e-mail-only İngilizce desteği yerine gerçek insan." }
];

const faqs = [
  {
    q: "Tidio'dan PORTZEN'e taşıma süresi ne kadar?",
    a: "Mevcut Tidio bot akışlarınızı ve operatör hesaplarınızı 10-14 iş gününde PORTZEN üzerinde yeniden kuruyoruz. Konuşma geçmişiniz CSV olarak export edip arşiv olarak saklanır. Pilot 3 gün, sonra canlı geçiş — kesinti sıfır."
  },
  {
    q: "Tidio'da WhatsApp neden ekstra ödeme?",
    a: "Tidio'nun WhatsApp Business entegrasyonu sadece Plus ve Premium planlarına özeldir, ayrıca mesaj başına ek ücret işler. PORTZEN'de resmi WhatsApp Business API tüm paketlerde dahildir — giriş paketinde bile."
  },
  {
    q: "Instagram DM de aynı panelden yönetilir mi?",
    a: "Evet. PORTZEN'de WhatsApp + Instagram DM (story yanıtları, gönderi yorumları, doğrudan mesajlar) + canlı chat tek gelen kutusunda birleşir. Bir operatör hepsini aynı yerden cevaplar. Tidio'da Instagram için ayrı entegrasyon kurmanız + ayrı pakete geçmeniz gerekir."
  },
  {
    q: "Türkçe doğal dil işleme Tidio'dan farklı mı?",
    a: "Tidio'nun Lyro AI'sı İngilizce odaklıdır, Türkçe çekim eklerinde ('alabilir miyim', 'almak istiyorum') ve günlük kibarlık kalıplarında ('acaba', 'lütfen', 'rica etsem') zayıftır. PORTZEN premium dil modeli motorunu Türkçe konuşma örnekleriyle özel olarak ayarlar — müşterinin kendiliğinden konuştuğu cümleler ilk seferde anlaşılır."
  },
  {
    q: "KVKK için ne yapmam gerekiyor?",
    a: "Hiçbir şey. PORTZEN tüm konuşma verilerini Türkiye lokasyonlu sunucularda saklar (Pro+ paketlerde isteğe bağlı self-hosted da var). KVKK aydınlatma metni, açık rıza akışı, veri silme talep formu ve VERBİS kayıt desteği paket dahildir. Tidio AB sunucu kullanır, KVKK uyum yükümlülüğü tamamen sizdedir."
  },
  {
    q: "Vendor lock-in var mı?",
    a: "Hayır. PORTZEN tüm konuşma verilerinizi, müşteri listelerinizi ve bot akışlarınızı istediğiniz zaman JSON/CSV/PDF olarak export etmenize izin verir. WhatsApp numarası sizin (Business Account sizin adınıza), Instagram hesap sizin, veri sizin — istediğiniz zaman bırakabilirsiniz, ceza yok."
  },
  {
    q: "Mobile-first deneyim Tidio'da var mı?",
    a: "Tidio chat widget'ı mobilde küçük bir baloncuk olarak açılır, klavye açıldığında müşteri konuşmanın yarısını göremez. Türk e-ticaret trafiğinin %75'i mobilden geliyor — bu kritik bir kayıp. PORTZEN widget'ı klavye açıldığında otomatik tam ekran moduna geçer ve giriş alanı kayboldıktan sonra mesaj akışı hep görünür."
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
              <span className="text-ink">Tidio Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Tidio Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Tidio Alternatifi: WhatsApp + Instagram + Chat Tek Panelde
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Tidio chat-only bir üründür; WhatsApp ekstra ödeme, Instagram ayrı entegrasyon, KVKK belirsiz, mobile UX zayıf. PORTZEN aynı işi tek panelde, Türkiye sunucusunda yapar — KOBİ için 14 günde devreye girer.
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
                    href="/instagram-dm-otomasyonu"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Instagram DM Otomasyonu <ArrowUpRight className="h-4 w-4" />
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-blue text-paper"
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
              <div className="inline-block border-3 border-paper bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Tidio'nun Türk pazarında 6 zayıflığı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Tidio chat ürünüdür; WhatsApp + IG için 3 ayrı sistem kurmak zorunda kalırsınız.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5] h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-paper bg-brand-blue text-paper mb-4">
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
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Yan yana karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Tidio vs PORTZEN — 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Tidio</th>
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
                Taşıma süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Tidio'dan 14 günde nasıl çıkarsınız?
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
                Tidio'da olmayan 6 özellik
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
      <section className="bg-brand-blue text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek bir taşıma: Antalya kliniği
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Tidio'dan PORTZEN'e — chat + WhatsApp + IG tek panelde birleşti.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Antalya Lara'da bir saç ekim kliniği 14 aydır Tidio Growth planında çalışıyordu. Web sitesi chat widget'ı vardı ama WhatsApp ekstra Plus paketi istiyordu — almıyorlardı, ayrı bir WhatsApp uygulamasıyla manuel yönetiyorlardı. Instagram için bir başka 3rd party kullanıyorlardı.
                </p>
                <p>
                  3 büyük sorun vardı: (1) 3 ayrı panelden cevap veriyorlardı (Tidio chat + WhatsApp Business app + Sociality.io IG), aynı müşteri 3 kanaldan yazınca tekrar tekrar bilgi soruluyordu, (2) Web chat widget'ı mobilde sıkışıktı — klavye açıkken son mesaj görünmüyordu, sitede çıkış oranı %68'di, (3) KVKK aydınlatma metni hiçbirinde otomatik akmıyordu, manuel formla alıyorlardı.
                </p>
                <p>
                  10 günde tüm sistemi PORTZEN'e taşıdık: chat widget + WhatsApp Business API (resmi) + Instagram DM tek panelde birleşti. Mobil widget'ı tam ekran moduna geçecek şekilde özelleştirdik. KVKK aydınlatma metnini ilk mesajda otomatik gönderen akış kurduk. Manuel iş yükü ve 3 ayrı sistem yerine tek panel — operasyonel yük belirgin biçimde düştü.
                </p>
                <p>
                  İlk ay raporda: müşteri başına ortalama yanıt süresi 4 dakikadan 45 saniyeye düştü (3 panel arası geçiş yok), mobil chat dönüşümü %32'den %58'e çıktı, WhatsApp + IG'den gelen randevu sayısı %85 arttı.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Kanal sayısı</div>
                  <div className="font-display text-4xl font-black mb-1">3 → 1</div>
                  <div className="text-sm">WhatsApp + IG + chat tek panel</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Yanıt süresi</div>
                  <div className="font-display text-4xl font-black mb-1">4 dk → 45 sn</div>
                  <div className="text-sm">Birleşik panel sayesinde</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Mobil chat dönüşüm</div>
                  <div className="font-display text-4xl font-black text-brand-pink">%32 → %58</div>
                  <div className="text-sm">Mobile-first widget ile</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Tidio'dan geçmeden önce merak edilenler
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
                  ManyChat'in dolar bağımlılığı ve KVKK uyumsuzluğu yerine yerel WhatsApp + IG çözümü.
                </p>
                <Link href="/manychat-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  ManyChat Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">HubSpot pahalı geliyor mu?</h3>
                <p className="text-sm opacity-85 mb-3">
                  HubSpot Pro yerine TL bazlı, Türk muhasebe entegre CRM otomasyonu.
                </p>
                <Link href="/hubspot-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  HubSpot Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-section bg-paper">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Tidio'yu bırakın. Üç kanalı tek panele alalım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Tidio kurulumunuzu analiz ediyoruz, WhatsApp + IG + chat birleşik panelin nasıl çalışacağını canlı gösteriyoruz.
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
                <Link href="/zapier-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Zapier Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
