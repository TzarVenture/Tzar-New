import type { Metadata } from "next";
import { HireUsPage } from "@/legacy-src/pages/HireUsPage";

export const metadata: Metadata = {
  title: "Hire Us | Start Your Digital Growth Partnership with Tzar Digital Agency",
  description: "Partner with India’s premier digital agency system for high-performance web development, SEO domination, and brand scaling.",
  alternates: {
    canonical: "https://www.tzar.co/hire-us",
  },
  openGraph: {
    title: "Hire Us | Start Your Digital Growth Partnership with Tzar Digital Agency",
    description: "Partner with India’s premier digital agency system for high-performance web development, SEO domination, and brand scaling.",
    url: "https://www.tzar.co/hire-us",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function HireUs() {
  return <HireUsPage />;
}

