import { Metadata } from 'next';
import { ContentMarketingPage } from '@/legacy-src/pages/ContentMarketingPage';

export const metadata: Metadata = {
  title: "TZAR VENTURE- Digital Marketing Agency Content Marketing Services Online - To Grow Traffic & Sales Online | Tzar Venture",
  description: "Online Content Marketing Services will help you to grow brands, website traffic & Sale through online digital marketing channels @ Tzar venture.",
};

export default function ContentMarketingService() {
  return <ContentMarketingPage />;
}
