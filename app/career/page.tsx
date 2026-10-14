import type { Metadata } from "next";
import { CareerPage } from "@/legacy-src/pages/CareerPage";

export const metadata: Metadata = {
  title: "Careers at Tzar Digital Agency | Join Our Multidisciplinary Growth Team",
  description: "Explore career openings for software engineers, SEO strategists, graphic designers, and performance marketers at Tzar.",
  alternates: {
    canonical: "https://www.tzar.co/career",
  },
  openGraph: {
    title: "Careers at Tzar Digital Agency | Join Our Multidisciplinary Growth Team",
    description: "Explore career openings for software engineers, SEO strategists, graphic designers, and performance marketers at Tzar.",
    url: "https://www.tzar.co/career",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function Career() {
  return <CareerPage />;
}
