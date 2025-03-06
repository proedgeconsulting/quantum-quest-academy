
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Atom, Brain, CircuitBoard, Play, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedCoursesSection from "@/components/home/FeaturedCoursesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyQuantumQuestSection from "@/components/home/WhyQuantumQuestSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-quantum-100 to-quantum-200 dark:from-quantum-900 dark:to-quantum-800 py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-40 w-40 bg-quantum-300/20 dark:bg-quantum-600/20 rounded-full -top-10 -left-10 animate-float"></div>
            <div className="absolute h-60 w-60 bg-quantum-400/10 dark:bg-quantum-500/10 rounded-full top-20 right-20 animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute h-20 w-20 bg-energy-300/20 dark:bg-energy-500/20 rounded-full bottom-10 left-1/4 animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.div 
                  className="mb-6 inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-quantum-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    For ages 10+
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-quantum-600 to-energy-500 text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Quantum Quest
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl mb-8 text-quantum-800 dark:text-quantum-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  From Basics to Machine Learning:<br />
                  <span className="text-quantum-600 dark:text-quantum-300">Your journey into quantum computing starts here</span>
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button className="quantum-button text-lg py-6" asChild>
                    <Link to="/curriculum">
                      <Play className="mr-2 h-5 w-5" /> Start Learning
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-quantum-300 dark:border-quantum-600 text-lg py-6" asChild>
                    <Link to="/courses">
                      <GraduationCap className="mr-2 h-5 w-5" /> View Courses
                    </Link>
                  </Button>
                </motion.div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-gradient-to-r from-quantum-500/20 to-energy-500/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-quantum-400/10 to-energy-400/10 rounded-full animate-spin-slow" style={{ animationDuration: "12s" }}></div>
                    <div className="absolute inset-8 bg-gradient-to-br from-quantum-100 to-quantum-200 dark:from-quantum-900 dark:to-quantum-800 rounded-full shadow-lg flex items-center justify-center">
                      <Atom className="h-32 w-32 text-quantum-500 animate-quantum-pulse" />
                    </div>
                    <div className="absolute top-1/4 -right-4 w-16 h-16 bg-energy-500 rounded-full flex items-center justify-center shadow-lg">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-1/4 -left-4 w-16 h-16 bg-quantum-300 dark:bg-quantum-700 rounded-full flex items-center justify-center shadow-lg">
                      <CircuitBoard className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Quantum Quest Section */}
        <WhyQuantumQuestSection />
        
        {/* Featured Courses Section */}
        <FeaturedCoursesSection />
        
        {/* Stats Section */}
        <section className="py-16 bg-quantum-100 dark:bg-quantum-900/70">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "9", label: "Months of Learning" },
                { number: "9", label: "Comprehensive Courses" },
                { number: "36", label: "Engaging Weeks" },
                { number: "100+", label: "Interactive Activities" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="quantum-card p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-quantum-600 dark:text-quantum-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-quantum-500 to-energy-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Quantum Journey?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of young quantum explorers from around the world and discover
                the fascinating universe of quantum physics and computing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-quantum-600 hover:bg-quantum-100 hover:text-quantum-700 text-lg py-6 px-8" asChild>
                  <Link to="/curriculum">
                    Explore the Curriculum
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg py-6 px-8" asChild>
                  <Link to="/courses">
                    View All Courses
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
