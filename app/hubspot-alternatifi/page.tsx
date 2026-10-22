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
  TrendingUp
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { PricingSection } from "@/components/pricing/PricingSection";
import { familyPriceSummary, maintenanceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "HubSpot Alternatifi | KOBİ için Türkçe CRM — PORTZEN",
  description:
    "HubSpot yerine PORTZEN CRM otomasyonu: Logo/Mikro entegrasyonu, KVKK gerekliliklerini dikkate alan kurulum, Türkçe arayüz. KOBİ için tasarlandı.",
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
    title: "HubSpot Alternatifi | KOBİ için Türkçe CRM — PORTZEN",
    description:
      "HubSpot yerine Türk muhasebe entegrasyonlu, KVKK gereklilikleri gözetilerek kurulan CRM alternatifi."
  },
  twitter: {
    card: "summary_large_image",
    title: "HubSpot Alternatifi | PORTZEN",
    description:
      "KOBİ'ler için tasarlanmış, Logo/Mikro entegrasyonlu, KVKK gereklilikleri gözetilerek kurulan CRM otomasyonu."
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
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  serviceType: "CRM Software",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "HubSpot'un KOBİ için fazla karmaşık olduğu noktada PORTZEN; Türk muhasebe entegrasyonlu, KVKK gereklilikleri gözetilerek kurulan CRM otomasyon çözümü."
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
        text: "Mevcut HubSpot CRM'inizdeki kişi + şirket + deal verilerini CSV/API ile çekip yeni yapıda yeniden kuruyoruz; teslim süresi veri hacmi ve kapsama göre teklifte yazılı olarak belirtilir. Pipeline'lar, etiketler ve custom field'lar aktarılır; aktarım sonrası kayıtlar birlikte kontrol edilir."
      }
    },
    {
      "@type": "Question",
      name: "HubSpot Starter bana yetmiyor mu, neden Pro alıyorum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HubSpot Starter çoğu KOBİ için kısıtlı — workflow otomasyonu yok, custom reporting yok, sequences yok. Bu özelliklerin hepsi HubSpot Pro planında başlıyor. PORTZEN'de bu akışlar kullandığınız CRM üzerinde tek seferlik iş otomasyonu kurulumu olarak kurulur; iş akışı ve uygulama bağlantısı sayısı pakete göre değişir."
      }
    },
    {
      "@type": "Question",
      name: "Logo, Mikro, Netsis gibi Türk muhasebe yazılımlarına entegre olur mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, yazılımın API/web servis erişimine bağlı olarak kurulabilir. Örneğin CRM'de müşteri oluşturulunca Logo'da cari kart otomatik açılır, fatura kesilince bilgi geri aktarılır. Hangi yazılım ve sürümün bağlanacağı teklifte yazılı olarak belirtilir. HubSpot'ta bu entegrasyonlar hazır gelmez."
      }
    },
    {
      "@type": "Question",
      name: "KVKK aydınlatma ve veri lokalizasyonu nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veriler sizin seçtiğiniz CRM'de ve sunucuda tutulur; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir (CRM, sunucu ve harici yazılım lisansları hariçtir). Açık rıza ve aydınlatma adımları otomasyon akışına eklenebilir; KVKK kapsamındaki işler teklifte yazılı olarak belirtilir. HubSpot ABD/AB sunucu kullanır; KVKK akışlarını kendiniz kurmanız gerekir."
      }
    },
    {
      "@type": "Question",
      name: "Aylık değişim/güncelleme kapsamı ne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulum tek seferliktir ve ilk 30 gün kurulum hatalarının giderilmesi dahildir. Sonrasında yeni özel alan ekleme, yeni pipeline tanımlama ve otomasyon güncellemeleri isteğe bağlı aylık bakım kapsamında ele alınır. Büyük yeniden yapılandırma talepleri ayrı teklif olarak ele alınır."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe destek nasıl çalışıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp + telefon + e-mail üzerinden Türkçe destek; mesajlara en kısa sürede dönüş yapıyoruz, destek kapsamı teklifte yazılı olarak belirtilir. HubSpot'un sadece İngilizce chat ve e-mail desteği (Türkçe seçeneği Enterprise plana özel) yerine gerçek insan."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp + e-mail + form — hepsi CRM'e düşer mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Resmi WhatsApp Business API, e-mail (IMAP/SMTP), web formları, Instagram DM ve telefon kayıtları otomatik CRM'e düşer; bağlanacak kanal ve uygulama sayısı seçilen pakete göre belirlenir. HubSpot'ta WhatsApp Conversations sadece Marketing Hub Professional+ planda vardır."
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
  { metric: "Sade", label: "KOBİ için tasarım" },
  { metric: "Tek sefer", label: "Kurulum + veri taşıma" },
  { metric: "KVKK", label: "Aydınlatma + açık rıza akışı" },
  { metric: "WhatsApp", label: "Native entegre" }
];

