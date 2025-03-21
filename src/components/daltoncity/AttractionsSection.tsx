
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AttractionsSection = () => (
  <section className="py-16 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
        Living in Dalton City, IL
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Rural Charm</h3>
            <p className="text-gray-700">
              Enjoy the peaceful, friendly atmosphere of small-town living with the convenience of nearby amenities.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Central Location</h3>
            <p className="text-gray-700">
              Dalton City is conveniently located with easy access to several larger cities and towns in the region.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Community Spirit</h3>
            <p className="text-gray-700">
              Dalton City residents enjoy a strong sense of community, with local events bringing neighbors together.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default AttractionsSection;
