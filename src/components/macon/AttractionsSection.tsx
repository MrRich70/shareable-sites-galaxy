
import React from "react";
import { Card } from "@/components/ui/card";

const AttractionsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Macon, IL</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Local Community</h3>
            <p className="text-gray-600">
              Macon is a friendly community with a rich agricultural heritage and small-town charm.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-gray-600">
              Home to Meridian Schools, providing quality education to local students.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Local Events</h3>
            <p className="text-gray-600">
              Throughout the year, Macon hosts various community events, including the annual Macon County Fair.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
