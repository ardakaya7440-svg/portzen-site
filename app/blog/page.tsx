import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/blog-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Section, SectionHeading } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";
import { getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = createMetadata({
  title: "Blog | AI Web Sitesi, Sosyal Medya ve Otomasyon Rehberi",
  description:
    "AI destekli büyüme, sosyal medya stratejisi, n8n otomasyon ve dijital altyapı hakkında sade ve uygulanabilir içerikler.",
  path: "/blog"
});

export const revalidate = 300;

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <Section className="scene-dark border-b border-white/8">
        <SectionHeading
          tone="inverse"
          eyebrow="Blog"
          title="AI büyüme, sosyal medya ve otomasyon rehberi"
          description="İşletmelerin web sitesi, sosyal medya ve otomasyon konularında sık yaşadığı sorunları sade bir dille ele alıyoruz. Karmaşık terimler yerine net bakış açıları ve uygulanabilir fikirler sunuyoruz."
        />
      </Section>

      <Section className="scene-dark">
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} tone="dark" />
          ))}
        </div>
      </Section>

      <Section className="scene-dark">
        <CtaBlock
          description="Okuduklarınız işletmenizde de karşılık buluyorsa mevcut yapınızı birlikte değerlendirebilir, en doğru sonraki adımı netleştirebiliriz."
          title="Benzer bir durum sizde de varsa sürecinizi birlikte değerlendirelim"
        />
      </Section>
    </>
  );
}
