'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'error' | 'success'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('sending');

    const form = e.currentTarget;

    // Simulate API delay
    setTimeout(() => {
      // 90% chance of success, 10% fake error (for demo purposes)
      if (Math.random() > 0.1) {
        form.reset();
        setFormState('success');
      } else {
        setFormState('error');
      }
    }, 1200);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white rounded-lg space-y-6"
    >
      <label htmlFor="your-name" className="sr-only">Your Name</label>
      <input
        id="your-name"
        type="text"
        name="your-name"
        placeholder="Your Name"
        required
        autoComplete="name"
        disabled={formState === 'sending'}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />

      <label htmlFor="your-email" className="sr-only">Your Email</label>
      <input
        id="your-email"
        type="email"
        name="your-email"
        placeholder="Your Email"
        required
        autoComplete="email"
        disabled={formState === 'sending'}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />

      <label htmlFor="your-phone" className="sr-only">Your Phone Number</label>
      <input
        id="your-phone"
        type="tel"
        name="your-phone"
        placeholder="Your Phone Number"
        required
        autoComplete="tel"
        disabled={formState === 'sending'}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />

      <label htmlFor="your-message" className="sr-only">Your Message</label>
      <textarea
        id="your-message"
        name="your-message"
        placeholder="Your Message"
        required
        rows={5}
        disabled={formState === 'sending'}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      ></textarea>

      <button
        type="submit"
        disabled={formState === 'sending'}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
      >
        {formState === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {formState === 'error' && (
        <p className="text-sm text-red-600 text-center" aria-live="polite">
          Oops! Something went wrong. Please try again.
        </p>
      )}

      {formState === 'success' && (
        <p className="text-sm text-green-600 text-center" aria-live="polite">
          Thanks! Your message has been sent.
        </p>
      )}
    </form>
  );
}
