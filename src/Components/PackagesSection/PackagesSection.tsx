type Package = {
  title: string;
  description: string;
  includes: string;
  price: string;
  image_url: string;
};

type PackagesSectionProps = {
  packages: Package[];
};

export default function PackagesSection({ packages }: PackagesSectionProps) {
  if (!packages || packages.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Packages</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            const includesList = pkg.includes?.split('\n') ?? [];

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={pkg.image_url}
                  alt={pkg.title}
                  className="w-full h-100 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                    {includesList.map((item, i) => (
                      <li key={i}>{item.trim()}</li>
                    ))}
                  </ul>

                  <p className="text-lg font-bold text-gray-900">{pkg.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
