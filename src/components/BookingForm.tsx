'use client';

import { useState, useTransition } from 'react';
import { FiCalendar, FiCheckCircle, FiClock, FiMail, FiPhone, FiUser } from 'react-icons/fi';

type BookingStatus = 'idle' | 'sending' | 'success' | 'error';

const serviceOptions = [
  'Wedding photography',
  'Engagement photography',
  'Family photography',
  'Portrait session',
  'Other',
] as const;

const timeOptions = ['Morning', 'Afternoon', 'Evening', 'Flexible'] as const;

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  location: string;
  notes: string;
};

export default function BookingForm() {
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

    const booking: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      location: formData.get('location') as string,
      notes: (formData.get('notes') as string) || '',
    };

    startTransition(async () => {
      try {
        const response = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(booking),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Failed to send booking request.');
        }

        form.reset();
        setStatus('success');
        setMessage(result.message || 'Booking request sent successfully!');
      } catch (error) {
        setStatus('error');
        setMessage(
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.'
        );
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiUser aria-hidden="true" />
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={isLoading}
            className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiMail aria-hidden="true" />
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isLoading}
            className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiPhone aria-hidden="true" />
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            disabled={isLoading}
            className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-800">
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            disabled={isLoading}
            defaultValue=""
            className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label htmlFor="date" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiCalendar aria-hidden="true" />
            Preferred date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            disabled={isLoading}
            className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Preferred Time */}
        <div>
          <label htmlFor="time" className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-800">
            <FiClock aria-hidden="true" />
            Preferred time
          </label>
          <select
            id="time"
            name="time"
            required
            disabled={isLoading}
            defaultValue=""
            className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="" disabled>
              Select a time
            </option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-800">
          Shoot location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          placeholder="Venue, city, or area"
          disabled={isLoading}
          className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium text-gray-800">
          Extra details
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          placeholder="Tell us about the session, number of people, package interest, or anything important."
          disabled={isLoading}
          className="w-full rounded border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded bg-black px-6 py-3.5 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        <FiCheckCircle aria-hidden="true" />
        {isLoading ? 'Sending request...' : 'Request booking'}
      </button>

      {/* Status Message */}
      {message && (
        <p
          className={`text-sm ${status === 'error' ? 'text-red-600' : 'text-green-700'}`}
          aria-live="polite"
          role="status"
        >
          {message}
        </p>
      )}
    </form>
  );
}