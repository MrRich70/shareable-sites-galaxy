
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  const location = useLocation();
  const [selectedPackage, setSelectedPackage] = useState("connected");
  
  // Parse the query parameters to get the selected package
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const packageParam = params.get("package");
    
    if (packageParam) {
      const packageValue = packageParam.toLowerCase();
      setSelectedPackage(packageValue);
    }
  }, [location.search]);

  return (
    <MainLayout
      title="Contact NJoy Communications | Internet Service in Central Illinois"
      description="Get in touch with NJoy Communications for fast, reliable internet service in Central Illinois. Contact us online or call (217) 330-6157 for immediate assistance."
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Get Connected with NJoy</h1>
          <p className="text-xl text-gray-700">
            We're excited to bring fast, reliable internet to your home or business!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ContactInfo />
          
          {/* Contact Form */}
          <ContactForm initialPackage={selectedPackage} />
        </div>
        
        {/* Structured data for contact page */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact NJoy Communications",
            "description": "Contact page for NJoy Communications internet services",
            "mainEntity": {
              "@type": "Organization",
              "name": "NJoy Communications Internet Services",
              "telephone": "+1-217-330-6157",
              "email": "info@njoycom.com"
            }
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default Contact;
