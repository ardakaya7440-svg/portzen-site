import type { Metadata } from "next";

import { CtaBlock } from "@/components/sections/cta-block";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";
import { faqItems } from "@/lib/content";

export const metadata: Metadata = createMetadata({
  title: "SSS | AI Web Sitesi, Sosyal Medya ve n8n Hakkında Merak Edilenler",
  description:
    "AI destekli web sitesi, sosyal medya büyüme sistemi ve n8n otomasyon hizmetleri hakkında sık sorulan sorular.",
  path: "/sss"
});

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <Section className="scene-dark border-b border-white/8">
        <SectionHeading
          tone="inverse"
          eyebrow="SSS"
          title="AI web sitesi, sosyal medya ve n8n hakkında sık sorulan sorular"
          description="İletişime geçmeden önce aklınızdaki temel sorulara kısa ve net cevaplar sunuyoruz."
        />
      </Section>

      <Section className="scene-dark">
        <FaqAccordion items={faqItems} />
      </Section>

      <Section className="scene-dark">
        <CtaBlock
          description="Aklınızdaki soruları gerçek süreciniz üzerinden cevaplayalım. Kapsamı, uygunluğu ve öncelikli alanları birlikte netleştirelim."
          title="Yapınız için uygun olup olmadığını birlikte görelim"
        />
      </Section>
    </>
  );
}
