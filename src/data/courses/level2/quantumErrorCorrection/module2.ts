
import { Module } from "@/data/types/courseTypes";

// Module 2: Basic Error Types
export const module2: Module = {
  id: "2.3.2",
  title: "Basic Error Types",
  description: "Learn about different types of quantum errors.",
  lessons: [
    {
      id: "2.3.2.1",
      title: "Introduction to Quantum Errors",
      description: "Learn why quantum errors are a major challenge in quantum computing.",
      content: "Quantum computers are extremely sensitive to noise and environmental interference. This makes error management a central challenge in quantum computing. In this lesson, we'll explore the various sources of errors in quantum systems.\n\nYou'll learn about:\n\n- Decoherence: How quantum systems lose their quantum properties through interaction with the environment\n\n- Gate errors: Imperfections in quantum operations\n\n- Measurement errors: Inaccuracies when reading qubit states\n\n- Crosstalk: Unwanted interactions between qubits\n\n- Thermal noise: How temperature affects quantum systems\n\n- Systematic vs. random errors: Understanding their different impacts and mitigation strategies\n\nBy understanding these error sources, you'll be better prepared to design quantum circuits that are more resilient to real-world imperfections.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "2.3.2.2",
      title: "Bit Flip Errors",
      description: "Understand bit flip errors and how they affect quantum states.",
      content: "Bit flip errors are one of the most common types of quantum errors. They occur when a qubit's state flips from |0⟩ to |1⟩ or vice versa. This can happen due to various environmental factors, such as electromagnetic interference or thermal fluctuations.\n\nIn this lesson, we'll explore the causes of bit flip errors and how they can be represented mathematically. We'll also discuss how bit flip errors can be detected and corrected using quantum error correction codes.",
      type: "video",
      duration: 20,
      points: 15
      videoUrl: "https://www.youtube.com/watch?v=QrK8D54iAdA"
    },
    {
      id: "2.3.2.3",
      title: "Error Visualization",
      description: "Visualize different types of quantum errors using the Bloch sphere.",
      content: "In this interactive session, you'll use our Bloch sphere visualizer to see how different types of errors affect quantum states. You'll be able to apply bit flips, phase flips, and combined errors, watching how they transform the state of a qubit on the Bloch sphere.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Bloch-Sphere-Visualizer.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "2.3.2.4",
      title: "Error Types Quiz",
      description: "Test your knowledge about different types of quantum errors.",
      content: "Let's check your understanding of quantum error types with this quiz.",
      type: "quiz",
      duration: 15,
      points: 20
    }
  ]
};
