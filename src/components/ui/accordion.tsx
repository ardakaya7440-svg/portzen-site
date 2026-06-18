"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

/**
 * Keyboard-accessible accordion (revision §4) — reskinned from 21st.dev `Faq21`
 * (8-bit) into the neobrutalist system: each item is a bordered block with a
 * hard shadow; native <button> headers with aria-expanded / aria-controls.
 */
export interface AccordionItemData {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [open, setOpen] = React.useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = open === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;
        return (
          <div
            key={item.id}
            className="rounded-base border-3 border-ink bg-paper shadow-brutal"
          >
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
              >
                <span className="text-h3 font-extrabold text-ink">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-md border-3 border-ink bg-brand-yellow"
                >
                  {isOpen ? (
                    <Minus className="size-5 stroke-[3]" />
                  ) : (
                    <Plus className="size-5 stroke-[3]" />
                  )}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="border-t-3 border-ink px-5 py-5 md:px-6"
            >
              <p className="max-w-prose text-body font-medium text-ink">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
