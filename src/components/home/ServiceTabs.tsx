"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceTab {
  title: string;
  description: string;
  href: string;
}

export function ServiceTabs({ items }: { items: ServiceTab[] }) {
  const [active, setActive] = React.useState(0);
  const current = items[active];

  return (
    <div className="xl:grid xl:grid-cols-[1fr_2fr] xl:gap-12">
      <div className="hidden xl:block" />
      <div className="flex flex-col gap-6">
        <ul className="flex flex-col" role="tablist">
          {items.map((it, i) => (
            <li
              key={it.href}
              className="border-t border-slate/10 py-6 lg:py-8 grid gap-3 lg:grid-cols-[5fr_7fr] lg:items-center"
            >
              <button
                type="button"
                role="tab"
                aria-selected={i === active}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "text-left text-2xl lg:text-3xl font-bold leading-tight transition-colors",
                  i === active ? "text-slate" : "text-slate/45 hover:text-slate/80"
                )}
              >
                {it.title}
              </button>
              <p className="text-slate/70 text-[15px] leading-relaxed">
                {it.description}{" "}
                <Link href={it.href} className="text-slate font-semibold underline underline-offset-4 hover:no-underline whitespace-nowrap">
                  Detay →
                </Link>
              </p>
            </li>
          ))}
        </ul>

        <Link
          href={current.href}
          className="self-start inline-flex items-center gap-3 rounded-full border border-slate/20 pl-6 pr-2 py-2 text-sm font-bold text-slate hover:bg-slate hover:text-white transition-colors"
        >
          {current.title} sayfası
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-slate">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
