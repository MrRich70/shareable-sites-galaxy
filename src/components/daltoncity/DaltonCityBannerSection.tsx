
import React from "react";

const DaltonCityBannerSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Proud to Serve Dalton City, Illinois
          </h2>
          <div className="max-w-3xl w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <img
              src="/lovable-uploads/e3dbd772-7987-4b9c-9135-ac0f4808e67d.png"
              alt="Dalton City, Illinois Banner"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-6 text-lg text-gray-700 text-center max-w-2xl">
            Connecting the heart of Illinois with reliable, high-speed internet services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DaltonCityBannerSection;
