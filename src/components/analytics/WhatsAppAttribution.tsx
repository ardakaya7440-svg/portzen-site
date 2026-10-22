"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * WhatsApp kaynak etiketi.
 * Sitedeki her wa.me linkine, ziyaretçinin geldiği sayfa ve kaynağı
 * (Google / Instagram / reklam kampanyası / direkt) içeren hazır mesaj ekler.
 * Müşteri "gönder"e bastığında mesajın sonunda şu satır gelir:
 *   "— portzenai.com/sosyal-medya-yonetimi · Google"
 * Böylece her lead'in nereden geldiği WhatsApp'ta görünür; GA4'e de whatsapp_click düşer.
 *
 * İlk temas (landing sayfası + kaynak) sessionStorage'da tutulur; kişi siteyi gezip
 * başka sayfadan yazsa da ilk geldiği kaynak kaybolmaz.
 */

const KEY = "pz_src";

type FirstTouch = { source: string; landing: string };

function classifyReferrer(ref: string, params: URLSearchParams): string {
  const utm = params.get("utm_source");
  const campaign = params.get("utm_campaign");
  if (utm) return campaign ? `${utm}/${campaign}` : utm;
  if (params.get("gclid")) return "google-ads";
  if (params.get("fbclid")) return "meta-ads";
  if (!ref) return "direkt";
  try {
    const h = new URL(ref).hostname.replace(/^www\./, "");
    if (h.includes("google")) return "google";
    if (h.includes("instagram")) return "instagram";
    if (h.includes("facebook") || h === "fb.com" || h.includes("l.facebook")) return "facebook";
    if (h.includes("linkedin")) return "linkedin";
    if (h.includes("t.co") || h.includes("twitter") || h === "x.com") return "x";
    if (h.includes("tiktok")) return "tiktok";
    if (h.includes("youtube") || h.includes("youtu.be")) return "youtube";
    if (h.includes("bing")) return "bing";
    if (h.includes("yandex")) return "yandex";
    if (h.includes("portzenai.com")) return "direkt";
    return h;
  } catch {
    return "direkt";
  }
}

function getFirstTouch(pathname: string): FirstTouch {
  try {
    const saved = sessionStorage.getItem(KEY);
    if (saved) return JSON.parse(saved) as FirstTouch;
  } catch {
    /* storage kapalı */
  }
  const ft: FirstTouch = {
    source: classifyReferrer(document.referrer, new URLSearchParams(window.location.search)),
    landing: pathname
  };
  try {
    sessionStorage.setItem(KEY, JSON.stringify(ft));
  } catch {
    /* storage kapalı */
  }
  return ft;
}

function buildTag(pathname: string, ft: FirstTouch): string {
  const page = pathname === "/" ? "portzenai.com" : `portzenai.com${pathname}`;
  const landing = ft.landing && ft.landing !== pathname ? ` (giriş: ${ft.landing})` : "";
  return `— ${page} · ${ft.source}${landing}`;
}

export function WhatsAppAttribution() {
  const pathname = usePathname();

  useEffect(() => {
    const ft = getFirstTouch(pathname);
    const tag = buildTag(pathname, ft);

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/"]'));
    anchors.forEach((a) => {
      // Orijinal href'i sakla; sayfa değişince baştan kur
      const base = a.dataset.waBase ?? a.getAttribute("href") ?? "";
      a.dataset.waBase = base;
      try {
        const url = new URL(base, window.location.origin);
        const existing = url.searchParams.get("text") ?? "";
        const text = existing ? `${existing}\n\n${tag}` : `Merhaba, PORTZEN ile ilgili bilgi almak istiyorum.\n\n${tag}`;
        url.searchParams.set("text", text);
        a.setAttribute("href", url.toString());
      } catch {
        /* geçersiz href, dokunma */
      }
      if (!a.dataset.waTracked) {
        a.dataset.waTracked = "1";
        a.addEventListener("click", () => trackWhatsAppClick(`${pathname}|${ft.source}`));
      }
    });
  }, [pathname]);

  return null;
}
