import React from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-700">NJoy Communications Internet Services</span>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                            to="/services"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Internet Services
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Discover our residential and business internet plans.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <MenuLink href="/residential" title="Residential">
                        High-speed internet for your home
                      </MenuLink>
                      <MenuLink href="/business" title="Business">
                        Reliable solutions for your company
                      </MenuLink>
                      <MenuLink href="/equipment" title="Equipment">
                        Routers, modems, and more
                      </MenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/billing" className={navigationMenuTriggerStyle()}>
                    Billing
                  </Link>
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
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">NJoy Communications Internet Services</h4>
              <p className="text-blue-200">Fast, reliable internet service for residential and business customers.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-blue-200 hover:text-white">Services</Link></li>
                <li><Link to="/billing" className="text-blue-200 hover:text-white">Billing</Link></li>
                <li><Link to="/support" className="text-blue-200 hover:text-white">Support</Link></li>
                <li><Link to="/contact" className="text-blue-200 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-blue-200 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-blue-200 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/disclaimer" className="text-blue-200 hover:text-white">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-blue-200">
                <div>107 CR 2300N</div>
                <div>Dalton City, IL 61925</div>
                <div className="mt-2">Phone: (217) 330-6157</div>
              </address>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-300">
            <p>&copy; {new Date().getFullYear()} NJoy Communications Internet Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const MenuLink = ({ href, title, children }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900"
          to={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default MainLayout;
