
import { Course } from "@/data/types/courseTypes";

// Level 2 Course: Quantum Circuits
export const quantumCircuitsCourse: Course = {
  id: "2.1",
  title: "Quantum Circuits",
  description: "Learn to build and understand quantum circuits and gates.",
  level: 2,
  duration: "6 weeks",
  icon: "circuit",
  weeks: 6,
  modules: [
    {
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
          interactiveComponent: "BuildAtomActivity", // Reusing existing component for now
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
    },
    {
      id: "2.1.2",
      title: "Quantum Algorithms",
      description: "Explore fundamental quantum algorithms and their applications.",
      lessons: [
        {
          id: "2.1.2.1",
          title: "Introduction to Quantum Algorithms",
          description: "Learn about the algorithms that give quantum computers their power.",
          content: "Quantum algorithms are specifically designed to run on quantum computers and can solve certain problems much faster than classical algorithms. These algorithms leverage quantum phenomena like superposition and entanglement to achieve a computational advantage.\n\nIn this lesson, we'll introduce the concept of quantum algorithms and why they're important. We'll also discuss the types of problems where quantum algorithms offer a significant speedup compared to classical algorithms.",
          type: "reading",
          duration: 15,
          points: 10
        },
        {
          id: "2.1.2.2",
          title: "The Deutsch-Jozsa Algorithm",
          description: "Understand one of the first quantum algorithms that demonstrated quantum advantage.",
          content: "The Deutsch-Jozsa algorithm was one of the first quantum algorithms to show a speedup over classical algorithms for a specific problem. While not particularly useful for real-world applications, it clearly demonstrates the power of quantum computing.\n\nIn this lesson, we'll walk through the algorithm step by step, from problem definition to implementation as a quantum circuit. You'll learn how it uses quantum parallelism to determine a property of a function in just one query that would take multiple queries classically.",
          type: "video",
          duration: 20,
          points: 15
        },
        {
          id: "2.1.2.3",
          title: "Grover's Search Algorithm Simulation",
          description: "Interactive simulation of Grover's quantum search algorithm.",
          content: "Grover's algorithm is a quantum algorithm for searching an unsorted database with quadratic speedup compared to classical algorithms. It's one of the most important quantum algorithms with many potential applications.\n\nIn this interactive activity, you'll explore a simplified simulation of Grover's algorithm. You'll be able to visualize how the algorithm amplifies the probability of finding the correct answer through a process known as amplitude amplification.",
          type: "interactive",
          interactiveComponent: "AtomSimulation", // Reusing existing component for now
          duration: 30,
          points: 25
        },
        {
          id: "2.1.2.4",
          title: "Quantum Algorithms Quiz",
          description: "Test your understanding of quantum algorithms.",
          content: "Let's test your knowledge of quantum algorithms with this comprehensive quiz.",
          type: "quiz",
          duration: 15,
          points: 25
        }
      ]
    }
  ]
};
