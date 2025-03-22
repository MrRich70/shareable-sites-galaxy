
import React from "react";
import { Link } from "react-router-dom";
import { Globe, CreditCard, LifeBuoy } from "lucide-react";
import ServiceCard from "@/components/argenta/ServiceCard";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Internet Providers Near Me
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Find the best local internet service provider for your home or business in central Illinois.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <ServiceCard 
            title="New Service" 
            description="Shop for residential & business services in your area."
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
