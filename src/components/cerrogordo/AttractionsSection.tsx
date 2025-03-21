
import React from "react";

const AttractionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Cerro Gordo IL Internet Service Provider - Local Attractions
          </h4>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover all that Cerro Gordo has to offer with reliable internet from NJoy Communications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
          <p>Here are the main attractions and activities in Cerro Gordo, IL:</p>
          
          <ol className="space-y-4 list-decimal pl-6">
            <li><strong>Cerro Gordo City Park</strong> - Features playground equipment, basketball courts, and picnic facilities.</li>
            <li><strong>American Legion Park</strong> - Community gathering space with recreational facilities.</li>
            <li><strong>Cerro Gordo Public Library</strong> - Offers books, internet access, and community programs.</li>
            <li><strong>Robert Griswold House</strong> - Historic home with local significance.</li>
            <li><strong>Veterans Memorial</strong> - Monument honoring local military service members.</li>
            <li><strong>Cerro Gordo Community Garden</strong> - Volunteer-run garden spaces for residents.</li>
            <li><strong>Blue Mound State Park</strong> - Located nearby, offers hiking trails and outdoor recreation.</li>
            <li><strong>Cerro Gordo Fall Festival</strong> - Annual community celebration with food and activities.</li>
            <li><strong>Gilbert Street Business District</strong> - Features local shops and restaurants.</li>
            <li><strong>Cerro Gordo School Sports Fields</strong> - Host to local sporting events and community activities.</li>
          </ol>
          
          <p className="text-sm text-gray-500 mt-8">
            These attractions provide residents and visitors with a variety of recreational, cultural, and community experiences in this charming Illinois town.
          </p>
          
          <div className="text-xs text-gray-400 mt-8">
            <p>Citations:</p>
            <p>[1] https://www.cerrogordoil.org/</p>
            <p>[2] https://www.visitcentralillinois.com/</p>
            <p>[3] https://www.enjoyillinois.com/</p>
            <p>[4] https://www.illinoisouth.com/</p>
            <p>[5] https://www.tripadvisor.com/Tourism-g35778-Cerro_Gordo_Illinois-Vacations.html</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
