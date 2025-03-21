
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HappyCustomersSection = () => (
  <section className="py-16 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        What Our Dalton City Customers Say
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
              "After struggling with unreliable internet for years, switching to NJoy has been a game-changer. No more buffering during movie night!"
            </p>
            <p className="font-medium text-blue-900">- Kevin W., Dalton City resident</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "The customer service is outstanding. When I had questions about my bill, they responded immediately and resolved everything."
            </p>
            <p className="font-medium text-blue-900">- Patricia G., Dalton City resident</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "I run my small business from home and need reliable internet. NJoy has been consistent and fast, even during peak usage times."
            </p>
            <p className="font-medium text-blue-900">- Chris B., Dalton City business owner</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default HappyCustomersSection;
