
import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">{title}</h1>
      <p className="text-xl text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
