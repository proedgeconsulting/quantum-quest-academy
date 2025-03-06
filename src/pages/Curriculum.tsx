
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LevelSection from "@/components/LevelSection";
import HeroSection from "@/components/curriculum/HeroSection";
import TeachingMethodology from "@/components/curriculum/TeachingMethodology";
import { level1Courses, level2Courses, level3Courses } from "@/data/courseData";

const Curriculum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Curriculum;
