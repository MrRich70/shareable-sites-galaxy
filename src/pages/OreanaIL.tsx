
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/oreana/HeroSection";
import MapSection from "@/components/oreana/MapSection";
import AttractionsSection from "@/components/oreana/AttractionsSection";
import QuestionsSection from "@/components/oreana/QuestionsSection";
import HappyCustomersSection from "@/components/oreana/HappyCustomersSection";
import FeaturesSection from "@/components/oreana/FeaturesSection";

const OreanaIL = () => {
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

export default OreanaIL;
