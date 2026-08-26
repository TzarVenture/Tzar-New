// ─────────────────────────────────────────────────────────────────
//  TZAR VENTURE — Team, Testimonials, Portfolio, Packages Data
//  Migrated from legacy tzar/ data directory with exact asset paths
// ─────────────────────────────────────────────────────────────────

// ── TEAM ──────────────────────────────────────────────────────────
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  describe: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Nistha Bhati',
    role: 'Lead Web Developer',
    describe: 'Full-stack web developer building scalable, visually polished, and intuitive web platforms using React and Next.js.',
    image: '/assets/images/team/team-page-img-7.jpg',
  },
  {
    id: 2,
    name: 'Devika Kalal',
    role: 'Social Media Manager',
    describe: 'With in-depth knowledge of social media platforms, she crafts content strategies that drive real engagement and growth.',
    image: '/assets/images/team/team-page-img-1.png',
  },
  {
    id: 3,
    name: 'Iqra Fatima',
    role: 'Social Media Strategist',
    describe: 'I help businesses look good and connect authentically with people on social media platforms.',
    image: '/assets/images/team/Artboard 2 (1).png',
  },
  {
    id: 4,
    name: 'Sufiya Utnal',
    role: 'Digital Marketing Specialist',
    describe: 'Enthusiast passionate about building meaningful digital presence and high-ROI marketing funnels.',
    image: '/assets/images/team/Artboard 1 (1).png',
  },
  {
    id: 5,
    name: 'Ankit',
    role: 'Creative Designer',
    describe: 'Budding with interesting thoughts and ideas, he creates an entire world of colours, images, and text.',
    image: '/assets/images/team/team-page-img-3.jpg',
  },
  {
    id: 6,
    name: 'Deepak Yadav',
    role: 'Website Developer',
    describe: 'Dedicated front-end developer with a strong eye for pixel-perfect design and clean, maintainable code.',
    image: '/assets/images/team/vivek11.png',
  },
  {
    id: 7,
    name: 'Jahid',
    role: 'Graphic Designer',
    describe: 'Specializes in brand identity kits, vector graphics, print art, and eye-catching social media creatives.',
    image: '/assets/images/team/sanskar11.png',
  },
  {
    id: 8,
    name: 'Parnika',
    role: 'Sales Development Executive',
    describe: 'She has a serious attitude towards work when it comes to delivering results to clients and meeting growth targets.',
    image: '/assets/images/team/team-page-img-5.jpg',
  },
  {
    id: 9,
    name: 'Nidhi',
    role: 'Business Head',
    describe: 'A powerful combination of expertise, leadership, and knowledge driving overall business strategy and client success.',
    image: '/assets/images/team/team-page-img-4.jpg',
  },
  {
    id: 10,
    name: 'Mansi',
    role: 'Social Media Specialist',
    describe: 'Passionate about creating meaningful digital brand presences that connect businesses with their target audience.',
    image: '/assets/images/team/mansi11.jpg',
  },
  {
    id: 11,
    name: 'Omkar Shinde',
    role: 'Website Developer',
    describe: 'Hard-working and passionate about delivering high-quality web solutions that meet and exceed client expectations.',
    image: '/assets/images/team/team-page-img-2.jpg',
  },
];

