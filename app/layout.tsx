import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import AppLayoutWrapper from "./components/layout/AppLayoutWrapper";
import SmoothScrollProvider from "./components/providers/SmoothScrollProvider";
import { AnalyticsTracking, AnalyticsNoscript } from "./components/analytics/AnalyticsTracking";
import { JsonLd } from "./components/seo/JsonLd";
import { ORGANIZATION_SCHEMA } from "./lib/schemas";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tzar.co"),
  title: { default: "Tzar Digital Agency | Digital Systems & Growth Agency", template: "%s | Tzar Digital Agency" },
  description: "Tzar Digital Agency builds high-performing websites, business systems, performance SEO, and growth engines for ambitious companies.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tzar Digital Agency",
    title: "Tzar Digital Agency | Digital Systems & Growth Agency",
    description: "Tzar Digital Agency builds high-performing websites, business systems, performance SEO, and growth engines for ambitious companies.",
    url: "https://www.tzar.co",
    images: [
      {
        url: "/optimized/assets/images/tzar-logo-main.webp",
        width: 1200,
        height: 630,
        alt: "Tzar Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tzar Digital Agency | Digital Systems & Growth Agency",
    description: "Tzar Digital Agency builds high-performing websites, business systems, performance SEO, and growth engines for ambitious companies.",
    images: ["/optimized/assets/images/tzar-logo-main.webp"],
  },
  alternates: {
    canonical: "https://www.tzar.co",
  },
  other: {
    "facebook-domain-verification": "sog1mzogyompx9km1xruxelfqoqx9b",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        {/* Analytics & Pixel Tracking Scripts */}
        <AnalyticsTracking />

        {/* Root Organization & WebSite JSON-LD Structured Data */}
        <JsonLd data={ORGANIZATION_SCHEMA} />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#EFE8E0] text-[#0E2015] min-h-screen flex flex-col justify-between font-sans"
      >
        {/* Noscript Fallbacks for GTM & Meta Pixel */}
        <AnalyticsNoscript />

        <SmoothScrollProvider>
          <AppLayoutWrapper>{children}</AppLayoutWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
