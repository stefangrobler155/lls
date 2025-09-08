// src/app/services/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fetchServicePages } from "@/lib/queries";

export default async function ServicesPage() {
  const servicePages = await fetchServicePages();

    if (servicePages.length === 0) {
    notFound(); // 👈 will trigger not-found.tsx
  }

  return (
    <section className="min-h-screen bg-white mx-auto">
      <div className="max-w-7xl pt-16 mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Our Photography Services
          </h1>
          <p className="text-gray-900 text-lg max-w-2xl mx-auto">
            Explore our range of photography services designed to capture your most
            cherished moments. From weddings to family portraits, we have something
            for everyone.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.id}
              className="block rounded-lg shadow-md hover:shadow-lg transition bg-gray-50 overflow-hidden"
            >
              {service.acf.service_image_url && (
                <Image
                  src={service.acf.service_image_url}
                  alt={service.acf.service_title}
                  className="w-full h-100 object-cover"
                  width={500}
                  height={500}
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.acf.service_title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {service.acf.service_description}
                </p>
                <span className="text-sm text-black font-medium hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