// ── TESTIMONIALS ──────────────────────────────────────────────────
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kapoor',
    role: 'Founder',
    company: 'TechVista Solutions',
    rating: 5,
    text: 'Tzar Venture completely transformed our online presence. Our website speed went from 4.2s to under 1.1s and our SEO rankings jumped to page 1 within 60 days. Incredible ROI.',
    avatar: '👨‍💼',
    image: '/assets/images/testimonial/testimonial-one-img-1.jpg',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'FreshBite Cloud Kitchen',
    rating: 5,
    text: 'Our Swiggy and Zomato orders increased by 90% after Tzar handled our food photography and local SEO. The team is responsive, creative, and truly understands the food industry.',
    avatar: '👩‍💼',
    image: '/assets/images/testimonial/testimonial-one-img-2.jpg',
  },
  {
    id: 3,
    name: 'Amit Joshi',
    role: 'CEO',
    company: 'StyleCraft Apparel',
    rating: 5,
    text: 'Working with Tzar Venture on our e-commerce website and packaging design was the best decision we made. Revenue grew 120% in the first quarter post-launch.',
    avatar: '👨‍💻',
    image: '/assets/images/testimonial/testimonial-one-img-3.jpg',
  },
  {
    id: 4,
    name: 'Sneha Mehta',
    role: 'Co-Founder',
    company: 'GreenLeaf Organics',
    rating: 5,
    text: 'The social media team at Tzar created content that truly resonated with our audience. Our Instagram grew from 2K to 28K followers in 6 months. Exceptional work!',
    avatar: '👩‍🌾',
    image: '/assets/images/testimonial/testimonial-one-img-5.jpg',
  },
  {
    id: 5,
    name: 'Vikram Nair',
    role: 'Director',
    company: 'Nair Real Estate',
    rating: 5,
    text: 'Our Google Ads campaigns managed by Tzar brought our cost-per-lead down by 65% while generating 3× more qualified enquiries. Best agency we have ever worked with.',
    avatar: '🏢',
    image: '/assets/images/testimonial/testimonial-one-img-6.jpg',
  },
  {
    id: 6,
    name: 'Ananya Singh',
    role: 'Brand Manager',
    company: 'PureKraft Beauty',
    rating: 5,
    text: 'The brand identity, packaging design, and website they created for us perfectly captured our vision. Our products are now on shelves of premium retail stores across India.',
    avatar: '💄',
    image: '/assets/images/testimonial/testimonial-one-img-8.jpg',
  },
];

// ── CLIENT LOGO IMAGES (from assets/images/client/1.png to 40.png) ─────────────
export const CLIENT_LOGOS_DATA = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  image: `/assets/images/client/${i + 1}.png`,
  name: `Client ${i + 1}`,
}));

