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
  Languages,
  Wallet,
  TrendingUp
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "HubSpot Alternatifi | KOBİ için TL Fiyatlı CRM — PORTZEN",
  description:
    "HubSpot Pro $800/ay yerine PORTZEN CRM ₺25.000 TL'den başlar. Logo/Mikro entegre, KVKK uyumlu, Türkçe arayüz, hızlı kurulum. KOBİ için tasarlandı.",
  keywords: [
    "hubspot alternatifi",
    "hubspot türkçe",
    "hubspot yerine ne",
    "türkiye crm yazılımı",
    "kobi crm",
    "hubspot fiyat alternatif",
    "logo crm entegre",
    "kvkk uyumlu crm"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/hubspot-alternatifi",
    siteName: "PORTZEN",
    title: "HubSpot Alternatifi | KOBİ için TL Fiyatlı CRM — PORTZEN",
    description:
      "HubSpot'un $800/ay başlangıç fiyatı yerine ₺25.000 TL/ay. Türk muhasebe entegre, KVKK uyumlu, hızlı kurulum."
  },
  twitter: {
    card: "summary_large_image",
    title: "HubSpot Alternatifi | PORTZEN",
    description:
      "KOBİ'ler için tasarlanmış, TL faturalı, Logo/Mikro entegre CRM otomasyonu."
  },
  alternates: { canonical: "https://portzenai.com/hubspot-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HubSpot Alternatifi — PORTZEN CRM ve Satış Otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "CRM Software",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "HubSpot'un KOBİ için fazla pahalı ve karmaşık olduğu noktada PORTZEN; Türk muhasebe entegre, KVKK uyumlu, TL faturalı ve hızlı kurulum sunan CRM çözümü.",
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
      name: "HubSpot'tan PORTZEN'e taşıma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mevcut HubSpot CRM'inizdeki kişi + şirket + deal verilerini CSV/API ile çekip 14-21 iş gününde PORTZEN üzerinde yeniden kuruyoruz. Pipeline'lar, etiketler, custom field'lar dahil — hiçbir veri kaybolmaz."
      }
    },
    {
      "@type": "Question",
      name: "HubSpot Starter ($20/user/ay) bana yetmiyor mu, neden Pro alıyorum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HubSpot Starter çoğu KOBİ için kısıtlı — workflow otomasyonu yok, custom reporting yok, sequences yok. Bu özelliklerin hepsi Pro'da ($800/ay) başlıyor. PORTZEN'in giriş paketinde bu özelliklerin hepsi var."
      }
    },
    {
      "@type": "Question",
      name: "Logo, Mikro, Netsis gibi Türk muhasebe yazılımlarına entegre olur mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Logo Tiger/Go, Mikro Run/Fly, Netsis Wings için hazır webhook + API katmanımız var. Müşteri PORTZEN'de oluşturulunca otomatik Logo'da cari kartı açılır, fatura kesilince geri sync edilir. HubSpot'ta hiçbiri yok."
      }
    },
    {
      "@type": "Question",
      name: "KVKK aydınlatma ve veri lokalizasyonu nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN tüm verileri Türkiye lokasyonlu sunucularda saklar. KVKK aydınlatma metni, açık rıza akışı, veri silme talep formu ve VERBİS kayıt desteği paket dahil. HubSpot ABD/AB sunucu kullanır, KVKK uyum yükümlülüğü tamamen sizindir."
      }
    },
    {
      "@type": "Question",
      name: "Aylık değişim/güncelleme ücreti var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aylık pakete dahil: yeni özel alan ekleme, yeni pipeline tanımlama, otomasyon güncelleme. Büyük yeniden yapılandırma talepleri ayrı teklif olarak ele alınır."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe destek nasıl çalışıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp + telefon + e-mail üzerinden Türkçe canlı destek, aynı gün dönüş. HubSpot'un sadece İngilizce chat ve e-mail desteği (Türkçe seçeneği Enterprise plana özel) yerine gerçek insan."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp + e-mail + form — hepsi CRM'e düşer mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Resmi WhatsApp Business API, e-mail (IMAP/SMTP), web formları, Instagram DM ve telefon kayıtları otomatik CRM'e düşer. HubSpot'ta WhatsApp Conversations sadece Marketing Hub Professional+ planda var ($800+/ay)."
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
      name: "HubSpot Alternatifi",
      item: "https://portzenai.com/hubspot-alternatifi"
    }
  ]
};

