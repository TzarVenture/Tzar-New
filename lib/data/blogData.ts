export interface BlogAuthor {
  name: string;
  role: string;
  department: string;
}

export interface BlogContentSection {
  heading?: string;
  headingId?: string;
  subheading?: string;
  paragraphs?: string[];
  listItems?: { title?: string; text: string }[];
  callout?: {
    type?: "note" | "highlight" | "warning";
    text: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  description: string;
  category: "SEO & Organic Growth" | "Performance & Strategy" | "Inbound Marketing" | "Technical SEO" | "Web Engineering" | "Creative & Media";
  author: BlogAuthor;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
  tableOfContents: { id: string; label: string }[];
  content: BlogContentSection[];
  metaTitle: string;
  metaDescription: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "seo-business-growth",
    slug: "the-importance-of-seo-in-business-growth",
    aliases: [
      "The-importance-of-SEO-in-business-growth",
      "the-importance-of-seo-in-business-growth",
    ],
    title: "The Importance of SEO in Business Growth",
    description:
      "Since every modern business competes online, search engines are the ultimate revenue generators. Learn how intentional search optimization drives sustainable customer acquisition and long-term brand equity.",
    category: "SEO & Organic Growth",
    author: {
      name: "Tzar SEO Team",
      role: "Lead Search Strategist",
      department: "Organic Performance",
    },
    date: "Aug 26, 2024",
    readTime: "7 min",
    image: "/assets/images/blog/myimage.png",
    featured: true,
    tags: ["SEO", "Organic Traffic", "B2B Marketing", "Conversion Strategy"],
    tableOfContents: [
      { id: "how-seo-works", label: "How Does SEO Work on Search Engines?" },
      { id: "power-of-seo", label: "The Power of SEO in Modern Digital Marketing" },
      { id: "how-seo-helps-grow", label: "Discover How SEO Helps Your Business Grow Online" },
      { id: "content-calendar", label: "Building a Content Marketing Calendar" },
    ],
    content: [
      {
        paragraphs: [
          "Since modern businesses rely on digital channels to acquire customers, online search has become the primary revenue-generating infrastructure. Over 60% of modern consumer and B2B purchasing journeys initiate directly on mobile search queries.",
          "Selling online demands more than just a functional web application; it requires high search discoverability. Search Engine Optimization (SEO) represents the discipline of aligning your technical architecture, content quality, and domain authority with search engine ranking guidelines.",
          "At Tzar Digital Agency, we engineer organic growth pipelines that ensure your brand is positioned at the exact moment prospects are actively looking for solutions.",
        ],
      },
      {
        heading: "How Does SEO Work on Search Engines?",
        headingId: "how-seo-works",
        paragraphs: [
          "SEO functions primarily around user intent and semantic keywords. When an individual queries Google, algorithms crawl and interpret indexed documents to deliver the most authoritative and relevant response.",
          "A thoroughly optimized page must satisfy both technical accessibility (crawlability, indexing, sub-second latency) and high editorial relevance. When search engines recognize that your content provides comprehensive answers, your domain ascends the SERP (Search Engine Results Page).",
          "Excellently optimized web properties generate compounding value because they capture organic traffic without ongoing paid ad spend per click.",
        ],
      },
      {
        heading: "The Power of SEO in Modern Digital Marketing",
        headingId: "power-of-seo",
        paragraphs: [
          "Digital marketing cannot scale sustainably on paid acquisition alone. To build an enduring market position, companies must integrate UX performance, keyword clustering, technical hygiene, and backlink authority into a cohesive flywheel.",
        ],
        listItems: [
          {
            title: "Keyword & Intent Clustering",
            text: "Mapping commercial and informational search queries to targeted landing pages and editorial guides.",
          },
          {
            title: "High-Authority Link Acquisition",
            text: "Earning verified citations, press features, and editorial mentions from reputable industry publications.",
          },
          {
            title: "Semantic Content Architecture",
            text: "Structuring deep content hubs with comprehensive topic coverage that establishes topical authority.",
          },
          {
            title: "Core Web Vitals & Technical Maintenance",
            text: "Guaranteeing high page speed, mobile responsiveness, structured schema markup, and zero broken crawl paths.",
          },
        ],
      },
      {
        heading: "Discover How SEO Helps Your Business Grow Online",
        headingId: "how-seo-helps-grow",
        paragraphs: [
          "The commercial impact of disciplined SEO compounds across several organizational dimensions:",
        ],
        listItems: [
          {
            title: "Improves Decision-Making with Real Search Data",
            text: "SEO telemetry uncovers the precise language, pain points, and queries your prospective customers use every day.",
          },
          {
            title: "Compounding Organic Pipeline",
            text: "Unlike paid pay-per-click ads which turn off when budget runs out, indexed high-ranking assets generate inbound qualified leads indefinitely.",
          },
          {
            title: "Defensible Competitive Moat",
            text: "Holding top organic rankings establishes immense credibility and pushes direct competitors below the fold.",
          },
          {
            title: "Enhanced Client Communication & Trust",
            text: "Organic search visibility provides independent social proof and third-party validation that validates your market leadership.",
          },
        ],
        callout: {
          type: "highlight",
          text: "Search traffic delivers an average conversion rate 3x higher than standard social impressions because searchers are actively hunting for immediate solutions.",
        },
      },
      {
        heading: "Building a Content Marketing Calendar",
        headingId: "content-calendar",
        paragraphs: [
          "To maximize organic return, every piece of content must map to a specific stage in the customer acquisition funnel:",
          "Top of the Funnel (TOFU): Informational assets, conceptual definitions, and foundational guides that solve immediate queries and capture broad awareness.",
          "Middle of the Funnel (MOFU): In-depth comparison frameworks, operational teardowns, and verified case studies that validate your technical expertise.",
          "Bottom of the Funnel (BOFU): Solution pages, commercial calculators, and consultation funnels that convert qualified traffic into commercial conversations.",
        ],
      },
    ],
    metaTitle: "The Importance of SEO in Business Growth | Tzar Digital Agency",
    metaDescription:
      "Explore how search engine optimization drives compounding organic revenue, builds defensible competitive moats, and scales customer acquisition.",
  },
  {
    id: "return-on-investment-roi",
    slug: "what-is-return-on-investment-roi",
    aliases: [
      "What-is-return-on-investment-(ROI)",
      "what-is-return-on-investment-(roi)",
      "what-is-return-on-investment",
    ],
    title: "What is Return on Investment (ROI)? How to Measure It",
    description:
      "Organic search delivers over half of all website traffic. Discover the practical mathematical formulas, KPIs, and tracking methodologies to accurately calculate and maximize SEO ROI.",
    category: "Performance & Strategy",
    author: {
      name: "Tzar Analytics",
      role: "Director of Performance",
      department: "Data & Revenue Ops",
    },
    date: "Aug 26, 2024",
    readTime: "8 min",
    image: "/assets/images/blog/what-is-roi.png",
    featured: false,
    tags: ["ROI", "Analytics", "SEO Metrics", "Revenue Modeling", "Growth"],
    tableOfContents: [
      { id: "defining-seo-roi", label: "What is SEO Return on Investment?" },
      { id: "how-to-measure-roi", label: "How to Measure SEO ROI: The Formula" },
      { id: "why-roi-matters", label: "Why Does Calculating SEO ROI Matter?" },
      { id: "core-input-variables", label: "The Key Input Variables for Accurate Modeling" },
    ],
    content: [
      {
        paragraphs: [
          "A successful digital marketing engagement is not measured simply by raw traffic numbers or vanity keyword rankings; it is evaluated on net monetary return. Organic search accounts for over 53% of all trackable web traffic globally.",
          "Measuring the ROI of SEO ties technical actions directly to balance sheet outcomes, providing executive clarity on capital efficiency and marketing performance.",
        ],
      },
      {
        heading: "What is SEO Return on Investment?",
        headingId: "defining-seo-roi",
        paragraphs: [
          "SEO ROI is the financial metric that compares the net revenue produced by organic search channels against the total capital expenditure invested in technical optimization, content production, and tooling.",
          "For example, if your business spends $5,000 monthly on SEO and generates $17,500 in attributable closed revenue directly from organic prospects, the net gain is $12,500, representing a 250% ROI.",
        ],
      },
      {
        heading: "How to Measure SEO ROI: The Formula",
        headingId: "how-to-measure-roi",
        paragraphs: [
          "The standardized mathematical formula for calculating organic marketing return is:",
          "Calculating this accurately requires multi-touch or first-touch attribution inside your CRM, ensuring form inquiries, e-commerce checkouts, and inbound calls are tagged with organic UTM sources.",
        ],
        callout: {
          type: "note",
          text: "SEO ROI (%) = [ (Attributable Organic Revenue - Total SEO Spend) / Total SEO Spend ] × 100",
        },
      },
      {
        heading: "The Key Input Variables for Accurate Modeling",
        headingId: "core-input-variables",
        paragraphs: [
          "To establish a predictable forecasting model for search investments, calculate the following five metrics:",
        ],
        listItems: [
          {
            title: "Estimated Organic Traffic Volume",
            text: "Total monthly visitors arriving through non-brand search engine queries.",
          },
          {
            title: "Average Conversion Rate (CVR)",
            text: "The percentage of visitors completing a high-value commercial action (usually 3% to 8% for well-optimized B2B landing pages).",
          },
          {
            title: "Sales Qualified Lead (SQL) Close Rate",
            text: "The ratio of form submissions that convert into signed enterprise agreements or completed orders.",
          },
          {
            title: "Customer Lifetime Value (LTV)",
            text: "The net gross profit generated over the entire commercial lifecycle of an acquired customer.",
          },
          {
            title: "Fully Burdened Agency & Production Cost",
            text: "The total investment in agency retainers, copywriting, software subscriptions, and developer hours.",
          },
        ],
      },
      {
        heading: "Why Does Calculating SEO ROI Matter?",
        headingId: "why-roi-matters",
        paragraphs: [
          "When leadership understands the clear financial multiplier of organic growth, search ceases to be viewed as a discretionary marketing expense and becomes recognized as an essential capital allocation asset.",
        ],
      },
    ],
    metaTitle: "What is Return on Investment (ROI)? How to Measure It | Tzar Agency",
    metaDescription:
      "A complete guide to calculating and optimizing the financial ROI of search engine optimization and digital marketing campaigns.",
  },
  {
    id: "inbound-marketing-guide",
    slug: "what-is-inbound-marketing",
    aliases: [
      "What-is-inbound-marketing",
      "what-is-inbound-marketing",
    ],
    title: "What is Inbound Marketing? And Does It Work?",
    description:
      "Inbound marketing is a systematic methodology that pulls interested prospects in through valuable content and authoritative education rather than disruptive cold outreach.",
    category: "Inbound Marketing",
    author: {
      name: "Tzar Growth Lab",
      role: "Inbound Specialist",
      department: "Content & Demand Gen",
    },
    date: "Aug 26, 2024",
    readTime: "6 min",
    image: "/assets/images/blog/what-is-inbound-marketing.png",
    featured: false,
    tags: ["Inbound Marketing", "Demand Generation", "Content Strategy", "Lead Nurturing"],
    tableOfContents: [
      { id: "what-is-inbound", label: "What is Inbound Marketing?" },
      { id: "four-stages", label: "The Four Core Stages of Inbound Marketing" },
      { id: "inbound-vs-outbound", label: "Inbound vs. Outbound: The Efficiency Comparison" },
      { id: "how-to-start", label: "How to Build Your Inbound Flywheel" },
    ],
    content: [
      {
        paragraphs: [
          "Modern buyers have developed total immunity to cold phone calls, aggressive email blasts, and intrusive banner ads. Inbound marketing replaces disruption with magnetic attraction.",
          "By publishing deep domain expertise, actionable playbooks, and tailored tools, your business attracts high-intent buyers who are already in the market seeking answers.",
        ],
      },
      {
        heading: "The Four Core Stages of Inbound Marketing",
        headingId: "four-stages",
        paragraphs: [
          "A battle-tested inbound engine operates across four sequential phases:",
        ],
        listItems: [
          {
            title: "1. Attracting High-Intent Prospects",
            text: "Using targeted SEO, technical whitepapers, and insightful social commentary to earn the attention of decision-makers before they speak to sales.",
          },
          {
            title: "2. Converting Visitors into Leads",
            text: "Exchanging proprietary calculators, industry benchmark reports, or interactive audits for verified contact credentials.",
          },
          {
            title: "3. Closing Deals Through Contextual Nurturing",
            text: "Automating relevant case studies and strategic breakdowns based on the exact behavioral patterns exhibited by the prospect.",
          },
          {
            title: "4. Delighting Customers into Brand Advocates",
            text: "Delivering exceptional ongoing execution and continuous educational value that turns clients into vocal referral partners.",
          },
        ],
      },
      {
        heading: "Inbound vs. Outbound: The Efficiency Comparison",
        headingId: "inbound-vs-outbound",
        paragraphs: [
          "Outbound marketing pushes unsolicited messages to hundreds of cold contacts, yielding high customer acquisition costs (CAC) and high churn. Inbound marketing pulls qualified prospects into your orbit when their purchasing intent is at its peak.",
        ],
        callout: {
          type: "highlight",
          text: "Companies with mature inbound marketing setups generate 54% more qualified leads per dollar spent than organizations relying strictly on outbound cold calling.",
        },
      },
    ],
    metaTitle: "What is Inbound Marketing? And Does It Work? | Tzar Agency",
    metaDescription:
      "Discover the four stages of modern inbound marketing and how to build a scalable, high-converting customer acquisition flywheel.",
  },
  {
    id: "black-hat-seo-protection",
    slug: "what-is-black-hat-seo",
    aliases: [
      "What-is-Black-Hat-SEO",
      "what-is-black-hat-seo",
    ],
    title: "What is Black Hat SEO & How to Protect Your Brand",
    description:
      "An investigative teardown of manipulative search practices, algorithmic penalties, and ethical recovery frameworks to ensure your domain avoids manual de-indexing.",
    category: "Technical SEO",
    author: {
      name: "Search Engineering Team",
      role: "Technical SEO Director",
      department: "Search Forensics",
    },
    date: "Aug 26, 2024",
    readTime: "8 min",
    image: "/assets/images/blog/what-is-black-hat-seo.png",
    featured: false,
    tags: ["Technical SEO", "Google Penalties", "Site Auditing", "Search Compliance"],
    tableOfContents: [
      { id: "what-is-black-hat", label: "What is Black Hat SEO?" },
      { id: "common-manipulations", label: "Common Black Hat Exploitation Techniques" },
      { id: "catastrophic-risks", label: "The Catastrophic Business Risks" },
      { id: "recovery-audit", label: "How to Audit & Cleanse Your Web Properties" },
    ],
    content: [
      {
        paragraphs: [
          "“Black Hat SEO” refers to the intentional violation of search engine quality guidelines to engineer artificial ranking increases. While manipulative loopholes occasionally produce temporary spikes, the inevitable algorithmic penalty can permanently destroy a company's organic distribution.",
          "Search engines like Google employ thousands of machine-learning models (including SpamBrain) specifically tuned to detect and nullify artificial link schemes and programmatic junk.",
        ],
      },
      {
        heading: "Common Black Hat Exploitation Techniques",
        headingId: "common-manipulations",
        paragraphs: [
          "The following fraudulent tactics represent high-risk practices that trigger immediate algorithmic down-ranking:",
        ],
        listItems: [
          {
            title: "Keyword Stuffing",
            text: "Unnaturally repeating search terms across copy and meta tags to game lexical search algorithms.",
          },
          {
            title: "Private Blog Networks (PBNs)",
            text: "Purchasing expired domains with residual authority to create artificial backlink rings.",
          },
          {
            title: "Cloaking & Sneaky Redirects",
            text: "Serving human visitors clean editorial pages while showing automated Googlebot crawlers keyword-stuffed HTML.",
          },
          {
            title: "Scraped & Programmatic Low-Quality Content",
            text: "Duplicating competitor articles or spitting out unedited AI text without original analysis or proprietary data.",
          },
          {
            title: "Hidden Text & Invisible Anchors",
            text: "Camouflaging keywords via CSS (zero font size, background color matching) to manipulate keyword density.",
          },
        ],
      },
      {
        heading: "The Catastrophic Business Risks",
        headingId: "catastrophic-risks",
        paragraphs: [
          "When a website is flagged for manipulative behavior, consequences range from sudden 80% traffic drops to complete manual de-indexing from Google Search.",
          "Recovering from an algorithmic penalty often takes 6 to 18 months of intensive link disavowal, technical recoding, and editorial overhaul, resulting in hundreds of thousands of dollars in lost enterprise revenue.",
        ],
        callout: {
          type: "warning",
          text: "Never entrust your brand's core domain to low-cost agencies promising #1 rankings in 14 days using automated backlink packages.",
        },
      },
      {
        heading: "How to Audit & Cleanse Your Web Properties",
        headingId: "recovery-audit",
        paragraphs: [
          "To safeguard your digital assets, conduct quarterly backlink audits using Google Search Console and trusted enterprise crawlers. Identify toxic anchor text patterns and disavow suspicious domain referrers immediately.",
        ],
      },
    ],
    metaTitle: "What is Black Hat SEO & How to Protect Your Brand | Tzar Agency",
    metaDescription:
      "A technical audit of search manipulation techniques, Google SpamBrain penalties, and actionable recovery procedures for modern businesses.",
  },
  {
    id: "nextjs-app-router-vs-templates",
    slug: "why-nextjs-outperforms-legacy-web-templates",
    aliases: ["why-nextjs-outperforms-legacy-web-templates"],
    title: "Why Next.js App Router Outperforms Legacy Web Templates",
    description:
      "Explore how React Server Components, Edge rendering, and sub-second page performance directly impact conversion rates, SEO indexation, and user retention.",
    category: "Web Engineering",
    author: {
      name: "Tzar Tech Team",
      role: "Senior Full-Stack Engineer",
      department: "Web Infrastructure",
    },
    date: "Jul 20, 2024",
    readTime: "7 min",
    image: "/assets/images/blog/blog1.jpg",
    featured: false,
    tags: ["Next.js", "React 19", "Web Performance", "Core Web Vitals"],
    tableOfContents: [
      { id: "modern-web-bottlenecks", label: "The Bottlenecks of Legacy CMS Templates" },
      { id: "server-components-edge", label: "The Server Components Revolution" },
      { id: "performance-to-revenue", label: "Sub-Second Latency Directly Correlates to Revenue" },
    ],
    content: [
      {
        paragraphs: [
          "Legacy monolithic CMS templates are burdened by bloated JavaScript bundles, sluggish database queries, and fragile third-party plugins. In contrast, modern web engineering with Next.js App Router shifts computation to the edge.",
          "By streaming HTML straight from server components, clients receive visually rendered pages in under 800 milliseconds, optimizing Core Web Vitals and lowering bounce rates dramatically.",
        ],
      },
      {
        heading: "The Server Components Revolution",
        headingId: "server-components-edge",
        paragraphs: [
          "React Server Components keep sensitive API tokens, heavy markdown parsers, and data transformations off the client browser entirely. Zero client-side bundle overhead means lightning-quick Time to First Byte (TTFB).",
        ],
      },
      {
        heading: "Sub-Second Latency Directly Correlates to Revenue",
        headingId: "performance-to-revenue",
        paragraphs: [
          "Google search ranking algorithms explicitly reward websites that meet rigorous Core Web Vitals thresholds. For e-commerce and high-ticket B2B agencies, every 100ms improvement in page speed generates measurable uplifts in checkout and form submission rates.",
        ],
      },
    ],
    metaTitle: "Why Next.js Outperforms Legacy Web Templates | Tzar Agency",
    metaDescription:
      "How React Server Components, Edge caching, and modern web engineering outperform legacy WordPress templates in speed and SEO rankings.",
  },
  {
    id: "local-seo-google-business-guide",
    slug: "local-seo-google-business-profile-guide",
    aliases: ["local-seo-google-business-profile-guide"],
    title: "The Tactical Guide to Local SEO & Google Business Profiles",
    description:
      "A step-by-step masterclass on capturing Google Map Pack top 3 positions, optimizing multi-location citations, and converting local high-intent searchers.",
    category: "SEO & Organic Growth",
    author: {
      name: "Tzar Local Search Team",
      role: "Local Search Specialist",
      department: "Organic Performance",
    },
    date: "Jul 15, 2024",
    readTime: "6 min",
    image: "/assets/images/blog/blog2.jpg",
    featured: false,
    tags: ["Local SEO", "Google Maps", "GBP Optimization", "Foot Traffic"],
    tableOfContents: [
      { id: "the-map-pack-advantage", label: "The Google 3-Pack Advantage" },
      { id: "citation-consistency", label: "NAP Consistency and Local Citations" },
      { id: "review-velocity", label: "Review Velocity & Conversion Optimization" },
    ],
    content: [
      {
        paragraphs: [
          "For commercial service firms, physical clinics, and premium hospitality venues, local search intent represents the highest-converting query pool in digital marketing.",
          "Appearing in the top 3 spots of the Google Maps Local Pack captures up to 44% of all local search clicks before organic blue links are even scanned.",
        ],
      },
      {
        heading: "NAP Consistency and Local Citations",
        headingId: "citation-consistency",
        paragraphs: [
          "Name, Address, and Phone number (NAP) data must match identically across all global indexing directories, from Google to Apple Maps, Bing Places, and local chambers of commerce. Any discrepancies degrade algorithmic trust.",
        ],
      },
    ],
    metaTitle: "The Tactical Guide to Local SEO & Google Business Profiles | Tzar",
    metaDescription:
      "Master Google Business Profile optimization, local citations, and Map Pack dominance with Tzar Agency's tactical guide.",
  },
  {
    id: "food-shoots-conversion-secrets",
    slug: "food-shoots-drive-swiggy-zomato-conversions",
    aliases: ["food-shoots-drive-swiggy-zomato-conversions"],
    title: "How Visual Storytelling Drives Conversions on Delivery Platforms",
    description:
      "Visual psychology and food photography insights for cloud kitchens and hospitality brands seeking 3x uplifts in click-through and average order values.",
    category: "Creative & Media",
    author: {
      name: "Tzar Creative Studio",
      role: "Creative Director",
      department: "Media Production",
    },
    date: "Jul 10, 2024",
    readTime: "5 min",
    image: "/assets/images/blog/blog3.jpg",
    featured: false,
    tags: ["Food Photography", "Cloud Kitchen", "Swiggy & Zomato", "Conversion"],
    tableOfContents: [
      { id: "visual-appetite-appeal", label: "Appetite Appeal and Sensory Cues" },
      { id: "menu-hierarchy", label: "Visual Hierarchy for Delivery App Listings" },
    ],
    content: [
      {
        paragraphs: [
          "On high-frequency delivery apps like Swiggy and Zomato, consumers spend an average of only 1.8 seconds evaluating a menu item before scrolling. Visual appetite appeal is the ultimate conversion lever.",
          "High-definition, studio-lit food assets trigger biological cravings, driving significantly higher click-through rates and reducing cart abandonment.",
        ],
      },
    ],
    metaTitle: "Visual Storytelling for Food Brands | Tzar Studio",
    metaDescription:
      "Learn how cinematic food photography and high-contrast menu visuals drive customer conversions for cloud kitchens and restaurants.",
  },
];

