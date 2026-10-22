"use client";

import * as React from "react";
import type { PublicTestimonial } from "@/server/cms";
import { TestimonialCard } from "@/components/cms/Testimonials";
import { saveTestimonialAction } from "../../../app/admin/actions";
import { FileInput } from "./FileInput";
import { Field, btn, input } from "./ui";

export function TestimonialForm({ initial, status }: { initial: PublicTestimonial & { avatarId: string | null }; status: "draft" | "published" | null }) {
  const [t, setT] = React.useState(initial);
  const set = <K extends keyof PublicTestimonial>(k: K, v: PublicTestimonial[K]) => setT((x) => ({ ...x, [k]: v }));
  const today = new Date().toISOString().slice(0, 10);
  return (
    <div className="mt-6 grid gap-8 xl:grid-cols-[1fr_380px]">
      <form action={saveTestimonialAction} className="flex flex-col gap-5 rounded-2xl border border-slate/15 bg-white p-5 lg:p-6">
        {initial.id > 0 && <input type="hidden" name="id" value={initial.id} />}
        <fieldset className="flex flex-col gap-2">
          <legend className="text-sm font-bold text-slate">Kaynak <span className="text-red-700">*</span></legend>
          <div className="flex flex-wrap gap-3">
            {[
              { v: "direct", l: "Doğrudan müşteri" },
              { v: "google", l: "Google" }
            ].map((o) => (
              <label key={o.v} className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-slate/20 px-4 text-sm font-semibold has-[:checked]:border-slate has-[:checked]:bg-slate has-[:checked]:text-white">
                <input type="radio" name="source" value={o.v} checked={t.source === o.v} onChange={() => set("source", o.v as "google" | "direct")} className="sr-only" />
                {o.l}
              </label>
            ))}
          </div>
          {t.source === "google" && (
            <p className="text-xs text-slate/60">Google yorumları otomatik çekilmez. Yorumu Google’dan kopyalayıp aşağıya yapıştırın; isterseniz yorumun bağlantısını ekleyin.</p>
          )}
        </fieldset>

        <Field label="Yorum metni" htmlFor="body" required>
          <textarea id="body" name="body" required minLength={5} maxLength={2000} rows={6} value={t.body} onChange={(e) => set("body", e.target.value)} className={input} />
        </Field>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Görünen ad" htmlFor="display_name" required hint="Yorum sahibinin göstermeyi kabul ettiği ad (ör. “Ayşe K.”).">
            <input id="display_name" name="display_name" required maxLength={80} value={t.displayName} onChange={(e) => set("displayName", e.target.value)} className={input} />
          </Field>
          <Field label="Şirket" htmlFor="company">
            <input id="company" name="company" maxLength={120} value={t.company ?? ""} onChange={(e) => set("company", e.target.value || null)} className={input} />
          </Field>
          <Field label="Unvan" htmlFor="title">
            <input id="title" name="title" maxLength={120} value={t.title ?? ""} onChange={(e) => set("title", e.target.value || null)} className={input} />
          </Field>
          <Field label="Tarih" htmlFor="review_date">
            <input id="review_date" name="review_date" type="date" max={today} value={t.reviewDate ?? ""} onChange={(e) => set("reviewDate", e.target.value || null)} className={input} />
          </Field>
          <Field label="Puan" htmlFor="rating" hint="Yorumda puan yoksa “Puan yok” bırakın; sitede yıldız gösterilmez.">
            <select id="rating" name="rating" value={t.rating ?? ""} onChange={(e) => set("rating", e.target.value ? Number(e.target.value) : null)} className={input}>
              <option value="">Puan yok</option>
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} / 5
                </option>
              ))}
            </select>
          </Field>
          <Field label="Kaynak bağlantısı" htmlFor="source_url">
            <input id="source_url" name="source_url" type="url" placeholder="https://" value={t.sourceUrl ?? ""} onChange={(e) => set("sourceUrl", e.target.value || null)} className={input} />
          </Field>
        </div>
        <Field label="Görsel (profil fotoğrafı veya logo)" htmlFor="avatar" hint="Yalnızca kullanım izniniz varsa ekleyin. JPG, PNG veya WebP; en fazla 4 MB.">
          <FileInput id="avatar" name="avatar" accept="image/png,image/jpeg,image/webp" fit="cover" />
          {initial.avatarId && (
            <label className="mt-1 inline-flex items-center gap-2 text-sm text-slate">
              <input type="checkbox" name="remove_avatar" value="1" className="h-4 w-4" /> Mevcut görseli kaldır
            </label>
          )}
        </Field>
        <div className="flex flex-wrap gap-2 border-t border-slate/10 pt-5">
          <button name="intent" value="draft" className={btn("ghost")}>
            {status === "published" ? "Kaydet (yayında kalır)" : "Taslak olarak kaydet"}
          </button>
          {status !== "published" && (
            <button name="intent" value="publish" className={btn("accent")}>
              Kaydet ve yayımla
            </button>
          )}
        </div>
      </form>
      <div>
        <p className="text-sm font-bold text-slate/70">Önizleme</p>
        <div className="mt-2 xl:sticky xl:top-6">
          <TestimonialCard t={{ ...t, body: t.body || "Yorum metni burada görünecek.", displayName: t.displayName || "Görünen ad" }} />
          <p className="mt-2 text-xs text-slate/60">Yeni seçilen görsel kaydettikten sonra önizlemede görünür.</p>
        </div>
      </div>
    </div>
  );
}
