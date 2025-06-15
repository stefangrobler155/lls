// app/services/page.tsx

import Link from 'next/link';
import './services.css';
import { log } from 'console';

type WPPage = {
  id: number;
  slug: string;
  acf: {
    service_title: string;
    service_description: string;
    service_image_url: string;
  };
};

const SERVICE_SLUGS = ['weddings', 'engagements', 'family'];

export default async function ServicesPage() {
  const serviceRequests = SERVICE_SLUGS.map(slug =>
    fetch(`http://lls.local/wp-json/wp/v2/pages?slug=${slug}`).then(res => res.json())
  );

  const servicePages: WPPage[] = (await Promise.all(serviceRequests)).map(result => result[0]);
  
  return (
    <main className="services">
      <h1 className="services__heading">Our Photography Services</h1>
      <div className="services__grid">
        {servicePages.map(service => (
          <Link href={`/services/${service.slug}`} key={service.id} className="service-card">
            {service.acf.service_image_url && (
              <img
                src={service.acf.service_image_url}
                alt={service.acf.service_title}
                className="service-card__image"
              />
            )}
            <div className="service-card__content">
              <h2>{service.acf.service_title}</h2>
              <p>{service.acf.service_description}</p>
              <span className="service-card__link">Learn More →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
