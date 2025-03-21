
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/milmine/HeroSection";
import MapSection from "@/components/milmine/MapSection";
import AttractionsSection from "@/components/milmine/AttractionsSection";
import QuestionsSection from "@/components/milmine/QuestionsSection";
import HappyCustomersSection from "@/components/milmine/HappyCustomersSection";
import FeaturesSection from "@/components/milmine/FeaturesSection";

const MilmineIL = () => {
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

export default MilmineIL;
