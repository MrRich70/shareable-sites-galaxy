
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/laplace/HeroSection";
import MapSection from "@/components/laplace/MapSection";
import AttractionsSection from "@/components/laplace/AttractionsSection";
import QuestionsSection from "@/components/laplace/QuestionsSection";
import HappyCustomersSection from "@/components/laplace/HappyCustomersSection";
import FeaturesSection from "@/components/laplace/FeaturesSection";

const LaPlaceIL = () => {
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

export default LaPlaceIL;
