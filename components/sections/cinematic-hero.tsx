"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const TRUST_SIGNALS = [
  { value: "150+", label: "Aktif Sistem" },
  { value: "48 sa.", label: "Kurulum Süresi" },
  { value: "%94", label: "Müşteri Tutma" },
];

const TECH_TAGS = [
  "WhatsApp AI", "n8n Workflow", "Lead Gen", "Google Ads", "CRM Automation",
];

export function CinematicHero() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const overlayRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768;
    const video    = videoRef.current;

    let videoObserver: IntersectionObserver | undefined;
    if (video && !isMobile) {
      video.poster = "/images/poseidon-hero-desktop.jpg";
      video.src = "/videos/hero-poseidon.mp4";
      videoObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        },
        { threshold: 0 }
      );
      videoObserver.observe(video);
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || isMobile) {
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
      const videoWrap = videoWrapRef.current;
      const overlay   = overlayRef.current;
      if (!section || !videoWrap) return;

      gsapCtx = gsap.context(() => {
        gsap.fromTo(videoWrap,
          { scale: 1.0, y: 0 },
          {
            scale: 1.08, y: -40, ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 2,
            },
          }
        );

        if (overlay) {
          gsap.fromTo(overlay,
            { opacity: 0 },
            {
              opacity: 1, ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "40% top",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
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
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: "#020710" }}
    >
      {/* ── Video background — cinematic overlay ── */}
      <div
        ref={videoWrapRef}
        className="absolute inset-0 hidden md:block will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="none"
          style={{ filter: "saturate(0.4) brightness(0.35)" }}
        />
      </div>

      {/* Mobile static */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url('/images/poseidon-hero-mobile.jpg')",
          filter: "saturate(0.3) brightness(0.25)",
        }}
      />

      {/* ── Cinematic gradient system ── */}
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020710]/50 via-[#020710]/20 to-[#020710]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020710]/85 via-transparent to-[#020710]/60" />

      {/* Premium glow orbs */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: "10%",
          left: "8%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,255,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,170,255,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Scroll exit overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#020710] pointer-events-none hidden md:block"
        style={{ opacity: 0 }}
      />

      {/* ── Grid lines — subtle infrastructure feel ── */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,102,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,102,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col items-start justify-center flex-1 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24">
        <div className="max-w-4xl">

          {/* Label pill */}
          <div
            className="mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 hero-stats"
            style={{
              background: "rgba(0,102,255,0.10)",
              border: "1px solid rgba(0,102,255,0.25)",
              animationDelay: "0s",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: "#00aaff", boxShadow: "0 0 6px #00aaff" }}
            />
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#00aaff" }}
            >
              AI Growth Infrastructure
            </span>
            <span
              className="hidden sm:block text-[10px] font-medium px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(0,170,255,0.12)",
                color: "rgba(0,170,255,0.7)",
                border: "1px solid rgba(0,170,255,0.2)",
              }}
            >
              v2.0
            </span>
          </div>

          {/* ── Headline — ultra premium typography ── */}
          <h1
            className="font-black leading-[0.92] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
          >
            <span className="block overflow-hidden">
              <span className="reveal-word block" style={{ animationDelay: "0.05s" }}>
                İşletmenizi
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="reveal-word block" style={{ animationDelay: "0.12s" }}>
                <span
                  className="inline bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #0066ff 0%, #00aaff 50%, #00d4ff 100%)",
                  }}
                >
                  Otopilota
                </span>{" "}
                Alıyoruz.
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-sub mt-7 max-w-xl leading-[1.7]"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "rgba(255,255,255,0.52)",
              animationDelay: "0.35s",
            }}
          >
            AI agent sistemleri, WhatsApp otomasyonları ve akıllı lead generation altyapısıyla{" "}
            <span style={{ color: "rgba(255,255,255,0.85)" }}>
              işletmenizin büyümesini sistem haline getiriyoruz.
            </span>
          </p>

          {/* ── CTA Block — premium structure ── */}
          <div
            className="hero-cta mt-10 flex flex-wrap items-center gap-3.5"
            style={{ animationDelay: "0.55s" }}
          >
            {/* Primary CTA */}
            <Link
              href="/iletisim"
              className="group relative inline-flex items-center gap-2.5 rounded-2xl text-sm font-bold text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0066ff 0%, #0055ee 100%)",
                padding: "14px 28px",
                boxShadow: "0 0 0 1px rgba(0,102,255,0.4), 0 8px 32px rgba(0,102,255,0.35)",
                transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(0,102,255,0.5), 0 12px 48px rgba(0,102,255,0.55)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(0,102,255,0.4), 0 8px 32px rgba(0,102,255,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Shine effect */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
                  transition: "opacity 0.4s ease",
                }}
              />
              <span className="relative">Sistem Analizi Al</span>
              <span
                className="relative flex items-center justify-center w-6 h-6 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Secondary CTA */}
            <a
              href="#sistemler"
              className="group inline-flex items-center gap-2 rounded-2xl text-sm font-semibold"
              style={{
                padding: "14px 24px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.65)",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,102,255,0.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,102,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
              }}
            >
              Altyapıyı İncele
              <svg
                className="w-4 h-4 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-80"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* WhatsApp quick link */}
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium transition-opacity duration-200 hover:opacity-80"
            style={{ color: "rgba(37,211,102,0.80)" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp'tan Görüşme Başlat — {siteConfig.whatsappDisplay}
          </a>

          {/* CTA micro-copy */}
          <p className="mt-2 text-[11px]" style={{ color: "rgba(255,255,255,0.20)" }}>
            Ücretsiz · 15 dk · İşletmeniz analiz edilir · 48 sa. sistem planı
          </p>

          {/* ── Tech tags ── */}
          <div className="hero-stats mt-8 flex flex-wrap gap-2" style={{ animationDelay: "0.75s" }}>
            {TECH_TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full text-[11px] font-medium px-3 py-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ── Trust stats ── */}
          <div
            className="hero-stats mt-10 sm:mt-14 hidden sm:flex items-center gap-10"
            style={{ animationDelay: "0.9s" }}
          >
            {TRUST_SIGNALS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-5">
                {i > 0 && (
                  <div style={{ width: "1px", height: "32px", background: "rgba(255,255,255,0.07)" }} />
                )}
                <div>
                  <p
                    className="font-black tracking-tight"
                    style={{ fontSize: "1.6rem", color: "white", lineHeight: 1 }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em]"
                    style={{ color: "rgba(255,255,255,0.32)" }}
                  >
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
        style={{ color: "rgba(255,255,255,0.20)" }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.35em]">Kaydır</span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: "linear-gradient(to bottom, rgba(0,102,255,0.4), transparent)" }}
        />
      </div>
    </section>
  );
}
