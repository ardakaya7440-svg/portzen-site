import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export type BlogCategory = "ai" | "sosyal-medya" | "web-tasarim" | "otomasyon" | "vaka-analizi";

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
  ai: { label: "Yapay Zeka", tone: "purple", bg: "bg-brand-purple", text: "text-paper" },
  "sosyal-medya": { label: "Sosyal Medya", tone: "pink", bg: "bg-brand-pink", text: "text-paper" },
  "web-tasarim": { label: "Web Tasarım", tone: "orange", bg: "bg-brand-orange", text: "text-ink" },
  otomasyon: { label: "Otomasyon", tone: "blue", bg: "bg-brand-blue", text: "text-paper" },
  "vaka-analizi": { label: "Vaka Analizi", tone: "green", bg: "bg-brand-green", text: "text-ink" }
};

function readMarkdownFile(slug: string) {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as Record<string, unknown>, content };
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
    ogImage: typeof data.ogImage === "string" ? data.ogImage : undefined
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

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const file = readMarkdownFile(slug);
  if (!file) return null;
  const meta = buildMeta(slug, file.data, file.content);
  const processed = await remark().use(gfm).use(html, { sanitize: false }).process(file.content);
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
