
// Common course data used across different components
export const level1Courses = [
  {
    id: "1.1",
    title: "Quantum Basics",
    description: "Discover the fascinating world of atoms, light, and energy.",
    progress: 75,
    duration: "4 weeks",
    icon: "atom" as const,
    weeks: 4
  },
  {
    id: "1.2",
    title: "Quantum Playground",
    description: "Explore quantum concepts through fun games and activities.",
    progress: 25,
    duration: "4 weeks",
    icon: "wave" as const,
    weeks: 4
  },
  {
    id: "1.3",
    title: "Quantum Coding Lite",
    description: "Write your first programs to control quantum systems.",
    progress: 0,
    duration: "4 weeks",
    icon: "code" as const,
    weeks: 4
  }
];

export const level2Courses = [
  {
    id: "2.1",
    title: "Qubits & Gates",
    description: "Learn about the building blocks of quantum computers.",
    progress: 0,
    duration: "4 weeks",
    icon: "circuit" as const,
    weeks: 4
  },
  {
    id: "2.2",
    title: "Quantum Circuits",
    description: "Build and test your own quantum circuits.",
    progress: 0,
    duration: "4 weeks",
    icon: "circuit" as const,
    weeks: 4
  },
  {
    id: "2.3",
    title: "Quantum Algorithms",
    description: "Explore the algorithms that give quantum computers their power.",
    progress: 0,
    duration: "4 weeks",
    icon: "code" as const,
    weeks: 4
  }
];

export const level3Courses = [
  {
    id: "3.1",
    title: "Quantum Machine Learning Basics",
    description: "Discover how quantum computing can supercharge AI.",
    progress: 0,
    duration: "4 weeks",
    icon: "brain" as const,
    weeks: 4
  },
  {
    id: "3.2",
    title: "Real-World Quantum AI",
    description: "Apply quantum machine learning to solve real problems.",
    progress: 0,
    duration: "4 weeks",
    icon: "brain" as const,
    weeks: 4
  },
  {
    id: "3.3",
    title: "Quantum Future",
    description: "Explore careers and the future of quantum technology.",
    progress: 0,
    duration: "4 weeks",
    icon: "graduation" as const,
    weeks: 4
  }
];

export const allCourses = [...level1Courses, ...level2Courses, ...level3Courses];
