import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Calendar, ChevronRight, Clock } from "lucide-react";
import {
  ALL_CATEGORIES,
  CATEGORY_META,
  type BlogCategory,
  getPostsByCategory
} from "@/lib/blog";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface Props {
  params: { kategori: string };
}

export async function generateStaticParams() {
  return ALL_CATEGORIES.map((c) => ({ kategori: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = ALL_CATEGORIES.find((c) => c.slug === params.kategori);
  if (!cat) return { title: "Kategori bulunamadı — PORTZEN Blog" };
  return {
    title: `${cat.label} — PORTZEN Blog`,
    description: `${cat.label} kategorisindeki tüm PORTZEN blog yazıları. KOBİ'ler için pratik rehberler.`,
    alternates: { canonical: `https://portzenai.com/blog/kategori/${cat.slug}` },
    openGraph: {
      title: `${cat.label} — PORTZEN Blog`,
      description: `${cat.label} kategorisindeki tüm rehberler.`,
      type: "website",
      url: `https://portzenai.com/blog/kategori/${cat.slug}`
    }
  };
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}

export default function CategoryPage({ params }: Props) {
  const cat = ALL_CATEGORIES.find((c) => c.slug === params.kategori);
  if (!cat) notFound();

  const posts = getPostsByCategory(cat.slug as BlogCategory);
  const meta = CATEGORY_META[cat.slug as BlogCategory];

  return (
    <>
      <section className="border-b-3 border-ink bg-paper">
        <div className="mx-auto max-w-container px-6 pt-10 pb-12 md:pt-16 md:pb-16">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink/70 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:underline">Anasayfa</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:underline">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-bold text-ink">{cat.label}</span>
          </nav>

          <Reveal>
            <div className={cn("inline-block border-3 border-ink px-3 py-1 text-xs font-black uppercase tracking-wider shadow-brutal-sm mb-6", meta.bg, meta.text)}>
              Kategori
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[1] text-ink max-w-4xl mb-6">
              {cat.label}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-body text-ink/80 max-w-prose">
              {posts.length > 0
                ? `${cat.label} kategorisinde ${posts.length} yazı var. Aşağıdan başla.`
                : "Bu kategoride henüz yazı yok. Yakında geliyor."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          {posts.length === 0 ? (
            <div className="border-3 border-ink bg-paper p-12 text-center">
              <p className="text-ink/70">Yazı yok.</p>
              <Link
                href="/blog"
                className="mt-6 inline-flex items-center gap-2 border-3 border-ink bg-ink px-4 py-2 text-sm font-bold uppercase text-paper shadow-brutal"
              >
                <ArrowLeft className="h-4 w-4" />
                Blog'a Dön
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 50}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className={cn("border-3 border-ink px-2 py-0.5 text-xs font-black uppercase tracking-wider shadow-brutal-sm", meta.bg, meta.text)}>
                        {cat.label}
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
          )}
        </div>
      </section>
    </>
  );
}
