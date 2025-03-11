
import { Module } from "@/data/types/courseTypes";

// Module 11: Quantum Error Correction Time Travelers
export const module11: Module = {
  id: "2.3.11",
  title: "Quantum Error Correction Time Travelers",
  description: "Travel through time to discover the past and future of quantum error correction!",
  lessons: [
    {
      id: "2.3.11.1",
      title: "Visiting the Quantum Pioneers",
      description: "Travel back in time to meet the scientists who invented quantum error correction.",
      content: "Your time machine is calibrated and ready! In this imaginative lesson, you'll travel back to the 1990s to meet the brilliant scientists who first discovered quantum error correction.\n\nYou'll visit Peter Shor's laboratory when he first realized that quantum information could be protected, despite the no-cloning theorem. You'll watch as he designs the first 9-qubit code on his chalkboard, working through the mathematics that would revolutionize quantum computing.\n\nNext, you'll visit Andrew Steane as he develops more efficient codes, and then meet the other pioneers who built upon these early discoveries. Through these virtual encounters, you'll gain a deeper appreciation for the key insights that made quantum error correction possible and the historical context in which these breakthroughs occurred.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Pioneers-Visit.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 20
    },
    {
      id: "2.3.11.2",
      title: "Error Correction Through the Ages",
      description: "Explore how error correction has evolved from ancient times to quantum computing.",
      content: "Error correction isn't just a quantum phenomenon - humans have been developing ways to detect and correct errors throughout history! In this journey through time, we'll explore the fascinating evolution of error correction techniques.\n\nWe'll start in ancient times with simple error detection methods like checksums used by scribes copying texts. We'll visit the development of error-correcting codes during World War II for reliable communications, and the space race where error correction ensured messages from spacecraft arrived intact.\n\nFinally, we'll connect these classical techniques to modern quantum error correction, seeing how similar principles apply despite the quantum challenges. This historical perspective will help you understand the common principles behind all error correction methods while appreciating the unique aspects of the quantum approach.",
      type: "video",
      duration: 20,
      points: 15
    },
    {
      id: "2.3.11.3",
      title: "Future Quantum Computers Simulation",
      description: "Travel to the future to see advanced quantum computers with perfect error correction.",
      content: "Set your time machine for the year 2050! In this futuristic simulation, you'll explore advanced quantum computers that use sophisticated error correction techniques unknown in our time.\n\nYou'll interact with a large-scale fault-tolerant quantum computer that can maintain quantum coherence indefinitely through its advanced error correction systems. You'll see how thousands of physical qubits work together to create logical qubits with error rates millions of times lower than today's systems.\n\nYou'll get to run quantum algorithms that are impossible on today's computers, witnessing firsthand the capabilities that perfect error correction enables. Through this glimpse of the future, you'll understand the ultimate goal of quantum error correction research and the incredible computing power it aims to unlock.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Future-Quantum-Computers.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "2.3.11.4",
      title: "Creating Your Future Quantum Technology",
      description: "Design a futuristic quantum device that uses advanced error correction.",
      content: "After seeing the future of quantum computing, it's your turn to invent! In this creative lesson, you'll design your own futuristic quantum technology that relies on advanced error correction techniques.\n\nWill you create a quantum internet that enables perfectly secure communication? A quantum sensor that can detect minute changes in gravitational fields? A quantum biomedical scanner that can analyze molecules with unprecedented precision? Or something entirely different?\n\nYou'll sketch your device, describe how it works, explain what error correction techniques it uses, and present its benefits to society. The most creative and scientifically sound designs will be featured in a virtual museum of future quantum technologies that all students can visit. This forward-looking exercise will help you appreciate the practical applications that motivate quantum error correction research.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Future-Quantum-Technology.html",
        height: 600,
        width: "100%"
      },
      duration: 35,
      points: 30
    }
  ]
};
