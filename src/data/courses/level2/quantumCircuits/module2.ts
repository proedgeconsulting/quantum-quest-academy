
import { Module } from "@/data/types/courseTypes";

// Module 2: Quantum Algorithms
export const module2: Module = {
  id: "2.1.2",
  title: "Quantum Algorithms",
  description: "Explore fundamental quantum algorithms and their applications.",
  lessons: [
    {
      id: "2.1.2.1",
      title: "Introduction to Quantum Algorithms",
      description: "Learn about the algorithms that give quantum computers their power.",
      content: "Quantum algorithms are specifically designed to run on quantum computers and can solve certain problems much faster than classical algorithms. These algorithms leverage quantum phenomena like superposition and entanglement to achieve a computational advantage.\n\nIn this lesson, we'll introduce the concept of quantum algorithms and why they're important. We'll also discuss the types of problems where quantum algorithms offer a significant speedup compared to classical algorithms.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.1.2.2",
      title: "The Deutsch-Jozsa Algorithm",
      description: "Understand one of the first quantum algorithms that demonstrated quantum advantage.",
      content: "The Deutsch-Jozsa algorithm was one of the first quantum algorithms to show a speedup over classical algorithms for a specific problem. While not particularly useful for real-world applications, it clearly demonstrates the power of quantum computing.\n\nIn this lesson, we'll walk through the algorithm step by step, from problem definition to implementation as a quantum circuit. You'll learn how it uses quantum parallelism to determine a property of a function in just one query that would take multiple queries classically.",
      type: "video",
      duration: 20,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=7MdEHsRZxvo"
    },
    {
      id: "2.1.2.3",
      title: "Grover's Search Algorithm Simulation",
      description: "Interactive simulation of Grover's quantum search algorithm.",
      content: "Grover's algorithm is a quantum algorithm for searching an unsorted database with quadratic speedup compared to classical algorithms. It's one of the most important quantum algorithms with many potential applications.\n\nIn this interactive activity, you'll explore a simplified simulation of Grover's algorithm. You'll be able to visualize how the algorithm amplifies the probability of finding the correct answer through a process known as amplitude amplification.",
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/Grover's-Search-Algorithm.html",
        height: 600,
        width: "100%"
      },
      duration: 30,
      points: 25
    },
    {
      id: "2.1.2.4",
      title: "Quantum Algorithms Quiz",
      description: "Test your understanding of quantum algorithms.",
      content: "Let's test your knowledge of quantum algorithms with this comprehensive quiz.",
      type: "quiz",
      duration: 15,
      points: 25
    }
  ]
};
