import { Metadata } from "next";
import AboutUsView from "./AboutUsView";

export const metadata: Metadata = {
  title: "About Us | TZAR VENTURE - Digital Marketing Agency & Enterprise Web Systems",
  description:
    "Learn about Tzar Venture, our mission to change how businesses communicate online, our core values of transparency and integrity, and meet our multidisciplinary team of 40+ growth specialists.",
  openGraph: {
    title: "About Us | Tzar Venture - Digital Growth & Web Systems",
    description:
      "Tzar Venture combines cutting-edge engineering, creative storytelling, and performance marketing to scale ambitious brands across India and globally.",
    url: "https://www.tzar.co/about-us",
    siteName: "Tzar Venture",
    images: [
      {
        url: "/assets/images/backgrounds/page-header-bgAu.jpg",
        width: 1200,
        height: 630,
        alt: "About Tzar Venture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.tzar.co/about-us",
  },
};

export default function About() {
  return <AboutUsView />;
}
