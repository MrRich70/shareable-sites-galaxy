
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
            Frequently Asked Questions About Bement, IL
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn more about this charming Illinois community and what makes it special.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What is the history of Bement, IL?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Bement was founded in 1854 when the Great Western Railroad (now the Wabash) built its track through the area. It was named after Edward Bement, a railroad investor from New York who never actually visited the town bearing his name. The town gained historical significance as the location where Abraham Lincoln and Stephen Douglas planned their famous debates at Bryant Cottage in 1858. Throughout its history, Bement has been predominantly an agricultural community, with its economy centered around farming, particularly corn and soybeans.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What are Bement's fascinating Abraham Lincoln connections?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Bement holds a special place in American political history as the setting for a pivotal moment in Abraham Lincoln's career. On July 29, 1858, Lincoln met with Senator Stephen Douglas at Bryant Cottage to arrange their famous series of debates during their Senate campaign. This small, unassuming Greek Revival cottage, built in 1856 by Francis E. Bryant, is now preserved as the Bryant Cottage State Historic Site. The meeting that took place here led to the Lincoln-Douglas debates, which thrust Lincoln into the national spotlight and helped shape his path to the presidency two years later, despite losing the Senate race to Douglas.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What unique traditions does Bement celebrate annually?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Bement is known for its distinctive annual traditions that bring the community together. The most beloved is "Old Glory Days," a multi-day celebration around Independence Day featuring a grand parade, carnival rides, community cookouts, and a spectacular fireworks display. Another unique tradition is the "Lincoln Heritage Festival" held each September, commemorating the historic Lincoln-Douglas debate planning meeting. During this event, local residents dress in period costumes for historical reenactments, crafts demonstrations, and educational programs about 19th-century life. The community also hosts "Bement Fall Fest," celebrating the harvest season with a farmers market, pumpkin decorating contests, and apple-themed culinary competitions that showcase local agricultural products.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">How has Bement's agricultural heritage shaped the community?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Agriculture has been the cornerstone of Bement's identity since its founding. The rich prairie soil of central Illinois made the area perfect for farming, particularly corn and soybeans. This agricultural foundation has shaped not only the local economy but also the community's values and traditions. The grain elevator standing tall in the center of town serves as both a practical facility and a symbol of the town's agricultural roots. Many family farms in the area have been passed down through multiple generations, creating a strong sense of heritage and stewardship of the land. The Bement High School's agricultural education program and Future Farmers of America chapter remain among the school's most active organizations, reflecting the continued importance of agriculture to the community's identity and future.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left font-medium">What famous people are from Bement?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Despite its small size, Bement has produced several notable individuals. Henry C. Nugent, who served as an Illinois state representative in the early 1900s, was born and raised in Bement. Alice Corbin Henderson, an influential poet and associate editor of Poetry magazine who helped shape the Chicago Renaissance literary movement, spent part of her childhood in Bement. More recently, Dr. Marion Sullinger, a pioneering researcher in agricultural genetics whose work with corn hybrids significantly improved crop yields throughout the Midwest, was born on a farm just outside Bement. The town also claims connection to General Wesley Merritt, a Civil War cavalry officer who later served as Superintendent of West Point, as his family briefly resided in the Bement area during his childhood.
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
