
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
          The Harpers' Big Move to La Place, IL – A Family Story
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              What made the Harper family decide to leave the city and move to La Place, IL?
            </h3>
            <p className="text-gray-700">
              After years of living in a busy Chicago suburb, the Harpers longed for a simpler life — one where their two kids could ride bikes down quiet streets and neighbors actually knew each other's names. They stumbled upon La Place, IL during a weekend drive and were immediately drawn to the peaceful vibe and wide-open spaces. It wasn't crowded, it wasn't flashy — but it felt like home.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What did they find appealing about La Place?
                  </h3>
                  <p className="text-gray-700">
                    The charm was in the simplicity. Friendly neighbors, affordable homes, and a sense of community they hadn't felt in years. The Harpers knew they'd found a place where they could raise their kids, build roots, and actually slow down enough to enjoy life.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What was their biggest concern moving to a small town like La Place?
                  </h3>
                  <p className="text-gray-700">
                    Honestly? Internet. With both kids needing online access for school and Mr. Harper working remotely, they worried about slow speeds or unreliable service. They braced themselves for frustration — but what they found was the opposite.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What changed their mind about internet access in La Place?
                  </h3>
                  <p className="text-gray-700">
                    Enter <strong>Njoy Communications</strong> — the local internet service provider that turned out to be <em>way</em> better than they expected. Fast, reliable, and easy to set up, Njoy gave the Harpers everything they needed to stay connected. Gone were the fears of buffering, dropped Zoom calls, or cranky kids stuck in loading screens.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did Njoy Communications improve their life in La Place?
                  </h3>
                  <p className="text-gray-700">
                    It honestly made all the difference. Movie nights became a family tradition — streaming new releases in perfect HD without a single glitch. The kids jumped into online classes, gaming tournaments, and virtual hangouts with friends like they'd never left the city.
                    <br /><br />
                    Mr. Harper was able to grow his remote consulting business, hosting client meetings over video calls that were crisp and clear. Mrs. Harper reconnected with family across the country — video chatting daily without a hiccup. On weekends, they'd stream music on the porch, laughing about how they'd worried about country internet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Looking back, would they recommend La Place to other families?
                  </h3>
                  <p className="text-gray-700">
                    "Absolutely," Mr. Harper says. "La Place gave us the peace and space we needed — and <strong>Njoy Communications</strong> gave us the connection to the world we didn't want to lose. It's the best of both worlds, and honestly… we're happier here than we ever were in the city."
                  </p>
                </div>
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
