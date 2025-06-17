import './FeaturedGallerySlider.css';
import React from 'react';
import { FeaturedGallerySliderProps } from '@/lib/types';
/**
 * FeaturedGallerySlider component for displaying a slider of featured images.
 * It includes a title and a list of images that can be scrolled through.
 *
 * @param {FeaturedGallerySliderProps} props - The properties for the FeaturedGallerySlider component.
 * @returns {JSX.Element} The rendered FeaturedGallerySlider component.
 */
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
