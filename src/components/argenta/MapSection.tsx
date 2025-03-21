
import React from "react";
import CityMap from "@/components/maps/CityMap";

const MapSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Argenta IL Internet Service Provider - Service Area
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            NJoy Communications provides high-speed internet throughout Argenta, IL. 
            View our service area below or contact us to check availability at your address.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <CityMap city="Argenta, IL" mapHeight="500px" />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
