"use client";

import * as React from "react";
import { useFormState, useFormStatus } from "react-dom";
import type { PriceData, TierId } from "@/data/pricing";
import { savePriceDraftAction } from "../../../app/admin/actions";
import { btn, input } from "./ui";
import { cn } from "@/lib/utils";

export interface FamilyMeta {
  id: string;
  title: string;
  billingLabel: string;
  billingSuffix: string;
  tiers: { id: TierId; name: string; hasSetup: boolean; hasMaint: boolean }[];
}
export interface SingleMeta {
  id: string;
  title: string;
  billingLabel: string;
  billingSuffix: string;
  startingAt: boolean;
  hasSetup: boolean;
  hasMonthly: boolean;
  /** Kurulum + aylık hizmetlerde ana fiyatın türetildiği alan */
  derived: "monthly" | "setupFee" | null;
}

const tl = (n: number) => `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} TL`;
const valid = (n: unknown) => typeof n === "number" && Number.isInteger(n) && n > 0 && n <= 10_000_000;

function Amount({
  id,
  label,
  value,
  base,
  suffix,
  readOnly,
  onChange
}: {
  id: string;
  label: string;
  value: number | undefined;
  base: number | undefined;
  suffix?: string;
  readOnly: boolean;
  onChange: (v: number) => void;
}) {
  const changed = base !== undefined && value !== base;
  const bad = !valid(value);
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-bold text-slate/70">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          value={Number.isFinite(value) ? value : ""}
          readOnly={readOnly}
          aria-invalid={bad || undefined}
          onChange={(e) => onChange(e.target.value === "" ? NaN : Math.round(Number(e.target.value)))}
          className={cn(input, "pr-12 tabular-nums", changed && "border-amber-500 bg-amber-50", bad && "border-red-500 bg-red-50", readOnly && "bg-light")}
        />
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate/50">TL</span>
      </div>
      <p className="min-h-[1rem] text-[11px] text-slate/60">
        {bad ? (
          <span className="font-semibold text-red-700">Pozitif tam sayı girin</span>
        ) : changed ? (
          <>
            Yayındaki: <span className="tabular-nums line-through">{tl(base!)}</span>
          </>
        ) : (
          suffix
        )}
      </p>
    </div>
  );
}

function SaveButtons({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <>
      <button type="submit" name="intent" value="save" disabled={disabled || pending} className={btn("ghost")}>
        {pending ? "Kaydediliyor…" : "Taslağı kaydet"}
      </button>
      <button type="submit" name="intent" value="preview" disabled={disabled || pending} className={btn("primary")}>
        Kaydet ve önizle
      </button>
    </>
  );
}

