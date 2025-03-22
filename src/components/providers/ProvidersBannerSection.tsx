
import React from "react";

const ProvidersBannerSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            Central Illinois Internet Service
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Your Local Internet Service Provider
          </h2>
          <div className="relative p-6 rounded-xl bg-white shadow-lg border border-blue-100">
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
        </div>
      </div>
    </section>
  );
};

export default ProvidersBannerSection;
