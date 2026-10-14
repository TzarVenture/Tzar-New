import type { Metadata } from "next";
import { GraphicDesigningPage } from "@/legacy-src/pages/GraphicDesigningPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "High-Impact Graphic & Brand Identity Design Services | Tzar Digital Agency",
  description: "Professional marketing collateral, print art, brochures, banners, and digital graphics engineered for brands.",
  alternates: {
    canonical: "https://www.tzar.co/graphic-designing",
  },
  openGraph: {
    title: "High-Impact Graphic & Brand Identity Design Services | Tzar Digital Agency",
    description: "Professional marketing collateral, print art, brochures, banners, and digital graphics engineered for brands.",
    url: "https://www.tzar.co/graphic-designing",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Graphic Designing & Visual Collateral Services",
  serviceType: "Graphic Design & Digital Creative Production",
  description:
    "Professional marketing collateral, advertising banners, company brochures, print production dielines, and digital social creatives that elevate brand authority.",
  url: "https://www.tzar.co/graphic-designing",
  image: "/assets/images/graphic_designing.webp",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Graphic Designing", url: "/graphic-designing" },
]);

export default function GraphicDesignService() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <GraphicDesigningPage />
    </>
  );
}
