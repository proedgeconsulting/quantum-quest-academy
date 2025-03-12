
import { Module } from "@/data/types/courseTypes";

// Module 2: Applications of Entanglement 
export const module2: Module = {
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
      points: 20,
      videoUrl: "https://www.youtube.com/watch?v=pi9P2Zkutp8",
    },
    {
      id: "2.2.2.2",
      title: "Quantum Cryptography",
      description: "Learn how entanglement enables secure quantum key distribution.",
      content: "Quantum cryptography uses the principles of quantum mechanics to enable secure communication between parties. In particular, quantum key distribution (QKD) protocols like BB84 and E91 allow two parties to produce a shared random secret key that can be used to encrypt and decrypt messages.\n\nIn this lesson, we'll focus on entanglement-based QKD protocols, explaining how the unique properties of entangled states make it possible to detect any eavesdropping attempt. We'll walk through the E91 protocol designed by Artur Ekert, which uses Bell's inequality to guarantee security, and discuss the advantages of quantum cryptography over classical cryptographic methods.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Cryptography.html",
        height: 600,
        width: "100%"
      },
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
};
