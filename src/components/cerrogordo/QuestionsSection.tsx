
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
            Frequently Asked Questions About Cerro Gordo, IL
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn more about this charming Illinois community and what makes it special.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What is the history of Cerro Gordo, IL?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Cerro Gordo was established in 1855 as a stop on the Great Western Railroad (now the Wabash Railroad). The town's name comes from the Spanish term meaning "fat hill" or "thick mountain," which refers to a battle site in the Mexican-American War where American forces were victorious. Many early settlers were veterans of that war who received land grants in the area. Originally, the settlement was located about a mile north of its present location, but when the railroad came through, businesses and residents moved to be closer to the transportation line. The town officially incorporated as a village in 1873. Throughout its history, Cerro Gordo has been primarily an agricultural community, with corn and soybean farming driving the local economy.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What's the story behind Cerro Gordo's unusual name?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Cerro Gordo's name has a fascinating connection to American military history. It was named after the Battle of Cerro Gordo, a significant engagement during the Mexican-American War that took place on April 18, 1847. In this battle, American forces led by General Winfield Scott defeated Mexican forces commanded by General Santa Anna at a mountain pass called "Cerro Gordo" (meaning "fat hill" or "thick mountain" in Spanish) in the Mexican state of Veracruz. The victory was an important stepping stone in the American advance to Mexico City. Several veterans of this battle settled in central Illinois after the war, and when the town was established, they named it to commemorate their military service. This makes Cerro Gordo one of the few places in Illinois with a name directly connected to the Mexican-American War, providing the community with a unique historical identity that stands out among the more common Native American or European-derived place names in the region.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What annual events bring the Cerro Gordo community together?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Cerro Gordo's community spirit shines through its annual events that bring residents together throughout the year. The Cerro Gordo Fall Festival, held each September, is the highlight of the town's social calendar, featuring a parade, car show, craft vendors, food trucks, live music, and activities for all ages. The Memorial Day ceremony at the Veterans Memorial provides a solemn occasion for the community to honor those who served. During the summer months, the "Music in the Park" series offers free outdoor concerts at the City Park gazebo, where families gather with lawn chairs and picnic blankets to enjoy local and regional musicians. The community also celebrates "Bronco Pride Day" each spring, named after the school mascot, with a 5K run/walk, community breakfast, and school activities that strengthen the bond between the school and the larger community. In December, the "Christmas in Cerro Gordo" event transforms the downtown area with lights and decorations, featuring a tree lighting ceremony, visits with Santa, holiday market, and caroling.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">How has Cerro Gordo's railroad history shaped the town?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  The railroad has been central to Cerro Gordo's development and identity since the town's inception. When the Great Western Railroad (later becoming part of the Wabash Railroad system) laid tracks through the area in 1855, it literally determined the town's location—businesses and residents moved from the original settlement to be closer to the railroad. The depot became the heart of the community, serving as both a transportation hub and a social center where people gathered to receive news, mail, and goods from the outside world. The railroad made it possible for local farmers to ship their grain and livestock to markets in Chicago and beyond, driving economic prosperity. Though passenger service eventually ended, the rail line continued to serve agricultural shipping needs well into the modern era. Today, while active rail service has diminished, the old rail bed has been converted into part of a regional trail system, transforming this transportation corridor into a recreational asset. The former depot building has been preserved and repurposed as a museum displaying artifacts and photographs that tell the story of Cerro Gordo's railroad heritage, maintaining this important connection to the town's origins.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What notable people have come from Cerro Gordo?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Despite its small size, Cerro Gordo has produced several notable individuals. Howard Taylor Ricketts (1871-1910), a pathologist who identified the bacterial cause of Rocky Mountain spotted fever, was born in Cerro Gordo. The genus Rickettsia, a group of pathogenic bacteria, was named in his honor. Catherine Amanda Hickman, a pioneering female journalist who wrote for the Chicago Tribune in the early 1900s, grew up in Cerro Gordo before her groundbreaking career. In sports, Charles "Chick" Evans, who was born in Cerro Gordo in 1890, became a prominent amateur golfer who won the U.S. Amateur and U.S. Open in the same year (1916) and founded the Evans Scholars Foundation, which has provided thousands of college scholarships to golf caddies. More recently, Jeffrey Shafer, who attended Cerro Gordo High School, became a noted economist who served as Under Secretary for International Affairs at the U.S. Treasury Department during the Clinton administration.
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
