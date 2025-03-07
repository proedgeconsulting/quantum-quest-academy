
import { Module } from "@/data/types/courseTypes";

// Module 4: Quantum Reinforcement Learning
export const quantumReinforcementLearningModule: Module = {
  id: "3.2.4",
  title: "Quantum Reinforcement Learning",
  description: "Explore how quantum computing helps AI learn through trial and error more efficiently.",
  lessons: [
    {
      id: "3.2.4.1",
      title: "Learning by Doing: The Quantum Way",
      description: "Discover how quantum reinforcement learning helps AI master complex tasks.",
      content: "Have you ever learned a skill by practicing over and over? That's how reinforcement learning works - AI learns by trying things, making mistakes, and getting better. In this lesson, we'll explore how quantum computing gives this learning process a major upgrade!\n\nUsing fun examples and games, you'll learn how quantum reinforcement learning can try many different approaches at the same time, helping AI find the best strategies much faster. We'll see how this is being used to train robots, optimize traffic systems, and even create unbeatable game-playing AI!",
      type: "reading",
      duration: 20,
      points: 50
    },
    {
      id: "3.2.4.2",
      title: "Quantum Maze Runner",
      description: "Train a quantum AI to navigate through increasingly complex mazes.",
      content: "Can your quantum AI find its way through a challenging maze? In this exciting activity, you'll train a quantum reinforcement learning agent to navigate through mazes of increasing difficulty.\n\nYour quantum AI will learn by trying different paths and receiving rewards when it makes progress. The quantum properties allow it to explore multiple paths simultaneously, helping it learn optimal routes much faster than classical AI. Guide your quantum agent through simple grids all the way to complex 3D labyrinths. Can you train the ultimate maze-solving AI?",
      type: "interactive",
      duration: 25,
      points: 100,
      interactiveComponent: "QuantumSimulator"
    },
    {
      id: "3.2.4.3",
      title: "Quantum Resource Manager",
      description: "Use quantum reinforcement learning to manage resources in a virtual city.",
      content: "You're the manager of a growing virtual city, and you need to make smart decisions about resources like water, energy, and transportation. This is a perfect job for quantum reinforcement learning!\n\nIn this simulation game, you'll train a quantum AI to balance the needs of your city's residents while dealing with changing conditions like weather, population growth, and special events. Your quantum AI can consider many different resource allocation strategies simultaneously, helping you find optimal solutions. Can you create a thriving, sustainable city with the help of your quantum assistant?",
      type: "interactive",
      duration: 30,
      points: 120,
      interactiveComponent: "BuildAtomActivity"
    }
  ]
};

// For backwards compatibility
export const module4 = quantumReinforcementLearningModule;
