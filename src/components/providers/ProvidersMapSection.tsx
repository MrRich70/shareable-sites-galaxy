
import React from "react";
import { Link } from "react-router-dom";
import CityMap from "@/components/maps/CityMap";

const ProvidersMapSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Internet Service Provider Coverage Areas
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            NJoy Communications provides high-speed internet throughout Central Illinois. 
            View our service areas below or contact us to check availability at your address.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <CityMap city="Central Illinois" mapHeight="500px" />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12 max-w-6xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Cerro Gordo</h3>
            <Link to="/cerro-gordo-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Argenta</h3>
            <Link to="/argenta-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Bement</h3>
            <Link to="/bement-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Milmine</h3>
            <Link to="/milmine-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Elwin</h3>
            <Link to="/elwin-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">La Place</h3>
            <Link to="/la-place-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Macon</h3>
            <Link to="/macon-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Mt. Zion</h3>
            <Link to="/mt-zion-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Oakley</h3>
            <Link to="/oakley-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Oreana</h3>
            <Link to="/oreana-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Dalton City</h3>
            <Link to="/dalton-city-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-medium text-blue-800">Lake City</h3>
            <Link to="/lake-city-il-internet-service-provider" className="text-blue-600 hover:underline text-sm">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvidersMapSection;
