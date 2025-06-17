const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API;

// lib/queries.ts

import { HomePageData } from './types';

export async function getHomePageData(): Promise<HomePageData | null> {
  const res = await fetch(`${API_URL}/pages?slug=home`);
  if (!res.ok) return null;

  const data = await res.json();
  return data[0] as HomePageData;
}
