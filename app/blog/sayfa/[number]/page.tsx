import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import {
  ALL_CATEGORIES,
  CATEGORY_META,
  POSTS_PER_PAGE,
  getExtraPageNumbers,
  getPaginatedPosts
} from "@/lib/blog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { Pagination } from "@/components/blog/Pagination";

interface Props {
  params: { number: string };
}

export async function generateStaticParams() {
  return getExtraPageNumbers().map((n) => ({ number: String(n) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = parseInt(params.number, 10);
  if (isNaN(page) || page < 2) return { title: "Sayfa bulunamadı — PORTZEN Blog" };
  const { totalPages } = getPaginatedPosts(page);
  const url = `https://portzenai.com/blog/sayfa/${page}`;
  return {
    title: `PORTZEN Blog — Sayfa ${page} / ${totalPages}`,
    description: `AI, sosyal medya, otomasyon ve web yazılım rehberleri. PORTZEN Blog sayfa ${page}.`,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `PORTZEN Blog — Sayfa ${page}`,
      description: "AI, sosyal medya, otomasyon ve web yazılım rehberleri."
    },
    robots: { index: true, follow: true }
  };
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

export default function BlogPaginatedPage({ params }: Props) {
  const page = parseInt(params.number, 10);
  if (isNaN(page) || page < 2) notFound();

  const { posts, currentPage, totalPages, totalPosts } = getPaginatedPosts(page);
  if (posts.length === 0) notFound();

  return (
    <>
      {/* HERO (kompakt — sayfa 2+ için) */}
      <section className="relative overflow-hidden bg-paper pt-12 md:pt-16">
        <div className="mx-auto max-w-container px-6 pb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-3 py-1.5 shadow-brutal-sm mb-6">
              <Tag className="h-3.5 w-3.5" />
              <span className="text-xs font-black uppercase tracking-wider">
                PORTZEN Blog · Sayfa {currentPage}/{totalPages}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h2 font-black leading-[1.05] text-ink max-w-4xl">
              Tüm yazılar — sayfa {currentPage}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-body text-ink/70 max-w-prose">
              Toplam {totalPosts} rehberin {(currentPage - 1) * POSTS_PER_PAGE + 1}–
              {Math.min(currentPage * POSTS_PER_PAGE, totalPosts)} arası.
            </p>
          </Reveal>

          {/* Kategori filtre — basit chip bar */}
          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/blog"
                className="border-3 border-ink bg-paper text-ink px-3 py-1.5 text-xs font-black uppercase tracking-wider shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
              >
                Tümü
              </Link>
              {ALL_CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/kategori/${c.slug}`}
                  className={cn(
                    "border-3 border-ink px-3 py-1.5 text-xs font-black uppercase tracking-wider shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all",
                    CATEGORY_META[c.slug].bg,
                    CATEGORY_META[c.slug].text
                  )}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TÜM YAZILAR GRID */}
      <section className="bg-paper pb-section">
        <div className="mx-auto max-w-container px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 40}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={cn(
                        "border-3 border-ink px-2 py-0.5 text-xs font-black uppercase tracking-wider shadow-brutal-sm",
                        CATEGORY_META[post.category].bg,
                        CATEGORY_META[post.category].text
                      )}
                    >
                      {CATEGORY_META[post.category].label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-xl font-black leading-tight mb-2 text-ink group-hover:underline decoration-3 underline-offset-4">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink/70 mb-4 line-clamp-3">{post.description}</p>
                  <div className="flex items-center gap-3 text-xs text-ink/60 mt-auto">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {formatDate(post.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readingTime}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
        </div>
      </section>
    </>
  );
}
