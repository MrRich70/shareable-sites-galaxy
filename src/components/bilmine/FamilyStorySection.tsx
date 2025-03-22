
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
          A Fresh Start in Milmine, IL – The Peterson Family Discovers Njoy Internet
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              What made the Peterson family decide to move to Milmine, IL?
            </h3>
            <p className="text-gray-700">
              The Petersons were ready for change. Tired of the hustle in the suburbs, they searched for a quiet place to slow down and reconnect. Milmine, IL — a tiny unincorporated community with just over 100 people — caught their attention. It was small, peaceful, and offered exactly what they were craving: a simple life away from the noise.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What did they find appealing about Milmine?
                  </h3>
                  <p className="text-gray-700">
                    For the Petersons, the charm was in the stillness. Nestled in Piatt County, surrounded by farmland and open skies, Milmine felt like a hidden gem. The air was fresh, the nights were quiet, and everyone knew each other. It was the kind of place where neighbors waved as they passed and summer evenings were spent on the porch watching the sunset.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Did they worry about the economic situation in Milmine?
                  </h3>
                  <p className="text-gray-700">
                    A little. With a median household income of $29,375, the area clearly faced some economic challenges. But the Petersons weren't looking for luxury — they were looking for peace, space, and a reset. As long as they could work remotely and stay connected, they felt confident they could build a good life there.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What was their biggest concern about moving to such a small community?
                  </h3>
                  <p className="text-gray-700">
                    Internet access. With both Mr. and Mrs. Peterson working from home and two teenagers who lived online, reliable internet was non-negotiable. In a town as small as Milmine, they worried they'd be stuck with slow speeds and constant buffering.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did they solve the internet challenge?
                  </h3>
                  <p className="text-gray-700">
                    That's where <strong>Njoy Communications</strong> came in. To their surprise, Njoy had solid coverage in the area — fast, reliable, and affordable. The installation was quick, and suddenly, their tiny rural home was just as connected as their old suburban house.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did Njoy Communications change their experience in Milmine?
                  </h3>
                  <p className="text-gray-700">
                    It changed everything. The kids were able to keep up with school, video chat with friends, and even stream movies in HD without a hiccup. Mr. Peterson hosted Zoom meetings for clients across the country, and Mrs. Peterson launched her online baking blog — complete with YouTube videos and live streams.
                    <br /><br />
                    Weekend family nights became a blast — streaming concerts, gaming tournaments, and movie marathons, all thanks to <strong>Njoy's fast internet</strong>. The family often joked that they'd never expected to have better internet <em>after</em> moving to the middle of nowhere.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Would they recommend Milmine and Njoy Communications to others?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely. "We thought we were trading connection for peace," Mrs. Peterson said. "Turns out, we got both. Njoy keeps us connected, and Milmine keeps us grounded. Honestly, it's the best move we've ever made."
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
