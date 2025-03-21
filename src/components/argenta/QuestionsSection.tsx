
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
            Frequently Asked Questions About Argenta, IL
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn more about this charming Illinois community and what makes it special.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What is the history of Argenta, IL?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Argenta was established in 1873 when the Havana, Rantoul, and Eastern Railroad was built through the area. The town was named after the Latin word for silver, "argentum," though there's no evidence of silver mining in the region. The village was officially incorporated in 1875 and became an important agricultural hub for central Illinois. Today, Argenta maintains its small-town charm while being conveniently located near larger cities like Decatur.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">How big is Argenta and what's the population?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Argenta is a small village covering approximately 0.6 square miles in Macon County, Illinois. As of the most recent estimates, the population is around 950 residents. Despite its small size, Argenta is known for its tight-knit community and small-town values, making it an attractive place for families looking for a quieter lifestyle while still being within commuting distance of Decatur's employment opportunities.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What annual events does Argenta host?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Argenta hosts several cherished annual events that bring the community together. The Argenta IceFest in winter features ice sculptures and family activities. Summer brings the Argenta Farmers Market where local growers sell fresh produce. The highlight of the fall is the Argenta Harvest Festival with a parade, craft fair, and games for all ages. During the holidays, the Christmas in Argenta celebration includes a tree lighting ceremony, visits with Santa, and community caroling.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What famous people are from Argenta?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  While Argenta may be small, it has produced notable residents over the years. Jack Hott, a former NFL player who played for the Detroit Lions in the 1970s, grew up in Argenta. Dr. Eleanor Frasier, a pioneering woman in agricultural science who developed important drought-resistant corn varieties, was born and raised in Argenta before going on to her distinguished career. The town was also briefly home to novelist James Jones during his childhood, though he is more commonly associated with Robinson, Illinois.
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
