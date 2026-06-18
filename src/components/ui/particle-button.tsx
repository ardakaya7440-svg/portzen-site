"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointerClick } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Extracted from 21st.dev `ikincilbuton` (ParticleButton). On click it bursts
 * a few particles from the button center. Particles are skipped under
 * prefers-reduced-motion. Used for a secondary/playful CTA (revision §3).
 */
interface ParticleButtonProps extends ButtonProps {
  successDuration?: number;
}

function SuccessParticles({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    <AnimatePresence>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed z-[60] h-2 w-2 rounded-full bg-ink"
          style={{ left: centerX, top: centerY }}
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: [0, (i % 2 ? 1 : -1) * (18 + i * 7)],
            y: [0, -(22 + i * 6)],
          }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
        />
      ))}
    </AnimatePresence>
  );
}

export function ParticleButton({
  children,
  onClick,
  successDuration = 800,
  className,
  ...props
}: ParticleButtonProps) {
  const [showParticles, setShowParticles] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!prefersReduced) {
      setShowParticles(true);
      window.setTimeout(() => setShowParticles(false), successDuration);
    }
    onClick?.(e);
  };

  return (
    <>
      {showParticles && <SuccessParticles buttonRef={buttonRef} />}
      <Button
        ref={buttonRef}
        onClick={handleClick}
        className={cn(showParticles && "scale-95", className)}
        {...props}
      >
        {children}
        <MousePointerClick aria-hidden="true" />
      </Button>
    </>
  );
}
