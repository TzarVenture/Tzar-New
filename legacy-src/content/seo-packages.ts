export interface PackageTier {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
}

export const SEO_PACKAGES: PackageTier[] = [
  {
    name: "Standard SEO Starter",
    price: "₹15,000",
    period: "/ month",
    popular: false,
    features: [
      "Up to 15 Target Keywords",
      "In-Depth Site Technical Audit",
      "On-Page Title & Meta Tag Optimization",
      "Google Search Console & GA4 Integration",
      "10 High-Authority Backlinks / Mo",
      "Monthly Keyword Ranking Reports",
    ],
  },
  {
    name: "Growth SEO Business",
    price: "₹30,000",
    period: "/ month",
    popular: true,
    features: [
      "Up to 35 Target Keywords",
      "Full On-Page & Schema Markup Optimization",
      "Speed & Core Web Vitals Optimization",
      "Google My Business (GMB) Local Ranking",
      "25 High-Authority Backlinks / Mo",
      "2 Monthly SEO Blog Articles Included",
    ],
  },
  {
    name: "Enterprise E-Com SEO",
    price: "₹55,000",
    period: "/ month",
    popular: false,
    features: [
      "Up to 75 Target Keywords",
      "E-Commerce Product Category SEO",
      "Technical Crawl & Indexing Audit",
      "Structured Data & Rich Snippets Markup",
      "50 High-Authority Backlinks / Mo",
      "4 Monthly SEO Blog Articles Included",
    ],
  },
];

export const LOCAL_SEO_PACKAGES: PackageTier[] = [
  {
    name: "Local Business Starter",
    price: "₹12,000",
    period: "/ month",
    features: [
      "1 Google Business Profile (GMB)",
      "Local Map Pack Ranking Optimization",
      "Local Citation & Directory Listings (20+)",
      "Customer Review Management Guidance",
      "Monthly Local Search Visibility Report",
    ],
  },
  {
    name: "Multi-Location Local Pro",
    price: "₹25,000",
    period: "/ month",
    popular: true,
    features: [
      "Up to 3 Google Business Profiles",
      "Map Pack 3-Top Slot Optimization",
      "Local Citation & Directory Listings (50+)",
      "Geo-Targeted Landing Page Optimization",
      "Weekly GMB Posts & Photo Updates",
    ],
  },
];
