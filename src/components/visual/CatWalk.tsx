"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * "Nasıl çalışıyoruz" maskotu: ağzında kırmızı bayrakla süreç çizgisinde yürüyen kedi.
 * - Geçtiği yer yeşile döner, geçtiği adım numaraları yeşil olur.
 * - Sona varınca bayrağı ağzından patisine alır, iki ayağının üstüne kalkar,
 *   iki patisini havaya kaldırır (bayrak sağ patisinde) ve ekrana bakar.
 * - Bölüm ekrana girince bir kez oynar. "Hareketi azalt" açıksa doğrudan son hâli gösterilir.
 * - Tamamen kodla çizilmiştir (SVG); dış görsel veya servis kullanmaz. Süsleme amaçlıdır (aria-hidden).
 */

type Phase = "idle" | "walk" | "grab" | "stand" | "raise" | "done";

const WALK_MS = 5200;
const CAT_W = 92; // yürüyen kedinin genişliği (px)
const STAND_W = 80; // ayaktaki kedinin genişliği (px)
const END_GAP = 66; // son adım noktasından sonra kedinin durduğu mesafe (px)

function WalkingCat({ phase }: { phase: Phase }) {
  const moving = phase === "walk";
  const grab = phase !== "idle" && phase !== "walk";
  return (
    <svg viewBox="0 0 100 70" width={CAT_W} height={CAT_W * 0.7} className="block overflow-visible">
      {/* kuyruk */}
      <path d="M22 40 C 8 36, 5 22, 13 13" className={cn("pz-cat-tail", moving && "pz-cat-tail--on")} fill="none" stroke="#1F2A2E" strokeWidth="5" strokeLinecap="round" />
      {/* arka bacaklar */}
      <g className={cn("pz-cat-leg", moving && "pz-cat-leg--a")} style={{ transformOrigin: "30px 48px" }}>
        <rect x="27" y="46" width="6" height="18" rx="3" fill="#1F2A2E" />
      </g>
      <g className={cn("pz-cat-leg", moving && "pz-cat-leg--b")} style={{ transformOrigin: "38px 48px" }}>
        <rect x="35" y="46" width="6" height="18" rx="3" fill="#2B3A40" />
      </g>
      {/* gövde */}
      <ellipse cx="46" cy="40" rx="27" ry="13" fill="#1F2A2E" />
      {/* ön bacaklar */}
      <g className={cn("pz-cat-leg", moving && "pz-cat-leg--b")} style={{ transformOrigin: "58px 48px" }}>
        <rect x="55" y="46" width="6" height="18" rx="3" fill="#2B3A40" />
      </g>
      <g
        className={cn("pz-cat-leg", moving && "pz-cat-leg--a")}
        style={{ transformOrigin: "66px 48px", transform: grab ? "rotate(-70deg)" : undefined, transition: "transform .45s ease" }}
      >
        <rect x="63" y="46" width="6" height="18" rx="3" fill="#1F2A2E" />
      </g>
      {/* baş */}
      <g className={cn(moving && "pz-cat-head")}>
        <path d="M65 22 L67 8 L74 17 Z" fill="#1F2A2E" />
        <path d="M77 16 L83 7 L85 21 Z" fill="#1F2A2E" />
        <circle cx="75" cy="28" r="12.5" fill="#1F2A2E" />
        <circle cx="80" cy="25.5" r="2.2" fill="#C1FF72" />
        <circle cx="80.6" cy="25.5" r="1" fill="#1F2A2E" />
        <path d="M86.5 30 l2 1.2 -2 1.2 z" fill="#F4A3B5" />
      </g>
      {/* bayrak: önce ağızda, sonra ön patiye geçer */}
      <g
        style={{
          transform: grab ? "translate(-2px, 21px)" : "none",
          transformOrigin: "86px 33px",
          transition: "transform .45s ease",
          opacity: phase === "stand" || phase === "raise" || phase === "done" ? 0 : 1
        }}
      >
        <line x1="85" y1="33" x2="93" y2="4" stroke="#1F2A2E" strokeWidth="2" strokeLinecap="round" />
        <path d="M93 4 L74 7 L92 14 Z" fill="#E5484D" className="pz-flag" />
      </g>
    </svg>
  );
}

