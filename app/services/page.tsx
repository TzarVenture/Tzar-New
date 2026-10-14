import { Metadata } from "next";
import ServicesView from "./ServicesView";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createBreadcrumbSchema, SITE_URL } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Digital Marketing, Web & Growth Services | Tzar Digital Agency",
  description:
    "Explore Tzar Digital Agency's full suite of custom web development, search engine optimization, graphic design, social media marketing, and brand packaging services.",
  openGraph: {
    title: "Full-Service Capabilities | Tzar Digital Agency",
    description:
      "Custom web development, search engine optimization, graphic design, social media marketing, and brand packaging services built for real growth.",
    url: "https://www.tzar.co/services",
    siteName: "Tzar Digital Agency",
    images: [
      {
        url: "/assets/images/backgrounds/page-header-bgOur-Services.jpg",
        width: 1200,
        height: 630,
        alt: "Our Services - Tzar Digital Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tzar.co/services",
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ServicesView />
    </>
  );
}
