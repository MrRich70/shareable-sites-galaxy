
import React from "react";
import { Card } from "@/components/ui/card";

const HappyCustomersSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Macon Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <p className="font-semibold">Michael Davis</p>
                <p className="text-sm text-gray-500">Macon Resident</p>
              </div>
            </div>
            <p className="text-gray-600">
              "NJoy Communications has been a game-changer for my family. We finally have reliable internet that can handle all our devices."
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <p className="font-semibold">Jennifer Wilson</p>
                <p className="text-sm text-gray-500">Macon Resident</p>
              </div>
            </div>
            <p className="text-gray-600">
              "As someone who works from home, stable internet is essential. NJoy has been consistent and their local support team is always helpful."
            </p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <p className="font-semibold">Robert Smith</p>
                <p className="text-sm text-gray-500">Macon Business Owner</p>
              </div>
            </div>
            <p className="text-gray-600">
              "My small business depends on reliable internet. NJoy Communications has provided excellent service that keeps my business running smoothly."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomersSection;
