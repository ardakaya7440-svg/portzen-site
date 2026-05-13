import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const openGraphImage =
    image ||
    absoluteUrl(
      "/api/og?title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(description)
    );

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: openGraphImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage]
    }
  };
}
