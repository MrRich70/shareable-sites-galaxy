
import React from "react";
import FeatureItem from "./FeatureItem";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Why Choose NJoy Communications Internet in Argenta, IL?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem 
            title="Fast Speeds" 
            description="Get the reliability and speed Argenta residents need for streaming, gaming, and working from home."
          />
          <FeatureItem 
            title="Local Support" 
            description="Our local technicians provide personalized support to Argenta customers when you need it."
          />
          <FeatureItem 
            title="No Contracts" 
            description="Enjoy our services in Argenta without being locked into long-term commitments."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
