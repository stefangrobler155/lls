import Gallery from '@/components/Gallery/Gallery';

type GalleryImage = {
  url: string;
  categories: string[];
  title?: string;
  caption?: string;
};

const allowedCategories = ['wedding', 'engagement', 'family'];

async function fetchCategoryImages(): Promise<GalleryImage[]> {
  const res = await fetch('http://lls.local/wp-json/wp/v2/media?per_page=50');
  if (!res.ok) return [];

  const media = await res.json();

  return media
    .map((img: any): GalleryImage | null => {
      const categories =
        img.class_list
          ?.filter((cls: string) => cls.startsWith('attachment_category-'))
          .map((cls: string) => cls.replace('attachment_category-', '')) || [];

      const hasAllowedCategory = categories.some((cat: string) =>
        allowedCategories.includes(cat)
      );

      if (!hasAllowedCategory) return null;

      return {
        url: img.source_url,
        categories,
        title: img.title?.rendered || '',
        caption: img.caption?.rendered || '',
      };
    })
    .filter((img: GalleryImage | null): img is GalleryImage => img !== null); // ✅ Remove nulls, assert type
}

export default async function GalleryPage() {
  const galleryImages = await fetchCategoryImages();

  // ✅ Remove duplicates by URL
  const uniqueGalleryImages = Array.from(
    new Map(galleryImages.map((img) => [img.url, img])).values()
  );

  return (
    <section className="max-w-7xl min-h-screen bg-white mx-auto">
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-center text-gray-900">Gallery</h1>
            <p className="text-center text-gray-700">
              Welcome to our gallery! Here you can find a curated selection of our best work.
            </p>
          </div>
        </div>
      <div className="mx-auto px-4">

        <Gallery images={uniqueGalleryImages} />
      </div>
      
    </section>
  );
}
