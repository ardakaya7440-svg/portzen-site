/* eslint-disable @next/next/no-img-element */
import { Star } from "lucide-react";
import type { PublicTestimonial } from "@/server/cms";
import { cn } from "@/lib/utils";

/**
 * Müşteri yorumları — yalnızca admin'den yayımlanan yorumlar.
 * - Puan girilmemişse yıldız gösterilmez (boşluk beş yıldızla doldurulmaz).
 * - Seçilmiş yorumlardan ortalama veya toplam yorum sayısı üretilmez.
 * - Yayımlanmış yorum yoksa bileşen hiçbir şey çizmez.
 */
const MONTHS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
export function trMonth(d: string | null) {
  if (!d || !/^\d{4}-\d{2}/.test(d)) return null;
  const [y, m] = d.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={`5 üzerinden ${rating} puan`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={cn("h-4 w-4", i <= rating ? "fill-slate text-slate" : "text-slate/25")} aria-hidden />
      ))}
    </span>
  );
}

export function TestimonialCard({ t }: { t: PublicTestimonial }) {
  const who = [t.title, t.company].filter(Boolean).join(", ");
  const date = trMonth(t.reviewDate);
  const sourceLabel = t.source === "google" ? "Google yorumu" : "Müşteri yorumu";
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate/15 bg-white p-6">
      <div className="flex min-h-[1.25rem] items-center justify-between gap-3">
        {t.rating !== null ? <Stars rating={t.rating} /> : <span />}
        {t.sourceUrl ? (
          <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="text-xs font-bold text-slate/60 underline-offset-4 hover:text-slate hover:underline">
            {sourceLabel} ↗
          </a>
        ) : (
          <span className="text-xs font-bold text-slate/60">{sourceLabel}</span>
        )}
      </div>
      <blockquote className="mt-4 flex-1 whitespace-pre-line text-[15px] leading-relaxed text-slate">“{t.body}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate/10 pt-4">
        {t.avatar ? (
          <img src={`/api/media/${t.avatar.id}`} alt="" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime text-sm font-bold text-slate" aria-hidden>
            {t.displayName.trim().charAt(0).toLocaleUpperCase("tr-TR")}
          </span>
        )}
        <span className="min-w-0">
          <span className="block truncate font-bold text-slate">{t.displayName}</span>
          {(who || date) && <span className="block truncate text-sm text-slate/60">{[who, date].filter(Boolean).join(" · ")}</span>}
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialGrid({ items }: { items: PublicTestimonial[] }) {
  if (!items.length) return null;
  return (
    <div className={cn("grid gap-6", items.length === 1 ? "max-w-xl" : items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3")}>
      {items.map((t) => (
        <TestimonialCard key={t.id} t={t} />
      ))}
    </div>
  );
}
