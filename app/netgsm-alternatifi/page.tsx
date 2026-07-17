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
  Mail,
  Send,
  CheckCircle2,
  Building2,
  Wallet,
  Boxes,
  Smartphone
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Netgsm Alternatifi | WhatsApp + Email + SMS Çok Kanallı Otomasyon - PORTZEN",
  description:
    "Sadece SMS yerine WhatsApp + Email + SMS çoklu kanal ile daha yüksek dönüşüm ve iki yönlü müşteri iletişimi. PORTZEN çok kanallı mesajlaşma otomasyonu kurar.",
  keywords: [
    "netgsm alternatifi",
    "toplu sms alternatif",
    "whatsapp toplu mesaj",
    "iletimerkezi alternatifi",
    "verimor alternatifi",
    "çok kanallı pazarlama",
    "sms email whatsapp otomasyon",
    "kobi mesajlaşma otomasyonu"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/netgsm-alternatifi",
    siteName: "PORTZEN",
    title: "Netgsm Alternatifi | Çok Kanallı Mesajlaşma Otomasyonu - PORTZEN",
    description:
      "Tek yönlü SMS yerine WhatsApp + Email + SMS karmasıyla daha açılır, daha dönüşür ve iki yönlü kampanyalar."
  },
  twitter: {
    card: "summary_large_image",
    title: "Netgsm Alternatifi | PORTZEN",
    description:
      "Sadece SMS yerine çoklu kanal (WhatsApp + Email + SMS) ile iki yönlü müşteri iletişimi ve daha yüksek dönüşüm."
  },
  alternates: { canonical: "https://portzenai.com/netgsm-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Netgsm Alternatifi - PORTZEN Çok Kanallı Mesajlaşma Otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "Multi-channel Messaging Automation",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Toplu SMS yerine WhatsApp Business API, Email ve SMS'i bir arada kullanarak müşteriye doğru kanaldan ulaşan, iki yönlü ve yüksek dönüşümlü mesajlaşma otomasyon sistemi."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Netgsm'i tamamen bırakmam mı gerekiyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. SMS yine en hızlı acil bildirim kanalı. PORTZEN çoklu kanal otomasyon kurar: önce WhatsApp dener, açılmazsa email yedek, kritik durumda SMS yollar. Netgsm hesabınız SMS kanalı olarak entegre kalır, sadece daha az SMS göndereceğiniz için maliyet düşer."
      }
    },
    {
      "@type": "Question",
      name: "SMS açılma oranı %95'miş, WhatsApp gerçekten daha mı iyi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMS açılma oranı yüksek ama tıklama oranı düşüktür (~%5). WhatsApp Business mesajları %98 açılır ama daha önemlisi, müşteri direkt geri yazıp soru sorabilir, link tıklayabilir, ürün resmi görebilir. Dönüşüm 3-5 kat daha yüksek olur."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp Business API ücretsiz mi, SMS'ten ucuz mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta, WhatsApp Business API mesajlarını kategori bazlı (utility, marketing, authentication) ücretlendirir. Utility ve authentication kategorilerinde birim maliyet SMS'ten belirgin şekilde düşer, marketing kategorisinde ise dönüşüm SMS'ten çok daha yüksek olur. Fiyat brief görüşmesinde net paylaşılıyor."
      }
    },
    {
      "@type": "Question",
      name: "Email göndermek için ek hizmet mi alacağım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN paketinde email gönderim altyapısı dahil. Resend, MailerSend, Brevo veya Amazon SES üzerinden, ihtiyaca göre. KVKK uyumlu açılma takibi, soft/hard bounce yönetimi, otomatik abonelik iptali ile birlikte gelir."
      }
    },
    {
      "@type": "Question",
      name: "Mevcut müşteri listemi taşıyabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Netgsm panelindeki kişi listesini CSV olarak export edip PORTZEN'e import ediyoruz. Açık rıza durumu, son etkileşim tarihi, segment etiketleri korunur. KVKK aydınlatma akışını da paralel kuruyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Toplu WhatsApp mesajı yollamak yasal mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, resmi WhatsApp Business API üzerinden, açık rızası olan müşterilere, Meta'nın onayladığı şablonlarla gönderim tamamen yasaldır. PORTZEN tüm gönderimlerinizi Meta resmi iş ortağı altyapısı üzerinden yapar, kotanız ya da yasal sıkıntınız olmaz."
      }
    },
    {
      "@type": "Question",
      name: "Kurulum süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp Business API başvurusu Meta tarafında 7-14 gün sürer. Bu süre içinde PORTZEN tarafında email + SMS kanalları + otomasyon akışları kurulur. Toplam 14-21 gün içinde sistem canlıya geçer."
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
      name: "Netgsm Alternatifi",
      item: "https://portzenai.com/netgsm-alternatifi"
    }
  ]
};

