
import { Course } from "@/data/types/courseTypes";

// Level 3 Course: Quantum Future
export const quantumFutureCourse: Course = {
  id: "3.3",
  title: "Quantum Future",
  description: "Explore careers and the future of quantum technology.",
  level: 3,
  duration: "4 weeks",
  icon: "graduation",
  weeks: 4,
  modules: [
    {
      id: "3.3.1",
      title: "Quantum Computing Careers",
      description: "Discover career opportunities in the quantum computing industry.",
      lessons: [
        {
          id: "3.3.1.1",
          title: "Emerging Quantum Roles",
          description: "New job positions created by the quantum computing revolution.",
          content: "The quantum computing revolution is creating a range of new career opportunities across different sectors. As quantum technologies mature, organizations are increasingly seeking professionals with specialized skills in this emerging field.\n\nKey quantum computing roles include:\n\n1. Quantum Algorithm Researchers: Developing new algorithms that leverage quantum properties to solve complex problems\n2. Quantum Software Engineers: Creating software infrastructure and tools for quantum computers\n3. Quantum Hardware Engineers: Designing and improving physical quantum computing systems\n4. Quantum Application Specialists: Identifying and implementing practical applications of quantum computing in specific industries\n5. Quantum Machine Learning Engineers: Developing and optimizing quantum approaches to machine learning problems",
          type: "reading",
          duration: 15,
          points: 10
        }
      ]
    }
  ],
  progress: 0
};
