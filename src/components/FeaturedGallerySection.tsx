// components/FeaturedGallerySection.tsx

import FeaturedGallerySlider from './FeaturedGallerySlider';

type Props = {
  title: string;
  subtitle: string; 
  text: string;
  images: string[];
};


export default function FeaturedGallerySection({ title, subtitle, text, images }: Props) {
  return (
    <section className="bg-white mb-12">
        <div className="flex flex-col items-center text-center mb-8">
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-gray-900 text-lg">{subtitle}</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
                <p className='text-center italic text-gray-900 text-lg'>{text}</p>
            </div>
            <FeaturedGallerySlider images={images} />
            </div>
      </div>
    </section>
  );
}
