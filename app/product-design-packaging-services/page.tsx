import { Metadata } from 'next';
import { ProductPackagingPage } from '@/legacy-src/pages/ProductPackagingPage';

export const metadata: Metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency: Expert In Product Packaging Design Services",
  description: "Tzar Digital's packaging design services elevate your brand. Specialists create compelling, customized packaging boosting visibility and differentiation. Complimentary consultations discuss first impressions and solutions tailored to your business goals.",
};

export default function ProductPackagingService() {
  return <ProductPackagingPage />;
}
