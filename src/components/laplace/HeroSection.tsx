
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/service-packages">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                Check Availability
              </Button>
            </Link>
            <Link to="/service-packages">
              <Button size="lg" variant="outline" className="border-blue-700 text-blue-700">
                View Plans
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 w-64 h-64 md:w-80 md:h-80">
            <img 
              src="/lovable-uploads/08e669e3-3365-4082-bad7-0c9da3a1b03e.png" 
              alt="La Place, Illinois logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
