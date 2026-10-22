import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Instagram,
  Clock3,
  MessageSquare,
  Heart,
  Filter,
  Calendar,
  Hash,
  ShieldCheck,
  Building2,
  CheckCircle2
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { RelatedSectorsSection } from "@/components/landing/RelatedSectorsSection";
import { RelatedLocationsSection } from "@/components/landing/RelatedLocationsSection";
import { PricingSection, SinglePriceSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";
import { SINGLE, singlePriceLabel } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Instagram DM Otomasyonu | Kural Tabanlı Otomatik DM — PORTZEN",
  description:
    "Instagram DM otomasyonu: gelen mesaj, hikaye yanıtı ve yorumlara anahtar kelimeye göre kural tabanlı otomatik DM. Estetik, butik, e-ticaret için; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Ücretsiz keşif.",
  keywords: [
    "instagram dm otomasyonu",
    "instagram dm bot",
    "sosyal medya yönetimi izmir",
    "instagram müşteri yönetimi",
    "instagram otomatik mesaj",
    "instagram chatbot"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/instagram-dm-otomasyonu",
    siteName: "PORTZEN",
    title: "Instagram DM Otomasyonu | Kural Tabanlı Otomatik DM — PORTZEN",
    description:
      "Instagram'a gelen DM, hikaye yanıtı ve yorumlara anahtar kelimeye göre önceden hazırlanmış mesajlar gönderen kural tabanlı sistem."
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram DM Otomasyonu | Kural Tabanlı Otomatik DM",
    description:
      "PORTZEN, markalar için kural tabanlı Instagram DM otomasyonu kurar: anahtar kelime, yorum ve hikâye tetikleyicileriyle otomatik mesaj, 7/24 aktif."
  },
  alternates: { canonical: "https://portzenai.com/instagram-dm-otomasyonu" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Instagram DM Otomasyonu Kurulumu",
  serviceType: "Sosyal Medya Otomasyonu (kural tabanlı Instagram DM)",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Instagram DM, hikaye yanıtları, yorumlar ve reklam etkileşimlerine anahtar kelimeye göre otomatik DM gönderen kural tabanlı otomasyon sistemi. Serbest sorulara AI ile yanıt AI müşteri asistanı kapsamındadır. Estetik klinik, butik, e-ticaret ve danışmanlar için; teslim süresi kapsama göre teklifte yazılı olarak belirtilir."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Instagram DM otomasyonu Meta politikalarına uygun mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Meta'nın resmi Messenger Platform API'sini kullanıyoruz. Resmi entegrasyon, yetkisiz araçlara özgü shadowban ve askıya alma riskini en aza indirir. Yetkisiz üçüncü parti araçlar değil, resmi entegrasyon."
      }
    },
    {
      "@type": "Question",
      name: "Kurulum ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Kurulum; brief, senaryo yazımı, Meta Business Suite bağlantısı, test ve canlıya almayı kapsar. Çoklu ürün katalogları süreyi uzatır."
      }
    },
    {
      "@type": "Question",
      name: "Hangi etkileşimlere yanıt verir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DM mesajları, hikaye yanıtları, post yorumları, reklam tıklamasından gelen sohbetler ve 'mesaj at' butonu — hepsi önceden hazırlanmış mesajlarla otomatize edilir. Anahtar kelimeye göre farklı akışlar tetiklenir; serbest sorulara AI ile yanıt AI müşteri asistanı kapsamındadır."
      }
    },
    {
      "@type": "Question",
      name: "Fiyatı ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Instagram DM pazarlama otomasyonu ${singlePriceLabel(SINGLE["instagram-dm"])} (KDV hariç). Otomasyon platformu aboneliği hariçtir. Hizmet kural tabanlıdır; serbest sorulara AI ile yanıt AI müşteri asistanı kapsamındadır.`
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp asistanımla birlikte çalışır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Instagram DM otomasyonu kural tabanlıdır; WhatsApp ve Instagram'da aynı bilgi tabanından AI ile yanıt istiyorsanız bu, AI müşteri asistanının Kurumsal paketinde (Web + WhatsApp + Instagram) yer alır. Aynı ton korunur, müşteri her yerden tutarlı yanıt alır."
      }
    },
    {
      "@type": "Question",
      name: "İzmir merkezli misiniz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, PORTZEN İzmir'de. Ama tüm Türkiye'ye uzaktan kurulum ve sosyal medya yönetimi hizmeti veriyoruz. İzmir içindeki markalara talep edilirse yerinde de destek veriyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Bot insan gibi mi konuşur, yoksa robotik mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mesaj şablonlarını markanızın ses tonuna göre yazıyoruz. Estetik klinikse sıcak ve güven veren, butikse genç ve enerjik. Hazır şablon değil — sizin markanız gibi konuşur. Bot serbest metni yorumlamaz; önceden yazılmış mesajları anahtar kelime, yorum ve hikâye tetikleyicilerine göre gönderir. Serbest sorulara AI ile yanıt, ayrı bir hizmet olan AI müşteri asistanı kapsamındadır."
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
      name: "Instagram DM Otomasyonu",
      item: "https://portzenai.com/instagram-dm-otomasyonu"
    }
  ]
};

