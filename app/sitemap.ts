import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    url: string;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
    priority: number;
  }> = [
    // 01. Core Root
    { url: "", changeFrequency: "weekly", priority: 1.0 },

    // 02. High-Value Services
    { url: "/services", changeFrequency: "weekly", priority: 0.9 },
    { url: "/website-development-services", changeFrequency: "weekly", priority: 0.9 },
    { url: "/search-engine-optimization-services", changeFrequency: "weekly", priority: 0.9 },
    { url: "/graphic-designing", changeFrequency: "weekly", priority: 0.9 },
    { url: "/social-media-marketing-services", changeFrequency: "weekly", priority: 0.9 },
    { url: "/logo-design-services", changeFrequency: "weekly", priority: 0.9 },
    { url: "/product-design-packaging-services", changeFrequency: "weekly", priority: 0.9 },
    { url: "/pay-per-click-services", changeFrequency: "monthly", priority: 0.8 },
    { url: "/tzar-studio", changeFrequency: "monthly", priority: 0.8 },
    { url: "/corporate-gifting", changeFrequency: "monthly", priority: 0.8 },
    { url: "/outdoor-ads", changeFrequency: "monthly", priority: 0.8 },

    // 03. Agency & Authority
    { url: "/about-us", changeFrequency: "monthly", priority: 0.8 },
    { url: "/our-client", changeFrequency: "monthly", priority: 0.8 },
    { url: "/our-team", changeFrequency: "monthly", priority: 0.8 },
    { url: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
    { url: "/faqs", changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { url: "/hire-us", changeFrequency: "monthly", priority: 0.8 },
    { url: "/career", changeFrequency: "monthly", priority: 0.7 },
    { url: "/internship", changeFrequency: "monthly", priority: 0.7 },
    { url: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { url: "/payment", changeFrequency: "monthly", priority: 0.7 },
    { url: "/payment-gateway", changeFrequency: "monthly", priority: 0.7 },

    // 04. Legal & Trust
    { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.4 },
    { url: "/terms-conditions", changeFrequency: "yearly", priority: 0.4 },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((item) => ({
    url: `https://www.tzar.co${item.url}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `https://www.tzar.co/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
