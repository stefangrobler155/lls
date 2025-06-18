import ContactForm from '@/components/ContactForm/ContactForm';
import Image from 'next/image';
import Head from 'next/head';
import { getContactPageData } from '@/lib/queries';

export default async function Contact() {
  const acf = await getContactPageData();

  if (!acf) {
    return <p className="text-center py-20 text-red-500">Unable to load contact page data.</p>;
  }
  return (
    <section className="flex flex-col min-h-screen bg-white pt-16">
      <Head>
        <title>Contact Us | My App</title>
        <meta name="description" content="Get in touch with us for questions, bookings, or to say hello!" />
      </Head>
      <div className="max-w-7xl flex flex-col mx-auto gap-12 px-4">
        <div className="flex flex-col gap-4 mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900">{acf.title}</h1>
          <p className="max-w-lg text-gray-700">
            {acf.subtitle}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/2">
            <ContactForm />
          </div>
          <div className="md:w-1/2 mx-auto">
            <Image
              src={acf.image_url}
              alt="Contact Us Illustration"
              width={400}
              height={300}
              className="rounded-lg shadow-lg object-cover w-85 mx-auto p-4 bg-gray-900"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

