
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/maroa/HeroSection";
import MapSection from "@/components/maroa/MapSection";
import AttractionsSection from "@/components/maroa/AttractionsSection";
import QuestionsSection from "@/components/maroa/QuestionsSection";
import HappyCustomersSection from "@/components/maroa/HappyCustomersSection";
import FeaturesSection from "@/components/maroa/FeaturesSection";

const MaroaIL = () => {
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

export default MaroaIL;
