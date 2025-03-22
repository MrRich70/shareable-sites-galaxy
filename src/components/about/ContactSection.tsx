
import React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Get In Touch</h2>
      <p className="text-xl text-gray-700 mb-8">
        Have questions about our services or coverage area? We're here to help!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="tel:2173306157">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Phone className="h-5 w-5 mr-2" />
            Call Us: (217) 330-6157
          </Button>
        </a>
        <Link to="/support">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Contact Online
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
