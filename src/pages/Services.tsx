
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Building, Home } from "lucide-react";

const Services = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Internet Services</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Residential Services</h2>
            <p className="text-lg text-gray-700 mb-6">
              Find the perfect internet plan for your home. Whether you're streaming, gaming, or just browsing,
              we have options that fit your needs and budget.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Residential Plans
            </Button>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Business Services</h2>
            <p className="text-lg text-gray-700 mb-6">
              Powerful, reliable internet solutions for businesses of all sizes. Keep your operations running smoothly with our dedicated business plans.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Business Plans
            </Button>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Popular Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlanCard 
            title="Basic Wireless"
            speed="25 Mbps"
            price="49.99"
            features={[
              "Perfect for browsing and email",
              "Stream on 1-2 devices",
              "No data caps",
              "Free standard installation"
            ]}
            icon={<Wifi className="h-8 w-8" />}
            type="residential"
          />
          
          <PlanCard 
            title="Streaming Plus"
            speed="100 Mbps"
            price="79.99"
            features={[
              "Great for multiple devices",
              "HD streaming on 4+ devices",
              "Online gaming",
              "Free premium installation"
            ]}
            icon={<Home className="h-8 w-8" />}
            type="residential"
            popular={true}
          />
          
          <PlanCard 
            title="Business Pro"
            speed="250 Mbps"
            price="129.99"
            features={[
              "Ideal for small businesses",
              "Multiple users and devices",
              "Cloud applications",
              "24/7 priority support"
            ]}
            icon={<Building className="h-8 w-8" />}
            type="business"
          />
        </div>
      </div>
    </MainLayout>
  );
};

// Plan Card Component
const PlanCard = ({ title, speed, price, features, icon, type, popular = false }) => {
  return (
    <Card className={`overflow-hidden ${popular ? 'border-blue-600 border-2' : ''}`}>
      {popular && (
        <div className="bg-blue-600 text-white text-center py-1 font-semibold text-sm">
          MOST POPULAR
        </div>
      )}
      <CardHeader className="bg-gray-50 pb-4 pt-6">
        <div className="flex justify-center mb-4 text-blue-600">
          {icon}
        </div>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
        <CardDescription className="text-center font-semibold text-lg">
          Up to {speed}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-500">/month</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
      </CardContent>
    </Card>
  );
};

export default Services;
