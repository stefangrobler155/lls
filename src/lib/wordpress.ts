

// export async function fetchGalleryItems() {
//   const res = await fetch(`${process.env.WP_API_URL}/gallery?per_page=12&_embed`);
//   if (!res.ok) throw new Error('Failed to fetch gallery');
//   return res.json();
// }

// export async function fetchPage(slug: string) {
//   const res = await fetch(`${process.env.WP_API_URL}/pages?slug=${slug}`);
//   if (!res.ok) throw new Error('Failed to fetch page');
//   const data = await res.json();
//   return data[0]; // WordPress returns array
// }
