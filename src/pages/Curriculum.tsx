
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LevelSection from "@/components/LevelSection";
import HeroSection from "@/components/curriculum/HeroSection";
import TeachingMethodology from "@/components/curriculum/TeachingMethodology";
import { level1Courses, level2Courses, level3Courses } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUp, Download, FileText, Share2 } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

const Curriculum = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Quick Navigation */}
        <section className="py-6 bg-white dark:bg-quantum-950 sticky top-[72px] z-40 border-b border-quantum-200 dark:border-quantum-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
                <ScrollLink
                  to="level-1"
                  smooth={true}
                  duration={500}
                  className="text-sm font-medium px-3 py-1 rounded-full bg-quantum-100 dark:bg-quantum-800 hover:bg-quantum-200 dark:hover:bg-quantum-700 cursor-pointer transition-colors"
                >
                  Level 1: Explorer
                </ScrollLink>
                <ScrollLink
                  to="level-2"
                  smooth={true}
                  duration={500}
                  className="text-sm font-medium px-3 py-1 rounded-full bg-quantum-100 dark:bg-quantum-800 hover:bg-quantum-200 dark:hover:bg-quantum-700 cursor-pointer transition-colors"
                >
                  Level 2: Builder
                </ScrollLink>
                <ScrollLink
                  to="level-3"
                  smooth={true}
                  duration={500}
                  className="text-sm font-medium px-3 py-1 rounded-full bg-quantum-100 dark:bg-quantum-800 hover:bg-quantum-200 dark:hover:bg-quantum-700 cursor-pointer transition-colors"
                >
                  Level 3: Innovator
                </ScrollLink>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Level 1 Courses */}
        <LevelSection
          level={1}
          title="Level 1: Quantum Explorer (Beginner)"
          description="Master the basics of quantum physics through games, stories, and hands-on activities."
          courses={level1Courses}
        />
        
        {/* Level 2 Courses */}
        <LevelSection
          level={2}
          title="Level 2: Quantum Builder (Intermediate)"
          description="Create quantum circuits and explore the fascinating world of qubits and quantum gates."
          courses={level2Courses}
        />
        
        {/* Level 3 Courses */}
        <LevelSection
          level={3}
          title="Level 3: Quantum Innovator (Advanced)"
          description="Apply quantum computing to machine learning and discover real-world applications."
          courses={level3Courses}
        />
        
        <TeachingMethodology />
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-quantum-100 to-energy-100 dark:from-quantum-900 dark:to-energy-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Ready to Start Your Quantum Journey?
              </motion.h2>
              <motion.p 
                className="text-lg text-quantum-700 dark:text-quantum-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of students exploring the fascinating world of quantum physics and computing.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button className="bg-quantum-600 hover:bg-quantum-700" size="lg" asChild>
                  <a href="/auth?signup=true">Sign Up Now</a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                  <a href="/curriculum.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-5 w-5" />
                    Download Full Curriculum
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      {showScrollToTop && (
        <ScrollLink
          to="level-1"
          smooth={true}
          duration={500}
          className="fixed bottom-6 right-6 p-3 bg-white dark:bg-quantum-800 rounded-full shadow-md cursor-pointer hover:shadow-lg transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-quantum-600 dark:text-quantum-300" />
        </ScrollLink>
      )}
      
      <Footer />
    </div>
  );
};

export default Curriculum;
