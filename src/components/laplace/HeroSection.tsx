
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            High-Speed Internet in La Place, IL
          </h1>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl">
            Reliable, affordable internet service for La Place residents and businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://preview--shareable-sites-galaxy.lovable.app/service-packages">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                Check Availability
              </Button>
            </a>
            <a href="https://preview--shareable-sites-galaxy.lovable.app/milmine-il-internet-service-provider">
              <Button size="lg" variant="outline" className="border-blue-700 text-blue-700">
                View Plans
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
