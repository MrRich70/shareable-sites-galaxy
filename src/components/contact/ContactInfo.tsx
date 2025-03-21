
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Info } from "lucide-react";

const ContactInfo = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white">
      <CardHeader>
        <CardTitle className="text-2xl text-blue-900">Ready to Connect?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Quick Connection</h3>
          <p className="mb-4">
            Get immediate assistance by calling our friendly customer service team:
          </p>
          <Button className="text-lg font-bold bg-blue-600 hover:bg-blue-700 mb-4" size="lg">
            <Phone className="mr-2" />
            (217) 330-6157
          </Button>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Why Choose NJoy?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>No contracts or hidden fees</li>
            <li>Local customer service</li>
            <li>Fast installation within days, not weeks</li>
            <li>Transparent pricing with no surprises</li>
            <li>24/7 technical support</li>
          </ul>
        </div>
        
        <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
          <div className="flex items-start">
            <Info className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
            <p className="text-blue-800 text-sm">
              Fill in the contact form, and we'll reach out to schedule your installation at a time that works for you.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
