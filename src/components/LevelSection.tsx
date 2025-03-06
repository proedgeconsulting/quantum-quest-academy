
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { Atom, Brain, CircuitBoard, Code, GraduationCap, Wave } from "lucide-react";

interface LevelSectionProps {
  level: number;
  title: string;
  description: string;
  courses: {
    id: string;
    title: string;
    description: string;
    progress: number;
    duration: string;
    icon: "atom" | "brain" | "code" | "graduation" | "circuit" | "wave";
    weeks: number;
  }[];
}

const LevelSection = ({ level, title, description, courses }: LevelSectionProps) => {
  const getIcon = () => {
    switch (level) {
      case 1:
        return <Atom className="h-8 w-8 text-quantum-500" />;
      case 2:
        return <CircuitBoard className="h-8 w-8 text-quantum-500" />;
      case 3:
        return <Brain className="h-8 w-8 text-quantum-500" />;
      default:
        return <Atom className="h-8 w-8 text-quantum-500" />;
    }
  };
  
  const getBgColor = () => {
    switch (level) {
      case 1:
        return "bg-quantum-100 dark:bg-quantum-900/50";
      case 2:
        return "bg-quantum-200 dark:bg-quantum-800/50";
      case 3:
        return "bg-quantum-300 dark:bg-quantum-700/50";
      default:
        return "bg-quantum-100 dark:bg-quantum-900/50";
    }
  };
  
  return (
    <motion.section
      className={`py-12 ${getBgColor()}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-white/70 dark:bg-quantum-800/70 shadow-md">
            {getIcon()}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-quantum-900 dark:text-quantum-100">
              {title}
            </h2>
            <p className="text-quantum-600 dark:text-quantum-300">{description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {courses.map((course, index) => (
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
                level={level as 1 | 2 | 3}
                progress={course.progress}
                duration={course.duration}
                icon={course.icon}
                weeks={course.weeks}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LevelSection;
