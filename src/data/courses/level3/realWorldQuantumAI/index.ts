
import { Course } from "@/data/types/courseTypes";
import { courseMetadata } from "./courseMetadata";
import { allModules } from "./moduleImports";

// Level 3 Course: Real-World Quantum AI
export const realWorldQuantumAICourse: Course = {
  ...courseMetadata,
  modules: allModules
};

export default realWorldQuantumAICourse;
