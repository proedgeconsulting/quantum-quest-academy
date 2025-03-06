
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Courses = () => {
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
  
  const allCourses = [...level1Courses, ...level2Courses, ...level3Courses];
  
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
              <h1 className="text-4xl font-bold mb-4">All Courses</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Browse our library of quantum computing courses designed for all learning levels.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Courses Section */}
        <section className="py-16 bg-white dark:bg-quantum-950">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="grid grid-cols-4 h-12">
                  <TabsTrigger value="all" className="text-sm md:text-base">All Courses</TabsTrigger>
                  <TabsTrigger value="level1" className="text-sm md:text-base">Level 1</TabsTrigger>
                  <TabsTrigger value="level2" className="text-sm md:text-base">Level 2</TabsTrigger>
                  <TabsTrigger value="level3" className="text-sm md:text-base">Level 3</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <CourseCard
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        level={parseInt(course.id.split('.')[0]) as 1 | 2 | 3}
                        progress={course.progress}
                        duration={course.duration}
                        icon={course.icon}
                        weeks={course.weeks}
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="level1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {level1Courses.map((course, index) => (
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
                        level={1}
                        progress={course.progress}
                        duration={course.duration}
                        icon={course.icon}
                        weeks={course.weeks}
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="level2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {level2Courses.map((course, index) => (
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
                        level={2}
                        progress={course.progress}
                        duration={course.duration}
                        icon={course.icon}
                        weeks={course.weeks}
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="level3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {level3Courses.map((course, index) => (
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
                        level={3}
                        progress={course.progress}
                        duration={course.duration}
                        icon={course.icon}
                        weeks={course.weeks}
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
