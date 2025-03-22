
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Wifi, Zap, Award } from "lucide-react";
import PackageCard from "@/components/services/PackageCard";
import PageHeader from "@/components/services/PageHeader";
import CallToAction from "@/components/services/CallToAction";
import ServiceSchema from "@/components/services/ServiceSchema";

const ServicePackages = () => {
  const commonFeatures = [
    "No Data Caps",
    "No Contracts",
    "Local 24/7 Technical Support"
  ];

  const packages = [
    {
      icon: <Wifi className="h-12 w-12" />,
      name: "Connected",
      price: "50",
      features: [
        "Great for browsing & email",
        "Stream on 1-2 devices",
        "Video calls & remote work",
        ...commonFeatures
      ],
      recommended: false,
      packageId: "connected",
      description: "Basic internet package for browsing, email, and light streaming"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      name: "Accelerated",
      price: "75",
      features: [
        "Perfect for multiple devices",
        "Unlimited streaming",
        "Online gaming",
        "Smart home devices",
        ...commonFeatures
      ],
      recommended: true,
      packageId: "accelerated",
      description: "Mid-tier internet package for multiple devices, streaming and gaming"
    },
    {
      icon: <Award className="h-12 w-12" />,
      name: "Ultra",
      price: "100",
      features: [
        "Best for large households",
        "Simultaneous streaming",
        "Competitive gaming",
        "Large file uploads/downloads",
        "Smart home & IoT devices",
        ...commonFeatures
      ],
      recommended: false,
      packageId: "ultra",
      description: "Premium internet package for large households with high bandwidth needs"
    }
  ];

  const schemaPackages = packages.map(pkg => ({
    name: `${pkg.name} Internet Package`,
    description: pkg.description,
    price: pkg.price + ".00"
  }));

  return (
    <MainLayout
      title="Internet Service Packages | NJoy Communications"
      description="Choose from a variety of internet packages in Central Illinois. No data caps, no contracts, and 24/7 local support. Find the perfect plan for your needs."
    >
      <div className="container mx-auto px-4 py-12">
        <PageHeader 
          title="Internet Service Packages"
          description="Choose the perfect internet package for your needs. All of our plans come with no data caps, no contracts, and 24/7 local technical support."
        />
        
        {/* Package Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              icon={pkg.icon}
              name={pkg.name}
              price={pkg.price}
              features={pkg.features}
              recommended={pkg.recommended}
              packageId={pkg.packageId}
            />
          ))}
        </div>

        <CallToAction 
          title="Ready to Get Connected?"
          description="Contact us today to learn more about our services or to schedule an installation."
          phoneNumber="(217) 330-6157"
          contactPath="/contact"
        />
        
        <ServiceSchema packages={schemaPackages} />
      </div>
    </MainLayout>
  );
};

export default ServicePackages;
