import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { TechHeader } from "@/legacy-src/components/layout/TechHeader";
import { TechFooter } from "@/legacy-src/components/layout/TechFooter";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tzar.co"),
  title: { default: "Tzar Venture | Digital Systems & Growth Agency", template: "%s | Tzar Venture" },
  description: "Tzar Venture builds high-performing websites, business systems, performance SEO, and growth engines for ambitious companies.",
  openGraph: { type: "website", locale: "en_IN", siteName: "Tzar Venture" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-[#EFE8E0] text-[#0E2015] min-h-screen flex flex-col justify-between font-sans">
        <TechHeader />
        <div className="flex-1 w-full">{children}</div>
        <TechFooter />
      </body>
    </html>
  );
}
