import type { Metadata } from "next";
import { ServiceDetailPage } from "@/legacy-src/pages/ServiceDetailPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "PPC Management & Paid Media Growth Services | Tzar Digital Agency",
  description: "High-ROI Google Ads, Meta Ads, and performance marketing acquisition systems built for maximum customer conversion.",
  alternates: {
    canonical: "https://www.tzar.co/pay-per-click-services",
  },
  openGraph: {
    title: "PPC Management & Paid Media Growth Services | Tzar Digital Agency",
    description: "High-ROI Google Ads, Meta Ads, and performance marketing acquisition systems built for maximum customer conversion.",
    url: "https://www.tzar.co/pay-per-click-services",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Pay-Per-Click (PPC) Management Services",
  serviceType: "Pay-Per-Click & Paid Media Advertising",
  description:
    "High-ROI Google Search Ads, Performance Max campaigns, Meta Ads scaling, negative keyword sculpting, and multi-channel performance marketing.",
  url: "https://www.tzar.co/pay-per-click-services",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "PPC Management", url: "/pay-per-click-services" },
]);

export default function PpcService() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <ServiceDetailPage slug="pay-per-click-services" />
    </>
  );
}
