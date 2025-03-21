
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QuestionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Q&A Format about Lake City, IL
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                What is the current population and demographic profile of Lake City, IL?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  As of 2025, Lake City, IL has a population of 49 residents. The population has been growing at a rate of 6.52% annually, but it has decreased by 54.21% since the 2020 census, which recorded 107 residents. The racial composition is predominantly White (83.5%) with a significant Black or African American population (16.5%). The median age is 35.9 years, with males averaging 48.5 years and females 34.9 years.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                What is the economic situation in Lake City, IL?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  The average household income in Lake City is $135,530, with a poverty rate of 0%. The community has 53 households, all of which are owner-occupied. The labor force participation rate is 53.4%, but interestingly, the employment rate is reported as 0%. This unusual statistic may require further investigation or clarification from local sources.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                What is the historical background of Lake City, IL?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  While specific historical information about Lake City, IL is limited in the search results, we can infer that it has likely been influenced by broader Illinois history. The state has a rich agricultural heritage, with 75% of its land devoted to farming. Lake City, being in a rural area, may have been part of this agricultural tradition.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                What are the main industries or economic activities in Lake City, IL?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  The search results don't provide specific information about industries in Lake City. However, given Illinois' strong agricultural background, it's likely that farming plays a role in the local economy. Illinois is a leading producer of soybeans, corn, and swine, and also produces cattle, wheat, oats, and various fruits and vegetables. Lake City may participate in these agricultural activities, but more local research would be needed to confirm this.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
