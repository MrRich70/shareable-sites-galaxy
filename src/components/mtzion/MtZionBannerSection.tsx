
import React from "react";

const MtZionBannerSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl w-full">
            <img 
              src="/lovable-uploads/01e75f22-ddfb-499a-b916-712d12503db4.png" 
              alt="Mt. Zion Illinois" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold text-blue-900">Proud to Serve Mt. Zion, Illinois</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Mt. Zion is a vibrant community in the heart of Illinois. With a population of 5,816 and a median household 
              income of $110,786, it's a thriving town with modern needs for high-speed connectivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MtZionBannerSection;
