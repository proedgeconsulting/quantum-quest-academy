
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
      videoUrl: "https://www.youtube.com/watch?v=_5NQf8k3Jo0"
    },
    {
      id: "1.1.6.3",
      title: "Quantum Technologies Simulator",
      description: "Interact with simulations of various quantum technologies.",
      content: "In this interactive lesson, you'll explore simulations of different quantum technologies. You can experiment with quantum computing circuits, quantum key distribution for secure communication, and quantum sensors that can detect tiny changes in gravity, magnetic fields, and more.\n\nThese simulations will help you understand how quantum principles are applied in real-world technologies and why they offer advantages over classical approaches. Try different configurations and see how the quantum systems respond!",
      type: "interactive",
      duration: 25,
      points: 20,
      externalSimulator: {
        type: "iframe",
        url: "simulators/Quantum Technologies.html",
        height: 600,
        width: "100%"
      }
    },
    {
      id: "1.1.6.4",
      title: "Quantum Technologies Quiz",
      description: "Test your understanding of quantum technologies and their applications.",
      content: "Let's test your knowledge of quantum technologies!",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
