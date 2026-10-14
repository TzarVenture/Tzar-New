/**
 * Structured Data (JSON-LD) Schemas for Google Rich Search Snippets
 * Built to Google Search Central and Schema.org standards.
 */

export const SITE_URL = "https://www.tzar.co";
export const LOGO_URL = `${SITE_URL}/optimized/assets/images/tzar-logo-main.webp`;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Tzar Digital Agency",
      alternateName: [
        "Tzar Venture",
        "Tzar Digital",
        "TZAR VENTURE- Digital Marketing Agency",
        "Tzar Digital Agency Mumbai",
      ],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO_URL,
        caption: "Tzar Digital Agency Logo",
        width: 1506,
        height: 248,
      },
      image: LOGO_URL,
      description:
        "India's premier digital agency specializing in high-performance web applications, organic search engine domination, graphic design, and custom customer acquisition systems.",
      telephone: "+91-730-405-6607",
      email: "corporate@tzar.co",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "B, Ground Floor, Saki Vihar Rd, behind Finch Restaurant, Ganesh Nagar, Marol",
        addressLocality: "Andheri East, Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400072",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.1172,
        longitude: 72.8837,
      },
      sameAs: [
        "https://www.linkedin.com/company/tzar-digital-agency/",
        "https://www.instagram.com/tzarmktagency/",
        "https://www.facebook.com/TzarAgency",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:30",
          closes: "18:30",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "122",
        reviewCount: "118",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Core Digital Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
              url: `${SITE_URL}/website-development-services`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search Engine Optimization",
              url: `${SITE_URL}/search-engine-optimization-services`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Graphic Designing",
              url: `${SITE_URL}/graphic-designing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Marketing",
              url: `${SITE_URL}/social-media-marketing-services`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Logo & Brand Identity Design",
              url: `${SITE_URL}/logo-design-services`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Design & Packaging",
              url: `${SITE_URL}/product-design-packaging-services`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tzar Studio Commercial Production",
              url: `${SITE_URL}/tzar-studio`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Outdoor & Transit Advertising",
              url: `${SITE_URL}/outdoor-ads`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Gifting Solutions",
              url: `${SITE_URL}/corporate-gifting`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Tzar Digital Agency",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export interface ServiceSchemaParams {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  image?: string;
}

export function createServiceSchema({
  name,
  description,
  url,
  serviceType,
  image,
}: ServiceSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    url,
    image: image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : LOGO_URL,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
    ],
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "122",
      reviewCount: "118",
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
