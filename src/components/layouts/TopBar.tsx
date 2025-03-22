
import React from "react";
import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-blue-800 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span className="text-sm">Providing reliable internet to Central Illinois since 2006</span>
        <a 
          href="tel:2173306157" 
          className="flex items-center gap-1 text-sm hover:text-blue-200 transition-colors"
        >
          <Phone className="h-3 w-3" />
          <span>(217) 330-6157</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
