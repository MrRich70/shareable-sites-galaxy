
import React from "react";

const AttractionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Argenta IL Internet Service Provider - Local Attractions
          </h4>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover all that Argenta has to offer with reliable internet from NJoy Communications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
          <p>Here are the main attractions and activities in Argenta, IL:</p>
          
          <ol className="space-y-4 list-decimal pl-6">
            <li><strong>Weedman Park</strong> - A local park offering outdoor space for relaxation and recreation.</li>
            <li><strong>Stag-R-Inn</strong> - A popular American bar and restaurant known for its casual atmosphere.</li>
            <li><strong>The FourNine</strong> - A beer bar and soup spot highly rated by locals.</li>
            <li><strong>Overlook Adventure Park</strong> - A nearby attraction featuring mini-golf, zip lines, and other activities.</li>
            <li><strong>Rock Springs Conservation Area</strong> - Ideal for hiking, birdwatching, and enjoying nature.</li>
            <li><strong>Scovill Zoo</strong> - Located in Decatur, this zoo is a short drive from Argenta and offers family-friendly activities.</li>
            <li><strong>Monticello Railway Museum</strong> - A historical site showcasing vintage trains and offering train rides.</li>
            <li><strong>Allerton Park & Retreat Center</strong> - Known for its scenic hiking trails and events like Hot Chocolate Hikes.</li>
            <li><strong>Apple & Pork Festival</strong> - A nearby annual event featuring food, crafts, and entertainment.</li>
            <li><strong>Clintonia Eagle Theater</strong> - A local theater offering movies and live performances.</li>
          </ol>
          
          <p className="text-sm text-gray-500 mt-8">
            These attractions provide a mix of outdoor activities, dining options, cultural experiences, and family-friendly entertainment.
          </p>
          
          <div className="text-xs text-gray-400 mt-8">
            <p>Citations:</p>
            <p>[1] https://www.expedia.com/Argenta.dx3000346096</p>
            <p>[2] https://www.argentail.com</p>
            <p>[3] https://www.eventbrite.com/ttd/il--argenta/</p>
            <p>[4] https://allevents.in/argenta</p>
            <p>[5] https://local.aarp.org/argenta-il/things-to-do/</p>
            <p>[6] https://www.tripadvisor.com/Attractions-g29274-Activities-Argenta_Illinois.html</p>
            <p>[7] https://www.yelp.com/city/argenta-il-us</p>
            <p>[8] https://www.yelp.com/search?find_desc=Things+To+Do&find_loc=US-51%2C+Argenta%2C+IL+62501</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