const stats = [
  { metric: "%75", label: "Aylık maliyet tasarrufu" },
  { metric: "21 gün", label: "Kurulum + veri taşıma" },
  { metric: "KVKK", label: "TR sunucu + aydınlatma" },
  { metric: "WhatsApp", label: "Giriş paketinde dahil" }
];

const painPoints = [
  {
    title: "Pro fiyatı $800/ay'dan başlıyor",
    desc: "HubSpot CRM ücretsiz görünür ama gerçek özellikler (workflow, sequences, custom report) Pro'da ($800/ay ≈ ₺32.000). KOBİ için orantısız."
  },
  {
    title: "KOBİ için fazla feature",
    desc: "Marketing Hub + Sales Hub + Service Hub + CMS Hub — toplam yüzlerce modül. KOBİ'nin ihtiyacı 10'unu kullanmıyor, ama hepsine ödüyor."
  },
  {
    title: "Türkçe destek zayıf",
    desc: "HubSpot Türkçe arayüz var ama destek dokümanları büyük çoğunlukla İngilizce. Live chat sadece İngilizce, Türkçe destek Enterprise plana özel."
  },
  {
    title: "Türk entegrasyonu yok",
    desc: "Logo, Mikro, Netsis, NetGSM, Iyzico, Param — hiçbiri HubSpot App Marketplace'de yok. Custom integration için ayrı geliştirici tutmalısınız."
  },
  {
    title: "Karmaşık öğrenme eğrisi",
    desc: "HubSpot Academy kursları var ama tamamı İngilizce. Ekibinizin CRM'i tam kullanması için en az 4-6 hafta lazım."
  },
  {
    title: "KVKK setupı yok",
    desc: "Veri AB/ABD sunucularında işlenir. KVKK aydınlatma akışı, veri silme talep yönetimi, VERBİS kayıt — hiçbiri kurulu değil, sizin başınızın belası."
  }
];

const comparisonRows = [
  { feature: "Başlangıç fiyatı (gerçek özelliklerle)", manychat: "Pro: $800/ay (≈₺32.000)", portzen: "₺12.000/ay" },
  { feature: "Türkçe canlı destek", manychat: "Enterprise plana özel", portzen: "Tüm paketlerde dahil" },
  { feature: "Türk muhasebe entegre", manychat: "Yok (custom dev gerekir)", portzen: "Logo/Mikro/Netsis hazır" },
  { feature: "KVKK paketi", manychat: "Sizin sorumluluğunuzda", portzen: "Tam paket dahil" },
  { feature: "WhatsApp Business API resmi", manychat: "$800+/ay plana özel", portzen: "Giriş paketinde dahil" },
  { feature: "Kurulum süresi", manychat: "4-8 hafta self-onboarding", portzen: "14-21 gün full kurulum" },
  { feature: "Ekip eğitimi", manychat: "Self-service Academy (İng)", portzen: "Canlı Türkçe eğitim dahil" },
  { feature: "Sözleşme süresi", manychat: "Yıllık peşin tercih edilir", portzen: "Aylık esnek" },
  { feature: "Veri lokalizasyonu", manychat: "ABD/AB sunucu", portzen: "Türkiye sunucu opsiyonu" },
  { feature: "Aylık ek modül ücreti", manychat: "Var (Marketing, Service, vs.)", portzen: "Yok — pakette her şey dahil" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Brief",
    description: "Mevcut HubSpot CRM'inizi ve iş akışınızı birlikte inceliyoruz — hangi özellikler kalsın, hangileri sadeleşsin."
  },
  {
    icon: Sparkles,
    title: "Kurulum",
    description: "Pipeline, custom field, otomasyon ve KVKK aydınlatma akışları 7-10 günde kurulur."
  },
  {
    icon: BookOpen,
    title: "Eğitim",
    description: "Ekibinize 4 saatlik canlı Türkçe eğitim — panel kullanımı, deal yönetimi, raporlama."
  },
  {
    icon: CheckCircle2,
    title: "Veri taşıma",
    description: "HubSpot kişi + şirket + deal verileriniz API/CSV ile aktarılır. Pipeline tarihsel verisi dahil korunur."
  }
];

