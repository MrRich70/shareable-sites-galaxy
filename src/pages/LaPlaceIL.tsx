
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
    <MainLayout
      title="Internet Service Provider in La Place, IL | NJoy Communications"
      description="Fast, reliable internet service for La Place, IL residents and businesses. No contracts, local support, and affordable plans for rural internet connectivity."
    >
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
              <p>[1] <a href="https://en.wikipedia.org/wiki/La_Place,_Illinois" className="hover:underline text-blue-700">Wikipedia - La Place, Illinois</a></p>
              <p>[2] <a href="https://dnr.illinois.gov" className="hover:underline text-blue-700">Illinois Department of Natural Resources</a></p>
              <p>[3] <a href="https://www.zillow.com/la-place-il/" className="hover:underline text-blue-700">Zillow - La Place, IL Real Estate</a></p>
              <p>[4] <a href="https://www.illinois.gov" className="hover:underline text-blue-700">State of Illinois</a></p>
              <p>[5] <a href="https://lasallecountyil.gov" className="hover:underline text-blue-700">LaSalle County, Illinois</a></p>
              <p>[6] <a href="https://www.ilsos.gov" className="hover:underline text-blue-700">Illinois Secretary of State</a></p>
              <p>[7] <a href="https://illinoisstate.edu" className="hover:underline text-blue-700">Illinois State University</a></p>
              <p>[8] <a href="https://www.tripadvisor.com/Tourism-g36225-La_Place_Illinois-Vacations.html" className="hover:underline text-blue-700">TripAdvisor - La Place, Illinois</a></p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default LaPlaceIL;
