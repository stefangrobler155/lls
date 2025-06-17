import './CallToAction.css';
import { CallToActionProps } from '@/lib/types';


export default function CallToAction({
  heading,
  text,
  buttonText,
  buttonUrl,
}: CallToActionProps) {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>{heading}</h2>
        <p>{text}</p>
        <a href={buttonUrl} className="cta-button">
          {buttonText}
        </a>
      </div>
    </section>
  );
}
