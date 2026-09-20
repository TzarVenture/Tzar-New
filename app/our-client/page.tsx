import { Metadata } from "next";
import OurClientView from "./OurClientView";

export const metadata: Metadata = {
  title: "Our Clients & Case Studies | TZAR VENTURE - Trusted by 100+ Brands",
  description:
    "Explore the brands, startups, and enterprises that trust Tzar Venture for bespoke website development, search engine optimization, and performance marketing across India and globally.",
  openGraph: {
    title: "Our Clients | Tzar Venture - Clients & Success Stories",
    description:
      "Tzar Venture has generated high-intent leads and online revenue for 100+ B2B & B2C clients across web, SEO, and social channels.",
    url: "https://www.tzar.co/our-client",
    siteName: "Tzar Venture",
    images: [
      {
        url: "/assets/images/backgrounds/page-header-bgOurClients.jpg",
        width: 1200,
        height: 630,
        alt: "Our Clients - Tzar Venture",
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
