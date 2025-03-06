
import { Course } from "@/data/types/courseTypes";

// Level 2 Course: Quantum Entanglement
export const quantumEntanglementCourse: Course = {
  id: "2.2",
  title: "Quantum Entanglement",
  description: "Explore the phenomenon of quantum entanglement and its applications.",
  level: 2,
  duration: "5 weeks",
  icon: "circuit",
  weeks: 5,
  modules: [
    {
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
    },
    {
      id: "2.2.2",
      title: "Applications of Entanglement",
      description: "Learn how entanglement enables powerful quantum technologies.",
      lessons: [
        {
          id: "2.2.2.1",
          title: "Quantum Teleportation",
          description: "Understand how entanglement enables quantum teleportation protocols.",
          content: "Quantum teleportation is a process that transfers the quantum state of one particle to another distant particle without physically moving the particle itself. This remarkable protocol, first proposed in 1993, relies entirely on quantum entanglement and classical communication.\n\nIn this lesson, we'll walk through the quantum teleportation protocol step by step, explaining how it works and why it's important. We'll explore how the protocol uses entanglement as a resource to transmit quantum information, and discuss its applications in quantum communication networks and distributed quantum computing.",
          type: "video",
          duration: 25,
          points: 20
        },
        {
          id: "2.2.2.2",
          title: "Quantum Cryptography",
          description: "Learn how entanglement enables secure quantum key distribution.",
          content: "Quantum cryptography uses the principles of quantum mechanics to enable secure communication between parties. In particular, quantum key distribution (QKD) protocols like BB84 and E91 allow two parties to produce a shared random secret key that can be used to encrypt and decrypt messages.\n\nIn this lesson, we'll focus on entanglement-based QKD protocols, explaining how the unique properties of entangled states make it possible to detect any eavesdropping attempt. We'll walk through the E91 protocol designed by Artur Ekert, which uses Bell's inequality to guarantee security, and discuss the advantages of quantum cryptography over classical cryptographic methods.",
          type: "interactive",
          interactiveComponent: "AtomSimulation",
          duration: 30,
          points: 25
        },
        {
          id: "2.2.2.3",
          title: "Entanglement in Quantum Computing",
          description: "Discover how entanglement provides quantum computers their power.",
          content: "Entanglement is a crucial resource for quantum computing, enabling many quantum algorithms to achieve speedups over classical algorithms. Without entanglement, quantum computers would offer little or no advantage over classical computers.\n\nIn this lesson, we'll explore how entanglement is used in important quantum algorithms like Shor's factoring algorithm and Grover's search algorithm. We'll discuss the concept of quantum parallelism and how entanglement allows quantum computers to process vast amounts of information simultaneously. We'll also look at how entanglement enables quantum error correction, which is essential for building large-scale quantum computers.",
          type: "reading",
          duration: 20,
          points: 15
        }
      ]
    }
  ]
};
