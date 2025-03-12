
import { Module } from "@/data/types/courseTypes";

// Module 1: Fundamentals of Quantum Machine Learning
export const module1: Module = {
  id: "3.1.1",
  title: "Fundamentals of Quantum Machine Learning",
  description: "Explore the intersection of quantum computing and machine learning.",
  lessons: [
    {
      id: "3.1.1.1",
      title: "Introduction to Quantum Machine Learning",
      description: "Understand the potential advantages of quantum approaches to machine learning.",
      content: "Quantum Machine Learning (QML) is an emerging field that combines quantum computing with machine learning techniques to potentially solve problems that are intractable for classical computers. In this lesson, we'll explore what makes QML different from classical machine learning and what kinds of advantages we might expect.\n\nWe'll discuss four main categories of quantum machine learning:\n\n1. **Quantum-enhanced ML**: Using quantum computers to accelerate parts of classical ML algorithms\n\n2. **Quantum-inspired ML**: Classical algorithms inspired by quantum mechanics\n\n3. **ML for quantum systems**: Using classical ML to improve quantum computers\n\n4. **Fully quantum ML**: Native quantum algorithms where both data and processing are quantum\n\nWe'll also address the current hype vs. reality of the field, discussing where quantum advantage might first appear in practical machine learning applications.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "3.1.1.2",
      title: "Quantum Data Encoding",
      description: "Learn techniques for encoding classical data into quantum states.",
      content: "One of the fundamental challenges in quantum machine learning is how to efficiently encode classical data into quantum states that a quantum computer can process. This lesson explores various encoding strategies and their implications for algorithm performance.\n\nWe'll discuss:\n\n- **Amplitude encoding**: Representing data in the amplitudes of a quantum state\n- **Basis encoding**: Representing data in the computational basis states\n- **Angle encoding**: Encoding features as rotation angles of qubits\n- **Hybrid approaches**: Combining multiple encoding strategies\n\nWe'll examine the tradeoffs between these approaches in terms of qubit requirements, circuit depth, and how well they preserve the structure of the original data. We'll also discuss the critical challenge of the input problem in quantum machine learning - the potential bottleneck of loading large classical datasets into quantum systems.",
      type: "video",
      duration: 25,
      points: 20
      videoUrl: "https://www.youtube.com/watch?v=nk9va-BUaM8"
    },
    {
      id: "3.1.1.3",
      title: "Quantum Feature Maps",
      description: "Explore how quantum computers can transform data into higher-dimensional feature spaces.",
      content: "Quantum feature maps are quantum circuits that transform classical data into quantum states in a higher-dimensional Hilbert space, similar to how kernel methods work in classical machine learning. This lesson explores how quantum computers can potentially perform feature mapping exponentially more efficiently than classical computers.\n\nWe'll discuss:\n\n- The connection between quantum feature maps and kernel methods\n- How to design quantum circuits that implement useful feature maps\n- The concept of quantum kernel estimation\n- Potential advantages for classification problems\n\nWe'll also examine recent research on quantum feature maps that might offer advantages for specific types of data, particularly in chemistry and materials science applications where the data already has quantum structure.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-feature-maps.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "3.1.1.4",
      title: "Quantum Machine Learning Fundamentals Quiz",
      description: "Test your understanding of quantum machine learning foundations.",
      content: "Let's check what you've learned about the fundamentals of quantum machine learning.",
      type: "quiz",
      duration: 15,
      points: 30
    }
  ]
};
