
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
        Q&A Format about Oakley, IL
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What is the current population and demographic profile of Oakley, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                As of 2025, Oakley Township has a population of approximately 950 residents. The population has been declining at a rate of -0.71% annually since the 2020 census, which recorded 981 residents. The racial composition is predominantly White (96.3%), with small percentages of Black/African American (1.1%), and other races. The median age is 44.9 years, with males averaging 47.8 years and females 40 years.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What is the economic situation in Oakley, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                The average household income in Oakley Township is $56,982, with a poverty rate of 19.22%. This is lower than the state average, indicating some economic challenges in the area. The township is primarily rural, which likely influences its economic profile and available job opportunities.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What are some key features or characteristics of Oakley, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Oakley is a rural township located in Macon County, Illinois. It contains the unincorporated community of Oakley and part of the village of Sangamon. The township covers an area of 29.38 square miles, of which 97.79% is land and 2.18% is water. Its rural nature is evident from the fact that the entire population was classified as rural in the 2020 census.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              How has Oakley's population changed over recent decades?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Oakley Township has experienced population fluctuations over the years. The population was 1,078 in 1990, increased to 1,160 in 2000, then declined to 1,081 in 2010. The 2020 census recorded 981 residents, and estimates for 2025 show a continued decline to around 950 residents. This trend indicates a gradual depopulation of the area over the past two decades.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

export default QuestionsSection;
