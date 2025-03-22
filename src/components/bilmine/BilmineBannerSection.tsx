
import React from "react";

const BilmineBannerSection = () => {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome to Milmine, Illinois
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Nestled in the heart of Piatt County, Milmine is a small, historic unincorporated 
            community with a rich heritage. NJoy Communications is proud to provide high-speed 
            internet services to this charming rural Illinois destination.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a local resident or considering relocating to this peaceful 
            community, we're committed to ensuring you have reliable connectivity while 
            enjoying the quiet charm and strong community bonds that make Milmine special.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/571478a3-f4d0-48b3-9bbf-4ec52c5d92c2.png" 
            alt="Milmine, Illinois" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BilmineBannerSection;