// ── PORTFOLIO ITEMS (Migrated from WebDesign.js, PrintPackaging.js, Reels.js, CreativeBanners.js) ──────
export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  tab: 'web' | 'banners' | 'reels' | 'packaging' | 'nightclub';
  tag: string;
  link?: string;
  image?: string;
  youtubeId?: string;
  logo?: string;
  services?: string[];
  color: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Web Design
  { id: 1, title: 'Crownleaf', category: 'Web Design', tab: 'web', tag: 'WordPress & SEO', link: 'https://crownleaf.co/', image: '/assets/images/projects/Website 4.png', services: ['WordPress Website Development', 'SEO Optimization', 'SMM'], color: '#1D4224' },
  { id: 2, title: 'Apollo India', category: 'Web Design', tab: 'web', tag: 'Shopify E-Commerce', link: 'https://apolloindia.com', image: '/assets/images/projects/r1.jpg', services: ['Shopify Development', 'Social Media', 'SEO Optimization'], color: '#D4AF37' },
  { id: 3, title: 'Mahaarajaa', category: 'Web Design', tab: 'web', tag: 'Shopify Storefront', link: 'https://mahaarajaa.life/', image: '/assets/images/projects/r2.jpg', services: ['Shopify Development', 'Social Media', 'SMM'], color: '#1D4224' },
  { id: 4, title: 'Blue7Vets', category: 'Web Design', tab: 'web', tag: 'WordPress Portal', link: 'https://blue7vets.com', image: '/assets/images/projects/r3.jpg', services: ['WordPress Website Development', 'SEO Optimization'], color: '#D4AF37' },
  { id: 5, title: 'Cabelo Chave', category: 'Web Design', tab: 'web', tag: 'Shopify UI/UX', link: 'https://cabelochave.com/', image: '/assets/images/projects/r4.jpg', services: ['Shopify Development', 'UI/UX Strategy'], color: '#1D4224' },
  { id: 6, title: 'Gurukul Vatika', category: 'Web Design', tab: 'web', tag: 'Educational Web App', link: 'https://gurukulvatika.com/', image: '/assets/images/projects/r21.png', services: ['WordPress Website Development', 'UI/UX Strategy'], color: '#D4AF37' },
  { id: 7, title: 'KP Mumbai', category: 'Web Design', tab: 'web', tag: 'Shopify E-Com', link: 'https://kpmumbai.com/', image: '/assets/images/projects/Website 5.png', services: ['Shopify Development', 'SEO Optimization'], color: '#1D4224' },
  { id: 8, title: 'Orcollective UK', category: 'Web Design', tab: 'web', tag: 'International Shopify', link: 'https://orcollective.co.uk/', image: '/assets/images/projects/r7.jpg', services: ['Shopify Development', 'UI/UX Strategy'], color: '#D4AF37' },

  // Creative Banners
  { id: 9, title: 'Brand Identity Banner System', category: 'Creative Banners', tab: 'banners', tag: 'Social & Web Banners', image: 'https://ik.imagekit.io/ihxz8q7gr/1.jpg?updatedAt=1682423152315', color: '#1D4224' },
  { id: 10, title: 'E-Commerce Promotional Banner Art', category: 'Creative Banners', tab: 'banners', tag: 'Ad Campaign Creatives', image: 'https://ik.imagekit.io/ihxz8q7gr/3.jpg?updatedAt=1682423152314', color: '#D4AF37' },
  { id: 11, title: 'Social Media Graphic Carousel', category: 'Creative Banners', tab: 'banners', tag: 'Instagram Creatives', image: 'https://ik.imagekit.io/ihxz8q7gr/2.jpg?updatedAt=1682423151909', color: '#1D4224' },

  // Print & Packaging
  { id: 12, title: 'Retail Product Box Packaging Dieline', category: 'Print & Packaging', tab: 'packaging', tag: '3D Dieline & Box', image: '/assets/images/projects/printPackaging1.png', color: '#1D4224' },
  { id: 13, title: 'Gourmet Food Pouch Packaging', category: 'Print & Packaging', tab: 'packaging', tag: 'Food Pouch Design', image: '/assets/images/projects/printPackaging2.png', color: '#D4AF37' },
  { id: 14, title: 'Luxury Hamper Gift Box Design', category: 'Print & Packaging', tab: 'packaging', tag: 'Corporate Gifting Box', image: '/assets/images/projects/printPackaging3.png', color: '#1D4224' },
  { id: 15, title: 'Label & Canister Packaging Art', category: 'Print & Packaging', tab: 'packaging', tag: 'Can & Label Design', image: '/assets/images/projects/printPackaging4.png', color: '#D4AF37' },

  // Video Reels
  { id: 16, title: 'Tzar Commercial Video Reel #1', category: 'Reels & Video', tab: 'reels', tag: 'Instagram Reel', youtubeId: '7MPOVdcTT2E', color: '#1D4224' },
  { id: 17, title: 'Tzar Brand Campaign Reel #2', category: 'Reels & Video', tab: 'reels', tag: 'Short Video Ad', youtubeId: 'IUS0ux2MhWI', color: '#D4AF37' },
  { id: 18, title: 'Cloud Kitchen Food Shoot Reel', category: 'Reels & Video', tab: 'reels', tag: 'Food Styling Reel', youtubeId: 'OTh5RHPFs-I', color: '#1D4224' },
  { id: 19, title: 'Product Launch Showcase Reel', category: 'Reels & Video', tab: 'reels', tag: 'Product Commercial', youtubeId: 'YBhpoYvxlKw', color: '#D4AF37' },

  // Night Club Shoots
  { id: 20, title: 'Night Club Commercial Experience #1', category: 'Night Club Shoot', tab: 'nightclub', tag: 'Nightlife Video', youtubeId: '_wPXOrzwERk', color: '#1D4224' },
  { id: 21, title: 'Night Club Event Highlights #2', category: 'Night Club Shoot', tab: 'nightclub', tag: 'Event Videography', youtubeId: 'KO6RTpW6wOY', color: '#D4AF37' },
  { id: 22, title: 'DJ Performance & Lighting Shoot', category: 'Night Club Shoot', tab: 'nightclub', tag: 'Music Video', youtubeId: 'meZyRF6aJ9U', color: '#1D4224' },
];

