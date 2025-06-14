const API_BASE = process.env.NEXT_PUBLIC_WORDPRESS_API;

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const res = await fetch(`${API_BASE}/wp/v2/pages?slug=${slug}`);
  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}
