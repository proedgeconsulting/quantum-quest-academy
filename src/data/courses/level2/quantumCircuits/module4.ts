
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
      content: "Quantum states can be difficult to conceptualize due to their complex, probabilistic nature. In this video lesson, we'll explore various visualization techniques that make quantum states more intuitive.\n\nWe'll cover:\n\n- Bloch sphere representation for single qubits\n\n- Bar charts and heatmaps for displaying probability amplitudes\n\n- Q-sphere visualizations for multi-qubit states\n\n- Density matrix visualizations\n\n- Circuit diagrams and their interpretation\n\nThese visualization techniques are not just educational tools—they're used by quantum researchers to understand the behavior of quantum systems and debug quantum algorithms. By the end of this lesson, you'll be able to interpret these visualizations and use them to understand what's happening in your quantum circuits.",
      type: "video",
      duration: 20,
      points: 15
      videoUrl:"https://www.youtube.com/watch?v=MmG2ah5Df4g"

    },
    {
      id: "2.1.4.3",
      title: "Hands-On Quantum Simulation",
      description: "Use simulation tools to explore the behavior of quantum circuits.",
      content: "In this interactive session, you'll use quantum simulation tools to explore how quantum circuits behave under different conditions. You'll be able to modify circuit parameters, observe the resulting quantum states, and gain intuition about quantum behavior.\n\nYou'll experiment with:\n\n- Simulating the Deutsch-Jozsa algorithm with different oracle functions\n\n- Observing how noise affects quantum teleportation\n\n- Exploring how the number of iterations in Grover's algorithm affects the probability of finding the correct answer\n\n- Testing quantum error correction codes\n\nBy running these simulations and seeing the results firsthand, you'll develop a deeper understanding of quantum algorithms and the challenges of quantum computation.",
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
