"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* ============================================================
   Meta (Facebook) Pixel — PORTZEN reklam dönüşüm takibi
   ------------------------------------------------------------
   - Pixel ID: Vercel ortam değişkeni NEXT_PUBLIC_META_PIXEL_ID,
     yoksa aşağıdaki sabit (GoogleAnalytics ile aynı desen).
   - Geçerli sayısal bir ID yoksa bileşen HİÇBİR ŞEY yüklemez /
     tetiklemez. Yani ID girilmeden deploy edilse bile site kırılmaz.
   - İlk PageView base snippet'te tetiklenir; SPA içi sayfa
     geçişlerinde aşağıdaki effect PageView gönderir (ilk mount atlanır).
   - Standart olaylar (Lead / Contact) @/lib/analytics üzerinden gelir.
   ============================================================ */

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "2344936202990110";
const ENABLED = /^\d{6,}$/.test(PIXEL_ID);

export function MetaPixel() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (!ENABLED) return;
    // İlk yükleme base snippet'te PageView attı; çift sayımı önlemek için atla.
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  if (!ENABLED) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
