
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/daltoncity/HeroSection";
import MapSection from "@/components/daltoncity/MapSection";
import AttractionsSection from "@/components/daltoncity/AttractionsSection";
import QuestionsSection from "@/components/daltoncity/QuestionsSection";
import FeaturesSection from "@/components/daltoncity/FeaturesSection";

const DaltonCityIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <MapSection />
        <AttractionsSection />
        <QuestionsSection />
        <FeaturesSection />
      </div>
    </MainLayout>
  );
};

export default DaltonCityIL;
