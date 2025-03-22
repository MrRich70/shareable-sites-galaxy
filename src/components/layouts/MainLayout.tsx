import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-blue-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-sm">Providing reliable internet to Central Illinois since 2005</span>
          <a 
            href="tel:2173306157" 
            className="flex items-center gap-1 text-sm hover:text-blue-200 transition-colors"
          >
            <Phone className="h-3 w-3" />
            <span>(217) 330-6157</span>
          </a>
        </div>
      </div>
      
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

      <main className="flex-1">
        {children}
      </main>

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
            <div className="md:col-span-5">
              <h4 className="text-lg font-semibold mb-4">Coverage Locations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <Link to="/argenta-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Argenta, IL
                </Link>
                <Link to="/bement-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Bement, IL
                </Link>
                <Link to="/milmine-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Milmine, IL
                </Link>
                <Link to="/cerro-gordo-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Cerro Gordo, IL
                </Link>
                <Link to="/elwin-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Elwin, IL
                </Link>
                <Link to="/la-place-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> La Place, IL
                </Link>
                <Link to="/lake-city-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Lake City, IL
                </Link>
                <Link to="/macon-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Macon, IL
                </Link>
                <Link to="/mt-zion-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Mt Zion, IL
                </Link>
                <Link to="/oakley-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Oakley, IL
                </Link>
                <Link to="/oreana-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Oreana, IL
                </Link>
                <Link to="/dalton-city-il-internet-service-provider" className="text-blue-200 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Dalton City, IL
                </Link>
              </div>
            </div>
            
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
          </div>
          <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300">
            <p>&copy; {new Date().getFullYear()} NJoy Communications Internet Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
