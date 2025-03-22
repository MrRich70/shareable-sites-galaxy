
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/laplace/HeroSection";
import MapSection from "@/components/laplace/MapSection";
import AttractionsSection from "@/components/laplace/AttractionsSection";
import QuestionsSection from "@/components/laplace/QuestionsSection";
import FeaturesSection from "@/components/laplace/FeaturesSection";
import FamilyStorySection from "@/components/laplace/FamilyStorySection";

const LaPlaceIL = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <MapSection />
        <AttractionsSection />
        <QuestionsSection />
        <FeaturesSection />
        <FamilyStorySection />
        
        {/* Citations Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Citations</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>[1] https://en.wikipedia.org/wiki/La_Place,_Illinois</p>
              <p>[2] https://dnr.illinois.gov</p>
              <p>[3] https://www.zillow.com/la-place-il/</p>
              <p>[4] https://www.illinois.gov</p>
              <p>[5] https://lasallecountyil.gov</p>
              <p>[6] https://www.ilsos.gov</p>
              <p>[7] https://illinoisstate.edu</p>
              <p>[8] https://www.tripadvisor.com/Tourism-g36225-La_Place_Illinois-Vacations.html</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default LaPlaceIL;
