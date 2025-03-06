
// Re-export types
export type { Course, Module, Lesson } from "@/data/types/courseTypes";

// Re-export course data
export { quantumBasicsCourse, level1Courses } from "@/data/courses/level1Courses";
export { quantumCircuitsCourse, level2Courses } from "@/data/courses/level2Courses";
export { level3Courses } from "@/data/coursesData";

// Re-export services
export { getCourseById } from "@/data/services/courseService";
export { getProgress, updateProgress } from "@/data/services/progressService";