const painPoints = [
  {
    title: "Gerçek özellikler Pro planında",
    desc: "HubSpot CRM ücretsiz görünür ama gerçek özellikler (workflow, sequences, custom report) sadece Pro planında açılır. KOBİ için orantısız bir sıçrama."
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
  { feature: "Ticari model", manychat: "Kullanıcı başı + eklenti bazlı", portzen: "Tek seferlik kurulum + isteğe bağlı bakım" },
  { feature: "Türkçe canlı destek", manychat: "Enterprise plana özel", portzen: "Türkçe destek; kapsam teklifte yazılı" },
  { feature: "Türk muhasebe entegre", manychat: "Yok (custom dev gerekir)", portzen: "Logo/Mikro/Netsis; API erişimine göre" },
  { feature: "KVKK paketi", manychat: "Sizin sorumluluğunuzda", portzen: "Kurulumda yapılandırılır, teklifte yazılı" },
  { feature: "WhatsApp Business API resmi", manychat: "Üst planlara özel", portzen: "Bağlantı sayısı pakete göre" },
  { feature: "Kurulum süresi", manychat: "4-8 hafta self-onboarding", portzen: "Kapsama göre, teklifte yazılı" },
  { feature: "Ekip eğitimi", manychat: "Self-service Academy (İng)", portzen: "Büyüme ve Kurumsal pakette dahil" },
  { feature: "Sözleşme süresi", manychat: "Yıllık peşin tercih edilir", portzen: "Teklifte yazılı" },
  { feature: "Veri lokalizasyonu", manychat: "ABD/AB sunucu", portzen: "Sağlayıcı ve bölge teklifte yazılı" },
  { feature: "Ek modül kuralı", manychat: "Var (Marketing, Service, vs.)", portzen: "Paket kapsamı yazılı; lisanslar hariç" }
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
    description: "Pipeline, custom field, otomasyon ve KVKK aydınlatma akışları kurulur; teslim süresi kapsama göre teklifte yazılı olarak belirtilir."
  },
  {
    icon: BookOpen,
    title: "Eğitim",
    description: "Büyüme ve Kurumsal paketlerde ekibinize canlı Türkçe eğitim — panel kullanımı, deal yönetimi, raporlama."
  },
  {
    icon: CheckCircle2,
    title: "Veri taşıma",
    description: "HubSpot kişi + şirket + deal verileriniz API/CSV ile aktarılır. Pipeline tarihsel verisi dahil korunur."
  }
];

const features = [
  { icon: TrendingUp, title: "Pipeline + deal yönetimi", desc: "Sürükle-bırak pipeline, otomatik stage geçişi, kazanma/kaybetme analizi — kullandığınız CRM üzerinde kurulur; iş akışı sayısı pakete göre değişir." },
  { icon: MessageCircle, title: "WhatsApp + e-mail birleşik kutu", desc: "Resmi WhatsApp Business API, e-mail, web form, IG DM — tek panelde. HubSpot'ta sadece üst planlarda gelir." },
  { icon: Building2, title: "Logo/Mikro/Netsis entegre", desc: "CRM'de müşteri açılınca Logo'da cari kart otomatik oluşturulur, fatura bilgisi geri aktarılır. Bağlanacak yazılım ve sürüm teklifte belirtilir." },
  { icon: ShieldCheck, title: "KVKK akışları", desc: "Açık rıza akışı ve veri silme talep formu otomasyona eklenebilir; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon + e-posta ile Türkçe iletişim; en kısa sürede dönüş yapıyoruz. Destek ve bakım kapsamı teklifte yazılı olarak belirtilir." },
  { icon: Languages, title: "Türkçe panel + eğitim", desc: "Türkçe arayüz ve Türkçe video kütüphane; canlı ekip eğitimi Büyüme ve Kurumsal paketlerde dahildir." }
];


