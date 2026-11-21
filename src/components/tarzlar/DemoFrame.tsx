"use client";

import * as React from "react";
import dynamic from "next/dynamic";

/** Her tarz kendi parçasında (chunk) yüklenir; sayfa açılışını yavaşlatmaz. */
const DEMOS = {
  rail: dynamic(() => import("./rail").then((m) => m.RailDemo), { ssr: false }),
  dish: dynamic(() => import("./dish").then((m) => m.DishDemo), { ssr: false }),
  conveyor: dynamic(() => import("./conveyor").then((m) => m.ConveyorDemo), { ssr: false }),
  folders: dynamic(() => import("./folders").then((m) => m.FoldersDemo), { ssr: false }),
  warp: dynamic(() => import("./warp").then((m) => m.WarpDemo), { ssr: false }),
  checkout: dynamic(() => import("./checkout").then((m) => m.CheckoutDemo), { ssr: false }),
  dashboard: dynamic(() => import("./dashboard").then((m) => m.DashboardDemo), { ssr: false }),
} as const;

export type DemoKey = keyof typeof DEMOS;

/**
 * Demo, ekrana yaklaşınca yüklenir; ekrandan çok uzaklaşınca kaldırılmaz
 * (kullanıcının etkileşimi korunur). Yer tutucu, yüklenene kadar alanı ayırır.
 */
export function DemoFrame({ demo, minHeight, label }: { demo: DemoKey; minHeight: number; label: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || show) return;
    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show]);

  const Demo = DEMOS[demo];

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden rounded-2xl border-3 border-ink/15 bg-white shadow-brutal-sm"
      style={{ minHeight }}
      aria-label={`${label} canlı demo`}
      role="region"
    >
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-light px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
        <span className="ml-3 truncate text-[11px] font-semibold text-ink/50">Canlı demo · deneyin</span>
      </div>
      {show ? (
        <Demo />
      ) : (
        <div className="flex items-center justify-center text-sm font-semibold text-ink/40" style={{ minHeight: minHeight - 40 }}>
          Demo yükleniyor…
        </div>
      )}
    </div>
  );
}
