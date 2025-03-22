
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
          Finding Home in Elwin: One Family's Internet Journey
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              New Beginnings in a Small Town
            </h3>
            <p className="text-gray-700">
              The U-Haul rumbled down the cracked asphalt of what Google Maps optimistically called a "road," kicking up dust that painted the minivan behind it a dull beige. Inside, ten-year-old Leo pressed his nose against the glass, watching the endless fields of corn blur past. "Are we there yet?" he whined for the tenth time in as many minutes.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  His mom, Sarah, sighed. "Almost, Leo. Just a little further. Welcome to Elwin!" she announced with forced cheer, though the welcome sign they passed was rusted and barely legible.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Elwin, Illinois. Population: 80. According to the internet, anyway. Sarah had pictured a quaint, charming village. What she saw was… well, less quaint and more forgotten. Their new house, a fixer-upper on the edge of town, was the only one on the block that wasn't boarded up.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  "This is an adventure!" John, Leo's dad, boomed, trying to inject some enthusiasm into the situation. "Think of all the space, Leo! We can build a treehouse!"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Leo remained unconvinced. His biggest concern wasn't the lack of trees, but the lack of Wi-Fi. "But Dad, what about my games?"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The first few days were a flurry of unpacking, painting, and the constant hum of the old house's unreliable AC. John, a software engineer, was going crazy without a stable internet connection. He needed to work remotely, and the local library, bless its heart, was running on dial-up.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Then, a beacon of hope appeared. A small, hand-painted sign on a telephone pole: "Njoy Communications - High-Speed Internet for a Connected Community!" John, practically vibrating with anticipation, ripped off the contact information.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The next day, a friendly technician named Martha arrived in a battered pickup truck. "Njoy's been serving Macon County for years," she explained as she expertly wired the house. "We know how important a good connection is, especially in a place like Elwin."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Within an hour, the house was humming with the sweet symphony of broadband. Leo was ecstatic, diving headfirst into his online world. John, finally able to work without interruption, let out a sigh of relief. Sarah, meanwhile, started researching local history, discovering that Elwin, despite its current state, had a rich past as a bustling railroad town.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  That evening, as the sun dipped below the horizon, painting the cornfields in hues of orange and purple, the family sat on the porch, Leo glued to his tablet, John typing away on his laptop, and Sarah reading about Elwin's glory days. Even in a town with a population smaller than most high school graduating classes, they found a connection, not just to the internet, but to each other and to the surprising charm of their new home, all thanks to Njoy Communications and the promise of a connected community. Their Elwin adventure had just begun.
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
