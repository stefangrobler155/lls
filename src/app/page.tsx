// app/page.tsx or wherever you're using this
import { getHomePage } from '@/lib/api';
import Hero from '@/components/Hero/Hero';
import AboutBrief from '@/components/AboutBrief/AboutBrief';
import ServicesOverview from '@/components/ServicesOverview/ServicesOverview';

export default async function HomePage() {
  const { acf } = await getHomePage();

  return (
    <main>
      <Hero
        title={acf.hero_title}
        subtitle={acf.hero_subtitle}
        imageUrl={acf.hero_background_url} // ← ✅ using the clean URL
        ctaText={acf.cta_text}
        ctaUrl={acf.cta_url}
      />
      <AboutBrief
        title={acf.about_title}
        text={acf.about_text}
        imageUrl={acf.about_image_url}
      />
      <ServicesOverview
        title={acf.services_title}
        description={acf.services_description}
        services={[
          {
            title: acf.service_1_title,
            description: acf.service_1_description,
            imageUrl: acf.service_1_image,
          },
          {
            title: acf.service_2_title,
            description: acf.service_2_description,
            imageUrl: acf.service_2_image,
          },
          {
            title: acf.service_3_title,
            description: acf.service_3_description,
            imageUrl: acf.service_3_image,
          },
        ]}
      />
    </main>
  );
}

