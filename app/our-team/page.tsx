import { Metadata } from "next";
import OurTeamView from "./OurTeamView";

export const metadata: Metadata = {
  title: "Our Team | TZAR VENTURE - Digital Specialists & Engineers",
  description:
    "Meet the multidisciplinary specialists at Tzar Venture - web engineers, SEO analysts, creative directors, and performance marketers driving results for ambitious brands.",
  openGraph: {
    title: "Our Team | Tzar Venture - Creative & Technical Collective",
    description:
      "Meet our dedicated team of full-stack developers, SEO growth strategists, social media managers, and creative designers.",
    url: "https://www.tzar.co/our-team",
    siteName: "Tzar Venture",
    images: [
      {
        url: "/assets/images/backgrounds/page-header-bgOur-Team.jpg",
        width: 1200,
        height: 630,
        alt: "Our Team - Tzar Venture",
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
