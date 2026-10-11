import { Metadata } from "next";
import FaqsView from "./FaqsView";

export const metadata: Metadata = {
  title: "FAQs | Digital Marketing & Web Agency Questions | TZAR DIGITAL AGENCY",
  description:
    "Find answers to frequently asked questions about Tzar Digital Agency's website development, search engine optimization, paid media campaigns, and digital growth services.",
  openGraph: {
    title: "Frequently Asked Questions | Tzar Digital Agency",
    description:
      "Clear, transparent answers to questions regarding our web engineering, SEO timelines, PPC advertising, and digital agency partnerships.",
    url: "https://www.tzar.co/faqs",
    siteName: "Tzar Digital Agency",
    images: [
      {
        url: "/assets/images/backgrounds/page-header-bgFAQ.jpg",
        width: 1200,
        height: 630,
        alt: "FAQs - Tzar Digital Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tzar.co/faqs",
  },
};

export default function FaqPage() {
  return <FaqsView />;
}
