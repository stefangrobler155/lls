import { HeroProps } from '@/lib/types';

export default function Hero({ title, subtitle, imageUrl, ctaText, ctaUrl }: HeroProps) {
  if (!title || !subtitle || !imageUrl) {
    return <p className="text-center text-red-500">Missing hero data. Please check your configuration.</p>;
  }

  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center text-white mb-12"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1
          className="text-white text-4xl sm:text-5xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-white text-lg sm:text-xl mb-6"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
        {ctaText && ctaUrl && (
          <a
            href={ctaUrl}
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
