
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HappyCustomersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Experience Cerro Gordo IL Internet Service Provider That Brings Joy
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At NJoy Communications, we believe that reliable internet is essential for Cerro Gordo families and businesses. 
            Whether you're working from home, streaming your favorite shows, or staying connected with loved ones, 
            our internet service keeps you connected without interruption.
          </p>
          <div className="mt-6">
            <Link to="/service-packages">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Find Your Perfect Plan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomersSection;
