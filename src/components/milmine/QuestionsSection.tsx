
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QuestionsSection = () => {
  return (
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
};

export default QuestionsSection;
