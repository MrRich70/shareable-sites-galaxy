
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-900/80 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/fcf2edcd-2d34-4649-94f2-1ac72d781a90.png')"
        }}
      ></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            High-Speed Internet in Milmine, Illinois
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Experience reliable, fast internet service tailored for residents and businesses 
            in Milmine, IL. NJoy Communications provides connectivity solutions that keep 
            you connected to what matters most.
          </p>
          <div>
            <Link to="/service-packages">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View Service Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
