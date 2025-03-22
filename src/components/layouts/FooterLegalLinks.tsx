
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FooterLegalLinks = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Legal</h4>
      <ul className="space-y-2">
        <li><Link to="/privacy" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Privacy Policy</Link></li>
        <li><Link to="/terms" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Terms of Service</Link></li>
        <li><Link to="/disclaimer" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Disclaimer</Link></li>
      </ul>
    </div>
  );
};

export default FooterLegalLinks;
