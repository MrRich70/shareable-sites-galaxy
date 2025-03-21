
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AttractionsSection = () => (
  <section className="py-16 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
        Living in Mt. Zion, IL
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Family-Friendly Community</h3>
            <p className="text-gray-700">
              Mt. Zion offers excellent schools, safe neighborhoods, and a strong sense of community.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Recreation Opportunities</h3>
            <p className="text-gray-700">
              Enjoy the Mt. Zion District Park, sports facilities, and community events throughout the year.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Convenient Location</h3>
            <p className="text-gray-700">
              Located just minutes from Decatur with easy access to shopping, restaurants, and entertainment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default AttractionsSection;
