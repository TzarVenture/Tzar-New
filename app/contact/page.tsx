import type { Metadata } from "next";
import ContactView from "./ContactView";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Contact Us | Tzar Digital Agency - Mumbai & Global",
  description:
    "Connect with Tzar Digital Agency's team. Request a tailored proposal for custom web development, SEO domination, and performance marketing.",
  openGraph: {
    title: "Contact Tzar Digital Agency | Expert Digital Solutions",
    description:
      "Get in touch with our specialists. Guaranteed response within 24 business hours.",
    url: "https://www.tzar.co/contact",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tzar.co/contact",
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contact Us", url: "/contact" },
]);

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ContactView />
    </>
  );
}
