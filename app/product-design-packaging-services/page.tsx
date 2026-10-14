import { Metadata } from "next";
import { ProductPackagingPage } from "@/legacy-src/pages/ProductPackagingPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Product Packaging Design & 3D Retail Mockups | Tzar Digital Agency",
  description: "Retail-ready box and label packaging with 3D mockups and print-ready dielines engineered to stand out on shelves.",
  alternates: {
    canonical: "https://www.tzar.co/product-design-packaging-services",
  },
  openGraph: {
    title: "Product Packaging Design & 3D Retail Mockups | Tzar Digital Agency",
    description: "Retail-ready box and label packaging with 3D mockups and print-ready dielines engineered to stand out on shelves.",
    url: "https://www.tzar.co/product-design-packaging-services",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Product Design & Packaging Solutions",
  serviceType: "Product Packaging Design & Dieline Engineering",
  description:
    "Retail-ready box packaging, label architecture, 3D photorealistic mockups, material specification guides, and print-ready production dielines.",
  url: "https://www.tzar.co/product-design-packaging-services",
  image: "/assets/images/product-packaging.webp",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Product Packaging", url: "/product-design-packaging-services" },
]);

export default function ProductPackagingService() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <ProductPackagingPage />
    </>
  );
}
