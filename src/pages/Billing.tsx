
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, FileText } from "lucide-react";

const Billing = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">Online Bill Pay</h1>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Manage your NJoy Communications account with our quick, convenient, easy, and secure online bill payment system.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <BillingCard 
            icon={<CreditCard className="h-10 w-10" />}
            title="Pay Your Bill"
            description="Make a one-time payment using your credit card or bank account."
            buttonText="Pay Now"
            buttonLink="https://njoycom.uisp.com/crm/login"
            isExternal={true}
          />
          
          <BillingCard 
            icon={<DollarSign className="h-10 w-10" />}
            title="AutoPay Setup"
            description="Never miss a payment by setting up automatic monthly payments."
            buttonText="Set Up AutoPay"
            buttonLink="https://njoycom.uisp.com/crm/login"
            isExternal={true}
          />
          
          <BillingCard 
            icon={<FileText className="h-10 w-10" />}
            title="View Statements"
            description="Access your current and past statements online."
            buttonText="View Statements"
            buttonLink="https://njoycom.uisp.com/crm/login"
            isExternal={true}
          />
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Payment Methods</CardTitle>
            <CardDescription>We accept the following payment methods for your convenience.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Online Payment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Credit/Debit Cards
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Bank Account (ACH)
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Digital Wallets
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Other Payment Methods</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    By Phone: (217) 330-6157
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Mail-in Payment
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    In-Person at Our Office
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

// Billing Card Component
const BillingCard = ({ icon, title, description, buttonText, buttonLink, isExternal }) => {
  return (
    <Card className="text-center">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="mb-4 mt-6 text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {isExternal ? (
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700">
              {buttonText}
            </Button>
          </a>
        ) : (
          <Button className="bg-blue-600 hover:bg-blue-700">
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Billing;
