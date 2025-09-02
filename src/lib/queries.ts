const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API;

import { HomePageData, GalleryImage } from './types';
// ---------------------------
// Home Page Query
// ---------------------------
export async function getHomePageData(): Promise<HomePageData | null> {
  const res = await fetch(`${API_URL}/pages?slug=home`);
  if (!res.ok) return null;

  const data = await res.json();
  return data[0] as HomePageData;
}
// ---------------------------
// Contact Page Query
// ---------------------------
export async function getContactPageData() {
  try {
    const res = await fetch(`${API_URL}/pages?slug=contact`, {
      next: { revalidate: 60 }, // re-fetch every 60s
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch contact page: ${res.status}`);
    }

    const data = await res.json();
    return data[0]?.acf ?? null;
  } catch (error) {
    console.error("Error fetching contact page data:", error);
    throw error; // handled by error.tsx if you have one
  }
}

// ---------------------------
// Fetch About Page Data
// ---------------------------
export async function fetchAboutPage() {
  try {
    const res = await fetch(`${API_URL}/pages?slug=about`, {
      next: { revalidate: 60 }, // re-fetch every 60s
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch about page: ${res.status}`);
    }

    const data = await res.json();
    return data[0]?.acf ?? null;
  } catch (error) {
    console.error(error);
    throw error; // let Next.js handle it with error.tsx
  }
}
// ---------------------------
// Gallery Page Data
// ---------------------------
const allowedCategories = ["wedding", "engagement", "family"];

type MediaItem = {
  source_url: string;
  class_list?: string[];
  title?: { rendered?: string };
  caption?: { rendered?: string };
};

export async function fetchCategoryImages(): Promise<GalleryImage[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API}/media?per_page=50`,
      { next: { revalidate: 60 } } // ISR (optional, avoids rebuilding on every request)
    );

    if (!res.ok) {
      console.error("Failed to fetch gallery images", res.statusText);
      return [];
    }

    const media: MediaItem[] = await res.json();

    return media
      .map((img): GalleryImage | null => {
        const categories =
          img.class_list
            ?.filter((cls) => cls.startsWith("attachment_category-"))
            .map((cls) => cls.replace("attachment_category-", "")) || [];

        const hasAllowedCategory = categories.some((cat) =>
          allowedCategories.includes(cat)
        );
        if (!hasAllowedCategory) return null;

        return {
          url: img.source_url,
          categories,
          title: img.title?.rendered || "",
          caption: img.caption?.rendered || "",
        };
      })
      .filter((img): img is GalleryImage => img !== null);
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}
