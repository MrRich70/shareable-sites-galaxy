
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FooterLegalLinks = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Legal</h4>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/privacy" 
            className="text-blue-200 hover:text-white flex items-center"
            aria-label="View our Privacy Policy"
          >
            <ChevronRight className="h-4 w-4 mr-1" /> 
            <span>Privacy Policy</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/terms" 
            className="text-blue-200 hover:text-white flex items-center"
            aria-label="View our Terms of Service"
          >
            <ChevronRight className="h-4 w-4 mr-1" /> 
            <span>Terms of Service</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/disclaimer" 
            className="text-blue-200 hover:text-white flex items-center"
            aria-label="View our Disclaimer"
          >
            <ChevronRight className="h-4 w-4 mr-1" /> 
            <span>Disclaimer</span>
          </Link>
        </li>
        <li>
          <Link 
            to="/sitemap.xml" 
            className="text-blue-200 hover:text-white flex items-center"
            aria-label="View our Site Map"
          >
            <ChevronRight className="h-4 w-4 mr-1" /> 
            <span>Site Map</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLegalLinks;
