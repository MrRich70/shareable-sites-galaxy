
import React from "react";
import { Link } from "react-router-dom";
import { Phone, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-blue-200 hover:text-white flex items-center"><ChevronRight className="h-4 w-4 mr-1" /> Disclaimer</Link></li>
            </ul>
          </div>
          <FooterLocationLinks />
          <FooterAddress />
        </div>
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} NJoy Communications Internet Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
