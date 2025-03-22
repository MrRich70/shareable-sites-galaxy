
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/oreana/HeroSection";
import MapSection from "@/components/oreana/MapSection";
import AttractionsSection from "@/components/oreana/AttractionsSection";
import QuestionsSection from "@/components/oreana/QuestionsSection";
import FamilyStorySection from "@/components/oreana/FamilyStorySection";
import FeaturesSection from "@/components/oreana/FeaturesSection";
import CitationsSection from "@/components/oreana/CitationsSection";
import OreanaBannerSection from "@/components/oreana/OreanaBannerSection";

const OreanaIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <OreanaBannerSection />
        <MapSection />
        <AttractionsSection />
        <QuestionsSection />
        <FamilyStorySection />
        <FeaturesSection />
        <CitationsSection />
      </div>
    </MainLayout>
  );
};

export default OreanaIL;
