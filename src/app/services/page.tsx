// app/services/page.tsx
import Link from 'next/link';

type WPPage = {
  id: number;
  slug: string;
  acf: {
    service_title: string;
    service_description: string;
    service_image_url: string;
  };
};

const SERVICE_SLUGS = ['weddings', 'engagements', 'family'];

export default async function ServicesPage() {
  const serviceRequests = SERVICE_SLUGS.map(slug =>
    fetch(`http://lls.local/wp-json/wp/v2/pages?slug=${slug}`).then(res => res.json())
  );

  const servicePages: WPPage[] = (await Promise.all(serviceRequests)).map(result => result[0]);

  return (
    <section className="h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Photography Services
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.id}
              className="block rounded-lg shadow-md hover:shadow-lg transition bg-gray-50 overflow-hidden"
            >
              {service.acf.service_image_url && (
                <img
                  src={service.acf.service_image_url}
                  alt={service.acf.service_title}
                  className="w-full h-100 object-cover"
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
