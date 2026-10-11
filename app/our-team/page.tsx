import { Metadata } from "next";
import OurTeamView from "./OurTeamView";

export const metadata: Metadata = {
  title: "Our Team | TZAR DIGITAL - Digital Specialists & Engineers",
  description:
    "Meet the multidisciplinary specialists at Tzar Digital Agency - web engineers, SEO analysts, creative directors, and performance marketers driving results for ambitious brands.",
  openGraph: {
    title: "Our Team | Tzar Digital Agency - Creative & Technical Collective",
    description:
      "Meet our dedicated team of full-stack developers, SEO growth strategists, social media managers, and creative designers.",
    url: "https://www.tzar.co/our-team",
    siteName: "Tzar Digital Agency",
    images: [
      {
        url: "/assets/images/our-team-page.webp",
        width: 1200,
        height: 630,
        alt: "Our Team - Tzar Digital Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tzar.co/our-team",
  },
};

export default function TeamPage() {
  return <OurTeamView />;
}
