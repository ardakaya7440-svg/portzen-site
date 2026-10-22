"use client";

import { usePathname } from "next/navigation";

/** Site gezinme/altbilgi gibi ortak parçaları /admin altında gizler (admin kendi düzenini kullanır). */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <>{children}</>;
}
