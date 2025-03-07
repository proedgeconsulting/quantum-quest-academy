
import { Module } from "@/data/types/courseTypes";

// Module 12: Quantum Circuit Challenge
export const module12: Module = {
  id: "2.1.12",
  title: "Quantum Circuit Challenge",
  description: "Put all your quantum circuit knowledge to the test in a final challenge.",
  lessons: [
    {
      id: "2.1.12.1",
      title: "Preparing for the Challenge",
      description: "Review key quantum circuit concepts before the final challenge.",
      content: "The ultimate Quantum Circuit Challenge awaits! Before you begin, let's review the key concepts you've learned throughout this course:\n\n- Quantum gates: Hadamard, Pauli-X/Y/Z, CNOT, and others\n\n- Quantum algorithms: Deutsch-Jozsa, Grover's search, quantum teleportation\n\n- Circuit design principles: minimizing depth and width, error mitigation\n\n- Quantum phenomena: superposition, entanglement, interference\n\nMake sure you understand these concepts well - you'll need them all to complete the final challenge!",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.1.12.2",
      title: "The Quantum Challenge Explained",
      description: "Learn about the multi-part quantum circuit challenge.",
      content: "The Quantum Circuit Challenge consists of three increasingly difficult tasks that will test your understanding of quantum circuits. In this video, we'll explain each part of the challenge:\n\n1. The Identity Quest: Create a circuit that starts with a certain quantum state and ends with the same state, despite all the transformations in between.\n\n2. The Entanglement Puzzle: Design a circuit that entangles multiple qubits in a specific pattern.\n\n3. The Algorithm Adventure: Implement a simple quantum algorithm that solves a practical problem.\n\nListen carefully to the requirements for each part - understanding the challenge is the first step to solving it!",
      type: "video",
      duration: 15,
      points: 15,
      videoUrl: "https://www.youtube.com/embed/FjHJ7FjgL34"
    },
    {
      id: "2.1.12.3",
      title: "Quantum Circuit Challenge",
      description: "Complete the multi-part quantum circuit challenge.",
      content: "The time has come to prove your quantum circuit mastery! In this interactive challenge, you'll work through the three tasks we discussed in the previous lesson.\n\nYou'll have access to all the quantum gates and tools you've learned about throughout the course. For each task, you'll build a quantum circuit that meets the specified requirements, test it to make sure it works correctly, and then submit your solution.\n\nThere may be multiple ways to solve each challenge - try to find the most elegant solution! Can you complete all three parts of the challenge and earn your Quantum Circuit Master badge?",
      type: "interactive",
      interactiveComponent: "BuildAtomActivity",
      duration: 30,
      points: 30
    },
    {
      id: "2.1.12.4",
      title: "Final Quantum Circuits Quiz",
      description: "Test your comprehensive understanding of quantum circuits.",
      content: "Congratulations on completing the Quantum Circuit Challenge! Now, let's check your overall understanding of quantum circuits with this final comprehensive quiz. It will cover all the topics you've learned throughout the course, from basic gates to complex algorithms.",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
