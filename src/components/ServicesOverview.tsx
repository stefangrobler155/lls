// src\components\ServicesOverview.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ServicesOverviewProps } from "@/lib/types";


export default function ServicesOverview({ title, description, services }: ServicesOverviewProps) {
  return (
    <section className="bg-white flex items-center justify-center mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-lg text-gray-900 mt-2">{description}</p>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const CardContent = (
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition">
                {service.imageUrl && (
                  <div className="h-100 w-full overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-900 text-sm">{service.description}</p>
                </div>
              </div>
            );

            return service.url ? (
              <Link
                key={service.url}
                href={service.url}
                aria-label={`View details about ${service.title}`}
                className="block"
              >
                {CardContent}
            </Link>

            ) : (
              <div key={service.title}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}