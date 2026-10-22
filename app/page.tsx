import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { PRICING, SINGLE, formatTL } from "@/data/pricing";
import { getPublicContent } from "@/server/cms";
import { BrandStrip } from "@/components/cms/BrandStrip";
import { TestimonialGrid } from "@/components/cms/Testimonials";
import { ProcessDiagram } from "@/components/visual/ProcessDiagram";

/**
 * Ana sayfa sırası: kısa giriş → marka şeridi → çalışma süreci → müşteri yorumları → SSS → iletişim.
 * Fiyatlar src/data/pricing.ts'ten, logolar/yorumlar/işler/hizmet görselleri admin panelinden (src/server/cms.ts) gelir.
 * Logo veya yayımlanmış yorum yoksa ilgili bölüm hiç çizilmez.
 */

const WHATSAPP = "https://wa.me/905318639117?text=" + encodeURIComponent("Merhaba, PORTZEN ile çalışmak istiyorum.");
const WHATSAPP_TEKLIF = "https://wa.me/905318639117?text=" + encodeURIComponent("Merhaba, PORTZEN'den teklif almak istiyorum.");

const STEPS = [
  { title: "Yazın", text: "WhatsApp'tan ya da e-postayla ne istediğinizi kısaca anlatın. Uzun brief gerekmez." },
  { title: "Görüşelim", text: "30 dakikalık ücretsiz görüşmede ihtiyacı netleştiririz. Ardından kapsam, süre ve fiyat içeren yazılı teklif göndeririz." },
  { title: "Başlayalım", text: "Teklif onaylanınca işe başlarız. Her hafta nerede olduğumuzu görürsünüz; teslimden sonra da yanınızdayız." }
];

