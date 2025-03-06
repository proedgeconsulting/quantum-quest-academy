
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhyQuantumQuestSection from "@/components/home/WhyQuantumQuestSection";
import FeaturedCoursesSection from "@/components/home/FeaturedCoursesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Why Quantum Quest Section */}
        <WhyQuantumQuestSection />
        
        {/* Featured Courses Section */}
        <FeaturedCoursesSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
