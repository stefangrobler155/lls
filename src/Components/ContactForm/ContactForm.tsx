'use client';
import './ContactForm.css';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // You can replace this with an actual submission logic later (e.g. API call)
    alert(`Thanks, ${formData.name}! We'll be in touch.`);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Email
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Message
        <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required />
      </label>

      <button type="submit">Send Message</button>
    </form>
  );
}
