
import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const QuestionsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
        Dalton City, IL Demographics & Information
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What is the current population and demographic profile of Dalton City, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                As of 2025, Dalton City has a projected population of 433 residents. The median age is 37.3 years, with males averaging 38.8 years and females 31 years. The racial composition is predominantly White (94.9%), followed by Two or More races (2.8%) and Black (2.3%).
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What is the economic situation in Dalton City, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                The median household income in Dalton City is $69,231, with an average household income of $75,788. However, the community faces economic challenges, with a poverty rate of 23.47%. The job market has decreased by 8.2% over the last year.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              How has Dalton City's population changed in recent years?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Dalton City has experienced a population decline. From 2020 to 2025, the population is projected to decrease from 458 to 433, representing a -5.46% change. The current annual rate of population change is -0.7%.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What are some key features or historical facts about Dalton City, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Dalton City is a village located in Moultrie County, Illinois. It was originally platted in Dora Township. The community has a high rate of U.S.-born citizens (98.96%) and a strong tendency for residents to remain in the same house year after year (97.77% lived in the same house as the previous year). Dalton City reached its peak population of 577 in the year 2000 and has been experiencing a gradual decline since then.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 text-sm text-gray-500">
          <p>Sources: Illinois Demographics, Point2Homes, CityPopulation.de, World Population Review, and other official census and demographic resources.</p>
        </div>
      </div>
    </div>
  </section>
);

export default QuestionsSection;
