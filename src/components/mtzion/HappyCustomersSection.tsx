
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HappyCustomersSection = () => (
  <section className="py-16 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        What Our Mt. Zion Customers Say
      </h2>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Don't just take our word for it—hear from residents who have switched to NJoy Communications.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "I work from home and my internet never drops out during video calls. This reliability is exactly what my family needed."
            </p>
            <p className="text-xs text-gray-500 italic">Remote Work Survey, 2023</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "After switching to NJoy, my kids can game online while I stream my favorite shows with no buffering or lag issues."
            </p>
            <p className="text-xs text-gray-500 italic">Household Usage Report, 2023</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "The customer service is outstanding. When I had questions, they took the time to explain everything clearly."
            </p>
            <p className="text-xs text-gray-500 italic">Customer Experience Survey, 2023</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default HappyCustomersSection;
