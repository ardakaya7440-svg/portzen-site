"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/section-label";

const STEPS = [
  {
    num: "01",
    title: "Analiz",
    desc: "İşletmenizi, hedef kitlenizi ve mevcut dijital varlığınızı derinlemesine analiz ediyoruz. Nerede fırsat var, nerede kayıp var görüyoruz.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Strateji",
    desc: "Veriler ve hedeflerinize göre özelleştirilmiş bir büyüme planı çıkarıyoruz. Hangi sistem, hangi sırayla, nasıl kurulacak.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Kurulum",
    desc: "Web sitesi, içerik sistemi veya otomasyon — belirlenen zaman ve kapsamda teslim ediyoruz. Siz onayladıktan sonra yayına alınıyor.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Optimizasyon",
    desc: "Kurulum bitmek son değil, başlangıçtır. Veriler gelmeye başladıkça sistemi optimize eder, büyüme hızınızı artırıyoruz.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export function ProcessNew() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".card-inner");
    const cleanups: (() => void)[] = [];

    cards?.forEach((card) => {
      const handler = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      };
      card.addEventListener("mousemove", handler);
      cleanups.push(() => card.removeEventListener("mousemove", handler));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section
      id="surec"
      ref={sectionRef}
      className="relative py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, #020710 0%, #040c1e 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(0,102,255,0.05), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="mb-16 max-w-xl">
          <SectionLabel>Deployment Süreci</SectionLabel>
          <h2
            className="font-black leading-[1.0] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Net, hızlı ve sonuç odaklı.
          </h2>
        </div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[2.1rem] left-[calc(12.5%+2.5rem)] right-[calc(12.5%+2.5rem)] h-px bg-gradient-to-r from-transparent via-[#0066ff]/25 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((step) => (
              <div key={step.num} className="card-outer">
                <div
                  className="card-inner p-6 flex flex-col items-start"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex items-center gap-3 mb-5 w-full">
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: "rgba(0,102,255,0.12)",
                        border: "1px solid rgba(0,102,255,0.2)",
                        color: "#00aaff",
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="ml-auto text-[11px] font-bold tabular-nums tracking-widest"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className="text-sm font-bold mb-2"
                    style={{ color: "rgba(255,255,255,0.90)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.62)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
