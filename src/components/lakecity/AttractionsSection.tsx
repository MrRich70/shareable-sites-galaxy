
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AttractionsSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Living in Lake City, IL
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Beautiful Lake Views</h3>
              <p className="text-gray-700">
                Lake City offers scenic views and recreational opportunities along Lake Decatur's shoreline.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Close to Decatur</h3>
              <p className="text-gray-700">
                Located just a short drive from Decatur, residents have easy access to shopping, dining, and entertainment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Outdoor Recreation</h3>
              <p className="text-gray-700">
                Enjoy fishing, boating, and outdoor activities with easy access to Lake Decatur.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
