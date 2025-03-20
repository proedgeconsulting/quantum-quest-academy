import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedCoursesSection from "@/components/home/FeaturedCoursesSection";
import WhyQuantumQuestSection from "@/components/home/WhyQuantumQuestSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/Footer";
import SubscriptionPromo from "@/components/subscription/SubscriptionPromo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main content sections */}
      <HeroSection />
      <StatsSection />
      <FeaturedCoursesSection />
      <WhyQuantumQuestSection />
      
      {/* Add the subscription promo section */}
      <SubscriptionPromo />
      
      <TestimonialsSection />
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
