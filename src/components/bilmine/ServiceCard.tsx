
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  isExternal: boolean;
}

const ServiceCard = ({ title, description, icon, path, isExternal }: ServiceCardProps) => {
  const cardContent = (
    <CardContent className="p-6 text-center flex flex-col items-center justify-center min-h-[220px] cursor-pointer">
      <div className="mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Button className="mt-4 bg-blue-600 hover:bg-blue-700" size="lg">
        Learn More
      </Button>
    </CardContent>
  );

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      {isExternal ? (
        <a href={path} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      ) : (
        <Link to={path}>
          {cardContent}
        </Link>
      )}
    </Card>
  );
};

export default ServiceCard;
