
import React from "react";

const AttractionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Bement IL Internet Service Provider - Local Attractions
          </h4>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover all that Bement has to offer with reliable internet from NJoy Communications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
          <p>Here are the main attractions and activities in Bement, IL:</p>
          
          <ol className="space-y-4 list-decimal pl-6">
            <li><strong>Bryant Cottage State Historic Site</strong> - Historic home where Abraham Lincoln and Stephen Douglas planned their famous debates.</li>
            <li><strong>Bement Township Library</strong> - A community hub offering books, programs, and internet access.</li>
            <li><strong>Bement Country Club</strong> - A 9-hole golf course open to the public.</li>
            <li><strong>Bement Community Pool</strong> - Popular summer recreation spot for families.</li>
            <li><strong>Bement Wellness Center</strong> - Fitness facility with equipment and classes.</li>
            <li><strong>Gordy Park</strong> - Community park with playground equipment and picnic facilities.</li>
            <li><strong>Bement Village Park</strong> - Green space with bandstand and walking paths.</li>
            <li><strong>Old Glory Prairie</strong> - Nature preserve with native wildflowers and grasses.</li>
            <li><strong>Bement Old Glory Days</strong> - Annual community festival with parades, food, and entertainment.</li>
            <li><strong>Bement Fall Festival</strong> - Seasonal celebration with crafts, activities, and local food.</li>
          </ol>
          
          <p className="text-sm text-gray-500 mt-8">
            These attractions provide residents and visitors with a mix of historical, recreational, and community experiences in this charming small town.
          </p>
          
          <div className="text-xs text-gray-400 mt-8">
            <p>Citations:</p>
            <p>[1] https://www.historicillinois.org/explore-illinois-history/sites/bryant-cottage-state-historic-site</p>
            <p>[2] https://www.illinoisouth.com/Outdoors/Parks-Recreation/Bement-Country-Club/</p>
            <p>[3] https://www.bementil.org/parks-recreation</p>
            <p>[4] https://www.visitchampaigncounty.org/</p>
            <p>[5] https://www.travelillinois.com/</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
