import type { Metadata } from "next";
import PaymentView from "./PaymentView";

export const metadata: Metadata = {
  title: "Bank Transfer & UPI Payment | Tzar Digital Agency",
  description: "Direct bank transfer and UPI QR payment for Tzar Digital Agency services. Pay easily via NEFT, RTGS, IMPS, or any UPI app with official GST invoices.",
  alternates: {
    canonical: "https://www.tzar.co/payment",
  },
  openGraph: {
    title: "Bank Transfer & UPI Payment | Tzar Digital Agency",
    description: "Direct bank transfer and UPI QR payment for Tzar Digital Agency services. Pay easily via NEFT, RTGS, IMPS, or any UPI app with official GST invoices.",
    url: "https://www.tzar.co/payment",
    siteName: "Tzar Digital Agency",
    locale: "en_IN",
    type: "website",
  },
};

export default function PaymentPage() {
  return <PaymentView />;
}
