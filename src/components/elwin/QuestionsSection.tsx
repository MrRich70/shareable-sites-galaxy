
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
            Frequently Asked Questions About Elwin, IL
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn more about this charming Illinois community and what makes it special.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What is the history of Elwin, IL?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Elwin was established in the mid-1800s as a small agricultural community in central Illinois. The settlement emerged along the Illinois Central Railroad line, which facilitated the transportation of agricultural products to larger markets. The community was named after Elwin Hall, an early settler and influential businessman who donated land for the development of the railroad stop. Throughout its history, Elwin has maintained its identity as a close-knit farming community, with its economy traditionally centered around agriculture, particularly corn and soybean production. While it has never incorporated as a village or city, Elwin has developed its own distinct community identity separate from nearby Decatur.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">How did Elwin's location shape its development?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Elwin's strategic location has significantly influenced its development throughout history. Situated just south of Decatur along U.S. Route 51, Elwin benefits from its proximity to a larger city while maintaining its distinct rural character. This unique positioning has allowed Elwin to serve as a transitional community between urban and rural environments. When the Illinois Central Railroad established a stop in Elwin in the 1850s, it created a vital link to agricultural markets that spurred economic growth. Later, as automobile travel became predominant, Elwin's location along Route 51 (later designated as U.S. 51) further enhanced its connectivity. In more recent decades, Elwin's position near the junction of U.S. 51 and Interstate 72 has provided easy access to regional transportation networks while still allowing the community to preserve its small-town atmosphere. This balance of accessibility and separation has made Elwin an attractive location for residents who work in Decatur but prefer a more rural lifestyle.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What role does agriculture play in Elwin's community?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Agriculture remains the cornerstone of Elwin's identity and economy, shaping the community in profound ways. The rich black soil of central Illinois makes the area surrounding Elwin some of the most productive farmland in the world, primarily devoted to corn and soybean cultivation. Many Elwin families have farmed the same land for multiple generations, creating deep agricultural traditions. The rhythms of planting and harvest seasons still influence community life, with busy periods at the local grain elevator marking the agricultural calendar. Even as fewer residents directly work in farming due to agricultural mechanization and consolidation, the industry continues to influence local culture through events like the annual Elwin Harvest Festival, which celebrates the community's agricultural heritage with equipment displays, farming demonstrations, and competitions for best produce. Local 4-H and FFA programs remain strong, educating young people about agricultural practices and stewardship. Additionally, several agriculture-related businesses have established operations near Elwin, providing employment opportunities while maintaining the community's connection to its farming roots.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What is unique about Elwin's community spirit?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Elwin's community spirit is characterized by an exceptional level of volunteerism and mutual support that defines small-town life at its best. Despite its unincorporated status, Elwin maintains a strong sense of identity through community-driven initiatives rather than formal government structures. The Elwin Community Association, formed in 1958, organizes numerous events throughout the year, including the Summer Festival, Halloween Trunk-or-Treat, and Christmas Tree Lighting ceremony. When the community needed a playground in the 1990s, residents raised funds, donated materials, and built it themselves over a single weekend—a project that has since become local legend and inspiration for other community efforts. The "Elwin Cares" program, which began as an informal network of neighbors helping neighbors during difficult times, has evolved into a more organized support system that provides meals, transportation, and assistance to community members facing illness or hardship. The local volunteer fire department remains one of the few all-volunteer units in the region, with firefighters representing multiple generations of Elwin families. This tradition of service without compensation exemplifies how Elwin residents take responsibility for community needs rather than waiting for external solutions.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What notable people or events are associated with Elwin?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  While small in size, Elwin has connections to several notable individuals and events. Dr. Margaret Hill, a pioneering female physician who graduated from medical school in 1912 and established a practice serving rural communities, was born and raised on a farm near Elwin. Her dedication to bringing medical care to underserved areas made her a beloved figure throughout central Illinois. In athletics, James "Jimmy" Ellis, who grew up in Elwin, became a standout baseball player at the University of Illinois before playing three seasons with the St. Louis Browns in the 1940s. The community gained unexpected national attention in 1995 when an Elwin farmer discovered an unusually well-preserved wooly mammoth skeleton while excavating a drainage ditch. This discovery, now known as the "Elwin Mammoth," provided valuable insights into prehistoric Illinois and is displayed at the Illinois State Museum. More recently, Elwin native Captain Laura Griffen received the Distinguished Flying Cross for her service as a helicopter pilot during military operations in Afghanistan, becoming one of the few women to receive this prestigious military decoration.
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
