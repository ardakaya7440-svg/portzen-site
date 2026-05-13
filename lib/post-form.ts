import { PostStatus } from "@prisma/client";

import { excerptToPlainText } from "@/lib/utils";

export function createPostDefaults() {
  return {
    id: "",
    title: "",
    slug: "",
    excerpt: "",
    metaTitle: "",
    metaDescription: "",
    content: `## Bu yazi neyi cozecek?

Isletme sahibinin kendini icerde gorecegi kadar net bir problemle baslayin.

## Sorun neden buyuyor?

Sorunun gunluk operasyon, satis veya musteri deneyimi tarafindaki etkisini anlatin.

## Daha akilli yaklasim

Teknik jargona girmeden daha duzenli bir isleyisin ne kazandiracagini aciklayin.

## Sonuc

Yazinin sonunda ilgili hizmet sayfasina yumusak bir gecis yapin.
`,
    status: PostStatus.DRAFT,
    publishedAt: ""
  };
}

export function createMetaFallbacks(title: string, excerpt: string) {
  return {
    metaTitle: title,
    metaDescription: excerptToPlainText(excerpt, 155)
  };
}
