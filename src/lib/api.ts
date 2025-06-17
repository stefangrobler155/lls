// src/lib/api.ts
export async function getHomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API}/pages?slug=home&_embed`);
  const data = await res.json();
  const page = data[0];

  return {
    title: page.title.rendered,
    content: page.content.rendered,
    acf: page.acf, 
  };
}
