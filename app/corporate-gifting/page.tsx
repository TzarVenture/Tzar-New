import type { Metadata } from "next";
import { CorporateGiftingPage } from "@/legacy-src/pages/CorporateGiftingPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Bespoke Corporate Gifting Solutions | Tzar Digital Agency",
  description: "Curated luxury executive gift hampers, custom branded employee welcome kits, and premium client appreciation gifts.",
  alternates: {
    canonical: "https://www.tzar.co/corporate-gifting",
  },
  openGraph: {
    title: "Bespoke Corporate Gifting Solutions | Tzar Digital Agency",
    description: "Curated luxury executive gift hampers, custom branded employee welcome kits, and premium client appreciation gifts.",
    url: "https://www.tzar.co/corporate-gifting",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Bespoke Corporate Gifting Solutions",
  serviceType: "Corporate Gifting & Custom Merchandise",
  description:
    "Curated executive luxury gift hampers, employee onboarding kits, VIP festive packages, and sustainable branded merchandise for enterprise teams.",
  url: "https://www.tzar.co/corporate-gifting",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Corporate Gifting", url: "/corporate-gifting" },
]);

export default function CorporateGifting() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <CorporateGiftingPage />
    </>
  );
}
