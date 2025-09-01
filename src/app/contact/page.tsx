import ContactForm from '@/components/ContactForm/ContactForm';
import Head from 'next/head';
import { getContactPageData } from '@/lib/queries';
import Image from 'next/image';

export default async function Contact() {
  const acf = await getContactPageData();

  if (!acf) {
    return <p className="text-center py-20 text-red-500">Unable to load contact page data.</p>;
  }
  return (
    <section className="min-h-screen bg-white mx-auto">
      <Head>
        <title>Contact Us | My App</title>
        <meta name="description" content="Get in touch with us for questions, bookings, or to say hello!" />
      </Head>
      <div className="max-w-7xl pt-16 mx-auto px-4">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{acf.title}</h1>
          <p className="text-gray-900 text-lg max-w-2xl mx-auto">
            {acf.subtitle}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          
          <div className="md:w-1/2">
            <ContactForm />
          </div>
          <div className="md:w-1/2">
            
            <Image
              src={acf.image_url}
              alt="Contact Us Illustration"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover w-85 mx-auto p-4 bg-white"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

