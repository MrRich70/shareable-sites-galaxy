
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MaconIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">High-Speed Internet in Macon, IL</h1>
              <p className="text-xl mb-8">Experience reliable connectivity with NJoy Communications, your local internet service provider.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/service-packages" className="bg-white text-blue-700 hover:bg-blue-100 font-semibold px-6 py-3 rounded-lg transition-colors">
                  Get Started
                </Link>
                <a href="/service-packages" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors">
                  View Plans
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Macon, Illinois</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're proud to provide high-speed internet services to the Macon community.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center">
                <MapPin className="text-red-500 mr-2" />
                <span className="font-medium">Macon, IL 62544</span>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Macon, IL</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Local Community</h3>
                <p className="text-gray-600">
                  Macon is a friendly community with a rich agricultural heritage and small-town charm.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="text-gray-600">
                  Home to Meridian Schools, providing quality education to local students.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Local Events</h3>
                <p className="text-gray-600">
                  Throughout the year, Macon hosts various community events, including the annual Macon County Fair.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Macon, IL</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-semibold text-left">
                    What is the current population and demographic profile of Macon, IL?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      As of 2025, Macon has a projected population of 1,102 residents. The population has been declining at a rate of -1.25% annually. The median age in Macon is 46.8 years, with males averaging 46.9 years and females 46.3 years. The racial composition is predominantly White, as it reflects the larger Macon County demographics where White residents make up 73.9% of the population.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl font-semibold text-left">
                    What is the economic situation in Macon, IL?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      The median household income in Macon is $64,412 per year, while the average household income is $76,760. This represents a year-over-year increase of 7.3% for median income and 10.5% for average income. The poverty rate in Macon is relatively low at 5.7%. Residents aged 25 to 44 earn an average of $76,016, while those between 45 and 64 years old have a higher median wage of $82,500.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl font-semibold text-left">
                    How has Macon's population changed in recent years?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      Macon has experienced a population decline in recent years. The population decreased by -5.89% from 1,171 in the 2020 census to the projected 1,102 in 2025. This represents an annual decline rate of -1.25%.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl font-semibold text-left">
                    What are some key features or historical facts about Macon, IL?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p>
                      Macon is a city in Macon County, Illinois, located 9 miles south of Decatur. It was named after Nathaniel Macon, an American politician, and was originally plotted in 1856 on land owned by the Illinois Central Railroad. Macon was officially incorporated as a city on April 19, 1869. The city covers a total area of 1.45 square miles, all of which is land. U.S. Highway 51 runs through Macon, connecting it to larger cities in the region.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8 text-sm text-gray-500">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Citations</h3>
                <ul className="list-none space-y-1">
                  <li>[1] https://worldpopulationreview.com/us-counties/illinois/macon-county</li>
                  <li>[2] https://www.illinois-demographics.com/macon-county-demographics</li>
                  <li>[3] https://worldpopulationreview.com/us-cities/illinois/macon</li>
                  <li>[4] https://www.point2homes.com/US/Neighborhood/IL/Macon-Demographics.html</li>
                  <li>[5] https://en.wikipedia.org/wiki/Macon,_Illinois</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Customers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Macon Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <p className="font-semibold">Michael Davis</p>
                    <p className="text-sm text-gray-500">Macon Resident</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "NJoy Communications has been a game-changer for my family. We finally have reliable internet that can handle all our devices."
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <p className="font-semibold">Jennifer Wilson</p>
                    <p className="text-sm text-gray-500">Macon Resident</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As someone who works from home, stable internet is essential. NJoy has been consistent and their local support team is always helpful."
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <p className="font-semibold">Robert Smith</p>
                    <p className="text-sm text-gray-500">Macon Business Owner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "My small business depends on reliable internet. NJoy Communications has provided excellent service that keeps my business running smoothly."
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose NJoy in Macon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-700 text-white p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">High-Speed Performance</h3>
                  <p className="text-gray-600">Enjoy fast, reliable internet specifically designed for Macon's infrastructure.</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-700 text-white p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Support</h3>
                  <p className="text-gray-600">Our Macon-based team provides personalized customer service to the community.</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-700 text-white p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">Get high-quality internet service at affordable rates with no hidden fees.</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-blue-700 text-white p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reliable Security</h3>
                  <p className="text-gray-600">Enhanced security features to keep your Macon home or business connection safe.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default MaconIL;
