import Link from "next/link";
import { ArrowUpRight, Video, MessageSquare, Workflow, Sparkles, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

/**
 * Anasayfa — editorial brutalism (Yön A rafine).
 * Thumbnail'den ilham: iç içe sarı+paper offset kutu, büyük serif "P" mark, italic vurgu.
 *
 * Bölümler:
 * 1. Hero — serif "P" mark + iç içe çerçeve + italic vurgu
 * 2. 5 sade hizmet kart
 * 3. Vaka: Cihangir (iç içe çerçeve pattern)
 * 4. AI video örnekleri (3 kart 9:16)
 * 5. Final CTA (iç içe çerçeve pattern)
 */

const SERVICES = [
  { title: "AI Reklam Videosu", tagline: "Oyuncu ve stüdyo yok. 3 günde teslim.", href: "/yapay-zeka-video-uretimi", icon: Video, tone: "bg-brand-pink" },
  { title: "WhatsApp AI Asistanı", tagline: "60 saniyede müşteriyi karşılayan asistan.", href: "/whatsapp-ai-asistani", icon: MessageSquare, tone: "bg-brand-green" },
  { title: "Otomasyon & CRM", tagline: "Tekrarlı işleri %80 azaltan iş akışı.", href: "/crm-otomasyonu", icon: Workflow, tone: "bg-brand-blue" },
  { title: "Sosyal Medya İçerik", tagline: "Aylık video + görsel + hikaye paketi.", href: "/sosyal-medya-yonetimi", icon: Sparkles, tone: "bg-brand-yellow" },
  { title: "Web Tasarım", tagline: "Hızlı, satış odaklı, mobil uyumlu site.", href: "/web-tasarim", icon: Globe, tone: "bg-brand-orange" }
] as const;

const AI_EXAMPLES = [
  { src: "/assets/videos/ai-video/sample-1.mp4", caption: "Sinematik marka reklamı" },
  { src: "/assets/videos/ai-video/sample-2.mp4", caption: "AI karakter tanıtımı" },
  { src: "/assets/videos/ai-video/sample-3.mp4", caption: "Sektörel reklam" }
];

/**
 * İç içe offset kutu wrapper — thumbnail'in imza pattern'i.
 * Dış kutu: sarı + siyah kenarlık. İç kutu: paper + siyah kenarlık, sağa-aşağı offset.
 */
function NestedFrame({
  children,
  outerColor = "bg-brand-yellow",
  className = ""
}: {
  children: React.ReactNode;
  outerColor?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Dış çerçeve */}
      <div className={`absolute inset-0 border-3 border-ink ${outerColor} translate-x-3 translate-y-3`} aria-hidden />
      {/* İç çerçeve — içerik */}
      <div className="relative border-3 border-ink bg-paper">
        {children}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ═════════════════════════════════════════════
          1. HERO — editorial serif "P" mark + iç içe çerçeve
          ═════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Arka plan hero videosu */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          >
            <source src="/assets/hero/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-paper/70 via-paper/85 to-paper" />
        </div>

        <div className="mx-auto max-w-container px-6 pt-20 pb-28 md:pt-28 md:pb-36 relative">
          <div className="max-w-4xl">
            <Reveal>
              <div className="inline-block border-3 border-ink bg-brand-yellow px-3 py-1.5 text-xs font-black uppercase tracking-[0.15em] mb-6 shadow-brutal-sm">
                PORTZEN
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-h1 font-black leading-[0.95] text-ink">
                Beş ajans yerine <br />
                <span className="font-serif italic font-normal">tek</span>{" "}
                <span className="bg-ink text-paper px-3 -mx-1 inline-block">ekip</span>{" "}
                sistemini kursun.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-prose text-body text-ink/80">
                AI reklam videosu, WhatsApp asistanı, otomasyon, sosyal medya içerik ve web tasarım — hepsi tek ekipten. Brief bırak, sistemin çıksın.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-6 py-4 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                >
                  Projeyi Konuşalım
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          2. HİZMETLER — 5 sade kart
          ═════════════════════════════════════════════ */}
      <section id="hizmetler" className="bg-paper py-section border-t-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Ne <span className="font-serif italic font-normal">yapıyoruz</span>.
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Beş hizmet, tek ekip. İşletmenin altyapısını tek koordinasyonla kuruyoruz.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.href} delay={i * 60}>
                <Link
                  href={svc.href}
                  className={`group block border-3 border-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full ${svc.tone} text-ink`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="border-3 border-ink bg-paper text-ink p-2.5 shadow-brutal-sm">
                      <svc.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-xl font-black leading-tight mb-2">{svc.title}</h3>
                  <p className="text-sm opacity-85">{svc.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          3. VAKA — Cihangir Brasserie (iç içe çerçeve pattern)
          ═════════════════════════════════════════════ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow px-3 py-1 text-ink text-xs font-black uppercase tracking-[0.15em] mb-3 shadow-[6px_6px_0_#FFFDF5]">
                Vaka Çalışması
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Cihangir Brasserie — <span className="font-serif italic font-normal">18 günde</span> teslim.
              </h2>
              <p className="mt-3 text-body text-paper/80">
                Online rezervasyon, dijital menü, harita entegrasyonu, atmosfer galerisi. Restoran sektörüne özel altyapı.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
            {/* Video — iç içe offset paper çerçeve */}
            <Reveal>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-yellow border-3 border-paper translate-x-3 translate-y-3" aria-hidden />
                <div className="relative border-3 border-paper bg-paper aspect-video overflow-hidden">
                  <video
                    src="/assets/videos/referanslar/restoran-web-ornegi.mp4"
                    poster="/assets/videos/referanslar/restoran-web-ornegi-poster.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* 3 rakam */}
            <div className="grid gap-4">
              {[
                { before: "220", after: "3.600", label: "Aylık organik trafik" },
                { before: "%72", after: "%94", label: "Hafta sonu doluluk" },
                { before: "6.8 sn", after: "1.2 sn", label: "Site yüklenme süresi" }
              ].map((stat, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-paper bg-brand-yellow p-5 shadow-[6px_6px_0_#FFFDF5] text-ink">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-lg font-black line-through opacity-50">{stat.before}</span>
                      <ArrowUpRight className="h-5 w-5" />
                      <span className="font-display text-4xl font-black leading-none">{stat.after}</span>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-75">{stat.label}</div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={280}>
                <Link
                  href="/referanslar"
                  className="inline-flex items-center gap-2 border-3 border-paper bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-[6px_6px_0_#FFFDF5] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Diğer Referanslar
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          4. AI VİDEO ÖRNEKLERİ — 3 sade kart
          ═════════════════════════════════════════════ */}
      <section className="bg-paper py-section border-t-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                AI ile <span className="font-serif italic font-normal">ürettiğimiz</span> videolar.
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Oyuncu, stüdyo, ekipman yok. Marka mesajı ve ürün odağı var. 3 gün içinde teslim.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {AI_EXAMPLES.map((v, i) => (
              <Reveal key={v.src} delay={i * 80}>
                <div className="border-3 border-ink bg-paper shadow-brutal overflow-hidden">
                  <div className="aspect-[9/16] bg-ink">
                    <video
                      src={v.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4 border-t-3 border-ink">
                    <div className="text-sm font-bold text-ink">{v.caption}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <div className="mt-10">
              <Link
                href="/yapay-zeka-video-uretimi"
                className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
              >
                AI Video Detayları
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          5. FINAL CTA — iç içe çerçeve pattern
          ═════════════════════════════════════════════ */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <NestedFrame outerColor="bg-brand-yellow">
              <div className="p-8 md:p-16">
                <div className="max-w-2xl">
                  <h2 className="font-display text-h2 font-black leading-tight text-ink">
                    <span className="font-serif italic font-normal">Brief</span> bırak.
                  </h2>
                  <p className="mt-3 text-body text-ink/80">
                    30 dakikalık analiz görüşmesi. İşletmenize hangi hizmetin en hızlı sonuç vereceğini birlikte belirleyelim.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-6 py-4 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                    >
                      Projeyi Konuşalım
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </NestedFrame>
          </Reveal>
        </div>
      </section>
    </>
  );
}
