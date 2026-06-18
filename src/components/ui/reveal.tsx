"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Scroll-reveal: fade + 14px rise once, on enter (brief §3).
 * Reduced-motion is handled in globals.css (the [data-reveal] offset is
 * neutralised under prefers-reduced-motion, so content is always visible).
 *
 * Replaces the off-brand 21st.dev `Reveal21` (a full-screen scroll-hijack
 * "ScrollAdventure" that does not fit a minimal-editorial landing).
 */
interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  /** Delay in ms before the transition starts after entering view. */
  delay?: number;
}

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  style,
  children,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver is unavailable, just show.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={cn(visible && "is-visible", className)}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
