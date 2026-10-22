import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES, TONE_BG, TONE_TEXT } from "@/data/services";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";
import { SinglePriceSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";

const SLUG = "mobil-oyun";

export default function Page() {
  const svc = SERVICES.find((s) => s.slug === SLUG);
  if (!svc) notFound();
  const Icon = svc.icon;

  return (
    <>
      <section className={cn("py-section", TONE_BG[svc.tone], TONE_TEXT[svc.tone])}>
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper text-ink px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
              <Icon className="h-4 w-4" />
              <span className="text-xs font-black uppercase tracking-wider">Hizmet Kategorisi</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-tight max-w-4xl">{svc.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-prose text-body opacity-90 font-medium">{svc.tagline}</p>
          </Reveal>
        </div>
      </section>

      <ServiceAtAGlance href="/hizmetler/mobil-oyun" />

      <MoreDetails title="Ayrıntılar: Bu hizmet ne yapar?" summary="Hizmetin kapsamı ve operasyondaki yeri">
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6 grid lg:grid-cols-[280px_1fr] gap-10">
          <Reveal>
            <div className="border-3 border-ink/15 bg-slate px-3 py-1 text-xs font-black tracking-wider inline-block shadow-brutal-sm rounded-full text-white">Bu hizmet ne yapar?</div>
          </Reveal>
          <Reveal delay={100}><p className="font-display text-h3 font-black leading-tight text-ink">{svc.explainer}</p></Reveal>
        </div>
      </section>

      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 grid lg:grid-cols-[280px_1fr] gap-10">
          <Reveal>
            <div className="border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider inline-block rounded-full">Operasyonda nerede?</div>
          </Reveal>
          <Reveal delay={100}><p className="font-display text-h3 font-black leading-tight">{svc.operationRole}</p></Reveal>
        </div>
      </section>

      </MoreDetails>
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">İş yükü etkisi</div>
              <h2 className="font-display text-h2 font-black leading-tight">Senin için neyi değiştirir?</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {svc.workloadStats.map((stat, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={cn("border-3 border-ink/15 p-6 shadow-brutal rounded-2xl", TONE_BG[svc.tone], TONE_TEXT[svc.tone])}>
                  <div className="font-display text-5xl font-black leading-none mb-3">{stat.metric}</div>
                  <div className="text-sm opacity-85 font-medium">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MoreDetails title="Ayrıntılar: Kullanım örnekleri" summary="Hangi işletmeler, hangi işler için">
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">Kimler için</div>
              <h2 className="font-display text-h2 font-black leading-tight">Gerçek kullanım örnekleri</h2>
            </div>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {svc.useCases.map((u, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-ink/15 bg-paper p-4 shadow-brutal-sm flex items-start gap-3 rounded-2xl">
                  <CheckCircle2 className="h-5 w-5 text-ink shrink-0 mt-0.5" />
                  <span className="text-body text-ink/85">{u}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      </MoreDetails>
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">Hizmet kapsamı</div>
              <h2 className="font-display text-h2 font-black leading-tight">Bu kategoride sunduklarımız</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {svc.subServices.map((sub, i) => (
              <Reveal key={sub.href} delay={i * 80}>
                <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all rounded-2xl">
                  <h3 className="font-display text-2xl font-black mb-2 text-ink">{sub.title}</h3>
                  <p className="text-body text-ink/70 mb-4">{sub.description}</p>
                  <Link href="/iletisim" className="inline-flex items-center gap-1 text-sm font-bold uppercase text-ink hover:gap-2 transition-all">Projeyi Konuşalım <ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6 max-w-3xl">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">Sıkça sorulan</div>
              <h2 className="font-display text-h2 font-black leading-tight">Cevaplar</h2>
            </div>
          </Reveal>
          <Reveal delay={100}><Accordion items={svc.faqs.map((f, i) => ({ id: `faq-${i}`, question: f.q, answer: f.a }))} /></Reveal>
        </div>
      </section>

      <SinglePriceSection
        id="mobil-oyun"
        heading="Mobil oyun fiyatı"
        intro="Proje bedeli kapsama göre değiştiği için yalnızca başlangıç bedelini yazıyoruz; kesin bedel kapsam görüşmesinden sonra yazılı teklifte belirlenir. Tutarlar TL ve KDV hariçtir."
      />

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className={cn("border-3 border-ink/15 p-8 md:p-12 shadow-brutal-lg rounded-2xl", TONE_BG[svc.tone], TONE_TEXT[svc.tone])}>
            <h2 className="font-display text-h2 font-black leading-tight mb-3">Projenizi konuşalım</h2>
            <p className="text-body opacity-85 mb-6 max-w-2xl">30 dakikalık ücretsiz analiz görüşmesinde sektörünüze özel öneri çıkarırız.</p>
            <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full">Projeyi Konuşalım <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
