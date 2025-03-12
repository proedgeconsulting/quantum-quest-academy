
import { Module } from "@/data/types/courseTypes";

// Module 7: Advanced Quantum Communication
export const module7: Module = {
  id: "2.2.7",
  title: "Advanced Quantum Communication",
  description: "Learn about advanced quantum communication protocols based on entanglement.",
  lessons: [
    {
      id: "2.2.7.1",
      title: "Quantum Repeaters",
      description: "Learn how quantum repeaters enable long-distance quantum communication.",
      content: "One of the biggest challenges in quantum communication is the transmission of quantum information over long distances. Unlike classical signals, quantum states cannot be amplified without destroying their quantum properties, due to the no-cloning theorem. Quantum repeaters provide a solution to this problem by using entanglement swapping and quantum memories.\n\nIn this lesson, we'll explore how quantum repeaters work, examining the role of entanglement purification and quantum error correction in maintaining the fidelity of quantum information over long distances. We'll discuss current experimental implementations and the challenges that must be overcome to build a global quantum internet.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.7.2",
      title: "Quantum Conference Key Agreement",
      description: "Learn how entanglement enables secure multi-party communication.",
      content: "Quantum conference key agreement (CKA) extends quantum key distribution to multiple parties, allowing them to establish a shared secret key for secure group communication. This is particularly useful for secure teleconferencing, distributed computing, and blockchain applications.\n\nIn this lesson, we'll examine protocols for quantum CKA based on multipartite entanglement, particularly GHZ states. We'll discuss the security advantages of quantum CKA over classical approaches and explore potential applications in secure multi-party computation.",
      type: "video",
      duration: 20,
      points: 15
      videoUrl: "https://www.youtube.com/watch?v=gctqXPlu-54"
    },
    {
      id: "2.2.7.3",
      title: "Quantum Spy Catcher",
      description: "Test your understanding of quantum communication security in an interactive game.",
      content: "In this interactive game, you'll play the role of a quantum security expert tasked with detecting and preventing eavesdropping on a quantum communication channel. You'll use your knowledge of quantum entanglement and measurement to identify potential security breaches and implement countermeasures.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Spy-Catcher.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    }
  ]
};
