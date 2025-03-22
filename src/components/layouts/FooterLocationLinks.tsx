
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FooterLocationLinks = () => {
  return (
    <div className="md:col-span-5">
      <h4 className="text-lg font-semibold mb-4">Coverage Locations</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <Link to="/argenta-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Argenta, IL
        </Link>
        <Link to="/bement-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Bement, IL
        </Link>
        <Link to="/milmine-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Milmine, IL
        </Link>
        <Link to="/cerro-gordo-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Cerro Gordo, IL
        </Link>
        <Link to="/elwin-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Elwin, IL
        </Link>
        <Link to="/la-place-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> La Place, IL
        </Link>
        <Link to="/lake-city-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Lake City, IL
        </Link>
        <Link to="/macon-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Macon, IL
        </Link>
        <Link to="/mt-zion-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Mt Zion, IL
        </Link>
        <Link to="/oakley-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Oakley, IL
        </Link>
        <Link to="/oreana-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Oreana, IL
        </Link>
        <Link to="/dalton-city-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" /> Dalton City, IL
        </Link>
      </div>
    </div>
  );
};

export default FooterLocationLinks;
