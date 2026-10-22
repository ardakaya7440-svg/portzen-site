import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Pill,
  Bell,
  ShoppingBag,
  ShieldCheck,
  MessageCircle,
  Database
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { familyPriceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Eczane WhatsApp Stok Bildirim Sistemi 2026 | PORTZEN",
  description:
    "Eczane stok gelince müşteriye WhatsApp bildirim gönderen sistem. Bekleme listesi panelden yönetilir, ilaç gelince müşteriye otomatik mesaj gider. 2026 Türkiye eczane rehberi ve kurulum kılavuzu.",
  keywords: [
    "eczane whatsapp stok bildirim",
    "eczane ilaç stok takip",
    "eczane müşteri bildirim sistemi",
    "eczane whatsapp otomasyon",
    "eczane sadakat sistemi",
    "eczane crm"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/eczane-whatsapp-stok-bildirim",
    siteName: "PORTZEN",
    title: "Eczane WhatsApp Stok Bildirim Sistemi | 2026 Türkiye Rehberi",
    description:
      "Yok denilen ilaç geldiğinde müşteriye otomatik WhatsApp mesajı. Bekleme listesi tek panelde, bildirim tek tıkla."
  },
  twitter: {
    card: "summary_large_image",
    title: "Eczane WhatsApp Stok Bildirim Sistemi | 2026",
    description:
      "İlaç geldi mesajı otomatik gitsin, bekleme listesi tek panelde toplansın. Kurulum süresi kapsama göre teklifte yazılı olarak belirtilir."
  },
  alternates: { canonical: "https://portzenai.com/eczane-whatsapp-stok-bildirim" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Eczane WhatsApp Stok Bildirim Sistemi",
  serviceType: "Eczane müşteri iletişim otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Eczaneye yok denilen ilaç stoğa girdiğinde ilgili müşteriye otomatik WhatsApp bildirim gönderen sistem. Bekleme listesi, KVKK gerekliliklerini dikkate alan (aydınlatma, açık rıza) mesaj gönderimi, doğrudan yanıt yönetimi dahil."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Eczane WhatsApp stok bildirim sistemi nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Müşteriden istediği ilaç için WhatsApp numarasını alan, ilaç eczaneye geldiğinde otomatik mesaj gönderen ve gelen yanıtları tek panelden yöneten kurumsal AI altyapısıdır. Eczacı elle takip listesi tutmaz, WhatsApp'tan tek tek mesaj atmaz."
      }
    },
    {
      "@type": "Question",
      name: "Bildirim gönderimi KVKK'ya uygun mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Akış KVKK gerekliliklerini dikkate alarak kurgulanır: müşteriden istek anında aydınlatma ve açık rıza onayı alınır, silme talebi panelden işlenir. Verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Açık rıza metni taslağı akışla birlikte hazırlanır."
      }
    },
    {
      "@type": "Question",
      name: "Kurulum ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir; depo veya eczane yazılımı entegrasyonu istenirse süre uzar. Brief görüşmesinde net takvim veriyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Sistemi personel nasıl kullanır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Personel sadece web panelinden ilaç geldiğinde 'Stoğa Girdi' butonuna basar. Sistem otomatik olarak bekleyen tüm müşterilere sıralı WhatsApp gönderir ve gelen yanıtları takip eder. 15 dakikalık eğitim yeterli olur."
      }
    },
    {
      "@type": "Question",
      name: "Fiyatı ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `AI müşteri asistanı paketleri (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Şube sayısı, aylık mesaj hacmi ve entegrasyon ihtiyacı hangi paketin yeteceğini belirler.`
      }
    },
    {
      "@type": "Question",
      name: "Depo veya eczane yönetim yazılımıyla entegre olur mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popüler eczane yazılımlarına (barkod ve stok modülü olanlar) API üzerinden entegre olabiliyoruz. Entegrasyon uygun değilse manuel 'Stoğa Girdi' akışı da çok verimli çalışıyor. Keşif görüşmesinde uygun modeli birlikte belirliyoruz."
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
      name: "Eczane WhatsApp Stok Bildirim Sistemi",
      item: "https://portzenai.com/eczane-whatsapp-stok-bildirim"
    }
  ]
};

const stats = [
  { metric: "Tek tık", label: "'Stoğa Girdi' ile otomatik bildirim" },
  { metric: "Sıralı", label: "Bekleyen müşterilere gönderim sırası" },
  { metric: "WhatsApp", label: "Business API üzerinden mesaj" },
  { metric: "KVKK", label: "Aydınlatma ve açık rıza akışı" }
];

