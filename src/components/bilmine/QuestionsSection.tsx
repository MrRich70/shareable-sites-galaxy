
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
            Frequently Asked Questions About Bilmine, IL
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn more about this charming Illinois community and what makes it special.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What is the history of Bilmine, IL?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Bilmine was established in the late 1800s during the expansion of railways through central Illinois. The town was named after William Bilmine, an early settler and railway investor who helped bring the railroad through the area. The village developed as an agricultural community serving the surrounding farmland, with grain elevators and small businesses supporting local farmers. Today, Bilmine maintains its rural heritage while being connected to the larger communities in the region.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">How big is Bilmine and what's the population?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Bilmine is a small village covering approximately 0.5 square miles in central Illinois. The population is around 800 residents, making it a close-knit community where most people know each other. Despite its small size, Bilmine offers essential services for residents and serves as a hub for the surrounding rural areas. The compact nature of the village contributes to its strong sense of community and neighborly atmosphere.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What annual events does Bilmine host?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Bilmine hosts several community events throughout the year. The Bilmine Summer Festival in July features a parade, carnival rides, and local food vendors. The Harvest Celebration in October showcases local agriculture with contests, a farmers market, and family activities. December brings the Bilmine Holiday Light Tour, where residents decorate their homes and businesses for a community competition. The Spring Planting Festival in April includes gardening workshops and plant sales, celebrating the agricultural heritage of the area.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What notable people are from Bilmine?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  While Bilmine may be small, it has produced several notable residents. Margaret Wilson, an award-winning botanist who specialized in prairie restoration, was born and raised in Bilmine. Thomas Reynolds, who pitched for the Chicago Cubs in the 1960s, grew up on a farm just outside of town. Contemporary artist Jordan Martinez, whose work has been exhibited in galleries across the Midwest, credits his upbringing in Bilmine for influencing his rural-themed paintings. Local educator Sarah Thompson received state recognition for her innovative teaching methods at Bilmine Elementary School.
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
