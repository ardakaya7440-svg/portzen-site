"use client";

import * as React from "react";
import type { PublicWork } from "@/server/cms";
import { ALL_SERVICES, CATEGORY_LABEL, SERVICE_GROUPS, categoryOf, serviceByHref } from "@/data/catalog";
import { WorkCard } from "@/components/cms/Works";
import { ServiceCard } from "@/components/cms/ServiceCards";
import { saveWorkAction } from "../../../app/admin/actions";
import { FileInput } from "./FileInput";
import { Field, btn, input } from "./ui";

export function WorkForm({ initial, status }: { initial: PublicWork; status: "draft" | "published" | null }) {
  const [w, setW] = React.useState(initial);
  const set = <K extends keyof PublicWork>(k: K, v: PublicWork[K]) => setW((x) => ({ ...x, [k]: v }));
  const isService = w.kind === "service";
  const svc = w.serviceKey ? serviceByHref(w.serviceKey) : null;
  return (
    <div className="mt-6 grid gap-8 xl:grid-cols-[1fr_360px]">
      <form action={saveWorkAction} className="flex flex-col gap-5 rounded-2xl border border-slate/15 bg-white p-5 lg:p-6">
        {initial.id > 0 && <input type="hidden" name="id" value={initial.id} />}
        <input type="hidden" name="kind" value={w.kind} />
        {isService ? (
          <Field label="Hizmet sayfası" htmlFor="service_key" required hint="Görsel, ana sayfadaki bu hizmetin kartında kullanılır.">
            <select
              id="service_key"
              name="service_key"
              required
              value={w.serviceKey ?? ""}
              onChange={(e) => {
                const href = e.target.value || null;
                setW((x) => ({ ...x, serviceKey: href, category: (href && categoryOf(href)) || x.category, title: x.title || serviceByHref(href ?? "")?.label || "" }));
              }}
              className={input}
            >
              <option value="">Seçin</option>
              {SERVICE_GROUPS.map((g) => (
                <optgroup key={g.id} label={g.title}>
                  {g.links.map((l) => (
                    <option key={l.href} value={l.href}>
                      {l.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <input type="hidden" name="category" value={w.category} />
          </Field>
        ) : (
          <Field label="Hizmet kategorisi" htmlFor="category" required>
            <select id="category" name="category" required value={w.category} onChange={(e) => set("category", e.target.value as PublicWork["category"])} className={input}>
              {Object.entries(CATEGORY_LABEL).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </Field>
        )}
        {!isService && (
          <Field label="İlgili hizmet sayfası" htmlFor="service_key_work">
            <select id="service_key_work" name="service_key" value={w.serviceKey ?? ""} onChange={(e) => set("serviceKey", e.target.value || null)} className={input}>
              <option value="">Yok</option>
              {ALL_SERVICES.map((l) => (
                <option key={l.href} value={l.href}>
                  {l.label}
                </option>
              ))}
            </select>
          </Field>
        )}
        <Field label="Başlık" htmlFor="title" required>
          <input id="title" name="title" required maxLength={120} value={w.title} onChange={(e) => set("title", e.target.value)} className={input} />
        </Field>
        <Field label="Kısa açıklama" htmlFor="summary" hint="Bir-iki cümle. Doğrulanmamış sonuç (satış, takipçi artışı vb.) yazmayın.">
          <textarea id="summary" name="summary" maxLength={400} rows={3} value={w.summary ?? ""} onChange={(e) => set("summary", e.target.value || null)} className={input} />
        </Field>
        <Field label="Görsel / video" htmlFor="media" required={!initial.cover} hint="JPG, PNG, WebP, GIF veya MP4/WebM; dosya başına en fazla 4 MB, tek seferde 8 dosya. Görseller otomatik küçültülür ve WebP'ye çevrilir. Daha uzun videolar için video bağlantısı kullanın.">
          <FileInput id="media" name="media" accept="image/png,image/jpeg,image/webp,image/gif,video/mp4,video/webm" multiple fit="cover" />
        </Field>
        <Field label="Alternatif metin (alt)" htmlFor="alt" required hint="Görselde ne olduğunu kısaca anlatın; ekran okuyucular için gerekli. Yayımlamak için zorunlu.">
          <input id="alt" name="alt" maxLength={200} value={w.alt ?? ""} onChange={(e) => set("alt", e.target.value || null)} className={input} />
        </Field>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Proje bağlantısı" htmlFor="project_url">
            <input id="project_url" name="project_url" type="url" placeholder="https://" value={w.projectUrl ?? ""} onChange={(e) => set("projectUrl", e.target.value || null)} className={input} />
          </Field>
          <Field label="Video bağlantısı" htmlFor="video_url">
            <input id="video_url" name="video_url" type="url" placeholder="https://" value={w.videoUrl ?? ""} onChange={(e) => set("videoUrl", e.target.value || null)} className={input} />
          </Field>
        </div>
        <label className="flex items-start gap-3 rounded-xl bg-light p-4 text-sm text-slate">
          <input type="checkbox" name="is_demo" value="1" checked={w.isDemo} onChange={(e) => set("isDemo", e.target.checked)} className="mt-0.5 h-5 w-5" />
          <span>
            <strong>“Demo” olarak işaretle.</strong> Temsili veya örnek çalışmalarda açık kalmalı. Yalnızca gerçek ve yayımlama izni olan bir müşteri
            çalışmasında kapatın.
          </span>
        </label>
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
          {isService && svc ? (
            <div className="flex">
              <ServiceCard item={svc} visual={w.cover ? w : undefined} />
            </div>
          ) : (
            <WorkCard w={{ ...w, title: w.title || "Başlık" }} />
          )}
          <p className="mt-2 text-xs text-slate/60">Yeni seçilen dosyalar kaydettikten sonra önizlemede görünür. Kapak görselini aşağıdan seçebilirsiniz.</p>
        </div>
      </div>
    </div>
  );
}
