
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/argenta/HeroSection";
import MapSection from "@/components/argenta/MapSection";
import AttractionsSection from "@/components/argenta/AttractionsSection";
import QuestionsSection from "@/components/argenta/QuestionsSection";
import HappyCustomersSection from "@/components/argenta/HappyCustomersSection";
import FeaturesSection from "@/components/argenta/FeaturesSection";

const ArgentaIL = () => {
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

export default ArgentaIL;
