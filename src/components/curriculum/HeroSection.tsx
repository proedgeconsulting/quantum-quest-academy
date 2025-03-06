
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-quantum-100 dark:bg-quantum-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-quantum-300 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-energy-300 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-quantum-500 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-quantum-600 to-energy-600 text-transparent bg-clip-text">
            Quantum Curriculum
          </h1>
          <p className="text-lg text-quantum-700 dark:text-quantum-300 mb-8">
            A comprehensive 9-month journey from quantum fundamentals to cutting-edge applications, 
            designed for curious minds aged 10 and up.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-quantum-600 hover:bg-quantum-700" size="lg" asChild>
              <a href="#level-1">Start with Level 1</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/courses">Browse All Courses</a>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Link
              to="level-1"
              smooth={true}
              duration={500}
              className="animate-bounce cursor-pointer p-2 rounded-full bg-white/30 dark:bg-quantum-800/30 inline-flex"
              aria-label="Scroll to Level 1"
            >
              <ChevronDown className="h-6 w-6 text-quantum-700 dark:text-quantum-300" />
            </Link>
          </div>
        </motion.div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <motion.div 
            className="bg-white/70 dark:bg-quantum-800/70 px-4 py-2 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm font-medium">9-month Program</span>
          </motion.div>
          
          <motion.div 
            className="bg-white/70 dark:bg-quantum-800/70 px-4 py-2 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-sm font-medium">3 Difficulty Levels</span>
          </motion.div>
          
          <motion.div 
            className="bg-white/70 dark:bg-quantum-800/70 px-4 py-2 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-sm font-medium">Interactive Projects</span>
          </motion.div>
          
          <motion.div 
            className="bg-white/70 dark:bg-quantum-800/70 px-4 py-2 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-sm font-medium">Expert Instructors</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
