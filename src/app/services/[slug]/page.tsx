import { notFound } from "next/navigation";
import PackagesSection from "@/components/PackagesSection";
import { fetchServiceData } from "@/lib/queries";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 

  const service = await fetchServiceData(slug);

  if (!service) return notFound();

  return (
    <section className="min-h-screen bg-white mx-auto mb-12">
      <div className="max-w-7xl pt-16 mx-auto px-4">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="text-gray-900 text-lg max-w-2xl mx-auto">
            Discover our exclusive packages designed to enhance your experience.
          </p>
        </div>
      </div>
      <PackagesSection packages={service.packages} />
    </section>
  );
}

export const dynamic = "force-dynamic";
