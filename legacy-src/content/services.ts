export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  iconName: string;
  badgeText: string;
  features: string[];
  benefits: string[];
  ctaText: string;
  href: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-development-services",
    title: "Website Development",
    subtitle: "High-performance, bespoke websites & web applications built for speed and conversions.",
    description: "Build ultra-fast, responsive, and custom React & Next.js websites optimized for SEO, instant page loads, and intuitive UX.",
    longDescription: "At Tzar Venture, we craft state-of-the-art web applications that combine modern UI aesthetics, lightning-fast execution, and seamless mobile responsiveness.",
    iconName: "Globe",
    badgeText: "High-Speed Tech",
    features: [
      "Custom React Architecture",
      "Tailwind CSS v4 Responsive & Glassmorphism Design",
      "High Conversion E-Commerce & Shopify Integration",
      "Instant Page Loads (<1.2s FCP) & 95+ Lighthouse Score",
      "CMS & Custom Backend Integration",
    ],
    benefits: [
      "Higher Google Search Visibility",
      "Increased Lead Conversion Rates",
      "Zero Layout Shifts & Ultra-low Latency",
      "Seamless Mobile & Cross-device Compatibility",
    ],
    ctaText: "Explore Web Packages",
    href: "/website-development-services",
  },
  {
    id: "seo",
    slug: "search-engine-optimization-services",
    title: "Search Engine Optimization",
    subtitle: "Dominate Google search results with data-driven organic SEO campaigns.",
    description: "In-depth keyword research, technical SEO audits, high-authority backlink creation, and local SEO optimizations.",
    longDescription: "Having a stunning website is only half the battle. Our SEO team drives high-intent organic traffic to your platform through data-backed keyword strategies.",
    iconName: "Search",
    badgeText: "Organic Growth",
    features: [
      "Technical SEO Audits & Core Web Vitals Optimization",
      "High-Intent Target Keyword Mapping",
      "Local Google Business Profile & Map Pack Optimization",
      "High-Authority Backlink Acquisition",
      "Monthly Analytics & Keyword Rank Reporting",
    ],
    benefits: [
      "Consistent 1st Page Google Rankings",
      "Sustained Long-term Organic Traffic",
      "Lower Customer Acquisition Costs (CAC)",
    ],
    ctaText: "View SEO Packages",
    href: "/search-engine-optimization-services",
  },
  {
    id: "graphic-designing",
    slug: "graphic-designing",
    title: "Graphic Designing",
    subtitle: "Captivating visual assets that convey your brand story and engage audiences.",
    description: "Custom corporate branding, marketing collaterals, social media creatives, and high-impact visual design.",
    longDescription: "Our creative studio translates your core message into visually stunning digital and print designs.",
    iconName: "Palette",
    badgeText: "Creative Design",
    features: [
      "Brand Identity & Style Guidelines",
      "Digital Marketing & Social Media Creatives",
      "Corporate Brochures & Pitch Decks",
      "Vector Illustrations & Infographics",
    ],
    benefits: [
      "Unforgettable Brand Visual Presence",
      "Higher Social Media Engagement",
    ],
    ctaText: "Explore Design Portfolio",
    href: "/graphic-designing",
  },
  {
    id: "social-media-marketing",
    slug: "social-media-marketing-services",
    title: "Social Media Marketing",
    subtitle: "Strategic social media management and high-converting performance campaigns.",
    description: "End-to-end content creation, community management, influencer partnerships, and paid Meta/Instagram campaigns.",
    longDescription: "Transform social channels into automated customer acquisition engines.",
    iconName: "Share2",
    badgeText: "Brand Engagement",
    features: [
      "Strategic Content Calendar & Copywriting",
      "High-engagement Video Reels",
      "Meta Ads Campaign Setup",
      "Audience Targeting & Community Building",
    ],
    benefits: [
      "Expanded Social Audience & Reach",
      "Direct Customer Interaction & Loyalty",
    ],
    ctaText: "Get Social Strategy",
    href: "/social-media-marketing-services",
  },
  {
    id: "logo-design",
    slug: "logo-design-services",
    title: "Logo Design",
    subtitle: "Timeless, iconic logo designs that define your corporate identity.",
    description: "Bespoke vector logo design, brandmark concepts, typography guidelines, and complete logo kits.",
    longDescription: "Your logo is the heartbeat of your visual brand.",
    iconName: "Award",
    badgeText: "Brand Identity",
    features: [
      "Multiple Bespoke Concept Variations",
      "Vector Master Files (SVG, EPS, AI, PNG, PDF)",
      "Dark & Light Background Adapters",
    ],
    benefits: [
      "Instant Brand Recognition",
      "Scalable Across All Media",
    ],
    ctaText: "Design Your Logo",
    href: "/logo-design-services",
  },
  {
    id: "content-marketing",
    slug: "content-marketing-services",
    title: "Content Marketing",
    subtitle: "High-value articles, blogs, and copywriting that educate and convert.",
    description: "SEO blog writing, website copywriting, email newsletters, and thought leadership articles.",
    longDescription: "Engage your target audience with compelling stories and authoritative industry insights.",
    iconName: "FileText",
    badgeText: "High Conversion",
    features: [
      "SEO Blog Strategy & Monthly Articles",
      "High-Converting Landing Page Copy",
      "Email Campaign Newsletters",
    ],
    benefits: [
      "Established Industry Thought Leadership",
      "Boosted Organic Search Indexing",
    ],
    ctaText: "Explore Content Services",
    href: "/content-marketing-services",
  },
];