const features = [
  { icon: TrendingUp, title: "Pipeline + deal yönetimi", desc: "Sürükle-bırak pipeline, otomatik stage geçişi, kazanma/kaybetme analizi — HubSpot Pro'daki özelliklerin hepsi giriş paketinde." },
  { icon: MessageCircle, title: "WhatsApp + e-mail birleşik kutu", desc: "Resmi WhatsApp Business API, e-mail, web form, IG DM — tek panelde. HubSpot'ta sadece $800+ planda." },
  { icon: Building2, title: "Logo/Mikro/Netsis entegre", desc: "Müşteri PORTZEN'de açılınca Logo'da cari kart otomatik oluşur. Fatura geri sync olur. Tek veri kaynağı." },
  { icon: ShieldCheck, title: "KVKK paketi dahil", desc: "Türkiye sunucu, açık rıza akışı, veri silme talep formu, VERBİS kayıt desteği — paket dahil." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon ile aynı gün dönüş. Tüm paketlerde, Enterprise'a yükselmeden." },
  { icon: Languages, title: "Türkçe panel + eğitim", desc: "Türkçe arayüz, Türkçe video kütüphane, 4 saatlik canlı kurulum eğitimi paket dahil." }
];

const packages = [
  {
    name: "Başlangıç",
    price: "12.000 TL",
    period: "/ay",
    setup: "Kurulum: 35.000 TL",
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
    price: "25.000 TL",
    period: "/ay",
    setup: "Kurulum: 55.000 TL",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "15 kullanıcıya kadar",
      "Sınırsız pipeline + otomasyon",
      "Logo/Mikro/Netsis hazır entegre",
      "Sequence + lead scoring",
      "Custom report + dashboard",
      "Haftalık optimizasyon"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "50.000 TL",
    period: "/ay",
    setup: "Kurulum: 90.000 TL+",
    color: "bg-paper",
    features: [
      "Sınırsız kullanıcı",
      "Self-hosted TR sunucu (KVKK)",
      "Özel API geliştirme",
      "Adanmış proje yöneticisi",
      "SLA + 7/24 öncelikli destek",
      "Aylık detaylı analiz raporu"
    ],
    cta: "Kurumsal Teklif"
  }
];

const faqs = [
  {
    q: "HubSpot'tan PORTZEN'e taşıma süresi ne kadar?",
    a: "Veri hacmine bağlı. 5.000 kişi altı için 14 gün, 20.000+ kişi için 21 gün tipik. HubSpot API'sinden kişi + şirket + deal + activity history çekilip PORTZEN'e eşleniyor. Pipeline aşamaları, custom field'lar, etiketler ve aktivite kayıtları korunur."
  },
  {
    q: "HubSpot Starter ($20/user/ay) bana yetmiyor mu, neden Pro alıyorum?",
    a: "HubSpot Starter çoğu KOBİ için kısıtlı — workflow otomasyonu yok, custom reporting yok, sequences yok, A/B test yok, conversation routing yok. Bu özelliklerin hepsi Pro'da ($800/ay sabit, kullanıcı sayısı arttıkça artar) başlıyor. PORTZEN'in giriş paketinde (₺12.000/ay) bu özelliklerin tamamı dahildir."
  },
  {
    q: "Logo, Mikro, Netsis gibi Türk muhasebe yazılımlarına entegre olur mu?",
    a: "Evet. Logo Tiger/Go, Mikro Run/Fly, Netsis Wings için hazır webhook + REST API katmanımız var. Müşteri PORTZEN'de oluşturulunca otomatik Logo'da cari kartı açılır, deal kapanınca otomatik fatura kesilir, fatura ödemesi geri PORTZEN'e sync edilir. HubSpot App Marketplace'de bu entegrasyonların hiçbiri yoktur."
  },
  {
    q: "KVKK aydınlatma ve veri lokalizasyonu nasıl?",
    a: "PORTZEN tüm verileri Türkiye lokasyonlu sunucularda saklar (Pro+ paketlerde isteğe bağlı self-hosted da var). KVKK aydınlatma metni, açık rıza akışı, veri silme talep formu (KVKK Madde 11), VERBİS kayıt desteği ve veri ihlal bildirim prosedürü paket dahildir. HubSpot ABD/AB sunucu kullanır; KVKK uyum yükümlülüğü tamamen sizdedir."
  },
  {
    q: "Aylık değişim/güncelleme ücreti var mı?",
    a: "Aylık pakete dahil olarak: yeni özel alan, yeni pipeline tanımı, otomasyon güncelleme, yeni kullanıcı ekleme/silme. Büyük yeniden yapılandırma talepleri (örneğin tüm pipeline mantığının değişmesi) ayrı teklif olarak ele alınır."
  },
  {
    q: "Türkçe destek nasıl çalışıyor?",
    a: "WhatsApp + telefon + e-mail üzerinden Türkçe canlı destek, mesai saatlerinde aynı gün, acil durumlarda 7/24 (Kurumsal pakette). HubSpot'un Türkçe canlı desteği sadece Enterprise planda var; diğer planlarda chat sadece İngilizcedir."
  },
  {
    q: "WhatsApp + e-mail + form — hepsi CRM'e düşer mi?",
    a: "Evet. Resmi WhatsApp Business API (Meta iş ortağı), e-mail (IMAP/SMTP), web formları, Instagram DM, telefon kayıtları (CTI entegrasyonu) — hepsi tek panelden takip edilir. HubSpot'ta WhatsApp Conversations sadece Marketing Hub Professional+ planda ($800/ay üzeri) vardır; PORTZEN'de giriş paketinde dahildir."
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
              <span className="text-ink">HubSpot Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Users className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">HubSpot Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  HubSpot Alternatifi: KOBİ için TL Fiyatlı, Türk Muhasebeye Entegre CRM
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  HubSpot CRM ücretsiz görünür, ama gerçek özellikler $800/ay Pro planında başlar — KOBİ için orantısız. PORTZEN, HubSpot Pro'nun tüm özelliklerini ₺12.000 TL/ay'dan, Türk muhasebeye entegre, KVKK uyumlu ve Türkçe destekli olarak sunar.
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
                HubSpot'un KOBİ için 6 zayıflığı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                HubSpot ücretsiz başlıyor ama gerçek fiyat $800/ay'dan başlıyor.
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
                HubSpot Pro vs PORTZEN — 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">HubSpot Pro</th>
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
              <strong>Kaynak:</strong> HubSpot fiyatları hubspot.com/pricing'den (Ocak 2026), karşılaştırma PORTZEN müşteri taşıma deneyimlerinden derlenmiştir.
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
                HubSpot'tan 21 günde nasıl çıkarsınız?
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
                HubSpot Pro'da ekstra ödediğiniz 6 özellik
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
      <section className="bg-brand-purple text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek bir taşıma: Ankara danışmanlık firması
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              HubSpot Starter $800/ay'dan PORTZEN'e — lead-müşteri dönüşümü %14'ten %38'e.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Ankara Çankaya'da 12 kişilik bir mali müşavirlik + danışmanlık firması 2 yıldır HubSpot Starter ($20/user × 5 user × 12 ay yıllık peşin ≈ $1.200/yıl) + Marketing Hub Starter kullanıyordu. Ama workflow ve sequences olmadığı için manuel takip yapıyorlardı. Pro'ya geçmek istediler — fiyat: $800/ay sabit + $50/user (Marketing Hub Pro ek). Toplam aylık $1.050 ≈ ₺42.000.
                </p>
                <p>
                  3 ana sorun vardı: (1) Lead'ler HubSpot'a düşüyor ama Logo Tiger'a cari kartı açmak için her seferinde manuel veri girişi yapıyorlardı — günde 10-15 lead, ayda yüzlerce saat kayıp, (2) Lead scoring olmadığı için ekip hangi lead'in sıcak olduğunu bilmiyor, hepsine aynı zamanı veriyordu, (3) KVKK aydınlatma metni bir form üzerinden alınıyordu ama HubSpot'ta açık rıza akışı kurulu değildi, denetim ihtiyacında zor durumda kaldılar.
                </p>
                <p>
                  21 günde tüm CRM'lerini PORTZEN'e taşıdık: 3.200 kişi + 480 deal + tüm aktivite history. Logo Tiger entegrasyonunu hazır webhook ile bağladık (PORTZEN'de yeni müşteri = Logo'da otomatik cari kart). Lead scoring kurduk (5 kriter: kaynak, sektör, bütçe aralığı, etkileşim, son temas), ekip artık sadece skoru 70+ lead'lerle ilgileniyor. KVKK için web formuna açık rıza, WhatsApp girişine otomatik aydınlatma mesajı eklendi.
                </p>
                <p>
                  Aylık fatura $1.050 USD (≈₺42.000) yerine sabit ₺25.000. İlk 3 ayın raporunda: lead-müşteri dönüşümü %14'ten %38'e çıktı (lead scoring sayesinde sıcak lead'lere odaklanma), manuel veri girişi haftada 22 saatten 3 saate düştü.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">HubSpot Pro hedefi</div>
                  <div className="font-display text-3xl font-black mb-1">$1.050/ay</div>
                  <div className="text-sm">≈ ₺42.000 (kur dalgalı)</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">PORTZEN'de</div>
                  <div className="font-display text-3xl font-black text-brand-green">₺25.000/ay</div>
                  <div className="text-sm">Sabit, KDV dahil, e-Arşiv</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Lead → müşteri</div>
                  <div className="font-display text-4xl font-black mb-1">%14 → %38</div>
                  <div className="text-sm">Lead scoring ile</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Manuel iş</div>
                  <div className="font-display text-4xl font-black text-brand-pink">22 sa → 3 sa</div>
                  <div className="text-sm">Haftalık, Logo otomasyonu</div>
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
                3 paket — kullanıcı başına ekstra ücret yok
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                HubSpot'un kullanıcı başına aylık ücretlendirmesinin aksine PORTZEN sabit paket. Ekibinizi büyütmek faturanızı katlayan değildir.
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
                  PORTZEN CRM ve satış otomasyonu sistemi tam olarak ne içeriyor — özellikler, vakalar, detaylar.
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
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                HubSpot'tan geçmeden önce merak edilenler
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
                  Zapier'in USD fiyatı yerine n8n + Make + Türk uygulama entegrasyonu.
                </p>
                <Link href="/zapier-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Zapier Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">ManyChat kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  ManyChat'in dolar fiyatı ve KVKK uyumsuzluğu yerine yerel WhatsApp + IG çözümü.
                </p>
                <Link href="/manychat-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  ManyChat Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
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
                HubSpot faturasını yarıya indirelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut HubSpot kurulumunuzu analiz ediyoruz, hangi özellikleri PORTZEN'de kuracağımızı netleştiriyoruz. Tahmini tasarruf raporu çıkarıyoruz.
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
                <Link href="/blog/crm-otomasyonu-rehberi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: CRM Otomasyonu Rehberi <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/whatsapp-ai-asistani" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  WhatsApp AI Asistanı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/tidio-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Tidio Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
