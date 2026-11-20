import type { Metadata } from "next";
import PortfolioView from "./PortfolioView";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies: CRM, Next.js, Shopify & WordPress",
  description:
    "Case studies of custom CRMs, dialer and SaaS platforms, Next.js web apps, Shopify stores and WordPress sites built by Tzar Digital Agency, plus our creative and video work.",
  openGraph: {
    title: "Our Work & Case Studies | Tzar Digital Agency",
    description:
      "High-conversion websites, luxury packaging, brand campaigns, and custom digital platforms engineered for ambitious brands.",
    url: "https://www.tzar.co/portfolio",
    siteName: "Tzar Digital Agency",
    images: [
      {
        url: "/assets/images/portfolio-hero.webp",
        width: 1536,
        height: 1024,
        alt: "Tzar Digital Agency Portfolio Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tzar.co/portfolio",
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/portfolio" },
]);

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PortfolioView />
    </>
  );
}
