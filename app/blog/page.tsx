import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { ALL_CATEGORIES, CATEGORY_META, getAllPostsMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "PORTZEN Blog — AI, Sosyal Medya, Otomasyon ve Web Yazılım Rehberi",
  description:
    "Yapay zeka, WhatsApp asistanları, sosyal medya yönetimi, otomasyon sistemleri ve web tasarımı üzerine KOBİ'ler için pratik rehberler. PORTZEN'in editör seçkisi.",
  openGraph: {
    title: "PORTZEN Blog — KOBİ'ler İçin AI & Dijital Büyüme Rehberleri",
    description:
      "Yapay zeka, sosyal medya, otomasyon ve web yazılım konularında haftalık güncellenen pratik rehberler.",
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
  const posts = getAllPostsMeta();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper pt-12 md:pt-20">
        <div className="mx-auto max-w-container px-6 pb-16 md:pb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-3 py-1.5 shadow-brutal-sm mb-6">
              <Tag className="h-3.5 w-3.5" />
              <span className="text-xs font-black uppercase tracking-wider">PORTZEN Blog</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95] text-ink max-w-4xl">
              AI, sosyal medya ve <span className="bg-brand-pink text-paper px-3 -mx-1 inline-block border-3 border-ink shadow-brutal">otomasyon</span> rehberleri.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-prose text-body text-ink/80">
              KOBİ sahipleri ve dijital büyüme arayan markalar için. Haftalık olarak güncellenen pratik içerikler — teori değil, sahada işe yarayan rehberler.
            </p>
          </Reveal>

          {/* Kategori filtre */}
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-2">
              <Link
                href="/blog"
                className="border-3 border-ink bg-ink text-paper px-3 py-1.5 text-xs font-black uppercase tracking-wider shadow-brutal-sm"
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

      {/* FEATURED POST */}
      {featured && (
        <section className="bg-paper pb-section">
          <div className="mx-auto max-w-container px-6">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className={cn(
                  "group block border-3 border-ink p-8 md:p-12 shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#0A0A0A] transition-all",
                  CATEGORY_META[featured.category].bg,
                  CATEGORY_META[featured.category].text
                )}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase shadow-brutal-sm">
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
      <section className="bg-paper pb-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue px-3 py-1 text-paper text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Tüm Yazılar
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                {posts.length} pratik rehber, tek yerde.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 50}>
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
        </div>
      </section>
    </>
  );
}
