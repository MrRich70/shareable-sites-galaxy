
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/about/HeroSection";
import OwnersSection from "@/components/about/OwnersSection";
import StorySection from "@/components/about/StorySection";
import TimelineSection from "@/components/about/TimelineSection";
import ValuesSection from "@/components/about/ValuesSection";
import ServiceAreaSection from "@/components/about/ServiceAreaSection";
import ContactSection from "@/components/about/ContactSection";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <HeroSection />

        {/* Owners Section */}
        <OwnersSection />

        {/* Our Story Section */}
        <StorySection />

        {/* Timeline */}
        <TimelineSection />

        {/* Values Section */}
        <ValuesSection />

        {/* Service Area */}
        <ServiceAreaSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </MainLayout>
  );
};

export default About;
