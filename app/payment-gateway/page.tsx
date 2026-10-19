import type { Metadata } from "next";
import PaymentGatewayView from "./PaymentGatewayView";

export const metadata: Metadata = {
  title: "Pay Online | Tzar Digital Agency",
  description: "Select your services and complete your payment securely via card, UPI, or net banking with instant confirmation and automated GST invoice.",
  alternates: {
    canonical: "https://www.tzar.co/payment-gateway",
  },
  openGraph: {
    title: "Pay Online | Tzar Digital Agency",
    description: "Select your services and complete your payment securely via card, UPI, or net banking with instant confirmation and automated GST invoice.",
    url: "https://www.tzar.co/payment-gateway",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function PaymentGateway() {
  return <PaymentGatewayView />;
}
