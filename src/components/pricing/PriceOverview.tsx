import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type FamilyId, BILLING_LABEL, DISPLAY_ORDER, PRICING, RECOMMENDED_TIER, SINGLE, TIER_NAMES, firstMonthTotal, formatTL, singlePriceLabel, type PriceSource } from "@/data/pricing";

const ROWS: FamilyId[] = [
  "sosyal-medya",
  "kisa-video",
  "ai-reklam-filmi",
  "reklam-yonetimi",
  "ai-musteri-asistani",
  "is-otomasyonu",
  "kurumsal-web-sitesi",
  "e-ticaret"
];

/** Tüm hizmetlerin paket fiyatlarını tek tabloda özetler (ana sayfa). */
export function PriceOverview({ src }: { src?: PriceSource } = {}) {
  const FAM = src?.families ?? PRICING;
  const SGL = src?.singles ?? SINGLE;
  return (
    <div>
      {/* Masaüstü tablo */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate/15">
        <table className="w-full text-left text-[15px]">
          <caption className="sr-only">PORTZEN paket fiyatları, KDV hariç</caption>
          <thead className="bg-light">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold text-slate/70">
                Hizmet
              </th>
              {DISPLAY_ORDER.map((id) => (
                <th key={id} scope="col" className="px-6 py-4 font-bold text-slate">
                  {TIER_NAMES[id]}
                  {id === RECOMMENDED_TIER && (
                    <span className="ml-2 rounded-full bg-lime px-2 py-0.5 text-[11px] font-semibold">Önerilen</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((fid) => {
              const f = FAM[fid];
              return (
                <tr key={fid} className="border-t border-slate/10 align-top">
                  <th scope="row" className="px-6 py-4 font-semibold text-slate">
                    <Link href={`/fiyatlar#${fid}`} className="hover:underline underline-offset-4">
                      {f.title.replace(/ \(.*\)$/, "")}
                    </Link>
                    <span className="block text-xs font-normal text-slate/60">{BILLING_LABEL[f.billing]}</span>
                  </th>
                  {DISPLAY_ORDER.map((id) => {
                    const t = f.tiers[id];
                    const first = firstMonthTotal(t);
                    return (
                      <td key={id} className={`px-6 py-4 tabular-nums ${id === RECOMMENDED_TIER ? "bg-lime/15" : ""}`}>
                        <span className="font-bold text-slate">{formatTL(t.price)}</span>
                        {t.setupFee !== undefined && first !== null && (
                          <span className="block text-xs text-slate/70">
                            + {formatTL(t.setupFee)} kurulum · ilk ay {formatTL(first)}
                          </span>
                        )}
                        {t.maintenance !== undefined && (
                          <span className="block text-xs text-slate/70">bakım isteğe bağlı: {formatTL(t.maintenance)} / ay</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobil: hizmet başına kart */}
      <div className="grid gap-4 lg:hidden">
        {ROWS.map((fid) => {
          const f = FAM[fid];
          return (
            <Link key={fid} href={`/fiyatlar#${fid}`} className="rounded-2xl border border-slate/15 p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-bold text-slate">{f.title.replace(/ \(.*\)$/, "")}</span>
                <span className="text-xs text-slate/60">{BILLING_LABEL[f.billing]}</span>
              </div>
              <dl className="mt-3 grid grid-cols-3 gap-2 text-sm">
                {(["baslangic", "buyume", "kurumsal"] as const).map((id) => (
                  <div key={id} className={`rounded-xl px-3 py-2 ${id === RECOMMENDED_TIER ? "bg-lime/25" : "bg-light"}`}>
                    <dt className="text-xs text-slate/70">{TIER_NAMES[id]}</dt>
                    <dd className="font-bold text-slate tabular-nums">{formatTL(f.tiers[id].price).replace(" TL", "")}</dd>
                  </div>
                ))}
              </dl>
              {fid === "ai-musteri-asistani" && (
                <p className="mt-2 text-xs text-slate/70">Aylık ücrete ek tek seferlik kurulum bedeli vardır.</p>
              )}
            </Link>
          );
        })}
        <p className="text-xs text-slate/60">Tutarlar TL&apos;dir.</p>
      </div>

      <p className="mt-6 text-sm text-slate/70 leading-relaxed">
        Diğer hizmetler: landing page {singlePriceLabel(SGL["landing-page"])}; Instagram DM otomasyonu{" "}
        {singlePriceLabel(SGL["instagram-dm"])}; AI telefon asistanı {singlePriceLabel(SGL["ai-telefon-asistani"])}{" "}
        (dakika ve hat gideri ayrıca); özel web uygulaması {formatTL(SGL["ozel-web-uygulamasi"].price)}&apos;den, mobil
        uygulama {formatTL(SGL["mobil-uygulama"].price)}&apos;den, mobil oyun {formatTL(SGL["mobil-oyun"].price)}&apos;den
        başlar. Tüm tutarlar KDV hariçtir. Paketlerdeki adetler o paketin toplam hakkıdır; alt paket adetleri üst pakete
        eklenmez.
      </p>

      <Link
        href="/fiyatlar"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime py-2 pl-6 pr-2 text-sm font-bold text-slate hover:bg-lime/85 transition-colors"
      >
        Tüm paketler ve kapsamlar
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}