/* Helper queries */
export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getFeaturedBlogPost(): BlogPost {
  return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
}

export function getBlogPostBySlug(rawSlug: string): BlogPost | undefined {
  if (!rawSlug) return undefined;
  const decoded = decodeURIComponent(rawSlug).trim().toLowerCase();
  
  return BLOG_POSTS.find((p) => {
    if (p.slug.toLowerCase() === decoded) return true;
    if (p.aliases?.some((alias) => alias.toLowerCase() === decoded)) return true;
    // Allow normalized match without parenthesis or symbols
    const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (normalize(p.slug) === normalize(decoded)) return true;
    if (p.aliases?.some((alias) => normalize(alias) === normalize(decoded))) return true;
    return false;
  });
}

export function getRelatedBlogPosts(currentSlug: string, category?: string, limit = 3): BlogPost[] {
  const filtered = BLOG_POSTS.filter((p) => p.slug !== currentSlug);
  const sameCategory = filtered.filter((p) => p.category === category);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const remaining = filtered.filter((p) => p.category !== category);
  return [...sameCategory, ...remaining].slice(0, limit);
}

export const BLOG_CATEGORIES = [
  "All",
  "SEO & Organic Growth",
  "Performance & Strategy",
  "Inbound Marketing",
  "Technical SEO",
  "Web Engineering",
  "Creative & Media",
] as const;
