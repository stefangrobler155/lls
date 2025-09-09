const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API;

import { HomePageData, GalleryImage, GalleryCategory, galleryCategories, Service, Package, WPPage  } from './types';
import { normalizeUrl } from "@/lib/utils";
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

export async function fetchCategoryImages(): Promise<GalleryImage[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API}/media?per_page=50`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      console.error("Failed to fetch gallery images:", res.statusText);
      return [];
    }

    const media: {
      source_url: string;
      class_list?: string[];
      title?: { rendered?: string };
      caption?: { rendered?: string };
    }[] = await res.json();

    return media
      .map((img): GalleryImage | null => {
        const categories =
          img.class_list
            ?.filter((cls) => cls.startsWith("attachment_category-"))
            .map((cls) => cls.replace("attachment_category-", "")) || [];

        const hasAllowedCategory = categories.some((cat): cat is GalleryCategory =>
          (galleryCategories as readonly string[]).includes(cat)
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

// Servives
// Ensure all WordPress links are relative paths
export async function fetchServiceData(slug: string): Promise<Service | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API}/pages?slug=${slug}&acf_format=standard`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  if (!data || data.length === 0) return null;

  const page = data[0];
  const acf = page.acf;

  const packages: Package[] = [
    {
      title: acf?.silver_package?.title,
      description: acf?.silver_package?.description,
      includes: acf?.silver_package?.includes ?? "",
      price: acf?.silver_package?.price,
      image_url: acf?.silver_package?.image_url,
    },
    {
      title: acf?.gold_radiance_package?.title,
      description: acf?.gold_radiance_package?.description,
      includes: acf?.gold_radiance_package?.includes ?? "",
      price: acf?.gold_radiance_package?.price,
      image_url: acf?.gold_radiance_package?.image_url,
    },
    {
      title: acf?.platinum_package?.title,
      description: acf?.platinum_package?.description,
      includes: acf?.platinum_package?.includes ?? "",
      price: acf?.platinum_package?.price,
      image_url: acf?.platinum_package?.image_url,
    },
  ];

  return {
    title: page.title.rendered,
    content: page.content.rendered,
    packages,
  };
}

// Services Page
const SERVICE_SLUGS = ["weddings", "engagements", "family"] as const;

/**
 * Fetch a single WordPress page by slug
 */
export async function fetchPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    const res = await fetch(`${API_URL}/pages?slug=${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const page = data[0];

    if (!page) return null;

    return {
      ...page,
      link: normalizeUrl(page.link), // ✅ always normalized here
    };
  } catch (err) {
    console.error(`Error fetching page ${slug}:`, err);
    return null;
  }
}


/**
 * Fetch multiple services by their slugs
 */
export async function fetchServicePages(): Promise<WPPage[]> {
  const results = await Promise.all(SERVICE_SLUGS.map(fetchPageBySlug));
  return results.filter((page): page is WPPage => page !== null);
}
