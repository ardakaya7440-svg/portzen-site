import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import { resolvePriceTokens } from "@/data/pricing";

export type BlogCategory =
  | "ai"
  | "sosyal-medya"
  | "web-tasarim"
  | "otomasyon"
  | "vaka-analizi"
  | "sektorel"
  | "sehir"
  | "karsilastirma"
  | "rehber";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  keywords: string[];
  publishedAt: string;
  author: string;
  readingTime: string;
  relatedServices?: string[];
  ogImage?: string;
}

export interface BlogPost extends BlogPostMeta {
  contentMd: string;
  contentHtml: string;
  wordCount: number;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export const CATEGORY_META: Record<BlogCategory, { label: string; tone: string; bg: string; text: string }> = {
  ai: { label: "Yapay Zeka", tone: "purple", bg: "bg-light", text: "text-ink" },
  "sosyal-medya": { label: "Sosyal Medya", tone: "pink", bg: "bg-light", text: "text-ink" },
  "web-tasarim": { label: "Web Tasarım", tone: "orange", bg: "bg-light", text: "text-ink" },
  otomasyon: { label: "Otomasyon", tone: "blue", bg: "bg-light", text: "text-ink" },
  "vaka-analizi": { label: "Vaka Analizi", tone: "green", bg: "bg-light", text: "text-ink" },
  sektorel: { label: "Sektörel", tone: "yellow", bg: "bg-light", text: "text-ink" },
  sehir: { label: "Şehir Rehberi", tone: "blue", bg: "bg-light", text: "text-ink" },
  karsilastirma: { label: "Karşılaştırma", tone: "pink", bg: "bg-light", text: "text-ink" },
  rehber: { label: "Rehber", tone: "orange", bg: "bg-light", text: "text-ink" }
};

/**
 * Next.js 14, Türkçe karakter içeren dinamik segmentleri (ör. "stüdyo") params içinde
 * yüzde-kodlu ("st%C3%BCdyo") iletebiliyor; dosya adı ise UTF-8 (NFC). Slug'ı çözüp
 * normalize etmeden dosya bulunamıyor ve sayfa 404 veriyordu.
 */
function normalizeSlug(slug: string): string {
  let s = slug;
  try {
    s = decodeURIComponent(slug);
  } catch {
    // geçersiz yüzde kodlaması: olduğu gibi kullan
  }
  return s.normalize("NFC");
}

function readMarkdownFile(rawSlug: string) {
  const slug = normalizeSlug(rawSlug);
  if (slug.includes("/") || slug.includes("..")) return null;
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  // PORTZEN fiyatları yazıya elle yazılmaz; {{fiyat:…}} yer tutucuları merkezi kaynaktan çözülür
  return { data: data as Record<string, unknown>, content: resolvePriceTokens(content) };
}

function buildMeta(slug: string, data: Record<string, unknown>, content: string): BlogPostMeta {
  const rt = readingTime(content);
  const minutes = Math.max(1, Math.round(rt.minutes));
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    category: (data.category as BlogCategory) ?? "ai",
    keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : [],
    publishedAt: String(data.publishedAt ?? new Date().toISOString().slice(0, 10)),
    author: String(data.author ?? "PORTZEN"),
    readingTime: typeof data.readingTime === "string" && data.readingTime ? data.readingTime : `${minutes} dakika`,
    relatedServices: Array.isArray(data.relatedServices) ? (data.relatedServices as string[]) : [],
    // Paylaşım görseli yalnızca dosya gerçekten varsa kullanılır; yoksa site geneli varsayılan görsele düşülür
    ogImage:
      typeof data.ogImage === "string" && fs.existsSync(path.join(process.cwd(), "public", data.ogImage))
        ? data.ogImage
        : undefined
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  const list: BlogPostMeta[] = [];
  for (const slug of slugs) {
    const file = readMarkdownFile(slug);
    if (!file) continue;
    list.push(buildMeta(slug, file.data, file.content));
  }
  return list.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export async function getPostBySlug(rawSlug: string): Promise<BlogPost | null> {
  const slug = normalizeSlug(rawSlug);
  const file = readMarkdownFile(slug);
  if (!file) return null;
  const meta = buildMeta(slug, file.data, file.content);
  // Sayfa başlığı (H1) şablonda zaten gösteriliyor; içerikteki ilk "# Başlık" satırı çift H1 olmasın diye atlanır
  const body = file.content.replace(/^\s*#\s+[^\n]*\n/, "");
  const processed = await remark().use(gfm).use(html, { sanitize: false }).process(body);
  const contentHtml = processed.toString();
  const wordCount = file.content.split(/\s+/).filter(Boolean).length;
  return { ...meta, contentMd: file.content, contentHtml, wordCount };
}

export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllPostsMeta().filter((p) => p.category === category);
}

export function getRelatedPosts(post: BlogPostMeta, limit = 3): BlogPostMeta[] {
  return getAllPostsMeta()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

export const ALL_CATEGORIES: { slug: BlogCategory; label: string }[] = Object.entries(CATEGORY_META).map(
  ([slug, meta]) => ({ slug: slug as BlogCategory, label: meta.label })
);

/** Yalnızca en az bir yazısı olan kategoriler (boş kategori linki ve sayfası gösterilmez) */
export function getActiveCategories(): { slug: BlogCategory; label: string }[] {
  const used = new Set(getAllPostsMeta().map((p) => p.category));
  return ALL_CATEGORIES.filter((c) => used.has(c.slug));
}

/* ============================================================
   PAGINATION
   ============================================================ */

export const POSTS_PER_PAGE = 12;

export interface PaginatedPosts {
  posts: BlogPostMeta[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}

/** Belirli bir sayfa için makaleleri döndür (1-indexed) */
export function getPaginatedPosts(page: number): PaginatedPosts {
  const allPosts = getAllPostsMeta();
  const totalPosts = allPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  return {
    posts: allPosts.slice(start, end),
    currentPage: safePage,
    totalPages,
    totalPosts
  };
}

/** Sitemap için: 2'den itibaren tüm sayfa numaralarını döndürür (sayfa 1 = /blog) */
export function getExtraPageNumbers(): number[] {
  const allPosts = getAllPostsMeta();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  if (totalPages <= 1) return [];
  // 2, 3, 4, ... totalPages
  return Array.from({ length: totalPages - 1 }, (_, i) => i + 2);
}

/* ============================================================
   SSS (FAQPage şeması için)
   "## Sıkça Sorulan Sorular" bölümündeki "### Soru" başlıklarını ve
   altındaki paragrafları soru-cevap olarak çıkarır.
   ============================================================ */
export interface FaqItem {
  question: string;
  answer: string;
}

function mdToPlain(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractFaq(contentMd: string): FaqItem[] {
  const lines = contentMd.split("\n");
  const start = lines.findIndex((l) => /^##\s+(Sıkça Sorulan Sorular|SSS)\b/i.test(l.trim()));
  if (start === -1) return [];
  const items: FaqItem[] = [];
  let q: string | null = null;
  let buf: string[] = [];
  const flush = () => {
    if (q) {
      const answer = mdToPlain(buf.join(" "));
      if (answer) items.push({ question: mdToPlain(q), answer });
    }
    q = null;
    buf = [];
  };
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (/^##\s/.test(line)) break;
    const h3 = line.match(/^###\s+(.+)/);
    if (h3) {
      flush();
      q = h3[1];
      continue;
    }
    if (q && line) buf.push(line);
  }
  flush();
  return items;
}
