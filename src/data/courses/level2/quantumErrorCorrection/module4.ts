
import { Module } from "@/data/types/courseTypes";

// Module 4: Advanced Error Correction Techniques
export const module4: Module = {
  id: "2.3.4",
  title: "Advanced Error Correction Techniques",
  description: "Explore sophisticated techniques for quantum error correction.",
  lessons: [
    {
      id: "2.3.4.1",
      title: "The Surface Code",
      description: "Learn about the leading quantum error correction code for large-scale quantum computing.",
      content: "The surface code is widely considered the most promising approach for large-scale quantum error correction. In this lesson, we'll explore what makes the surface code special and how it works.\n\nYou'll learn about:\n\n- The 2D lattice structure of the surface code\n- How the code scales with increasing code distance\n- The concepts of X-cuts and Z-cuts in the lattice\n- The role of plaquette and star operators\n- How error correction proceeds through decoding\n\nWe'll use visualizations and examples to make these complex concepts easier to understand. By the end of this lesson, you'll appreciate why many quantum computing companies are focusing their error correction efforts on the surface code.",
      type: "reading",
      duration: 25,
      points: 20
    },
    {
      id: "2.3.4.2",
      title: "Error Correction Strategies",
      description: "Compare different approaches to quantum error correction.",
      content: "Not all quantum error correction strategies are created equal. In this interactive lesson, you'll explore the strengths and weaknesses of different error correction approaches in various scenarios.\n\nYou'll experiment with different codes and noise models to discover which strategies work best in different situations. This hands-on approach will help you develop intuition for quantum error correction decision-making.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-Error-Strategy-Game.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "2.3.4.3",
      title: "Logical Circuit Operations",
      description: "Learn how to perform quantum operations on logical qubits.",
      content: "Once we have encoded our quantum information into logical qubits, how do we perform computations on them? This interactive lesson explores how to implement logical gates on error-corrected qubits.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Logical-Circuit-Simulator.html",
        height: 600,
        width: "100%"
      },
      duration: 35,
      points: 30
    },
    {
      id: "2.3.4.4",
      title: "Advanced Error Correction Quiz",
      description: "Test your understanding of advanced quantum error correction techniques.",
      content: "Let's check your understanding of the surface code and other advanced error correction techniques.",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
