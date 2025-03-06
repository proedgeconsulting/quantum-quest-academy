
import { Course } from "@/data/types/courseTypes";

// Level 2 Course: Quantum Error Correction
export const quantumErrorCorrectionCourse: Course = {
  id: "2.3",
  title: "Quantum Error Correction",
  description: "Learn about quantum error correction and fault tolerance.",
  level: 2,
  duration: "4 weeks",
  icon: "code",
  weeks: 4,
  modules: [
    {
      id: "2.3.1",
      title: "Introduction to Quantum Errors",
      description: "Understand the sources and types of errors in quantum systems.",
      lessons: [
        {
          id: "2.3.1.1",
          title: "Why Quantum Errors Matter",
          description: "Learn why error correction is crucial for quantum computing.",
          content: "Quantum computing faces a fundamental challenge: quantum states are incredibly fragile and susceptible to errors. Unlike classical computers, where bits have well-defined values of 0 or 1, quantum bits (qubits) exist in delicate superpositions that can be disturbed by the slightest interaction with their environment.\n\nIn this lesson, we'll explore why quantum errors pose such a significant challenge to building useful quantum computers, and why quantum error correction is essential for the future of quantum computing. We'll discuss the different types of errors that can affect qubits, including bit flips, phase flips, and decoherence.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.3.1.2",
          title: "Types of Quantum Errors",
          description: "Explore the different ways qubits can be affected by errors.",
          content: "In this lesson, we'll dive deeper into the specific types of errors that affect quantum systems. Unlike classical computers that only experience bit flips (0→1 or 1→0), quantum computers can experience a wider variety of errors due to the continuous nature of quantum states.\n\nWe'll explore bit flip errors, phase flip errors, and combinations of both. We'll also discuss environmental decoherence - the process by which quantum superpositions decay into classical states through interaction with the environment - and how it poses a fundamental challenge for quantum computing.",
          type: "video",
          duration: 20,
          points: 15
        }
      ]
    }
  ]
};
