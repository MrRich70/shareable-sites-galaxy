
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
          The Johnson Family's New Chapter in Macon, IL — and Their Lifesaver, Njoy Communications
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              What inspired the Johnson family to move to Macon, IL?
            </h3>
            <p className="text-gray-700">
              After years of city living, the Johnsons were ready for a slower pace of life. They found Macon, IL — a charming small city rich in history and located just nine miles south of Decatur. With around 1,100 residents, it felt like the perfect escape from the hustle without losing access to amenities.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What stood out about Macon when they arrived?
                  </h3>
                  <p className="text-gray-700">
                    The community's deep roots and welcoming vibe made an immediate impression. Learning about Macon's history — from its 1856 founding along the Illinois Central Railroad to its incorporation in 1869 — made the Johnsons feel like they were part of something enduring. Plus, the scenic drives down U.S. Highway 51 added to the small-town charm.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Were they concerned about the local economy or job prospects?
                  </h3>
                  <p className="text-gray-700">
                    Slightly. Macon's population had declined a bit, but the median household income had grown to over $64,000. The Johnsons were relieved to see economic improvement, especially since Mr. Johnson planned to continue his remote marketing job. That meant — above all — they needed solid internet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did they solve the internet challenge in Macon?
                  </h3>
                  <p className="text-gray-700">
                    Luckily, they found <strong>Njoy Communications</strong> — and it changed everything. Reliable, fast, and built for rural areas, Njoy became their instant favorite. They signed up within days of moving in.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did Njoy Communications impact their new life?
                  </h3>
                  <p className="text-gray-700">
                    Njoy kept their family connected in all the best ways. Mr. Johnson had zero interruptions during Zoom calls with clients. Mrs. Johnson finally launched her food blog, uploading recipes and videos with ease. And the kids? They made new friends online, streamed movies, and even beat their cousins in weekend gaming marathons — all thanks to Njoy's rock-solid service.
                    <br /><br />
                    What surprised them most? How fast rural internet could be. "We worried about dropping off the digital map," Mrs. Johnson laughed. "Instead, thanks to <strong>Njoy</strong>, we're more connected than ever — while living the peaceful small-town life we always dreamed of."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Would they recommend Macon — and Njoy Communications — to others?
                  </h3>
                  <p className="text-gray-700">
                    "Without a doubt," Mr. Johnson said. "Macon gave us the perfect community, and Njoy gave us the freedom to live and work without compromise. Honestly, it feels like we have the best of both worlds."
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
