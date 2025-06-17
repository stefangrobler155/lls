import './AboutBrief.css';
import { AboutBriefProps } from '@/lib/types';
/**
 * AboutBrief component for displaying a brief about section on the homepage.
 * It includes a title, text, and an optional image.
 *
 * @param {AboutBriefProps} props - The properties for the AboutBrief component.
 * @returns {JSX.Element} The rendered AboutBrief component.
 */
export default function AboutBrief({ title, text, imageUrl }: AboutBriefProps) {
  return (
    <section className="about-brief">
      {imageUrl && (
        <div className="about-brief__image">
          <img src={imageUrl} alt="About section image" />
        </div>
      )}
      <div className="about-brief__content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
