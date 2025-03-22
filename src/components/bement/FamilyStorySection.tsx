
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const FamilyStorySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          A Chicago Family Finds Home in Bement, IL — with Njoy Internet
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Moving to Small-Town Illinois
            </h3>
            <p className="text-gray-700">
              The GPS blinked, stubbornly insisting they were almost there. Sarah sighed, glancing at her husband, Tom, 
              behind the wheel of their overstuffed minivan. "Are you sure this is right, Tom? It looks like we're heading into a cornfield."
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Tom chuckled, "Relax, city girl. That's just Illinois charm. Bement is just around the corner."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  After what felt like an eternity of endless green, a small sign appeared: "Welcome to Bement." Population: 1,462. 
                  The kids, ten-year-old Leo and seven-year-old Maya, perked up. Their new adventure had officially begun.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Their new house, a charming two-story with a sprawling backyard, was exactly as the pictures promised. 
                  But as they started unpacking, a new problem arose. "No internet?" Leo wailed, clutching his tablet. 
                  Maya, equally horrified, added, "How will I watch my shows?"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Tom, ever the optimist, assured them, "We'll get it sorted. Let's explore the town while I make some calls."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Bement was a slice of small-town Americana. A friendly general store, a park with kids playing baseball, 
                  and neighbors waving from their porches. They learned about the high percentage of U.S.-born citizens and 
                  the strong sense of community. It was a far cry from their bustling Chicago neighborhood.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Back at the house, Tom looked defeated. "The only provider out here is… well, it's a local company called Njoy Communications. 
                  I haven't heard of them."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Sarah, always up for supporting local businesses, said, "Let's give them a shot. What's the worst that could happen?"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The next day, a friendly technician named Dave arrived from Njoy Communications. He was efficient, 
                  knowledgeable, and even offered to help Tom set up the smart TV. Within an hour, the house was buzzing with Wi-Fi.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  "Fastest internet we've ever had!" Leo shouted, downloading a game in record time. Maya was already engrossed in her favorite show.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  That evening, as they sat on their porch, watching the fireflies dance in the twilight, Sarah smiled. 
                  The move to Bement, despite the initial internet hiccup, felt right. They were embracing the slower pace, 
                  the friendly faces, and even the cornfields. And thanks to Njoy Communications, they were connected to the world, 
                  ready for whatever adventures Bement, Illinois, had in store. The future, just like their internet connection, was looking bright.
                </p>
              </div>
            </CollapsibleContent>
            
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-blue-300 text-blue-600 hover:bg-blue-50"
              >
                {isOpen ? (
                  <>
                    <span>Read less</span>
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>Read more</span>
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default FamilyStorySection;
