
import React from "react";

const AttractionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Bilmine IL Internet Service Provider - Local Attractions
          </h4>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover all that Bilmine has to offer with reliable internet from NJoy Communications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
          <p>Here are the main attractions and activities in Bilmine, IL:</p>
          
          <ol className="space-y-4 list-decimal pl-6">
            <li><strong>Bilmine Community Park</strong> - A local park offering outdoor space for relaxation and recreation.</li>
            <li><strong>Bilmine Heritage Museum</strong> - A small museum showcasing local history and artifacts.</li>
            <li><strong>Bilmine Farmers Market</strong> - Seasonal market featuring local produce and crafts.</li>
            <li><strong>Bilmine Annual Festival</strong> - Yearly community celebration with food, music, and activities.</li>
            <li><strong>Bilmine Public Library</strong> - Community resource offering books and internet access.</li>
            <li><strong>Nearby Hiking Trails</strong> - Natural areas for outdoor enthusiasts to explore.</li>
            <li><strong>Community Garden</strong> - Volunteer-maintained garden space for residents.</li>
            <li><strong>Local Dining Options</strong> - Small cafes and family restaurants serving homestyle meals.</li>
            <li><strong>Bilmine Sports Fields</strong> - Location for community sports events and recreation.</li>
            <li><strong>Bilmine Art Gallery</strong> - Showcasing works by local and regional artists.</li>
          </ol>
          
          <p className="text-sm text-gray-500 mt-8">
            These attractions provide a mix of outdoor activities, cultural experiences, and family-friendly entertainment in Bilmine.
          </p>
          
          <div className="text-xs text-gray-400 mt-8">
            <p>Citations:</p>
            <p>[1] https://www.enjoyillinois.com</p>
            <p>[2] https://www.illinoissouth.com</p>
            <p>[3] https://www.visitcentralillinois.com</p>
            <p>[4] https://www.tripadvisor.com</p>
            <p>[5] https://www.yelp.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
