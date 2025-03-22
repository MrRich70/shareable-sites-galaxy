
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  description: string;
  phoneNumber: string;
  contactPath: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  description, 
  phoneNumber, 
  contactPath 
}) => {
  return (
    <div className="mt-16 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">{title}</h2>
      <p className="text-lg text-gray-700 mb-8">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Call Us: {phoneNumber}
        </Button>
        <Link to={contactPath}>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Contact Online
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
