import type { Metadata } from "next";
import { SocialMediaMarketingPage } from "@/legacy-src/pages/SocialMediaMarketingPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createServiceSchema, createBreadcrumbSchema } from "@/app/lib/schemas";

export const metadata: Metadata = {
  title: "Social Media Marketing & Brand Amplification Services | Tzar Digital Agency",
  description: "Viral content strategies, reels production, and targeted paid ad funnels across Instagram, Meta, and LinkedIn.",
  alternates: {
    canonical: "https://www.tzar.co/social-media-marketing-services",
  },
  openGraph: {
    title: "Social Media Marketing & Brand Amplification Services | Tzar Digital Agency",
    description: "Viral content strategies, reels production, and targeted paid ad funnels across Instagram, Meta, and LinkedIn.",
    url: "https://www.tzar.co/social-media-marketing-services",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = createServiceSchema({
  name: "Social Media Marketing Services",
  serviceType: "Social Media Marketing & Performance Advertising",
  description:
    "End-to-end social media growth, organic community management, short-form video production, and high-conversion paid Meta and LinkedIn ad campaigns.",
  url: "https://www.tzar.co/social-media-marketing-services",
  image: "/assets/images/social_media_marketing.webp",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Social Media Marketing", url: "/social-media-marketing-services" },
]);

export default function SocialMediaService() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      <SocialMediaMarketingPage />
    </>
  );
}
