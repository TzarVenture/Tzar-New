import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import { TechHeader } from "@/legacy-src/components/layout/TechHeader";
import { TechFooter } from "@/legacy-src/components/layout/TechFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tzar.co"),
  title: { default: "Tzar Venture | Digital Systems & Growth Agency", template: "%s | Tzar Venture" },
  description: "Tzar Venture builds high-performing websites, business systems, performance SEO, and growth engines for ambitious companies.",
  openGraph: { type: "website", locale: "en_IN", siteName: "Tzar Venture" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#EFE8E0] text-[#0E2015] min-h-screen flex flex-col justify-between">
        <TechHeader />
        <main className="flex-1">{children}</main>
        <TechFooter />
      </body>
    </html>
  );
}