export const PORTFOLIO_TABS = [
  { id: 'web', name: 'Web Design' },
  { id: 'banners', name: 'Creative Banners' },
  { id: 'reels', name: 'Reels & Video' },
  { id: 'packaging', name: 'Print & Packaging' },
  { id: 'nightclub', name: 'Night Club Shoot' },
];

// ── CASE RESULTS ──────────────────────────────────────────────────
export const CASE_RESULTS = [
  {
    client: 'E-Commerce Brand',
    metric: '+180%',
    desc: 'Increase in organic traffic within 6 months of technical SEO overhaul and content strategy.',
    tag: 'SEO',
    color: '#1D4224',
    icon: 'Search',
  },
  {
    client: 'SaaS Company',
    metric: '+250%',
    desc: 'Boost in qualified leads through targeted Google & Meta PPC campaigns with optimized funnels.',
    tag: 'PPC',
    color: '#D4AF37',
    icon: 'BarChart3',
  },
  {
    client: 'Retail Business',
    metric: '+120%',
    desc: 'Revenue growth driven by email marketing automation and conversion-rate-optimized website.',
    tag: 'Email + Web',
    color: '#1D4224',
    icon: 'TrendingUp',
  },
  {
    client: 'Cloud Kitchen',
    metric: '+90%',
    desc: 'Daily order increase via food content, social media management & Zomato/Swiggy profile SEO.',
    tag: 'Food Marketing',
    color: '#D4AF37',
    icon: 'Camera',
  },
];

// ── WEB PACKAGES (migrated from webpacksdata.js) ──────────────────
export const WEB_PACKAGES = {
  wordpress: {
    title: 'WordPress / WooCommerce',
    subtitle: 'B2B / B2C / D2C',
    price: '₹25,000',
    priceNote: 'starting price',
    features: [
      'Up to 15 Page Website',
      'Website Creative Banner',
      'Website Content',
      'Mobile Responsive Design',
      'Lead Form Creation',
      'Google Analytics Integration',
      'Facebook Pixel Integration',
      'Search Console Integration',
      'Shiprocket Integration',
      'Payment Gateway Integration',
      'Third Party App Integration',
      'SEO Friendly Architecture',
      'Bug Fixing Included',
      '1 Year Maintenance & Support',
    ],
  },
  shopify: {
    title: 'Shopify',
    subtitle: 'B2C / D2C',
    price: '₹35,000',
    priceNote: 'starting price',
    features: [
      'Shopify Setup & Configuration',
      'Theme Customization',
      'Up to 100 Products',
      'Product Setup (up to 50 products)',
      'Website Creative Banner',
      'Website Content',
      'SEO Optimization',
      'Third-Party App Integration',
      'Google Analytics Setup',
      'Shiprocket Integration',
      'Payment Gateway Integration',
      'Facebook Pixel Integration',
      'Custom Domain Setup',
      'Search Console Integration',
      'Extended Training Session',
      'Social Login Option',
      '1 Year Maintenance & Support',
    ],
  },
  nextjs: {
    title: 'React.js / Next.js',
    subtitle: 'B2C / D2C Advanced',
    price: '₹65,000',
    priceNote: 'starting price',
    features: [
      'Custom Page Design',
      'Up to 20 Pages',
      'Product Setup (up to 100 products)',
      'Website Creative Banner',
      'Website Content',
      'Customer Login Page',
      'Advanced SEO Optimization',
      'Lead Forms Creation',
      'Third-Party App Integration',
      'Google Analytics Setup',
      'Custom Domain Setup',
      'Search Console Integration',
      'Social Login Integration',
      'Payment Gateway Integration',
      'Shiprocket Integration',
      '1 Year Maintenance & Support',
    ],
  },
};
