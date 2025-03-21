
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, CreditCard, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { NavigationMenu } from "@/components/ui/navigation-menu";

const Index = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Welcome to NJoy Communications Internet Services
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Fast, reliable internet service for residential and business customers.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              <ServiceCard 
                title="New Service" 
                description="Shop for residential & business services."
                icon={<Globe className="h-10 w-10" />}
                path="/services"
              />
              
              <ServiceCard 
                title="Online Bill Pay" 
                description="Quick, convenient, easy and secure."
                icon={<CreditCard className="h-10 w-10" />}
                path="/billing"
              />
              
              <ServiceCard 
                title="Support" 
                description="Contact us for tech support & customer service."
                icon={<LifeBuoy className="h-10 w-10" />}
                path="/support"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Choose NJoy Communications Internet Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureItem 
                title="Fast Speeds" 
                description="Get the reliability and speed you need for streaming, gaming, and working from home."
              />
              <FeatureItem 
                title="Local Support" 
                description="Our local technicians provide personalized support when you need it."
              />
              <FeatureItem 
                title="No Contracts" 
                description="Enjoy our services without being locked into long-term commitments."
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, icon, path }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link to={path}>
        <CardContent className="p-6 text-center flex flex-col items-center justify-center min-h-[220px] cursor-pointer">
          <div className="mb-4 text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <Button className="mt-4 bg-blue-600 hover:bg-blue-700" size="lg">
            Learn More
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
};

// Feature Item Component
const FeatureItem = ({ title, description }) => {
  return (
    <div className="text-center p-4">
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Index;
