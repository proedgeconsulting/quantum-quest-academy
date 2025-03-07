
import { Module } from "@/data/types/courseTypes";

// Module 1: Introduction to Quantum Circuits
export const module1: Module = {
  id: "2.1.1",
  title: "Introduction to Quantum Circuits",
  description: "Understand the basics of quantum circuits and how they work.",
  lessons: [
    {
      id: "2.1.1.1",
      title: "What is a Quantum Circuit?",
      description: "Learn about the basics of quantum circuits and their applications.",
      content: "A quantum circuit is a computational model used by quantum computers, similar to how classical computers use logic gates and circuits. However, instead of classical bits that can only be 0 or 1, quantum circuits operate on qubits which can exist in a superposition of states.\n\nIn this course, we'll learn how to design quantum circuits using gates that manipulate qubits in various ways. You'll discover how these circuits can solve problems that would be practically impossible for classical computers.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.1.1.2",
      title: "Quantum Gates: The Building Blocks",
      description: "Explore the fundamental quantum gates that manipulate qubits.",
      content: "Quantum gates are the building blocks of quantum circuits, analogous to logical gates in classical computing. However, unlike classical gates, quantum gates are reversible operations represented by unitary matrices.\n\nIn this lesson, we'll explore the most common quantum gates including:\n\n- The Hadamard (H) gate, which creates superposition\n\n- The Pauli-X, Y, and Z gates, which perform rotations\n\n- The CNOT (Controlled-NOT) gate, which entangles qubits\n\n- The Toffoli gate, which is universal for classical computation",
      type: "video",
      duration: 20,
      points: 15
    },
    {
      id: "2.1.1.3",
      title: "Build Your First Quantum Circuit",
      description: "Interactive activity to build a simple quantum circuit using basic gates.",
      content: "Now it's time to put your knowledge into practice! In this interactive activity, you'll build your first quantum circuit by arranging quantum gates in the correct order.\n\nYou'll create a simple circuit that generates a Bell state, which is one of the simplest examples of quantum entanglement. Follow the step-by-step instructions to place the Hadamard and CNOT gates correctly.",
      type: "interactive",
      interactiveComponent: "BuildAtomActivity",
      duration: 25,
      points: 20
    },
    {
      id: "2.1.1.4",
      title: "Quantum Circuits Quiz",
      description: "Test your understanding of quantum circuits and gates.",
      content: "Let's check what you've learned about quantum circuits and gates with this quiz.",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
