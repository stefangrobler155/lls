import './FeaturedGallerySlider.css';
import React from 'react';

type FeaturedGallerySliderProps = {
  images: string[];
};

const FeaturedGallerySlider = ({ images }: FeaturedGallerySliderProps) => {
  if (!images || images.length === 0) return null;

  return (
    <section>
        <h2 className="section-heading">Recent Work</h2>
        <div className="featured-slider">
        <div className="slider-track">
            {images.map((url, index) => (
            <div className="slide" key={index}>
                <img src={url} alt={`Featured ${index + 1}`} />
            </div>
            ))}
        </div>
        </div>
    </section>
    
  );
};

export default FeaturedGallerySlider;
