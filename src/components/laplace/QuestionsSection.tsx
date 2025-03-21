
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QuestionsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Frequently Asked Questions About Our La Place Internet Service
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                What internet speeds can I get in La Place?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  We offer several internet packages in La Place with speeds ranging from 25 Mbps to 100 Mbps. Our most popular plan provides 50 Mbps, which is perfect for streaming, gaming, and supporting multiple devices.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                Is there a contract required for internet service?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  We offer both contract and no-contract options. You can save on monthly costs with our 12-month agreement, or choose a month-to-month plan for maximum flexibility.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                How reliable is your internet service in La Place?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  Our network in La Place maintains a 99.9% uptime guarantee. We have invested in robust infrastructure specifically designed for rural areas to ensure consistent, reliable service regardless of weather conditions.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                How soon can I get installed after signing up?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  Typical installation time in La Place is 3-5 business days from order date. Our local technicians will coordinate a convenient time for your installation and ensure everything is working perfectly before they leave.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                What is the history of La Place, IL?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  La Place's history is closely tied to the agricultural development of Piatt County and the arrival of the railroad in the late 19th century. While specific details about its early development are limited in the provided search results, the establishment of a post office and railroad station suggests that La Place served as a local hub for farmers and residents in the surrounding rural area.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
                What were the main industries in La Place, IL?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  La Place, IL, is a small, rural community in Piatt County, and its primary industries historically reflect the broader economic trends of the region. The main industries in La Place likely include:
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-700">
                  <li><strong>Agriculture</strong>: As part of central Illinois, La Place is situated in a region dominated by farming. Key agricultural products include corn and soybeans, which are staples of Illinois's agricultural economy. Livestock farming may also play a role in the local economy.</li>
                  <li><strong>Small-Scale Retail and Local Services</strong>: In smaller communities like La Place, local businesses such as grocery stores, hardware stores, and repair services often serve the needs of residents.</li>
                  <li><strong>Transportation and Logistics</strong>: Given its rural location and proximity to agricultural production, transportation and logistics may play a supporting role in moving goods to market.</li>
                </ol>
                <p className="text-gray-700 mt-2">
                  While specific details about industries in La Place are limited, its economy is closely tied to the agricultural heritage of central Illinois.
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
