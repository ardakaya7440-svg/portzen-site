import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { type FamilyId, type SingleId, type TierId, BILLING_LABEL, BILLING_SUFFIX, DISPLAY_ORDER, PRICING, RECOMMENDED_TIER, SINGLE, TIER_NAMES, contactHref, firstMonthTotal, formatTL, packageMessage, type PriceSource, singlePriceLabel, tierPriceLabel, whatsappUrl, QUOTA_NOTE } from "@/data/pricing";
import { cn } from "@/lib/utils";

/**
 * Paket kartları + ayrıntı karşılaştırması.
 * Masaüstü: Kurumsal / Büyüme / Başlangıç. Mobil: Büyüme önce gelir.
 * Fiyatlar yalnızca src/data/pricing.ts'ten okunur.
 */

const MOBILE_ORDER: Record<TierId, string> = {
  buyume: "order-1 lg:order-none",
  baslangic: "order-2 lg:order-none",
  kurumsal: "order-3 lg:order-none"
};

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-slate px-3 py-1 text-xs font-semibold text-white">{children}</span>
  );
}

export function PricingSection({
  family,
  heading,
  intro,
  id = "fiyatlar",
  badge = "Fiyatlar",
  headingLevel = "h2",
  src
}: {
  /** Yalnızca admin önizlemesi: taslak fiyatlar */
  src?: PriceSource;
  family: FamilyId;
  heading?: string;
  intro?: string;
  id?: string;
  badge?: string;
  headingLevel?: "h2" | "h3";
}) {
  const f = (src?.families ?? PRICING)[family];
  const H = headingLevel;
  return (
    <section id={id} className="bg-white py-16 lg:py-24 border-t border-slate/10 scroll-mt-24">
      <div className="mx-auto max-w-container px-6">
        <div className="max-w-2xl">
          <SectionBadge>{badge}</SectionBadge>
          <H className="mt-5 text-3xl lg:text-4xl font-bold leading-tight text-slate">
            {heading ?? `${f.title} paketleri`}
          </H>
          <p className="mt-4 text-base lg:text-lg text-slate/70 leading-relaxed">
            {intro ??
              `Üç net paket. Tutarlar TL ve KDV hariçtir; ödeme dönemi her kartta yazılıdır (${BILLING_LABEL[f.billing]}).`}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {DISPLAY_ORDER.map((id) => (
            <TierCard key={id} family={family} tier={id} src={src} />
          ))}
        </div>

        <PricingNotes notes={[QUOTA_NOTE, ...f.notes]} />
        {f.details.length > 0 && <DetailsComparison family={family} src={src} />}
      </div>
    </section>
  );
}

