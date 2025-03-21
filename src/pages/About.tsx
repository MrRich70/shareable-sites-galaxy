
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Phone, Users, Home, Building2, Calendar, Award, Signal, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">About NJoy Communications</h1>
          <p className="text-xl text-gray-700">
            A family-owned business bringing reliable internet service to Central Illinois since 2006.
          </p>
        </div>

        {/* Owners Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Meet the Owners</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/2b9280b5-ed3c-45a6-a76a-d616ba739783.png" 
                  alt="NJoy Communications Owners" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="md:w-1/2 p-6 flex flex-col justify-center">
                <div className="flex items-center mb-3 text-blue-600">
                  <Heart className="h-6 w-6 mr-2" />
                  <span className="font-semibold">Married since 2002</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Family at the Heart of Our Business</h3>
                <p className="text-gray-700 mb-4">
                  The foundation of NJoy Communications is built on family values. Our owners have been married since 2002 
                  and have blessed with 3 children and 7 grandchildren.
                </p>
                <p className="text-gray-700 mb-4">
                  Their commitment to family extends to how they run the business, treating customers and team members like 
                  part of their extended family. This personal touch is what sets NJoy Communications apart from larger providers.
                </p>
                <p className="text-gray-700">
                  When you call NJoy Communications, you're not just another customer – you're speaking with people who care 
                  about connecting your family to what matters most.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Story</h2>
          <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-4">
              NJoy Communications was founded in 2006 as a family-owned and operated business with a simple mission: 
              to bring reliable internet access to underserved communities in Central Illinois.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We started small, working directly with local farmers and grain elevators to install equipment 
              that would expand internet coverage throughout the region. What began as a modest operation has 
              grown into a trusted provider serving residents and businesses across Central Illinois.
            </p>
            <p className="text-lg text-gray-700">
              Throughout our growth, we've maintained our commitment to personal service and community values. 
              As a local business, we understand the unique needs of the area and take pride in delivering 
              internet solutions that keep our neighbors connected.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Journey</h2>
          <div className="space-y-8">
            <TimelineItem 
              year="2006" 
              title="Founded in Central Illinois"
              description="NJoy Communications was established as a family business to provide internet service to underserved rural areas."
            />
            <TimelineItem 
              year="2008" 
              title="First Agricultural Partnerships"
              description="Began working with local farms and grain elevators to expand coverage in rural communities."
            />
            <TimelineItem 
              year="2012" 
              title="Expanded Residential Services"
              description="Grew our network to provide reliable internet to more residential customers across the region."
            />
            <TimelineItem 
              year="2015" 
              title="Business Solutions Launch"
              description="Introduced specialized service packages for local businesses and organizations."
            />
            <TimelineItem 
              year="Present" 
              title="Continuing to Grow"
              description="Still family-owned and operated, we continue to expand our coverage and improve our services."
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard 
              title="Community First" 
              description="We're committed to serving our local community with honesty and integrity."
              icon={<Users className="h-10 w-10" />}
            />
            <ValueCard 
              title="Quality Service" 
              description="We deliver reliable internet service backed by responsive local support."
              icon={<Award className="h-10 w-10" />}
            />
            <ValueCard 
              title="Rural Focus" 
              description="We specialize in bringing connectivity to areas overlooked by larger providers."
              icon={<Signal className="h-10 w-10" />}
            />
          </div>
        </div>

        {/* Service Area */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Service Area</h2>
          <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-700 mr-2" />
              <h3 className="text-xl font-semibold text-blue-900">Central Illinois</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              We proudly serve communities throughout Central Illinois, focusing on areas where reliable 
              internet options are limited. Our network has been strategically built to reach rural and 
              underserved locations.
            </p>
            <p className="text-lg text-gray-700">
              From residential homes to local businesses, farms to grain elevators, we're committed to 
              connecting Central Illinois with dependable internet service.
            </p>
          </div>
        </div>

        {/* Contact Section */}
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
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Online
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, description }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
          <Calendar className="h-6 w-6" />
        </div>
        <div className="h-full w-0.5 bg-blue-200"></div>
      </div>
      <div className="pt-1 pb-8">
        <div className="text-blue-700 font-bold text-lg">{year}</div>
        <div className="font-semibold text-xl text-blue-900 mb-2">{title}</div>
        <div className="text-gray-700">{description}</div>
      </div>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-center mb-2 text-blue-900">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default About;
