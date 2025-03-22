
import React from "react";
import { MapPin } from "lucide-react";

const ServiceAreaSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Service Area</h2>
      <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <MapPin className="h-6 w-6 text-blue-700 mr-2" />
          <h3 className="text-xl font-semibold text-blue-900">Central Illinois</h3>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          We proudly serve communities throughout Central Illinois, focusing on areas where reliable 
          internet options are limited. Our network has been strategically built to reach rural and 
          underserved locations.
        </p>
        <p className="text-lg text-gray-700">
          From residential homes to local businesses, farms to grain elevators, we're committed to 
          connecting Central Illinois with dependable internet service.
        </p>
      </div>
    </div>
  );
};

export default ServiceAreaSection;
