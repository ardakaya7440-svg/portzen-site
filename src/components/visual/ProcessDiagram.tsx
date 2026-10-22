import { cn } from "@/lib/utils";

/** Numaralı adımlar: masaüstünde yatay akış, mobilde dikey zaman çizelgesi */
export function ProcessDiagram({ steps, className }: { steps: { title: string; text: string }[]; className?: string }) {
  const cols: Record<number, string> = { 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5" };
  return (
    <ol className={cn("relative grid gap-0 md:gap-6", cols[steps.length] ?? "md:grid-cols-4", className)}>
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 pb-8 last:pb-0 md:flex-col md:gap-0 md:pb-0">
          {/* bağlantı çizgisi */}
          {i < steps.length - 1 && (
            <>
              <span className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-slate/20 md:hidden" aria-hidden />
              <span className="absolute left-12 right-[-1.5rem] top-5 hidden h-px bg-slate/20 md:block" aria-hidden />
            </>
          )}
          <span
            className={cn(
              "relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
              i === 0 ? "bg-lime text-slate" : "border border-slate/20 bg-white text-slate"
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="md:mt-5">
            <h3 className="text-lg font-bold text-slate">{s.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-slate/70">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
