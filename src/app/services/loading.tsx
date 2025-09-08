// src/app/services/loading.tsx

export default function Loading() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-700">Loading services...</p>
      </div>
    </section>
  );
}
