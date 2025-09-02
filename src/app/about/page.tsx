import AboutSection from "@/components/AboutSection";
import { fetchAboutPage } from "@/lib/queries";

export default async function AboutPage() {
  const about = await fetchAboutPage();

  if (!about) {
    // Optional fallback — otherwise error.tsx will handle it
    return <p className="text-center py-10">No About Page content found.</p>;
  }

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
