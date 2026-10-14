import type { Metadata } from "next";
import { WebsiteDevelopmentPage } from "@/legacy-src/pages/WebsiteDevelopmentPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Website Development Services | Custom Shopify, WordPress, React & Next.js",
  description: "Custom high-speed website development, Shopify e-commerce, WordPress, and Next.js web applications built to convert.",
  alternates: {
    canonical: "https://www.tzar.co/website-development-services",
  },
  openGraph: {
    title: "Website Development Services | Custom Shopify, WordPress, React & Next.js",
    description: "Custom high-speed website development, Shopify e-commerce, WordPress, and Next.js web applications built to convert.",
    url: "https://www.tzar.co/website-development-services",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Custom Website Development Services",
  serviceType: "Website Development & Web Application Engineering",
  description:
    "Custom high-speed Next.js websites, Shopify e-commerce architectures, WordPress portals, and enterprise web applications engineered for speed, conversions, and organic search excellence.",
  url: "https://www.tzar.co/website-development-services",
  image: "/assets/images/webdev.webp",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Website Development", url: "/website-development-services" },
]);

export default function WebsiteDevService() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <WebsiteDevelopmentPage />
    </>
  );
}
