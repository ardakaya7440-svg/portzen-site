import Link from "next/link";
import { pageRobots } from "@/lib/site-env";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  Gift,
  Megaphone,
  MessageCircle,
  PackageOpen,
  ShoppingCart,
  Store,
  Video
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { PricingSection } from "@/components/pricing/PricingSection";
import { DISPLAY_ORDER, TIER_NAMES, type TierId, familyAvailable, familyOffersSchema, formatTL, nonEmpty, PRICE_CONTACT_TEXT, type Prices } from "@/data/pricing";
import { getPrices } from "@/server/price-source";

const URL = "https://portzenai.com/online-is-kurma-paketi";
const TITLE = "Online İş Kurma Paketi | E-ticaret Sitesi + Sosyal Medya + Reklam — PORTZEN";
const DESCRIPTION =
  "Dropshipping'e başlayanlar ve mağazasını online'a taşımak isteyenler için tek paket: e-ticaret sitesi, sosyal medya yönetimi, reklam yönetimi ve hediye 2 AI reklam filmi. Ayrı almaya göre en az %30 daha uygun, taahhüt yok.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "online iş kurma",
    "online mağaza açmak",
    "dropshipping paketi",
    "e-ticaret sitesi ve sosyal medya",
    "mağazayı internete taşımak",
    "e-ticaret başlangıç paketi",
    "dijitale geçiş paketi",
    "e-ticaret reklam yönetimi"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: URL,
    siteName: "PORTZEN",
    title: TITLE,
    description: DESCRIPTION
  },
  alternates: { canonical: URL },
  robots: pageRobots({ index: true, follow: true })
};

/** Paketin karşılığı olan hizmetlerin ayrı ayrı fiyatı (fiyatlar tek kaynaktan, otomatik) */
function separate(id: TierId, B: Prices) {
  const { PRICING } = B;
  const ECOM = PRICING["e-ticaret"];
  const SM = PRICING["sosyal-medya"];
  const ADS = PRICING["reklam-yonetimi"];
  const FILM = PRICING["ai-reklam-filmi"];
  const setup = ECOM.tiers[id].price;
  // Sosyal medya Büyüme ve Kurumsal reklam yönetimini zaten içerir; Başlangıç'ta ayrıca eklenir
  const monthly = SM.tiers[id].price + (id === "baslangic" ? ADS.tiers.baslangic.price : 0);
  const gift = FILM.tiers[id].price * 2;
  return { setup, monthly, gift };
}

function comparison(id: TierId, B: Prices) {
  const s = separate(id, B);
  const p = B.PRICING["online-is-paketi"].tiers[id];
  const pkgSetup = p.setupFee ?? 0;
  const firstSeparate = s.setup + s.monthly + s.gift;
  const firstPkg = pkgSetup + p.price;
  const pct = (a: number, b: number) => Math.round((1 - b / a) * 100);
  return {
    ...s,
    pkgSetup,
    pkgMonthly: p.price,
    firstSeparate,
    firstPkg,
    firstSaving: firstSeparate - firstPkg,
    firstPct: pct(firstSeparate, firstPkg),
    monthlyPct: pct(s.monthly, p.price)
  };
}

const ORDER: TierId[] = [...DISPLAY_ORDER].reverse(); // Başlangıç, Büyüme, Kurumsal

const included = [
  {
    icon: ShoppingCart,
    title: "E-ticaret sitesi",
    desc: "Ürünleriniz, sepet, ödeme ve kargo bağlantısıyla satışa hazır site. Ürünlerinizi Excel dosyasından aktarıyoruz; Büyüme ve Kurumsal'da pazaryeri bağlayıcısı da var. Site ve alan adı sizin adınıza kalır."
  },
  {
    icon: Megaphone,
    title: "Sosyal medya yönetimi",
    desc: "Aylık içerik takvimi, tasarım ve kısa videolarla hesaplarınızı biz yönetiriz. Ürünleriniz düzenli olarak Instagram ve diğer kanallarda görünür."
  },
  {
    icon: PackageOpen,
    title: "Reklam yönetimi",
    desc: "Meta (Instagram ve Facebook) ve pakete göre Google reklamlarınızı kurar ve yönetiriz. Satış ölçümü için Pixel ve dönüşüm takibi kurulumu dahil."
  },
  {
    icon: Gift,
    title: "Hediye: 2 AI reklam filmi",
    desc: "Açılış kampanyanız için çekim ekibi gerektirmeyen 2 reklam filmi. Site yayına alınırken teslim edilir, ilk reklamlarınızda hemen kullanılır."
  }
];

