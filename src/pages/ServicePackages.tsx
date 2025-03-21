
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Wifi, Zap, Award } from "lucide-react";

const ServicePackages = () => {
  const commonFeatures = [
    "No Data Caps",
    "No Contracts",
    "Local 24/7 Technical Support"
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Internet Service Packages</h1>
          <p className="text-xl text-gray-700">
            Choose the perfect internet package for your needs. All of our plans come with no data caps,
            no contracts, and 24/7 local technical support.
          </p>
        </div>
        
        {/* Package Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PackageCard 
            icon={<Wifi className="h-12 w-12" />}
            name="Connected"
            price="50"
            features={[
              "Great for browsing & email",
              "Stream on 1-2 devices",
              "Video calls & remote work",
              ...commonFeatures
            ]}
            recommended={false}
          />
          
          <PackageCard 
            icon={<Zap className="h-12 w-12" />}
            name="Accelerated"
            price="75"
            features={[
              "Perfect for multiple devices",
              "Unlimited streaming",
              "Online gaming",
              "Smart home devices",
              ...commonFeatures
            ]}
            recommended={true}
          />
          
          <PackageCard 
            icon={<Award className="h-12 w-12" />}
            name="Ultra"
            price="100"
            features={[
              "Best for large households",
              "Simultaneous streaming",
              "Competitive gaming",
              "Large file uploads/downloads",
              "Smart home & IoT devices",
              ...commonFeatures
            ]}
            recommended={false}
          />
        </div>

        {/* Additional Information */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Ready to Get Connected?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to learn more about our services or to schedule an installation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Call Us: (217) 330-6157
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Online
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Package Card Component
const PackageCard = ({ icon, name, price, features, recommended }) => {
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
        <Button className={`w-full ${recommended ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`} size="lg">
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServicePackages;
