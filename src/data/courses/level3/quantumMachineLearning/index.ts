
import { Course } from "@/data/types/courseTypes";
import { courseMetadata } from "./courseMetadata";
import { allModules } from "./moduleImports";

// Level 3 Course: Quantum Machine Learning
export const quantumMachineLearningCourse: Course = {
  ...courseMetadata,
  modules: allModules
};

export default quantumMachineLearningCourse;
