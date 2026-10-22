import "server-only";
import { BILLING_LABEL, BILLING_SUFFIX, DISPLAY_ORDER, PRICING, SINGLE, TIER_NAMES } from "@/data/pricing";
import type { FamilyMeta, SingleMeta } from "@/components/admin/PriceEditor";

/** Fiyat düzenleyicinin ihtiyaç duyduğu yapı bilgisi (hangi alanlar var, adlar) — koddaki yapıdan türetilir */
export function priceMeta(): { families: FamilyMeta[]; singles: SingleMeta[] } {
  const order = [...DISPLAY_ORDER].reverse(); // Başlangıç, Büyüme, Kurumsal
  return {
    families: Object.values(PRICING).map((f) => ({
      id: f.id,
      title: f.title,
      billingLabel: BILLING_LABEL[f.billing],
      billingSuffix: BILLING_SUFFIX[f.billing],
      tiers: order.map((t) => ({
        id: t,
        name: TIER_NAMES[t],
        hasSetup: f.tiers[t].setupFee !== undefined,
        hasMaint: f.tiers[t].maintenance !== undefined
      }))
    })),
    singles: Object.values(SINGLE).map((s) => ({
      id: s.id,
      title: s.title,
      billingLabel: BILLING_LABEL[s.billing],
      billingSuffix: BILLING_SUFFIX[s.billing],
      startingAt: Boolean(s.startingAt),
      hasSetup: s.setupFee !== undefined,
      hasMonthly: s.monthly !== undefined,
      derived: s.setupFee !== undefined && s.monthly !== undefined ? (s.billing === "monthly" ? "monthly" : "setupFee") : null
    }))
  };
}
