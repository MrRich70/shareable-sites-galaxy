
import React from "react";

const BementBannerSection = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome to Bement, Illinois
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Located in the heart of Illinois, Bement is a charming village with a rich history and strong community spirit.
            With NJoy Communications, residents enjoy reliable high-speed internet that keeps them connected to the world
            while preserving their small-town lifestyle.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a long-time resident or considering making Bement your home,
            we're committed to providing the connectivity solutions you need in this wonderful Illinois community.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/9fc75eab-954d-4150-8e85-2f7030ec2b97.png" 
            alt="Bement, Illinois" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BementBannerSection;