const audiences = [
  {
    icon: PackageOpen,
    title: "Dropshipping'e başlayanlar",
    points: [
      "Stok tutmadan, tedarikçi ürünleriyle kendi markalı mağazanızı açarsınız.",
      "Ürün aktarımı, ödeme ve kargo bağlantısı kurulumda hazırlanır.",
      "İlk satışları getiren şey reklamdır: reklam yönetimi ve açılış filmleri pakette.",
      "Pazaryeri yerine kendi sitenizde satarak müşteri verisi ve marka sizde kalır."
    ]
  },
  {
    icon: Store,
    title: "Fiziksel mağazasını online'a taşıyanlar",
    points: [
      "Butik, mobilya, kozmetik, gıda ya da yerel üretici: ürünleriniz 7/24 satılır.",
      "Mağazaya gelen müşteri de sitenizden ve Instagram'dan sipariş verebilir.",
      "Yerel hedefli reklamlarla mağazanızın çevresine ve tüm Türkiye'ye ulaşırsınız.",
      "Sosyal medya ve reklamı ayrı ajanslarla değil, tek ekiple yönetirsiniz."
    ]
  }
];

const steps = [
  { title: "Görüşme ve plan", desc: "30 dakikalık ücretsiz görüşmede ürünlerinizi, hedef kitlenizi ve paket seviyesini netleştiririz." },
  { title: "Site kurulumu", desc: "Tema/arayüz, ürün aktarımı, ödeme ve kargo bağlantısı. Teslim süresi kapsama göre teklifte yazılır." },
  { title: "Açılış hazırlığı", desc: "Sosyal medya hesap düzeni, Pixel ve dönüşüm takibi, hediye 2 AI reklam filminin üretimi." },
  { title: "Yayın ve reklam", desc: "Site yayına alınır, ilk reklam kampanyaları başlar; içerik takvimi her ay düzenli ilerler." }
];

const faqs = [
  {
    q: "Online İş Kurma Paketi'ne neler dahil?",
    a: "Tek seferlik kurulumda e-ticaret sitesi (ödeme ve kargo bağlantısı, ürün aktarımı) yapılır. Aylık ücrette sosyal medya yönetimi ve reklam yönetimi vardır. Ayrıca açılış için 2 AI reklam filmi hediye edilir."
  },
  {
    q: "Ayrı ayrı almaktan ne kadar ucuz?",
    a: "Paket fiyatı, aynı hizmetleri ayrı ayrı almaya göre en az %30 daha düşüktür; 2 AI reklam filmi de üstüne hediyedir. Seviyelere göre karşılaştırma bu sayfadaki tabloda yazılıdır."
  },
  {
    q: "Taahhüt var mı?",
    a: "Hayır. Aylık hizmeti istediğiniz ayın sonunda bırakabilirsiniz. E-ticaret sitesi ve alan adı sizin adınıza kalır."
  },
  {
    q: "Dropshipping için uygun mu?",
    a: "Evet. Tedarikçinizden aldığınız ürün listesini (Excel/CSV) siteye aktarıyor, ödeme ve kargo bağlantısını kuruyoruz. Tedarikçiyle otomatik stok/XML entegrasyonu gerekiyorsa kapsamı görüşmede netleştirip teklifte yazıyoruz."
  },
  {
    q: "Reklam bütçesi pakete dahil mi?",
    a: "Hayır. Reklam harcaması Meta ve Google'a sizin ödeme yönteminizle ödenir. Paket, reklamların kurulumu ve yönetimini kapsar. Bütçe planı için reklam bütçesi rehberimize bakabilirsiniz."
  },
  {
    q: "Fiziksel mağazamın stoğu siteyle eşleşir mi?",
    a: "Kurumsal pakette 1 hazır ERP/muhasebe bağlayıcısı vardır. Başlangıç ve Büyüme'de stok, panelden veya dosyayla güncellenir. Kullandığınız POS veya stok programına göre entegrasyon ihtiyacını görüşmede değerlendiriyoruz."
  },
  {
    q: "Ne zaman satışa başlarım?",
    a: "Site yayına alındığı gün ilk reklamlar başlayabilir. Kurulum süresi ürün sayısına ve seçilen seviyeye göre değişir ve teklifte yazılı olarak belirtilir. Satış sonucu reklam bütçesi, ürün ve rekabete bağlıdır; satış garantisi verilmez."
  }
];

