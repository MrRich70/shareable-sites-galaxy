
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
          New Beginnings in Argenta: The Morrison Family's Journey
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Moving to Argenta: A Family's Leap of Faith
            </h3>
            <p className="text-gray-700">
              The minivan, affectionately nicknamed "The Whale" by ten-year-old Leo, rumbled down Route 48, kicking up dust that painted the late afternoon sun a hazy orange. Inside, Sarah navigated while Mark kept an eye on Leo and his younger sister, Maya, who was engrossed in a tablet game. They were finally arriving in Argenta, Illinois.
            </p>
          </div>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
            <CollapsibleContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  "Almost there, kids!" Mark announced, trying to inject enthusiasm into his voice, though he felt a knot of anxiety in his stomach. Leaving Chicago for a small village of 867 people was a leap of faith, driven by the promise of a slower pace and a closer-knit community.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The house, a charming Victorian with a wraparound porch, was even better than the pictures. As they unloaded boxes, Sarah noticed a friendly woman across the street waving. "See, Mark? People are already welcoming us!"
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  But as evening approached, a crucial detail loomed: internet. Mark, a freelance graphic designer, relied on a stable connection. Maya needed it for her educational games, and Leo, well, Leo needed it for everything.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  "Don't worry," Sarah said, pulling out her phone. "I did some research. Remember Njoy Communications? They seemed to have good reviews."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  A quick call confirmed their coverage in Argenta. The technician, a friendly man named Dave, arrived the next morning. He expertly installed the equipment, explaining the different packages with a patience that impressed Mark.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  "Argenta's a great place," Dave said as he finished up. "Mostly folks who stay put. You'll find people are friendly and helpful." He paused, then added with a wink, "And Njoy's got the best internet in Macon County, so you're all set."
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  That evening, the family gathered in the living room. Mark uploaded his latest designs without a hitch. Maya happily explored a new learning app. Leo, after a brief initial lag, cheered as his online game sprang to life. The Whale might have carried them to Argenta, but Njoy Communications was connecting them to their new life, and to the wider world. As laughter filled the Victorian house, Mark knew they had made the right decision. Argenta, with its small-town charm and reliable internet, was starting to feel like home.
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
