
import { HeroProps } from '@/lib/types';
import './Hero.css';

/**
 * Hero component for the homepage.
 * Displays a title, subtitle, background image, and an optional call to action button.
 *
 * @param {HeroProps} props - The properties for the Hero component.
 * @returns {JSX.Element} The rendered Hero component.
 */
export default function Hero({ title, subtitle, imageUrl, ctaText, ctaUrl }: HeroProps) {
    
  if (!title || !subtitle || !imageUrl) {
    return <p>Missing hero data. Please check your configuration.</p>;
  } 
  if (!ctaText || !ctaUrl) {
    return <p>Missing call to action data. Please check your configuration.</p>;
  }

  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero__overlay">
        
        <div className="">
           <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: subtitle }} />
        {ctaText && ctaUrl && (
          <a href={ctaUrl} className="button hero__button">
            {ctaText}
          </a>
        )} 
        </div>
        
      </div>
    </section>
  );
}
