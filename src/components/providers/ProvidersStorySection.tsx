
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
          How One Family Found the Perfect Local Internet Provider
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              The Search for Better Internet in Central Illinois
            </h3>
            <p className="text-gray-700">
              The last box was finally unloaded. Sarah sighed, wiping sweat from her brow. Cerro Gordo, Illinois. Population 1,302. A far cry from Chicago, but the charm was undeniable. The old Victorian house they'd bought, with its peeling paint and sprawling porch, felt like a fresh start for her, Tom, and their two kids, Maya and Leo.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  "Internet!" Leo, ever the pragmatist at age 10, was already on it. "Dad, we need internet. How am I supposed to stream?"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Tom chuckled. "Easy, son. I already looked into it. I saw an ad for Njoy Communications. Apparently, they're the best around here."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Sarah, still unpacking the kitchen, overheard. "Njoy? Never heard of them."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  "Small town, honey," Tom replied, pulling out his phone. "Probably a local company. Let's give them a call."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The call was surprisingly pleasant. A friendly voice, not an automated system, answered almost immediately. Within 24 hours, a technician named Earl, a man who looked like he'd been born and raised in Cerro Gordo, arrived. He was efficient, knowledgeable, and even offered Tom tips on the best fishing spots in the nearby lake.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  "So," Earl said, connecting the last wire, "you folks new to town?"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  "Just moved in yesterday," Sarah replied. "From Chicago. Big change."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Earl nodded knowingly. "Well, welcome. You'll find folks here are friendly. And Njoy, we treat everyone like family. You got any problems, you just call."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  He wasn't kidding. The internet was fast, reliable, and a lifeline in their new, quieter life. Maya, a budding artist, could upload her creations without lag. Leo could game with his friends back in the city. Sarah could work remotely, and Tom could research his passion – restoring vintage motorcycles.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  One evening, a storm knocked out the power. The kids groaned. Sarah sighed. But within an hour, the lights flickered back on, and so did the internet. Leo cheered. "Njoy is the best!"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Sarah smiled. Maybe moving to a small town wasn't so bad after all. Maybe, with a reliable internet connection and a friendly community, Cerro Gordo was exactly where they were meant to be. Their adventure had just begun, powered by Njoy Communications, their happy internet provider in their new happy home.
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
