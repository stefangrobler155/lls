import { CallToActionProps } from '@/lib/types';
import Link from 'next/link';

export default function CallToAction({
  heading,
  text,
  buttonText,
  buttonUrl,
}: CallToActionProps) {
  if (!heading || !text || !buttonUrl) return null;
  return (
    <section className=" text-white ">
      <div className="bg-black max-w-7xl mx-auto text-center px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-lg mb-6">{text}</p>
        {buttonText && (
          <Link
            href={buttonUrl}
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            {buttonText} 
          </Link>
        )}
        
      </div>
    </section>
  );
}
