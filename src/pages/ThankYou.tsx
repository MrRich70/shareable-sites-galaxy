
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Wifi, Shield, Clock, CreditCard } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 py-6 px-8 text-white text-center">
              <CheckCircle className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-3xl font-bold">Thank You for Your Request!</h1>
              <p className="text-xl mt-2">We've received your information and will contact you shortly.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-blue-900">Enjoy These Benefits When You Join NJoy:</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Wifi className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Lightning-Fast Internet</h3>
                      <p className="text-gray-600">Experience high-speed internet that won't slow you down, even during peak usage times.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CreditCard className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">No Hidden Fees</h3>
                      <p className="text-gray-600">Transparent pricing with no surprises on your bill. What you see is what you pay.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Reliable Service</h3>
                      <p className="text-gray-600">Our network is built for reliability with 99.9% uptime guarantee for uninterrupted connectivity.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Local Support</h3>
                      <p className="text-gray-600">Friendly, local customer service ready to help with any questions or issues.</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link to="/service-packages">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      View Internet Packages
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/6e59fade-b828-47f0-9cbd-d69e62e9e956.png" 
                    alt="Happy NJoy customer giving thumbs up" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-blue-900">Join our satisfied customers!</h3>
                  <p className="text-gray-600 mt-2">
                    Experience why more households are choosing NJoy for their internet needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ThankYou;
