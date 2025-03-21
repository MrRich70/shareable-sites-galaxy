
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/bement/HeroSection";
import MapSection from "@/components/bement/MapSection";
import AttractionsSection from "@/components/bement/AttractionsSection";
import QuestionsSection from "@/components/bement/QuestionsSection";
import HappyCustomersSection from "@/components/bement/HappyCustomersSection";
import FeaturesSection from "@/components/bement/FeaturesSection";

const BementIL = () => {
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

export default BementIL;
