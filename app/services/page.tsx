import { Metadata } from "next";
import ServicesView from "./ServicesView";

export const metadata: Metadata = {
  title: "Digital Marketing, Web & Growth Services | TZAR VENTURE",
  description:
    "Explore Tzar Venture's full suite of enterprise web development, SEO, graphic design, social media marketing, PPC advertising, and digital brand scaling services.",
  openGraph: {
    title: "Full-Service Agency Capabilities | Tzar Venture",
    description:
      "Enterprise web engineering, search engine dominance, high-retention performance media, and iconic brand identities engineered for compounding ROI.",
    url: "https://www.tzar.co/services",
    siteName: "Tzar Venture",
    images: [
      {
        url: "/assets/images/backgrounds/page-header-bgOur-Services.jpg",
        width: 1200,
        height: 630,
        alt: "Our Services - Tzar Venture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tzar.co/services",
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
