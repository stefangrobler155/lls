import { AboutSectionProps } from '@/lib/types';

export default function AboutSection({
  title,
  intro,
  body,
  imageUrl,
  signature,
}: AboutSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={imageUrl}
            alt="About us"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-700 mb-4">{intro}</p>
          <p className="text-base text-gray-600 mb-4">{body}</p>
          {signature && (
            <p className="italic text-sm text-gray-500 mt-4">{signature}</p>
          )}
        </div>
      </div>
    </section>
  );
}
