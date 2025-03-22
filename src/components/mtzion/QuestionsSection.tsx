
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
        Frequently Asked Questions About Mt. Zion, IL
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What is the current population and demographic profile of Mount Zion, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                As of 2025, Mount Zion has a projected population of 5,816. The racial composition is predominantly White (90.22%), followed by Black or African American (4.1%), Asian (3.11%), two or more races (1.63%), and other races (0.94%). The median age is 40.1 years, with males averaging 40.2 years and females 40 years.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What is the economic situation in Mount Zion, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                The median household income in Mount Zion is $110,786 as of 2023. The average household income is $123,779, with a poverty rate of 3.5%. The village has experienced economic growth, with the median household income increasing from $99,798 in 2022 to $110,786 in 2023.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What are some key features of Mount Zion, IL?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Mount Zion is a village in Macon County, Illinois. It has a comprehensive land use plan, subdivision ordinances with design standards, and municipal zoning. The village offers various municipal services, including a police department with 11 full-time officers providing 24-hour protection, a public library, and three licensed waste disposal firms. Mount Zion also has two banks and is served by both daily and weekly newspapers.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              How has Mount Zion's population changed in recent years?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Mount Zion has experienced slight population decline in recent years. The 2020 census recorded a population of 6,014, which decreased to 5,878 by 2023. The projected population for 2025 is 5,816, indicating an annual rate of change of -0.5%. Despite this decline, Mount Zion remains the 304th most populated city in Illinois out of 1,445 cities.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

export default QuestionsSection;
