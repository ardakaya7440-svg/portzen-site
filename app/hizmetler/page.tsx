import type { Metadata } from "next";

import { CtaBlock } from "@/components/sections/cta-block";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Section, SectionHeading } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";
import { serviceContents } from "@/lib/content";

export const metadata: Metadata = createMetadata({
  title: "Hizmetler | AI Web Sitesi, Sosyal Medya ve n8n Otomasyon",
  description:
    "AI destekli web sitesi, sosyal medya büyüme sistemi ve n8n otomasyon kurulumu — üç pilarda işletmenizi büyütün.",
  path: "/hizmetler"
});

export default function ServicesPage() {
  return (
    <>
      <Section className="scene-dark border-b border-white/8">
        <SectionHeading
          tone="inverse"
          eyebrow="Hizmetler"
          title="AI web sitesi, sosyal medya ve n8n otomasyon hizmetleri"
          description="Her hizmet sayfası farklı bir büyüme problemi için konumlandı. İhtiyacınız neredeyse, oradan başlıyoruz."
        />
      </Section>

      <Section className="scene-dark">
        <ServiceGrid />
      </Section>

      <Section className="scene-dark border-y border-white/8">
        <SectionHeading
          align="center"
          tone="inverse"
          eyebrow="Doğru hizmeti seçmek"
          title="Hangi ihtiyaç için hangi çözüm uygun?"
          description="Kararsız kaldığınızda bu basit ayrımla hangi sayfaya önce bakmanız gerektiğini hızla görebilirsiniz."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {serviceContents.map((service) => (
            <article key={service.slug} className="glass-dark rounded-[1.75rem] p-6">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/64">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/84">
                {service.targetAudience.slice(0, 2).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="scene-dark">
        <CtaBlock
          description="Web sitesi, sosyal medya veya n8n otomasyonu — üç pilardan hangisi size en hızlı büyümeyi getirir, birlikte belirleyelim."
          title="Size en uygun büyüme sistemini birlikte seçelim"
        />
      </Section>
    </>
  );
}