export function PriceEditor({
  versionId,
  initial,
  published,
  note,
  families,
  singles,
  readOnly
}: {
  versionId: number;
  initial: PriceData;
  published: PriceData | null;
  note: string | null;
  families: FamilyMeta[];
  singles: SingleMeta[];
  readOnly: boolean;
}) {
  const [data, setData] = React.useState<PriceData>(initial);
  const [saved, setSaved] = React.useState(JSON.stringify(initial));
  const [state, action] = useFormState(savePriceDraftAction, undefined);
  const dirty = JSON.stringify(data) !== saved;

  React.useEffect(() => {
    if (state?.saved) setSaved(JSON.stringify(data));
    // yalnızca kayıt sonucu geldiğinde
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  React.useEffect(() => {
    if (!dirty || readOnly) return;
    const h = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty, readOnly]);

  const setFam = (fid: string, tid: TierId, key: "price" | "setupFee" | "maintenance", v: number) =>
    setData((d) => {
      const n = structuredClone(d);
      (n.families as Record<string, Record<string, Record<string, number>>>)[fid][tid][key] = v;
      return n;
    });
  const setSingle = (sid: string, key: "price" | "setupFee" | "monthly", v: number) =>
    setData((d) => {
      const n = structuredClone(d);
      const row = (n.singles as Record<string, Record<string, number>>)[sid];
      row[key] = v;
      const meta = singles.find((x) => x.id === sid);
      if (meta?.derived && key === meta.derived) row.price = v;
      return n;
    });

  const fam = (fid: string, tid: TierId) => (data.families as Record<string, Record<string, { price: number; setupFee?: number; maintenance?: number }>>)[fid][tid];
  const pubFam = (fid: string, tid: TierId) =>
    (published?.families as Record<string, Record<string, { price: number; setupFee?: number; maintenance?: number }>> | undefined)?.[fid]?.[tid];
  const sgl = (sid: string) => (data.singles as Record<string, { price: number; setupFee?: number; monthly?: number }>)[sid];
  const pubSgl = (sid: string) => (published?.singles as Record<string, { price: number; setupFee?: number; monthly?: number }> | undefined)?.[sid];

  let invalid = 0;
  let changes = 0;
  for (const f of families)
    for (const t of f.tiers) {
      const v = fam(f.id, t.id);
      const p = pubFam(f.id, t.id);
      for (const k of ["price", "setupFee", "maintenance"] as const) {
        if (v[k] === undefined) continue;
        if (!valid(v[k])) invalid++;
        if (p && p[k] !== v[k]) changes++;
      }
    }
  for (const s of singles) {
    const v = sgl(s.id);
    const p = pubSgl(s.id);
    for (const k of ["price", "setupFee", "monthly"] as const) {
      if (v[k] === undefined) continue;
      if (s.hasSetup && s.hasMonthly && k === "price") continue;
      if (!valid(v[k])) invalid++;
      if (p && p[k] !== v[k]) changes++;
    }
  }

  return (
    <form action={action} className="mt-6">
      <input type="hidden" name="id" value={versionId} />
      <input type="hidden" name="data" value={JSON.stringify(data)} />

      <div className="sticky top-0 z-10 -mx-4 mb-6 flex flex-col gap-3 border-b border-slate/10 bg-light/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate/80" aria-live="polite">
          <span className="font-bold text-slate">{changes}</span> tutar yayındaki sürümden farklı
          {invalid > 0 && <span className="ml-2 font-bold text-red-700">· {invalid} geçersiz alan</span>}
          {dirty && !readOnly && <span className="ml-2 font-semibold text-amber-800">· kaydedilmemiş değişiklik var</span>}
          {!dirty && state?.saved && <span className="ml-2 font-semibold text-emerald-800">· kaydedildi</span>}
        </p>
        {!readOnly && (
          <div className="flex flex-wrap gap-2">
            <SaveButtons disabled={invalid > 0} />
          </div>
        )}
      </div>

      {state?.errors && state.errors.length > 0 && (
        <ul role="alert" className="mb-6 list-disc rounded-xl border border-red-300 bg-red-50 py-3 pl-8 pr-4 text-sm text-red-800">
          {state.errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}

      <div className="mb-6 max-w-xl">
        <label htmlFor="note" className="text-sm font-bold text-slate">
          Sürüm notu <span className="font-semibold text-slate/50">(isteğe bağlı)</span>
        </label>
        <input id="note" name="note" defaultValue={note ?? ""} maxLength={200} readOnly={readOnly} className={cn(input, "mt-1.5")} placeholder="Örn. 2027 fiyat güncellemesi" />
      </div>

      <div className="flex flex-col gap-5">
        {families.map((f) => (
          <fieldset key={f.id} className="rounded-2xl border border-slate/15 bg-white p-5 lg:p-6">
            <legend className="sr-only">{f.title}</legend>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-bold text-slate">{f.title}</h2>
              <span className="text-xs font-semibold text-slate/60">Ödeme: {f.billingLabel} · KDV hariç</span>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {f.tiers.map((t) => {
                const v = fam(f.id, t.id);
                const p = pubFam(f.id, t.id);
                const first = t.hasSetup && valid(v.price) && valid(v.setupFee) ? v.price + (v.setupFee ?? 0) : null;
                return (
                  <div key={t.id} className="rounded-xl bg-light p-4">
                    <h3 className="text-sm font-bold text-slate">{t.name}</h3>
                    <div className="mt-3 flex flex-col gap-3">
                      <Amount
                        id={`${f.id}-${t.id}-price`}
                        label={f.billingSuffix === "/ ay" ? "Aylık bedel" : "Paket bedeli"}
                        value={v.price}
                        base={p?.price}
                        suffix={f.billingSuffix}
                        readOnly={readOnly}
                        onChange={(n) => setFam(f.id, t.id, "price", n)}
                      />
                      {t.hasSetup && (
                        <Amount
                          id={`${f.id}-${t.id}-setup`}
                          label="Tek seferlik kurulum"
                          value={v.setupFee}
                          base={p?.setupFee}
                          readOnly={readOnly}
                          onChange={(n) => setFam(f.id, t.id, "setupFee", n)}
                        />
                      )}
                      {t.hasMaint && (
                        <Amount
                          id={`${f.id}-${t.id}-maint`}
                          label="İsteğe bağlı bakım (2. aydan)"
                          value={v.maintenance}
                          base={p?.maintenance}
                          suffix="/ ay"
                          readOnly={readOnly}
                          onChange={(n) => setFam(f.id, t.id, "maintenance", n)}
                        />
                      )}
                      {t.hasSetup && (
                        <p className="rounded-lg bg-white px-3 py-2 text-sm">
                          <span className="text-slate/70">İlk ay toplam: </span>
                          <output className="font-bold text-slate tabular-nums">{first !== null ? tl(first) : "—"}</output>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </fieldset>
        ))}

        <fieldset className="rounded-2xl border border-slate/15 bg-white p-5 lg:p-6">
          <legend className="sr-only">Tekil hizmetler</legend>
          <h2 className="text-lg font-bold text-slate">Tekil hizmetler</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {singles.map((s) => {
              const v = sgl(s.id);
              const p = pubSgl(s.id);
              const both = s.hasSetup && s.hasMonthly;
              const first = both && valid(v.setupFee) && valid(v.monthly) ? (v.setupFee ?? 0) + (v.monthly ?? 0) : null;
              return (
                <div key={s.id} className="rounded-xl bg-light p-4">
                  <h3 className="text-sm font-bold text-slate">{s.title}</h3>
                  <div className="mt-3 flex flex-col gap-3">
                    {both ? (
                      <>
                        <Amount id={`${s.id}-setup`} label="Tek seferlik kurulum" value={v.setupFee} base={p?.setupFee} readOnly={readOnly} onChange={(n) => setSingle(s.id, "setupFee", n)} />
                        <Amount id={`${s.id}-monthly`} label="Aylık ücret" value={v.monthly} base={p?.monthly} suffix="/ ay" readOnly={readOnly} onChange={(n) => setSingle(s.id, "monthly", n)} />
                        <p className="rounded-lg bg-white px-3 py-2 text-sm">
                          <span className="text-slate/70">İlk ay toplam: </span>
                          <output className="font-bold text-slate tabular-nums">{first !== null ? tl(first) : "—"}</output>
                        </p>
                      </>
                    ) : (
                      <Amount
                        id={`${s.id}-price`}
                        label={s.startingAt ? "Başlangıç bedeli (…'den başlayan)" : "Bedel"}
                        value={v.price}
                        base={p?.price}
                        suffix={s.startingAt ? "başlayan proje bedeli" : s.billingSuffix}
                        readOnly={readOnly}
                        onChange={(n) => setSingle(s.id, "price", n)}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </fieldset>
      </div>
    </form>
  );
}
