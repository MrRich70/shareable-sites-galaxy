
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
          The Johnsons Settle in Lake City, IL — and Njoy Internet Makes It Feel Like Home
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              What brought the Johnson family to Lake City, IL?
            </h3>
            <p className="text-gray-700">
              After years of city life, the Johnsons were ready for a change — somewhere peaceful, small, and safe to raise their growing family. They stumbled across Lake City, IL, a tiny rural community with just 49 residents, and instantly felt drawn to its simplicity and charm. The mix of history, open land, and a growing little town felt like the fresh start they needed.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What did they find appealing about Lake City?
                  </h3>
                  <p className="text-gray-700">
                    Lake City was everything they hoped for — friendly faces, wide-open spaces, and the kind of quiet you only find in the countryside. The average age was young, with a good mix of families and long-time locals. What surprised them most was the strong sense of community despite the small population.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Were they concerned about the economic situation or job opportunities?
                  </h3>
                  <p className="text-gray-700">
                    At first, yes. With a small population and no clear major industries, the Johnsons weren't sure how they'd manage remote work or online schooling. But when they learned the average household income was high, around $135,530, and the poverty rate was zero, their worries eased. People here were doing well — quietly successful in their own way.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    What was their biggest concern before moving in?
                  </h3>
                  <p className="text-gray-700">
                    Internet — hands down. They worried that living in such a small rural town meant sacrificing modern conveniences. Without solid internet, remote work, online classes, and even streaming shows would be a struggle.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did they solve the internet challenge?
                  </h3>
                  <p className="text-gray-700">
                    That's when they found <strong>Njoy Communications</strong> — a local internet provider offering fast, reliable service <em>right there</em> in Lake City. The Johnsons were skeptical at first, but the installation was seamless, and the connection was faster than what they had back in the city.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    How did Njoy Communications change their experience in Lake City?
                  </h3>
                  <p className="text-gray-700">
                    It made all the difference. Suddenly, the Johnsons weren't "disconnected" — they were thriving. The kids finished school assignments online without a hiccup. Mr. Johnson ran his entire consulting business from the living room. Mrs. Johnson started a lifestyle blog, even uploading high-quality videos with ease.
                    <br /><br />
                    Friday nights turned into family movie nights, streaming the latest releases in HD — no buffering, no stress. The family even joked that they were "living the country dream with city internet."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    Would they recommend Lake City and Njoy Communications to others?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely. "We came here for peace and quiet — and thought we'd have to give up the internet life we loved," Mrs. Johnson said. "But thanks to <strong>Njoy Communications</strong>, we got the best of both worlds. Lake City is home now, and honestly, we couldn't be happier."
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
