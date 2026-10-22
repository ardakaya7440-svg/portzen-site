"use client";
/* eslint-disable @next/next/no-img-element */

import type { PublicBrand } from "@/server/cms";
import { cn } from "@/lib/utils";
import { logoBox } from "@/lib/logo-box";


/**
 * Logo şeridi.
 * - Logolar kırpılmaz (object-contain); farklı en-boy oranları yaklaşık eşit görsel ağırlığa getirilir.
 * - Yeterli logo varsa yavaş, kesintisiz kayar (durmadan).
 * - prefers-reduced-motion açıksa ve az logo varsa sabit dizilir.
 */
const MIN_FOR_MARQUEE = 6;

function Logo({ b, hidden = false }: { b: PublicBrand; hidden?: boolean }) {
  if (!b.logo) return null;
  const box = logoBox(b.logo.width, b.logo.height);
  const img = (
    <img
      src={`/api/media/${b.logo.id}`}
      alt={hidden ? "" : b.name}
      width={box.width}
      height={box.height}
      loading="lazy"
      decoding="async"
      style={{ width: box.width, height: box.height }}
      // Siyah-beyaz ve hafif silik; üzerine gelince veya klavyeyle odaklanınca renkli
      className="object-contain opacity-60 grayscale transition duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 group-focus-visible/logo:opacity-100 group-focus-visible/logo:grayscale-0"
    />
  );
  const cls = "group/logo flex h-20 shrink-0 items-center justify-center px-6 sm:px-8";
  if (b.url && !hidden) {
    return (
      <a href={b.url} target="_blank" rel="noopener noreferrer nofollow" className={cn(cls, "rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate")}>
        {img}
      </a>
    );
  }
  return <span className={cls}>{img}</span>;
}

function Row({ items, label }: { items: PublicBrand[]; label: string }) {
  const animate = items.length >= MIN_FOR_MARQUEE;
  if (!animate) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-y-2" aria-label={label}>
        {items.map((b) => (
          <li key={b.id}>
            <Logo b={b} />
          </li>
        ))}
      </ul>
    );
  }
  const duration = Math.max(30, items.length * 6); // yavaş: logo başına ~6 sn
  return (
    <div className="relative">
      <div
        className="pz-marquee group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
      >
        <div className="pz-marquee-track flex w-max" style={{ animationDuration: `${duration}s` }}>
          <ul className="flex shrink-0 items-center" aria-label={label}>
            {items.map((b) => (
              <li key={b.id}>
                <Logo b={b} />
              </li>
            ))}
          </ul>
          <ul className="pz-marquee-dup flex shrink-0 items-center" aria-hidden>
            {items.map((b) => (
              <li key={b.id}>
                <Logo b={b} hidden />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function BrandStrip({ brands, compact = false }: { brands: PublicBrand[]; compact?: boolean }) {
  const clients = brands.filter((b) => b.kind === "client" && b.logo);
  const tools = brands.filter((b) => b.kind === "tool" && b.logo);
  if (!clients.length && !tools.length) return null;
  return (
    <div className={cn("flex flex-col", compact ? "gap-8" : "gap-12")}>
      {clients.length > 0 && (
        <div>
          <h2 className="text-center text-sm font-bold text-slate/60">Birlikte çalıştığımız markalar</h2>
          <div className="mt-4">
            <Row items={clients} label="Müşteri logoları" />
          </div>
        </div>
      )}
      {tools.length > 0 && (
        <div>
          <h2 className="text-center text-sm font-bold text-slate/60">Kullandığımız araçlar ve platformlar</h2>
          <div className="mt-4">
            <Row items={tools} label="Araç ve platform logoları" />
          </div>
        </div>
      )}
    </div>
  );
}
