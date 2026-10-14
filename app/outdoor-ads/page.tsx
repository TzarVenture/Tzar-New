import type { Metadata } from "next";
import { OutdoorAdsPage } from "@/legacy-src/pages/OutdoorAdsPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Outdoor & OOH Advertising Solutions | Tzar Digital Agency",
  description: "High-visibility billboard campaigns, transit advertising, and ambient outdoor marketing systems across major Indian metro hubs.",
  alternates: {
    canonical: "https://www.tzar.co/outdoor-ads",
  },
  openGraph: {
    title: "Outdoor & OOH Advertising Solutions | Tzar Digital Agency",
    description: "High-visibility billboard campaigns, transit advertising, and ambient outdoor marketing systems across major Indian metro hubs.",
    url: "https://www.tzar.co/outdoor-ads",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Outdoor & OOH Advertising Solutions",
  serviceType: "Out-of-Home (OOH) & Transit Advertising",
  description:
    "Prime metro billboard placements, transit wrap advertising, digital outdoor LED displays, and targeted geographical brand campaigns across Mumbai and Pan-India.",
  url: "https://www.tzar.co/outdoor-ads",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Outdoor Ads", url: "/outdoor-ads" },
]);

export default function OutdoorAds() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <OutdoorAdsPage />
    </>
  );
}
