// This component renders the booking form and handles form submission to create a new booking request.
'use client';

import { useState, useTransition } from 'react';
import { FiCalendar, FiCheckCircle, FiClock, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { Package } from "@/lib/types";

type BookingStatus = 'idle' | 'sending' | 'success' | 'error';

export default function BookingForm({ selectedPackage }: { selectedPackage: Package }) {
  const [status, setStatus] = useState<BookingStatus>('idle');
  const [message, setMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const isLoading = isPending || status === 'sending';

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const booking = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: selectedPackage.title,
      package: selectedPackage.id,
      date: formData.get('date'),
      time: formData.get('time'),
      location: formData.get('location') || '',
      notes: formData.get('notes') || '',
    };

    startTransition(async () => {
      try {
        const response = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(booking),
        });

        const result = await response.json();

        if (!response.ok) throw new Error(result.message || 'Failed to send request');

        form.reset();
        setStatus('success');
        setMessage(result.message || 'Booking request sent successfully!');
      } catch (error: unknown) {
        setStatus('error');
        setMessage((error as Error).message || 'Something went wrong. Please try again.');
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiUser aria-hidden="true" /> Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={isLoading}
            className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiMail aria-hidden="true" /> Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={isLoading}
            className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiPhone aria-hidden="true" /> Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            disabled={isLoading}
            className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="date" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiCalendar aria-hidden="true" /> Preferred date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            disabled={isLoading}
            className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="time" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiClock aria-hidden="true" /> Preferred time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            required
            disabled={isLoading}
            className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-800">
          Shoot Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Venue or area"
          disabled={isLoading}
          className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100"
        />
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium text-gray-800">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Any special requests..."
          disabled={isLoading}
          className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded bg-black px-8 py-3.5 font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        <FiCheckCircle aria-hidden="true" />
        {isLoading ? 'Sending...' : 'Request Booking'}
      </button>

      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-red-600' : 'text-green-700'}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}