const stats = [
  { metric: "İki yön", label: "Karşılıklı müşteri konuşması" },
  { metric: "3x", label: "Daha yüksek dönüşüm oranı" },
  { metric: "%98", label: "WhatsApp açılma oranı" },
  { metric: "3 kanal", label: "WhatsApp + Email + SMS" }
];

const painPoints = [
  {
    title: "Tek kanal yetmiyor",
    desc: "SMS açılır ama tıklanmaz. Müşteri geri yazamaz, soru soramaz, ürün resmi göremez. Dönüşüm %1-3 arası kalır."
  },
  {
    title: "Mesaj başı maliyet birikiyor",
    desc: "Tek başına SMS, yüksek gönderim hacminde birim birim toplanır. WhatsApp utility kategorisiyle aynı içerik daha düşük birim maliyetle iletilir, üstelik iki yönlü konuşma açılır."
  },
  {
    title: "Karakter limiti karmaşası",
    desc: "Tek SMS 160 karakter, Türkçe karakter girince 70'e düşer. Mesajınız 2-3 SMS'e bölünüp her biri ayrı ücretlendirilir."
  },
  {
    title: "Otomasyon yok, manuel gönderim",
    desc: "Netgsm panelinden toplu liste seçip 'Gönder' demek dışında otomasyon zayıf. Tetikleyici tabanlı (sipariş, lead, kart sepette kalma) gönderim yok."
  },
  {
    title: "Açılma + tıklama takibi sınırlı",
    desc: "SMS'te tıklama takibi için kısa link servisi gerekir, açılma takibi yok. Email + WhatsApp'ta open + click + reply detay raporu standart gelir."
  },
  {
    title: "Bir kanal kapanırsa yedek yok",
    desc: "SMS sağlayıcı operatör kararıyla mesaj engelleyebilir, kara liste sorunu yaşatabilir. Çok kanallı sistemde WhatsApp veya Email otomatik devreye girer."
  }
];

const comparisonRows = [
  { feature: "Fiyat modeli", manychat: "SMS başı sabit birim", portzen: "Kanal karması, brief bazlı" },
  { feature: "Karakter limiti", manychat: "160 / 70 (Türkçe karakter)", portzen: "WhatsApp 1.024 / Email sınırsız" },
  { feature: "İki yönlü iletişim", manychat: "Yok, sadece tek yön", portzen: "WhatsApp + Email reply otomatik" },
  { feature: "Açılma + tıklama takibi", manychat: "SMS'te sınırlı", portzen: "Tüm kanallar detay rapor" },
  { feature: "Otomasyon (tetikleyici tabanlı)", manychat: "Sadece toplu liste gönderim", portzen: "Sepet, sipariş, lead, doğum günü vs." },
  { feature: "Medya gönderimi", manychat: "Yok", portzen: "WhatsApp resim, video, PDF, katalog" },
  { feature: "Şablon onayı", manychat: "Yok, sansürsüz gönderim riskli", portzen: "Meta onaylı şablonlar otomatik" },
  { feature: "Birden çok kanal dağıtımı", manychat: "Sadece SMS", portzen: "Akıllı dağıtım (önce WhatsApp, sonra Email, sonra SMS)" },
  { feature: "KVKK + açık rıza yönetimi", manychat: "Manuel takip", portzen: "Otomatik rıza akışı + VERBİS" },
  { feature: "Logo / Mikro / CRM entegrasyon", manychat: "API var ama kurulum size kalır", portzen: "Hazır connector dahil" }
];

