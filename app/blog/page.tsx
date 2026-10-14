import type { Metadata } from "next";
import { BlogPage } from "@/legacy-src/pages/BlogPage";

export const metadata: Metadata = {
  title: "Digital Insights & Growth Playbooks | Tzar Digital Agency Blog",
  description: "Actionable strategies on modern web development, SEO algorithm updates, conversion rate optimization, and brand scaling.",
  alternates: {
    canonical: "https://www.tzar.co/blog",
  },
  openGraph: {
    title: "Digital Insights & Growth Playbooks | Tzar Digital Agency Blog",
    description: "Actionable strategies on modern web development, SEO algorithm updates, conversion rate optimization, and brand scaling.",
    url: "https://www.tzar.co/blog",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function Blog() {
  return <BlogPage />;
}
