
import React from "react";

const AttractionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Elwin IL Internet Service Provider - Local Attractions
          </h4>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover all that Elwin has to offer with reliable internet from NJoy Communications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
          <p>Here are the main attractions and activities in and around Elwin, IL:</p>
          
          <ol className="space-y-4 list-decimal pl-6">
            <li><strong>Elwin Community Park</strong> - Local park with playground equipment and picnic areas.</li>
            <li><strong>Rock Springs Conservation Area</strong> - Nearby nature preserve with hiking trails and educational programs.</li>
            <li><strong>Fairview Park</strong> - Large park in nearby Decatur with pavilions, fishing, and recreational facilities.</li>
            <li><strong>Scovill Zoo</strong> - Zoo in Decatur featuring over 400 animals from 90 different species.</li>
            <li><strong>Hickory Point Golf Course</strong> - 18-hole championship golf course near Elwin.</li>
            <li><strong>Decatur Civic Center</strong> - Venue for concerts, events, and ice skating.</li>
            <li><strong>Elwin United Methodist Church</strong> - Historic church and community gathering place.</li>
            <li><strong>Lincoln Square Theatre</strong> - Historic theater in nearby Decatur.</li>
            <li><strong>Decatur Indoor Sports Center</strong> - Indoor recreation facility with track, courts, and fitness equipment.</li>
            <li><strong>Lake Decatur</strong> - 2,800-acre reservoir offering boating, fishing, and water recreation.</li>
          </ol>
          
          <p className="text-sm text-gray-500 mt-8">
            While Elwin itself is a small community, its proximity to Decatur provides residents with access to a wide range of attractions and activities just minutes away.
          </p>
          
          <div className="text-xs text-gray-400 mt-8">
            <p>Citations:</p>
            <p>[1] https://www.tripadvisor.com/Tourism-g35922-Decatur_Illinois-Vacations.html</p>
            <p>[2] https://www.decaturparks.org/</p>
            <p>[3] https://www.decaturil.gov/</p>
            <p>[4] https://www.visitdecatur.com/</p>
            <p>[5] https://www.scovillzoo.com/</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
