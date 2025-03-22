
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/mtzion/HeroSection";
import MapSection from "@/components/mtzion/MapSection";
import AttractionsSection from "@/components/mtzion/AttractionsSection";
import QuestionsSection from "@/components/mtzion/QuestionsSection";
import FeaturesSection from "@/components/mtzion/FeaturesSection";
import FamilyStorySection from "@/components/mtzion/FamilyStorySection";
import MtZionBannerSection from "@/components/mtzion/MtZionBannerSection";

const MtZionIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <MtZionBannerSection />
        <MapSection />
        <AttractionsSection />
        <FamilyStorySection />
        <QuestionsSection />
        <FeaturesSection />
      </div>
    </MainLayout>
  );
};

export default MtZionIL;
