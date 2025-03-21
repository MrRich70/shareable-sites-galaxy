
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
            Frequently Asked Questions About Milmine, IL
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn more about this charming Illinois community and what makes it special.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What is the history of Milmine, IL?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Milmine was established in the late 19th century as a railroad community along the Wabash Railroad. The village was named after James Milmine, a local landowner and businessman. The community grew as an agricultural center serving the surrounding farming areas, with grain elevators and small businesses supporting the local economy. Though small in size, Milmine has maintained its identity as a tight-knit rural community in central Illinois.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">How big is Milmine and what's the population?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Milmine is a small unincorporated community in Piatt County, Illinois. As an unincorporated area, it doesn't have official boundaries or population statistics. The community consists of a small cluster of homes and buildings along with surrounding farms. The population is estimated to be less than 100 residents, making it a true small rural community where neighbors know each other and community ties remain strong despite its modest size.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What annual events does Milmine host?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  While Milmine itself is small, the community participates in several regional events throughout the year. Residents typically celebrate with a summer potluck and community gathering that brings together local families. They also participate in the Piatt County Trail Blazers Snowmobile Club events during winter months. Many Milmine residents attend and contribute to the Cerro Gordo Fall Festival and the Monticello Railway Museum's special events, which are nearby. The Piatt County Fair is another highlight that draws Milmine community members each summer.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What attractions are near Milmine?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  While Milmine itself is a small rural community, there are several attractions within a short drive. The Robert Allerton Park near Monticello offers beautiful gardens and hiking trails. The Monticello Railway Museum provides historic train rides and exhibits. Lake Shelbyville is within reasonable driving distance for outdoor recreation, including boating, fishing, and camping. Decatur is nearby with attractions including the Scovill Zoo and the Children's Museum of Illinois. For history buffs, the Bryant Cottage State Historic Site in Bement showcases 19th-century life in central Illinois.
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
