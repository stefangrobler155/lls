import AboutSection from '../../components/AboutSection/AboutSection';

export default async function AboutPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/pages?slug=about`);
  const data = await res.json();
  const about = data[0]?.acf;

  return (
    <section className="min-h-screen bg-white mx-auto">
      <AboutSection
        title={about.about_title}
        intro={about.about_intro}
        body={about.about_body}
        imageUrl={about.about_image_url}
        signature={about.about_signature}
      />
    </section>
  );
}
