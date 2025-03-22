
import React from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">NJoy Communications Internet Services</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:2173306157" 
              className="hidden md:flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>(217) 330-6157</span>
            </a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/service-packages" className={navigationMenuTriggerStyle()}>
                    Services
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="https://njoycom.uisp.com/crm/login" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={navigationMenuTriggerStyle()}
                  >
                    Billing
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/support" className={navigationMenuTriggerStyle()}>
                    Support
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    About Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="tel:2173306157" className="md:hidden">
              <Button variant="outline" size="sm" className="border-blue-600 text-blue-700">
                <Phone className="h-4 w-4 mr-1" />
                Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