const stats = [
  { metric: "Kural", label: "Tetikleyiciye göre otomatik DM" },
  { metric: "Resmi API", label: "Meta Messenger Platform" },
  { metric: "7/24", label: "DM, hikaye, yorum: hepsi otomatik" },
  { metric: "Türkçe", label: "Marka tonunda mesaj şablonları" }
];

const problems = [
  "Reklamdan gelen DM'ler geç cevap aldığında müşteri ilgisini kaybetmiş oluyor.",
  "Hikaye yanıtlarına bakmaya vakit yok — yüzlerce mesaj okunmadan kalıyor.",
  "Aynı 'fiyat ne kadar, randevu var mı, kargo dahil mi' sorularını günde 50 kere yanıtlamak ekibinizi tüketiyor.",
  "Reklam bütçesi DM'lere harcandı ama kimse cevap atmadığı için müşteri kaçtı — para boşa gitti.",
  "Sosyal medya sorumlusu izne çıktığında DM kutusu tamamen sahipsiz, bir hafta sonra 300+ okunmamış mesaj."
];

const features = [
  {
    icon: Clock3,
    title: "Otomatik ilk mesaj",
    desc: "Reklam tıklamasından gelen DM'ye tanımlı anahtar kelimeye göre hazır mesaj otomatik gider."
  },
  {
    icon: Heart,
    title: "Hikaye yanıtı otomasyonu",
    desc: "Story'lere gelen 'beğendim', 'fiyat?', 'link?' yanıtları otomatik cevaplanır."
  },
  {
    icon: Filter,
    title: "Yorum filtreleme",
    desc: "Posta gelen yorumlarda tanımlı anahtar kelimeleri yakalar, yorumu yapana otomatik DM gönderir."
  },
  {
    icon: Calendar,
    title: "DM'den randevu",
    desc: "Estetik, kuaför, klinik için DM içinden randevu sayfanıza yönlendirir; takvime doğrudan randevu kaydı AI müşteri asistanının Büyüme ve Kurumsal paketlerindedir."
  },
  {
    icon: Hash,
    title: "Anahtar kelime akışı",
    desc: "'Fiyat', 'kargo', 'beden' gibi kelimelere göre farklı akışlar tetiklenir."
  },
  {
    icon: ShieldCheck,
    title: "Resmi Meta API",
    desc: "Resmi Messenger Platform API; yetkisiz araçlara özgü shadowban ve askıya alma riskini en aza indirir."
  }
];


