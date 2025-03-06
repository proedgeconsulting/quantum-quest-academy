
import { Course } from "@/data/types/courseTypes";

// Level 3 Course: Quantum Machine Learning Basics
export const quantumMachineLearningCourse: Course = {
  id: "3.1",
  title: "Quantum Machine Learning Basics",
  description: "Discover how quantum computing can supercharge AI.",
  level: 3,
  duration: "4 weeks",
  icon: "brain",
  weeks: 4,
  modules: [
    {
      id: "3.1.1",
      title: "Introduction to Quantum Machine Learning",
      description: "Learn the fundamentals of quantum approaches to machine learning.",
      lessons: []
    }
  ],
  progress: 0
};

// All Level 3 courses
export const level3Courses: Course[] = [
  quantumMachineLearningCourse,
  {
    id: "3.2",
    title: "Real-World Quantum AI",
    description: "Apply quantum machine learning to solve real problems.",
    level: 3,
    duration: "4 weeks",
    icon: "brain",
    weeks: 4,
    modules: [],
    progress: 0
  },
  {
    id: "3.3",
    title: "Quantum Future",
    description: "Explore careers and the future of quantum technology.",
    level: 3,
    duration: "4 weeks",
    icon: "graduation",
    weeks: 4,
    modules: [],
    progress: 0
  }
];