export default async function Page(){
  const B = await getPrices();
  const PKG = B.PRICING["online-is-paketi"];
  // Karşılaştırma yalnızca paket ve ayrı hizmet fiyatlarının TÜMÜ biliniyorsa gösterilir
  const priced = (["online-is-paketi", "e-ticaret", "sosyal-medya", "reklam-yonetimi", "ai-reklam-filmi"] as const).every((f) => familyAvailable(B.PRICING[f]));
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online İş Kurma Paketi",
    serviceType: "E-ticaret sitesi, sosyal medya yönetimi ve reklam yönetimi paketi",
    description: DESCRIPTION,
    provider: { "@id": "https://portzenai.com/#organization" },
    areaServed: { "@type": "Country", name: "Türkiye" },
    url: URL,
    offers: nonEmpty(familyOffersSchema(PKG))
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
      { "@type": "ListItem", position: 2, name: "Online İş Kurma Paketi", item: URL }
    ]
  };
  const buy = priced ? comparison("buyume", B) : null;

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
              <span className="text-ink">Online İş Kurma Paketi</span>
            </nav>
          </Reveal>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <Reveal>
                <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                  Tek paket · Taahhüt yok
                </div>
                <h1 className="font-display text-h1 font-black leading-tight text-ink">
                  Online İş Kurma Paketi
                </h1>
                <p className="mt-5 text-lg text-ink/75 leading-relaxed max-w-2xl">
                  Dropshipping&apos;e başlıyor ya da mağazanızı internete taşıyorsanız: e-ticaret siteniz, sosyal
                  medyanız ve reklamlarınız tek ekipten. Ayrı ayrı almaya göre <strong>en az %30 daha uygun</strong>,
                  üstelik açılış kampanyanız için <strong>2 AI reklam filmi hediye</strong>.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#fiyatlar"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Paketleri gör <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117?text=Merhaba%2C%20Online%20%C4%B0%C5%9F%20Kurma%20Paketi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp&apos;tan sor
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150}>
              {buy ? (
              <div className="border-3 border-ink/15 bg-light p-6 md:p-8 shadow-brutal rounded-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-ink/60">Büyüme paketiyle ilk ay</div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-ink/70">Hizmetleri ayrı ayrı alsanız</span>
                    <span className="font-bold text-ink line-through decoration-2">{formatTL(buy.firstSeparate)}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-ink/70">Online İş Kurma Paketi</span>
                    <span className="font-bold text-ink">{formatTL(buy.firstPkg)}</span>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-ink/15 pt-3">
                    <span className="font-bold text-ink">İlk ay kazancınız</span>
                    <span className="font-black text-ink">{formatTL(buy.firstSaving)}</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-ink/60">
                  Kurulum + ilk ay aylık ücreti + hediye 2 AI reklam filminin değeri. Tutarlar KDV hariç; reklam
                  harcaması hariç.
                </p>
              </div>
              ) : (
              <div className="border-3 border-ink/15 bg-light p-6 md:p-8 shadow-brutal rounded-2xl" data-fiyat-yok>
                <p className="text-base font-bold text-ink">{PRICE_CONTACT_TEXT}</p>
                <p className="mt-2 text-sm text-ink/70">Paket kapsamı aşağıda; size uygun teklifi WhatsApp veya iletişim formundan paylaşalım.</p>
              </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* NELER DAHİL */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Pakette neler var?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Satışa başlamak için gereken her şey, tek ekipten.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {included.map((x, i) => (
              <Reveal key={x.title} delay={i * 80}>
                <div className="h-full border-3 border-ink/15 bg-paper p-6 shadow-brutal-sm rounded-2xl">
                  <x.icon className="h-6 w-6 text-ink" />
                  <h3 className="mt-4 font-display text-xl font-black text-ink">{x.title}</h3>
                  <p className="mt-2 text-body text-ink/75 leading-relaxed">{x.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KİMLER İÇİN */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Kimler için?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                İşini dijitale taşımak isteyen herkes için.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="h-full border-3 border-ink/15 bg-light p-6 md:p-8 shadow-brutal rounded-2xl">
                  <a.icon className="h-7 w-7 text-ink" />
                  <h3 className="mt-4 font-display text-2xl font-black text-ink">{a.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex gap-3 text-body text-ink/80">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-ink" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AYRI AYRI vs PAKET */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Ayrı ayrı mı, paket mi?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">Paketle ne kadar kazanırsınız?</h2>
              <p className="mt-3 text-body text-ink/70">
                Karşılaştırma, aynı hizmetlerin sitedeki tekil fiyatlarından hesaplanır. Tutarlar KDV hariçtir.
              </p>
            </div>
          </Reveal>
          {priced ? (
          <Reveal delay={100}>
            <div className="overflow-x-auto border-3 border-ink/15 rounded-2xl bg-paper shadow-brutal-sm">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-light text-left">
                    <th className="p-4 font-bold text-ink"> </th>
                    {ORDER.map((id) => (
                      <th key={id} className="p-4 font-bold text-ink">{TIER_NAMES[id]}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  <tr>
                    <td className="p-4 text-ink/70">Kurulum (ayrı / paket)</td>
                    {ORDER.map((id) => {
                      const c = comparison(id, B);
                      return (
                        <td key={id} className="p-4">
                          <span className="text-ink/50 line-through">{formatTL(c.setup)}</span>{" "}
                          <span className="font-bold text-ink">{formatTL(c.pkgSetup)}</span>
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <td className="p-4 text-ink/70">Aylık (ayrı / paket)</td>
                    {ORDER.map((id) => {
                      const c = comparison(id, B);
                      return (
                        <td key={id} className="p-4">
                          <span className="text-ink/50 line-through">{formatTL(c.monthly)}</span>{" "}
                          <span className="font-bold text-ink">{formatTL(c.pkgMonthly)}</span>
                          <span className="ml-1 text-xs text-ink/60">(%{c.monthlyPct} daha az)</span>
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <td className="p-4 text-ink/70">2 AI reklam filmi</td>
                    {ORDER.map((id) => {
                      const c = comparison(id, B);
                      return (
                        <td key={id} className="p-4">
                          <span className="text-ink/50 line-through">{formatTL(c.gift)}</span>{" "}
                          <span className="font-bold text-ink">Hediye</span>
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="bg-light">
                    <td className="p-4 font-bold text-ink">İlk ay kazancınız</td>
                    {ORDER.map((id) => {
                      const c = comparison(id, B);
                      return (
                        <td key={id} className="p-4 font-black text-ink">
                          {formatTL(c.firstSaving)} <span className="text-xs font-bold text-ink/60">(%{c.firstPct})</span>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          ) : (
            <p className="text-body font-bold text-ink" data-fiyat-yok>{PRICE_CONTACT_TEXT}</p>
          )}
        </div>
      </section>

      <PricingSection
        family="online-is-paketi"
        heading="Online İş Kurma Paketi fiyatları"
        intro="Kurulum bir kez ödenir ve e-ticaret sitesini kapsar. Aylık ücret sosyal medya ve reklam yönetimini kapsar; taahhüt yoktur. Tutarlar TL ve KDV hariçtir, reklam harcaması dahil değildir."
      />

      {/* SÜREÇ */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Süreç
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">4 adımda yayındasınız.</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full border-t-3 border-ink/15 pt-5">
                  <div className="text-sm font-black text-ink/50">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-xl font-black text-ink">{s.title}</h3>
                  <p className="mt-2 text-body text-ink/70 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">Online iş kurmadan önce merak edilenler</h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div className="border-l-3 border-ink/15 pl-6">
                  <h3 className="font-display text-xl font-black mb-3 text-ink">{f.q}</h3>
                  <p className="text-body text-ink/75 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 border-3 border-ink/15 bg-paper p-6 shadow-brutal rounded-2xl">
              <h3 className="font-display text-lg font-black mb-3 text-ink">İlgili rehberler</h3>
              <ul className="space-y-2 text-sm">
                {[
                  ["/blog/instagram-reklam-nasil-verilir", "Instagram reklamı nasıl verilir?"],
                  ["/blog/reklam-butcesi-nasil-belirlenir", "Reklam bütçesi nasıl belirlenir?"],
                  ["/blog/meta-pixel-conversions-api-kurulumu", "Meta Pixel ve Conversions API kurulumu"],
                  ["/blog/wordpress-vs-shopify-eticaret", "WordPress mı, Shopify mı? E-ticaret karar rehberi"]
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                      {label} <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-white">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <Video className="h-7 w-7" />
              <h2 className="mt-4 font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                İşinizi birlikte dijitale taşıyalım.
              </h2>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                30 dakikalık ücretsiz görüşmede ürünlerinizi ve hedeflerinizi konuşalım, size uygun seviyeyi ve kurulum
                süresini yazılı olarak iletelim.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  Ücretsiz görüşme al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905318639117?text=Merhaba%2C%20Online%20%C4%B0%C5%9F%20Kurma%20Paketi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile yaz
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
