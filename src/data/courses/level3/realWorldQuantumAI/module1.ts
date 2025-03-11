
import { Module } from "@/data/types/courseTypes";

// Module 1: Quantum AI Applications
export const quantumAIApplicationsModule: Module = {
  id: "3.2.1",
  title: "Quantum AI Applications",
  description: "Discover real-world applications of quantum AI in various fields.",
  lessons: [
    {
      id: "3.2.1.1",
      title: "Introduction to Real-World Quantum AI",
      description: "Learn about exciting applications of quantum AI in the real world.",
      content: "Welcome to the Real-World Quantum AI course! In this first lesson, we'll explore how quantum computers are being used with artificial intelligence to solve real problems that are too difficult for regular computers.\n\nWe'll look at cool examples like helping scientists discover new medicines, making self-driving cars safer, creating better weather forecasts, and even helping find planets in space! Get ready to discover how quantum AI is changing our world in amazing ways.",
      type: "reading",
      duration: 20,
      points: 50
    },
    {
      id: "3.2.1.2",
      title: "Quantum Game: AI Challenge",
      description: "Play a game where you compete against a quantum AI to solve puzzles.",
      content: "It's game time! In this fun activity, you'll play against a quantum AI in a series of puzzles and challenges. The AI uses quantum computing to think about many possible moves at once, making it a tough opponent!\n\nAs you play, you'll learn how quantum AI thinks differently from regular computer AI, and you'll discover strategies to solve problems in new ways. Can you outsmart the quantum AI? Let's find out!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Quantum-AI-Challenge.html",
        height: 600,
        width: "100%"
      },
      duration: 25,
      points: 100
    },
    {
      id: "3.2.1.3",
      title: "Design Your Quantum AI App",
      description: "Get creative and design your own quantum AI application to solve a problem you care about.",
      content: "Now it's your turn to be an inventor! In this creative challenge, you'll design your own quantum AI application to solve a problem that matters to you. Maybe you want to help protect endangered animals, create amazing music, or build the ultimate video game.\n\nYou'll learn about the special powers of quantum AI and how to apply them to your idea. Then you'll create a simple design for your application and explain how it would work. Who knows - your idea might be the next big quantum breakthrough!",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-ai-designer.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 120
    }
  ]
};

// For backwards compatibility
export const module1 = quantumAIApplicationsModule;
