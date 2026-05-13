import { serviceMap } from "@/lib/content";
import { CtaBlock } from "@/components/sections/cta-block";
import { Section, SectionHeading } from "@/components/ui/section";

export function ServicePageTemplate({ slug }: { slug: string }) {
  const service = serviceMap[slug];

  if (!service) {
    return null;
  }

  return (
    <>
      <Section className="scene-dark border-b border-white/8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              {service.shortTitle}
            </span>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
              {service.heroDescription}
            </p>
          </div>

          <div className="glass-dark rounded-[2rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/52">
              Hedef kitle
            </p>
            <ul className="mt-5 space-y-3">
              {service.targetAudience.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-white/78">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="scene-dark">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-7">
            <SectionHeading
              tone="inverse"
              eyebrow="Problem"
              title="Bu hizmet neden gerekli?"
              description="Büyüme geldikçe zayıf halkalar daha görünür hale gelir. Bu alandaki en yaygın sorunlar:"
            />
            <ul className="mt-8 space-y-4">
              {service.problems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-white/50">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0066ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-7">
            <SectionHeading
              tone="inverse"
              eyebrow="Çözüm"
              title="Nasıl yaklaşıyoruz?"
              description={service.solution}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[1.5rem] border border-white/[0.06] bg-white/[0.04] p-5 text-sm text-white/70"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="scene-dark border-y border-white/8">
        <SectionHeading
          align="center"
          tone="inverse"
          eyebrow="Surec"
          title="Net, pratik ve sonuca odakli bir akis"
          description="Calisma modeli gereksiz teknik detaylarla degil; netlik, hiz ve uygulanabilirlikle ilerler."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <div key={step} className="glass-dark rounded-[1.75rem] p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/52">
                0{index + 1}
              </span>
              <p className="mt-4 text-base font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="scene-dark">
        <CtaBlock title={service.ctaTitle} description={service.ctaDescription} />
      </Section>
    </>
  );
}