const problems = [
  "Müşteri 'ilacı yok' cevabını alıp çıkıyor, aynı ilacı 300 metre ötedeki eczanede buluyor — bir daha size uğramıyor.",
  "Kalfa defter tutmaya çalışıyor; not aynı gün kayboluyor, ertesi gün hangi müşteri neyi istemişti hatırlanmıyor.",
  "İlaç geldiğinde tek tek WhatsApp yazmak 40 dakika sürüyor, hasta müşteride dolu eczanede sıra oluşuyor.",
  "Reçeteli ilacı 2 kez soran müşteriye 'geldi' mesajı unutuluyor, müşteri hastalanmaktan bıkıp başka eczaneye kayıyor.",
  "Nöbetçi dönemi geçtiği için WhatsApp'ta biriken mesajlara bakmaya vakit yok — beklerken hepsi soğuyor.",
  "Sadakat oluşturmak istiyorsunuz ama sistematik bir müşteri iletişim akışınız yok — hep 'komşu eczaneden farkımız' sorusu kalıyor."
];

const steps = [
  { n: "01", title: "Brief", desc: "Eczane müşteri akışını, en çok sorulan ilaçları, depo dinamiğini birlikte çıkarıyoruz. 30 dakikalık uzaktan görüşme yeterli." },
  { n: "02", title: "Kurulum", desc: "WhatsApp Business API, bekleme listesi paneli ve KVKK açık rıza akışını kuruyoruz. Personel için tek sayfa eğitim dokümanı hazırlıyoruz." },
  { n: "03", title: "Test", desc: "Pilot müşterilerle canlıya benzer test. Yanıt süresi, mesaj tonu, personel ekranı hepsi burada rafine ediliyor." },
  { n: "04", title: "Yayın", desc: "Canlı kullanım başlıyor. Hangi mesaj tipinin daha yüksek dönüş getirdiğini birlikte analiz ediyoruz; aylık iyileştirme saatleri Büyüme ve Kurumsal paketlerde dahildir." }
];

const features = [
  { icon: Pill, title: "Bekleme listesi paneli", desc: "Müşteri hangi ilacı sorduysa tek panelde. Barkod veya isimle arayabilir, aynı ilacı bekleyen tüm müşteriyi görebilirsiniz." },
  { icon: Bell, title: "Otomatik 'İlaç Geldi' mesajı", desc: "Personel tek tıkla 'Stoğa Girdi' der, sistem sıralı WhatsApp bildirim gönderir. Kimseye ikinci kez ulaşılmaz, kaçırılmaz." },
  { icon: ShoppingBag, title: "Rezervasyon ve teslim", desc: "Müşteri 'ayırabilir misin' derse otomatik rezervasyon açılır. 24 saat içinde alınmayan rezervasyon otomatik iptal edilir." },
  { icon: MessageCircle, title: "Gelen yanıt yönetimi", desc: "Müşteri 'ne zaman uğrarım', 'fiyatı ne oldu' diye sorabilir. Sistem sık soruları AI ile yanıtlar, karmaşıkta eczacıya devreder." },
  { icon: Database, title: "Müşteri sadakat kartı", desc: "Her müşterinin sorduğu ilaç geçmişi tutulur. Kronik reçetesi olan hasta bir sonraki teslim tarihinden önce nazikçe hatırlatılır." },
  { icon: ShieldCheck, title: "KVKK açık rıza akışı", desc: "İlk temasta aydınlatma ve açık rıza, silme talebinde panelden veri temizleme, erişim kaydı. Verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir." }
];

