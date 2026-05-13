import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("relative overflow-hidden scroll-mt-28 py-16 sm:py-20 lg:py-24", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <span
          className={cn(
            "mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]",
            tone === "default" &&
              "border border-accent/20 bg-accent-soft text-[#4f68b4]",
            tone === "inverse" &&
              "border border-white/12 bg-white/6 text-white/78"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
          tone === "default" && "text-[#0d1726]",
          tone === "inverse" && "text-white"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-7 sm:text-lg",
            tone === "default" && "text-muted-foreground",
            tone === "inverse" && "text-white/68"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
