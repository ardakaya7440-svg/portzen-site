import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/blog/article-body";
import { BlogCard } from "@/components/blog/blog-card";
import { JsonLd } from "@/components/ui/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { absoluteUrl, formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Blog yazisi bulunamadi",
      description: "Istediginiz blog yazisi bulunamadi.",
      path: `/blog/${slug}`
    });
  }

  return createMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`
  });
}

export const revalidate = 300;

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "PUBLISHED") {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.id, 3);
  const articleUrl = absoluteUrl(`/blog/${post.slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: (post.publishedAt || post.createdAt).toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      "@type": "Organization",
      name: "Otomasyon Ajansi"
    },
    publisher: {
      "@type": "Organization",
      name: "Otomasyon Ajansi"
    },
    mainEntityOfPage: articleUrl
  };

  return (
    <>
      <JsonLd data={schema} />
      <Section className="scene-dark border-b border-white/8">
        <div className="mx-auto max-w-4xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/56">
            {formatDate(post.publishedAt || post.createdAt)}
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">{post.excerpt}</p>
        </div>
      </Section>

      <Section className="scene-dark">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] min-w-0 p-6 sm:p-8">
            <ArticleBody content={post.content} />
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00d4ff]/60">
                Sonraki adım
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                Bu sorunu manuel yöntemlerle yönetmek zorunda değilsiniz
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/50">
                Yazıdaki probleme benzer bir durum sizde de varsa, ilgili hizmet sayfasından nasıl
                yaklaştığımızı inceleyebilirsiniz.
              </p>
              <div className="mt-6">
                <ButtonLink fullWidth href="/hizmetler">
                  Hizmetleri incele
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00d4ff]/60">
                Direkt görüşelim
              </p>
              <p className="mt-4 text-sm leading-7 text-white/50">
                İşletmenizde buna benzer kayıplar yaşanıyorsa sürecinizi birlikte değerlendirelim.
              </p>
              <div className="mt-5">
                <ButtonLink fullWidth href="/iletisim">
                  On gorusme talep et
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="scene-dark border-y border-white/8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/56">
              Related posts
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Okumaya devam etmek icin
            </h2>
          </div>
          <ButtonLink href="/blog" className="bg-[#0066ff] text-white hover:bg-[#0055dd]">
            Tüm yazılar
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {relatedPosts.map((related) => (
            <BlogCard key={related.id} post={related} tone="dark" />
          ))}
        </div>
      </Section>
    </>
  );
}
