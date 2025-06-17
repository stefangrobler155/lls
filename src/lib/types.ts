// lib/types.ts

// Hero Types
export type HeroData = {
  hero_title: string;
  hero_subtitle: string;
  hero_background_url: string;
  cta_text: string;
  cta_url: string;
};
export type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  ctaUrl?: string;
};
// About Section Types
export type AboutBriefData = {
  about_title: string;
  about_text: string;
  about_image_url: string;
};
export type AboutBriefProps = {
  title: string;
  text: string;
  imageUrl?: string;
};
export type AboutSectionProps = {
  title: string;
  intro: string;
  body: string;
  imageUrl: string;
  signature?: string;
};
// Services Overview Types
export type ServiceItem = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

export type ServicesOverviewData = {
  services_title: string;
  services_description: string;
  service_1_title: string;
  service_1_description: string;
  service_1_image: string;
  service_1_url: string;
  service_2_title: string;
  service_2_description: string;
  service_2_image: string;
  service_2_url: string;
  service_3_title: string;
  service_3_description: string;
  service_3_image: string;
  service_3_url: string;
};

export type FeaturedGallery = {
  featured_gallery: {
    image_1?: string;
    image_2?: string;
    image_3?: string;
    image_4?: string;
    image_5?: string;
  };
};

export type CallToActionData = {
  call_to_action: {
    heading: string;
    text: string;
    button_text: string;
    button_url: string;
  };
};

export type CallToActionProps = {
  heading: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
};

export type FeaturedGallerySliderProps = {
  images: string[];
};
export type HomePageData = {
  acf: HeroData & AboutBriefData & ServicesOverviewData & FeaturedGallery & CallToActionData;
};

