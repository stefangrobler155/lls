import { getHomePageData } from '@/lib/queries';
import Hero from '@/components/Hero/Hero';
import AboutBrief from '@/components/AboutBrief/AboutBrief';
import ServicesOverview from '@/components/ServicesOverview/ServicesOverview';
import FeaturedGallerySlider from '@/components/FeaturedGallerySlider/FeaturedGallerySlider';
import CallToAction from '@/components/CallToAction/CallToAction';
import FeaturedGallerySection from '@/components/FeaturedGallerySection/FeaturedGallerySection';

export default async function HomePage() {
  const home = await getHomePageData();
  const acf = home?.acf;

  if (!acf) return <p>Could not load homepage data.</p>;
  const about = acf.about_component;

  if (!acf) return <p>Something went wrong. Please try again later.</p>;
  if (!acf.hero_title || !acf.hero_subtitle || !acf.hero_background_url) {
    return <p>Missing hero data. Please check your configuration.</p>;
  }
  if (!about || !about.title || !about.subtitle) {
    return <p>Missing about section data. Please check your configuration.</p>;
  }
  if (!acf.services_title || !acf.services_description) {
    return <p>Missing services overview data. Please check your configuration.</p>;
  }
  if (!acf.featured_gallery || !acf.featured_gallery.image_1) {
    return <p>Missing featured gallery images. Please check your configuration.</p>;
  }
  if (!acf.cta_text || !acf.cta_url) {
    return <p>Missing call to action data. Please check your configuration.</p>;
  }

  // Filter out undefined or null images from the featured gallery  
  const featuredGallery = [
  acf.featured_gallery.image_1,
  acf.featured_gallery.image_2,
  acf.featured_gallery.image_3,
  acf.featured_gallery.image_4,
  acf.featured_gallery.image_5,
].filter((img): img is string => typeof img === 'string');

  return (
    <div className="page__container">
      <Hero
        title={acf.hero_title}
        subtitle={acf.hero_subtitle}
        imageUrl={acf.hero_background_url}
        ctaText={acf.cta_text}
        ctaUrl={acf.cta_url}
      />
      <AboutBrief
        title={about.title}
        subtitle={about.subtitle}
        images={[about.image_1, about.image_2, about.image_3].filter(Boolean)}
      />
    
    {/* Recent Work Section */}
    <FeaturedGallerySection
      title={acf.recent_work_title}
      subtitle={acf.recent_work_subtitle}
      text={acf.recent_work_text}
      images={featuredGallery}
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
      
      
      <CallToAction
        heading={acf.call_to_action.heading}
        text={acf.call_to_action.text}
        buttonText={acf.call_to_action.button_text}
        buttonUrl={acf.call_to_action.button_url}
      />

    </ div>
  );
}
