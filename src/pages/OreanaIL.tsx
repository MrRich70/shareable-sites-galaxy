
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, WifiIcon, CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import CityMap from "@/components/maps/CityMap";
import FamilyStorySection from "@/components/oreana/FamilyStorySection";

const HeroSection = () => (
  <section className="bg-gradient-to-b from-blue-50 to-white py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          High-Speed Internet in Oreana, IL
        </h1>
        <p className="text-xl text-blue-800 mb-8 max-w-3xl">
          Reliable, affordable internet service for Oreana residents and businesses
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
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Coverage in Oreana, IL</h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          NJoy Communications provides high-speed internet services throughout Oreana and surrounding areas.
        </p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <CityMap 
          city="Oreana" 
          mapHeight="400px"
        />
      </div>
      
      <div className="flex justify-center">
        <div className="bg-blue-50 p-6 rounded-lg inline-flex items-center gap-3">
          <MapPin className="text-blue-700" />
          <span className="text-blue-900 font-medium">
            Proudly serving Oreana, IL and surrounding communities
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
        Living in Oreana, IL
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Small Town Charm</h3>
            <p className="text-gray-700">
              Enjoy the peaceful, friendly atmosphere of small-town living with the convenience of nearby amenities.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Close to Decatur</h3>
            <p className="text-gray-700">
              Located just a short drive from Decatur, residents have easy access to shopping, dining, and entertainment.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Community Events</h3>
            <p className="text-gray-700">
              Oreana hosts various community events throughout the year, bringing residents together to celebrate.
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
        Frequently Asked Questions About Oreana, IL
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What is the current population and demographic profile of Oreana, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                As of 2025, Oreana has a projected population of 841 residents. The racial composition is predominantly White (90.03%), followed by Two or more races (5.49%), Black or African American (3.47%), and Asian (1.01%). The median age is 37.6 years, with males averaging 38.5 years and females 34.9 years.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What is the economic situation in Oreana, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                The median household income in Oreana is $93,194 as of 2023, which increased from previous years. The average household income is $96,234, with a low poverty rate of 2.01%. However, the area has an unemployment rate of 8.6%, which is higher than the US average of 6.0%. The job market in Oreana has decreased by 8.2% over the last year.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              How has Oreana's population changed in recent years?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Oreana has experienced a population decline. The population decreased from 887 in the 2020 census to an estimated 841 in 2025, representing a -4.51% change. The current annual rate of population change is -1.17%.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What are some key features of Oreana's community?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Oreana is a village located in Macon County, Illinois. It has a high homeownership rate of 89.5% as of 2022. The community is primarily English-speaking, with no households reporting a non-English language as their primary shared language at home. The average commute time for residents is moderate compared to other rural communities.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Why Choose NJoy Communications in Oreana
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
            Our network is built for 99.9% uptime, even in rural areas like Oreana.
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
            Our Oreana-based technicians provide quick, knowledgeable assistance.
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

const OreanaIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <MapSection />
        <AttractionsSection />
        <QuestionsSection />
        <FamilyStorySection />
        <FeaturesSection />
        
        {/* Citations Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Citations</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>[1] https://en.wikipedia.org/wiki/Oreana,_Illinois</p>
              <p>[2] https://www.census.gov/</p>
              <p>[3] https://datausa.io/profile/geo/oreana-il</p>
              <p>[4] https://www.macon.il.us/</p>
              <p>[5] https://www.illinois.gov</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default OreanaIL;
