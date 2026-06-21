import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SectorLandingTemplate,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema
} from "@/components/landing/SectorLandingTemplate";
import {
  SERVICE_META,
  getSectorLanding,
  getSectorSlugsForService
} from "@/lib/landings";

const SERVICE = "instagram-dm-otomasyonu" as const;

interface Props {
  params: { sektor: string };
}

export async function generateStaticParams() {
  return getSectorSlugsForService(SERVICE).map((sektor) => ({ sektor }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = getSectorLanding(SERVICE, params.sektor);
  if (!data) return { title: "Sayfa bulunamadı — PORTZEN" };

  const url = `https://portzenai.com/${SERVICE}/${data.sectorSlug}`;
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url,
      siteName: "PORTZEN",
      title: data.title,
      description: data.description
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true }
  };
}

export default function Page({ params }: Props) {
  const data = getSectorLanding(SERVICE, params.sektor);
  if (!data) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(SERVICE, data)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(data)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(SERVICE, data)) }}
      />
      <SectorLandingTemplate service={SERVICE} data={data} />
    </>
  );
}
