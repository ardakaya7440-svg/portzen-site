import { cn } from "@/lib/utils";

/**
 * Reskinned from 21st.dev `Process21` (numbered checkpoints + connecting line,
 * horizontal on desktop / vertical on mobile). Neobrutalist badges + Montserrat
 * roman numerals; the dashed line becomes a solid rule (revision §3).
 * `tone="light"` renders text/line in paper for dark/colored sections.
 */
export interface TimelineStep {
  icon: string;
  title: string;
  description: string;
}

const badgeColors = [
  "bg-brand-yellow",
  "bg-brand-pink",
  "bg-brand-green",
  "bg-brand-orange",
];

export function Timeline({
  steps,
  tone = "dark",
  className,
}: {
  steps: TimelineStep[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className={cn(
          "absolute left-0 right-0 top-8 hidden h-[3px] md:block",
          light ? "bg-paper" : "bg-ink",
        )}
      />
      <ol className="relative flex flex-col gap-10 md:flex-row md:gap-6">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative flex flex-1 flex-col items-start text-left md:items-center md:text-center"
          >
            <div
              className={cn(
                "relative z-10 mb-5 grid size-16 place-items-center rounded-base border-3 border-ink text-h3 font-black text-ink shadow-brutal-sm",
                badgeColors[i % badgeColors.length],
              )}
            >
              {step.icon}
            </div>
            <h3
              className={cn(
                "mb-2 text-h3 font-extrabold",
                light ? "text-paper" : "text-ink",
              )}
            >
              {step.title}
            </h3>
            <p
              className={cn(
                "max-w-[260px] text-body font-medium",
                light ? "text-paper" : "text-ink/80",
              )}
            >
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
