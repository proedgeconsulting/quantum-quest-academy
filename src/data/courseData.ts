
// Re-export types
export type { Course, Module, Lesson } from "@/data/types/courseTypes";

// Re-export course data
export { 
  quantumBasicsCourse, 
  quantumPlaygroundCourse, 
  quantumCodingLiteCourse,
  level1Courses 
} from "@/data/courses/level1";

export { 
  quantumCircuitsCourse,
  quantumEntanglementCourse,
  quantumErrorCorrectionCourse,
  level2Courses 
} from "@/data/courses/level2/index";

export { 
  quantumMachineLearningCourse,
  realWorldQuantumAICourse,
  quantumFutureCourse,
  level3Courses 
} from "@/data/courses/level3/index";

// Re-export services
export { getCourseById } from "@/data/services/courseService";
export { getProgress, updateProgress } from "@/data/services/progressService";
