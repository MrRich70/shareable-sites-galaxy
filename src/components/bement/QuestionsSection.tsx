
import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const QuestionsSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions About Bement, IL
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn more about this charming Illinois community and what makes it special.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What is the current population and demographic profile of Bement, IL?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  As of 2025, Bement has a projected population of 1,462. The racial composition is predominantly White (95.7%), followed by Hispanic (1.9%) and Black (1.6%). The median age is 39.4 years, with a slight difference between males (39.6 years) and females (39.2 years).
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What is the economic situation in Bement, IL?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  The median household income in Bement is $79,583 as of 2023, with an average household income of $81,777. The poverty rate is relatively low at 5.65%. However, Bement faces economic challenges, as Illinois has experienced a weak job market with unemployment rates rising to 6.5% in recent months.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">How has Bement's population changed in recent years?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Bement has experienced a slight population decline. From 2020 to 2025, the population is projected to decrease from 1,484 to 1,462, representing a -1.82% change. The current annual rate of population change is -0.2%.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What are some key features of Bement's community?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Bement is a village located in Piatt County, Illinois. It has a high rate of U.S.-born citizens (99.4%) and is primarily English-speaking, with 99% of residents speaking only English. The community has a high homeownership rate of 81.7%. Bement is part of the Champaign-Urbana, IL Core Based Statistical Area, which is classified as a metro area.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What are Bement's fascinating Abraham Lincoln connections?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Bement holds a special place in American political history as the setting for a pivotal moment in Abraham Lincoln's career. On July 29, 1858, Lincoln met with Senator Stephen Douglas at Bryant Cottage to arrange their famous series of debates during their Senate campaign. This small, unassuming Greek Revival cottage, built in 1856 by Francis E. Bryant, is now preserved as the Bryant Cottage State Historic Site. The meeting that took place here led to the Lincoln-Douglas debates, which thrust Lincoln into the national spotlight and helped shape his path to the presidency two years later, despite losing the Senate race to Douglas.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Sources: Illinois Demographics, World Population Review, Illinois Budget Office, AreaVibes, Zip-Codes.com, DataUSA, and other official census and demographic resources.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
