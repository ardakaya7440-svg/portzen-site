import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Calendar,
  Bell,
  MessageCircle,
  ShieldCheck,
  ClipboardCheck,
  RefreshCw,
  TrendingDown
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Klinik Randevu Unutan Hasta Çözümü | SMS + WhatsApp | PORTZEN",
  description:
    "Klinik randevu unutulma oranını %70 azaltın. Otomatik SMS + WhatsApp hatırlatma, teyit, yeniden randevu akışıyla no-show düşer, klinik geliri artar. 14 günde kurulum.",
  keywords: [
    "klinik randevu unutulma çözümü",
    "hasta no-show önleme",
    "klinik hatırlatma sistemi",
    "sms whatsapp randevu",
    "muayenehane otomasyon",
    "hasta teyit sistemi"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/klinik-randevu-unutulma-cozumu",
    siteName: "PORTZEN",
    title: "Klinik Randevu Unutan Hasta Çözümü — SMS + WhatsApp Hatırlatma",
    description:
      "No-show %70 azalır: 3 aşamalı otomatik hatırlatma + teyit + yeniden randevu. Klinik ekibinin yükü de birlikte düşer."
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Randevu Unutan Hasta Çözümü — SMS + WhatsApp",
    description:
      "Randevu unutan hasta problemine sistematik çözüm: hatırlat, teyit al, yeniden randevu aç."
  },
  alternates: { canonical: "https://portzenai.com/klinik-randevu-unutulma-cozumu" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Klinik Randevu Unutulma Çözümü",
  serviceType: "Sağlık kuruluşu no-show önleme otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Klinik ve muayenehanelerde randevu unutan hasta problemini SMS + WhatsApp hatırlatma, teyit ve otomatik yeniden randevu akışıyla çözen kurumsal AI altyapılı sistem."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Randevu unutan hasta oranı ne kadar düşüyor?", acceptedAnswer: { "@type": "Answer", text: "Ortalama kliniklerde no-show oranı %25-30 seviyesinden %6-10 aralığına iniyor. Yani kliniğin dolu takvimi elinizde kalıyor, boş kalan slotlar da yeniden randevu akışıyla anında dolduruluyor." } },
    { "@type": "Question", name: "Kurulum ne kadar sürer?", acceptedAnswer: { "@type": "Answer", text: "Standart klinik için 10-14 iş günü. Randevu yazılımınıza (Google Takvim, Calendly, klinik yönetim yazılımı) entegrasyon dahil. Brief görüşmesinde net takvim veriyoruz." } },
    { "@type": "Question", name: "Hangi klinikler için uygundur?", acceptedAnswer: { "@type": "Answer", text: "Estetik klinik, diş kliniği, fizik tedavi, dermatoloji, kadın doğum, çocuk hekimi muayenehanesi, göz kliniği, psikiyatri, psikolog seansı — özetle randevu ile çalışan tüm sağlık pratikleri için uygundur." } },
    { "@type": "Question", name: "SMS ve WhatsApp fark eder mi?", acceptedAnswer: { "@type": "Answer", text: "WhatsApp kayıtlı numaralarda öncelikli, ulaşılamayan hasta için SMS otomatik devreye giriyor. Hasta hangi kanalda cevap verirse teyit sistemi devam ediyor. İki kanal birlikte kullanıldığında ulaşılabilirlik neredeyse %100." } },
    { "@type": "Question", name: "Fiyat ne kadar?", acceptedAnswer: { "@type": "Answer", text: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Brief görüşmesinde net rakam paylaşıyoruz. Hasta hacmi, entegrasyon isteği, çoklu şube kapsamı belirliyor." } },
    { "@type": "Question", name: "KVKK uyumu var mı?", acceptedAnswer: { "@type": "Answer", text: "Evet. İlk randevu alımında açık rıza cümlesi, silme talebinde tek tıkla kayıt temizleme. Tüm veri Türkiye sunucularında. Sağlık verilerinde özel nitelikli veri gereklilikleri için ek koruma uyguluyoruz." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
    { "@type": "ListItem", position: 2, name: "Klinik Randevu Unutulma Çözümü", item: "https://portzenai.com/klinik-randevu-unutulma-cozumu" }
  ]
};

const stats = [
  { metric: "%70", label: "No-show (randevu unutma) oranındaki ortalama düşüş" },
  { metric: "3 aşama", label: "Hatırlatma + teyit + yeniden randevu" },
  { metric: "14 gün", label: "Standart kurulum süresi" },
  { metric: "KVKK", label: "Özel nitelikli veri koruması hazır" }
];

const problems = [
  "Doktorun günü doluyken hastaların %25'i gelmiyor, klinik boş sloutlarla oturuyor — yönetici kayıp gelire bakıyor.",
  "Resepsiyondaki asistan günde 40 kişiyi telefonla arayıp teyit etmeye çalışıyor; çoğu açmıyor, açan hasta sırasını unutuyor.",
  "İptali son dakikada bildiren hastanın slotunu doldurmak imkansız — çünkü sıradaki hastaya haber verecek sistemi yok.",
  "Elle SMS gönderim yapan ekip vardır ama bunda ne teyit alınıyor ne de gelmeyen hastaya yeniden randevu öneriliyor.",
  "Yeni hasta kazanmak için reklam bütçesi harcanıyor, mevcut kayıp randevular yüzünden bütçe fiilen çöpe gidiyor.",
  "Klinik yönetim yazılımınız var ama içinden bir 'unut zorlayıcı' modül yok — hatırlatma manuel iş."
];

const steps = [
  { n: "01", title: "Brief", desc: "Randevu akışınızı, klinik yönetim yazılımınızı, en çok kaçırılan slot tiplerini birlikte çıkarıyoruz. 30 dakikalık görüşme." },
  { n: "02", title: "Kurulum", desc: "Randevu takviminize entegrasyon, SMS + WhatsApp gönderim altyapısı, teyit ve yeniden randevu akışı kurulur. KVKK açık rıza formu dahil." },
  { n: "03", title: "Test", desc: "3 gün pilot hastalarla canlıya benzer akış. Mesaj tonu, saatler, teyit soru dili, iptal davranışı — hepsi burada rafine edilir." },
  { n: "04", title: "Yayın", desc: "Sistem canlıya alınır. İlk 30 gün no-show oranını haftalık raporlarız; hangi zaman dilimi hangi mesaj daha iyi çalışıyor birlikte optimize ediyoruz." }
];

const features = [
  { icon: Bell, title: "3 aşamalı akıllı hatırlatma", desc: "48 saat önce nazik bilgilendirme, 24 saat önce net teyit, 3 saat önce son hatırlatma. Klinik protokolünüze göre saat ve dil özelleştirilir." },
  { icon: ClipboardCheck, title: "Teyit ve iptal alma", desc: "Hasta 'onay' dediğinde takvim otomatik güncellenir, 'iptal' dediğinde slot serbest bırakılır ve yeniden randevu akışı devreye girer." },
  { icon: RefreshCw, title: "Boş slot doldurma", desc: "İptal olan slotu, bekleme listesindeki uygun hastaya otomatik teklif eder. Klinik günü asla yarım kalmaz." },
  { icon: Calendar, title: "Takvim entegrasyonu", desc: "Google Takvim, Calendly, klinik yönetim yazılımına doğrudan bağlanır. Randevu alan an sistem başlıyor." },
  { icon: TrendingDown, title: "No-show raporu", desc: "Aylık kayıp randevu, teyit oranı, doluluk raporu paneli. Hangi hekim, hangi saat, hangi hasta segmenti — net görürsünüz." },
  { icon: ShieldCheck, title: "KVKK + sağlık verisi", desc: "Özel nitelikli sağlık verisi standartlarına uygun. Türkiye sunucusu, denetim log'u, sahibin silme talebi tek tıkla." }
];

const faqs = [
  { q: "SMS ve WhatsApp'ı aynı anda mı gönderiyor?", a: "Hayır — akıllı öncelik var. WhatsApp'ta okundu gösterirse SMS gönderilmez; okunmadıysa 15 dakika sonra SMS devreye girer. Böylece hasta iki kanal spam'ine uğramaz ama ulaşılamama riski de kalmaz." },
  { q: "Hasta 'iptal ediyorum' derse ne olur?", a: "Sistem slotu takvimde serbest bırakır, iptal sebebini sorar (opsiyonel), ve bekleme listesindeki uygun hastaya otomatik teklif mesajı gönderir. Alan hasta 'evet' derse takvim onun adına güncellenir. Kliniğin günü dolu kalır." },
  { q: "Hangi klinik türü için uygundur?", a: "Estetik, diş, dermatoloji, göz, fizik tedavi, kadın doğum, çocuk muayenehanesi, psikolog seansı ve tüm randevu ile çalışan sağlık pratikleri için uygundur. Yüksek slot fiyatı olan alanlar (estetik, diş) için ROI en hızlı görünür." },
  { q: "Fiyat ne kadar?", a: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Brief görüşmesinde net rakam paylaşıyoruz. Hasta sayısı, hekim sayısı, entegrasyon isteği ve mesaj hacmi toplam kapsamı belirliyor." },
  { q: "Mevcut klinik yazılımıma entegre olur mu?", a: "Popüler klinik yönetim yazılımlarının çoğuyla API üzerinden entegre olabiliyoruz. Uygun değilse Google Takvim / Calendly üzerinden ara katman kurup çift yönlü senkronu sağlıyoruz." },
  { q: "Personelim tarafından ekstra iş yükü doğuruyor mu?", a: "Tersine. Şu anki manuel hatırlatma/telefon açma yükü ortadan kalkar. Personel yalnızca sistem panelinden 'kaçırılan bugün kim' raporunu 3 dakikada okur. İptal edilen slot bekleme listesinden otomatik doldurulur." }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-ink/60">
              <Link href="/" className="hover:text-ink transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Klinik Randevu Unutulma Çözümü</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Klinik çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Klinik Randevu Unutan Hasta Çözümü — <span className="font-serif italic font-normal">Otomatik SMS + WhatsApp Hatırlatma</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Randevu unutan hasta sorununu üç aşamalı hatırlatma, teyit ve boş slot doldurma akışıyla çözüyoruz. No-show oranı düşer, klinik geliriniz gizlenmiş boş slotlarla erimez, personel manuel telefon açmaz.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                    Görüşme Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className={cn("border-3 border-ink p-5 shadow-brutal", i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-blue text-paper")}>
                    <div className="font-display text-4xl md:text-5xl font-black leading-none mb-2">{s.metric}</div>
                    <div className="text-xs font-medium opacity-90">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Her gelmeyen hasta, <span className="font-serif italic font-normal">reklamla kazandığınız bütçenin çöpe gitmesi.</span>
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

      <section className="bg-brand-blue text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Nasıl çalışır
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                4 adım — 2 haftada canlı.
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

      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sistem kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Klinik paketinizde neler <span className="font-serif italic font-normal">yer alıyor?</span>
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

      <section className="bg-brand-green text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Vaka çalışması: bir Ataşehir kliniği
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Ataşehir'de bir estetik-cilt kliniği, no-show oranını %28'den %7'ye indirdi.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Klinik 3 hekim, günde ortalama 90 randevu ile çalışıyordu. Meta reklamlarından gelen yüksek maliyetli hasta kanalına rağmen no-show oranı %28 seviyesindeydi — yani her 100 randevuya 28 boş slot düşüyordu. Resepsiyon ekibi günün ilk 2 saatini teyit aramalarına ayırıyor, bu bile problemi çözmüyordu.
                </p>
                <p>
                  Brief görüşmesinde randevu akışını, klinik yönetim yazılımını ve tipik hasta iletişim tonunu birlikte çıkardık. 10 günde WhatsApp Business + SMS entegrasyonunu, 3 aşamalı hatırlatma akışını ve iptal edilen slotu bekleme listesindeki hastaya otomatik teklif eden modülü kurduk. KVKK açık rıza cümlesini randevu alma anına yerleştirdik.
                </p>
                <p>
                  30 gün sonra rapor net konuştu: no-show oranı %28'den %7'ye düştü — yani günde ortalama 25 slot boş kalmıyor. Bekleme listesinden otomatik doldurulan slotların oranı %62'ye çıktı. Resepsiyon ekibi teyit aramasından çıktı, doğrudan yeni hasta karşılamaya döndü. Klinik günün ilk saatinde artık boş slot görmüyor.
                </p>
                <p>
                  Aylık bakımda mesaj tonu, saat kaydırmaları, bekleme listesi önceliklendirme algoritması sürekli optimize ediliyor. Klinik reklam bütçesi aynı ama ciro %36 arttı; bunun tamamı önceden kaybolan slotlardan geldi.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">%28</div>
                  <div className="text-sm">No-show oranı</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-brand-green">%7</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Boş slot doldurma</div>
                  <div className="font-display text-4xl font-black text-brand-pink">%62</div>
                  <div className="text-sm">İptal → yeni hasta akışı</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Ciro değişimi</div>
                  <div className="font-display text-4xl font-black text-brand-orange">+%36</div>
                  <div className="text-sm">Aynı reklam bütçesiyle</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
                <div className="border-l-3 border-brand-blue pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
              { title: "WhatsApp AI Asistanı", desc: "Klinik gelen mesajlarına 60 saniyede yanıt veren asistan.", href: "/whatsapp-ai-asistani" },
              { title: "CRM Otomasyonu", desc: "Hasta ilişkileri yönetimi ve iş akışları için özel çözüm.", href: "/crm-otomasyonu" },
              { title: "Klinik Sektörü Sayfası", desc: "Klinikler için PORTZEN'in özel çözüm sayfası.", href: "/whatsapp-ai-asistani/klinik" }
            ].map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link href={r.href} className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                  <ArrowUpRight className="h-6 w-6 text-ink mb-4" />
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{r.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{r.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Boş slotları <span className="font-serif italic font-normal">dolu takvime çevirelim.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde kliniğinizin randevu akışını konuşuyoruz, uygun kapsamı birlikte belirliyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Görüşme Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="https://wa.me/905015884853" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div><div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div><a href="tel:+905015884853" className="font-bold hover:underline">0501 588 48 53</a></div>
                <div><div className="text-xs font-bold uppercase opacity-60 mb-1">E-posta</div><a href="mailto:destek@portzenai.com" className="font-bold hover:underline break-all">destek@portzenai.com</a></div>
                <div><div className="text-xs font-bold uppercase opacity-60 mb-1">Konum</div><span className="font-bold">İzmir — Türkiye geneli uzaktan</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
