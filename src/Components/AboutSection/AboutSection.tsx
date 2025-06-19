import { AboutSectionProps } from '@/lib/types';
import Image from 'next/image';

export default function AboutSection({
  title,
  intro,
  body,
  imageUrl,
  signature,
}: AboutSectionProps) {
  return (
    <section className="min-h-screen bg-white mx-auto">
      <div className="max-w-7xl pt-16 mx-auto px-4">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-900 text-lg max-w-2xl mx-auto">{intro}</p>
      </div>
      <div className="px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className=''>
            <p className="max-w-100 mx-auto text-lg text-gray-900 mb-4">{body}</p>
          {signature && (
            <p className="max-w-100 mx-auto italic text-sm text-gray-500 mt-4">{signature}</p>
          )}
        </div>
        <div>
          <Image
            src={imageUrl}
            alt="About us"
            width={500}
            height={500}
            className="w-90 rounded-lg shadow-md object-cover mx-auto"
          />
        </div>
        
      </div>
      </div>
    </section>
  );
}
