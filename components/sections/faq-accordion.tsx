"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="flex w-full items-start justify-between gap-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold leading-snug" style={{ color: "rgba(255,255,255,0.88)" }}>
              {item.question}
            </span>
            <span
              className="mt-0.5 shrink-0 text-lg leading-none transition-transform duration-200"
              style={{
                color: "rgba(0,170,255,0.70)",
                transform: open === i ? "rotate(45deg)" : "none",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
