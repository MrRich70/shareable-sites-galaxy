
import React from "react";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OwnersSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Meet the Owners</h2>
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/2b9280b5-ed3c-45a6-a76a-d616ba739783.png" 
              alt="NJoy Communications Owners" 
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="md:w-1/2 p-6 flex flex-col justify-center">
            <div className="flex items-center mb-3 text-blue-600">
              <Heart className="h-6 w-6 mr-2" />
              <span className="font-semibold">Married since 2002</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Family at the Heart of Our Business</h3>
            <p className="text-gray-700 mb-4">
              The foundation of NJoy Communications is built on family values. Our owners have been married since 2002 
              and have been blessed with 3 children and 7 grandchildren.
            </p>
            <p className="text-gray-700 mb-4">
              Their commitment to family extends to how they run the business, treating customers and team members like 
              part of their extended family. This personal touch is what sets NJoy Communications apart from larger providers.
            </p>
            <p className="text-gray-700">
              When you call NJoy Communications, you're not just another customer – you're speaking with people who care 
              about connecting your family to what matters most.
            </p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default OwnersSection;
