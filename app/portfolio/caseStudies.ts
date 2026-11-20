/* ──────────────────────────────────────────────────────────────────────────
   PORTFOLIO CASE STUDIES
   Plain data module (no "use client") so both the portfolio page and the
   statically generated /portfolio/[slug] pages can import it.

   Screenshots live in /public/optimized/assets/images/portfolio/case-studies.
   Personal names, contact details and business figures in CRM screenshots
   were blurred at capture time.
   ────────────────────────────────────────────────────────────────────────── */

export type CaseStudyKind = "platform" | "web";
export type StackCategory = "crm" | "nextjs" | "shopify" | "wordpress";

export type ModuleIcon =
  | "pipeline"
  | "invoice"
  | "chart"
  | "users"
  | "phone"
  | "headset"
  | "mic"
  | "shield"
  | "route"
  | "megaphone"
  | "calendar"
  | "globe"
  | "cart"
  | "gift"
  | "search"
  | "layout"
  | "zap"
  | "file";

export interface CaseStudyModule {
  icon: ModuleIcon;
  title: string;
  desc: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  /** Short label used in eyebrow tags, e.g. "Custom CRM · Internal" */
  label: string;
  kind: CaseStudyKind;
  category: StackCategory;
  industry: string;
  tagline: string;
  summary: string;
  /** Public URL. Omitted for platforms that sit behind a login. */
  liveUrl?: string;
  /** Public domain shown in the browser-frame address bar. Omitted for private platforms. */
  domain?: string;
  stack: string[];
  services: string[];
  challenge: string;
  approach: string;
  modules: CaseStudyModule[];
  highlights: string[];
  images: {
    desktop: string;
    /** Second desktop view, used when a project has no phone layout. */
    desktopAlt?: string;
    mobile?: string;
  };
  /** Accent colour for small details (dots, glows). */
  accent: string;
}

const IMG = "/optimized/assets/images/portfolio/case-studies";

