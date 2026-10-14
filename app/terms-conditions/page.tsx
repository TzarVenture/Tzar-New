import type { Metadata } from "next";
import { TermsPage } from "@/legacy-src/pages/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tzar Digital Agency",
  description: "Terms of service, intellectual property guidelines, and client agreements governing Tzar Digital Agency engagements.",
  alternates: {
    canonical: "https://www.tzar.co/terms-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Tzar Digital Agency",
    description: "Terms of service, intellectual property guidelines, and client agreements governing Tzar Digital Agency engagements.",
    url: "https://www.tzar.co/terms-conditions",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function Terms() {
  return <TermsPage />;
}
