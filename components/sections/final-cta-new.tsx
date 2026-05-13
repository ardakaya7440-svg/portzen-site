"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function FinalCtaNew() {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768;
    const video    = videoRef.current;
    if (!video || isMobile) return;

    video.src = "/videos/cta-ambient.mp4";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0 }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="iletisim-cta"
      className="relative overflow-hidden py-28 sm:py-40"
      style={{ background: "#020710" }}
    >
      {/* Ambient video — ultra dim, abstract */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover hidden md:block pointer-events-none"
        style={{
          opacity: 0.03,
          mixBlendMode: "screen",
          filter: "saturate(0.2) hue-rotate(220deg) blur(2px)",
        }}
        muted
        loop
        playsInline
        preload="none"
      />
      {/* Extra dark mask to ensure full abstraction */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(2,7,16,0.75)" }}
      />

      {/* Gradient layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,102,255,0.12), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "900px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Top border glow */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.25), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center">
        {/* Urgency pill */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            background: "rgba(0,102,255,0.10)",
            border: "1px solid rgba(0,102,255,0.22)",
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
            Bu hafta 3 yer kaldı
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-black leading-[1.05] tracking-[-0.03em] text-white"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          İşletmenizi{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #0066ff 0%, #00aaff 50%, #00d4ff 100%)",
            }}
          >
            AI infrastructure&rsquo;ya
          </span>
          <br />taşıyalım.
        </h2>

        <p
          className="mt-6 max-w-xl mx-auto text-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Ücretsiz sistem analizi görüşmesinde işletmenizi değerlendiriyor,{" "}
          <span style={{ color: "rgba(255,255,255,0.75)" }}>48 saat içinde somut plan hazırlıyoruz.</span>
          {" "}Taahhüt yok.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/iletisim"
            className="group relative flex items-center gap-3 rounded-2xl pl-7 pr-2.5 py-3 text-base font-bold text-white overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0066ff 0%, #0055ee 100%)",
              boxShadow: "0 0 0 1px rgba(0,102,255,0.4), 0 8px 40px rgba(0,102,255,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(0,102,255,0.5), 0 12px_60px rgba(0,102,255,0.6)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(0,102,255,0.4), 0 8px 40px rgba(0,102,255,0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.10) 50%, transparent 60%)",
              }}
            />
            <span className="relative">Sistem Analizi Al</span>
            <span
              className="relative flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:translate-x-0.5"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>

          {/* WhatsApp CTA */}
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300"
            style={{
              background: "rgba(37,211,102,0.08)",
              border: "1px solid rgba(37,211,102,0.25)",
              color: "rgba(37,211,102,0.85)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.14)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.45)";
              (e.currentTarget as HTMLElement).style.color = "rgba(37,211,102,1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.25)";
              (e.currentTarget as HTMLElement).style.color = "rgba(37,211,102,0.85)";
            }}
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp'tan Görüşme Başlat
          </a>
        </div>

        {/* Trust signals */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-8 text-xs"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          {["Taahhüt yok", "48 sa. geri dönüş", "Ücretsiz strateji planı"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg
                className="w-3 h-3"
                style={{ color: "rgba(0,170,255,0.5)" }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
