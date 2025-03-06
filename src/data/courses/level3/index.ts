
import { Course } from "@/data/types/courseTypes";
import { quantumMachineLearningCourse } from "./quantumMachineLearning";
import { realWorldQuantumAICourse } from "./realWorldQuantumAI";
import { quantumFutureCourse } from "./quantumFuture";

// All Level 3 courses
export const level3Courses: Course[] = [
  quantumMachineLearningCourse,
  realWorldQuantumAICourse,
  quantumFutureCourse
];

// Export individual courses
export {
  quantumMachineLearningCourse,
  realWorldQuantumAICourse,
  quantumFutureCourse
};
