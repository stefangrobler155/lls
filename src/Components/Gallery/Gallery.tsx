'use client';

import './Gallery.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';

type GalleryImage = {
  url: string;
  categories: string[];
  title?: string;
  caption?: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

const categories = ['all', 'wedding', 'engagement', 'family'];

export default function Gallery({ images }: GalleryProps) {
  const [index, setIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.categories.includes(activeCategory));

  return (
    <>
      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${cat === activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img, i) => (
          <img
            src={img.url}
            alt={img.title || `Gallery ${i + 1}`}
            key={i}
            onClick={() => setIndex(i)}
            className="gallery-thumb"
          />
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={filteredImages.map((img) => ({ src: img.url }))}
      />
    </>
  );
}
