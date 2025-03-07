
import { Module } from "@/data/types/courseTypes";

// Module 8: Quantum Code Breakers
export const module8: Module = {
  id: "2.3.8",
  title: "Quantum Code Breakers",
  description: "Learn to create and break quantum error correction codes.",
  lessons: [
    {
      id: "2.3.8.1",
      title: "Secret Quantum Codes",
      description: "Discover how to hide quantum information using special codes.",
      content: "Welcome, Quantum Code Breakers! In this lesson, you'll learn how quantum error correction codes are like secret codes that protect quantum information from being corrupted.\n\nWe'll start with a simple encoding mission: hiding one qubit of information across three physical qubits. You'll learn how this special pattern makes it possible to detect and correct errors without ever looking at the secret information directly (which would destroy it).\n\nYou'll create your own simple quantum code and test it against different types of errors. By the end of this lesson, you'll understand the basic principles behind quantum error correction codes and how they differ from classical secret codes.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.3.8.2",
      title: "Code Breaking Challenge",
      description: "Try to crack different quantum codes by introducing errors.",
      content: "Now that you know how to create quantum error correction codes, it's time to test their limits! In this interactive challenge, you'll play both roles - the protector creating codes and the mischievous Noise Monster trying to break them.\n\nYou'll be presented with different quantum codes of increasing complexity. Your mission is to find their weaknesses by introducing specific error patterns that can fool the code. Can you find error patterns that the code can't detect or correct?\n\nAs you progress, you'll unlock more powerful error types to use against the codes, and learn about the theoretical limits of different quantum error correction strategies. This friendly competition will deepen your understanding of how quantum codes work and why some are stronger than others.",
      type: "interactive",
      interactiveComponent: "AtomSimulation",
      duration: 25,
      points: 20
    },
    {
      id: "2.3.8.3",
      title: "Building the Perfect Code",
      description: "Design your own quantum error correction code with special properties.",
      content: "In this creative lesson, you'll design your own quantum error correction code with specific properties to protect against different types of errors.\n\nYou'll start with a set of requirements - like protecting against certain error patterns or using the minimum number of qubits. Then you'll use our code design tools to construct a quantum error correction code that meets these requirements.\n\nYou can test your code against different error models, measure its performance, and compete with friends to create the most efficient code. This hands-on design experience will help you understand the trade-offs involved in quantum error correction and why certain code structures work better than others for specific types of errors.",
      type: "interactive",
      interactiveComponent: "RandomNumberSimulator",
      duration: 30,
      points: 25
    },
    {
      id: "2.3.8.4",
      title: "Quantum Code Tournament",
      description: "Pit your error correction code against others in a friendly competition.",
      content: "It's tournament time! In this exciting lesson, your quantum error correction code will compete against codes created by other students in a series of challenges.\n\nEach round of the tournament tests different aspects of error correction: efficiency (using the fewest qubits), power (correcting the most errors), speed (requiring the least time to decode), and adaptability (handling unexpected error types).\n\nYou'll get feedback after each round about your code's performance and have chances to improve it based on what you learn. The tournament culminates in a final challenge where your code faces the ultimate test: a realistic noise environment modeled after actual quantum hardware. May the best code win!",
      type: "interactive",
      interactiveComponent: "QubitStateSimulator",
      duration: 35,
      points: 30
    }
  ]
};
