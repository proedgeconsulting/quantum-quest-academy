
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Brain, CircuitBoard, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const featuredCourses = [
  {
    id: "quantum-basics",
    title: "Quantum Basics",
    description: "An introduction to the fascinating world of quantum physics with interactive experiments and games.",
    level: 1,
    icon: "atom"
  },
  {
    id: "quantum-circuits",
    title: "Quantum Circuits",
    description: "Learn to build and understand quantum circuits through hands-on simulations and guided exercises.",
    level: 2,
    icon: "circuit"
  },
  {
    id: "quantum-ml",
    title: "Quantum Machine Learning",
    description: "Explore how quantum computing is transforming AI and machine learning through real-world applications.",
    level: 3,
    icon: "brain"
  }
];

const FeaturedCoursesSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "atom":
        return <Atom className="h-10 w-10 text-quantum-500" />;
      case "circuit":
        return <CircuitBoard className="h-10 w-10 text-quantum-500" />;
      case "brain":
        return <Brain className="h-10 w-10 text-quantum-500" />;
      default:
        return <Atom className="h-10 w-10 text-quantum-500" />;
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-quantum-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Courses
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Start your quantum journey with our most popular courses
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4 p-3 bg-quantum-100 dark:bg-quantum-800 rounded-full inline-block">
                    {getIcon(course.icon)}
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>Level {course.level}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link to={`/courses/${course.id}`} className="flex items-center justify-center gap-2">
                      View Course <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/courses" className="flex items-center gap-2">
              Browse All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
