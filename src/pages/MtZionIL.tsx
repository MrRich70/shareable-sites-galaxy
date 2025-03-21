import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, WifiIcon, CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import CityMap from "@/components/maps/CityMap";

const HeroSection = () => (
  <section className="bg-gradient-to-b from-blue-50 to-white py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          High-Speed Internet in Mt. Zion, IL
        </h1>
        <p className="text-xl text-blue-800 mb-8 max-w-3xl">
          Reliable, affordable internet service for Mt. Zion residents and businesses
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
            Check Availability
          </Button>
          <Button size="lg" variant="outline" className="border-blue-700 text-blue-700">
            View Plans
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const MapSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Coverage in Mt. Zion, IL</h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          NJoy Communications provides high-speed internet services throughout Mt. Zion and surrounding areas.
        </p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <CityMap 
          city="Mt. Zion" 
          mapHeight="400px"
        />
      </div>
      
      <div className="flex justify-center">
        <div className="bg-blue-50 p-6 rounded-lg inline-flex items-center gap-3">
          <MapPin className="text-blue-700" />
          <span className="text-blue-900 font-medium">
            Proudly serving Mt. Zion, IL and surrounding communities
          </span>
        </div>
      </div>
    </div>
  </section>
);

const AttractionsSection = () => (
  <section className="py-16 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
        Living in Mt. Zion, IL
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Family-Friendly Community</h3>
            <p className="text-gray-700">
              Mt. Zion offers excellent schools, safe neighborhoods, and a strong sense of community.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Recreation Opportunities</h3>
            <p className="text-gray-700">
              Enjoy the Mt. Zion District Park, sports facilities, and community events throughout the year.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Convenient Location</h3>
            <p className="text-gray-700">
              Located just minutes from Decatur with easy access to shopping, restaurants, and entertainment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const QuestionsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
        Frequently Asked Questions About Our Mt. Zion Internet Service
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What internet speeds can I get in Mt. Zion?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                We offer several internet packages in Mt. Zion with speeds ranging from 25 Mbps to 100 Mbps. Our most popular plan provides a consistent 50 Mbps, which is perfect for streaming, gaming, and supporting multiple devices.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              Is there a contract required for internet service?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                We offer both contract and no-contract options. You can save on monthly costs with our 12-month agreement, or choose a month-to-month plan for maximum flexibility.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              How reliable is your internet service in Mt. Zion?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Our network in Mt. Zion maintains a 99.9% uptime guarantee. We have invested in robust infrastructure specifically designed for suburban areas to ensure consistent, reliable service regardless of weather conditions.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              How soon can I get installed after signing up?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Typical installation time in Mt. Zion is 3-5 business days from order date. Our local technicians will coordinate a convenient time for your installation and ensure everything is working perfectly before they leave.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

const HappyCustomersSection = () => (
  <section className="py-16 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        What Our Mt. Zion Customers Say
      </h2>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Don't just take our word for it—hear from residents who have switched to NJoy Communications.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "I work from home and my internet never drops out during video calls. This reliability is exactly what my family needed."
            </p>
            <p className="text-xs text-gray-500 italic">Remote Work Survey, 2023</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "After switching to NJoy, my kids can game online while I stream my favorite shows with no buffering or lag issues."
            </p>
            <p className="text-xs text-gray-500 italic">Household Usage Report, 2023</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "The customer service is outstanding. When I had questions, they took the time to explain everything clearly."
            </p>
            <p className="text-xs text-gray-500 italic">Customer Experience Survey, 2023</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Why Choose NJoy Communications in Mt. Zion
      </h2>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Connecting your home or business with reliable, affordable internet service.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <WifiIcon className="h-8 w-8 text-blue-700" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Reliable Connection</h3>
          <p className="text-gray-700">
            Our network is built for 99.9% uptime, even in suburban areas like Mt. Zion.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <CheckCircle2 className="h-8 w-8 text-blue-700" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">No Hidden Fees</h3>
          <p className="text-gray-700">
            Transparent pricing with no surprise charges on your monthly bill.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Zap className="h-8 w-8 text-blue-700" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Fast Speeds</h3>
          <p className="text-gray-700">
            Stream, game, and video chat without interruptions or buffering.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Shield className="h-8 w-8 text-blue-700" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Local Support</h3>
          <p className="text-gray-700">
            Our Mt. Zion-based technicians provide quick, knowledgeable assistance.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Clock className="h-8 w-8 text-blue-700" />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Quick Installation</h3>
          <p className="text-gray-700">
            Get connected in 3-5 days with professional installation included.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MtZionIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <MapSection />
        <AttractionsSection />
        <QuestionsSection />
        <HappyCustomersSection />
        <FeaturesSection />
      </div>
    </MainLayout>
  );
};

export default MtZionIL;
