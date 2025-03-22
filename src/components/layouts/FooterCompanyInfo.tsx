
import React from "react";
import { Phone } from "lucide-react";

const FooterCompanyInfo = () => {
  return (
    <div className="md:col-span-2">
      <h4 className="text-lg font-semibold mb-4">NJoy Communications Internet Services</h4>
      <p className="text-blue-200">Fast, reliable internet service for residential and business customers.</p>
      <a 
        href="tel:2173306157"
        className="flex items-center mt-4 text-white font-semibold hover:text-blue-200 transition-colors"
      >
        <Phone className="h-5 w-5 mr-2" />
        <span>(217) 330-6157</span>
      </a>
    </div>
  );
};

export default FooterCompanyInfo;
