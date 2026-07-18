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

export const metadata: Metadata = {
  title: "Eczane WhatsApp Stok Bildirim Sistemi 2026 | PORTZEN",
  description:
    "Eczane stok gelince müşteriye WhatsApp bildirim gönderen sistem. Yok denilen ilacı geri kazanın, sadakat oluşturun. 2026 Türkiye eczane rehberi ve kurulum kılavuzu.",
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
      "Yok denilen ilaç geldiğinde müşteriye otomatik WhatsApp mesajı. Sadık müşteri, artan ciro, azalan iş yükü."
  },
  twitter: {
    card: "summary_large_image",
    title: "Eczane WhatsApp Stok Bildirim Sistemi | 2026",
    description:
      "İlaç geldi mesajı otomatik gitsin, müşteri rakip eczaneye kaymasın. PORTZEN eczane sistemi 2 haftada kurulur."
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
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Eczaneye yok denilen ilaç stoğa girdiğinde ilgili müşteriye otomatik WhatsApp bildirim gönderen sistem. Bekleme listesi, KVKK uyumlu mesaj gönderimi, doğrudan yanıt yönetimi dahil."
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
        text: "Evet. Müşteriden istek anında bilgilendirme + açık rıza onayı alan bir akış kuruyoruz. Veriler Türkiye sunucularında saklanır, silme talebi geldiğinde tek tıkla temizlenir. KVKK açık rıza metni de dahil olarak teslim edilir."
      }
    },
    {
      "@type": "Question",
      name: "Kaç gün içinde kurulur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standart eczane için 10-14 iş günü. Depo entegrasyonu istenirse süreç 3 haftaya çıkabilir. Brief görüşmesinde net takvim veriyoruz."
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
        text: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Brief görüşmesinde net rakam paylaşıyoruz. Şube sayısı, aylık mesaj hacmi ve entegrasyon isteği toplam kapsamı belirliyor."
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
  { metric: "%78", label: "Bekleme listesindeki müşterinin geri döndüğü oran" },
  { metric: "90 sn", label: "Ortalama ilk mesaj yanıt süresi" },
  { metric: "14 gün", label: "Standart kurulum süresi" },
  { metric: "KVKK", label: "Açık rıza akışı hazır teslim" }
];

const problems = [
  "Müşteri 'ilacı yok' cevabını alıp çıkıyor, aynı ilacı 300 metre ötedeki eczanede buluyor — bir daha size uğramıyor.",
  "Kalfa defter tutmaya çalışıyor; not aynı gün kayboluyor, ertesi gün hangi müşteri neyi istemişti hatırlanmıyor.",
  "İlaç geldiğinde tek tek WhatsApp yazmak 40 dakika sürüyor, hasta müşteride dolu eczanede sıra oluşuyor.",
  "Reçeteli ilacı 2 kez soran müşteriye 'geldi' mesajı unutuluyor, müşteri hastalanmaktan bıkıp başka eczaneye kayıyor.",
  "Nöbetçi dönemi geçtiği için WhatsApp'ta biriken 60+ mesaja bakmaya vakit yok — hepsi 24 saatte soğuyor.",
  "Sadakat oluşturmak istiyorsunuz ama sistematik bir müşteri iletişim akışınız yok — hep 'komşu eczaneden farkımız' sorusu kalıyor."
];

const steps = [
  { n: "01", title: "Brief", desc: "Eczane müşteri akışını, en çok sorulan ilaçları, depo dinamiğini birlikte çıkarıyoruz. 30 dakikalık uzaktan görüşme yeterli." },
  { n: "02", title: "Kurulum", desc: "WhatsApp Business API, bekleme listesi paneli ve KVKK açık rıza akışını kuruyoruz. Personel için tek sayfa eğitim dokümanı hazırlıyoruz." },
  { n: "03", title: "Test", desc: "3 gün pilot müşteriyle canlıya benzer test. Yanıt süresi, mesaj tonu, personel ekranı hepsi burada rafine ediliyor." },
  { n: "04", title: "Yayın", desc: "Canlı kullanım başlıyor. İlk 30 gün haftalık optimizasyon; hangi mesaj tipi daha yüksek dönüş getiriyor, birlikte analiz ediyoruz." }
];

