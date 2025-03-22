
import React from "react";

const OakleyBannerSection = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome to Oakley, Illinois
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Nestled in the heartland of Illinois, Oakley Township offers a peaceful rural lifestyle 
            with a strong sense of community. With NJoy Communications, residents enjoy high-speed internet 
            connectivity that bridges small-town living with global opportunities.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a longtime resident or considering making Oakley your home,
            we're dedicated to providing reliable internet services that keep you connected
            while preserving the tranquil charm of this wonderful Illinois community.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/7ba72ace-660a-4ec7-8b0d-206d5cd3e147.png" 
            alt="Oakley, Illinois" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OakleyBannerSection;
