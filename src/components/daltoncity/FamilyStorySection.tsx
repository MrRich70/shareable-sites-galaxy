
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
          Finding Connection in Dalton City: The Miller Family's New Beginning
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            The U-Haul rumbled down the quiet street, kicking up dust devils in its wake. Sarah gripped the steering wheel, a bead of sweat trickling down her temple. Beside her, ten-year-old Billy pressed his nose against the window, eyes wide with wonder. "It's so… green, Mom!" he exclaimed, a stark contrast to their old Chicago neighborhood. In the back, Dad, Mark, navigated a maze of boxes, humming a tuneless melody. Macon, Illinois. Population 433, give or take a few. Adventure awaited.
          </p>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Their new house, a charming Victorian with a wraparound porch, sat on the edge of Dalton City. It needed work, but it had character. As soon as the last box was unloaded, the first priority became clear: internet. Billy, a digital native, looked at them with pleading eyes. "How am I supposed to finish my Minecraft world?"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Mark, ever the pragmatist, started researching. "Looks like our options are limited out here," he sighed, scrolling through a list of providers. "Satellite is too slow, and the other options… well, they don't inspire confidence."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Then, a glimmer of hope. "Njoy Communications?" Sarah read aloud. "Local, reliable, and… actually affordable?" A quick phone call later, a friendly voice assured them that installation could happen within the week.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The day the Njoy technician arrived, Billy practically vibrated with anticipation. A young woman named Emily, with a warm smile and a tool belt slung around her waist, efficiently wired the house. Within hours, the Wi-Fi signal was strong and steady.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  That evening, the family gathered in the living room. Billy, lost in his Minecraft world, let out a whoop of joy. Sarah streamed a movie, the picture crystal clear. Mark, catching up on work emails, actually smiled.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  "You know," Sarah said, glancing around the room, "this place is starting to feel like home."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Mark nodded. "It's funny," he said, "we moved here for a slower pace of life, but I didn't realize how much we relied on a good internet connection. Thanks to Njoy, we can have both."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  As the sun set over the cornfields surrounding Dalton City, casting a golden glow on their Victorian porch, the Miller family settled into their new life, connected to the world and to each other, thanks to a small-town internet provider with a big heart. The adventure had just begun.
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