const features = [
  { icon: Pill, title: "Bekleme listesi paneli", desc: "Müşteri hangi ilacı sorduysa tek panelde. Barkod veya isimle arayabilir, aynı ilacı bekleyen tüm müşteriyi görebilirsiniz." },
  { icon: Bell, title: "Otomatik 'İlaç Geldi' mesajı", desc: "Personel tek tıkla 'Stoğa Girdi' der, sistem sıralı WhatsApp bildirim gönderir. Kimseye ikinci kez ulaşılmaz, kaçırılmaz." },
  { icon: ShoppingBag, title: "Rezervasyon ve teslim", desc: "Müşteri 'ayırabilir misin' derse otomatik rezervasyon açılır. 24 saat içinde alınmayan rezervasyon otomatik iptal edilir." },
  { icon: MessageCircle, title: "Gelen yanıt yönetimi", desc: "Müşteri 'ne zaman uğrarım', 'fiyatı ne oldu' diye sorabilir. Sistem sık soruları AI ile yanıtlar, karmaşıkta eczacıya devreder." },
  { icon: Database, title: "Müşteri sadakat kartı", desc: "Her müşterinin sorduğu ilaç geçmişi tutulur. Kronik reçetesi olan hasta bir sonraki teslim tarihinden önce nazikçe hatırlatılır." },
  { icon: ShieldCheck, title: "KVKK açık rıza akışı", desc: "İlk temasta açık rıza, silme talebinde tek tıkla veri temizleme. Türkiye sunucusu, denetime hazır log." }
];