const faqs = [
  {
    q: "Instagram DM otomasyonu Meta politikalarına uygun mu?",
    a: "Evet. Meta'nın resmi Messenger Platform API'sini kullanıyoruz — yetkisiz üçüncü parti araç değil. Resmi entegrasyon, yetkisiz araçlara özgü shadowban ve askıya alma riskini en aza indirir. Akışlar Meta'nın 24 saatlik mesajlaşma penceresi kuralı dikkate alınarak tasarlanır."
  },
  {
    q: "Kurulum ne kadar sürer ve neler dahil?",
    a: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Kurulumun içinde brief görüşmesi, senaryo yazımı, Meta Business Suite bağlantısı, anahtar kelime akışlarının kurulumu, gerçek mesajlarla test ve canlıya alma var. E-ticaret katalogu olan markalarda süre uzar."
  },
  {
    q: "Hangi etkileşimlere yanıt verir, hangilerine vermez?",
    a: "Yanıt verir: DM mesajları, hikaye yanıtları, post yorumları, reklam tıklamasından gelen sohbetler, 'mesaj at' butonu. Yanıt vermez: özel mesajlardaki sesli mesajlar (transkript verilmedikçe), serbest metinli, tanımlı anahtar kelimeyle eşleşmeyen sorular, şikayet veya hassas konular (bunlar insana devredilir; serbest sorulara AI ile yanıt, ayrı bir hizmet olan AI müşteri asistanı kapsamındadır)."
  },
  {
    q: "Fiyatı ne kadar, kurulum sonrası ek masraf var mı?",
    a: `Instagram DM pazarlama otomasyonu ${singlePriceLabel(SINGLE["instagram-dm"])} (KDV hariç). Otomasyon platformu aboneliği hariçtir; Meta, Instagram DM için şu an ayrıca ücret almıyor. Hizmet kural tabanlıdır; serbest sorulara AI ile yanıt istiyorsanız AI müşteri asistanı paketlerine bakın.`
  },
  {
    q: "WhatsApp asistanımla birlikte çalışır mı?",
    a: "Evet. Instagram DM otomasyonu kural tabanlıdır; WhatsApp ve Instagram'da aynı bilgi tabanından AI ile yanıt istiyorsanız bu, AI müşteri asistanının Kurumsal paketinde (Web + WhatsApp + Instagram) yer alır. Aynı ton korunur. Müşteri Instagram'dan DM atıp WhatsApp'tan devam ettiğinde aynı yerden takip edersiniz."
  },
  {
    q: "Bot insan gibi mi konuşur?",
    a: "Mesaj şablonlarını markanızın ses tonuna göre yazıyoruz. Estetik klinikse sıcak ve güven veren, butikse genç ve enerjik, danışmansa profesyonel ve net. Hazır şablon değil. Yanıtların robotik veya genel görünmemesi için her sektöre özel diyalog kütüphanesi yazılır. Bot serbest metni yorumlamaz; önceden yazılmış mesajları anahtar kelime, yorum ve hikâye tetikleyicilerine göre gönderir. Serbest sorulara AI ile yanıt, ayrı bir hizmet olan AI müşteri asistanı kapsamındadır."
  },
  {
    q: "İzmir merkezli misiniz, başka şehirlere de hizmet veriyor musunuz?",
    a: "PORTZEN İzmir merkezli ama tüm Türkiye'ye uzaktan sosyal medya yönetimi ve DM otomasyonu hizmeti veriyoruz. Kurulum tamamen online — Meta Business Suite üzerinden erişim açıyorsunuz, biz kuruyoruz. İzmir içindeki markalara yerinde de gelinebilir."
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. HERO */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-ink/80">
              <Link href="/" className="hover:text-ink transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Instagram DM Otomasyonu</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper text-ink px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Instagram className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Sosyal Medya Otomasyonu</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl">
                  Instagram DM Otomasyonu | Kural Tabanlı Otomatik DM
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body opacity-95 font-medium">
                  Instagram&apos;a gelen DM, hikaye yanıtı, yorum ve reklam etkileşimlerini anahtar kelime, yorum ve hikâye tetikleyicilerine göre önceden hazırlanmış mesajlarla otomatik karşılayan kural tabanlı otomasyon sistemi. PORTZEN bu sistemi estetik klinik, butik, e-ticaret ve danışmanlar için kurar; serbest sorulara AI ile yanıt ise ayrı bir hizmet olan AI müşteri asistanı kapsamındadır.
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
                    href="/sosyal-medya-yonetimi"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    Hizmeti İncele <ArrowUpRight className="h-4 w-4" />
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
                      i % 2 === 0 ? "bg-light text-ink" : "bg-paper text-ink"
                    )}
                  >
                    <div className="font-display text-4xl md:text-5xl font-black leading-none mb-2">
                      {s.metric}
                    </div>
                    <div className="text-xs font-medium opacity-80">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ServiceAtAGlance href="/instagram-dm-otomasyonu" />

      <MoreDetails title="Ayrıntılar: Tanıdık sorunlar" summary="Cevapsız DM'ler, tekrar eden sorular, sahipsiz mesaj kutusu">
      {/* 2. PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Reklama harcadığınız her kuruş, cevapsız DM&apos;de eriyor olabilir.
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

      </MoreDetails>
      {/* 4. FEATURES */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sistemin tam içeriği
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Instagram DM otomasyonunuzda neler var?
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

      <MoreDetails title="Ayrıntılar: Örnek senaryo — butik mağaza" summary="Anahtar kelime akışları nasıl kurulur?">
      {/* 6. CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: butik mağaza
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek senaryo: bir butikte kural tabanlı Instagram DM otomasyonu nasıl kurulur?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Bu örnek senaryoda butik, Instagram&apos;dan her gün çok sayıda DM alıyor — &apos;fiyat ne&apos;, &apos;kargo dahil mi&apos;, &apos;X beden var mı&apos;, &apos;Y rengi geldi mi&apos;. Reklam başlayınca mesaj sayısı artıyor. Tek sosyal medya sorumlusu mesajlara yetişemiyor, gece gelen DM&apos;ler sabaha kadar bekliyor, müşteri başka sayfaya gidiyor.
                </p>
                <p>
                  Brief&apos;te ürün kataloğu, sık sorulan beden/renk soruları, kargo şartları ve iade politikası çıkarılır. Ardından anahtar kelime akışları kurulur: &apos;fiyat&apos; anahtar kelimesi gelince ürün linki + fiyat paylaşılır, &apos;beden&apos; gelince beden tablosu gönderilir, &apos;kargo&apos; gelince teslimat koşulları anlatılır. Karmaşık vakalar (özel sipariş, dolar fiyat) sahibe devredilir.
                </p>
                <p>
                  Hikaye yanıtlarına otomatik &apos;merhaba, ürünü Bio link&apos;inden inceleyebilirsin&apos; mesajı kurulur. Reklamdan gelen DM&apos;lere &apos;hangi ürüne baktığını sor + ürün linkini paylaş&apos; akışı yazılır. Tanımlı anahtar kelimeyle eşleşmeyen serbest sorular sorumluya devredilir; bunlara AI ile yanıt istenirse ayrı bir hizmet olan AI müşteri asistanı eklenir.
                </p>
                <p>
                  İş akışında değişen şu: sık gelen sorular tanımlı mesajlarla otomatik karşılanır, gece gelen DM&apos;ler de ilk mesajı alır, sosyal medya sorumlusu içerik üretimine ve özel siparişlere odaklanır.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">Elle</div>
                  <div className="text-sm">Her DM tek tek yanıtlanıyor</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-ink">Otomatik</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">Dağınık</div>
                  <div className="text-sm">Aynı sorular her gün yeniden yazılıyor</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-ink">Akış</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Devir</div>
                  <div className="font-display text-4xl font-black text-ink">İnsana</div>
                  <div className="text-sm">Özel sipariş ve serbest sorular sorumluya</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <SinglePriceSection id="instagram-dm" heading="Instagram DM otomasyonu fiyatı" intro="Kural tabanlı pazarlama otomasyonu: yorum ve hikâye etkileşimine otomatik DM. Serbest sorulara AI ile yanıt, dil algılama ve entegrasyonlar AI müşteri asistanı kapsamındadır; fiyatları hemen aşağıdadır. Tutarlar TL ve KDV hariçtir." />
      <PricingSection family="ai-musteri-asistani" id="ai-asistan" badge="AI müşteri asistanı" heading="Instagram'da AI yanıt: AI müşteri asistanı fiyatları" intro="Instagram DM'lerine serbest metinle AI yanıtı gerekiyorsa bu paketler geçerlidir. Instagram kanalı Kurumsal pakette dahildir. Aylık ücretin altında kurulum bedeli ve ilk ay toplamı yazılıdır." />


      {/* 8. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Karar vermeden önce merak edilenler
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-ink/15 pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <div className="flex items-start gap-4 flex-wrap">
                <Building2 className="h-6 w-6 shrink-0 text-ink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">WhatsApp&apos;a gelen mesajları da otomatize etmek mi istiyorsunuz?</h3>
                  <p className="text-sm opacity-85 mb-3">
                    DM + WhatsApp&apos;ı tek bilgi tabanından AI ile yanıtlamak isteyen markalar için ayrı bir hizmet olan AI müşteri asistanı vardır (Instagram kanalı Kurumsal pakette); WhatsApp AI Asistanı sayfamıza bakın.
                  </p>
                  <Link
                    href="/whatsapp-ai-asistani"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                  >
                    WhatsApp AI Asistanı <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <RelatedSectorsSection service="instagram-dm-otomasyonu" />
      <RelatedLocationsSection service="instagram-dm-otomasyonu" />

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                DM&apos;leriniz için otomatik ilk yanıtı kuralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut DM hacminizi inceleyip size uygun paketi öneriyoruz. WhatsApp&apos;tan yazın veya iletişim formunu doldurun — en kısa sürede dönüş yapıyoruz.
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
                  <MessageSquare className="h-4 w-4" /> WhatsApp ile Mesaj At
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
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
