
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
              After years of living in a crowded suburb of Chicago, the Harpers craved a slower, simpler life. With two young kids and aging parents to think about, they wanted somewhere peaceful, affordable, and family-friendly. One weekend, while visiting nearby Mount Zion, they were surprised by the charm of the area — tree-lined streets, a tight-knit community, and a cost of living that made sense.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What did they find appealing about Mount Zion and the area around La Place?
                  </h3>
                  <p className="text-gray-700">
                    The Harpers were impressed by Mount Zion's reputation for safety, with 24-hour police protection and a poverty rate of just 3.5%. The growing local economy was another bonus — the median household income had jumped to over $110,000, showing that people were thriving here. Plus, Mount Zion's public library, well-maintained parks, and good schools made it clear that this was a community that invested in its future.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did the demographic profile affect their decision?
                  </h3>
                  <p className="text-gray-700">
                    As a mixed-race family, the Harpers were naturally curious about the diversity of the area. While Mount Zion's population was predominantly White (90.22%), they appreciated the small but present mix of African American (4.1%) and Asian (3.11%) residents. What stood out more was the welcoming vibe they got from everyone they met — a neighbor even brought them homemade cookies the day they toured a house.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Were they concerned about the declining population in the area?
                  </h3>
                  <p className="text-gray-700">
                    Honestly, yes — at first. Learning that Mount Zion's population had dropped slightly from 6,014 in 2020 to a projected 5,816 by 2025 gave them pause. But then they realized that the slower pace meant less congestion, more space, and the kind of small-town atmosphere they'd been craving. And despite the drop, Mount Zion was still ranked 304th out of 1,445 cities in Illinois — not bad for a village its size.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What was their favorite discovery after settling in?
                  </h3>
                  <p className="text-gray-700">
                    Surprisingly, it was the little things. The kids loved getting library cards from Mount Zion's library, and Saturday mornings turned into family trips to the local diner — where everyone knew their names by week three. The Harpers found themselves hosting backyard BBQs with neighbors, the kind they only dreamed about in the city. And with two local banks, solid municipal services, and waste disposal sorted, they realized that life here was not only simpler — it was better.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Would they recommend La Place and Mount Zion to other families looking to relocate?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely. "It's not about finding a perfect place," Mr. Harper says, "It's about finding the right place for your family. And for us, that's La Place — with Mount Zion right next door."
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
