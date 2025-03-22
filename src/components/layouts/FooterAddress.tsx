
import React from "react";
import { Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const FooterAddress = () => {
  return (
    <div className="md:col-span-5">
      <Separator className="my-6 bg-blue-700" />
      <address className="not-italic text-blue-200">
        <div>107 CR 2300N</div>
        <div>Dalton City, IL 61925</div>
        <div className="mt-2">
          <a 
            href="tel:2173306157" 
            className="flex items-center text-white font-semibold hover:text-blue-200 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            (217) 330-6157
          </a>
        </div>
      </address>
    </div>
  );
};

export default FooterAddress;
