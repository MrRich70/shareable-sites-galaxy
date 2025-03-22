
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/macon/HeroSection";
import MapSection from "@/components/macon/MapSection";
import AttractionsSection from "@/components/macon/AttractionsSection";
import QuestionsSection from "@/components/macon/QuestionsSection";
import FamilyStorySection from "@/components/macon/FamilyStorySection";
import FeaturesSection from "@/components/macon/FeaturesSection";
import CitationsSection from "@/components/macon/CitationsSection";
import MaconBannerSection from "@/components/macon/MaconBannerSection";

const MaconIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <MapSection />
        <AttractionsSection />
        <MaconBannerSection />
        <FamilyStorySection />
        <QuestionsSection />
        <FeaturesSection />
        <CitationsSection />
      </div>
    </MainLayout>
  );
};

export default MaconIL;
