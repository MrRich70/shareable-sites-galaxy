
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

export default QuestionsSection;
