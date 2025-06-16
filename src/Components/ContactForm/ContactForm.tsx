'use client';

import './ContactForm.css';
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

    const res = await fetch('http://lls.local/wp-json/contact-form-7/v1/contact-forms/123/feedback', {
      method: 'POST',
      body: data,
    });

    if (res.ok) {
      form.reset();
      router.push('/thank-you'); // ✅ Redirect here
    } else {
      setFormState('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Get in Touch</h2>

      <input type="text" name="your-name" placeholder="Your Name" required />
      <input type="email" name="your-email" placeholder="Your Email" required />
      <input type="tel" name="your-phone" placeholder="Your Phone Number" required />
      <textarea name="your-message" placeholder="Your Message" required></textarea>

      <button type="submit" disabled={formState === 'sending'}>
        {formState === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {formState === 'error' && <p className="error">Oops! Something went wrong.</p>}
    </form>
  );
}
