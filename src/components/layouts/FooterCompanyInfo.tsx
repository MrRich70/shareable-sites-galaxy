
import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FooterCompanyInfo = () => {
  return (
    <div className="md:col-span-2">
      <h4 className="text-lg font-semibold mb-4">NJoy Communications Internet Services</h4>
      <p className="text-blue-200">Fast, reliable internet service for residential and business customers.</p>
      <a 
        href="tel:2173306157"
        className="flex items-center mt-4 text-white font-semibold hover:text-blue-200 transition-colors"
        aria-label="Call our customer service at (217) 330-6157"
      >
        <Phone className="h-5 w-5 mr-2" />
        <span>(217) 330-6157</span>
      </a>
      <div className="mt-4 space-x-4">
        <Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link>
        <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link>
        <Link to="/internet-providers-near-me" className="text-blue-200 hover:text-white transition-colors">Service Areas</Link>
      </div>
      
      {/* Structured data for organization */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NJoy Communications Internet Services",
          "url": "https://njoycom.com",
          "logo": "https://njoycom.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-217-330-6157",
            "contactType": "customer service",
            "areaServed": "Central Illinois",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Central Illinois",
            "addressRegion": "IL",
            "addressCountry": "US"
          }
        }
      `}} />
    </div>
  );
};

export default FooterCompanyInfo;
