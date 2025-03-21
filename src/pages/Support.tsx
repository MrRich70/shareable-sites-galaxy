
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, HelpCircle, WifiOff, Wrench, CreditCard, Headphones } from "lucide-react";

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
        
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Common Support Topics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          <TopicCard
            icon={<WifiOff className="h-6 w-6" />}
            title="Internet Outages"
            linkText="View Status"
          />
          <TopicCard
            icon={<Wrench className="h-6 w-6" />}
            title="Troubleshooting"
            linkText="Get Help"
          />
          <TopicCard
            icon={<CreditCard className="h-6 w-6" />}
            title="Billing Questions"
            linkText="Learn More"
          />
          <TopicCard
            icon={<Headphones className="h-6 w-6" />}
            title="Equipment Support"
            linkText="Get Support"
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
                question="How do I reset my router?"
                answer="Unplug your router from power, wait 30 seconds, and plug it back in. Allow 2-3 minutes for it to fully restart and reconnect."
              />
              <FaqItem 
                question="What should I do if my internet is slow?"
                answer="Try restarting your router, check for service outages in your area, make sure you're not exceeding your plan's capacity with too many devices."
              />
              <FaqItem 
                question="How do I upgrade my service plan?"
                answer="You can upgrade your plan by calling our customer service or by logging into your account on our website and selecting 'Manage Plan' from your dashboard."
              />
              <FaqItem 
                question="Is there a fee for late payments?"
                answer="Yes, payments made after the due date may incur a late fee of $10. We send reminders before the due date to help you avoid these charges."
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

// Topic Card Component
const TopicCard = ({ icon, title, linkText }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="p-2 bg-blue-100 rounded-full mb-3 mt-4 text-blue-600">
          {icon}
        </div>
        <h3 className="font-medium mb-2">{title}</h3>
        <Button variant="link" className="text-blue-600 p-0 h-auto">
          {linkText}
        </Button>
      </CardContent>
    </Card>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  return (
    <div className="border-b pb-4">
      <h4 className="font-semibold text-lg mb-2 text-blue-900">{question}</h4>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};

export default Support;
