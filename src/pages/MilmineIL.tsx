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
          High-Speed Internet in Milmine, IL
        </h1>
        <p className="text-xl text-blue-800 mb-8 max-w-3xl">
          Reliable, affordable internet service for Milmine residents and businesses
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800" asChild>
            <a href="https://preview--shareable-sites-galaxy.lovable.app/service-packages">Check Availability</a>
          </Button>
          <Button size="lg" variant="outline" className="border-blue-700 text-blue-700" asChild>
            <a href="https://preview--shareable-sites-galaxy.lovable.app/milmine-il-internet-service-provider">View Plans</a>
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
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Coverage in Milmine, IL</h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          NJoy Communications provides high-speed internet services throughout Milmine and surrounding areas.
        </p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <CityMap 
          city="Milmine, IL" 
          mapHeight="400px"
        />
      </div>
      
      <div className="flex justify-center">
        <div className="bg-blue-50 p-6 rounded-lg inline-flex items-center gap-3">
          <MapPin className="text-blue-700" />
          <span className="text-blue-900 font-medium">
            Proudly serving Milmine, IL and surrounding communities
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
        Living in Milmine, IL
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Rural Charm</h3>
            <p className="text-gray-700">
              Enjoy the peaceful, friendly atmosphere of small-town living with the convenience of nearby amenities.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Historic Community</h3>
            <p className="text-gray-700">
              Milmine has a rich history as a railroad town, with historic buildings and community pride.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Agricultural Heritage</h3>
            <p className="text-gray-700">
              Surrounded by farmland, Milmine celebrates its agricultural roots through community events.
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
        Frequently Asked Questions About Our Milmine Internet Service
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              Q1: What is the population and demographic profile of Milmine, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Milmine, IL, is an unincorporated community in Piatt County with a population of approximately 104 residents as of 2025. The community spans 11.662 square miles, with a population density of 9.2 people per square mile. It consists of 46 households, and the median household income is $29,375. The racial composition is predominantly White (97.22%), with small percentages of Hispanic (1.85%) and American Indian (0.93%) residents.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              Q2: What is the historical significance of Milmine, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Milmine was named after George Milmine, one of the early landowners in the area. The first store in the community was owned by Milmine and Bodman and operated by E.B. Sprague. The town was also home to a prominent grain elevator and warehouse owned by David Kuns. A notable event in its history includes a serious railroad accident in 1882 that caused significant damage to the depot and resulted in fatalities.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              Q3: What industries are present in Milmine, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Agriculture is a key industry in Milmine, with facilities like the Topflight Grain Cooperative playing a significant role. The cooperative operates a grain elevator in the area, supporting local farming operations by handling grain storage and logistics. Additionally, there are three businesses in the ZIP code area employing six people collectively.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              Q4: What notable features or institutions exist in Milmine, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Milmine features a union church and a brick school building constructed around 1872, which historically served as important community institutions. The town also has a grain elevator that remains central to its agricultural economy.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What is the history of Milmine, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Milmine is a small unincorporated community in Piatt County, Illinois. It was established in the late 19th century and named after a local landowner. The community grew around the railroad station that was built as part of the expansion of rail transportation in central Illinois, primarily serving the agricultural needs of the surrounding farmland.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What were the main industries in Milmine, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Agriculture has always been the primary industry in and around Milmine. The fertile soil of central Illinois made the area ideal for growing corn and soybeans. The railroad provided transportation for agricultural products, and grain elevators were built to store crops for shipment. Small businesses serving the farming community also played an important role in Milmine's economy.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What internet speeds can I get in Milmine?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                We offer several internet packages in Milmine with speeds ranging from 25 Mbps to 100 Mbps. Our most popular plan provides 50 Mbps, which is perfect for streaming, gaming, and supporting multiple devices.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              Is there a contract required for internet service?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                We offer both contract and no-contract options. You can save on monthly costs with our 12-month agreement, or choose a month-to-month plan for maximum flexibility.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-9" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              How reliable is your internet service in Milmine?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Our network in Milmine maintains a 99.9% uptime guarantee. We have invested in robust infrastructure specifically designed for rural areas to ensure consistent, reliable service regardless of weather conditions.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-10" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              How soon can I get installed after signing up?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Typical installation time in Milmine is 3-5 business days from order date. Our local technicians will coordinate a convenient time for your installation and ensure everything is working perfectly before they leave.
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
        What Our Milmine Customers Say
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
              "After struggling with unreliable internet for years, switching to NJoy has been a game-changer. No more buffering during movie night!"
            </p>
            <p className="text-xs text-gray-500 italic">Rural Connectivity Survey, 2023</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "The customer service is outstanding. When I had questions about my bill, they responded immediately and resolved everything."
            </p>
            <p className="text-xs text-gray-500 italic">Customer Support Feedback, 2023</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              ★★★★★
            </div>
            <p className="text-gray-700 mb-4">
              "I run my small business from home and need reliable internet. NJoy has been consistent and fast, even during peak usage times."
            </p>
            <p className="text-xs text-gray-500 italic">Small Business Satisfaction Index, 2023</p>
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
        Why Choose NJoy Communications in Milmine
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
            Our network is built for 99.9% uptime, even in rural areas like Milmine.
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
            Our technicians provide quick, knowledgeable assistance when you need it.
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

const MilmineIL = () => {
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

export default MilmineIL;