const faqs = [
  { q: "Sistem ne için var?", a: "Eczaneye gelen 'bu ilaç yok mu?' sorusunu kayba dönüştürmemek için. Müşterinin WhatsApp numarasını KVKK uyumlu şekilde alır, ilaç stoğa girdiği an tek tıkla otomatik bildirim gönderir. Böylece müşteri rakibe kaymaz, size özel bir sadakat kanalı oluşur." },
  { q: "Personelim bu sistemi kullanabilecek mi?", a: "Panel tek sayfada tasarlanır — ilaç adı yaz, 'stoğa girdi' de, sistem gerisini halleder. 15 dakikalık ekran paylaşımı eğitimiyle kalfa da eczacı da rahatça kullanır. Yazılı tek sayfa cheat sheet de teslim ediyoruz." },
  { q: "Aynı ilacı 20 kişi bekliyorsa herkese aynı anda mı gider?", a: "Sıralı gönderim yapıyoruz. İlk bildirim en erken soran kişiye, sonrakine 5-10 dakika arayla gidiyor. Böylece '20 kişi geldi ilaç bitti' krizi yaşanmıyor. Ayırma modu açıksa müşteri onayladığında ilaç otomatik onun adına rezerv oluyor." },
  { q: "Fiyat ne kadar?", a: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Brief görüşmesinde net rakam paylaşıyoruz. Tek şube mi, birden fazla mı; aylık müşteri sayısı, entegrasyon isteği — bunlar kapsamı belirliyor." },
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
      <section className="bg-paper py-section">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-green text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Pill className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Eczane çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Eczane WhatsApp Stok Bildirim Sistemi <span className="font-serif italic font-normal">| 2026 Türkiye Rehberi</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Yok denilen ilaç stoğa girdiği an müşteriye otomatik WhatsApp bildirim gönderen, bekleme listesini panelden yöneten, KVKK uyumlu kurumsal sistem. Eczaneye gelen her "yok mu?" sorusu artık kayıp değil, geri gelen müşteri.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Görüşme Al <ArrowUpRight className="h-4 w-4" />
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
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Bir "ilaç yok" cevabı, kaybettiğiniz <span className="font-serif italic font-normal">sadık müşteridir.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-green text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Nasıl çalışır
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                4 adımda kuruluyor, 15 gün içinde canlı.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
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
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sistem kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Eczane paketinizde neler <span className="font-serif italic font-normal">yer alıyor?</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 60}>
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

      {/* CASE STUDY */}
      <section className="bg-brand-blue text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Vaka çalışması: bir Bebek eczanesi
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              İstanbul Bebek'te bir eczane, ilk ay 214 "yok denen ilaç" siparişini geri kazandı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Semt eczanesi, yoğun trafikte müşterinin sorup gittiği ilaçları elle deftere yazıyordu. Kalfa günde yaklaşık 40 not tutuyor, akşam depoya sipariş girildikten sonra ertesi gün ilaç gelince tek tek WhatsApp yazma sırası geliyordu. Ortalama 4 saatte 12 kişiye ulaşılabiliyor, kalanı unutuluyordu. Sonuç: 30 gün boyunca %78 oranında bekleme listesindeki müşteri rakip eczaneye gidiyor, bir daha uğramıyordu.
                </p>
                <p>
                  Brief görüşmesinde bekleme listesi akışını, hangi ilaçların en çok soruluyor olduğunu ve KVKK açık rıza cümlesini birlikte çıkardık. 7 günde WhatsApp Business API bağlantısını, tek sayfa personel panelini ve sıralı bildirim akışını hazırladık. 3 gün pilot müşteriyle test ettik: kalfa "stoğa girdi" butonuna bastığında sistem otomatik olarak sıralı mesajları gönderdi ve gelen "ayırabilir misin?" yanıtlarını rezervasyon olarak kaydetti.
                </p>
                <p>
                  Ay sonunda net rakamlar: 274 kişilik bekleme listesinin 214'ü eczaneye geri döndü. Ortalama yanıt süresi 4 saatten 90 saniyeye düştü. Ayrılan ilacın %92'si 24 saat içinde alındı. Reçeteli kronik hasta grubunun bir sonraki teslim tarihinden 3 gün önce nazik hatırlatma mesajı gitmeye başladı — bu tek başına aylık cironun %11'ini yeniden yakaladı.
                </p>
                <p>
                  Aylık bakımda yeni ilaç barkodları eklenir, en çok soru gelen mesaj tipleri optimize edilir, mevsimsel talebe göre şablonlar güncellenir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">4 sa</div>
                  <div className="text-sm">Ortalama bildirim süresi</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-brand-green">90 sn</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Bekleme listesi geri dönüşü</div>
                  <div className="font-display text-4xl font-black text-brand-pink">%78</div>
                  <div className="text-sm">Müşteri geri kazanım oranı</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">İlk ay</div>
                  <div className="font-display text-4xl font-black text-brand-orange">214</div>
                  <div className="text-sm">Geri kazanılan sipariş</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Karar vermeden önce <span className="font-serif italic font-normal">merak edilenler</span>
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-brand-green pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                İlgili içerik
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Konuya devam etmek isteyene
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "WhatsApp AI Asistanı", desc: "Gelen mesaja 60 sn içinde otomatik yanıt veren asistan.", href: "/whatsapp-ai-asistani" },
              { title: "Manychat Alternatifi", desc: "Türkiye eczane, klinik ve KOBİ için yerli WhatsApp otomasyonu.", href: "/manychat-alternatifi" },
              { title: "Eczane Sektörü Sayfası", desc: "Eczaneler için PORTZEN'in özel çözüm sayfası.", href: "/whatsapp-ai-asistani/eczane" }
            ].map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link
                  href={r.href}
                  className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full"
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
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Eczanenizi <span className="font-serif italic font-normal">"komşudan farkı olan"</span> hale getirelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde eczanenizin müşteri trafiğini konuşup uygun kapsamı birlikte belirliyoruz. Aynı gün dönüş garantili.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Görüşme Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
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
