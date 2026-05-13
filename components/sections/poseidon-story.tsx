"use client";

import { useEffect, useRef } from "react";

const WORDS = [
  { word: "Sistem", sub: "Manuel süreçleri AI agent'lara devredin. Siz sadece büyümeye odaklanın." },
  { word: "Altyapı", sub: "CRM, mesajlaşma, ads — hepsi tek bir intelligence layer'da birleşir." },
  { word: "Otomasyon", sub: "7/24 çalışan AI sistemleriyle lead'leri kaybetmeden takip edin." },
  { word: "Büyüme", sub: "Her kanal optimize, her süreç otomatik, her lead akıllıca işlenir." },
  { word: "PORTZEN", sub: "AI growth infrastructure — işletmeniz için özel olarak kurulur." },
];

export function PoseidonStory() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const stickyRef   = useRef<HTMLDivElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const fogRef      = useRef<HTMLDivElement>(null);
  const raysRef     = useRef<HTMLDivElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const wordsRef    = useRef<(HTMLDivElement | null)[]>([]);
  const promiseRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isMobile = window.innerWidth < 768;
    const video    = videoRef.current;

    // Only set video src on desktop — prevents mobile from fetching the asset
    let videoObserver: IntersectionObserver | undefined;
    if (video && !isMobile) {
      video.src = "/videos/story-trident.mp4";
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
      const first = wordsRef.current[0];
      if (first) first.style.opacity = "1";
      return () => videoObserver?.disconnect();
    }

    let gsapCtx: { revert: () => void } | undefined;
    let mounted = true;

    const init = async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      const section = sectionRef.current;
      const sticky  = stickyRef.current;
      const bg      = bgRef.current;
      const fog     = fogRef.current;
      const rays    = raysRef.current;
      const promise = promiseRef.current;
      if (!section || !sticky || !bg) return;

      gsapCtx = gsap.context(() => {
        // Background cinematic rise
        gsap.fromTo(bg,
          { scale: 1.12, y: isMobile ? 30 : 60, opacity: 0.6 },
          {
            scale: 1, y: 0, opacity: 1, ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 85%", end: "top 20%", scrub: 1.8 },
          }
        );

        // Video push-in: gentle scale increase as user scrolls through section (desktop only)
        if (video && !isMobile) {
          gsap.fromTo(video,
            { scale: 1.05 },
            {
              scale: 1.18, ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: 2,
              },
            }
          );
        }

        // Fog pulse
        if (fog) {
          gsap.fromTo(fog, { opacity: 0.7 }, {
            opacity: 0.3, ease: "sine.inOut",
            scrollTrigger: { trigger: section, start: "top 60%", end: "center center", scrub: 2 },
          });
        }

        // Light rays intensify
        if (rays) {
          gsap.fromTo(rays, { opacity: 0.2, scale: 0.9 }, {
            opacity: 0.7, scale: 1.1, ease: "power1.out",
            scrollTrigger: { trigger: section, start: "top 70%", end: "center center", scrub: 1.5 },
          });
        }

        // Sequential word reveal
        const wordEls = wordsRef.current.filter(Boolean) as HTMLDivElement[];
        const SEG = isMobile ? 1.5 : 2;
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        wordEls.forEach((el, i) => {
          const t = i * SEG;
          tl.fromTo(el,
            { opacity: 0, y: isMobile ? 24 : 40 },
            { opacity: 1, y: 0, duration: 0.45 },
            t
          );
          if (i < wordEls.length - 1) {
            tl.to(el,
              { opacity: 0, y: isMobile ? -20 : -36, duration: 0.35 },
              t + SEG * 0.65
            );
          }
        });

        if (promise) {
          tl.fromTo(promise,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
            (wordEls.length - 1) * SEG + SEG * 0.7
          );
        }

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          pin: sticky,
          pinSpacing: true,
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
      className="relative bg-[#020818] min-h-[140vh] md:min-h-[220vh]"
    >
      {/* Sticky viewport */}
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">

        {/* BG layer — cinematic rise on scroll */}
        <div
          ref={bgRef}
          className="absolute inset-0 will-change-transform"
          style={{
            opacity: 0.6,
            transformOrigin: "center bottom",
          }}
        >
          {/* Mobile: static fallback */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: "url('/images/poseidon-hero-mobile.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          />

          {/* Desktop only — video never fetched on mobile via src omission */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover hidden md:block will-change-transform"
            muted
            loop
            playsInline
            preload="none"
            style={{ filter: "saturate(0.3) brightness(0.4) hue-rotate(180deg)" }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020818]/70 via-[#020818]/25 to-[#020818]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020818]/50 via-transparent to-[#020818]/50 pointer-events-none" />

        {/* Fog layer */}
        <div
          ref={fogRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 120% 60% at 50% 80%, rgba(0,20,80,0.55), transparent 70%)",
            opacity: 0.7,
          }}
        />

        {/* Light rays from below */}
        <div
          ref={raysRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 40% 70% at 50% 100%, rgba(0,102,255,0.25), transparent 70%), " +
              "radial-gradient(ellipse 20% 50% at 35% 100%, rgba(0,200,255,0.1), transparent 60%), " +
              "radial-gradient(ellipse 20% 50% at 65% 100%, rgba(0,150,255,0.1), transparent 60%)",
            opacity: 0.2,
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

        {/* Center word stage */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#00d4ff]/50">
            AI Operating System
          </p>

          <div className="relative flex items-center justify-center w-full max-w-5xl"
            style={{ height: "clamp(5rem, 14vw, 9rem)" }}>
            {WORDS.map((item, i) => (
              <div
                key={item.word}
                ref={(el) => { wordsRef.current[i] = el; }}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ opacity: 0, willChange: "opacity, transform" }}
              >
                <h2
                  className="font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 leading-none"
                  style={{ fontSize: "clamp(2.8rem, 10vw, 7rem)" }}
                >
                  {item.word}
                </h2>
                <p
                  className="mt-3 max-w-md text-white/50 leading-relaxed"
                  style={{ fontSize: "clamp(0.8rem, 2.5vw, 1.05rem)" }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Promise block */}
          <div
            ref={promiseRef}
            className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-2xl"
            style={{ opacity: 0 }}
          >
            <div
              className="rounded-3xl px-6 py-5 sm:px-8 sm:py-6"
              style={{
                border: "1px solid rgba(0,102,255,0.18)",
                background: "rgba(0,102,255,0.06)",
                backdropFilter: "blur(16px)",
              }}
            >
              <p className="text-base sm:text-xl font-bold text-white leading-relaxed">
                İşletmenizi{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] to-[#00aaff]">
                  AI growth infrastructure&rsquo;a
                </span>{" "}
                dönüştürüyoruz.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-white/45 leading-relaxed">
                Tek bir görüşmeyle tüm sisteminizi analiz ediyor, kurulum planı çıkarıyor ve 48 saatte devreye alıyoruz.
              </p>
            </div>
          </div>

          {/* Side dots */}
          <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {WORDS.map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-[#0066ff]/30" />
            ))}
          </div>
          <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {WORDS.map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-[#00d4ff]/25" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
