
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
                What is the history of La Place, IL?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  La Place's history is closely tied to the agricultural development of Piatt County and the arrival of the railroad in the late 19th century. While specific details about its early development are limited in the provided search results, the establishment of a post office and railroad station suggests that La Place served as a local hub for farmers and residents in the surrounding rural area.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
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
