
import React from "react";

const ProvidersInfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Finding the Right Internet Provider Near You
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            What to consider when searching for "internet providers near me" in Central Illinois.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
          <p>
            When searching for an internet service provider in your area, it's important to consider these key factors:
          </p>
          
          <ol className="space-y-4 list-decimal pl-6">
            <li>
              <strong>Service availability</strong> - Coverage varies by location, especially in rural areas. 
              NJoy Communications specializes in bringing high-speed internet to communities that larger providers often overlook.
            </li>
            <li>
              <strong>Connection speeds</strong> - Different households have different needs. 
              We offer various speed tiers to accommodate everything from basic web browsing to demanding applications like 4K streaming and online gaming.
            </li>
            <li>
              <strong>Reliability</strong> - Internet outages can disrupt work, education, and entertainment. 
              Our network is built for stability with redundant systems to ensure consistent service.
            </li>
            <li>
              <strong>Customer service</strong> - When issues arise, you want responsive, helpful support. 
              As a local provider, we offer personalized service from technicians who know your community.
            </li>
            <li>
              <strong>Value</strong> - The lowest price isn't always the best value. 
              Consider what you're getting in terms of speed, reliability, and service for the monthly cost.
            </li>
            <li>
              <strong>Contract terms</strong> - Some providers require long-term commitments or have complex cancellation policies. 
              We believe in straightforward, customer-friendly terms.
            </li>
          </ol>
          
          <p>
            At NJoy Communications, we're committed to providing transparent information about our services 
            so you can make the best choice for your household or business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProvidersInfoSection;
