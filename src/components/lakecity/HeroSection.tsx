
import React from "react";
import { Globe, CreditCard, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/argenta/ServiceCard";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Lake City IL Internet Service Provider
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Fast, reliable internet service for Lake City, IL residents and businesses.
          </p>
          
          {/* Structured data for local service area */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Internet Service Provider",
              "provider": {
                "@type": "LocalBusiness",
                "name": "NJoy Communications Internet Services",
                "telephone": "(217) 330-6157",
                "areaServed": {
                  "@type": "City",
                  "name": "Lake City",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lake City",
                    "addressRegion": "IL",
                    "addressCountry": "US"
                  }
                }
              },
              "description": "High-speed internet service for Lake City, IL residents and businesses",
              "offers": {
                "@type": "Offer",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "50",
                  "priceCurrency": "USD"
                }
              }
            }
          `}} />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <ServiceCard 
            title="New Service" 
            description="Shop for residential & business services in Lake City."
            icon={<Globe className="h-10 w-10" />}
            path="/service-packages"
            isExternal={false}
          />
          
          <ServiceCard 
            title="Online Bill Pay" 
            description="Quick, convenient, easy and secure."
            icon={<CreditCard className="h-10 w-10" />}
            path="https://njoycom.uisp.com/crm/login"
            isExternal={true}
          />
          
          <ServiceCard 
            title="Support" 
            description="Contact us for tech support & customer service."
            icon={<LifeBuoy className="h-10 w-10" />}
            path="/support"
            isExternal={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
