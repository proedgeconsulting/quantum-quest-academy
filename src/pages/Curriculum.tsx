
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LevelSection from "@/components/LevelSection";

const Curriculum = () => {
  // Level 1 courses
  const level1Courses = [
    {
      id: "1.1",
      title: "Quantum Basics",
      description: "Discover the fascinating world of atoms, light, and energy.",
      progress: 75,
      duration: "4 weeks",
      icon: "atom" as const,
      weeks: 4
    },
    {
      id: "1.2",
      title: "Quantum Playground",
      description: "Explore quantum concepts through fun games and activities.",
      progress: 25,
      duration: "4 weeks",
      icon: "wave" as const,
      weeks: 4
    },
    {
      id: "1.3",
      title: "Quantum Coding Lite",
      description: "Write your first programs to control quantum systems.",
      progress: 0,
      duration: "4 weeks",
      icon: "code" as const,
      weeks: 4
    }
  ];
  
  // Level 2 courses
  const level2Courses = [
    {
      id: "2.1",
      title: "Qubits & Gates",
      description: "Learn about the building blocks of quantum computers.",
      progress: 0,
      duration: "4 weeks",
      icon: "circuit" as const,
      weeks: 4
    },
    {
      id: "2.2",
      title: "Quantum Circuits",
      description: "Build and test your own quantum circuits.",
      progress: 0,
      duration: "4 weeks",
      icon: "circuit" as const,
      weeks: 4
    },
    {
      id: "2.3",
      title: "Quantum Algorithms",
      description: "Explore the algorithms that give quantum computers their power.",
      progress: 0,
      duration: "4 weeks",
      icon: "code" as const,
      weeks: 4
    }
  ];
  
  // Level 3 courses
  const level3Courses = [
    {
      id: "3.1",
      title: "Quantum Machine Learning Basics",
      description: "Discover how quantum computing can supercharge AI.",
      progress: 0,
      duration: "4 weeks",
      icon: "brain" as const,
      weeks: 4
    },
    {
      id: "3.2",
      title: "Real-World Quantum AI",
      description: "Apply quantum machine learning to solve real problems.",
      progress: 0,
      duration: "4 weeks",
      icon: "brain" as const,
      weeks: 4
    },
    {
      id: "3.3",
      title: "Quantum Future",
      description: "Explore careers and the future of quantum technology.",
      progress: 0,
      duration: "4 weeks",
      icon: "graduation" as const,
      weeks: 4
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-14 bg-quantum-100 dark:bg-quantum-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4">Course Curriculum</h1>
              <p className="text-lg text-muted-foreground mb-6">
                A comprehensive 9-month journey from quantum fundamentals to cutting-edge applications, 
                designed for curious minds aged 10 and up.
              </p>
            </motion.div>
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
        
        {/* Teaching Methodology Section */}
        <section className="py-16 bg-white dark:bg-quantum-900">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Teaching Methodology</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our curriculum adapts to different learning styles and age groups, ensuring 
                everyone gets the most out of their quantum journey.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="quantum-card p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">For Kids (10–14)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      1
                    </div>
                    <p>Gamified learning experiences that make complex concepts fun</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      2
                    </div>
                    <p>Animated stories and visual explanations for better engagement</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      3
                    </div>
                    <p>No-code tools and simulations for hands-on learning</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      4
                    </div>
                    <p>Badge and point system that rewards progress and exploration</p>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                className="quantum-card p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">Teens & Adults</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      1
                    </div>
                    <p>Python coding exercises for practical quantum computing skills</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      2
                    </div>
                    <p>Optional mathematical deep dives for those who want more detail</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      3
                    </div>
                    <p>Research paper discussions and real-world application studies</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-quantum-100 dark:bg-quantum-800 text-quantum-600 dark:text-quantum-300 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      4
                    </div>
                    <p>GitHub portfolio development and peer-reviewed projects</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Curriculum;
