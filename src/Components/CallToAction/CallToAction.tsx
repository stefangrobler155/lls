import { CallToActionProps } from '@/lib/types';

export default function CallToAction({
  heading,
  text,
  buttonText,
  buttonUrl,
}: CallToActionProps) {
  if (!heading || !text || !buttonUrl) return null;

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-lg mb-6">{text}</p>
        {buttonText && (
          <a
            href={buttonUrl}
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
