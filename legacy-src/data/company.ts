// ─────────────────────────────────────────────────────────────────
//  TZAR VENTURE — Centralised Site Data
//  All content migrated from legacy tzar/ data directory
// ─────────────────────────────────────────────────────────────────

export const COMPANY = {
  name: 'Tzar Venture',
  tagline: 'Digital Marketing & Tech Creative Agency',
  description:
    "India's premier digital agency transforming brands through ultra-fast web development, strategic SEO, performance marketing, and creative media production.",
  founded: '2018',
  phone: '+91 730-405-6607',
  phone2: '+91 900-425-0252',
  phone3: '+91 776-077-5875',
  email: 'corporate@tzar.co',
  whatsapp: '917304056607',
  address: {
    street: 'B, Ground Floor, Saki Vihar Rd, behind Finch Restaurant, Ganesh Nagar, Marol,',
    city: 'Andheri East, Mumbai, Maharashtra 400072',
    full: 'B, Ground Floor, Andheri E, Saki Vihar Rd, behind Finch Restaurant, Ganesh Nagar, Marol, Andheri East, Mumbai, Maharashtra 400072',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/company/tzar-digital-agency/',
    instagram: 'https://www.instagram.com/tzarmktagency/',
    facebook: 'https://www.facebook.com/TzarAgency',
    youtube: 'https://youtube.com',
  },
  gst: '27AAAAA0000A1Z5',
};

export const STATS = [
  { value: '122+', label: 'Satisfied Clients', subtitle: 'We worked hard and got perfect results!' },
  { value: '8+', label: 'Years in Business', subtitle: 'Work with us and get leadership!' },
  { value: '367+', label: 'Projects Completed', subtitle: 'Delivering excellence across every vertical.' },
  { value: '95%', label: 'Client Retention', subtitle: 'Long-term relationships built on results.' },
];

export const NAV_ITEMS = [
  {
    id: 1,
    name: 'Our Agency',
    href: '/about-us',
    subNavItems: [
      { id: 1, name: 'About Us', href: '/about-us' },
      { id: 2, name: 'Our Services', href: '/services' },
      { id: 3, name: 'Our Team', href: '/our-team' },
      { id: 4, name: 'Our Clients', href: '/our-client' },
      { id: 5, name: 'FAQs', href: '/faqs' },
    ],
  },
  {
    id: 2,
    name: 'Services',
    href: '/services',
    subNavItems: [
      { id: 1, name: 'All Services', href: '/services' },
      { id: 2, name: 'Website Development', href: '/website-development-services' },
      { id: 3, name: 'Search Engine Optimization', href: '/search-engine-optimization-services' },
      { id: 4, name: 'Graphic Designing', href: '/graphic-designing' },
      { id: 5, name: 'Social Media Marketing', href: '/social-media-marketing-services' },
      { id: 6, name: 'Logo Design', href: '/logo-design-services' },
      { id: 7, name: 'Content Marketing', href: '/content-marketing-services' },
      { id: 8, name: 'Pay Per Click', href: '/pay-per-click-services' },
      { id: 9, name: 'Product Design & Packaging', href: '/product-design-packaging-services' },
    ],
  },
  {
    id: 3,
    name: 'Tzar Studio',
    href: '/tzar-studio',
    subNavItems: [],
  },
  {
    id: 4,
    name: 'Portfolio',
    href: '/portfolio',
    subNavItems: [],
  },
  {
    id: 5,
    name: 'Outdoor Ads',
    href: '/outdoor-ads',
    subNavItems: [],
  },
  {
    id: 6,
    name: 'Corporate Gifting',
    href: '/corporate-gifting',
    subNavItems: [],
  },
  {
    id: 7,
    name: 'Blog',
    href: '/blog',
    subNavItems: [],
  },
];
