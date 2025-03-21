
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="bg-gradient-to-b from-blue-50 to-white py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          High-Speed Internet in Dalton City, IL
        </h1>
        <p className="text-xl text-blue-800 mb-8 max-w-3xl">
          Reliable, affordable internet service for Dalton City residents and businesses
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact">
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
      </div>
    </div>
  </section>
);

export default HeroSection;
