
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/bilmine/HeroSection";
import MapSection from "@/components/bilmine/MapSection";
import AttractionsSection from "@/components/bilmine/AttractionsSection";
import QuestionsSection from "@/components/bilmine/QuestionsSection";
import HappyCustomersSection from "@/components/bilmine/HappyCustomersSection";
import FeaturesSection from "@/components/bilmine/FeaturesSection";
import FamilyStorySection from "@/components/bilmine/FamilyStorySection";

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
        <FamilyStorySection />
        
        {/* Citations Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Citations</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>[1] https://en.wikipedia.org/wiki/Milmine,_Illinois</p>
              <p>[2] https://www.census.gov/</p>
              <p>[3] https://datausa.io/profile/geo/milmine-il</p>
              <p>[4] https://www.piattcounty.org/</p>
              <p>[5] https://www.illinois.gov</p>
              <p>[6] https://www.illinoishistory.gov</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default BilmineIL;
