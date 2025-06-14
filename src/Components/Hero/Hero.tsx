
import './Hero.css';

type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  ctaUrl?: string;
};

export default function Hero({ title, subtitle, imageUrl, ctaText, ctaUrl }: HeroProps) {
    console.log(`Hero component rendered with title: ${title}, subtitle: ${subtitle}, imageUrl: ${imageUrl}, ctaText: ${ctaText}, ctaUrl: ${ctaUrl}`);
    
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
