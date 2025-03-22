
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/oakley/HeroSection";
import MapSection from "@/components/oakley/MapSection";
import AttractionsSection from "@/components/oakley/AttractionsSection";
import QuestionsSection from "@/components/oakley/QuestionsSection";
import FeaturesSection from "@/components/oakley/FeaturesSection";

const OakleyIL = () => {
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

export default OakleyIL;
