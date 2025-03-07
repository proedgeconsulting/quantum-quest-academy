
import { Course } from "@/data/types/courseTypes";

// Course metadata separate from the modules
export const courseMetadata = {
  id: "3.1",
  title: "Quantum Machine Learning",
  description: "Learn to combine quantum computing with machine learning techniques.",
  level: 3,
  duration: "12 weeks",
  icon: "brain",
  weeks: 12,
} as const;
