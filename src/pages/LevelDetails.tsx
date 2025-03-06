
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Brain, CircuitBoard, Atom, Lightbulb } from "lucide-react";
import { level1Courses, level2Courses, level3Courses } from "@/data/courseData";

const LevelDetails = () => {
  const { levelId } = useParams();
  const levelNumber = Number(levelId);
  
  const getLevelData = () => {
    switch(levelNumber) {
      case 1:
        return {
          title: "Level 1: Quantum Explorer (Beginner)",
          description: "Master the basics of quantum physics through games, stories, and hands-on activities.",
          courses: level1Courses,
          icon: <Atom className="h-12 w-12 text-quantum-500" />,
          color: "bg-quantum-100 dark:bg-quantum-900/50",
          highlights: [
            "Introduces fundamental quantum concepts in an accessible way",
            "Uses interactive games and visual metaphors to explain quantum behavior",
            "Builds intuition about quantum phenomena without mathematical complexity",
            "Develops scientific thinking skills and curiosity about the quantum world"
          ]
        };
      case 2:
        return {
          title: "Level 2: Quantum Builder (Intermediate)",
          description: "Create quantum circuits and explore the fascinating world of qubits and quantum gates.",
          courses: level2Courses,
          icon: <CircuitBoard className="h-12 w-12 text-quantum-500" />,
          color: "bg-quantum-200 dark:bg-quantum-800/50",
          highlights: [
            "Introduces quantum computing foundations with hands-on circuit building",
            "Explores quantum gates and algorithms through interactive simulations",
            "Develops problem-solving skills using quantum computational thinking",
            "Prepares students for more advanced quantum programming concepts"
          ]
        };
      case 3:
        return {
          title: "Level 3: Quantum Innovator (Advanced)",
          description: "Apply quantum computing to machine learning and discover real-world applications.",
          courses: level3Courses,
          icon: <Brain className="h-12 w-12 text-quantum-500" />,
          color: "bg-quantum-300 dark:bg-quantum-700/50",
          highlights: [
            "Explores cutting-edge applications of quantum computing in AI and machine learning",
            "Introduces quantum algorithms for solving complex real-world problems",
            "Develops project-based skills for quantum innovation and research",
            "Prepares students for careers in quantum technology and further academic study"
          ]
        };
      default:
        return {
          title: "Quantum Learning Path",
          description: "Explore our quantum physics curriculum for all levels.",
          courses: [],
          icon: <Lightbulb className="h-12 w-12 text-quantum-500" />,
          color: "bg-quantum-100 dark:bg-quantum-900/50",
          highlights: [
            "Structured learning path from beginner to advanced concepts",
            "Interactive tools and simulations for hands-on learning",
            "Expert-developed curriculum based on latest quantum research",
            "Age-appropriate content for different learning stages"
          ]
        };
    }
  };
  
  const levelData = getLevelData();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className={`py-14 ${levelData.color}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/curriculum" className="flex items-center gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Curriculum
                </Link>
              </Button>
            </div>
            
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-4 rounded-full bg-white/70 dark:bg-quantum-800/70 shadow-md">
                {levelData.icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-quantum-900 dark:text-quantum-100">
                  {levelData.title}
                </h1>
                <p className="text-lg text-quantum-600 dark:text-quantum-300 max-w-2xl mt-2">
                  {levelData.description}
                </p>
              </div>
            </motion.div>
            
            <div className="bg-white/80 dark:bg-quantum-800/50 rounded-lg p-6 mb-10">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-quantum-500" />
                Level Highlights
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {levelData.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="h-5 w-5 rounded-full bg-quantum-100 dark:bg-quantum-700 text-quantum-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-quantum-800 dark:text-quantum-200">
              {levelNumber ? `Level ${levelNumber} Courses` : 'Recommended Courses'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {levelData.courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <CourseCard
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    level={levelNumber as 1 | 2 | 3}
                    progress={course.progress || 0}
                    duration={course.duration}
                    icon={course.icon}
                    weeks={course.weeks}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LevelDetails;
