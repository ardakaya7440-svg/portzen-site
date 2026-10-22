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
import { familyPriceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Klinik Randevu Unutan Hasta Çözümü | SMS + WhatsApp | PORTZEN",
  description:
    "Klinik randevu unutulmasına karşı otomatik SMS + WhatsApp hatırlatma, teyit ve yeniden randevu akışı. Teyit ve iptal yanıtları takvime işlenir; kurulum süresi kapsama göre teklifte yazılı olarak belirtilir.",
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
      "Randevu unutulmasına karşı 3 aşamalı otomatik hatırlatma + teyit + yeniden randevu. Teyit aramaları manuel iş olmaktan çıkar."
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
    telephone: "+905318639117",
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
    { "@type": "Question", name: "Randevu unutan hasta oranı ne kadar düşüyor?", acceptedAnswer: { "@type": "Answer", text: "Sonuç; hasta profiline, randevu tipine ve mesaj kurgusuna göre değişir, bu nedenle sabit bir oran vaat etmiyoruz. Sistem her randevu için hatırlatma ve teyit mesajı gönderir, iptal edilen slotu bekleme listesindeki uygun hastaya otomatik teklif eder; no-show ve teyit oranları panelden izlenir." } },
    { "@type": "Question", name: "Kurulum ne kadar sürer?", acceptedAnswer: { "@type": "Answer", text: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Randevu yazılımınıza (Google Takvim, Calendly, klinik yönetim yazılımı) entegrasyon Büyüme ve Kurumsal paketlerde dahildir." } },
    { "@type": "Question", name: "Hangi klinikler için uygundur?", acceptedAnswer: { "@type": "Answer", text: "Estetik klinik, diş kliniği, fizik tedavi, dermatoloji, kadın doğum, çocuk hekimi muayenehanesi, göz kliniği, psikiyatri, psikolog seansı — özetle randevu ile çalışan tüm sağlık pratikleri için uygundur." } },
    { "@type": "Question", name: "SMS ve WhatsApp fark eder mi?", acceptedAnswer: { "@type": "Answer", text: "WhatsApp kayıtlı numaralarda öncelikli, ulaşılamayan hasta için SMS otomatik devreye giriyor. Hasta hangi kanalda cevap verirse teyit sistemi devam ediyor. İki kanal birlikte kullanıldığında hastaya ulaşmak için ikinci bir yol olur." } },
    { "@type": "Question", name: "Fiyat ne kadar?", acceptedAnswer: { "@type": "Answer", text: `AI müşteri asistanı paketleri (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Hasta ve mesaj hacmi, hekim sayısı ve entegrasyon ihtiyacı hangi paketin yeteceğini belirler. Randevu alma ve takvim entegrasyonu Büyüme ve Kurumsal paketlerde yer alır; Başlangıç paketi tek kanalda (WhatsApp veya web sitesi) sık sorulan soruları yanıtlar. Meta mesaj ve SMS ücretleri hizmet bedeline dahil değildir.` } },
    { "@type": "Question", name: "KVKK açısından nasıl kurgulanıyor?", acceptedAnswer: { "@type": "Answer", text: "Kurulum KVKK gerekliliklerini dikkate alarak kurgulanır: ilk randevu alımında aydınlatma metni ve açık rıza cümlesi, silme talebinde kayıt temizleme akışı. Verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Sağlık verisi özel nitelikli kişisel veri olduğundan erişim yetkileri ve kayıt tutma buna göre planlanır." } }
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
  { metric: "2 kanal", label: "WhatsApp öncelikli, ulaşılamazsa SMS" },
  { metric: "3 aşama", label: "Hatırlatma + teyit + yeniden randevu" },
  { metric: "Teklifte", label: "Kurulum süresi kapsama göre yazılı belirtilir" },
  { metric: "KVKK", label: "Açık rıza ve aydınlatma akışı kurguda" }
];

const problems = [
  "Doktorun günü doluyken hastaların bir kısmı gelmiyor, klinik boş slotlarla oturuyor — yönetici kayıp gelire bakıyor.",
  "Resepsiyondaki asistan her gün onlarca hastayı telefonla arayıp teyit etmeye çalışıyor; çoğu açmıyor, açan hasta sırasını unutuyor.",
  "İptali son dakikada bildiren hastanın slotunu doldurmak imkansız — çünkü sıradaki hastaya haber verecek sistemi yok.",
  "Elle SMS gönderim yapan ekip vardır ama bunda ne teyit alınıyor ne de gelmeyen hastaya yeniden randevu öneriliyor.",
  "Yeni hasta kazanmak için reklam bütçesi harcanıyor, mevcut kayıp randevular yüzünden bütçe fiilen çöpe gidiyor.",
  "Klinik yönetim yazılımınız var ama içinden bir 'unut zorlayıcı' modül yok — hatırlatma manuel iş."
];

const steps = [
  { n: "01", title: "Brief", desc: "Randevu akışınızı, klinik yönetim yazılımınızı, en çok kaçırılan slot tiplerini birlikte çıkarıyoruz. 30 dakikalık görüşme." },
  { n: "02", title: "Kurulum", desc: "Randevu takviminize entegrasyon, SMS + WhatsApp gönderim altyapısı, teyit ve yeniden randevu akışı kurulur. KVKK açık rıza formu dahil." },
  { n: "03", title: "Test", desc: "Pilot hastalarla canlıya benzer test akışı. Mesaj tonu, saatler, teyit soru dili, iptal davranışı — hepsi burada rafine edilir." },
  { n: "04", title: "Yayın", desc: "Sistem canlıya alınır. No-show ve teyit oranları panelden izlenir; hangi zaman diliminde hangi mesajın daha iyi çalıştığı birlikte değerlendirilir (aylık iyileştirme saatleri Büyüme ve Kurumsal paketlerde yer alır)." }
];

const features = [
  { icon: Bell, title: "3 aşamalı akıllı hatırlatma", desc: "48 saat önce nazik bilgilendirme, 24 saat önce net teyit, 3 saat önce son hatırlatma. Klinik protokolünüze göre saat ve dil özelleştirilir." },
  { icon: ClipboardCheck, title: "Teyit ve iptal alma", desc: "Hasta 'onay' dediğinde takvim otomatik güncellenir, 'iptal' dediğinde slot serbest bırakılır ve yeniden randevu akışı devreye girer." },
  { icon: RefreshCw, title: "Boş slot doldurma", desc: "İptal olan slotu, bekleme listesindeki uygun hastaya otomatik teklif eder; hasta kabul ederse takvim güncellenir." },
  { icon: Calendar, title: "Takvim entegrasyonu", desc: "Google Takvim, Calendly, klinik yönetim yazılımına doğrudan bağlanır. Randevu alan an sistem başlıyor." },
  { icon: TrendingDown, title: "No-show raporu", desc: "Aylık kayıp randevu, teyit oranı, doluluk raporu paneli. Hangi hekim, hangi saat, hangi hasta segmenti — net görürsünüz." },
  { icon: ShieldCheck, title: "KVKK + sağlık verisi", desc: "Özel nitelikli sağlık verisi için KVKK gerekliliklerini dikkate alarak kurgulanır: açık rıza, aydınlatma akışı, denetim log'u, silme talebi akışı. Verinin hangi sağlayıcıda ve bölgede tutulacağı teklifte yazılı olarak belirtilir." }
];

const faqs = [
  { q: "SMS ve WhatsApp'ı aynı anda mı gönderiyor?", a: "Hayır — akıllı öncelik var. WhatsApp'ta okundu gösterirse SMS gönderilmez; okunmadıysa 15 dakika sonra SMS devreye girer. Böylece hasta iki kanal spam'ine uğramaz, ulaşılamama riski de azalır." },
  { q: "Hasta 'iptal ediyorum' derse ne olur?", a: "Sistem slotu takvimde serbest bırakır, iptal sebebini sorar (opsiyonel), ve bekleme listesindeki uygun hastaya otomatik teklif mesajı gönderir. Alan hasta 'evet' derse takvim onun adına güncellenir ve slot yeniden dolar." },
  { q: "Hangi klinik türü için uygundur?", a: "Estetik, diş, dermatoloji, göz, fizik tedavi, kadın doğum, çocuk muayenehanesi, psikolog seansı ve tüm randevu ile çalışan sağlık pratikleri için uygundur. Slot değeri yüksek alanlarda (estetik, diş) boş kalan her randevunun maliyeti daha belirgindir." },
  { q: "Fiyat ne kadar?", a: `AI müşteri asistanı paketleri (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Hasta ve mesaj hacmi, hekim sayısı ve entegrasyon ihtiyacı hangi paketin yeteceğini belirler. Randevu alma ve takvim entegrasyonu Büyüme ve Kurumsal paketlerde yer alır; Başlangıç paketi tek kanalda (WhatsApp veya web sitesi) sık sorulan soruları yanıtlar. Meta mesaj ve SMS ücretleri hizmet bedeline dahil değildir.` },
  { q: "Mevcut klinik yazılımıma entegre olur mu?", a: "Popüler klinik yönetim yazılımlarının çoğuyla API üzerinden entegre olabiliyoruz. Uygun değilse Google Takvim / Calendly üzerinden ara katman kurup çift yönlü senkronu sağlıyoruz." },
  { q: "Personelim tarafından ekstra iş yükü doğuruyor mu?", a: "Tersine. Şu anki manuel hatırlatma/telefon açma yükü ortadan kalkar. Personel yalnızca sistem panelinden 'kaçırılan bugün kim' raporuna bakar. İptal edilen slot bekleme listesinden otomatik doldurulur." }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-section">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Klinik çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Klinik Randevu Unutan Hasta Çözümü — <span className="font-normal">Otomatik SMS + WhatsApp Hatırlatma</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Randevu unutan hasta sorununa üç aşamalı hatırlatma, teyit ve boş slot doldurma akışı kuruyoruz. Hatırlatma ve teyit mesajları otomatik gider, iptal edilen slot bekleme listesine teklif edilir, personel teyit için tek tek telefon açmak zorunda kalmaz.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full">
                    Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className={cn("border-3 border-ink/15 p-5 shadow-brutal rounded-2xl", i % 2 === 0 ? "bg-light" : "bg-light text-ink")}>
                    <div className="font-display text-4xl md:text-5xl font-black leading-none mb-2">{s.metric}</div>
                    <div className="text-xs font-medium opacity-90">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Her gelmeyen hasta, <span className="font-normal">reklamla kazandığınız bütçenin çöpe gitmesi.</span>
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

      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Nasıl çalışır
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                4 adımda canlıya geçiş.
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

      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sistem kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Klinik paketinizde neler <span className="font-normal">yer alıyor?</span>
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

      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: estetik-cilt kliniği
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek bir kurulum: estetik-cilt kliniğinde hatırlatma, teyit ve boş slot akışı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda birden fazla hekimle çalışan ve hastalarının bir kısmı Meta reklamlarından gelen bir estetik-cilt kliniği düşünelim. Randevuya gelmeyen hastalar takvimde boş slot bırakıyor; resepsiyon ekibi günün başında teyit aramalarına zaman ayırıyor ama birçok hastaya ulaşamıyor.
                </p>
                <p>
                  Brief görüşmesinde randevu akışı, klinik yönetim yazılımı ve hasta iletişim tonu birlikte çıkarılır. WhatsApp Business + SMS entegrasyonu, 3 aşamalı hatırlatma akışı ve iptal edilen slotu bekleme listesindeki hastaya otomatik teklif eden modül kurulur. KVKK açık rıza cümlesi randevu alma anına yerleştirilir.
                </p>
                <p>
                  Canlıya geçtikten sonra iş akışı değişir: hatırlatma ve teyit mesajları otomatik gider, hastanın onay ya da iptal yanıtı takvime işlenir, boşalan slot bekleme listesindeki hastaya teklif edilir. Resepsiyon ekibi teyit aramalarından çıkar; panelden teyit vermeyen hastaları görüp yalnızca onlarla ilgilenir.
                </p>
                <p>
                  Aylık iyileştirmede mesaj tonu, gönderim saatleri ve bekleme listesi önceliklendirmesi panel verilerine göre gözden geçirilir (iyileştirme saatleri Büyüme ve Kurumsal paketlerde yer alır).
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-lg font-black mb-1">Hastalar teyit için tek tek telefonla aranıyor</div>
                  <div className="text-sm">Teyit süreci</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-lg font-black text-ink">Hatırlatma ve teyit WhatsApp + SMS ile otomatik gidiyor</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Boş slot doldurma</div>
                  <div className="font-display text-4xl font-black text-ink">Otomatik</div>
                  <div className="text-sm">İptal edilen slot bekleme listesine teklif edilir</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Raporlama</div>
                  <div className="font-display text-4xl font-black text-ink">Panel</div>
                  <div className="text-sm">No-show, teyit ve doluluk tek ekranda</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
              { title: "WhatsApp AI Asistanı", desc: "Klinik gelen mesajlarına otomatik yanıt veren asistan.", href: "/whatsapp-ai-asistani" },
              { title: "CRM Otomasyonu", desc: "Hasta ilişkileri yönetimi ve iş akışları için özel çözüm.", href: "/crm-otomasyonu" },
              { title: "Klinik Sektörü Sayfası", desc: "Klinikler için PORTZEN'in özel çözüm sayfası.", href: "/whatsapp-ai-asistani/klinik" }
            ].map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link href={r.href} className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
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
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Randevu hatırlatmayı <span className="font-normal">otomatiğe alalım.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde kliniğinizin randevu akışını konuşuyoruz, uygun kapsamı birlikte belirliyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full">
                  Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="https://wa.me/905318639117" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div><div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div><a href="tel:+905318639117" className="font-bold hover:underline">0531 863 91 17</a></div>
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
