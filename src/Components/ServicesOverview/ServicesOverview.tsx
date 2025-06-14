import Link from 'next/link';
import './ServicesOverview.css';

type Service = {
  title: string;
  description: string;
  imageUrl?: string;
  url?: string;
};

type ServicesOverviewProps = {
  title: string;
  description: string;
  services: Service[];
};

export default function ServicesOverview({ title, description, services }: ServicesOverviewProps) {
  return (
    <section className="services">
      <div className="services__header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="services__list">
        {services.map((service, index) => {
  const CardContent = (
    <div className="service" key={index}>
      {service.imageUrl && (
        <div className="service__image">
          <img src={service.imageUrl} alt={service.title} />
        </div>
            )}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            </div>
        );

        return service.url ? (
            <Link key={index} href={service.url} className="service__link">
            {CardContent}
            </Link>
        ) : (
            CardContent
        );
        })}
      </div>
    </section>
  );
}
