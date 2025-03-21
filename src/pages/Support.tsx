
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, HelpCircle } from "lucide-react";

const Support = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">Customer Support</h1>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Our dedicated support team is ready to help with any technical issues or questions about your service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <SupportCard 
            icon={<Phone className="h-10 w-10" />}
            title="Call Us"
            description="Speak directly with our support team."
            contact="(217) 330-6157"
            hours="Mon-Fri: 8am-8pm, Sat: 9am-5pm"
          />
          
          <SupportCard 
            icon={<MessageCircle className="h-10 w-10" />}
            title="Live Chat"
            description="Chat with a support agent online."
            buttonText="Start Chat"
            hours="Available 24/7"
          />
          
          <SupportCard 
            icon={<HelpCircle className="h-10 w-10" />}
            title="Self-Help Resources"
            description="Browse our knowledge base for quick answers."
            hours="Available 24/7"
            buttonText="View Resources"
          />
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            <CardDescription>Find quick answers to common questions about our services.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <FaqItem 
                question="How do I power cycle my router?"
                answer="Unplug your router from power, wait 30 seconds, and plug it back in. Allow 2-3 minutes for it to fully restart and reconnect."
              />
              <FaqItem 
                question="How do I power cycle my Antenna?"
                answer={
                  <div>
                    <p className="mb-2">You will have one of these two devices that power your antenna. Pull the power cord from the receptable for 60 seconds and then plug back in.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                      <img 
                        src="/lovable-uploads/ad7dccad-7db3-4434-9a47-e9278132237c.png" 
                        alt="Black POE power adapter" 
                        className="rounded-md w-full max-w-[200px] mx-auto"
                      />
                      <img 
                        src="/lovable-uploads/dafa73e5-426a-4cca-938c-676e6617aae4.png" 
                        alt="White POE power adapter" 
                        className="rounded-md w-full max-w-[200px] mx-auto"
                      />
                    </div>
                  </div>
                }
              />
              <FaqItem 
                question="What should I do if my internet is slow?"
                answer={
                  <div className="space-y-2">
                    <p>If you're experiencing slow internet, try these troubleshooting steps:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Power cycle your router, antenna, and all connected devices.</li>
                      <li>Check if any vegetation has grown around your antenna that might be causing signal obstruction.</li>
                      <li>If you are performing a large upload, this can temporarily affect your internet speed. Wait for the upload to complete and your speeds should return to normal.</li>
                      <li>If these steps don't resolve the issue, please call our support team at (217) 330-6157 and we'll help get your service back to optimal performance.</li>
                    </ul>
                  </div>
                }
              />
              <FaqItem 
                question="How do I upgrade my service plan?"
                answer="You can upgrade your plan by calling our customer service."
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

// Support Card Component
const SupportCard = ({ icon, title, description, contact, hours, buttonText }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  contact?: string; 
  hours: string; 
  buttonText?: string 
}) => {
  return (
    <Card className="text-center">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="mb-4 mt-6 text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        {contact && <p className="font-semibold text-blue-900 mb-2">{contact}</p>}
        <p className="text-sm text-gray-500 mb-4">{hours}</p>
        {buttonText && (
          <Button className="bg-blue-600 hover:bg-blue-700">
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  return (
    <div className="border-b pb-4">
      <h4 className="font-semibold text-lg mb-2 text-blue-900">{question}</h4>
      <div className="text-gray-700">{answer}</div>
    </div>
  );
};

export default Support;
