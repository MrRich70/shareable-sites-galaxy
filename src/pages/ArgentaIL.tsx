
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, CreditCard, LifeBuoy, MapPin, Building } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import CityMap from "@/components/maps/CityMap";

const ArgentaIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Argenta IL Internet Service Provider
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Fast, reliable internet service for Argenta, IL residents and businesses.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              <ServiceCard 
                title="New Service" 
                description="Shop for residential & business services in Argenta."
                icon={<Globe className="h-10 w-10" />}
                path="/service-packages"
                isExternal={false}
              />
              
              <ServiceCard 
                title="Online Bill Pay" 
                description="Quick, convenient, easy and secure."
                icon={<CreditCard className="h-10 w-10" />}
                path="https://njoycom.uisp.com/crm/login"
                isExternal={true}
              />
              
              <ServiceCard 
                title="Support" 
                description="Contact us for tech support & customer service."
                icon={<LifeBuoy className="h-10 w-10" />}
                path="/support"
                isExternal={false}
              />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Argenta IL Internet Service Provider - Service Area
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                NJoy Communications provides high-speed internet throughout Argenta, IL. 
                View our service area below or contact us to check availability at your address.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <CityMap city="Argenta, IL" mapHeight="500px" />
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h4 className="text-2xl font-bold text-blue-900 mb-4">
                Argenta IL Internet Service Provider - Local Attractions
              </h4>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover all that Argenta has to offer with reliable internet from NJoy Communications.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto prose prose-blue lg:prose-lg">
              <p>Here are the main attractions and activities in Argenta, IL:</p>
              
              <ol className="space-y-4 list-decimal pl-6">
                <li><strong>Weedman Park</strong> - A local park offering outdoor space for relaxation and recreation.</li>
                <li><strong>Stag-R-Inn</strong> - A popular American bar and restaurant known for its casual atmosphere.</li>
                <li><strong>The FourNine</strong> - A beer bar and soup spot highly rated by locals.</li>
                <li><strong>Overlook Adventure Park</strong> - A nearby attraction featuring mini-golf, zip lines, and other activities.</li>
                <li><strong>Rock Springs Conservation Area</strong> - Ideal for hiking, birdwatching, and enjoying nature.</li>
                <li><strong>Scovill Zoo</strong> - Located in Decatur, this zoo is a short drive from Argenta and offers family-friendly activities.</li>
                <li><strong>Monticello Railway Museum</strong> - A historical site showcasing vintage trains and offering train rides.</li>
                <li><strong>Allerton Park & Retreat Center</strong> - Known for its scenic hiking trails and events like Hot Chocolate Hikes.</li>
                <li><strong>Apple & Pork Festival</strong> - A nearby annual event featuring food, crafts, and entertainment.</li>
                <li><strong>Clintonia Eagle Theater</strong> - A local theater offering movies and live performances.</li>
              </ol>
              
              <p className="text-sm text-gray-500 mt-8">
                These attractions provide a mix of outdoor activities, dining options, cultural experiences, and family-friendly entertainment.
              </p>
              
              <div className="text-xs text-gray-400 mt-8">
                <p>Citations:</p>
                <p>[1] https://www.expedia.com/Argenta.dx3000346096</p>
                <p>[2] https://www.argentail.com</p>
                <p>[3] https://www.eventbrite.com/ttd/il--argenta/</p>
                <p>[4] https://allevents.in/argenta</p>
                <p>[5] https://local.aarp.org/argenta-il/things-to-do/</p>
                <p>[6] https://www.tripadvisor.com/Attractions-g29274-Activities-Argenta_Illinois.html</p>
                <p>[7] https://www.yelp.com/city/argenta-il-us</p>
                <p>[8] https://www.yelp.com/search?find_desc=Things+To+Do&find_loc=US-51%2C+Argenta%2C+IL+62501</p>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Customers Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2">
                <img 
                  src="/lovable-uploads/9f43d6c3-740d-4926-a07a-6946d9a448f7.png" 
                  alt="Happy family enjoying NJoy internet with their dog"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Experience Argenta IL Internet Service Provider That Brings Joy
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  At NJoy Communications, we believe that reliable internet is essential for Argenta families and businesses. 
                  Whether you're working from home, streaming your favorite shows, or staying connected with loved ones, 
                  our internet service keeps you connected without interruption.
                </p>
                <Link to="/service-packages">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Find Your Perfect Plan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              Why Choose NJoy Communications Internet in Argenta, IL?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureItem 
                title="Fast Speeds" 
                description="Get the reliability and speed Argenta residents need for streaming, gaming, and working from home."
              />
              <FeatureItem 
                title="Local Support" 
                description="Our local technicians provide personalized support to Argenta customers when you need it."
              />
              <FeatureItem 
                title="No Contracts" 
                description="Enjoy our services in Argenta without being locked into long-term commitments."
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, icon, path, isExternal }) => {
  const cardContent = (
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
  );

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      {isExternal ? (
        <a href={path} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      ) : (
        <Link to={path}>
          {cardContent}
        </Link>
      )}
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

export default ArgentaIL;
