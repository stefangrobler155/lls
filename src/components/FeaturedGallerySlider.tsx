import Image from "next/image";

type FeaturedGallerySliderProps = {
  images: string[];
};

export default function FeaturedGallerySlider({ images }: FeaturedGallerySliderProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 animate-scroll-loop whitespace-nowrap w-max">
        {[...images, ...images].map((url, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden shadow"
          >
            <Image
              src={url}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
