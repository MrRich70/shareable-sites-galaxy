
import React from "react";
import { MapPin } from "lucide-react";
import CityMap from "@/components/maps/CityMap";

const MapSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Coverage in Mt. Zion, IL</h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          NJoy Communications provides high-speed internet services throughout Mt. Zion and surrounding areas.
        </p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <CityMap 
          city="Mt. Zion" 
          mapHeight="400px"
        />
      </div>
      
      <div className="flex justify-center">
        <div className="bg-blue-50 p-6 rounded-lg inline-flex items-center gap-3">
          <MapPin className="text-blue-700" />
          <span className="text-blue-900 font-medium">
            Proudly serving Mt. Zion, IL and surrounding communities
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
