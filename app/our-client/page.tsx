import { Metadata } from "next";
import OurClientView from "./OurClientView";

export const metadata: Metadata = {
  title: "Our Clients | TZAR DIGITAL - Trusted by 100+ Brands",
  description:
    "Explore the brands, startups, and enterprises that trust Tzar Digital Agency for bespoke website development, search engine optimization, and performance marketing across India and globally.",
  openGraph: {
    title: "Our Clients | Tzar Digital Agency - Clients & Success Stories",
    description:
      "Tzar Digital Agency has generated high-intent leads and online revenue for 100+ B2B & B2C clients across web, SEO, and social channels.",
    url: "https://www.tzar.co/our-client",
    siteName: "Tzar Digital Agency",
    images: [
      {
        url: "/assets/images/our-client-page.webp",
        width: 1200,
        height: 630,
        alt: "Our Clients - Tzar Digital Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tzar.co/our-client",
  },
};

export default function OurClientPage() {
  return <OurClientView />;
}
