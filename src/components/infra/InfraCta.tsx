import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/analytics/TrackedLink";
import { INFRA_CTA_LABEL, INFRA_CTA_SUPPORT } from "@/data/infra-services";
import { cn } from "@/lib/utils";

/**
 * Altyapı hizmetlerinin tek CTA'sı: "Detayları Konuşalım".
 * Birincil eylem WhatsApp (hizmete özel hazır mesaj), ikincil eylem iletişim formu.
 * Fiyat gösterilmez.
 */
export function InfraCta({
  serviceTitle,
  message,
  source,
  heading = INFRA_CTA_LABEL,
  className
}: {
  serviceTitle?: string;
  message: string;
  source: string;
  heading?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border-3 border-ink/15 bg-slate p-8 text-white shadow-brutal-lg md:p-12", className)}>
      <h2 className="font-display text-h2 font-black leading-tight">{heading}</h2>
      <p className="mt-3 max-w-2xl text-body opacity-90">{INFRA_CTA_SUPPORT}</p>
      {serviceTitle && <p className="mt-2 text-sm opacity-70">Konu: {serviceTitle}</p>}
      <div className="mt-6 flex flex-wrap gap-3">
        <WhatsAppLink
          source={source}
          text={message}
          className="inline-flex items-center gap-2 rounded-full border-3 border-ink/15 bg-lime px-5 py-3 text-sm font-bold text-slate shadow-brutal transition-all hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          {INFRA_CTA_LABEL}
        </WhatsAppLink>
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-2 rounded-full border-3 border-white/30 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white hover:text-slate"
        >
          İletişim formu <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
