import type { Metadata } from "next";
import PaymentGatewayView from "./PaymentGatewayView";

export const metadata: Metadata = {
  title: "100% Secure Payment Gateway | Kotak Bank & UPI | Tzar Digital Agency",
  description: "Official payment gateway for Tzar Digital Agency. Make safe and instant payments via Kotak Mahindra Bank transfer, UPI QR code, or secure 256-bit encrypted online checkout.",
  alternates: {
    canonical: "https://www.tzar.co/payment-gateway",
  },
  openGraph: {
    title: "100% Secure Payment Gateway | Kotak Bank & UPI | Tzar Digital Agency",
    description: "Official payment gateway for Tzar Digital Agency. Make safe and instant payments via Kotak Mahindra Bank transfer, UPI QR code, or secure 256-bit encrypted online checkout.",
    url: "https://www.tzar.co/payment-gateway",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function PaymentGateway() {
  return <PaymentGatewayView />;
}
