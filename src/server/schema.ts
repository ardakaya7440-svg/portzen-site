import { CODE_DEFAULT_PRICES } from "@/data/pricing";
import publishedPrices from "@/data/pricing.published.json";
import type { Db } from "./db";

type Q = Db["query"];

/** Sıralı, bir kez uygulanan şema değişiklikleri */
export const MIGRATIONS: { id: number; sql: string[]; seed?: (q: Q) => Promise<void> }[] = [
  {
    id: 1,
    sql: [
      `create table media (
        id uuid primary key,
        kind text not null check (kind in ('image','video')),
        mime text not null,
        bytes bytea not null,
        width int,
        height int,
        size int not null,
        original_name text,
        created_at timestamptz not null default now()
      )`,
      `create table price_versions (
        id serial primary key,
        data jsonb not null,
        status text not null default 'draft' check (status in ('draft','published','archived')),
        note text,
        based_on int,
        created_by text,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now(),
        published_at timestamptz
      )`,
      `create unique index price_versions_one_published on price_versions ((status)) where status = 'published'`,
      `create table brands (
        id serial primary key,
        name text not null,
        kind text not null check (kind in ('client','tool')),
        url text,
        logo_id uuid references media(id),
        sort int not null default 0,
        visible boolean not null default true,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      )`,
      `create table testimonials (
        id serial primary key,
        body text not null,
        display_name text not null,
        company text,
        title text,
        avatar_id uuid references media(id),
        review_date date,
        rating smallint check (rating between 1 and 5),
        source text not null check (source in ('google','direct')),
        source_url text,
        status text not null default 'draft' check (status in ('draft','published')),
        sort int not null default 0,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      )`,
      `create table works (
        id serial primary key,
        kind text not null check (kind in ('work','service')),
        title text not null,
        summary text,
        category text not null check (category in ('sosyal-medya','ai-otomasyon','web-yazilim')),
        service_key text,
        alt text,
        project_url text,
        video_url text,
        is_demo boolean not null default true,
        status text not null default 'draft' check (status in ('draft','published')),
        cover_media_id uuid references media(id),
        sort int not null default 0,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      )`,
      `create table work_media (
        work_id int not null references works(id) on delete cascade,
        media_id uuid not null references media(id),
        sort int not null default 0,
        primary key (work_id, media_id)
      )`,
      `create table login_attempts (id serial primary key, ip text not null, ok boolean not null, at timestamptz not null default now())`,
      `create table audit_log (id serial primary key, actor text, action text not null, detail jsonb, at timestamptz not null default now())`
    ],
    // Fiyatlar mevcut (yayımlanmış) değerlerle başlar; kendiliğinden değiştirilmez.
    seed: async (q) => {
      const pub = publishedPrices as { version: number; note: string | null; data: unknown };
      const data = pub.version > 0 ? pub.data : CODE_DEFAULT_PRICES;
      await q(
        `insert into price_versions (data, status, note, created_by, published_at) values ($1::jsonb, 'published', $2, 'kurulum', now())`,
        [JSON.stringify(data), pub.note ?? "Başlangıç fiyatları"]
      );
    }
  }
];
