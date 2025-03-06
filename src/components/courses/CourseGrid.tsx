
import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { Course } from "@/data/types/courseTypes";

interface CourseGridProps {
  courses: Course[] | {
    id: string;
    title: string;
    description: string;
    progress: number;
    duration: string;
    icon: "atom" | "brain" | "code" | "graduation" | "circuit" | "wave";
    weeks: number;
  }[];
}

const CourseGrid = ({ courses }: CourseGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
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
            progress={'progress' in course ? course.progress : 0}
            duration={course.duration}
            icon={course.icon}
            weeks={course.weeks}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CourseGrid;
