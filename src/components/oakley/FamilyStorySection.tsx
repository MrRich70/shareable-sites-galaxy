
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
          The Millers Find a New Home (and Internet Surprise) in Oakley, IL – A Family Story
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              What made the Miller family decide to move to Oakley, IL?
            </h3>
            <p className="text-gray-700">
              The Millers were craving a slower pace of life. After years of the daily grind in Springfield, they dreamed of wide-open spaces, friendly neighbors, and land their kids could explore. A friend mentioned Oakley, IL — a quiet rural township with roots, history, and real charm. On their first visit, the Millers fell in love with the peaceful fields and simple living.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What did they find appealing about Oakley?
                  </h3>
                  <p className="text-gray-700">
                    For the Millers, Oakley felt like stepping back into a version of America where people still waved from their porches. The population hovered around 950, mostly farmers, families, and folks who'd been there for generations. Life moved slower — and that was exactly what they needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Were they worried about the economic challenges or the declining population?
                  </h3>
                  <p className="text-gray-700">
                    A little. With an average household income around $56,982 and a higher poverty rate than the state average, the Millers wondered if they'd find the resources they needed. But what they quickly realized was that Oakley's real wealth wasn't in the numbers — it was in the people, the space, and the chance to live simply.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What was their biggest surprise after moving to Oakley?
                  </h3>
                  <p className="text-gray-700">
                    Honestly? It was the <strong>internet</strong>. They had braced for dead zones, laggy connections, and the painful days of dial-up speeds. Instead, they found <strong>Njoy Communications</strong> — the local internet provider that completely changed their expectations for rural living.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did Njoy Communications impact their life in Oakley?
                  </h3>
                  <p className="text-gray-700">
                    Njoy turned out to be a total game-changer. Not only did the Millers get <strong>fast, reliable internet</strong>, but it felt like a connection back to the world they thought they'd left behind. Streaming movies, online school, work-from-home meetings — everything ran smooth as butter.
                    <br /><br />
                    The kids hopped into online art classes and gaming tournaments with zero lag. Mrs. Miller started a small Etsy business — selling handmade candles and crafts — all thanks to having a steady online connection. Mr. Miller even rekindled his old passion for digital photography, uploading his rural landscapes without a single hiccup.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Did Njoy Communications make them feel more at home in Oakley?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely. "We thought we'd be giving up everything digital by moving here," Mrs. Miller laughed. "But honestly, we've got the best of both worlds now — quiet country life and fast internet. Njoy really brought this place to life for us."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Would they recommend Oakley to others looking for a fresh start?
                  </h3>
                  <p className="text-gray-700">
                    Without a doubt. "If you're looking for peace, land, and a place to breathe — come to Oakley," Mr. Miller says. "And thanks to <strong>Njoy Communications</strong>, you won't miss a thing. We're happier here than we ever imagined."
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
