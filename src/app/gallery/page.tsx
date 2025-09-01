import Gallery from '../../components/Gallery/Gallery';

type GalleryImage = {
  url: string;
  categories: string[];
  title?: string;
  caption?: string;
};

const allowedCategories = ['wedding', 'engagement', 'family'];

async function fetchCategoryImages(): Promise<GalleryImage[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/media?per_page=50`);
  if (!res.ok) return [];

  const media = await res.json();

  type MediaItem = {
    source_url: string;
    class_list?: string[];
    title?: { rendered?: string };
    caption?: { rendered?: string };
  };

  return media
    .map((img: MediaItem): GalleryImage | null => {
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

  // Remove duplicates by URL
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
