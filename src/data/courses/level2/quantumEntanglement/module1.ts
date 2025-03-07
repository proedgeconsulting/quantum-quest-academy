
import { Module } from "@/data/types/courseTypes";

// Module 1: Understanding Entanglement
export const module1: Module = {
  id: "2.2.1",
  title: "Understanding Entanglement",
  description: "Explore the fundamental concept of quantum entanglement.",
  lessons: [
    {
      id: "2.2.1.1",
      title: "What is Quantum Entanglement?",
      description: "Learn about the 'spooky action at a distance' that puzzled Einstein.",
      content: "Quantum entanglement is one of the most counterintuitive phenomena in quantum physics - what Einstein famously called 'spooky action at a distance.' When two particles become entangled, their properties become correlated in such a way that the state of one particle instantly affects the state of the other, regardless of the distance separating them.\n\nIn this lesson, we'll explore the concept of quantum entanglement, how it challenges our classical intuition about reality, and why it's such a powerful resource for quantum computing and quantum communication.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.2.1.2",
      title: "Creating Entangled States",
      description: "Learn how to create and verify entangled quantum states.",
      content: "In this lesson, we'll explore how entangled quantum states are created and verified in both theoretical and experimental settings. We'll start with the simplest entangled state - the Bell state - and learn how to create it using a Hadamard gate followed by a CNOT gate.\n\nWe'll also discuss more complex entangled states involving multiple qubits, and how these states can be used for quantum computing, quantum cryptography, and quantum teleportation.",
      type: "video",
      duration: 20,
      points: 15
    },
    {
      id: "2.2.1.3",
      title: "Bell's Inequality",
      description: "Understand the mathematical test that proves quantum mechanics is non-local.",
      content: "Bell's Inequality is a mathematical theorem proposed by physicist John Bell in 1964 that has profound implications for our understanding of quantum entanglement. This theorem provides a way to distinguish between quantum mechanical predictions and those of any local hidden variable theory.\n\nIn this lesson, we'll explore Bell's Inequality and the subsequent experimental tests that have consistently confirmed the predictions of quantum mechanics, demonstrating that entanglement is a real phenomenon that cannot be explained by classical physics. We'll discuss the concept of non-locality and what it means for our understanding of reality.",
      type: "reading",
      duration: 20,
      points: 15
    }
  ]
};
