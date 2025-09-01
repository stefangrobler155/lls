'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'error'>('idle');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/contact-form-7/v1/contact-forms/123/feedback`, {
      method: 'POST',
      body: data,
    });

    if (res.ok) {
      form.reset();
      router.push('/thank-you');
    } else {
      setFormState('error');
    }
  }

  return (
    
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white rounded-lg space-y-6"
        >
          <input
            type="text"
            name="your-name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="your-email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="tel"
            name="your-phone"
            placeholder="Your Phone Number"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            name="your-message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <button
            type="submit"
            disabled={formState === 'sending'}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            {formState === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {formState === 'error' && (
            <p className="text-sm text-red-600 text-center">Oops! Something went wrong.</p>
          )}
        </form>
    
  );
}
