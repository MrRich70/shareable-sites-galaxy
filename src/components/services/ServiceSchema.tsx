
import React from "react";

interface ServiceSchemaProps {
  packages: Array<{
    name: string;
    description: string;
    price: string;
  }>;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({ packages }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": packages.map(pkg => ({
      "@type": "Product",
      "name": pkg.name,
      "description": pkg.description,
      "offers": {
        "@type": "Offer",
        "price": pkg.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
    />
  );
};

export default ServiceSchema;
