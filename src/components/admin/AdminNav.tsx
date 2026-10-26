"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "/admin", label: "Genel bakış" },
  { href: "/admin/talepler", label: "Teklif talepleri" },
  { href: "/admin/fiyatlar", label: "Fiyatlar" },
  { href: "/admin/markalar", label: "Markalar" },
  { href: "/admin/yorumlar", label: "Müşteri yorumları" },
  { href: "/admin/isler", label: "Görseller ve işler" }
];

export function AdminNav() {
  const p = usePathname() ?? "";
  return (
    <nav aria-label="Yönetim menüsü" className="overflow-x-auto px-3 pb-3 lg:px-3 lg:pb-0">
      <ul className="flex gap-1 lg:flex-col">
        {ITEMS.map((i) => {
          const active = i.href === "/admin" ? p === "/admin" : p.startsWith(i.href);
          return (
            <li key={i.href}>
              <Link
                href={i.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold lg:rounded-xl",
                  active ? "bg-slate text-white" : "text-slate/75 hover:bg-light hover:text-slate"
                )}
              >
                {i.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