const solutionSteps = [
  {
    icon: Send,
    title: "Kanal seçimi",
    description: "Mevcut müşteri listeniz + kullanım amacınız üzerinden hangi kanalların ne oranda kullanılacağını planlıyoruz."
  },
  {
    icon: MessageCircle,
    title: "WhatsApp API",
    description: "Meta resmi iş ortağı altyapımız üzerinden 7-14 günde WhatsApp Business API hattınız aktif olur. Yeşil tik dahil."
  },
  {
    icon: Sparkles,
    title: "Otomasyon kuralları",
    description: "Tetikleyiciler kurulur: sipariş alındı, sepet terk edildi, lead geldi, randevu yaklaştı. Akıllı kanal dağıtımı yapılır."
  },
  {
    icon: CheckCircle2,
    title: "Test + canlı",
    description: "Küçük segment ile test gönderimi, 5 günlük gözlem, sonra tam canlıya alma. Eski Netgsm hesabınız 1 ay paralel açık kalır."
  }
];

const features = [
  { icon: Smartphone, title: "WhatsApp Business API resmi", desc: "Meta resmi iş ortağı altyapısı. Yeşil tik, sınırsız mesaj kotası, şablon onay süreci dahil." },
  { icon: Mail, title: "E-mail altyapısı (Resend, Brevo, SES)", desc: "İhtiyacınıza göre doğru email sağlayıcı. Soft/hard bounce yönetimi, açılma + tıklama raporu standart." },
  { icon: Send, title: "SMS yedek olarak (NetGSM, İletimerkezi)", desc: "Acil bildirim için SMS yine devrede. NetGSM, İletimerkezi, Verimor seçenekleri arasından seçiyoruz." },
  { icon: Boxes, title: "Akıllı kanal dağıtımı", desc: "Önce WhatsApp dener, 1 saat içinde okunmazsa email yollar, 24 saat içinde açılmazsa SMS gönderir. Optimum maliyet, maksimum dönüşüm." },
  { icon: ShieldCheck, title: "KVKK + açık rıza yönetimi", desc: "Web form, WhatsApp girişi, email signup üzerinden otomatik rıza toplama. Aydınlatma metni, geri çekme, VERBİS dahil." },
  { icon: Wallet, title: "Şeffaf kanal raporlaması", desc: "Kanal başı gönderim, açılma, tıklama ve dönüşüm tek panelde şeffaf raporlanır. Sürpriz kalem yok, e-Arşiv fatura." }
];

