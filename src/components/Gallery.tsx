'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
import Image from 'next/image';
import { GalleryProps, galleryCategories, GalleryFilter } from '@/lib/types';

const categories: GalleryFilter[] = ["all", ...galleryCategories];

export default function Gallery({ images }: GalleryProps) {
  const [index, setIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState<GalleryFilter>("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.categories.includes(activeCategory));

  return (
    <section className="px-4 mb-12">
      {/* Filters */}
      <div className="max-w-7xl flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              cat === activeCategory
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredImages.map((img, i) => (
          <Image
            key={i}
            src={img.url}
            alt={img.title || `Gallery ${i + 1}`}
            onClick={() => setIndex(i)}
            className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
            width={500}
            height={500}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={filteredImages.map((img) => ({ src: img.url }))}
      />
    </section>
  );
}
