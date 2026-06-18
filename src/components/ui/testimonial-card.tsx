import { cn } from "@/lib/utils";

/**
 * Reskinned from 21st.dev `Testimonials21` (Card + Avatar bento). Per the brief
 * the face avatar is replaced by an initial monogram; neobrutalist card on a
 * colored fill (revision §3).
 */
export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  initial: string;
}

export function TestimonialCard({
  data,
  className,
  fill = "paper",
}: {
  data: TestimonialData;
  className?: string;
  fill?: "paper" | "yellow";
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col justify-between rounded-base border-3 border-ink p-7 shadow-brutal md:p-8",
        fill === "yellow" ? "bg-brand-yellow" : "bg-paper",
        className,
      )}
    >
      <blockquote className="text-h3 font-extrabold leading-snug text-ink">
        «{data.quote}»
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t-3 border-ink pt-5">
        <span
          aria-hidden="true"
          className="grid size-12 shrink-0 place-items-center rounded-md border-3 border-ink bg-ink text-body font-black text-paper"
        >
          {data.initial}
        </span>
        <span className="text-small font-semibold text-ink">
          <span className="font-extrabold">{data.name}</span>, {data.role}
        </span>
      </figcaption>
    </figure>
  );
}
