import type { Metadata } from "next";
import { InternshipPage } from "@/legacy-src/pages/InternshipPage";

export const metadata: Metadata = {
  title: "Internship Opportunities | Tzar Digital Agency Academy",
  description: "Fast-track your creative and engineering career with hands-on client projects and mentorship at Tzar Digital Agency.",
  alternates: {
    canonical: "https://www.tzar.co/internship",
  },
  openGraph: {
    title: "Internship Opportunities | Tzar Digital Agency Academy",
    description: "Fast-track your creative and engineering career with hands-on client projects and mentorship at Tzar Digital Agency.",
    url: "https://www.tzar.co/internship",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function Internship() {
  return <InternshipPage />;
}
