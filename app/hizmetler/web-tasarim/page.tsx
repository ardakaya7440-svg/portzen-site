import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { SERVICES, TONE_BG, TONE_TEXT } from "@/data/services";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";

const SLUG = "web-tasarim";

export default function Page() {
  const svc = SERVICES.find((s) => s.slug === SLUG);
  if (!svc) notFound();
  const Icon = svc.icon;

  return (
    <>
      {/* HERO */}
      <section className={cn("py-section", TONE_BG[svc.tone], TONE_TEXT[svc.tone])}>
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-3 py-1.5 shadow-brutal-sm mb-6">
              <Icon className="h-4 w-4" />
              <span className="text-xs font-black uppercase tracking-wider">Hizmet Kategorisi</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl">{svc.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-prose text-body opacity-90 font-medium">{svc.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* CANLI ÖRNEK — video showcase */}
      <section className="bg-paper py-section border-b-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Canlı Örnek
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yaptığımız iş nasıl görünüyor?
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Cihangir&apos;de brasserie restoran için tasarladığımız web sitesi. Online rezervasyon,
                dijital menü, Google Maps entegrasyonu, atmosfer galerisi. Aşağıda canlı ekran kaydı.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-3 border-ink bg-paper shadow-brutal-lg overflow-hidden">
              {/* Video */}
              <div className="relative border-b-3 border-ink bg-ink aspect-video">
                <video
                  src="/assets/videos/referanslar/restoran-web-ornegi.mp4"
                  poster="/assets/videos/referanslar/restoran-web-ornegi-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="h-full w-full object-cover"
                />
              </div>

              {/* İçerik + istatistik */}
              <div className="p-6 md:p-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow text-ink px-3 py-1.5 shadow-brutal-sm mb-4">
                    <Building2 className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-wider">Restoran</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-black leading-tight text-ink mb-2">
                    Cihangir Brasserie
                  </h3>
                  <p className="text-body text-ink/70 mb-5">
                    Online rezervasyon + dijital menü + atmosfer galerisi. 18 günde teslim, 3 ay
                    sonu organik trafik 16x arttı.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/web-tasarim/restoran"
                      className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-4 py-2.5 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                    >
                      Restoran Web Tasarım
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/referanslar"
                      className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-4 py-2.5 text-sm font-bold uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                    >
                      Tüm Referanslar
                    </Link>
                  </div>
                </div>

                {/* İstatistikler */}
                <div className="grid gap-3">
                  <div className="text-xs font-black uppercase tracking-wider text-ink/50 mb-1">
                    3 ayda kazanım
                  </div>
                  {[
                    { label: "Aylık Organik Trafik", before: "220", after: "3.600" },
                    { label: "Online Rezervasyon", before: "0", after: "180/ay" },
                    { label: "Hafta Sonu Doluluk", before: "%72", after: "%94" }
                  ].map((s, j) => (
                    <div
                      key={j}
                      className={cn(
                        "border-3 border-ink p-4 shadow-brutal-sm flex items-center justify-between gap-3",
                        j === 1 ? "bg-brand-green text-paper" : "bg-brand-yellow text-ink"
                      )}
                    >
                      <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                        {s.label}
                      </div>
                      <div className="flex items-center gap-2 font-display font-black leading-none">
                        <span className="text-sm opacity-60 line-through">{s.before}</span>
                        <ArrowRight className="h-4 w-4 opacity-60" />
                        <span className="text-xl md:text-2xl">{s.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BU HIZMET NE YAPIYOR */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6 grid lg:grid-cols-[280px_1fr] gap-10">
          <Reveal>
            <div className="border-3 border-ink bg-brand-yellow px-3 py-1 text-xs font-black uppercase tracking-wider inline-block shadow-brutal-sm">
              Bu hizmet ne yapar?
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-h3 font-black leading-tight text-ink">
              {svc.explainer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* OPERASYONDA NEREDE */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 grid lg:grid-cols-[280px_1fr] gap-10">
          <Reveal>
            <div className="border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider inline-block shadow-[6px_6px_0_#FFFDF5]">
              Operasyonda nerede?
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-h3 font-black leading-tight">
              {svc.operationRole}
            </p>
          </Reveal>
        </div>
      </section>

      {/* İŞ YÜKÜ AZALMA STATLARI */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                İş yükü etkisi
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">Senin için neyi değiştirir?</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {svc.workloadStats.map((stat, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={cn("border-3 border-ink p-6 shadow-brutal", TONE_BG[svc.tone], TONE_TEXT[svc.tone])}>
                  <div className="font-display text-5xl font-black leading-none mb-3">{stat.metric}</div>
                  <div className="text-sm opacity-85 font-medium">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KULLANIM ÖRNEKLERİ */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Kimler için
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">Gerçek kullanım örnekleri</h2>
            </div>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {svc.useCases.map((u, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-ink bg-paper p-4 shadow-brutal-sm flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-ink shrink-0 mt-0.5" />
                  <span className="text-body text-ink/85">{u}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ALT SERVİSLER */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Paket varyantları
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">Bu kategoride sunduklarımız</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {svc.subServices.map((sub, i) => (
              <Reveal key={sub.href} delay={i * 80}>
                <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
                  <h3 className="font-display text-2xl font-black mb-2 text-ink">{sub.title}</h3>
                  <p className="text-body text-ink/70 mb-4">{sub.description}</p>
                  <Link href="/iletisim" className="inline-flex items-center gap-1 text-sm font-bold uppercase text-ink hover:gap-2 transition-all">
                    Görüşme Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-[6px_6px_0_#FFFDF5]">
                Nasıl çalışıyoruz
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">Brief'ten teslime — 4 adım</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {svc.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="border-3 border-paper bg-ink p-5 shadow-[8px_8px_0_#FFFDF5]">
                  <div className="font-display text-4xl font-black text-brand-yellow mb-2">{p.step}</div>
                  <div className="font-bold text-base mb-1">{p.title}</div>
                  <div className="text-sm opacity-75">{p.description}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-3xl">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Sıkça sorulan
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">Cevaplar</h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={svc.faqs.map((f, i) => ({ id: `faq-${i}`, question: f.q, answer: f.a }))} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className={cn("border-3 border-ink p-8 md:p-12 shadow-brutal-lg", TONE_BG[svc.tone], TONE_TEXT[svc.tone])}>
            <h2 className="font-display text-h2 font-black leading-tight mb-3">Hangi paket size uygun?</h2>
            <p className="text-body opacity-85 mb-6 max-w-2xl">30 dakikalık ücretsiz analiz görüşmesinde sektörünüze özel öneri çıkarırız.</p>
            <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              Görüşme Al <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