const faqs = [
  {
    q: "HubSpot'tan PORTZEN'e taşıma süresi ne kadar?",
    a: "Veri hacmine ve kapsama bağlı; teslim süresi teklifte yazılı olarak belirtilir. HubSpot API'sinden kişi + şirket + deal + activity history çekilip yeni yapıya eşleniyor. Pipeline aşamaları, custom field'lar, etiketler ve aktivite kayıtları korunur."
  },
  {
    q: "HubSpot Starter bana yetmiyor mu, neden Pro alıyorum?",
    a: "HubSpot Starter çoğu KOBİ için kısıtlı — workflow otomasyonu yok, custom reporting yok, sequences yok, A/B test yok, conversation routing yok. Bu özelliklerin hepsi Pro planında başlıyor. PORTZEN'de bu akışlar kullandığınız CRM üzerinde tek seferlik iş otomasyonu kurulumu olarak kurulur; iş akışı ve uygulama bağlantısı sayısı pakete göre değişir."
  },
  {
    q: "Logo, Mikro, Netsis gibi Türk muhasebe yazılımlarına entegre olur mu?",
    a: "Evet, yazılımın API/web servis erişimine bağlı olarak kurulabilir. Örneğin CRM'de müşteri oluşturulunca Logo'da cari kart otomatik açılır, deal kapanınca fatura oluşturulur, ödeme bilgisi CRM'e geri aktarılır. Hangi yazılım ve sürümün bağlanacağı teklifte yazılı olarak belirtilir. HubSpot App Marketplace'de bu entegrasyonların hiçbiri yoktur."
  },
  {
    q: "KVKK aydınlatma ve veri lokalizasyonu nasıl?",
    a: "Veriler sizin seçtiğiniz CRM'de ve sunucuda tutulur; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir (CRM, sunucu ve harici yazılım lisansları hariçtir). Açık rıza akışı ve veri silme talep formu (KVKK Madde 11) otomasyon akışına eklenebilir; KVKK kapsamındaki işler teklifte yazılı olarak belirtilir. HubSpot ABD/AB sunucu kullanır; KVKK akışlarını kendiniz kurmanız gerekir."
  },
  {
    q: "Fiyat nasıl belirleniyor?",
    a: `İş otomasyonu kurulumu tek seferliktir (KDV hariç): ${familyPriceSummary("is-otomasyonu")}. İsteğe bağlı aylık bakım ikinci aydan itibaren ${maintenanceSummary()}. CRM lisansı hariçtir.`
  },
  {
    q: "Türkçe destek nasıl çalışıyor?",
    a: "WhatsApp + telefon + e-mail üzerinden Türkçe destek; mesai saatlerinde en kısa sürede dönüş yapıyoruz. HubSpot'un Türkçe canlı desteği sadece Enterprise planda var; diğer planlarda chat sadece İngilizcedir."
  },
  {
    q: "WhatsApp + e-mail + form — hepsi CRM'e düşer mi?",
    a: "Evet. Meta'nın resmi WhatsApp Business API'si, e-mail (IMAP/SMTP), web formları, Instagram DM, telefon kayıtları (CTI entegrasyonu) — hepsi tek panelden takip edilir. HubSpot'ta WhatsApp Conversations sadece Marketing Hub Professional+ planda vardır; PORTZEN'de bağlanacak kanal ve uygulama sayısı seçilen pakete göre belirlenir."
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
              <span className="text-ink">HubSpot Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Users className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">HubSpot Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  HubSpot Alternatifi: KOBİ için Türk Muhasebeye Entegre CRM
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  HubSpot CRM ücretsiz görünür, ama gerçek özellikler Pro planında başlar — KOBİ için orantısız. PORTZEN, ihtiyacınız olan satış otomasyonlarını Türk muhasebeye entegre, KVKK gerekliliklerini dikkate alarak ve Türkçe destekle kurar.
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
                HubSpot&apos;un KOBİ için 6 zayıflığı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                HubSpot ücretsiz başlıyor ama gerçek özellikler Pro planında.
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
                HubSpot Pro vs PORTZEN — 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[700px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">HubSpot Pro</th>
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
              <strong>Kaynak:</strong> HubSpot özellik ve modül bilgileri hubspot.com/products&apos;tan, PORTZEN sütunu paket kapsamına göre hazırlanmıştır.
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
                HubSpot&apos;tan 4 adımda nasıl çıkarsınız?
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
                HubSpot Pro&apos;da ekstra ödediğiniz 6 özellik
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

      {/* 6. CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: danışmanlık firması
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek senaryo: HubSpot Starter&apos;dan PORTZEN kurulumuna geçiş nasıl işler?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Bu örnek senaryoda 12 kişilik bir mali müşavirlik + danışmanlık firması HubSpot Starter + Marketing Hub Starter kullanıyor. Workflow ve sequences olmadığı için takip manuel yapılıyor. Pro&apos;ya geçmek isteniyor; ancak lisans + kullanıcı başı marketing eklentileri KOBİ bütçesi için orantısız kalıyor.
                </p>
                <p>
                  3 ana sorun var: (1) Lead&apos;ler HubSpot&apos;a düşüyor ama Logo Tiger&apos;da cari kart açmak için her seferinde manuel veri girişi yapılıyor, (2) Lead scoring olmadığı için ekip hangi lead&apos;in sıcak olduğunu bilmiyor, hepsine aynı zamanı veriyor, (3) KVKK aydınlatma metni bir form üzerinden alınıyor ama açık rıza akışı kurulu değil.
                </p>
                <p>
                  Kurulumda kişi, deal ve aktivite geçmişi seçilen CRM yapısına taşınır. Logo Tiger bağlantısı kurulur (CRM&apos;de yeni müşteri = Logo&apos;da otomatik cari kart). Lead scoring tanımlanır (5 kriter: kaynak, sektör, bütçe aralığı, etkileşim, son temas); ekip önceliği yüksek skorlu lead&apos;lere verir. KVKK için web formuna açık rıza, WhatsApp girişine otomatik aydınlatma mesajı eklenir.
                </p>
                <p>
                  İş akışında değişen şu: cari kart açma ve fatura bilgisi gibi tekrar eden veri girişleri otomasyona devredilir, lead&apos;ler skora göre sıralanır, açık rıza kaydı akışın içinde tutulur. Otomasyon kurulumu tek seferliktir; CRM lisansı ayrıca ödenir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Lead önceliği</div>
                  <div className="font-display text-4xl font-black mb-1">Skor</div>
                  <div className="text-sm">5 kriterli lead scoring</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Manuel iş</div>
                  <div className="font-display text-4xl font-black text-ink">Otomatik</div>
                  <div className="text-sm">Logo&apos;da cari kart açılışı</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Kurulum</div>
                  <div className="font-display text-4xl font-black">Tek seferlik</div>
                  <div className="text-sm">Veri taşıma dahil; süre teklifte yazılı</div>
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
                HubSpot&apos;tan geçmeden önce merak edilenler
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
                <Building2 className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">Zapier de mi pahalı geliyor?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Zapier&apos;in USD fiyatı yerine n8n + Make + Türk uygulama entegrasyonu.
                </p>
                <Link href="/zapier-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Zapier Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <Building2 className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">ManyChat kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  ManyChat&apos;in dolar fiyatı yerine TL fiyatlı, KVKK gereklilikleri gözetilerek kurulan WhatsApp + IG çözümü.
                </p>
                <Link href="/manychat-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  ManyChat Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
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
                HubSpot&apos;tan Türkiye&apos;ye özel bir CRM&apos;e geçelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                30 dakikalık ücretsiz brief görüşmesinde mevcut HubSpot kurulumunuzu analiz ediyoruz, hangi özellikleri PORTZEN&apos;de kuracağımızı netleştiriyoruz. Kapsam ve net rakamı bu görüşmede paylaşıyoruz.
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
