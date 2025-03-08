
import { Module } from "@/data/types/courseTypes";

// Module 6: Quantum Technologies
export const module6: Module = {
  id: "1.1.6",
  title: "Quantum Technologies",
  description: "Explore practical applications of quantum physics in modern technology.",
  lessons: [
    {
      id: "1.1.6.1",
      title: "Quantum Computing Overview",
      description: "Learn about the basics of quantum computing and its potential.",
      content: "Quantum computing is a revolutionary technology that harnesses quantum mechanical phenomena to process information in ways that classical computers cannot. Unlike classical bits that can be either 0 or 1, quantum bits or 'qubits' can exist in multiple states simultaneously due to superposition.\n\nThis unique property allows quantum computers to perform certain types of calculations much faster than classical computers. For example, quantum computers excel at factoring large numbers, simulating quantum systems, and solving optimization problems.\n\nCurrent quantum computers are still in their early stages, with limited qubits and high error rates, but companies like IBM, Google, and Microsoft are making significant progress in developing more powerful and stable quantum processors.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "1.1.6.2",
      title: "Quantum Cryptography",
      description: "Discover how quantum physics is making communication more secure.",
      content: "Quantum cryptography uses the principles of quantum mechanics to secure communications. The most well-known application is Quantum Key Distribution (QKD), which allows two parties to produce a shared random secret key known only to them, which can then be used to encrypt and decrypt messages.\n\nThe security of quantum cryptography relies on the fundamental aspects of quantum physics, such as the no-cloning theorem and the fact that measuring a quantum system disturbs it. If an eavesdropper tries to intercept the quantum keys being shared, their very act of measurement would introduce detectable anomalies.\n\nThis technology is already being used in some high-security environments and has the potential to revolutionize secure communication in a world where traditional encryption methods may be vulnerable to quantum computing attacks.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=7MdEHsRZxvo"
    },
    {
      id: "1.1.6.3",
      title: "Qubit Measurement Probability Simulator",
      description: "Interact with a qubit measurement probability simulator.",
      content: "In this interactive lesson, you'll explore how qubit states are represented and how measurement probabilities work in quantum computing. This simulator allows you to adjust the alpha and beta parameters of a qubit state and see how that affects the probability of measuring |0⟩ or |1⟩.\n\nBy experimenting with different values, you'll gain an intuitive understanding of quantum superposition and how quantum measurement works. This is fundamental to understanding how quantum computers process information differently from classical computers.",
      type: "interactive",
      duration: 25,
      points: 20,
      externalSimulator: {
        type: "iframe",
        url: "/Qubit Measurement Probability.html", // Using your uploaded file
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.6.4",
      title: "Quantum Heroes Card Game",
      description: "Learn about quantum pioneers through an interactive card game.",
      content: "It's time to have some fun while learning about the pioneers of quantum physics! In this interactive card matching game, you'll match famous quantum scientists with their groundbreaking discoveries.\n\nYou'll learn about scientists like Niels Bohr, Marie Curie, Werner Heisenberg, and Erwin Schrödinger in an engaging way. Each correct match reveals a fascinating fact about these quantum heroes. Try to match all the cards to complete the game!",
      type: "interactive",
      duration: 20,
      points: 15,
      externalSimulator: {
        type: "iframe",
        url: "/Quantum Heroes Card Game.html", // Using your uploaded file
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.6.5",
      title: "Quantum Chess Simulator",
      description: "Explore quantum principles through a modified chess game.",
      content: "Quantum Chess is a variant of chess that incorporates quantum phenomena like superposition and entanglement. In this simulator, you'll see how these quantum principles can change the strategies in a familiar game.\n\nExperiment with placing pieces in superposition across multiple squares and observe what happens when you 'measure' them. This interactive simulation helps demonstrate quantum concepts in a fun and intuitive way.",
      type: "interactive",
      duration: 30,
      points: 25,
      externalSimulator: {
        type: "iframe",
        url: "/Quantum Chess.html", // Using your uploaded file
        height: 700,
        width: "100%"
      }
    },
    {
      id: "1.1.6.6",
      title: "Quantum Heroes Match-Up",
      description: "Match quantum pioneers with their contributions in this fun game.",
      content: "Let's reinforce your knowledge of quantum pioneers with another interactive game! In this match-up challenge, you'll connect quantum physicists with their most significant contributions to the field.\n\nThis game will help you remember the key figures in quantum physics and their groundbreaking work. Each successful match provides additional information about these quantum heroes and their impact on our understanding of the quantum world.",
      type: "interactive",
      duration: 15,
      points: 15,
      externalSimulator: {
        type: "iframe",
        url: "/Quantum Heroes Match-Up.html", // Using your uploaded file
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.6.7",
      title: "Quantum Technologies Quiz",
      description: "Test your understanding of quantum technologies and their applications.",
      content: "Let's test your knowledge of quantum technologies!",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
