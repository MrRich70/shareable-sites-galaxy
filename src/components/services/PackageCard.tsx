
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface PackageCardProps {
  icon: React.ReactNode;
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
  packageId: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  icon, 
  name, 
  price, 
  features, 
  recommended, 
  packageId 
}) => {
  return (
    <Card className={`overflow-hidden h-full flex flex-col ${recommended ? 'border-blue-600 border-2 shadow-lg' : ''}`}>
      {recommended && (
        <div className="bg-blue-600 text-white text-center py-1 font-semibold text-sm">
          MOST POPULAR
        </div>
      )}
      <CardHeader className={`text-center pb-4 pt-6 ${recommended ? 'bg-blue-50' : 'bg-gray-50'}`}>
        <div className="flex justify-center mb-4 text-blue-600">
          {icon}
        </div>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div className="mt-4 mb-2">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-500">/month</span>
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4 pb-6">
        <Link to={`/contact?package=${packageId}`} className="w-full">
          <Button className={`w-full ${recommended ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`} size="lg">
            Choose Plan
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
