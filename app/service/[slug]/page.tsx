import { notFound } from "next/navigation";
import { services } from "@/data/kg/services";
import { servicesKeywords, siteDescription } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const title = service
    ? `${service.question} | Custom Printing Solutions`
    : "Service | Custom Printing Solutions";

  return {
    title,
    description: siteDescription,
    keywords: servicesKeywords,
    openGraph: {
      title,
      description: siteDescription,
      siteName: "Kristal Graphics",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: siteDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-60">
      <div className="container mx-auto">
        <h1 className="text-7xl font-heading leading-normal">
          {service.question}
        </h1>
        {service.answer}
      </div>
    </main>
  );
}
