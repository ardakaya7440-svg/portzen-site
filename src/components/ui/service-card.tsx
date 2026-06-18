"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Reskinned from 21st.dev `Services21` (cva color variants + framer-motion
 * hover + decorative corner image). Kept: the colored cards and the motion
 * lift. Changed: neobrutalist border/shadow, Montserrat, RU content, the photo
 * now sits in its own bordered frame, and motion is disabled under
 * prefers-reduced-motion.
 */
const cardVariants = cva(
  "group relative flex h-full flex-col gap-5 rounded-base border-3 border-ink p-6 shadow-brutal",
  {
    variants: {
      color: {
        blue: "bg-brand-blue text-paper",
        pink: "bg-brand-pink text-ink",
        green: "bg-brand-green text-ink",
      },
    },
    defaultVariants: { color: "blue" },
  },
);

export interface ServiceCardProps extends VariantProps<typeof cardVariants> {
  title: string;
  description: string;
  points: string[];
  image?: { src: string; alt: string };
  ctaHref: string;
}

export function ServiceCard({
  color,
  title,
  description,
  points,
  image,
  ctaHref,
}: ServiceCardProps) {
  const onPaper = color === "blue"; // blue uses light text
  const subtext = onPaper ? "text-paper" : "text-ink/80";
  const rule = onPaper ? "border-paper/40" : "border-ink/25";

  return (
    <motion.article
      className={cn(cardVariants({ color }))}
      whileHover={{ y: -4, x: -4 }}
      transition={{ duration: 0.2, ease: [0.2, 0.9, 0.3, 1] }}
    >
      {image && (
        <div className="overflow-hidden rounded-md border-3 border-ink bg-paper">
          <Image
            src={image.src}
            alt={image.alt}
            width={640}
            height={800}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <h3 className="text-h3 font-extrabold">{title}</h3>
      <p className={cn("text-body font-medium", subtext)}>{description}</p>

      <ul className={cn("mt-auto flex flex-col gap-2 border-t-3 pt-4 text-small font-semibold", rule)}>
        {points.map((p) => (
          <li key={p} className="flex gap-2.5">
            <span aria-hidden="true">→</span>
            {p}
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        aria-label={`Подробнее — ${title}`}
        className="flex items-center gap-2 text-small font-extrabold uppercase tracking-[0.04em] underline-offset-4 group-hover:underline"
      >
        Подробнее
        <ArrowRight className="size-4 stroke-[3] transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </motion.article>
  );
}
