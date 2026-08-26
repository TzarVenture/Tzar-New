export interface WebPackage {
  id: string;
  name: string;
  price: string;
  idealFor: string;
  popular?: boolean;
  deliveryTime: string;
  features: string[];
}

export const WEB_PACKAGES: WebPackage[] = [
  {
    id: "starter-web",
    name: "Starter Corporate Web",
    price: "₹25,000",
    idealFor: "Startups, Consultants, Small Businesses",
    popular: false,
    deliveryTime: "5 - 7 Business Days",
    features: [
      "Up to 5 Responsive Custom Pages",
      "Modern Tech UI & Glassmorphism Design",
      "Mobile & Tablet 100% Fluid Layout",
      "Contact Lead Capture Form",
      "Basic On-Page SEO & Meta Tags",
      "Google Maps & Social Media Links",
    ],
  },
  {
    id: "business-web",
    name: "Business Pro Web",
    price: "₹50,000",
    idealFor: "Growing Companies, Agencies & Brands",
    popular: true,
    deliveryTime: "10 - 14 Business Days",
    features: [
      "Up to 12 Responsive Custom Pages",
      "High-Tech Aesthetic & Micro-Interactions",
      "Interactive Pricing Matrix & Calculator",
      "CMS / Blog Integration for Content Updates",
      "Advanced Lead Funnel & WhatsApp Widget",
      "High-Speed Optimization (<1.2s FCP)",
    ],
  },
  {
    id: "ecommerce-web",
    name: "E-Commerce / Shopify Pro",
    price: "₹85,000",
    idealFor: "D2C Brands, Retail Stores & Shopify Sellers",
    popular: false,
    deliveryTime: "15 - 21 Business Days",
    features: [
      "Unlimited Products & Category Structure",
      "Shopify / Custom React Storefront",
      "Razorpay / UPI Payment Gateway Integration",
      "Automated Order & Shipping Notifications",
      "Discount Coupon & Cart Abandonment System",
    ],
  },
];
