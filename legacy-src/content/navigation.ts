export interface NavSubItem {
  id: number;
  name: string;
  href: string;
}

export interface NavItem {
  id: number;
  name: string;
  href: string;
  subNavItems?: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    name: "Our Agency",
    href: "/about-us",
    subNavItems: [
      { id: 1, name: "About Us", href: "/about-us" },
      { id: 2, name: "Our Services", href: "/services" },
      { id: 3, name: "Our Team", href: "/our-team" },
      { id: 4, name: "Our Client", href: "/our-client" },
      { id: 5, name: "FAQs", href: "/faqs" },
    ],
  },
  {
    id: 2,
    name: "Services",
    href: "/services",
    subNavItems: [
      { id: 1, name: "All Services", href: "/services" },
      { id: 2, name: "Website Development", href: "/website-development-services" },
      { id: 3, name: "Search Engine Optimization", href: "/search-engine-optimization-services" },
      { id: 4, name: "Graphic Designing", href: "/graphic-designing" },
      { id: 5, name: "Social Media Marketing", href: "/social-media-marketing-services" },
      { id: 6, name: "Logo Design", href: "/logo-design-services" },
      { id: 7, name: "Content Marketing", href: "/content-marketing-services" },
      { id: 8, name: "Lead Generation", href: "/lead-generation-services" },
      { id: 10, name: "Product Design & Packaging", href: "/product-design-packaging-services" },
      { id: 11, name: "Cloud Kitchen Marketing", href: "/cloud-kitchen-marketing-services" },
    ],
  },
  {
    id: 3,
    name: "Tzar Studio",
    href: "/tzar-studio",
  },
  {
    id: 4,
    name: "Outdoor-Ads",
    href: "/outdoor-ads",
  },
  {
    id: 5,
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    id: 6,
    name: "Corporate Gifting",
    href: "/corporate-gifting",
  },
  {
    id: 7,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 8,
    name: "Contact",
    href: "/contact",
  },
];

export const COMPANY_CONTACT = {
  phones: ["+91 730-405-6607", "+91 776-077-5875", "+91 900-425-0252"],
  primaryPhone: "+91 730-405-6607",
  whatsappPhone: "917304056607",
  email: "corporate@tzar.co",
  address: "B, Ground Floor, Saki Vihar Rd, behind Finch Restaurant, Ganesh Nagar, Marol, Andheri East, Mumbai, Maharashtra 400072",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/tzar-digital-agency/",
    instagram: "https://www.instagram.com/tzarmktagency/",
    facebook: "https://www.facebook.com/TzarAgency",
  },
};

export const FOOTER_QUICK_LINKS = [
  { id: 1, title: "Our Services", href: "/services" },
  { id: 2, title: "Meet Our Team", href: "/our-team" },
  { id: 3, title: "Our Portfolio", href: "/portfolio" },
  { id: 4, title: "Web Dev Pricing", href: "/websitedevelopmentpricing" },
  { id: 5, title: "SEO Packages", href: "/seonewpage" },
  { id: 6, title: "Career", href: "/hire-us" },
  { id: 7, title: "Internship", href: "/internship" },
  { id: 8, title: "Blog", href: "/blog" },
  { id: 9, title: "FAQs", href: "/faqs" },
  { id: 10, title: "Terms & Conditions", href: "/terms-conditions" },
  { id: 11, title: "Privacy Policy", href: "/privacy-policy" },
  { id: 12, title: "Payment Portal", href: "/payment" },
];
