import type { Metadata } from "next";
import { LogoDesignPage } from "@/legacy-src/pages/LogoDesignPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Custom Logo Design & Trademark-Ready Brand Architecture | Tzar Digital Agency",
  description: "Distinctive, trademark-ready logos, typography systems, and brand guideline kits that make your business instantly recognizable.",
  alternates: {
    canonical: "https://www.tzar.co/logo-design-services",
  },
  openGraph: {
    title: "Custom Logo Design & Trademark-Ready Brand Architecture | Tzar Digital Agency",
    description: "Distinctive, trademark-ready logos, typography systems, and brand guideline kits that make your business instantly recognizable.",
    url: "https://www.tzar.co/logo-design-services",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Custom Logo Design & Brand Identity Architecture",
  serviceType: "Logo Design & Brand Identity",
  description:
    "Distinctive, trademark-ready logos, vector assets, comprehensive brand identity books, color theory systems, and corporate typography kits.",
  url: "https://www.tzar.co/logo-design-services",
  image: "/assets/images/logo_designing.webp",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Logo Design", url: "/logo-design-services" },
]);

export default function LogoDesignService() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <LogoDesignPage />
    </>
  );
}
