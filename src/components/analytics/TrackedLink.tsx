"use client";

import { trackEmailClick, trackPhoneClick, trackWhatsAppClick, trackCtaClick } from "@/lib/analytics";

/* ============================================================
   GA4 Tracked Link wrappers — Client-side components
   ============================================================ */

interface BaseProps {
  source: string; // hangi sayfa ya da bölümden tıklandı (örn: "hero", "footer")
  children: React.ReactNode;
  className?: string;
}

/** WhatsApp linki — tıklama track edilir */
export function WhatsAppLink({ source, children, className, phone = "905015884853" }: BaseProps & { phone?: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      className={className}
    >
      {children}
    </a>
  );
}

/** Telefon linki — tıklama track edilir */
export function PhoneLink({ source, children, className, phone = "+905015884853" }: BaseProps & { phone?: string }) {
  return (
    <a
      href={`tel:${phone}`}
      onClick={() => trackPhoneClick(source)}
      className={className}
    >
      {children}
    </a>
  );
}

/** Email linki — tıklama track edilir */
export function EmailLink({ source, children, className, email = "destek@portzenai.com" }: BaseProps & { email?: string }) {
  return (
    <a
      href={`mailto:${email}`}
      onClick={() => trackEmailClick(source)}
      className={className}
    >
      {children}
    </a>
  );
}

/** Genel CTA buton wrapper — herhangi bir buton/link için */
export function TrackedCta({
  href,
  source,
  label,
  children,
  className
}: {
  href: string;
  source: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={() => trackCtaClick(label, source)}
      className={className}
    >
      {children}
    </a>
  );
}
