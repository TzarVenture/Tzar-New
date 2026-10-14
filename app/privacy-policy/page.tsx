import type { Metadata } from "next";
import { PrivacyPage } from "@/legacy-src/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Tzar Digital Agency",
  description: "Read how Tzar Digital Agency safeguards client data, communication, and digital assets.",
  alternates: {
    canonical: "https://www.tzar.co/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Tzar Digital Agency",
    description: "Read how Tzar Digital Agency safeguards client data, communication, and digital assets.",
    url: "https://www.tzar.co/privacy-policy",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPage />;
}
