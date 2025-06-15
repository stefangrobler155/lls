// src\components\PackagesSection\PackagesSection.tsx

import React from 'react';
import './PackagesSection.css';

type Package = {
  title: string;
  description: string;
  includes: string;
  price: string;
  image_url: string;
};

type PackagesSectionProps = {
  packages: Package[];
};

const PackagesSection = ({ packages }: PackagesSectionProps) => {
  return (
    <section className="packages-section">
      <h2 className="packages-heading">Our Packages</h2>
      <div className="packages-grid">
        {packages.map((pkg, index) => {
          const includesList = (pkg.includes ?? '').split('\n');

          return (
            <div className="package-card" key={index}>
              <img src={pkg.image_url} alt={pkg.title} className="package-image" />
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-description">{pkg.description}</p>
              <ul className="package-includes">
                {includesList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="package-price">{pkg.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PackagesSection;