const faqs = [
  {
    q: "Netgsm'i tamamen bırakmam mı gerekiyor?",
    a: "Hayır. SMS yine en hızlı acil bildirim kanalı (şifre, doğrulama kodu, kritik uyarı). PORTZEN çoklu kanal mantığıyla çalışır: pazarlama mesajları WhatsApp'tan gider, bilgilendirmeler email'den, acil durumlar SMS'ten. Netgsm hesabınız SMS kanalı olarak sistemde kalır, ama göndereceğiniz toplam SMS sayısı %60-70 azalır çünkü çoğu içerik daha ucuz ve dönüşümü yüksek kanallara dağıtılır."
  },
  {
    q: "SMS açılma oranı %95'miş, WhatsApp gerçekten daha mı iyi?",
    a: "SMS açılma oranı gerçekten yüksek (~%95), ama bu sayı bağımsız metriktir. Tıklama oranı genelde %3-5, dönüşüm %1-3 arası. WhatsApp Business mesajları benzer şekilde %98 açılır ama müşteri direkt geri yazabilir, soru sorabilir, ürün resmi görebilir, link tıklayabilir, hatta cevap olarak sipariş verebilir. Sektör verilerine göre WhatsApp dönüşüm oranı SMS'ten 3-5 kat yüksek. Üstelik utility kategorisinde mesaj başı maliyet daha düşük."
  },
  {
    q: "WhatsApp Business API ücretsiz mi, SMS'ten ucuz mu?",
    a: "Ücretsiz değil ama daha verimli. Meta, WhatsApp Business API mesajlarını kategori bazlı ücretlendirir: utility (sipariş bildirimi, randevu hatırlatma), marketing (promosyon, kampanya) ve authentication (doğrulama kodu). Utility ve authentication kategorilerinde birim maliyet SMS'e kıyasla belirgin şekilde düşer; marketing kategorisinde ise dönüşüm SMS'ten çok daha yüksektir. Türkçe karakter içeren SMS'lerin iki mesaja bölünmesi maliyet farkını daha da açar. Fiyat brief görüşmesinde net paylaşılıyor."
  },
  {
    q: "Email göndermek için ek hizmet mi alacağım?",
    a: "Hayır, PORTZEN paketinde email gönderim altyapısı dahil. İhtiyacınıza göre Resend (developer dostu, modern), MailerSend (Mailchimp benzeri), Brevo (eski Sendinblue, KOBİ dostu) veya Amazon SES (yüksek hacim, ucuz) üzerinden gönderim yapılır. Hangi sağlayıcının seçileceğini aylık gönderim hacminize, açılma takibi ihtiyacınıza ve fiyat hassasiyetinize göre birlikte belirliyoruz. Soft / hard bounce yönetimi, otomatik abonelik iptali, KVKK uyumlu açılma takibi standart gelir."
  },
  {
    q: "Mevcut müşteri listemi taşıyabilir miyim?",
    a: "Evet. Netgsm panelindeki kişi listesini CSV olarak export edip PORTZEN'e import ediyoruz. Açık rıza durumu, son etkileşim tarihi, segment etiketleri, kara liste durumu korunur. Önemli not: WhatsApp Business API ile mesaj göndermek için müşterinin açık rıza vermiş olması gerekir (KVKK + Meta politikası). Eğer mevcut listenizin rıza durumu net değilse, geçiş öncesi yeni bir açık rıza akışı kuruyoruz: SMS / Email ile 'WhatsApp'tan ulaşmamızı ister misiniz?' soruyoruz, evet diyenler WhatsApp listesine geçiyor."
  },
  {
    q: "Toplu WhatsApp mesajı yollamak yasal mı?",
    a: "Evet, resmi WhatsApp Business API üzerinden, açık rızası olan müşterilere, Meta'nın onayladığı şablonlarla gönderim tamamen yasaldır. Yasal olmayan: kişisel WhatsApp hesabıyla toplu pazarlama mesajı yollamak (Meta otomatik banlar), izinsiz numaralara mesaj yollamak (KVKK ihlali), Meta onayı olmayan şablonla pazarlama mesajı yollamak. PORTZEN tüm gönderimlerinizi Meta resmi iş ortağı altyapısı üzerinden yapar, yeşil tik alır, şablonlarınızı Meta'nın onaylama sürecinden geçirir. Detaylı bilgi için WhatsApp toplu mesaj yasal rehberimize bakabilirsiniz."
  },
  {
    q: "Kurulum süresi ne kadar?",
    a: "WhatsApp Business API başvurusu Meta tarafında 7-14 gün sürer (iş hesabı doğrulama, Facebook Business Manager onayı, telefon numarası verifikasyonu). Bu süre içinde PORTZEN tarafında email altyapısı + SMS yedek kanal entegrasyonu + 5-20 otomasyon akışı kurulur. Toplam 14-21 gün içinde sistem canlıya geçer. İlk hafta küçük segmentle test gönderimi, açılma + tıklama + dönüşüm raporu, sonra tam canlıya alma. Eski Netgsm hesabınız ilk ay paralel açık kalır, sorun olursa anında geri dönebilirsiniz."
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
              <span className="text-ink">Netgsm Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-green text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Send className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Netgsm Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Netgsm Alternatifi: WhatsApp + Email + SMS Çoklu Kanal Otomasyon
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Tek başına SMS göndermek 2026'da yetersiz. Müşteri WhatsApp'ta ulaşılabilir, email'de okur, SMS'i acil için kullanır. PORTZEN üç kanalı akıllıca dağıtır, %40 daha düşük maliyetle 3 kat daha yüksek dönüşüm sağlar.
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-green text-paper"
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
              <div className="inline-block border-3 border-paper bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sadece SMS'in 6 zayıflığı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                SMS hızlıdır ama tek başına 2026'da yetersiz kalır.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5] h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-paper bg-brand-green text-paper mb-4">
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
                Toplu SMS vs PORTZEN çok kanallı otomasyon
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Sadece SMS (Netgsm vb.)</th>
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
              <strong>Kaynak.</strong> Ürün karşılaştırma PORTZEN müşteri taşıma deneyimlerinden derlenmiştir.
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
                21 günde tek kanaldan çok kanala
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
                Üç kanal, tek panel, akıllı dağıtım
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
      <section className="bg-brand-green text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek kullanım senaryoları
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Hangi kanal ne zaman doğru tercih?
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={150}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-green mb-2">Senaryo 1</div>
                <h3 className="font-display text-lg font-black mb-3">Sepette unutulan ürün</h3>
                <p className="text-sm leading-relaxed">
                  E-ticaret müşterisi sepete ürün koymuş, ödemeden çıkmış. PORTZEN 1 saat sonra WhatsApp'tan ürün resmiyle hatırlatır. 6 saat sonra email yedek. SMS gerek yok. Optimum kanal karması, düşük birim maliyet.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-green mb-2">Senaryo 2</div>
                <h3 className="font-display text-lg font-black mb-3">Randevu hatırlatma</h3>
                <p className="text-sm leading-relaxed">
                  Klinik / kuaför / hizmet sektörü için 24 saat önce WhatsApp + 2 saat önce SMS. Müşteri WhatsApp'tan onaylar veya iptal eder. No-show oranı %30 düşer.
                </p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-green mb-2">Senaryo 3</div>
                <h3 className="font-display text-lg font-black mb-3">Promosyon kampanyası</h3>
                <p className="text-sm leading-relaxed">
                  Aylık indirim kampanyası için WhatsApp marketing şablonu (resim + buton + link). Email yedek. SMS sadece WhatsApp / email olmayan segment. %3x dönüşüm.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-green mb-2">Senaryo 4</div>
                <h3 className="font-display text-lg font-black mb-3">Tahsilat hatırlatma</h3>
                <p className="text-sm leading-relaxed">
                  Vadesi geçen fatura için nazik WhatsApp + ödeme linkli email. Müşteri WhatsApp'tan direkt ödeyebilir (iyzico / Param link). Muhasebe takip işi sıfırlanır.
                </p>
              </div>
            </Reveal>
            <Reveal delay={350}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-green mb-2">Senaryo 5</div>
                <h3 className="font-display text-lg font-black mb-3">Doğrulama kodu</h3>
                <p className="text-sm leading-relaxed">
                  Login / işlem doğrulama kodu. WhatsApp authentication şablonu birim başı en düşük kanaldır. SMS yedek (kullanıcı WhatsApp'ta değilse). Hızlı + kanal karması ile optimize.
                </p>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                <div className="text-xs font-black uppercase tracking-wider text-brand-green mb-2">Senaryo 6</div>
                <h3 className="font-display text-lg font-black mb-3">Sipariş takibi</h3>
                <p className="text-sm leading-relaxed">
                  Sipariş alındı, hazırlanıyor, kargoya verildi, teslim edildi. Her aşamada WhatsApp utility. Müşteri tek bir konuşma içinde tüm bilgilendirmeyi alır.
                </p>
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
                Netgsm kullanıcılarının sorduğu sorular
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
                <h3 className="font-display text-base font-black mb-2">CRM otomasyonu da gerek mi?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Mesajlaşma ile CRM birlikte çalışırsa kazançlı. Detaylı CRM otomasyon sayfası.
                </p>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  CRM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">WhatsApp AI asistanı</h3>
                <p className="text-sm opacity-85 mb-3">
                  WhatsApp'a AI cevap veren asistan eklemek isterseniz, detaylı sayfa burada.
                </p>
                <Link href="/whatsapp-ai-asistani" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  WhatsApp AI Asistanı <ArrowUpRight className="h-3.5 w-3.5" />
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
                Tek yönlü SMS akışını çok kanallı otomasyona taşıyalım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Netgsm kullanımınızı analiz ediyoruz. Hangi mesajların hangi kanala (WhatsApp / Email / SMS) kayacağını ve iki yönlü müşteri konuşmasının nasıl kurulacağını raporluyoruz.
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
                  <span className="font-bold">İzmir - Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link href="/whatsapp-ai-asistani" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  WhatsApp AI Asistanı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  CRM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/whatsapp-toplu-mesaj-yasal-otomasyon" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: WhatsApp Yasal Rehber <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/mailchimp-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Mailchimp Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
