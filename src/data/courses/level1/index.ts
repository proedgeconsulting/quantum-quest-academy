
import { Course } from "@/data/types/courseTypes";
import { quantumBasicsCourse } from "./quantumBasics";
import { quantumPlaygroundCourse } from "./quantumPlayground/index";
import { quantumCodingLiteCourse } from "./quantumCodingLite";

// All Level 1 courses
export const level1Courses: Course[] = [
  quantumBasicsCourse,
  quantumPlaygroundCourse,
  quantumCodingLiteCourse
];

// Export individual courses
export {
  quantumBasicsCourse,
  quantumPlaygroundCourse,
  quantumCodingLiteCourse
};