function TierCard({ family, tier, src }: { family: FamilyId; tier: TierId; src?: PriceSource }) {
  const f = (src?.families ?? PRICING)[family];
  const t = f.tiers[tier];
  const recommended = tier === RECOMMENDED_TIER;
  const name = TIER_NAMES[tier];
  const priceLabel = tierPriceLabel(f, tier);
  const first = firstMonthTotal(t);
  const waMessage = packageMessage(
    f.formLabel,
    name,
    t.setupFee ? `${priceLabel} + ${formatTL(t.setupFee)} kurulum` : priceLabel
  );

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl bg-white p-7",
        MOBILE_ORDER[tier],
        recommended ? "border-2 border-slate shadow-card-lg" : "border border-slate/15 shadow-card"
      )}
      aria-label={`${f.title} — ${name} paketi`}
    >
      {/* Üst kısım: paket adı, fiyat, dönem, hedef müşteri — kartlar arasında hizalı */}
      <div className="flex min-h-[2rem] items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-slate">{name}</h3>
        {recommended && (
          <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-slate">Önerilen</span>
        )}
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-4xl font-bold tracking-tight text-slate tabular-nums">{formatTL(t.price)}</span>
          <span className="text-sm font-semibold text-slate/70">{BILLING_SUFFIX[f.billing]}</span>
        </div>
        <p className="mt-1 text-xs text-slate/60">KDV hariç · {BILLING_LABEL[f.billing]}</p>

        {t.setupFee !== undefined && first !== null && (
          <dl className="mt-4 grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 rounded-xl bg-light px-4 py-3 text-sm">
            <dt className="text-slate/70">Tek seferlik kurulum</dt>
            <dd className="font-semibold text-slate tabular-nums">{formatTL(t.setupFee)}</dd>
            <dt className="text-slate/70">İlk ay toplam (hizmet + kurulum)</dt>
            <dd className="font-bold text-slate tabular-nums">{formatTL(first)}</dd>
          </dl>
        )}

        {t.maintenance !== undefined && (
          <dl className="mt-4 grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 rounded-xl bg-light px-4 py-3 text-sm">
            <dt className="text-slate/70">İsteğe bağlı bakım (2. aydan)</dt>
            <dd className="font-semibold text-slate tabular-nums">{formatTL(t.maintenance)} / ay</dd>
          </dl>
        )}

        <p className="mt-4 text-[15px] leading-relaxed text-slate/80 lg:min-h-[3rem]">{t.audience}</p>
      </div>

      <ul className="mt-6 flex-1 space-y-2.5 border-t border-slate/10 pt-6">
        {t.highlights.map((h) => (
          <li key={h} className="flex items-start gap-3 text-[15px] text-slate">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-slate" aria-hidden />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-2">
        <Link
          href={contactHref(f.formLabel, name)}
          className={cn(
            "inline-flex items-center justify-between gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-bold transition-colors",
            recommended ? "bg-lime text-slate hover:bg-lime/85" : "bg-slate text-white hover:bg-slate/90"
          )}
        >
          {name} paketi için teklif isteyin
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
        <a
          href={whatsappUrl(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm font-semibold text-slate/70 underline-offset-4 hover:text-slate hover:underline"
        >
          WhatsApp&apos;tan sorun
        </a>
      </div>
    </article>
  );
}

export function PricingNotes({ notes }: { notes: string[] }) {
  if (!notes.length) return null;
  return (
    <ul className="mt-8 space-y-1.5 text-sm text-slate/70">
      <li className="font-semibold text-slate">Paket kuralları ve fiyata dahil olmayanlar</li>
      {notes.map((n) => (
        <li key={n} className="flex gap-2">
          <span aria-hidden>–</span>
          <span>{n}</span>
        </li>
      ))}
    </ul>
  );
}

/** Erişilebilir ayrıntı karşılaştırması: masaüstünde tablo, mobilde paket başına liste */
export function DetailsComparison({ family, src }: { family: FamilyId; src?: PriceSource }) {
  const f = (src?.families ?? PRICING)[family];
  return (
    <details className="group mt-8 rounded-2xl border border-slate/15 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-bold text-slate [&::-webkit-details-marker]:hidden">
        Tüm paket ayrıntılarını karşılaştırın
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate/20 text-xl font-light transition-transform group-open:rotate-45"
          aria-hidden
        >
          +
        </span>
      </summary>

      <div className="border-t border-slate/10 px-6 pb-6">
        {/* Masaüstü tablo */}
        <table className="mt-4 hidden w-full table-fixed text-left text-sm md:table">
          <caption className="sr-only">{f.title} paket karşılaştırması</caption>
          <thead>
            <tr className="border-b border-slate/15">
              <th scope="col" className="w-1/4 py-3 pr-4 font-semibold text-slate/70">
                Özellik
              </th>
              {DISPLAY_ORDER.map((id) => (
                <th key={id} scope="col" className="py-3 pr-4 font-bold text-slate">
                  {TIER_NAMES[id]}
                  {id === RECOMMENDED_TIER && <span className="ml-2 rounded-full bg-lime px-2 py-0.5 text-[11px] font-semibold">Önerilen</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate/10 align-top">
              <th scope="row" className="py-3 pr-4 font-semibold text-slate/70">
                Fiyat (KDV hariç)
              </th>
              {DISPLAY_ORDER.map((id) => (
                <td key={id} className="py-3 pr-4 font-semibold text-slate tabular-nums">
                  {tierPriceLabel(f, id)}
                </td>
              ))}
            </tr>
            {f.details.map((r) => (
              <tr key={r.label} className="border-b border-slate/10 align-top last:border-0">
                <th scope="row" className="py-3 pr-4 font-semibold text-slate/70">
                  {r.label}
                </th>
                {DISPLAY_ORDER.map((id) => (
                  <td key={id} className="py-3 pr-4 text-slate">
                    {r.values[id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobil: paket başına liste */}
        <div className="mt-4 space-y-6 md:hidden">
          {(["buyume", "baslangic", "kurumsal"] as TierId[]).map((id) => (
            <div key={id}>
              <h4 className="text-base font-bold text-slate">
                {TIER_NAMES[id]} · <span className="tabular-nums">{tierPriceLabel(f, id)}</span>
              </h4>
              <dl className="mt-2 divide-y divide-slate/10 text-sm">
                {f.details.map((r) => (
                  <div key={r.label} className="grid grid-cols-2 gap-3 py-2">
                    <dt className="text-slate/70">{r.label}</dt>
                    <dd className="text-slate">{r.values[id]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}

/** Tekil fiyatlı hizmet kartı (landing page, Instagram DM, AI telefon, özel projeler) */
export function SinglePriceCard({ id, className, src }: { id: SingleId; className?: string; src?: PriceSource }) {
  const s = (src?.singles ?? SINGLE)[id];
  const label = singlePriceLabel(s);
  return (
    <article className={cn("flex h-full flex-col rounded-2xl border border-slate/15 bg-white p-7 shadow-card", className)}>
      <h3 className="text-xl font-bold text-slate">{s.title}</h3>
      <div className="mt-4">
        {s.startingAt ? (
          <>
            <div className="text-3xl font-bold tracking-tight text-slate tabular-nums">{formatTL(s.price)}&apos;den</div>
            <p className="mt-1 text-xs text-slate/60">başlayan proje bedeli · KDV hariç</p>
          </>
        ) : s.setupFee && s.monthly ? (
          <>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-slate tabular-nums">{formatTL(s.monthly)}</span>
              <span className="text-sm font-semibold text-slate/70">/ ay</span>
            </div>
            <p className="mt-1 text-xs text-slate/60">KDV hariç · aylık</p>
            <dl className="mt-4 grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 rounded-xl bg-light px-4 py-3 text-sm">
              <dt className="text-slate/70">Tek seferlik kurulum</dt>
              <dd className="font-semibold text-slate tabular-nums">{formatTL(s.setupFee)}</dd>
              <dt className="text-slate/70">İlk ay toplam (hizmet + kurulum)</dt>
              <dd className="font-bold text-slate tabular-nums">{formatTL(s.setupFee + s.monthly)}</dd>
            </dl>
          </>
        ) : (
          <>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-slate tabular-nums">{formatTL(s.price)}</span>
              <span className="text-sm font-semibold text-slate/70">{BILLING_SUFFIX[s.billing]}</span>
            </div>
            <p className="mt-1 text-xs text-slate/60">KDV hariç · {BILLING_LABEL[s.billing]}</p>
          </>
        )}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate/80">{s.summary}</p>
      {s.notes.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-slate/70">
          {s.notes.map((n) => (
            <li key={n} className="flex gap-2">
              <span aria-hidden>–</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex flex-col gap-2">
        <Link
          href={contactHref(s.formLabel)}
          className="inline-flex items-center justify-between gap-3 rounded-full bg-slate py-2 pl-6 pr-2 text-sm font-bold text-white transition-colors hover:bg-slate/90"
        >
          Teklif isteyin
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
        <a
          href={whatsappUrl(packageMessage(s.formLabel, undefined, label))}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm font-semibold text-slate/70 underline-offset-4 hover:text-slate hover:underline"
        >
          WhatsApp&apos;tan sorun
        </a>
      </div>
    </article>
  );
}

/** Web bakım — üç seviye, kompakt satırlar */
export function WebMaintenanceRow({ src }: { src?: PriceSource } = {}) {
  const f = (src?.families ?? PRICING)["web-bakim"];
  return (
    <div className="rounded-2xl border border-slate/15 bg-white p-7 shadow-card">
      <h3 className="text-xl font-bold text-slate">{f.title}</h3>
      <p className="mt-1 text-sm text-slate/70">Yayındaki siteniz için aylık bakım. KDV hariç.</p>
      <ul className="mt-5 divide-y divide-slate/10">
        {DISPLAY_ORDER.map((id) => (
          <li key={id} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <span className="font-bold text-slate">{TIER_NAMES[id]}</span>
              {id === RECOMMENDED_TIER && (
                <span className="ml-2 rounded-full bg-lime px-2 py-0.5 text-[11px] font-semibold text-slate">Önerilen</span>
              )}
              <p className="text-sm text-slate/70">{f.tiers[id].audience}</p>
            </div>
            <div className="sm:text-right">
              <span className="block font-bold text-slate tabular-nums whitespace-nowrap">{tierPriceLabel(f, id)}</span>
              <span className="block text-sm text-slate/70">{f.tiers[id].highlights[0]}</span>
            </div>
          </li>
        ))}
      </ul>
      <ul className="mt-3 space-y-1 text-sm text-slate/70">
        {f.notes.map((n) => (
          <li key={n} className="flex gap-2">
            <span aria-hidden>–</span>
            <span>{n}</span>
          </li>
        ))}
      </ul>
      <Link
        href={contactHref(f.formLabel)}
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate underline underline-offset-4 hover:no-underline"
      >
        Web bakım için teklif isteyin <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

/** Web sayfaları için: e-ticaret + landing + bakım bloğu */
export function WebExtrasSection({ src }: { src?: PriceSource } = {}) {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate/10">
      <div className="mx-auto max-w-container px-6">
        <div className="max-w-2xl">
          <SectionBadge>Diğer web hizmetleri</SectionBadge>
          <h2 className="mt-5 text-3xl lg:text-4xl font-bold leading-tight text-slate">Landing page ve web bakım</h2>
          <p className="mt-4 text-base lg:text-lg text-slate/70 leading-relaxed">
            Tek bir kampanya için hızlı bir sayfa ya da yayındaki siteniz için düzenli bakım.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <SinglePriceCard id="landing-page" src={src} />
          <WebMaintenanceRow src={src} />
        </div>
      </div>
    </section>
  );
}

/** Tekil hizmet için başlıklı bölüm */
export function SinglePriceSection({
  id,
  heading,
  intro,
  badge = "Fiyat",
  src
}: {
  src?: PriceSource;
  id: SingleId;
  heading?: string;
  intro?: string;
  badge?: string;
}) {
  const s = (src?.singles ?? SINGLE)[id];
  return (
    <section id="fiyatlar" className="bg-white py-16 lg:py-24 border-t border-slate/10 scroll-mt-24">
      <div className="mx-auto max-w-container px-6 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="max-w-xl">
          <SectionBadge>{badge}</SectionBadge>
          <h2 className="mt-5 text-3xl lg:text-4xl font-bold leading-tight text-slate">{heading ?? `${s.title} fiyatı`}</h2>
          <p className="mt-4 text-base lg:text-lg text-slate/70 leading-relaxed">
            {intro ?? "Tutar TL ve KDV hariçtir. Kurulum ve harici giderler fiyatın hemen yanında yazılıdır."}
          </p>
        </div>
        <SinglePriceCard id={id} src={src} />
      </div>
    </section>
  );
}
