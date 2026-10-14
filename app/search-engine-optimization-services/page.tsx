import type { Metadata } from "next";
import { SeoServicePage } from "@/legacy-src/pages/SeoServicePage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "SEO Services & Search Engine Optimization Domination | Tzar Digital Agency",
  description: "Guaranteed organic ranking, technical SEO audits, keyword ranking, and high-ROI backlink acquisition systems in India.",
  alternates: {
    canonical: "https://www.tzar.co/search-engine-optimization-services",
  },
  openGraph: {
    title: "SEO Services & Search Engine Optimization Domination | Tzar Digital Agency",
    description: "Guaranteed organic ranking, technical SEO audits, keyword ranking, and high-ROI backlink acquisition systems in India.",
    url: "https://www.tzar.co/search-engine-optimization-services",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Search Engine Optimization Services",
  serviceType: "SEO Domination & Organic Search Marketing",
  description:
    "Comprehensive technical SEO audits, Google organic ranking domination, high-intent keyword optimization, and high-ROI backlink acquisition systems.",
  url: "https://www.tzar.co/search-engine-optimization-services",
  image: "/assets/images/seo_page.webp",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "SEO Domination", url: "/search-engine-optimization-services" },
]);

export default function SeoService() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <SeoServicePage />
    </>
  );
}
