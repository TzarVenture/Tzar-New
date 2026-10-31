import type { Metadata } from "next";
import CareerView from "./CareerView";
import { ROLES } from "./rolesData";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createBreadcrumbSchema, createJobPostingSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Careers & Open Positions in Mumbai",
  description:
    "Explore career opportunities at Tzar Digital Agency in Mumbai. Join our multidisciplinary team of developers, designers, and marketers.",
  alternates: {
    canonical: "https://www.tzar.co/career",
  },
  openGraph: {
    title: "Careers at Tzar Digital Agency | Mumbai",
    description:
      "Explore career opportunities at Tzar Digital Agency in Mumbai. Join our multidisciplinary team of developers, designers, and marketers.",
    url: "https://www.tzar.co/career",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/images/career-hero.webp",
        width: 1200,
        height: 630,
        alt: "Careers at Tzar Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Tzar Digital Agency | Mumbai",
    description:
      "Join our multidisciplinary team of developers, designers, and marketers in Mumbai.",
    images: ["/assets/images/career-hero.webp"],
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Careers", url: "/career" },
]);

export default function Career() {
  const jobSchemas = ROLES.map((role) =>
    createJobPostingSchema({
      title: role.title,
      description: role.description,
      datePosted: "2026-01-01T00:00:00Z",
      employmentType: role.type.includes("Full Time") ? "FULL_TIME" : "CONTRACTOR",
      locality: "Andheri East, Mumbai",
      region: "Maharashtra",
      postalCode: "400072",
      country: "IN",
      url: `https://www.tzar.co/career#${role.id}`,
    })
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {jobSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <CareerView />
    </>
  );
}
