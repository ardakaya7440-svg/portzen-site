import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { SERVICES, TONE_BG, TONE_TEXT } from "@/data/services";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";

const SLUG = "ai-video";
const SAMPLES = [
  { src: "/assets/videos/ai-video/sample-1.mp4" },
  { src: "/assets/videos/ai-video/sample-2.mp4" },
  { src: "/assets/videos/ai-video/sample-3.mp4" },
  { src: "/assets/videos/ai-video/sample-4.mp4" },
  { src: "/assets/videos/ai-video/sample-5.mp4" },
  { src: "/assets/videos/ai-video/sample-6.mp4" },
  { src: "/assets/videos/ai-video/sample-7.mp4" },
  { src: "/assets/videos/ai-video/sample-10.mp4" },
  { src: "/assets/videos/ai-video/sample-11.mp4" },
  { src: "/assets/videos/ai-video/sample-12.mp4" },
  { src: "/assets/videos/ai-video/sample-13.mp4" }
];

export default function Page() {
  const svc = SERVICES.find((s) => s.slug === SLUG);
  if (!svc) notFound();
  const Icon = svc.icon;

  return (
    <>
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

      {/* BU HIZMET NE YAPIYOR */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6 grid lg:grid-cols-[280px_1fr] gap-10">
          <Reveal>
            <div className="border-3 border-ink bg-brand-yellow px-3 py-1 text-xs font-black uppercase tracking-wider inline-block shadow-brutal-sm">
              Bu hizmet ne yapar?
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-h3 font-black leading-tight text-ink">{svc.explainer}</p>
          </Reveal>
        </div>
      </section>

      {/* ÖRNEKLER — gallery */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-purple px-3 py-1 text-paper text-xs font-black uppercase tracking-wider mb-3 shadow-[6px_6px_0_#FFFDF5]">
                Üretimlerimizden örnekler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Bunların hepsi yapay zeka ile üretildi.
              </h2>
              <p className="mt-3 text-body opacity-80">
                Sektör sektör — sadece brief'ten 3 günde çıkan reklam videoları.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SAMPLES.map((sample, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper shadow-[6px_6px_0_#FFFDF5] overflow-hidden aspect-[9/16] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#FFFDF5] transition-all">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={sample.src} type="video/mp4" />
                  </video>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI INFLUENCER VURGUSU */}
      <section className="bg-brand-pink text-paper py-section">
        <div className="mx-auto max-w-container px-6 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-3 py-1.5 shadow-brutal-sm mb-4">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-black uppercase tracking-wider">Yeni · AI Influencer</span>
              </div>
              <h2 className="font-display text-h2 font-black leading-tight mb-4">
                Yapay zeka influencer'ınız olsun.
              </h2>
              <p className="text-body opacity-90 mb-4">
                Markanıza özel bir avatar üretiyoruz — yüzü, sesi, kişiliği size ait. Bu avatar Instagram'da, TikTok'ta, YouTube'da haftalık içerik üretir. Hiçbir oyuncu maaşı, hiçbir çekim takvimi yok.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> Markaya özgün karakter tasarımı</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> Türkçe sesli içerik (lip-sync)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> Haftalık video paketi</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> Size özel — başka markada kullanılmaz</li>
              </ul>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Avatarımı Konuşalım <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/assets/videos/ai-video/sample-10.mp4" },
                { src: "/assets/videos/ai-video/sample-2.mp4" },
                { src: "/assets/videos/ai-video/sample-3.mp4" },
                { src: "/assets/videos/ai-video/sample-4.mp4" }
              ].map((s, i) => (
                <div key={i} className="border-3 border-ink shadow-brutal overflow-hidden aspect-[9/16]">
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src={s.src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
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
            <p className="font-display text-h3 font-black leading-tight">{svc.operationRole}</p>
          </Reveal>
        </div>
      </section>

      {/* İŞ YÜKÜ STATLARI */}
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

      {/* ALT SERVİSLER */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
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
