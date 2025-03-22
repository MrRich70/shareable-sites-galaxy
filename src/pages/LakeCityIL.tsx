
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/lakecity/HeroSection";
import MapSection from "@/components/lakecity/MapSection";
import AttractionsSection from "@/components/lakecity/AttractionsSection";
import QuestionsSection from "@/components/lakecity/QuestionsSection";
import HappyCustomersSection from "@/components/lakecity/HappyCustomersSection";
import FeaturesSection from "@/components/lakecity/FeaturesSection";
import FamilyStorySection from "@/components/lakecity/FamilyStorySection";

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
        <FamilyStorySection />
        
        {/* Citations Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Citations</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>[1] https://en.wikipedia.org/wiki/Lake_City,_Illinois</p>
              <p>[2] https://www.census.gov/</p>
              <p>[3] https://datausa.io/profile/geo/lake-city-il</p>
              <p>[4] https://www.moultrieil.gov/</p>
              <p>[5] https://www.illinois.gov</p>
              <p>[6] https://www.illinoishistory.gov</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default LakeCityIL;
