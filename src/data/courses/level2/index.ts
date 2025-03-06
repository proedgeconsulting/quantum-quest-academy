
import { Course } from "@/data/types/courseTypes";
import { quantumCircuitsCourse } from "./quantumCircuits";
import { quantumEntanglementCourse } from "./quantumEntanglement";
import { quantumErrorCorrectionCourse } from "./quantumErrorCorrection";

// All Level 2 courses
export const level2Courses: Course[] = [
  quantumCircuitsCourse,
  quantumEntanglementCourse,
  quantumErrorCorrectionCourse
];

// Export individual courses
export {
  quantumCircuitsCourse,
  quantumEntanglementCourse,
  quantumErrorCorrectionCourse
};
