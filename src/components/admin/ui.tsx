import Link from "next/link";
import { cn } from "@/lib/utils";

/** Admin paneli ortak parçaları (sunucu bileşenleri; JS gerektirmez) */

export function PageHead({ title, intro, actions }: { title: string; intro?: React.ReactNode; actions?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 border-b border-slate/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold text-slate lg:text-3xl">{title}</h1>
        {intro && <div className="mt-2 text-[15px] leading-relaxed text-slate/70">{intro}</div>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Flash({ ok, err }: { ok?: string | string[]; err?: string | string[] }) {
  const o = Array.isArray(ok) ? ok[0] : ok;
  const e = Array.isArray(err) ? err[0] : err;
  if (!o && !e) return null;
  return (
    <div
      role={e ? "alert" : "status"}
      className={cn(
        "mt-6 rounded-xl border px-4 py-3 text-sm font-semibold",
        e ? "border-red-300 bg-red-50 text-red-800" : "border-emerald-300 bg-emerald-50 text-emerald-900"
      )}
    >
      {e ?? o}
    </div>
  );
}

const BTN = {
  primary: "bg-slate text-white hover:bg-slate/90",
  accent: "bg-lime text-slate hover:bg-lime/85",
  ghost: "border border-slate/20 bg-white text-slate hover:bg-light",
  danger: "border border-red-300 bg-white text-red-700 hover:bg-red-50"
} as const;
export type BtnTone = keyof typeof BTN;
export const btn = (tone: BtnTone = "ghost", size: "sm" | "md" = "md") =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate disabled:opacity-50",
    size === "sm" ? "min-h-[36px] px-3.5 text-[13px]" : "min-h-[44px] px-5 text-sm",
    BTN[tone]
  );

export function LinkButton({ href, tone = "ghost", size = "md", children }: { href: string; tone?: BtnTone; size?: "sm" | "md"; children: React.ReactNode }) {
  return (
    <Link href={href} className={btn(tone, size)}>
      {children}
    </Link>
  );
}

/** Sunucu işlemine giden tek düğmeli form */
export function ActionButton({
  action,
  fields,
  tone = "ghost",
  size = "sm",
  label,
  children
}: {
  action: (fd: FormData) => Promise<void>;
  fields: Record<string, string | number>;
  tone?: BtnTone;
  size?: "sm" | "md";
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <form action={action} className="inline">
      {Object.entries(fields).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={String(v)} />
      ))}
      <button type="submit" className={btn(tone, size)} aria-label={label}>
        {children}
      </button>
    </form>
  );
}

/** JavaScript gerektirmeyen iki adımlı onay (açılır kutu) */
export function ConfirmAction({
  action,
  fields,
  label,
  confirmText,
  question,
  tone = "danger"
}: {
  action: (fd: FormData) => Promise<void>;
  fields: Record<string, string | number>;
  label: string;
  confirmText: string;
  question: string;
  tone?: BtnTone;
}) {
  return (
    <details className="group relative inline-block">
      <summary className={cn(btn(tone, "sm"), "list-none [&::-webkit-details-marker]:hidden")}>{label}</summary>
      <div className="absolute right-0 z-20 mt-2 w-64 rounded-xl border border-slate/15 bg-white p-4 text-sm shadow-card-lg">
        <p className="text-slate">{question}</p>
        <div className="mt-3">
          <ActionButton action={action} fields={fields} tone={tone}>
            {confirmText}
          </ActionButton>
        </div>
      </div>
    </details>
  );
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, [string, string]> = {
    published: ["Yayında", "bg-lime text-slate"],
    draft: ["Taslak", "bg-amber-100 text-amber-900"],
    archived: ["Arşiv", "bg-light text-slate/70"],
    hidden: ["Gizli", "bg-light text-slate/70"],
    visible: ["Görünür", "bg-lime text-slate"]
  };
  const [label, cls] = map[status] ?? [status, "bg-light text-slate"];
  return <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold", cls)}>{label}</span>;
}

export function Field({
  label,
  hint,
  htmlFor,
  required,
  children
}: {
  label: string;
  hint?: React.ReactNode;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-bold text-slate">
        {label}
        {required ? <span className="text-red-700"> *</span> : <span className="font-semibold text-slate/50"> (isteğe bağlı)</span>}
      </label>
      {children}
      {hint && <p className="text-xs leading-relaxed text-slate/60">{hint}</p>}
    </div>
  );
}

export const input =
  "w-full rounded-xl border border-slate/20 bg-white px-3.5 py-2.5 text-[15px] text-slate placeholder:text-slate/40 focus:border-slate focus:outline-none focus:ring-2 focus:ring-lime";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-2xl border border-slate/15 bg-white p-5 lg:p-6", className)}>{children}</div>;
}

export function Empty({ children }: { children: React.ReactNode }) {
  return <p className="rounded-2xl border border-dashed border-slate/20 bg-light px-5 py-8 text-center text-sm text-slate/70">{children}</p>;
}

export function trDate(v: string | null | undefined, withTime = false) {
  if (!v) return "—";
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return v;
  return d.toLocaleString("tr-TR", {
    timeZone: "Europe/Istanbul",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    ...(withTime ? { hour: "2-digit", minute: "2-digit" } : {})
  });
}