function StandingCat({ phase }: { phase: Phase }) {
  const up = phase === "raise" || phase === "done";
  // Kedinin SAĞ patisi izleyicinin solundadır (kedi ekrana bakıyor).
  return (
    <svg viewBox="0 0 100 120" width={STAND_W} height={STAND_W * 1.2} className="block overflow-visible">
      {/* kuyruk */}
      <path d="M64 100 C 84 98, 86 78, 76 70" fill="none" stroke="#1F2A2E" strokeWidth="5" strokeLinecap="round" />
      {/* bacaklar */}
      <rect x="39" y="94" width="9" height="22" rx="4.5" fill="#1F2A2E" />
      <rect x="53" y="94" width="9" height="22" rx="4.5" fill="#1F2A2E" />
      {/* gövde */}
      <ellipse cx="50" cy="80" rx="18" ry="22" fill="#1F2A2E" />
      <ellipse cx="50" cy="84" rx="9" ry="13" fill="#33454B" />
      {/* sağ kol (izleyicinin solu) + bayrak */}
      <g style={{ transformOrigin: "36px 68px", transform: up ? "rotate(150deg)" : "rotate(15deg)", transition: "transform .6s cubic-bezier(.3,1.4,.5,1)" }}>
        <rect x="33" y="68" width="7" height="20" rx="3.5" fill="#1F2A2E" />
        <circle cx="36.5" cy="88" r="4.2" fill="#2B3A40" />
        <line x1="36.5" y1="86" x2="36.5" y2="120" stroke="#1F2A2E" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M36.5 120 L56 115 L36.5 106 Z" fill="#E5484D" className={cn(phase === "done" && "pz-flag-wave")} />
      </g>
      {/* sol kol (izleyicinin sağı) */}
      <g style={{ transformOrigin: "64px 68px", transform: up ? "rotate(-150deg)" : "rotate(-15deg)", transition: "transform .6s .08s cubic-bezier(.3,1.4,.5,1)" }}>
        <rect x="60" y="68" width="7" height="20" rx="3.5" fill="#1F2A2E" />
        <circle cx="63.5" cy="88" r="4.2" fill="#2B3A40" />
      </g>
      {/* baş */}
      <path d="M36 40 L37 22 L48 33 Z" fill="#1F2A2E" />
      <path d="M52 33 L63 22 L64 40 Z" fill="#1F2A2E" />
      <circle cx="50" cy="45" r="16" fill="#1F2A2E" />
      {/* gözler: ayağa kalkınca ekrana (izleyiciye) bakar */}
      <circle cx="44" cy="44" r="3.6" fill="#C1FF72" />
      <circle cx="56" cy="44" r="3.6" fill="#C1FF72" />
      <circle cx={up ? 44 : 46} cy="44" r="1.8" fill="#1F2A2E" style={{ transition: "cx .4s" }} />
      <circle cx={up ? 56 : 58} cy="44" r="1.8" fill="#1F2A2E" style={{ transition: "cx .4s" }} />
      <path d="M48.5 50 h3 l-1.5 1.8 z" fill="#F4A3B5" />
      <path d="M46.5 53.5 q3.5 3 7 0" fill="none" stroke="#C1FF72" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function CatWalk({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const [phase, setPhase] = React.useState<Phase>("idle");
  const [p, setP] = React.useState(0); // yürüyüş ilerlemesi 0..1
  const [geo, setGeo] = React.useState<{ start: number; end: number; y: number; dots: number[]; vertical: boolean } | null>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);

  // Adım noktalarının konumunu ölç (masaüstü: yatay çizgi; mobil: üstte ayrı yatay pist)
  const measure = React.useCallback(() => {
    const box = containerRef.current;
    if (!box) return;
    const dots = Array.from(box.querySelectorAll<HTMLElement>("[data-step-dot]"));
    if (!dots.length) return;
    const b = box.getBoundingClientRect();
    const rects = dots.map((d) => d.getBoundingClientRect());
    const vertical = rects.length > 1 && Math.abs(rects[1].left - rects[0].left) < 4;
    if (!vertical) {
      const xs = rects.map((r) => r.left - b.left + r.width / 2);
      const y = rects[0].top - b.top + rects[0].height / 2;
      setGeo({ start: xs[0], end: Math.min(xs[xs.length - 1] + END_GAP, b.width - STAND_W / 2), y, dots: xs, vertical: false });
    } else {
      // Mobil: üstteki pistte, adımlar eşit aralıklı kabul edilir
      const w = b.width;
      const start = 20;
      const end = w - STAND_W / 2 - 4;
      const xs = rects.map((_, i) => start + ((end - END_GAP - start) * i) / Math.max(1, rects.length - 1));
      setGeo({ start, end, y: 0, dots: xs, vertical: true });
    }
  }, [containerRef]);

  React.useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure, containerRef]);

  // Ekrana girince bir kez başlat
  React.useEffect(() => {
    const el = rootRef.current?.parentElement;
    if (!el || !geo) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setP(1);
      setPhase("done");
      return;
    }
    if (phase !== "idle") return;
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          setPhase("walk");
          io.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [geo, phase]);

  // Yürüyüş ve sonrasındaki sahneler
  React.useEffect(() => {
    if (phase !== "walk") return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / WALK_MS);
      setP(k);
      if (k < 1) raf = requestAnimationFrame(tick);
      else setPhase("grab");
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);
  React.useEffect(() => {
    const next: Partial<Record<Phase, [Phase, number]>> = { grab: ["stand", 550], stand: ["raise", 450], raise: ["done", 700] };
    const n = next[phase];
    if (!n) return;
    const id = window.setTimeout(() => setPhase(n[0]), n[1]);
    return () => window.clearTimeout(id);
  }, [phase]);

  // Geçilen adım noktalarını yeşile çevir
  const noseX = geo ? geo.start + p * (geo.end - geo.start) : 0;
  React.useEffect(() => {
    const box = containerRef.current;
    if (!box || !geo) return;
    box.querySelectorAll<HTMLElement>("[data-step-dot]").forEach((d, i) => {
      if (noseX >= geo.dots[i] - 2 || phase === "done") d.setAttribute("data-reached", "");
    });
  }, [noseX, geo, phase, containerRef]);

  if (!geo) return <div ref={rootRef} aria-hidden className="hidden" />;

  const standing = phase === "stand" || phase === "raise" || phase === "done";
  const lineTop = geo.vertical ? 86 : geo.y;
  return (
    <div
      ref={rootRef}
      aria-hidden
      className={cn("pointer-events-none select-none", geo.vertical ? "relative mb-6 h-[92px]" : "absolute inset-x-0 top-0 h-0")}
    >
      {/* pist: gri taban + geçilen yer yeşil */}
      <span className="absolute z-[1] h-[3px] -translate-y-1/2 rounded-full bg-slate/15" style={{ left: geo.start, width: geo.end - geo.start, top: lineTop }} />
      <span
        className="absolute z-[1] h-[4px] -translate-y-1/2 rounded-full bg-[#7ED957]"
        style={{ left: geo.start, width: Math.max(0, noseX - geo.start), top: lineTop }}
      />
      {/* yürüyen kedi (burnu çizgi üzerindeki ilerleme noktasında) */}
      <div
        className="absolute z-[3] transition-opacity duration-300"
        style={{
          left: noseX - CAT_W * 0.92,
          top: lineTop - CAT_W * 0.7 * 0.9,
          opacity: standing ? 0 : 1
        }}
      >
        <WalkingCat phase={phase} />
      </div>
      {/* ayağa kalkan kedi */}
      <div
        className="absolute z-[3]"
        style={{
          left: geo.end - STAND_W / 2,
          top: lineTop - STAND_W * 1.2 * 0.97,
          opacity: standing ? 1 : 0,
          transform: standing ? "translateY(0) scale(1)" : "translateY(14px) scale(.85)",
          transformOrigin: "50% 100%",
          transition: "opacity .35s ease, transform .45s cubic-bezier(.3,1.5,.5,1)"
        }}
      >
        <StandingCat phase={phase} />
      </div>
    </div>
  );
}
