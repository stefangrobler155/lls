// import { fetchGalleryItems } from "@/lib/wordpress";


export default async function GalleryPage() {
//   const items = await fetchGalleryItems();

  return (
    <main>
      <h1>Gallery</h1>
      {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {items.map((item: any) => (
          <div key={item.id} style={{ width: '300px' }}>
            <img
              src={item._embedded['wp:featuredmedia']?.[0]?.source_url}
              alt={item.title.rendered}
              style={{ width: '100%', height: 'auto' }}
            />
            <h3 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          </div>
        ))}
      </div> */}
    </main>
  );
}
