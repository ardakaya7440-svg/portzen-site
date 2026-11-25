import type { InfraService } from "./types";
import { INFRA_PART1 } from "./part1";
import { INFRA_PART2 } from "./part2";

export type { InfraService } from "./types";

/** "Sunucu ve Dijital Altyapı" hizmetleri — /hizmetler/<slug> */
export const INFRA_SERVICES: InfraService[] = [...INFRA_PART1, ...INFRA_PART2];

export const INFRA_HUB_HREF = "/hizmetler/sunucu-ve-altyapi";
export const INFRA_CTA_LABEL = "Detayları Konuşalım";
export const INFRA_CTA_SUPPORT = "Projenizin teknik ihtiyaçlarına ve kapsamına özel çözümler geliştiriyoruz.";

export function infraHref(slug: string) {
  return `/hizmetler/${slug}`;
}

export function getInfraService(slug: string): InfraService | undefined {
  return INFRA_SERVICES.find((s) => s.slug === slug);
}

/** WhatsApp hazır mesajı: hangi hizmetle ilgilenildiği belli olsun */
export function infraWhatsAppText(svc: Pick<InfraService, "title">) {
  return `Merhaba, "${svc.title}" hizmeti hakkında detayları konuşmak istiyorum.`;
}
