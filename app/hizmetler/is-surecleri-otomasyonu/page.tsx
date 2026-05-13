import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { createMetadata } from "@/lib/metadata";
import { serviceMap } from "@/lib/content";

const service = serviceMap["is-surecleri-otomasyonu"];

export const metadata: Metadata = createMetadata({
  title: service.seoTitle,
  description: service.metaDescription,
  path: service.href
});

export default function ProcessAutomationPage() {
  return <ServicePageTemplate slug="is-surecleri-otomasyonu" />;
}
