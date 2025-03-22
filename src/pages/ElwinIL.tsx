
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/elwin/HeroSection";
import MapSection from "@/components/elwin/MapSection";
import AttractionsSection from "@/components/elwin/AttractionsSection";
import QuestionsSection from "@/components/elwin/QuestionsSection";
import HappyCustomersSection from "@/components/elwin/HappyCustomersSection";
import FeaturesSection from "@/components/elwin/FeaturesSection";
import FamilyStorySection from "@/components/elwin/FamilyStorySection";

const ElwinIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <MapSection />
        <AttractionsSection />
        <FamilyStorySection />
        <QuestionsSection />
        <HappyCustomersSection />
        <FeaturesSection />
      </div>
    </MainLayout>
  );
};

export default ElwinIL;
