
import React from "react";
import { Users, Award, Signal } from "lucide-react";
import ValueCard from "./ValueCard";

const ValuesSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ValueCard 
          title="Community First" 
          description="We're committed to serving our local community with honesty and integrity."
          icon={<Users className="h-10 w-10" />}
        />
        <ValueCard 
          title="Quality Service" 
          description="We deliver reliable internet service backed by responsive local support."
          icon={<Award className="h-10 w-10" />}
        />
        <ValueCard 
          title="Rural Focus" 
          description="We specialize in bringing connectivity to areas overlooked by larger providers."
          icon={<Signal className="h-10 w-10" />}
        />
      </div>
    </div>
  );
};

export default ValuesSection;
