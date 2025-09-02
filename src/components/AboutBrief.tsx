import Image from "next/image";

type AboutProps = {
  title: string;
  subtitle: string;
  images: string[];
};


export default function AboutSection({ title, subtitle, images }: AboutProps) {
  return (
    <section className="bg-white mb-12">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-900 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-3">
        {images.map((url, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={url}
              alt={`About ${index + 1}`}
              className="w-full h-64 object-cover"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
