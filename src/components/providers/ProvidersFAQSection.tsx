
import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const ProvidersFAQSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions About Internet Providers
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about choosing an internet service provider.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">How do I find out which internet providers serve my specific address?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  The most reliable way to determine exactly which internet providers are available at your specific address is to use our online availability checker or call our customer service team. While online databases can provide general information about service areas, they may not account for recent network expansions or address-specific factors. When you contact NJoy Communications directly, we can verify exactly what services are available at your location, including the maximum speeds we can deliver to your home or business. This personalized approach ensures you get accurate information that reflects our most up-to-date coverage map.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What's the difference between the various types of internet connections?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  There are several types of internet connections, each with different characteristics. DSL uses telephone lines to deliver internet and offers moderate speeds. Cable internet uses the same coaxial cables as cable TV and typically provides faster speeds than DSL. Fiber optic internet transmits data via light signals through glass or plastic fibers, offering the fastest and most reliable connection but with limited availability in many rural areas. Fixed wireless internet, which NJoy Communications specializes in, transmits data between a tower and a fixed antenna on your property, providing high-speed internet without the need for cable infrastructure—making it ideal for rural communities. Satellite internet is available almost anywhere with a clear view of the sky but may have higher latency. Each type has its own advantages depending on your location, budget, and internet usage needs.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">How much internet speed does my household need?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  At NJoy Communications, we can help you assess your specific needs and recommend the most appropriate plan for your household based on your unique usage patterns and requirements.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">Why might my actual internet speeds differ from what's advertised?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Several factors can cause your actual internet speeds to differ from advertised rates. Most providers, including NJoy Communications, advertise speeds as "up to" a certain level because various factors can affect performance. Your home's wiring, the age and quality of your router, the number of devices connected simultaneously, and the distance from your home to the nearest service point can all impact speed. Network congestion during peak usage times (typically evenings) can also temporarily reduce speeds. External factors like severe weather conditions may affect wireless connections. Finally, the device you're using to measure speed may itself be a limiting factor if it has outdated hardware or software. At NJoy Communications, we strive to provide transparent information about expected speeds and work with customers to optimize their setup for the best possible performance.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What should I consider when comparing internet service providers?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  When comparing internet service providers, look beyond just the advertised monthly price. Consider the total cost including equipment rental fees, installation charges, and any price increases after promotional periods end. Evaluate contract terms, including length and early termination fees. Compare the actual speeds offered and check if there are data caps that might result in additional charges or throttled speeds. Research reliability by reading customer reviews and checking service outage history in your area. Consider customer service quality, which becomes crucial when you experience technical issues. For those in rural areas, availability is a primary consideration, as many national providers don't serve less populated regions. At NJoy Communications, we pride ourselves on transparent pricing, reliable service, and exceptional local customer support—factors that often matter more than saving a few dollars per month on your internet bill.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProvidersFAQSection;
