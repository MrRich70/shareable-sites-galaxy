
import React, { ReactNode } from "react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-center mb-2 text-blue-900">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;
