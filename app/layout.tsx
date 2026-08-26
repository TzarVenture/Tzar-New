import type { Metadata } from "next";
import "./globals.css";
import { TechHeader } from "@/legacy-src/components/layout/TechHeader";
import { TechFooter } from "@/legacy-src/components/layout/TechFooter";
import { WhatsAppButton } from "@/legacy-src/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tzar.co"),
  title: { default: "Tzar Venture | Digital Systems & Growth Agency", template: "%s | Tzar Venture" },
  description: "Tzar Venture builds high-performing websites, business systems, performance SEO, and growth engines for ambitious companies.",
  openGraph: { type: "website", locale: "en_IN", siteName: "Tzar Venture" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#090909] text-white min-h-screen flex flex-col justify-between">
        <TechHeader />
        <main className="flex-1 pt-24">{children}</main>
        <TechFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
