
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
          The Miller Family's Mount Zion Story: Connected to Community
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              New Beginnings in Mount Zion
            </h3>
            <p className="text-gray-700">
              The minivan, affectionately nicknamed "The Wanderer," rumbled down Route 36, packed tighter than a Thanksgiving turkey. Inside, the Miller family – Mark, Sarah, and their two kids, 10-year-old Leo and 8-year-old Maya – were embarking on their biggest adventure yet: moving to Mount Zion, Illinois.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  "Almost there!" Mark announced, glancing at the GPS. "Population 5,816. Sounds cozy, right?"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Leo, glued to his tablet, grumbled, "Hope they have decent internet. I can't survive without my games."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Sarah chuckled. "Don't worry, sweetie. I'm sure we'll find something. Besides, maybe you'll actually *play* outside now."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Mount Zion greeted them with tree-lined streets and friendly waves. Their new house, a charming two-story with a sprawling backyard, felt instantly like home. But as boxes piled up, Leo's anxiety about internet connectivity grew.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  "Dad, I checked. The signal here is… prehistoric!" he wailed, holding up his tablet.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Mark, ever the optimist, grabbed his laptop. "Let's see what we can find. I heard the median household income is pretty good here - $110,786! That means they must have some good options."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  After a quick search, a bright, cheerful website popped up: Njoy Communications. "Looks promising!" Mark exclaimed. "They offer high-speed internet right here in Macon County."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The installation was quick and painless. The Njoy technician, a friendly local named Dave, even showed Leo a few tricks to optimize his gaming connection. Within hours, Leo was back in the digital world, Maya was streaming her favorite cartoons, and Mark and Sarah were catching up on emails.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  That evening, as the family sat on the porch, bathed in the golden glow of the setting sun, Leo looked up from his tablet. "Thanks, Dad. Njoy is awesome! The internet is even faster than in the city."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Sarah smiled. "See, Leo? Adventure comes in many forms. And sometimes, it comes with reliable internet."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Mark wrapped his arm around Sarah. "Mount Zion is already feeling like home. And with Njoy Communications, we're officially connected to our new community." The adventure had just begun, and the Miller family was ready to explore everything their new town had to offer, one high-speed connection at a time.
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
