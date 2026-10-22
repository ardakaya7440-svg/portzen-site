import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { ALL_CATEGORIES, CATEGORY_META, POSTS_PER_PAGE, getPaginatedPosts } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { Pagination } from "@/components/blog/Pagination";

export const metadata: Metadata = {
  title: "PORTZEN Blog — AI, Sosyal Medya, Otomasyon ve Web Yazılım Rehberi",
  description:
    "Yapay zeka, WhatsApp asistanları, sosyal medya yönetimi, otomasyon sistemleri ve web tasarımı üzerine KOBİ'ler için pratik rehberler. PORTZEN'in editör seçkisi.",
  openGraph: {
    title: "PORTZEN Blog — KOBİ'ler İçin AI & Dijital Büyüme Rehberleri",
    description:
      "Yapay zeka, sosyal medya, otomasyon ve web yazılım konularında düzenli güncellenen pratik rehberler.",
    type: "website",
    url: "https://portzenai.com/blog"
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTZEN Blog",
    description: "AI, sosyal medya, otomasyon ve web yazılım rehberleri."
  },
  alternates: { canonical: "https://portzenai.com/blog" }
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

export default function BlogIndexPage() {
  // İlk sayfa: featured (1) + grid (11) = 12 toplam
  const { posts, currentPage, totalPages, totalPosts } = getPaginatedPosts(1);
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-12 md:pt-20">
        <div className="mx-auto max-w-container px-6 pb-16 md:pb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-lime px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
              <Tag className="h-3.5 w-3.5" />
              <span className="text-xs font-black uppercase tracking-wider">PORTZEN Blog</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-tight text-ink max-w-4xl">
              AI, sosyal medya ve <span className="underline decoration-lime decoration-[6px] underline-offset-[6px]">otomasyon</span> rehberleri.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-prose text-body text-ink/80">
              KOBİ sahipleri ve dijital büyüme arayan markalar için. Düzenli olarak güncellenen pratik içerikler — teori değil, sahada işe yarayan rehberler.
            </p>
          </Reveal>

          {/* Kategori filtre */}
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-2">
              <Link
                href="/blog"
                className="border-3 border-ink/15 bg-slate text-white px-3 py-1.5 text-xs font-black tracking-wider shadow-brutal-sm rounded-full"
              >
                Tümü
              </Link>
              {ALL_CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/kategori/${c.slug}`}
                  className={cn(
                    "border-3 border-ink/15 px-3 py-1.5 text-xs font-black tracking-wider shadow-brutal-sm hover:shadow-brutal transition-all rounded-full",
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

      {/* FEATURED POST */}
      {featured && (
        <section className="bg-white pb-section">
          <div className="mx-auto max-w-container px-6">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className={cn(
                  "group block border-3 border-ink/15 p-8 md:p-12 shadow-brutal-lg transition-all rounded-2xl",
                  CATEGORY_META[featured.category].bg,
                  CATEGORY_META[featured.category].text
                )}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black shadow-brutal-sm rounded-full">
                    Öne Çıkan · {CATEGORY_META[featured.category].label}
                  </div>
                  <ArrowUpRight className="h-7 w-7" />
                </div>
                <h2 className="font-display text-h2 font-black leading-tight mb-4">{featured.title}</h2>
                <p className="text-body opacity-90 max-w-prose mb-6">{featured.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm opacity-80">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featured.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featured.readingTime}
                  </span>
                  <span>· {featured.author}</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* TÜM YAZILAR GRID */}
      <section className="bg-white pb-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate px-3 py-1 text-white text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">
                Tüm Yazılar
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                {totalPosts} pratik rehber, tek yerde.
              </h2>
              {totalPages > 1 && (
                <p className="mt-2 text-sm text-ink/60">
                  Sayfa {currentPage} / {totalPages}
                </p>
              )}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 50}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={cn(
                        "border-3 border-ink/15 px-2 py-0.5 text-xs font-black tracking-wider shadow-brutal-sm rounded-full",
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
