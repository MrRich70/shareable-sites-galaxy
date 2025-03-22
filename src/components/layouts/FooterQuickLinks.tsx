
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FooterQuickLinks = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><Link to="/service-packages" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Services</Link></li>
        <li><a href="https://njoycom.uisp.com/crm/login" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Billing</a></li>
        <li><Link to="/support" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Support</Link></li>
        <li><Link to="/support" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Contact</Link></li>
        <li><Link to="/internet-providers-near-me" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Internet Providers Near Me</Link></li>
      </ul>
    </div>
  );
};

export default FooterQuickLinks;
