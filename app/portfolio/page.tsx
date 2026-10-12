import type { Metadata } from "next";
import PortfolioView from "./PortfolioView";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Tzar Digital Agency",
  description:
    "Explore Tzar Digital Agency's portfolio of custom web applications, e-commerce stores, video reels, brand identities, and performance case studies.",
  openGraph: {
    title: "Our Work & Case Studies | Tzar Digital Agency",
    description:
      "High-conversion websites, luxury packaging, brand campaigns, and custom digital platforms engineered for ambitious brands.",
    url: "https://www.tzar.co/portfolio",
    siteName: "Tzar Digital Agency",
    images: [
      {
        url: "/assets/images/portfolio-hero.webp",
        width: 1536,
        height: 1024,
        alt: "Tzar Digital Agency Portfolio Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tzar.co/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioView />;
}

