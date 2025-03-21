
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/cerrogordo/HeroSection";
import MapSection from "@/components/cerrogordo/MapSection";
import AttractionsSection from "@/components/cerrogordo/AttractionsSection";
import QuestionsSection from "@/components/cerrogordo/QuestionsSection";
import HappyCustomersSection from "@/components/cerrogordo/HappyCustomersSection";
import FeaturesSection from "@/components/cerrogordo/FeaturesSection";

const CerroGordoIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <MapSection />
        <AttractionsSection />
        <QuestionsSection />
        <HappyCustomersSection />
        <FeaturesSection />
      </div>
    </MainLayout>
  );
};

export default CerroGordoIL;
