import './AboutBrief.css';

type AboutBriefProps = {
  title: string;
  text: string;
  imageUrl?: string;
};

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
