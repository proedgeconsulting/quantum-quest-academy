
import { Module } from "@/data/types/courseTypes";

// Module 2: Quantum AI Implementation
export const quantumAIImplementationModule: Module = {
  id: "3.2.2",
  title: "Quantum AI Implementation",
  description: "Learn how to implement basic quantum AI algorithms through interactive examples.",
  lessons: [
    {
      id: "3.2.2.1",
      title: "Building Blocks of Quantum AI",
      description: "Explore the basic components needed to create quantum AI systems.",
      content: "What makes quantum AI different from regular AI? In this lesson, we'll explore the special building blocks that make quantum AI work. You'll learn about quantum bits (qubits), quantum gates, and how they work together to process information in amazing new ways.\n\nWe'll use colorful animations and simple examples to show how quantum AI can explore many possibilities at the same time - something regular computers can't do! By the end of this lesson, you'll understand the magic ingredients that make quantum AI so powerful.",
      type: "reading",
      duration: 20,
      points: 50
    },
    {
      id: "3.2.2.2",
      title: "Quantum Pattern Detector",
      description: "Create a simple quantum AI that can find patterns in data.",
      content: "Time to build your first quantum AI tool! In this hands-on activity, you'll create a quantum pattern detector that can spot hidden patterns in data much faster than regular computers.\n\nYou'll use a friendly drag-and-drop interface to connect quantum components and train your AI to recognize different patterns. Then you'll test your creation on increasingly complex challenges. Can your quantum AI find the hidden melody in musical notes or spot the secret pattern in star constellations? Let's find out!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-pattern-detector.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 100
    },
    {
      id: "3.2.2.3",
      title: "Quantum vs. Classical Challenge",
      description: "Compare quantum and classical AI approaches through a series of fun challenges.",
      content: "It's time for the ultimate showdown: Quantum AI vs. Classical AI! In this exciting challenge, you'll solve the same problems using both quantum and classical approaches to see which works better.\n\nYou'll race to find solutions to mazes, spot patterns in pictures, and solve optimization puzzles. For each challenge, you'll see how the quantum approach might solve problems differently - sometimes much faster! You'll also learn that quantum isn't always better and discover when classical AI might still be the right choice.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-vs-classical.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 120
    }
  ]
};

// For backwards compatibility
export const module2 = quantumAIImplementationModule;
