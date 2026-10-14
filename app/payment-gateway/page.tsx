import type { Metadata } from "next";
import { PaymentPage } from "@/legacy-src/pages/PaymentPage";

export const metadata: Metadata = {
  title: "100% Secure Online Payment Gateway | Tzar Digital Agency",
  description: "Make safe and instant payments for your active projects with 256-bit SSL encrypted Razorpay & UPI integration.",
  alternates: {
    canonical: "https://www.tzar.co/payment-gateway",
  },
  openGraph: {
    title: "100% Secure Online Payment Gateway | Tzar Digital Agency",
    description: "Make safe and instant payments for your active projects with 256-bit SSL encrypted Razorpay & UPI integration.",
    url: "https://www.tzar.co/payment-gateway",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function PaymentGateway() {
  return <PaymentPage />;
}
