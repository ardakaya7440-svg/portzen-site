"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Tarz bölümleri arasında yapışkan gezinme çubuğu.
 * Galeri ekrandan çıkınca görünür, o an ekrandaki tarzı vurgular.
 */
export function StyleNav({ items, watchId }: { items: { id: string; name: string }[]; watchId: string }) {
  const [visible, setVisible] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);
  const railRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const gallery = document.getElementById(watchId);
    if (!gallery) return;
    const io = new IntersectionObserver(([e]) => setVisible(!e.isIntersecting && e.boundingClientRect.top < 0), {
      threshold: 0
    });
    io.observe(gallery);
    return () => io.disconnect();
  }, [watchId]);

  React.useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  // Etkin çipi görünür tut (mobilde yatay kaydırma)
  React.useEffect(() => {
    if (!active || !railRef.current) return;
    const el = railRef.current.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!el) return;
    const rail = railRef.current;
    rail.scrollTo({ left: el.offsetLeft - rail.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-[68px] z-40 border-b border-slate/10 bg-white/90 backdrop-blur-md transition-all duration-300 lg:top-[76px]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
      )}
      aria-hidden={!visible}
    >
      <nav aria-label="Tarzlar arasında gezin" className="mx-auto max-w-container px-4 sm:px-6">
        <div ref={railRef} className="flex gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((s, i) => (
            <a
              key={s.id}
              data-id={s.id}
              href={`#${s.id}`}
              tabIndex={visible ? 0 : -1}
              aria-current={active === s.id ? "true" : undefined}
              className={cn(
                "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition-colors",
                active === s.id ? "bg-slate text-white" : "bg-light text-slate hover:bg-slate/10"
              )}
            >
              <span className={cn("tabular-nums", active === s.id ? "text-lime" : "text-slate/40")}>{String(i + 1).padStart(2, "0")}</span>
              {s.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
