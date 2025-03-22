
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
            Elwin IL Internet Service Provider
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Fast, reliable internet service for Elwin, IL residents and businesses.
          </p>
          
          {/* Structured data for local business */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "NJoy Communications Internet Services",
              "description": "Internet service provider in Elwin, IL",
              "url": "https://njoycom.com/elwin-il-internet-service-provider",
              "telephone": "(217) 330-6157",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "111 Main St",
                "addressLocality": "Elwin",
                "addressRegion": "IL",
                "postalCode": "62521",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "39.7634",
                "longitude": "-89.0401"
              },
              "sameAs": [
                "https://www.facebook.com/NJoyCommunications/",
                "https://twitter.com/njoycom"
              ]
            }
          `}} />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <ServiceCard 
            title="New Service" 
            description="Shop for residential & business services in Elwin."
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
