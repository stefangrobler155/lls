import { AboutSectionProps } from '@/lib/types';
import './AboutSection.css';
/**
 * AboutSection component for displaying the about section of the homepage.
 * It includes a title, introduction, body text, an image, and an optional signature.
 *
 * @param {AboutSectionProps} props - The properties for the AboutSection component.
 * @returns {JSX.Element} The rendered AboutSection component.
 */
export default function AboutSection({
  title,
  intro,
  body,
  imageUrl,
  signature,
}: AboutSectionProps) {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={imageUrl} alt="About us" />
        </div>
        <div className="about-content">
          <h2>{title}</h2>
          <p className="about-intro">{intro}</p>
          <p className="about-body">{body}</p>
          {signature && <p className="about-signature">{signature}</p>}
        </div>
      </div>
    </section>
  );
}
