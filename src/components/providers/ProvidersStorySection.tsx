
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProvidersStorySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          A Family's Journey to Connected Living in Illinois
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              New Beginnings in the Prairie State
            </h3>
            <p className="text-gray-700">
              The minivan, affectionately nicknamed "The Prairie Schooner," shuddered as it crossed the Illinois state line. Sarah, peering out the window, squeezed her daughter Lily's hand. "Almost there, kiddo! New adventures await!"
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Lily, a whirlwind of ten-year-old energy, bounced in her seat. "Will we see cornfields? Dad promised cornfields!"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Mark, driving, chuckled. "Illinois is practically made of cornfields, Lily-bug. You'll be swimming in them before you know it."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  They had left behind the familiar bustle of city life for the promise of a quieter existence in a small town outside of Chicago. Mark had landed a job in the burgeoning tech sector, drawn by Illinois's focus on high-growth industries. Sarah, a freelance writer, was excited by the prospect of a lower cost of living and a fresh start.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Unpacking in their new, slightly-too-big house, they realized a crucial oversight: the internet. Mark, ever the pragmatist, immediately started researching providers. "We need something reliable," he declared, scrolling through endless options. "My job depends on it."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Lily, meanwhile, was already experiencing withdrawal symptoms. "But Dad, how will I watch my shows? How will I video chat with Grandma?"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  After what felt like an eternity of comparing plans and reading reviews, Mark stumbled upon Njoy Communications. Their website promised fast speeds, reliable service, and, surprisingly, excellent customer support. "Worth a shot," he muttered, dialing the number.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The voice on the other end was cheerful and surprisingly helpful. Within 24 hours, a technician arrived, efficiently setting up their internet. Lily was the first to test it, squealing with delight as her favorite show streamed flawlessly. Mark breathed a sigh of relief as he successfully joined his first virtual meeting.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Over the next few weeks, Njoy Communications proved to be more than just an internet provider. Their connection was consistently strong, allowing Sarah to research and write without interruption. Lily explored online learning resources and connected with new friends through online games. Even Mark, initially skeptical, found himself impressed by their responsiveness and the genuine care they seemed to have for their customers.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  One evening, as the family sat together, watching a movie streamed seamlessly through their Njoy connection, Sarah smiled. "You know," she said, "moving here was a bit scary, but I think we made the right choice."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Mark wrapped an arm around her. "Me too. And who knew finding a good internet provider could make such a difference?"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Lily, nestled between them, grinned. "Thanks, Njoy! You're the best!" The Prairie Schooner had found its harbor, and in the heartland of America, connected to the world through Njoy Communications, their new adventure had truly begun.
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

export default ProvidersStorySection;
