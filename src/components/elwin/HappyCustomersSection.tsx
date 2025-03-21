
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HappyCustomersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="/lovable-uploads/23212ea7-1534-4e41-94bd-213b720aa839.png" 
              alt="Elwin Illinois - Community with high-speed internet"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Experience Elwin IL Internet Service Provider That Brings Joy
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At NJoy Communications, we believe that reliable internet is essential for Elwin families and businesses. 
              Whether you're working from home, streaming your favorite shows, or staying connected with loved ones, 
              our internet service keeps you connected without interruption.
            </p>
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
