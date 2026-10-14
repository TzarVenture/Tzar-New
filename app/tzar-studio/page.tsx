import type { Metadata } from "next";
import { TzarStudioPage } from "@/legacy-src/pages/TzarStudioPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Tzar Studio | High-End Product Photography & Cinematic Brand Videography",
  description: "Artisanal product styling, commercial lifestyle photography, and 4K brand video production for premium consumer brands.",
  alternates: {
    canonical: "https://www.tzar.co/tzar-studio",
  },
  openGraph: {
    title: "Tzar Studio | High-End Product Photography & Cinematic Brand Videography",
    description: "Artisanal product styling, commercial lifestyle photography, and 4K brand video production for premium consumer brands.",
    url: "https://www.tzar.co/tzar-studio",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Tzar Studio Commercial Production",
  serviceType: "Commercial Photography & Brand Videography",
  description:
    "Artisanal food and product styling, editorial lifestyle photography, 4K cinematic brand commercials, and high-conversion e-commerce shoot production.",
  url: "https://www.tzar.co/tzar-studio",
  image: "/assets/images/MobileShowcase/show1-3.webp",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Tzar Studio", url: "/tzar-studio" },
]);

export default function TzarStudio() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <TzarStudioPage />
    </>
  );
}
