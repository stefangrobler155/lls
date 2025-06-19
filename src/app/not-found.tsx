// app/not-found.tsx
export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h1>
      <p className="text-gray-600 text-lg mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
      >
        Back to Home
      </a>
    </section>
  );
}
