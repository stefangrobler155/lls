import './AboutSection.css';

type AboutSectionProps = {
  title: string;
  intro: string;
  body: string;
  imageUrl: string;
  signature?: string;
};

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
