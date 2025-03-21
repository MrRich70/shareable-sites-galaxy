
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
        Frequently Asked Questions About Our Mt. Zion Internet Service
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              What internet speeds can I get in Mt. Zion?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                We offer several internet packages in Mt. Zion with speeds ranging from 25 Mbps to 100 Mbps. Our most popular plan provides a consistent 50 Mbps, which is perfect for streaming, gaming, and supporting multiple devices.
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
              How reliable is your internet service in Mt. Zion?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Our network in Mt. Zion maintains a 99.9% uptime guarantee. We have invested in robust infrastructure specifically designed for suburban areas to ensure consistent, reliable service regardless of weather conditions.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-blue-900">
              How soon can I get installed after signing up?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50">
              <p className="text-gray-700">
                Typical installation time in Mt. Zion is 3-5 business days from order date. Our local technicians will coordinate a convenient time for your installation and ensure everything is working perfectly before they leave.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

export default QuestionsSection;
