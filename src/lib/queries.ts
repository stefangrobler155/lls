const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API;

import { HomePageData } from './types';

export async function getHomePageData(): Promise<HomePageData | null> {
  const res = await fetch(`${API_URL}/pages?slug=home`);
  if (!res.ok) return null;

  const data = await res.json();
  return data[0] as HomePageData;
}

// Contact Page Query
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

// Fetch About Page Data
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
