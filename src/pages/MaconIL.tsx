
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/macon/HeroSection";
import MapSection from "@/components/macon/MapSection";
import AttractionsSection from "@/components/macon/AttractionsSection";
import QuestionsSection from "@/components/macon/QuestionsSection";
import HappyCustomersSection from "@/components/macon/HappyCustomersSection";
import FeaturesSection from "@/components/macon/FeaturesSection";

const MaconIL = () => {
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

export default MaconIL;
