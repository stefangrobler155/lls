import Hero from '@/components/Hero/Hero';
import AboutBrief from '@/components/AboutBrief/AboutBrief';
import ServicesOverview from '@/components/ServicesOverview/ServicesOverview';
import FeaturedGallerySlider from '@/components/FeaturedGallerySlider/FeaturedGallerySlider';
import CallToAction from '@/components/CallToAction/CallToAction';

export default async function HomePage() {
  const res = await fetch('http://lls.local/wp-json/wp/v2/pages?slug=home');
  const data = await res.json();
  const home = data[0];
  const acf = home.acf;


  const featuredGallery = [
    acf?.featured_gallery?.image_1,
    acf?.featured_gallery?.image_2,
    acf?.featured_gallery?.image_3,
    acf?.featured_gallery?.image_4,
    acf?.featured_gallery?.image_5,
  ].filter(Boolean);

  return (
    <main>
      <Hero
        title={acf.hero_title}
        subtitle={acf.hero_subtitle}
        imageUrl={acf.hero_background_url}
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
            url: acf.service_1_url,
          },
          {
            title: acf.service_2_title,
            description: acf.service_2_description,
            imageUrl: acf.service_2_image,
            url: acf.service_2_url,
          },
          {
            title: acf.service_3_title,
            description: acf.service_3_description,
            imageUrl: acf.service_3_image,
            url: acf.service_3_url,
          },
        ]}
      />
      <FeaturedGallerySlider images={featuredGallery} />
      <CallToAction />
    </main>
  );
}
