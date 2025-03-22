
import React from "react";
import TimelineItem from "./TimelineItem";

const TimelineSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Journey</h2>
      <div className="space-y-8">
        <TimelineItem 
          year="2006" 
          title="Founded in Central Illinois"
          description="NJoy Communications was established as a family business to provide internet service to underserved rural areas."
        />
        <TimelineItem 
          year="2008" 
          title="First Agricultural Partnerships"
          description="Began working with local farms and grain elevators to expand coverage in rural communities."
        />
        <TimelineItem 
          year="2012" 
          title="Expanded Residential Services"
          description="Grew our network to provide reliable internet to more residential customers across the region."
        />
        <TimelineItem 
          year="2015" 
          title="Business Solutions Launch"
          description="Introduced specialized service packages for local businesses and organizations."
        />
        <TimelineItem 
          year="Present" 
          title="Continuing to Grow"
          description="Still family-owned and operated, we continue to expand our coverage and improve our services."
        />
      </div>
    </div>
  );
};

export default TimelineSection;
