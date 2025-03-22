
import React from "react";

const ProvidersBannerSection = () => {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Your Local Internet Service Provider
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            NJoy Communications is proud to provide high-speed internet services to 
            communities throughout Central Illinois. As a local company, we understand 
            the unique needs of rural and small-town residents.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're searching for "internet providers near me" in Cerro Gordo, 
            Argenta, Bement, or any of our service areas, we're committed to delivering 
            reliable connectivity backed by hometown customer service.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/2869e2ab-752f-4e20-a6ff-14d23c5ec122.png" 
            alt="Central Illinois Internet Service" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ProvidersBannerSection;
