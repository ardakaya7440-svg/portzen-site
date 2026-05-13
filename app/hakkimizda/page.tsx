import type { Metadata } from "next";

import { CtaBlock } from "@/components/sections/cta-block";
import { Section, SectionHeading } from "@/components/ui/section";
import { aboutContent } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Hakkımızda | AI Destekli Büyüme Sistemi Ajansı",
  description:
    "Web sitesi, sosyal medya ve n8n otomasyonunu birleştirerek işletmeler için AI destekli büyüme altyapısı kuruyoruz.",
  path: "/hakkimizda"
});

export default function AboutPage() {
  return (
    <>
      <Section className="scene-dark border-b border-white/8">
        <SectionHeading
          tone="inverse"
          eyebrow="Hakkimizda"
          title={aboutContent.title}
          description={aboutContent.intro}
        />
      </Section>

      <Section className="scene-dark">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00d4ff]/60">
              Neden bu işi yapıyoruz?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              İşletmenin dijital büyüme altyapısını inşa ediyoruz
            </h2>
            <p className="mt-5 text-base leading-8 text-white/50">{aboutContent.mission}</p>
          </div>

          <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00d4ff]/60">
              Kimlerle çalışıyoruz?
            </p>
            <ul className="mt-5 space-y-4">
              {[
                "AI destekli web sitesi kurmak isteyen işletmeler",
                "Sosyal medyadan müşteri kazanmak isteyen markalar",
                "n8n ile iş akışlarını otomatize etmek isteyen ekipler",
                "Büyüme sistemini hızla devreye almak isteyen KOBİ'ler",
                "Dijital varlığını gelir motoruna çevirmek isteyen girişimler"
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0066ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="scene-dark border-y border-white/8">
        <SectionHeading
          align="center"
          tone="inverse"
          eyebrow="Calisma prensipleri"
          title="Her projede ayni omurgaya sadik kaliyoruz"
          description="Daha iyi gorunen degil, daha iyi isleyen bir sistem kurmak icin net bir yaklasimla ilerliyoruz."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {aboutContent.principles.map((principle) => (
            <article key={principle.title} className="glass-dark rounded-[2rem] p-6">
              <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/64">{principle.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="scene-dark">
        <CtaBlock
          description="Web sitesi, sosyal medya veya otomasyon — hangi sistemin size en hızlı büyümeyi getireceğini birlikte belirleyelim."
          title="İşletmeniz için doğru büyüme sistemini birlikte kuralım"
        />
      </Section>
    </>
  );
}