const FAQ = [
  {
    q: "Fiyatlar ne kadar?",
    a: `Paket fiyatlarımız sitede yazılı ve KDV hariçtir. Örneğin sosyal medya yönetimi aylık ${formatTL(PRICING["sosyal-medya"].tiers.baslangic.price)} (Başlangıç), ${formatTL(PRICING["sosyal-medya"].tiers.buyume.price)} (Büyüme) ve ${formatTL(PRICING["sosyal-medya"].tiers.kurumsal.price)} (Kurumsal); kurumsal web sitesi ${formatTL(PRICING["kurumsal-web-sitesi"].tiers.baslangic.price)}'den itibaren üç paket. Özel web uygulaması ${formatTL(SINGLE["ozel-web-uygulamasi"].price)}'den, mobil uygulama ${formatTL(SINGLE["mobil-uygulama"].price)}'den başlar. Tüm paketler Fiyatlar sayfasında.`
  },
  {
    q: "Sadece sosyal medya ya da sadece yazılım alabilir miyim?",
    a: "Evet. İki hizmet birbirinden bağımsızdır. İkisini birlikte isteyen işletmelerde de tek ekip olarak çalışırız."
  },
  {
    q: "Mevcut hesaplarımı veya sistemimi devralır mısınız?",
    a: "Evet. Mevcut sosyal medya hesaplarınızı devralıp devam ederiz. Mevcut bir yazılımınız varsa önce inceler, üzerine geliştirme yapılıp yapılamayacağını söyleriz."
  },
  {
    q: "Nerede çalışıyorsunuz?",
    a: "İzmir merkezliyiz; Rusya'da Kazan IT Park'ta da ofisimiz var. Türkiye'nin her yerinden ve Rusya'dan işletmelerle uzaktan çalışıyoruz; görüşmeler online yapılır."
  },
  {
    q: "Ne kadar sürer?",
    a: "Sosyal medya yönetiminin başlangıç tarihi ve yazılım projelerinin teslim süresi kapsama göre değişir; teklifte yazılı olarak belirtilir."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://portzenai.com/#faq",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

/** Bölüm başlığı: numara + çizgi + rozet (Studiova) */
function SectionTag({ n, label, dark = false }: { n: string; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-6 py-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-slate text-sm font-semibold">
        {n}
      </span>
      <span className={`h-px w-12 ${dark ? "bg-white/20" : "bg-slate/20"}`} />
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          dark ? "bg-white text-slate" : "bg-slate text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function PillButton({
  href,
  children,
  external = false,
  tone = "lime"
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  tone?: "lime" | "outline-dark" | "outline-light";
}) {
  const cls =
    tone === "lime"
      ? "bg-lime text-slate hover:bg-lime/90"
      : tone === "outline-dark"
        ? "border border-slate/20 text-slate hover:bg-slate hover:text-white"
        : "border border-white/25 text-white hover:bg-white/10";
  const circle = tone === "outline-light" ? "bg-white text-slate" : "bg-white text-slate";
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const Comp: any = external ? "a" : Link;
  return (
    <Comp
      href={href}
      {...props}
      className={`inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-bold transition-colors ${cls}`}
    >
      {children}
      <span className={`flex h-9 w-9 items-center justify-center rounded-full ${circle}`}>
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Comp>
  );
}

export default async function HomePage() {
  const cms = await getPublicContent();
  const hasBrands = cms.brands.some((b) => b.logo);
  const hasReviews = cms.testimonials.length > 0;
  // Görünen bölümlere göre sıra numarası
  let n = 0;
  const no = () => String(++n).padStart(2, "0");
  return (
    <div className="font-sans text-slate">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ───────── HERO ───────── */}
      <section className="relative flex min-h-[calc(100svh-68px)] lg:min-h-[calc(100svh-76px)] items-end overflow-hidden bg-slate">
        <video
          src="/assets/hero/hero-studiova.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative mx-auto w-full max-w-container px-6 pb-14 lg:pb-20 pt-32">
          <Reveal>
            <div className="flex items-start gap-4 max-w-xl">
              <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-lime" aria-hidden />
              <p className="text-white/80 text-lg leading-relaxed">
                Sosyal medyanızı <span className="text-lime">yönetiriz</span>. Yazılımınızı{" "}
                <span className="text-lime">geliştiririz</span>. İzmir merkezli sosyal medya ve yazılım ajansı.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-6 flex items-end gap-4 flex-wrap">
              <h1 className="text-white font-bold leading-[0.95] tracking-tight text-[clamp(3.5rem,12vw,9.5rem)]">
                PORTZEN
              </h1>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp'tan yazın"
                className="mb-3 inline-flex items-center rounded-full bg-lime p-1 pl-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── KISA GİRİŞ ───────── */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-container px-6 grid gap-10 xl:grid-cols-[1fr_2fr]">
          <Reveal>
            <SectionTag n={no()} label="Kısa giriş" />
          </Reveal>
          <div className="flex flex-col gap-10">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
                Sosyal medya, AI asistanlar ve yazılım. Tek ekip, tek muhatap.
              </h2>
              <p className="mt-6 text-lg text-slate/70 max-w-2xl leading-relaxed">
                İçerikten reklama, WhatsApp asistanından web sitesine kadar işleri aynı ekip yürütür. Her hizmet tek başına
                alınabilir; kapsam, süre ve fiyat baştan yazılıdır.
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { big: "7 kişi", text: "İçerik, tasarım, video ve yazılım aynı ekipte" },
                { big: "30 dk", text: "Ücretsiz ilk görüşme, online" },
                { big: "Yazılı", text: "Kapsam, süre ve fiyat içeren teklif" }
              ].map((s, i) => (
                <Reveal key={s.big} delay={i * 100}>
                  <div className="border-t border-slate/15 pt-6">
                    <div className="text-4xl lg:text-5xl font-bold tracking-tight">{s.big}</div>
                    <p className="mt-3 text-slate/70">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MARKA ŞERİDİ (yalnızca logo varsa) ───────── */}
      {hasBrands && (
        <section aria-label="Markalar" className="border-t border-slate/10 bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-container px-6">
            <BrandStrip brands={cms.brands} />
          </div>
        </section>
      )}

      {/* ───────── ÇALIŞMA SÜRECİ ───────── */}
      <section id="nasil" className="bg-white py-20 lg:py-28 border-t border-slate/10">
        <div className="mx-auto max-w-container px-6 flex flex-col gap-12 lg:gap-16">
          <div className="grid gap-8 xl:grid-cols-[1fr_2fr]">
            <Reveal>
              <SectionTag n={no()} label="Süreç" />
            </Reveal>
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Nasıl çalışıyoruz</h2>
              <p className="mt-6 text-lg text-slate/70">Üç adım. Uzun brief, uzun form yok.</p>
            </Reveal>
          </div>
          <Reveal>
            <ProcessDiagram steps={STEPS} />
          </Reveal>
        </div>
      </section>

      {/* ───────── MÜŞTERİ YORUMLARI (yalnızca yayımlanmış yorum varsa) ───────── */}
      {hasReviews && (
        <section id="yorumlar" className="bg-white py-20 lg:py-28 border-t border-slate/10">
          <div className="mx-auto max-w-container px-6 flex flex-col gap-12">
            <div className="grid gap-8 xl:grid-cols-[1fr_2fr]">
              <Reveal>
                <SectionTag n={no()} label="Müşteri yorumları" />
              </Reveal>
              <Reveal>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Müşterilerimiz ne diyor</h2>
              </Reveal>
            </div>
            <TestimonialGrid items={cms.testimonials} />
          </div>
        </section>
      )}

      {/* ───────── SSS ───────── */}
      <section id="sss" className="bg-white py-20 lg:py-32 border-t border-slate/10">
        <div className="mx-auto max-w-container px-6 flex flex-col gap-12 lg:gap-20">
          <div className="grid gap-8 xl:grid-cols-[1fr_2fr]">
            <Reveal>
              <SectionTag n={no()} label="Sık sorulanlar" />
            </Reveal>
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Kısa cevaplar</h2>
              <p className="mt-6 text-lg text-slate/70">Görüşmeden önce en çok sorulanlar.</p>
            </Reveal>
          </div>
          <div className="xl:grid xl:grid-cols-[1fr_2fr]">
            <div className="hidden xl:block" />
            <Reveal>
              <div className="divide-y divide-slate/15 border-y border-slate/15">
                {FAQ.map((f) => (
                  <details key={f.q} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate/20 text-xl font-light transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="pb-6 text-slate/70 max-w-2xl leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── İLETİŞİM ───────── */}
      <section id="iletisim" className="bg-white py-20 lg:py-32 border-t border-slate/10">
        <div className="mx-auto max-w-container px-6 flex flex-col gap-12 lg:gap-16">
          <div className="grid gap-8 xl:grid-cols-[1fr_2fr]">
            <Reveal>
              <SectionTag n={no()} label="İletişim" />
            </Reveal>
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
                Ne yapmak istediğinizi yazın. En kısa sürede dönüş yapıyoruz.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-10 xl:grid-cols-[1fr_2fr]">
            <Reveal>
              <p className="text-lg text-slate/70">En hızlısı WhatsApp. Form da olur; ikisi de aynı yere düşer.</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP_TEKLIF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-[#25D366] pl-6 pr-2 py-2 text-sm font-bold text-[#0b1a10] hover:brightness-105"
                  >
                    WhatsApp&apos;tan yazın
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                  <PillButton href="/iletisim" tone="outline-dark">
                    Formu doldurun
                  </PillButton>
                </div>
                <div className="flex flex-col gap-2 text-[15px]">
                  <a href="tel:+905318639117" className="inline-flex items-center gap-3 hover:text-slate/60">
                    <Phone className="h-4 w-4" /> +90 531 863 91 17
                  </a>
                  <a href="mailto:destek@portzenai.com" className="inline-flex items-center gap-3 hover:text-slate/60">
                    <Mail className="h-4 w-4" /> destek@portzenai.com
                  </a>
                  <span className="inline-flex items-center gap-3 text-slate/70">
                    <MapPin className="h-4 w-4" /> İzmir, Türkiye
                  </span>
                  <span className="inline-flex items-center gap-3 text-slate/70">
                    <MapPin className="h-4 w-4" /> Kazan IT Park, Rusya
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
