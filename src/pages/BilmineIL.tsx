
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/bilmine/HeroSection";
import MapSection from "@/components/bilmine/MapSection";
import AttractionsSection from "@/components/bilmine/AttractionsSection";
import QuestionsSection from "@/components/bilmine/QuestionsSection";
import HappyCustomersSection from "@/components/bilmine/HappyCustomersSection";
import FeaturesSection from "@/components/bilmine/FeaturesSection";

const BilmineIL = () => {
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

export default BilmineIL;
