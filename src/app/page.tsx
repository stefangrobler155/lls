// app/page.tsx or wherever you're using this
import { getHomePage } from '@/lib/api';
import Hero from '@/components/Hero/Hero';

export default async function HomePage() {
  const { acf } = await getHomePage();

  return (
    <main>
      <Hero
        title={acf.hero_title}
        subtitle={acf.hero_subtitle}
        imageUrl={acf.hero_background_url} // ← ✅ using the clean URL
        ctaText={acf.cta_text}
        ctaUrl={acf.cta_url}
      />
    </main>
  );
}

