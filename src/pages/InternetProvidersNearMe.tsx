
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/providers/HeroSection";
import ProvidersMapSection from "@/components/providers/ProvidersMapSection";
import ProvidersInfoSection from "@/components/providers/ProvidersInfoSection";
import ProvidersFAQSection from "@/components/providers/ProvidersFAQSection";
import ProvidersFeaturesSection from "@/components/providers/ProvidersFeaturesSection";
import ProvidersStorySection from "@/components/providers/ProvidersStorySection";
import ProvidersBannerSection from "@/components/providers/ProvidersBannerSection";

const InternetProvidersNearMe = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <ProvidersBannerSection />
        <ProvidersMapSection />
        <ProvidersInfoSection />
        <ProvidersStorySection />
        <ProvidersFAQSection />
        <ProvidersFeaturesSection />
      </div>
    </MainLayout>
  );
};

export default InternetProvidersNearMe;
