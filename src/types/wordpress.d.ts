export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

export interface GalleryItem {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia': [
      {
        source_url: string;
        alt_text: string;
      }
    ];
  };
}
