import type { Metadata } from "next";
import BlogView from "./BlogView";

export const metadata: Metadata = {
  title: "Strategic Insights & Tech Publications | Tzar Digital Agency",
  description:
    "Authoritative playbooks, technical breakdowns, and revenue strategies written by search engineers and digital strategists at Tzar Digital Agency.",
  keywords: [
    "SEO agency insights",
    "digital marketing strategy",
    "search engine optimization guide",
    "Next.js web engineering",
    "ROI of SEO",
    "inbound marketing methodology",
    "Tzar Venture Mumbai",
  ],
  openGraph: {
    title: "Strategic Insights & Tech Publications | Tzar Digital Agency",
    description:
      "Authoritative playbooks, technical breakdowns, and revenue strategies written by search engineers and digital strategists at Tzar Digital Agency.",
    url: "https://www.tzar.co/blog",
    siteName: "Tzar Digital Agency",
    type: "website",
    images: [
      {
        url: "/assets/images/blog/myimage.png",
        width: 1200,
        height: 630,
        alt: "Tzar Digital Agency Strategic Publications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Insights & Tech Publications | Tzar Digital Agency",
    description:
      "Authoritative playbooks, technical breakdowns, and revenue strategies written by search engineers and digital strategists at Tzar Digital Agency.",
  },
  alternates: {
    canonical: "https://www.tzar.co/blog",
  },
};

export default function BlogPage() {
  return <BlogView />;
}
