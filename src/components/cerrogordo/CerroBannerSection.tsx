
import React from "react";

const CerroBannerSection = () => {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome to Cerro Gordo, Illinois
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Located in the heart of Piatt County, Cerro Gordo is a charming village with a rich 
            Midwestern heritage. NJoy Communications is proud to provide high-speed 
            internet services to this welcoming Illinois community.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a resident or considering making Cerro Gordo your home, 
            we're committed to delivering reliable connectivity that supports 
            the close-knit community values that make Cerro Gordo special.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/2869e2ab-752f-4e20-a6ff-14d23c5ec122.png" 
            alt="Cerro Gordo, Illinois" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CerroBannerSection;
