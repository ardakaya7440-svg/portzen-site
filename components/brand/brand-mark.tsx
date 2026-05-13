import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className, title = "PORTZEN" }: BrandMarkProps) {
  const id = useId().replace(/:/g, "");
  const g1 = `${id}-g1`;
  const g2 = `${id}-g2`;
  const g3 = `${id}-g3`;
  const glow = `${id}-glow`;

  return (
    <svg
      aria-label={`${title} logomark`}
      className={cn("h-10 w-10 shrink-0", className)}
      fill="none"
      role="img"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={g1} x1="8" y1="8" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d1830" />
          <stop offset="1" stopColor="#060d1c" />
        </linearGradient>
        <linearGradient id={g2} x1="28" y1="28" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0066ff" />
          <stop offset="1" stopColor="#00aaff" />
        </linearGradient>
        <linearGradient id={g3} x1="28" y1="28" x2="92" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.9)" />
          <stop offset="1" stopColor="rgba(200,220,255,0.75)" />
        </linearGradient>
        <filter id={glow} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background */}
      <rect x="4" y="4" width="120" height="120" rx="28" fill={`url(#${g1})`} />
      <rect x="4.5" y="4.5" width="119" height="119" rx="27.5"
        stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <rect x="5" y="5" width="118" height="118" rx="27"
        stroke="rgba(0,102,255,0.2)" strokeWidth="0.5" />

      {/* Accent dot — top right corner */}
      <circle cx="94" cy="36" r="5" fill={`url(#${g2})`} opacity="0.9" />
      <circle cx="94" cy="36" r="9" fill="rgba(0,102,255,0.15)" />

      {/* "P" letterform — geometric, sharp */}
      {/* Vertical stem */}
      <rect x="30" y="30" width="12" height="68" rx="3" fill={`url(#${g3})`} />

      {/* Top horizontal bar */}
      <rect x="30" y="30" width="44" height="12" rx="3" fill={`url(#${g3})`} />

      {/* Middle bar (shorter) */}
      <rect x="30" y="66" width="38" height="11" rx="3" fill={`url(#${g3})`} />

      {/* Right curve of P — filled rectangle */}
      <rect x="74" y="30" width="11" height="48" rx="3" fill={`url(#${g3})`} opacity="0.9" />

      {/* Accent line on P stem — electric blue */}
      <rect x="30" y="30" width="4" height="68" rx="3" fill={`url(#${g2})`} opacity="0.6" />

      {/* Bottom accent bar */}
      <rect x="30" y="86" width="28" height="3" rx="1.5" fill={`url(#${g2})`} opacity="0.4" />
    </svg>
  );
}
