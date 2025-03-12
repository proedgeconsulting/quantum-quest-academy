import { Module } from "@/data/types/courseTypes";

// Module 4: Quantum Circuit Simulation
export const module4: Module = {
  id: "2.1.4",
  title: "Quantum Circuit Simulation",
  description: "Learn to simulate and visualize quantum circuits on classical computers.",
  lessons: [
    {
      id: "2.1.4.1",
      title: "Principles of Quantum Simulation",
      description: "Understand how classical computers can simulate quantum systems.",
      content: "While quantum computers exploit quantum mechanics to perform calculations, we can use classical computers to simulate smaller quantum systems. This is crucial for developing and testing quantum algorithms before running them on actual quantum hardware.\n\nIn this lesson, you'll learn:\n\n- The mathematical foundations of quantum simulation\n\n- How state vectors and density matrices represent quantum states\n\n- The limitations of classical simulation (why it becomes exponentially harder as qubits increase)\n\n- Various simulation methods and their trade-offs\n\n- When approximation techniques become necessary\n\nWe'll also discuss the boundary between what's efficiently simulable classically and what requires quantum hardware, helping you understand the true advantage of quantum computing.",
      type: "reading",
      duration: 20,
      points: 15
    },
    {
      id: "2.1.4.2",
      title: "Visualizing Quantum States",
      description: "Learn techniques to visualize and understand complex quantum states.",
      content: "Quantum states can be difficult to conceptualize due to their complex, probabilistic nature. In this video lesson, we'll explore various visualization techniques that make quantum states more intuitive.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=MmG2ah5Df4g"
    },
    {
      id: "2.1.4.3",
      title: "Hands-On Quantum Simulation",
      description: "Use simulation tools to explore the behavior of quantum circuits.",
      content: "In this interactive session, you'll use quantum simulation tools to explore how quantum circuits behave under different conditions. You'll be able to modify circuit parameters, observe the resulting quantum states, and gain intuition about quantum behavior.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Circuit-Sandbox.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "2.1.4.4",
      title: "Quantum Simulation Quiz",
      description: "Test your understanding of quantum circuit simulation concepts.",
      content: "Let's test your understanding of quantum circuit simulation with this comprehensive quiz. You'll be assessed on:\n\n- The mathematics behind quantum simulation\n\n- Interpreting visualization techniques for quantum states\n\n- Understanding the limitations of classical simulation\n\n- Identifying appropriate simulation methods for different quantum systems\n\n- Analyzing simulation results to draw conclusions about quantum algorithms",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