const faqs = [
  { q: "Sistem ne için var?", a: "Eczaneye gelen 'bu ilaç yok mu?' sorusunu kayba dönüştürmemek için. Müşterinin WhatsApp numarasını aydınlatma ve açık rıza adımıyla alır, ilaç stoğa girdiği an tek tıkla otomatik bildirim gönderir. Böylece 'yok' cevabı kayıtlı bir bekleme listesine dönüşür ve müşteriyle doğrudan bir iletişim kanalı kurulur." },
  { q: "Personelim bu sistemi kullanabilecek mi?", a: "Panel tek sayfada tasarlanır — ilaç adı yaz, 'stoğa girdi' de, sistem gerisini halleder. 15 dakikalık ekran paylaşımı eğitimiyle kalfa da eczacı da rahatça kullanır. Yazılı tek sayfa cheat sheet de teslim ediyoruz." },
  { q: "Aynı ilacı 20 kişi bekliyorsa herkese aynı anda mı gider?", a: "Sıralı gönderim yapıyoruz. İlk bildirim en erken soran kişiye, sonrakine 5-10 dakika arayla gidiyor. Böylece '20 kişi geldi ilaç bitti' krizi yaşanmıyor. Ayırma modu açıksa müşteri onayladığında ilaç otomatik onun adına rezerv oluyor." },
  { q: "Fiyat ne kadar?", a: `AI müşteri asistanı paketleri (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Şube sayısı, aylık mesaj hacmi ve entegrasyon ihtiyacı hangi paketin yeteceğini belirler.` },
  { q: "Depomla nasıl konuşuyor?", a: "İki mod var. Otomatik mod: eczane yönetim yazılımınıza API bağlantısı — barkod okuma anında bekleme listesi tetikleniyor. Manuel mod: personel butona basıyor. Küçük ve orta eczaneler için manuel mod hem ucuz hem verimli olur." },
  { q: "Yazılım hangi cihazlarda çalışıyor?", a: "Panel web tarayıcı üzerinden çalışır — masaüstü bilgisayarda, tablette ve telefonda açılır. Ayrıca WhatsApp Business API üzerinden gelen mesajlar için tek gelen kutusu görüntüsü var. Kurulum yok, tarayıcı yeterli." }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-ink/60">
              <Link href="/" className="hover:text-ink transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Eczane WhatsApp Stok Bildirim</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Pill className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Eczane çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Eczane WhatsApp Stok Bildirim Sistemi <span className="font-normal">| 2026 Türkiye Rehberi</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Yok denilen ilaç stoğa girdiği an müşteriye otomatik WhatsApp bildirim gönderen, bekleme listesini panelden yöneten, KVKK gerekliliklerini dikkate alarak kurgulanan kurumsal sistem. Eczaneye gelen her &quot;yok mu?&quot; sorusu kayıtlı bir bekleme listesine dönüşür.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
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
                    <div className="font-display text-4xl md:text-5xl font-black leading-none mb-2">{s.metric}</div>
                    <div className="text-xs font-medium opacity-90">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Bir &quot;ilaç yok&quot; cevabı, kaybettiğiniz <span className="font-normal">sadık müşteridir.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Nasıl çalışır
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                4 adımda kuruluyor.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-ink/15 bg-paper text-ink p-6 shadow-brutal h-full rounded-2xl">
                  <div className="font-display text-5xl font-black opacity-30 mb-3">{s.n}</div>
                  <h3 className="font-display text-xl font-black mb-2">{s.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sistem kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Eczane sisteminde neler <span className="font-normal">yer alabilir?</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 60}>
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

      {/* CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: semt eczanesi
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek senaryo: bir semt eczanesinde bekleme listesi nasıl otomatikleşir?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Bu örnek senaryoda semt eczanesi, yoğun trafikte müşterinin sorup gittiği ilaçları elle deftere yazıyor. Akşam depoya sipariş girildikten sonra ertesi gün ilaç gelince tek tek WhatsApp yazma sırası geliyor; yoğunlukta bazı müşterilere ulaşılamıyor ve bu müşteriler ilacı başka eczaneden alıyor.
                </p>
                <p>
                  Brief görüşmesinde bekleme listesi akışı, en çok sorulan ilaçlar ve KVKK açık rıza cümlesi birlikte çıkarılır. Ardından WhatsApp Business API bağlantısı, tek sayfa personel paneli ve sıralı bildirim akışı hazırlanır. Pilot müşterilerle test edilir: kalfa &quot;stoğa girdi&quot; butonuna bastığında sistem sıralı mesajları otomatik gönderir ve gelen &quot;ayırabilir misin?&quot; yanıtlarını rezervasyon olarak kaydeder.
                </p>
                <p>
                  Kurulumdan sonra iş akışı şöyle değişir: defter yerine bekleme listesi panelde tutulur; ilaç gelince bildirimler tek tıkla ve sırayla gider; ayrılan ilaç belirlenen sürede alınmazsa rezervasyon otomatik düşer. Reçeteli kronik hastalara bir sonraki teslim tarihinden önce nazik bir hatırlatma mesajı gönderilebilir.
                </p>
                <p>
                  Aylık bakımda yeni ilaç barkodları eklenir, en çok soru gelen mesaj tipleri optimize edilir, mevsimsel talebe göre şablonlar güncellenir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">Defter</div>
                  <div className="text-sm">Bekleme listesi elle tutuluyor</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-ink">Panel</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Bildirim</div>
                  <div className="font-display text-4xl font-black text-ink">Tek tık</div>
                  <div className="text-sm">&quot;Stoğa Girdi&quot; ile sıralı WhatsApp mesajı</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Rezervasyon</div>
                  <div className="font-display text-4xl font-black text-ink">Otomatik</div>
                  <div className="text-sm">Müşteri onayıyla ilaç ayrılır</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Karar vermeden önce <span className="font-normal">merak edilenler</span>
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
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                İlgili içerik
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Konuya devam etmek isteyene
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "WhatsApp AI Asistanı", desc: "Gelen mesaja otomatik yanıt veren asistan.", href: "/whatsapp-ai-asistani" },
              { title: "Manychat Alternatifi", desc: "Türkiye eczane, klinik ve KOBİ için yerli WhatsApp otomasyonu.", href: "/manychat-alternatifi" },
              { title: "Eczane Sektörü Sayfası", desc: "Eczaneler için PORTZEN'in özel çözüm sayfası.", href: "/whatsapp-ai-asistani/eczane" }
            ].map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link
                  href={r.href}
                  className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl"
                >
                  <ArrowUpRight className="h-6 w-6 text-ink mb-4" />
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{r.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{r.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Eczanenizi <span className="font-normal">&quot;komşudan farkı olan&quot;</span> hale getirelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde eczanenizin müşteri trafiğini konuşup uygun kapsamı birlikte belirliyoruz. En kısa sürede dönüş yapıyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905318639117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
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