export const CASE_STUDIES: CaseStudy[] = [
  /* ── PLATFORMS ─────────────────────────────────────────────────────── */
  {
    slug: "tzar-crm",
    name: "Tzar CRM",
    label: "Custom CRM · Multi-brand",
    kind: "platform",
    category: "crm",
    industry: "Agency operations",
    tagline: "One CRM for leads, pipeline, invoicing and GST across four brands.",
    summary:
      "An in-house CRM that runs sales and accounts for Tzar Digital Agency, Adshalaa, Crownleaf and Titepo from a single workspace, with brand-level reporting and finance built in.",
    stack: ["Next.js", "React", "Vercel"],
    services: ["Product design", "Full-stack development", "Data migration", "Hosting & support"],
    challenge:
      "Leads for four brands arrive from websites, brochure downloads, Meta lead forms and phone calls. Without one system, follow-ups slip, nobody sees the whole pipeline, and sales and accounts end up working from different numbers.",
    approach:
      "We designed a single CRM around how the team actually sells: every lead is tagged to a brand, moves through one pipeline with SLA timers, and converts straight into a GST invoice. Accounts, ledger and GST reports read from the same data, so sales and finance finally agree on the numbers.",
    modules: [
      { icon: "pipeline", title: "Sales pipeline", desc: "Seven-stage pipeline with brand filters, SLA overdue flags and bulk actions." },
      { icon: "zap", title: "Meta lead sync", desc: "Pulls leads from Meta lead forms automatically, plus CSV and Excel import." },
      { icon: "chart", title: "Lead dashboard", desc: "Inbound trends, won deals and conversion rate by week, month or year." },
      { icon: "invoice", title: "Invoices & ledger", desc: "GST tax invoices, customer ledger and payment tracking per brand." },
      { icon: "file", title: "GST reports", desc: "Period-wise GST payable and collected, ready for filing." },
      { icon: "users", title: "Team & roles", desc: "Role-based access for admins, sales reps and accounts staff." },
    ],
    highlights: [
      "Four brands, one login, one source of truth",
      "Leads auto-captured from web forms and Meta ads",
      "Sales and accounts share the same records",
      "Light and dark themes, works on phones for reps on the move",
    ],
    images: {
      desktop: `${IMG}/tzar-crm-desktop.webp`,
      mobile: `${IMG}/tzar-crm-mobile.webp`,
    },
    accent: "#FFAE00",
  },
  {
    slug: "diallo-contact-center-crm",
    name: "Diallo",
    label: "Contact Centre CRM · Dialer",
    kind: "platform",
    category: "crm",
    industry: "BPO & collections",
    tagline: "A contact-centre CRM with a built-in dialer and a live supervisor floor.",
    summary:
      "Diallo is a BPO and operations suite for collection and telesales floors: agents dial from inside the CRM while supervisors watch every seat, queue and recording in real time.",
    stack: ["Next.js", "React", "Dialer integration", "Vercel"],
    services: ["Product design", "Full-stack development", "Telephony integration", "Dashboards"],
    challenge:
      "A 200-seat floor needs supervisors to see who is on a call, who is idle and how the day is tracking against target, without jumping between a dialer, a CRM and spreadsheets.",
    approach:
      "We built the dialer into the CRM and gave supervisors a live floor view. Performance, the agent wallboard, recordings and queue health sit on four tabs, and agents get a focused view with only their calls and accounts.",
    modules: [
      { icon: "chart", title: "Supervisor floor", desc: "Live recovery, connect rate, seat utilisation and handle time against targets." },
      { icon: "headset", title: "Agent wallboard", desc: "Every seat's status (on call, ringing, idle, on break) with one-click listen-in." },
      { icon: "phone", title: "Built-in dialer", desc: "Agents place calls from the account screen without switching to a separate dialer." },
      { icon: "mic", title: "Call recordings", desc: "Searchable recordings tied to each lead and account for QA." },
      { icon: "route", title: "Queue health", desc: "Queue depth, wait times and campaign routing at a glance." },
      { icon: "users", title: "Agent & supervisor views", desc: "Role-based views and a guided product tour for new staff." },
    ],
    highlights: [
      "Built for 200-seat operations",
      "Dialer, CRM and QA in one product",
      "Supervisor and agent views from one login",
      "Guided product tour for onboarding",
    ],
    images: {
      desktop: `${IMG}/diallo-desktop.webp`,
      desktopAlt: `${IMG}/diallo-wallboard.webp`,
    },
    accent: "#F97316",
  },
  {
    slug: "clickstracker",
    name: "ClicksTracker",
    label: "SaaS · Click tracking",
    kind: "platform",
    category: "crm",
    industry: "Affiliate & performance marketing",
    tagline: "Traffic and attribution console that filters bad clicks before they cost money.",
    summary:
      "ClicksTracker (clicks4coupon) tracks every click across affiliate campaigns, filters bots and off-geo traffic in real time, and attributes conversions and revenue back to each publisher.",
    domain: "clicks4coupon.xyz",
    stack: ["React", "Vite", "Charts"],
    services: ["Product design", "Full-stack development", "Analytics", "Hosting & support"],
    challenge:
      "Affiliate traffic mixes real users with bots, capped offers and the wrong geographies. If that is only caught in a report days later, the money has already been spent.",
    approach:
      "We built a tracking gateway that checks every click against routing rules before redirecting it, and a console that shows clean traffic, blocked traffic, conversions and revenue as it happens.",
    modules: [
      { icon: "chart", title: "Traffic overview", desc: "Total, clean and blocked clicks, conversions and revenue per conversion, live." },
      { icon: "shield", title: "Filters", desc: "Bot, cap and geo filters applied before the redirect, not after the invoice." },
      { icon: "megaphone", title: "Campaigns", desc: "Offers with caps, geos and routing rules managed in one place." },
      { icon: "users", title: "Publishers", desc: "Per-publisher traffic quality and payouts." },
      { icon: "route", title: "Engine status", desc: "Global routing health and active campaigns at a glance." },
      { icon: "zap", title: "Click simulator", desc: "Test a click end-to-end before a campaign goes live." },
    ],
    highlights: [
      "Real-time click telemetry",
      "Bad traffic blocked before it is paid for",
      "Publisher-level attribution",
      "Built-in test click simulator",
    ],
    images: {
      desktop: `${IMG}/clickstracker-desktop.webp`,
      mobile: `${IMG}/clickstracker-mobile.webp`,
    },
    accent: "#6366F1",
  },
  {
    slug: "ay-astute-group-crm",
    name: "AY Astute Group CRM",
    label: "Custom CRM · Audit & Tax",
    kind: "platform",
    category: "crm",
    industry: "Audit, tax & accounting (UAE)",
    tagline: "A CRM built for a UAE audit and tax practice, from first call to renewal.",
    summary:
      "A custom CRM for AY Astute Group's audit and tax firms in Dubai and Abu Dhabi, covering leads, telesales, services, invoicing and contract renewals, and ready for UAE e-invoicing.",
    stack: ["React", "Vite", "Charts", "Vercel"],
    services: ["Consulting", "Product design", "Full-stack development", "Training"],
    challenge:
      "Off-the-shelf CRMs did not fit how an audit and tax practice works: retainers, renewals, compliance deadlines and a telesales team qualifying inbound leads every day.",
    approach:
      "We mapped the firm's real workflow (lead, telesales call, follow-up, service, invoice, renewal) and built a CRM around it, with an executive dashboard and a comparison page explaining why it beats the generic option.",
    modules: [
      { icon: "chart", title: "Executive dashboard", desc: "Today's leads, interest, follow-ups, callbacks and conversions at a glance." },
      { icon: "phone", title: "Telesales journey", desc: "A step-by-step calling flow that qualifies every inbound lead." },
      { icon: "calendar", title: "Follow-ups & renewals", desc: "Follow-up queues plus contract renewal and expiry alerts." },
      { icon: "invoice", title: "Invoices & payments", desc: "Retainer billing in AED with payment tracking." },
      { icon: "globe", title: "Lead sources", desc: "Google Ads, referrals and LinkedIn tracked by channel." },
      { icon: "file", title: "Reports", desc: "Monthly revenue trend and exportable executive reports." },
    ],
    highlights: [
      "Shaped around audit and tax workflows",
      "Renewal and expiry alerts so retainers don't lapse",
      "UAE e-invoicing ready",
      "Works on phones for partners on the go",
    ],
    images: {
      desktop: `${IMG}/ay-astute-desktop.webp`,
      mobile: `${IMG}/ay-astute-mobile.webp`,
    },
    accent: "#1D4ED8",
  },

  /* ── WEB BUILDS ────────────────────────────────────────────────────── */
  {
    slug: "adshalaa",
    name: "Adshalaa",
    label: "Next.js · EdTech",
    kind: "web",
    category: "nextjs",
    industry: "Education & training",
    tagline: "A fast Next.js site that turns course browsers into enquiries.",
    summary:
      "Adshalaa runs certification programmes in digital marketing with placement support. We built its site in Next.js with course pages, brochure downloads and enquiry forms wired straight into the CRM.",
    liveUrl: "https://adshalaa.com",
    domain: "adshalaa.com",
    stack: ["Next.js", "React"],
    services: ["UI/UX design", "Next.js development", "SEO", "CRM integration"],
    challenge:
      "Students compare several institutes on their phones before they call. The site has to load fast, rank for course searches and make it effortless to enquire, and every enquiry has to reach a counsellor quickly.",
    approach:
      "A mobile-first Next.js build with server-rendered course pages for SEO, clear placement proof, and enquiry and brochure forms that create leads in Tzar CRM the moment they're submitted.",
    modules: [
      { icon: "layout", title: "Course catalogue", desc: "Category-wise course pages with syllabus, duration and outcomes." },
      { icon: "file", title: "Brochure downloads", desc: "Gated brochures that capture the lead first." },
      { icon: "zap", title: "CRM-connected forms", desc: "Every enquiry lands in the CRM pipeline instantly." },
      { icon: "search", title: "SEO foundations", desc: "Server-rendered pages, metadata and schema for course searches." },
    ],
    highlights: [
      "Mobile-first layout with sticky enquiry actions",
      "Leads flow straight into the CRM",
      "Server-rendered for speed and search",
    ],
    images: {
      desktop: `${IMG}/adshalaa-desktop.webp`,
      mobile: `${IMG}/adshalaa-mobile.webp`,
    },
    accent: "#F5B301",
  },
  {
    slug: "crownleaf",
    name: "Crownleaf",
    label: "WordPress · Corporate gifting",
    kind: "web",
    category: "wordpress",
    industry: "Corporate gifting",
    tagline: "A WordPress storefront for premium corporate and bulk gifting.",
    summary:
      "Crownleaf curates premium gift hampers for companies. We built a WordPress site that showcases collections by occasion and captures bulk enquiries with budget and quantity up front.",
    liveUrl: "https://crownleaf.co",
    domain: "crownleaf.co",
    stack: ["WordPress", "WooCommerce", "Custom theme"],
    services: ["Brand-led web design", "WordPress development", "SEO", "Lead capture"],
    challenge:
      "Corporate buyers want to see collections, understand pricing per hamper and talk to someone quickly. The site had to feel premium and put the bulk enquiry within easy reach.",
    approach:
      "A custom WordPress theme in Crownleaf's earthy palette, collections organised by use case (welcome kits, eco-friendly, client and promotional gifts) and a bulk enquiry form that asks for budget per hamper.",
    modules: [
      { icon: "gift", title: "Collections by occasion", desc: "Employee welcome kits, eco-friendly, client and promotional gifts." },
      { icon: "cart", title: "Shop & wishlist", desc: "WooCommerce catalogue with wishlist and cart." },
      { icon: "zap", title: "Bulk enquiry form", desc: "Captures company, quantity and budget per hamper." },
      { icon: "search", title: "SEO & content", desc: "Category pages written for gifting searches." },
    ],
    highlights: [
      "Custom theme, not an off-the-shelf look",
      "Bulk enquiries qualified by budget",
      "Easy for the team to update in WordPress",
    ],
    images: {
      desktop: `${IMG}/crownleaf-home-desktop.webp`,
      mobile: `${IMG}/crownleaf-collections-mobile.webp`,
    },
    accent: "#A16207",
  },
  {
    slug: "leorix",
    name: "Leorix",
    label: "Shopify · Footwear D2C",
    kind: "web",
    category: "shopify",
    industry: "Footwear (D2C)",
    tagline: "A Shopify store for performance sneakers, built to feel engineered.",
    summary:
      "Leorix (beleorix.com) makes sneakers that are designed, engineered and validated. We built a Shopify storefront with a dark, technical look and product stories that explain the build.",
    liveUrl: "https://beleorix.com",
    domain: "beleorix.com",
    stack: ["Shopify", "Liquid", "Custom sections"],
    services: ["E-commerce design", "Shopify development", "Product storytelling", "Launch support"],
    challenge:
      "A new footwear brand competing with big names needed a store that felt premium on day one and explained why its shoes are different, not just another product grid.",
    approach:
      "A custom Shopify theme in Leorix's deep green, with hero product drops, a technology page and spec-led product sections, all editable from the Shopify theme editor.",
    modules: [
      { icon: "layout", title: "Custom theme", desc: "Theme sections the team can rearrange without code." },
      { icon: "zap", title: "Product drops", desc: "Hero launches for each model with lifestyle imagery." },
      { icon: "file", title: "Technology page", desc: "Explains materials, comfort and testing." },
      { icon: "cart", title: "Fast checkout", desc: "Native Shopify checkout with mobile-first cart." },
    ],
    highlights: [
      "Premium look from launch day",
      "Spec-led product storytelling",
      "Fully editable in the Shopify editor",
    ],
    images: {
      desktop: `${IMG}/leorix-desktop.webp`,
      mobile: `${IMG}/leorix-mobile.webp`,
    },
    accent: "#2F5D46",
  },
  {
    slug: "titepo",
    name: "Titepo",
    label: "Shopify · Kids gifting",
    kind: "web",
    category: "shopify",
    industry: "Kids' gifts & return gifts",
    tagline: "A playful Shopify store for kids' return gifts and party favours.",
    summary:
      "Titepo sells return gifts, mugs and toys for children's parties. We built a bright Shopify store with festive campaigns, gift collections and a smooth mobile checkout.",
    liveUrl: "https://titepo.com",
    domain: "titepo.com",
    stack: ["Shopify", "Liquid"],
    services: ["E-commerce design", "Shopify development", "Campaign landing pages", "Marketing setup"],
    challenge:
      "Parents shop for return gifts on their phones, often in a hurry and in bulk. The store had to be cheerful, easy to browse by occasion and quick to check out.",
    approach:
      "A colourful Shopify theme with collections by occasion and product type, seasonal campaign banners and offer pop-ups, tuned for one-handed mobile shopping.",
    modules: [
      { icon: "gift", title: "Return-gift collections", desc: "Birthday, festive and party collections." },
      { icon: "megaphone", title: "Campaigns & offers", desc: "Seasonal banners and site-wide offer pop-ups." },
      { icon: "cart", title: "Mobile checkout", desc: "Bottom-bar navigation and a fast cart on phones." },
      { icon: "layout", title: "Editable sections", desc: "The team updates campaigns without a developer." },
    ],
    highlights: [
      "Built for quick bulk orders on mobile",
      "Seasonal campaigns without developer time",
      "Cheerful brand look that fits the audience",
    ],
    images: {
      desktop: `${IMG}/titepo-desktop.webp`,
      mobile: `${IMG}/titepo-mobile.webp`,
    },
    accent: "#16A34A",
  },
];

export const PLATFORM_CASE_STUDIES = CASE_STUDIES.filter((c) => c.kind === "platform");
export const WEB_CASE_STUDIES = CASE_STUDIES.filter((c) => c.kind === "web");

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug);
  return CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
}

export const CATEGORY_LABELS: Record<StackCategory, string> = {
  crm: "CRM, ERP & SaaS",
  nextjs: "React & Next.js",
  shopify: "Shopify",
  wordpress: "WordPress",
};
