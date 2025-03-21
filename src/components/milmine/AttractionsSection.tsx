
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AttractionsSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Living in Milmine, IL
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
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Historic Community</h3>
              <p className="text-gray-700">
                Milmine has a rich history as a railroad town, with historic buildings and community pride.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Agricultural Heritage</h3>
              <p className="text-gray-700">
                Surrounded by farmland, Milmine celebrates its agricultural roots through community events.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
