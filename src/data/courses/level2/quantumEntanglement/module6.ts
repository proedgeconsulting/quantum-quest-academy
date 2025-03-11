
import { Module } from "@/data/types/courseTypes";

// Module 6: Multipartite Entanglement
export const module6: Module = {
  id: "2.2.6",
  title: "Multipartite Entanglement",
  description: "Explore quantum entanglement between multiple particles.",
  lessons: [
    {
      id: "2.2.6.1",
      title: "Beyond Two Qubits",
      description: "Learn about GHZ states, W states, and other forms of multipartite entanglement.",
      content: "So far, we've mainly focused on entanglement between two quantum systems, but quantum entanglement can exist between three or more systems as well. This is called multipartite entanglement, and it has some fascinating properties that aren't present in bipartite entanglement.\n\nIn this lesson, we'll explore important multipartite entangled states such as GHZ states (named after Greenberger, Horne, and Zeilinger) and W states. We'll discuss how these states are created, how they behave under measurements, and their applications in quantum information protocols. We'll also introduce the concept of entanglement monogamy, which constrains how quantum systems can be entangled with multiple partners.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "2.2.6.2",
      title: "Quantum Networks",
      description: "Learn how multipartite entanglement enables quantum networks and distributed quantum computing.",
      content: "Quantum networks leverage multipartite entanglement to connect multiple quantum processors, enabling distributed quantum computing and secure multi-party quantum communication. In this lesson, we'll explore the principles, architecture, and potential applications of quantum networks.\n\nWe'll discuss quantum repeaters, which allow quantum information to be relayed over long distances, and entanglement swapping, which enables entanglement between particles that have never interacted. We'll also cover quantum routers, quantum memories, and other components essential for building quantum networks. You'll learn about current experimental implementations and the challenges that must be overcome to build large-scale quantum networks.",
      type: "video",
      duration: 25,
      points: 20
    },
    {
      id: "2.2.6.3",
      title: "Quantum Treasure Hunt",
      description: "Use multipartite entanglement to solve a quantum treasure hunt challenge.",
      content: "In this interactive challenge, you'll use your knowledge of multipartite entanglement to solve a quantum treasure hunt. You'll need to create and manipulate GHZ and W states to unlock clues and find the quantum treasure. This activity will help you develop intuition for how multipartite entangled states behave under different operations and measurements.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Treasure-Hunt.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    }
  ]
};
