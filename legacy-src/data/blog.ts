// ─────────────────────────────────────────────────────────────────
//  TZAR VENTURE — Blog Data (migrated from legacy blogdata.js)
// ─────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  tag: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'the-importance-of-seo-in-business-growth',
    title: 'The Importance of SEO in Business Growth',
    description:
      'Since every business comes online to market themselves, online marketplaces become the huge revenue-generator platforms for businesses. Here is how SEO can fuel consistent, compounding business growth.',
    tag: 'Organic Growth',
    author: 'SEO Strategists',
    date: 'Aug 26, 2026',
    readTime: '8 min',
    image: '/assets/images/tzar-logo-main.png',
  },
  {
    id: 2,
    slug: 'why-nextjs-outperforms-legacy-web-templates',
    title: 'Why Next.js 14 App Router Outperforms Legacy Web Templates in 2026',
    description:
      'Explore how Server Components, edge rendering, and sub-1.2s page loads drive higher conversion rates for digital agencies and their clients.',
    tag: 'Web Engineering',
    author: 'Tzar Tech Team',
    date: 'Jul 20, 2026',
    readTime: '7 min',
    image: '/assets/images/tzar-logo-main.png',
  },
  {
    id: 3,
    slug: 'local-seo-google-business-profile-guide',
    title: 'The Ultimate Guide to Local SEO & Google Business Profile Rankings',
    description:
      'How to claim map pack top slots, optimize citations, and capture high-intent local customer queries that convert into real foot traffic.',
    tag: 'Local SEO',
    author: 'SEO Strategists',
    date: 'Jul 15, 2026',
    readTime: '6 min',
    image: '/assets/images/tzar-logo-main.png',
  },
  {
    id: 4,
    slug: 'food-shoots-drive-swiggy-zomato-conversions',
    title: 'How Photorealistic Food Shoots Drive 3× Swiggy & Zomato Conversions',
    description:
      'Visual storytelling secrets for cloud kitchens and food brands looking to scale daily orders profitably on Swiggy, Zomato, and direct channels.',
    tag: 'Food Marketing',
    author: 'Tzar Studio',
    date: 'Jul 10, 2026',
    readTime: '5 min',
    image: '/assets/images/tzar-logo-main.png',
  },
  {
    id: 5,
    slug: 'social-media-marketing-types-2026',
    title: 'The 6 Types of Social Media Marketing That Actually Work in 2026',
    description:
      'Social media marketing includes social networking, bookmarking, social news, media sharing, microblogging, and online forums — here\'s how to use each.',
    tag: 'Social Media',
    author: 'SMM Team',
    date: 'Jun 28, 2026',
    readTime: '5 min',
    image: '/assets/images/tzar-logo-main.png',
  },
  {
    id: 6,
    slug: 'difference-between-seo-and-sem',
    title: 'SEO vs SEM: What\'s the Difference & Which Should You Choose?',
    description:
      'SEO is organic visibility while SEM combines organic + paid search. Understanding when to use each can double your ROI and reduce wasted ad spend.',
    tag: 'Digital Strategy',
    author: 'Tzar Tech Team',
    date: 'Jun 15, 2026',
    readTime: '6 min',
    image: '/assets/images/tzar-logo-main.png',
  },
];

// ─────────────────────────────────────────────────────────────────
//  FAQ Data (migrated from legacy faqPagedata.js)
// ─────────────────────────────────────────────────────────────────

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQ[] = [
  {
    id: 1,
    category: 'SEO',
    question: 'What is Search Engine Optimisation (SEO)?',
    answer:
      'Search Engine Optimisation (SEO) is the process of improving the visibility of a website in organic search engine results, so it can be found by potential customers more easily. A combination of keyword research, on-page optimisation, link building and content creation is used to ensure you reach the right audience.',
  },
  {
    id: 2,
    category: 'Content',
    question: 'What is Content Marketing?',
    answer:
      'Content marketing is an effective digital marketing strategy for creating interesting, relevant content to attract and retain a specific audience. It can be used to attract potential customers, create loyalty, engage with prospects, build relationships, promote products and services, and educate the public about your company.',
  },
  {
    id: 3,
    category: 'Social Media',
    question: 'What do you mean by Social Media Marketing?',
    answer:
      'Social Media Marketing (SMM) is a form of marketing that utilizes social networking sites to connect with your target audience. Through SMM, you can build brand awareness, attract potential customers, boost sales, and drive traffic to your website.',
  },
  {
    id: 4,
    category: 'Social Media',
    question: 'What are the 6 types of Social Media Marketing?',
    answer:
      'Social media marketing includes six types: social networking, bookmarking, social news, media sharing, microblogging, and online forums. Each has its own strengths and weaknesses and they can be used in different ways to grow your business.',
  },
  {
    id: 5,
    category: 'SEO',
    question: 'What is the difference between SEO and SEM?',
    answer:
      'SEO is an organic way to market your business, while SEM is a combination of organic and paid search. With SEO, you optimize your website content to rank in search results naturally. With SEM, you actively buy ads to increase visibility on search engine result pages.',
  },
  {
    id: 6,
    category: 'PPC',
    question: 'What is PPC and how does it work?',
    answer:
      'PPC stands for Pay-Per-Click and is an online advertising model where an advertiser pays a publisher each time someone clicks on an advertisement. This allows you to target and reach the right audience quickly and efficiently. With PPC, you set a budget, adjust bids, and track performance to optimize campaigns and get the best ROI.',
  },
  {
    id: 7,
    category: 'Web Dev',
    question: 'What technologies do you use for website development?',
    answer:
      'We use React.js, Next.js 14, TypeScript, Tailwind CSS, and Node.js for modern web applications. For e-commerce, we work with Shopify, WooCommerce, and custom React storefronts. Every site we build is mobile-first, SEO-optimized, and achieves 95+ Lighthouse scores.',
  },
  {
    id: 8,
    category: 'General',
    question: 'How long does it take to see results?',
    answer:
      'SEO results typically begin showing in 60–90 days for competitive keywords, and 30 days for local/long-tail searches. PPC campaigns generate leads within 24 hours of launch. Website projects are typically delivered in 3–6 weeks depending on scope. We provide weekly progress updates throughout.',
  },
];
