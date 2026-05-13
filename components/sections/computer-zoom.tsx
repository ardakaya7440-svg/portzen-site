"use client";

import { useEffect, useRef } from "react";

export function ComputerZoom() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const preTextRef   = useRef<HTMLDivElement>(null);
  const portalRef    = useRef<HTMLDivElement>(null);
  const screenMsgRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Mobile: no GSAP, no observer, fully static
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const video = videoRef.current;

    // Set src only on desktop — mobile never fetches this asset
    let videoObserver: IntersectionObserver | undefined;
    if (video) {
      video.src = "/videos/screen-portal.mp4";
      videoObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        },
        { threshold: 0 }
      );
      videoObserver.observe(video);
    }

    if (prefersReduced) {
      if (preTextRef.current) preTextRef.current.style.opacity = "1";
      return () => videoObserver?.disconnect();
    }

    let gsapCtx: { revert: () => void } | undefined;
    let mounted = true;

    const init = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!mounted) return;

      const section   = sectionRef.current;
      const preText   = preTextRef.current;
      const portal    = portalRef.current;
      const screenMsg = screenMsgRef.current;
      if (!section || !preText || !portal) return;

      gsapCtx = gsap.context(() => {
        gsap.set(preText, { opacity: 0, y: 20 });
        // Portal completely hidden during text phase
        gsap.set(portal,  { xPercent: -50, yPercent: -50, scale: 0.72, opacity: 0 });
        if (screenMsg) gsap.set(screenMsg, { opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        // Faz 1 (0 → 0.32): sadece başlık belirir — portal görünmez
        tl.to(preText, { opacity: 1, y: 0, duration: 0.28 }, 0);

        // Faz 2 (0.32 → 0.50): başlık tamamen solar — portal hâlâ görünmez
        tl.to(preText, { opacity: 0, y: -20, duration: 0.16 }, 0.32);

        // Faz 3 (0.50 → 0.62): başlık gittikten sonra portal belirerek açılır
        tl.to(portal, { opacity: 1, scale: 1, duration: 0.12 }, 0.50);

        // Faz 4 (0.62 → 0.85): portal tek başına viewport'u kaplar
        tl.to(portal, {
          scale: 6,
          borderRadius: "0px",
          boxShadow: "none",
          ease: "power2.inOut",
          duration: 0.23,
        }, 0.62);

        // Faz 5 (0.82 → 1.0): iç mesaj
        if (screenMsg) {
          tl.to(screenMsg, { opacity: 1, duration: 0.18 }, 0.82);
        }

        // Faz 6 (0.88 → 0.96): portal + mesaj birlikte solar — section bitmeden ekran temizlenir
        if (screenMsg) {
          tl.to([portal, screenMsg], { opacity: 0, duration: 0.08, ease: "power1.out" }, 0.88);
        } else {
          tl.to(portal, { opacity: 0, duration: 0.08, ease: "power1.out" }, 0.88);
        }

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          animation: tl,
        });
      }, sectionRef);
    };

    init();

    return () => {
      mounted = false;
      gsapCtx?.revert();
      videoObserver?.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#020818] min-h-screen md:min-h-[160vh]"
    >

      {/* ── Desktop: sticky scroll-driven portal scene ── */}
      <div className="hidden md:block sticky top-0 h-screen overflow-hidden">

        {/* Dark navy background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #030d2a 0%, #020818 60%, #010610 100%)",
          }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,102,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Pre-zoom text */}
        <div
          ref={preTextRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center pointer-events-none"
          style={{ opacity: 0 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#00d4ff]/60">
            AI Operating System
          </p>
          <h2 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Tüm kanallarınız{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00aaff]">
              tek intelligence layer
            </span>{" "}
            üzerinde.
          </h2>
        </div>

        {/* Portal frame — scales to fill viewport */}
        <div
          ref={portalRef}
          className="absolute z-20 overflow-hidden"
          style={{
            top:             "50%",
            left:            "50%",
            width:           "min(54vw, 680px)",
            aspectRatio:     "16 / 9",
            borderRadius:    "20px",
            border:          "1px solid rgba(0,102,255,0.6)",
            boxShadow:
              "0 0 80px rgba(0,102,255,0.35), 0 0 160px rgba(0,102,255,0.12), inset 0 0 40px rgba(0,102,255,0.08)",
            background:      "linear-gradient(160deg, #030d2a 0%, #020818 100%)",
            transformOrigin: "center center",
          }}
        >
          {/* Portal video — src set by JS on desktop only */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="none"
          />

          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(0,102,255,0.18), transparent 80%)",
            }}
          />

          {/* Scanlines */}
          <div className="screen-scanlines absolute inset-0 z-10 pointer-events-none" />
        </div>

        {/* Welcome message — portal dışında, scale'den bağımsız overlay */}
        <div
          ref={screenMsgRef}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center px-8 text-center pointer-events-none"
          style={{ opacity: 0 }}
        >
          <p className="mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#00d4ff]/60">
            PORTZEN Infrastructure
          </p>
          <p className="text-lg sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight">
            AI Agents · Automation ·{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00aaff]">
              Growth Systems
            </span>
          </p>
          <p className="mt-3 max-w-sm text-xs sm:text-sm text-white/40">
            Tüm büyüme kanallarınız tek zeki altyapıda çalışır.
          </p>
        </div>
      </div>

      {/* ── Mobile: fully static, no GSAP, no video ── */}
      <div className="md:hidden relative min-h-screen flex flex-col overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #030d2a 0%, #020818 60%, #010610 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,102,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#00d4ff]/60">
            AI Operating System
          </p>
          <h2 className="max-w-sm text-3xl font-black text-white leading-tight tracking-tight">
            Tüm kanallarınız{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00aaff]">
              tek intelligence
            </span>{" "}
            layer&rsquo;da.
          </h2>
          <p className="mt-4 max-w-xs text-sm text-white/45 leading-relaxed">
            AI agent&rsquo;lar, otomasyon workflow&rsquo;ları ve growth sistemleriyle işletmeniz 7/24 çalışır.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["AI Agents", "WhatsApp AI", "Lead Gen", "Google Ads"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#0066ff]/30 bg-[#0066ff]/10 px-4 py-2 text-xs font-semibold text-white/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
