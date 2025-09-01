import { notFound } from 'next/navigation';
import PackagesSection from '@/components/PackagesSection/PackagesSection';

type Package = {
  title: string;
  description: string;
  includes: string;
  price: string;
  image_url: string;
};

async function getServiceData(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/pages?slug=${slug}&acf_format=standard`, {
    next: { revalidate: 60 },
    

  });

  const data = await res.json();
  if (!data || data.length === 0) return null;

  const page = data[0];
  const acf = page.acf;

  const packages: Package[] = [
    {
      title: acf?.silver_package?.title,
      description: acf?.silver_package?.description,
      includes: acf?.silver_package?.includes ?? '',
      price: acf?.silver_package?.price,
      image_url: acf?.silver_package?.image_url,
    },
    {
      title: acf?.gold_radiance_package?.title,
      description: acf?.gold_radiance_package?.description,
      includes: acf?.gold_radiance_package?.includes ?? '',
      price: acf?.gold_radiance_package?.price,
      image_url: acf?.gold_radiance_package?.image_url,
    },
    {
      title: acf?.platinum_package?.title,
      description: acf?.platinum_package?.description,
      includes: acf?.platinum_package?.includes ?? '',
      price: acf?.platinum_package?.price,
      image_url: acf?.platinum_package?.image_url,
    },
  ];

  return {
    title: page.title.rendered,
    content: page.content.rendered,
    packages,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceData(slug);
  if (!service) return notFound();

  return (
    <section className='min-h-screen bg-white mx-auto mb-12'>
      <div className="max-w-7xl pt-16 mx-auto px-4">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
      <h1 className='text-3xl font-bold text-gray-900 mb-4'>{service.title}</h1>
      <p className='text-gray-900 text-lg max-w-2xl mx-auto'>Discover our exclusive packages designed to enhance your experience.</p>
      </div>
      </div>
      <PackagesSection packages={service.packages} />
    </section>
  );
}

export const dynamic = 'force-dynamic'; 
