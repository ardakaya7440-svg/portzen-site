"use client";

import { PostStatus, type Post } from "@prisma/client";
import { useActionState, useState } from "react";

import { savePostAction, type FormState } from "@/lib/actions";
import { createMetaFallbacks, createPostDefaults } from "@/lib/post-form";
import { slugify } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/form-fields";

const initialState: FormState = {};

function toLocalDateTimeInput(date?: Date | null) {
  if (!date) {
    return "";
  }

  const localDate = new Date(date);
  const timezoneOffset = localDate.getTimezoneOffset() * 60000;
  return new Date(localDate.getTime() - timezoneOffset).toISOString().slice(0, 16);
}

export function PostEditorForm({ post }: { post?: Post | null }) {
  const defaults = post
    ? {
        id: String(post.id),
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        metaTitle: post.metaTitle || post.title,
        metaDescription: post.metaDescription || post.excerpt,
        content: post.content,
        status: post.status,
        publishedAt: toLocalDateTimeInput(post.publishedAt)
      }
    : createPostDefaults();

  const [title, setTitle] = useState(defaults.title);
  const [slug, setSlug] = useState(defaults.slug);
  const [excerpt, setExcerpt] = useState(defaults.excerpt);
  const [metaTitle, setMetaTitle] = useState(defaults.metaTitle);
  const [metaDescription, setMetaDescription] = useState(defaults.metaDescription);
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));
  const [metaTouched, setMetaTouched] = useState(Boolean(post?.metaTitle || post?.metaDescription));
  const [state, action, pending] = useActionState(savePostAction, initialState);

  return (
    <form action={action} className="space-y-6 rounded-[2rem] border border-white/[0.08] bg-[#060d1a] p-6 sm:p-8">
      {post ? <input name="id" type="hidden" value={defaults.id} /> : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="title">Baslik</Label>
          <Input
            id="title"
            name="title"
            onChange={(event) => {
              const nextTitle = event.target.value;
              setTitle(nextTitle);

              if (!slugTouched) {
                setSlug(slugify(nextTitle));
              }

              if (!metaTouched) {
                const fallback = createMetaFallbacks(nextTitle, excerpt);
                setMetaTitle(fallback.metaTitle);
                setMetaDescription(fallback.metaDescription);
              }
            }}
            required
            value={title}
          />
        </div>

        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            onChange={(event) => {
              setSlugTouched(true);
              setSlug(slugify(event.target.value));
            }}
            required
            value={slug}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="excerpt">Kisa aciklama</Label>
        <Textarea
          className="min-h-[120px]"
          id="excerpt"
          name="excerpt"
          onChange={(event) => {
            const nextExcerpt = event.target.value;
            setExcerpt(nextExcerpt);

            if (!metaTouched) {
              const fallback = createMetaFallbacks(title, nextExcerpt);
              setMetaTitle(fallback.metaTitle);
              setMetaDescription(fallback.metaDescription);
            }
          }}
          required
          value={excerpt}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="publishedAt" optional>
            Yayin tarihi
          </Label>
          <Input defaultValue={defaults.publishedAt} id="publishedAt" name="publishedAt" type="datetime-local" />
        </div>
        <div className="rounded-[1.5rem] border border-white/[0.06] bg-[#0a1428] p-4 text-sm leading-7 text-white/40">
          Blog kartlari artik daha sade bir gorunum kullaniyor. Bu nedenle kategori ve kapak
          gorseli alani formdan kaldirildi.
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="metaTitle">Meta title</Label>
          <Input
            id="metaTitle"
            name="metaTitle"
            onChange={(event) => {
              setMetaTouched(true);
              setMetaTitle(event.target.value);
            }}
            required
            value={metaTitle}
          />
        </div>
        <div>
          <Label htmlFor="metaDescription">Meta description</Label>
          <Textarea
            className="min-h-[120px]"
            id="metaDescription"
            name="metaDescription"
            onChange={(event) => {
              setMetaTouched(true);
              setMetaDescription(event.target.value);
            }}
            required
            value={metaDescription}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="content">Icerik</Label>
        <Textarea
          defaultValue={defaults.content}
          id="content"
          name="content"
          placeholder="Markdown desteklenir. Basliklar icin ##, listeler icin - kullanabilirsiniz."
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-[240px_1fr] sm:items-end">
        <div>
          <Label htmlFor="status">Durum</Label>
          <Select defaultValue={defaults.status} id="status" name="status">
            <option value={PostStatus.DRAFT}>Taslak</option>
            <option value={PostStatus.PUBLISHED}>Yayinla</option>
          </Select>
        </div>
        <div className="rounded-[1.5rem] border border-white/[0.06] bg-[#0a1428] p-4 text-sm leading-7 text-white/40">
          Slug otomatik uretilir ama duzenlenebilir. Taslak kaydetmek veya dogrudan yayina almak
          icin durum alanini kullanabilirsiniz. Yayinlanan yazilar ana sitedeki `/blog` listesinde
          ve kendi detay sayfasinda gorselsiz, sade kart yapisiyla gorunur.
        </div>
      </div>

      {state.error ? (
        <p className="rounded-2xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400">
          {state.error}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-3">
        <Button disabled={pending} size="lg" type="submit">
          {pending ? "Kaydediliyor..." : post ? "Degisiklikleri kaydet" : "Yaziyi olustur"}
        </Button>
        {post?.status === PostStatus.PUBLISHED ? (
          <ButtonLink href={`/blog/${post.slug}`} size="lg" target="_blank" variant="primary">
            Sitede gor
          </ButtonLink>
        ) : null}
      </div>
    </form>
  );
}
