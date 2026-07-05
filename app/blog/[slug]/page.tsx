import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Calendar, ChevronRight, Clock, Tag, User } from "lucide-react";
import { CATEGORY_META, getAllPostSlugs, getAllPostsMeta, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Yazı bulunamadı — PORTZEN Blog" };

  const url = `https://portzenai.com/blog/${post.slug}`;
  const og = post.ogImage ? `https://portzenai.com${post.ogImage}` : "https://portzenai.com/og-default.png";

  return {
    title: `${post.title} — PORTZEN Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: og, width: 1200, height: 630, alt: post.title }],
      siteName: "PORTZEN"
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [og]
    },
    alternates: { canonical: url }
  };
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const catMeta = CATEGORY_META[post.category];

  // Schema.org Article markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.ogImage ? `https://portzenai.com${post.ogImage}` : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://portzenai.com"
    },
    publisher: {
      "@type": "Organization",
      name: "PORTZEN",
      logo: { "@type": "ImageObject", url: "https://portzenai.com/logo.png" }
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://portzenai.com/blog/${post.slug}` },
    keywords: post.keywords.join(", "),
    articleSection: catMeta.label,
    wordCount: post.wordCount
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://portzenai.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: catMeta.label,
        item: `https://portzenai.com/blog/kategori/${post.category}`
      },
      { "@type": "ListItem", position: 4, name: post.title, item: `https://portzenai.com/blog/${post.slug}` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-paper">
        {/* HEADER */}
        <section className="border-b-3 border-ink">
          <div className="mx-auto max-w-container px-6 pt-10 pb-12 md:pt-16 md:pb-16">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink/70 flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:underline">
                Anasayfa
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href={`/blog/kategori/${post.category}`} className="hover:underline">
                {catMeta.label}
              </Link>
            </nav>

            <Reveal>
              <Link
                href={`/blog/kategori/${post.category}`}
                className={cn(
                  "inline-block border-3 border-ink px-3 py-1 text-xs font-black uppercase tracking-wider shadow-brutal-sm mb-6 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform",
                  catMeta.bg,
                  catMeta.text
                )}
              >
                {catMeta.label}
              </Link>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-h1 font-black leading-[1] text-ink max-w-4xl mb-6">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-body text-ink/80 max-w-prose mb-6">{post.description}</p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-ink/70 border-t-3 border-ink/10 pt-6">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <strong className="text-ink">{post.author}</strong>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BODY */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-prose px-6">
            <div
              className="prose-portzen"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Keywords */}
            {post.keywords.length > 0 && (
              <div className="mt-12 border-t-3 border-ink/10 pt-6">
                <div className="flex items-start gap-2 text-sm text-ink/60">
                  <Tag className="h-4 w-4 mt-0.5" />
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((k) => (
                      <span key={k} className="border border-ink/20 px-2 py-0.5 text-xs">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* BLOG'A DÖN CTA */}
        <section className="bg-paper pb-12">
          <div className="mx-auto max-w-container px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-4 py-2 text-sm font-bold uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Tüm Yazılar
            </Link>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="bg-ink text-paper py-section">
            <div className="mx-auto max-w-container px-6">
              <Reveal>
                <div className="mb-10 max-w-2xl">
                  <div className="inline-block border-3 border-paper bg-brand-yellow px-3 py-1 text-ink text-xs font-black uppercase tracking-wider mb-3 shadow-[6px_6px_0_#FFFDF5]">
                    Devamı
                  </div>
                  <h2 className="font-display text-h2 font-black leading-tight">İlgili yazılar</h2>
                </div>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-3">
                {related.map((r, i) => (
                  <Reveal key={r.slug} delay={i * 80}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group block border-3 border-paper bg-paper text-ink p-6 shadow-[8px_8px_0_#FFFDF5] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#FFFDF5] transition-all h-full"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span
                          className={cn(
                            "border-3 border-ink px-2 py-0.5 text-xs font-black uppercase tracking-wider shadow-brutal-sm",
                            CATEGORY_META[r.category].bg,
                            CATEGORY_META[r.category].text
                          )}
                        >
                          {CATEGORY_META[r.category].label}
                        </span>
                        <ArrowUpRight className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-display text-lg font-black leading-tight mb-2 group-hover:underline decoration-3 underline-offset-4">
                        {r.title}
                      </h3>
                      <p className="text-sm opacity-70 line-clamp-2 mb-4">{r.description}</p>
                      <div className="text-xs opacity-60">{r.readingTime}</div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ALT CTA — İletişim */}
        <section className="py-section">
          <div className="mx-auto max-w-container px-6">
            <Reveal>
              <div className="border-3 border-ink bg-brand-yellow p-8 md:p-16 shadow-brutal-lg">
                <div className="max-w-2xl">
                  <h2 className="font-display text-h2 font-black leading-tight text-ink">
                    Bu yazıyı sisteme dönüştürmek ister misin?
                  </h2>
                  <p className="mt-3 text-body text-ink/80">
                    PORTZEN olarak işletmeler için AI asistanları, otomasyon ve dijital büyüme sistemleri kuruyoruz. 15 dakikalık ücretsiz keşif görüşmesinde sana özel yapıyı netleştirelim.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                    >
                      Ücretsiz Görüşme Al
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/#hizmetler"
                      className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                    >
                      Hizmetleri Gör
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </article>
    </>
  );
}
