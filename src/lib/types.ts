// lib/types.ts

// ---------------------------
// Hero Section
// ---------------------------
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

// ---------------------------
// About Section (Nested Group)
// ---------------------------
export type AboutComponent = {
  title: string;
  subtitle: string;
  image_1: string;
  image_2: string;
  image_3: string;
};

export type AboutBriefData = {
  about_component: AboutComponent;
};

export type AboutSectionProps = {
  title: string;
  intro: string;
  body: string;
  imageUrl: string;
  signature?: string;
};

// ---------------------------
// Services Overview
// ---------------------------
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

// ---------------------------
// Featured Gallery
// ---------------------------
export type FeaturedGallery = {
  featured_gallery: {
    image_1?: string;
    image_2?: string;
    image_3?: string;
    image_4?: string;
    image_5?: string;
  };
};

export type FeaturedGallerySliderProps = {
  images: string[];
};

// ---------------------------
// Gallery types
// ---------------------------
export type GalleryImage = {
  url: string;
  categories: string[];
  title?: string;
  caption?: string;
};

// ---------------------------
// Call To Action
// ---------------------------
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

// ---------------------------
// Combined ACF Type for Homepage
// ---------------------------
export type HomePageACF = HeroData &
  AboutBriefData &
  ServicesOverviewData &
  FeaturedGallery &
  CallToActionData & {
    about_component: AboutComponent;

    recent_work_title: string;
    recent_work_subtitle: string;
    recent_work_text: string;
  };

// Used when fetching the page data from WP REST API
export type HomePageData = {
  acf: HomePageACF;
};
