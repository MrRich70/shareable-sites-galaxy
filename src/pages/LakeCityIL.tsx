
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/lakecity/HeroSection";
import MapSection from "@/components/lakecity/MapSection";
import AttractionsSection from "@/components/lakecity/AttractionsSection";
import QuestionsSection from "@/components/lakecity/QuestionsSection";
import HappyCustomersSection from "@/components/lakecity/HappyCustomersSection";
import FeaturesSection from "@/components/lakecity/FeaturesSection";

const LakeCityIL = () => {
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

export default LakeCityIL;
