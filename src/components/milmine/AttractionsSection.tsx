
import React from "react";

const AttractionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Milmine IL Internet Service Provider - Local Attractions
          </h4>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover all that Milmine has to offer with reliable internet from NJoy Communications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
          <p>Here are the main attractions and activities in and around Milmine, IL:</p>
          
          <ol className="space-y-4 list-decimal pl-6">
            <li><strong>Milmine Grain Elevator</strong> - A historical landmark that represents the agricultural heritage of the area.</li>
            <li><strong>Cerro Gordo Heritage Days</strong> - An annual festival in nearby Cerro Gordo featuring food, crafts, and entertainment.</li>
            <li><strong>Allerton Park</strong> - Located near Monticello, this 1,500-acre park offers gardens, hiking trails, and a historic mansion.</li>
            <li><strong>Bement Country Opry</strong> - Live country music shows in nearby Bement, popular with locals.</li>
            <li><strong>Monticello Railway Museum</strong> - A railroad museum with historic trains and rides, just a short drive away.</li>
            <li><strong>Bryant Cottage State Historic Site</strong> - In nearby Bement, this preserved 1856 cottage has historical significance.</li>
            <li><strong>Lake Shelbyville</strong> - Within driving distance, offering boating, fishing, and beach activities.</li>
            <li><strong>Lodge Park</strong> - A natural area with hiking trails and wildlife viewing opportunities.</li>
            <li><strong>Decatur Attractions</strong> - The nearby city offers the Scovill Zoo, Children's Museum, and more.</li>
            <li><strong>Local Farms</strong> - Several farms in the area offer seasonal activities, produce sales, and farm-to-table experiences.</li>
          </ol>
          
          <p className="text-sm text-gray-500 mt-8">
            While Milmine itself is a small community, these attractions in the surrounding area provide diverse recreational and cultural experiences for residents and visitors alike.
          </p>
          
          <div className="text-xs text-gray-400 mt-8">
            <p>Sources:</p>
            <p>[1] https://www.enjoyillinois.com/explore/listing/robert-allerton-park</p>
            <p>[2] https://www.monticellorrmuseum.org</p>
            <p>[3] https://www2.illinois.gov/dnr/Parks/Pages/LakeShelbyville.aspx</p>
            <p>[4] https://www.decaturil.gov/departments/parks-recreation</p>
            <p>[5] https://www.illinois.gov/dnrhistoric/Experience/Sites/Central/Bryant-Cottage.html</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
