"use client";

import Link from "next/link";
import { serviceContents } from "@/lib/content";

export function ServiceGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {serviceContents.map((service) => (
        <Link
          key={service.slug}
          href={service.href}
          className="group flex flex-col rounded-[2rem] p-6 transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,102,255,0.25)";
            (e.currentTarget as HTMLElement).style.background = "rgba(0,102,255,0.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
          }}
        >
          <span
            className="mb-3 inline-block text-[9px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "rgba(0,170,255,0.65)" }}
          >
            {service.shortTitle}
          </span>
          <h3 className="mb-2 text-base font-bold leading-snug" style={{ color: "rgba(255,255,255,0.92)" }}>
            {service.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
            {service.description}
          </p>
          <span
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-colors duration-200"
            style={{ color: "rgba(0,170,255,0.55)" }}
          >
            İncele
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
