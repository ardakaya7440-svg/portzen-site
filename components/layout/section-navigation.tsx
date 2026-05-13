"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type NavigationItem = {
  id: string;
  label: string;
};

export function SectionNavigation({ items }: { items: NavigationItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-32% 0px -32% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [items]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <nav
        aria-label="Sayfa bolumleri"
        className="pointer-events-auto rounded-[1.75rem] border border-white/10 bg-[rgba(9,14,24,0.72)] px-3 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] ring-1 ring-white/6 backdrop-blur-xl"
      >
        <ul className="flex flex-col items-center gap-3">
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <li key={item.id} className="group relative">
                <a
                  aria-current={isActive ? "true" : undefined}
                  aria-label={item.label}
                  className={cn(
                    "relative flex items-center justify-center rounded-full transition-all duration-300",
                    isActive ? "h-10 w-3" : "h-4 w-4 hover:scale-110"
                  )}
                  href={`#${item.id}`}
                >
                  <span
                    className={cn(
                      "block rounded-full border border-white/18 bg-white/18 transition-all duration-300",
                      isActive
                        ? "h-10 w-2.5 bg-white shadow-[0_0_24px_rgba(255,255,255,0.28)]"
                        : "h-2.5 w-2.5 hover:bg-white/42"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
