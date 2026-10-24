import type { Metadata } from "next";
import CareerView from "./CareerView";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Careers at Tzar Digital Agency | Mumbai",
  description:
    "Explore career opportunities at Tzar Digital Agency in Mumbai. Join our team of developers, designers, and marketers.",
  alternates: {
    canonical: "https://www.tzar.co/career",
  },
  openGraph: {
    title: "Careers at Tzar Digital Agency | Mumbai",
    description:
      "Explore career opportunities at Tzar Digital Agency in Mumbai. Join our team of developers, designers, and marketers.",
    url: "https://www.tzar.co/career",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Careers", url: "/career" },
]);

export default function Career() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <CareerView />
    </>
  );
}
