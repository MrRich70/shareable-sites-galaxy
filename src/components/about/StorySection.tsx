
import React from "react";

const StorySection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Story</h2>
      <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
        <p className="text-lg text-gray-700 mb-4">
          NJoy Communications was founded in 2006 as a family-owned and operated business with a simple mission: 
          to bring reliable internet access to underserved communities in Central Illinois.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We started small, working directly with local farmers and grain elevators to install equipment 
          that would expand internet coverage throughout the region. What began as a modest operation has 
          grown into a trusted provider serving residents and businesses across Central Illinois.
        </p>
        <p className="text-lg text-gray-700">
          Throughout our growth, we've maintained our commitment to personal service and community values. 
          As a local business, we understand the unique needs of the area and take pride in delivering 
          internet solutions that keep our neighbors connected.
        </p>
      </div>
    </div>
  );
};

export default StorySection;
