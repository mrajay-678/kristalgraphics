import ServicesPageClient from "@/components/kg/ServicesPageClient";
import { seoMetadata } from "@/lib/seo";

const Page = () => {
  return <ServicesPageClient />;
};

export default Page;

export const metadata = seoMetadata.services;
