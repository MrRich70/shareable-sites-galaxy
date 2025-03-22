
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QuestionsSection = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
