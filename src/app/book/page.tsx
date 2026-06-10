import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: 'Book a Session',
  description: 'Request a photography booking with Lumina Lens Studio.',
};

export default function BookPage() {
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Booking request
          </p>
          <h1 className="mb-4 text-3xl font-bold text-gray-950 md:text-4xl">
            Book your photography session
          </h1>
          <p className="text-lg text-gray-700">
            Share the details for your preferred session and we will reply with availability,
            package guidance, and the next steps.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <BookingForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-gray-950">What happens next?</h2>
              <ol className="space-y-3 text-sm text-gray-700">
                <li>1. We check your date and preferred time.</li>
                <li>2. We recommend the best package for your session.</li>
                <li>3. Your booking is confirmed once the details are agreed.</li>
              </ol>
            </div>

            <div className="rounded-lg bg-black p-6 text-white">
              <h2 className="mb-3 text-lg font-semibold">Learning note</h2>
              <p className="text-sm text-gray-200">
                This first version teaches the basic pattern: form, server route,
                validation, and customer feedback. The next step is storing or emailing
                each booking request.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
