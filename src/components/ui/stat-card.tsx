import { cn } from "@/lib/utils";

/**
 * Reskinned from 21st.dev `Stats21` (8-bit metric dashboard with progress
 * bars). The 8-bit retro layout is kept — icon tag, big value, change line and
 * a chunky progress bar — but rendered in Montserrat on the neobrutalist
 * surface (revision §3: "8-bit kalsın", §1: only Montserrat).
 */
export interface MetricCard {
  icon: string;
  title: string;
  value: string;
  change: string;
  progress: number;
}

const barColors = [
  "bg-brand-yellow",
  "bg-brand-green",
  "bg-brand-pink",
  "bg-brand-blue",
];

export function StatCard({
  metric,
  index = 0,
}: {
  metric: MetricCard;
  index?: number;
}) {
  return (
    <div className="rounded-base border-3 border-ink bg-paper p-6 shadow-brutal">
      <div className="flex items-center justify-between">
        <span className="text-small font-bold uppercase tracking-[0.06em] text-ink/70">
          {metric.title}
        </span>
        <span className="grid h-8 min-w-8 place-items-center rounded-md border-3 border-ink bg-ink px-2 text-small font-black text-paper">
          {metric.icon}
        </span>
      </div>
      <div className="mt-3 text-[clamp(2.25rem,1.6rem+2.4vw,3.25rem)] font-black leading-none tracking-tight text-ink">
        {metric.value}
      </div>
      <p className="mt-1 text-small font-bold text-ink/70">{metric.change}</p>
      {/* Chunky 8-bit-style progress bar */}
      <div
        className="mt-4 h-4 w-full overflow-hidden rounded-sm border-3 border-ink bg-paper"
        role="progressbar"
        aria-valuenow={metric.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${metric.title}: ${metric.progress}%`}
      >
        <div
          className={cn("h-full", barColors[index % barColors.length])}
          style={{ width: `${metric.progress}%` }}
        />
      </div>
    </div>
  );
}
