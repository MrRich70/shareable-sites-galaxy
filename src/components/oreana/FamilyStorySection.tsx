
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
          The Jones Family Finds Their Perfect Home — and Internet — in Oreana, IL
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              What brought the Jones family to Oreana, IL?
            </h3>
            <p className="text-gray-700">
              After years of living in a crowded suburb, the Joneses craved a quieter, friendlier place to raise their two kids. They discovered Oreana, a charming village in Macon County, with just over 840 residents — the perfect size for small-town living without feeling isolated.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What did they find most appealing about Oreana?
                  </h3>
                  <p className="text-gray-700">
                    Oreana's community spirit won them over instantly. With a high homeownership rate and most people speaking English at home, it felt familiar and welcoming. The Joneses loved that the median age was around their own, making it easy to connect with neighbors who shared similar life stages and family values.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Did they worry about the economic situation or job opportunities?
                  </h3>
                  <p className="text-gray-700">
                    A little. The unemployment rate was higher than average, but the village's strong median household income of over $93,000 reassured them. Plus, they were planning to work remotely — which brought up their biggest concern: internet reliability.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did they overcome the internet challenge in a rural area?
                  </h3>
                  <p className="text-gray-700">
                    Enter <strong>Njoy Communications</strong>. The Joneses heard great things from locals about this local internet provider — fast speeds, reliable service, and excellent customer care. They signed up immediately, and Njoy didn't disappoint.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did Njoy Communications impact their new life in Oreana?
                  </h3>
                  <p className="text-gray-700">
                    Njoy turned what could've been a challenge into one of the best parts of their move. The kids stayed on top of schoolwork with virtual classes. Mr. Jones ran his online consulting firm without a glitch. And Mrs. Jones finally launched her online art shop — uploading large digital files in minutes.
                    <br /><br />
                    Evenings became family gaming nights, weekend movie marathons, and Facetime calls with family back home. Njoy kept them connected to the world — while they enjoyed the peaceful, small-town life they always dreamed of.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Would they recommend Oreana — and Njoy Communications — to others?
                  </h3>
                  <p className="text-gray-700">
                    "Absolutely," Mr. Jones said. "Oreana is everything we wanted — safe, quiet, and full of good people. And thanks to <strong>Njoy Communications</strong>, we didn't have to give up any of the fun parts of being online. Best move we ever made."
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
