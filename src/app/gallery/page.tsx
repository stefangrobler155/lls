import Gallery from "@/components/Gallery";
import { fetchCategoryImages } from "@/lib/queries";

export default async function GalleryPage() {
  const galleryImages = await fetchCategoryImages();

  const uniqueGalleryImages = Array.from(
    new Map(galleryImages.map((img) => [img.url, img])).values()
  );

  return (
    <section className="min-h-screen bg-white mx-auto">
      <div className="max-w-7xl pt-16 mx-auto px-4">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-gray-900 text-lg max-w-2xl mx-auto">
            Welcome to our gallery! Here you can find a curated selection of our best work.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Gallery images={uniqueGalleryImages} />
      </div>
    </section>
  );
}
