import "server-only";
import { unstable_cache } from "next/cache";
import snapshot from "@/data/cms.snapshot.json";
import { IS_BUILD, getDb } from "./db";

/**
 * Herkese açık içerik (markalar, yorumlar, işler, hizmet görselleri).
 * - Çalışma anında veritabanından okunur ve "cms" etiketiyle önbelleğe alınır;
 *   admin panelinde yapılan her değişiklik revalidateTag("cms") ile sayfaları yeniler.
 * - Build sırasında veritabanına bağlanılmaz; build öncesi yazılan anlık görüntü kullanılır
 *   (scripts/sync-content.mjs → src/data/cms.snapshot.json).
 */
export type Category = "sosyal-medya" | "ai-otomasyon" | "web-yazilim";
export interface MediaRef {
  id: string;
  kind: "image" | "video";
  width: number | null;
  height: number | null;
}
export interface PublicBrand {
  id: number;
  name: string;
  kind: "client" | "tool";
  url: string | null;
  logo: MediaRef | null;
}
export interface PublicTestimonial {
  id: number;
  body: string;
  displayName: string;
  company: string | null;
  title: string | null;
  avatar: MediaRef | null;
  reviewDate: string | null;
  rating: number | null;
  source: "google" | "direct";
  sourceUrl: string | null;
}
export interface PublicWork {
  id: number;
  kind: "work" | "service";
  title: string;
  summary: string | null;
  category: Category;
  serviceKey: string | null;
  alt: string | null;
  projectUrl: string | null;
  videoUrl: string | null;
  isDemo: boolean;
  cover: MediaRef | null;
  media: MediaRef[];
}
export interface PublicContent {
  brands: PublicBrand[];
  testimonials: PublicTestimonial[];
  works: PublicWork[];
  services: PublicWork[];
}

const EMPTY: PublicContent = { brands: [], testimonials: [], works: [], services: [] };

type R = Record<string, unknown>;
const ref = (id: unknown, kind: unknown, w: unknown, h: unknown): MediaRef | null =>
  id ? { id: String(id), kind: kind === "video" ? "video" : "image", width: w == null ? null : Number(w), height: h == null ? null : Number(h) } : null;
const dateStr = (v: unknown) => (v == null ? null : v instanceof Date ? v.toISOString().slice(0, 10) : String(v).slice(0, 10));

/** Doğrudan veritabanından okur (önbelleksiz). Snapshot betiği de aynı sorguları kullanır. */
export async function readPublicContent(): Promise<PublicContent> {
  const db = await getDb();
  const brands = await db.query<R>(
    `select b.id, b.name, b.kind, b.url, m.id as mid, m.kind as mkind, m.width, m.height
       from brands b left join media m on m.id = b.logo_id
      where b.visible = true and b.logo_id is not null
      order by b.kind, b.sort, b.id`
  );
  const tests = await db.query<R>(
    `select t.*, m.id as mid, m.kind as mkind, m.width, m.height
       from testimonials t left join media m on m.id = t.avatar_id
      where t.status = 'published' order by t.sort, t.id`
  );
  const works = await db.query<R>(
    `select w.*, m.id as mid, m.kind as mkind, m.width, m.height
       from works w left join media m on m.id = w.cover_media_id
      where w.status = 'published' order by w.sort, w.id`
  );
  const wm = await db.query<R>(
    `select wm.work_id, m.id, m.kind, m.width, m.height
       from work_media wm join media m on m.id = wm.media_id
       join works w on w.id = wm.work_id and w.status = 'published'
      order by wm.sort, m.created_at`
  );
  const mediaBy = new Map<number, MediaRef[]>();
  for (const r of wm.rows) {
    const k = Number(r.work_id);
    mediaBy.set(k, [...(mediaBy.get(k) ?? []), ref(r.id, r.kind, r.width, r.height)!]);
  }
  const all: PublicWork[] = works.rows.map((r) => ({
    id: Number(r.id),
    kind: r.kind as PublicWork["kind"],
    title: String(r.title),
    summary: (r.summary as string) ?? null,
    category: r.category as Category,
    serviceKey: (r.service_key as string) ?? null,
    alt: (r.alt as string) ?? null,
    projectUrl: (r.project_url as string) ?? null,
    videoUrl: (r.video_url as string) ?? null,
    isDemo: Boolean(r.is_demo),
    cover: ref(r.mid, r.mkind, r.width, r.height),
    media: mediaBy.get(Number(r.id)) ?? []
  }));
  return {
    brands: brands.rows.map((r) => ({
      id: Number(r.id),
      name: String(r.name),
      kind: r.kind as PublicBrand["kind"],
      url: (r.url as string) ?? null,
      logo: ref(r.mid, r.mkind, r.width, r.height)
    })),
    testimonials: tests.rows.map((r) => ({
      id: Number(r.id),
      body: String(r.body),
      displayName: String(r.display_name),
      company: (r.company as string) ?? null,
      title: (r.title as string) ?? null,
      avatar: ref(r.mid, r.mkind, r.width, r.height),
      reviewDate: dateStr(r.review_date),
      rating: r.rating == null ? null : Number(r.rating),
      source: r.source as PublicTestimonial["source"],
      sourceUrl: (r.source_url as string) ?? null
    })),
    works: all.filter((w) => w.kind === "work"),
    services: all.filter((w) => w.kind === "service")
  };
}

const SNAPSHOT = (snapshot as unknown as PublicContent) ?? EMPTY;

// Build sırasında da aynı etiketli önbellek kullanılır; böylece statik sayfalar "cms" etiketine bağlanır ve
// revalidateTag("cms") çağrısı bu sayfaları da yeniler. Build'de veri anlık görüntüden gelir.
const cached = unstable_cache(async () => (IS_BUILD ? SNAPSHOT : readPublicContent()), ["public-content-v1"], { tags: ["cms"], revalidate: 3600 });

export async function getPublicContent(): Promise<PublicContent> {
  try {
    return await cached();
  } catch (e) {
    console.error("[cms] veritabanı okunamadı, anlık görüntü kullanılıyor:", e);
    return SNAPSHOT;
  }
}
