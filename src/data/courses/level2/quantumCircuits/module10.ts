
import { Module } from "@/data/types/courseTypes";

// Module 10: Quantum Detective Agency
export const module10: Module = {
  id: "2.1.10",
  title: "Quantum Detective Agency",
  description: "Solve mysteries using quantum circuits as a quantum detective.",
  lessons: [
    {
      id: "2.1.10.1",
      title: "The Quantum Detective",
      description: "Learn how quantum algorithms can help solve mysteries.",
      content: "Welcome to the Quantum Detective Agency! As a quantum detective, you'll use special quantum circuits to solve mysteries that would be difficult or impossible to solve using classical methods.\n\nIn this lesson, you'll learn about quantum search algorithms that can find clues hidden in large databases much faster than classical search methods. You'll discover how quantum superposition and interference can help you narrow down suspects and find the solution to complex mysteries.",
      type: "reading",
      duration: 15,
      points: 10
    },
    {
      id: "2.1.10.2",
      title: "The Case of the Hidden Message",
      description: "Use a quantum oracle to find a hidden message.",
      content: "Your first case as a quantum detective has arrived! Someone has hidden an important message in a quantum database, and you need to find it using a special quantum circuit called Grover's algorithm.\n\nIn this video, we'll explain how Grover's algorithm works like a quantum flashlight that gradually brightens the location of the hidden message. You'll learn about quantum oracles (special circuits that recognize the right answer) and how quantum amplitude amplification can make the correct answer stand out from all the wrong answers.",
      type: "video",
      duration: 15,
      points: 15,
      videoUrl: "https://www.youtube.com/watch?v=xBGVPb8R9vw"
    },
    {
      id: "2.1.10.3",
      title: "Solving the Quantum Mystery",
      description: "Build and run a circuit to solve a quantum detective case.",
      content: "Time to put your quantum detective skills to the test! In this interactive activity, you'll build a quantum circuit using Grover's algorithm to solve a mystery.\n\nThe mystery involves finding which of 16 suspects committed the crime. A classical detective would need to check up to all 16 suspects one by one, but as a quantum detective, you can find the culprit much faster using your quantum circuit. \n\nFollow the step-by-step instructions to build your quantum search circuit, run it, and measure the results to identify the culprit. How quickly can you solve the case?",
      type: "interactive",
      interactiveComponent: "QuantumCircuitSimulator",
      duration: 25,
      points: 25
    },
    {
      id: "2.1.10.4",
      title: "Quantum Detective Quiz",
      description: "Test your understanding of quantum search algorithms.",
      content: "Let's check what you've learned about being a quantum detective!",
      type: "quiz",
      duration: 10,
      points: 20
    },
    {
      id: "2.1.10.5",
      title: "Quantum Chess",
      description: "Play chess with quantum moves and superposition.",
      content: `# Quantum Chess

## Chess with a Quantum Twist

Quantum Chess adds quantum mechanical principles to the traditional game of chess, creating entirely new strategic possibilities.

## Quantum Rules

In Quantum Chess:
- Pieces can exist in superposition across multiple squares
- Quantum moves allow pieces to be in two places at once
- Measurement occurs when pieces interact
- Entanglement can link the fate of different pieces

## How to Play

1. Make classical moves as in regular chess (click a piece, then click where to move it)
2. Use quantum moves to place pieces in superposition (click the "Quantum Mode" button first)
3. Force measurement by clicking the "Measure" button
4. Try to create strategic advantages using quantum mechanics!

## Interactive Quantum Chess Simulator

Try the interactive Quantum Chess simulator below:`,
      type: "interactive",
      interactiveComponent: "QuantumChessSimulator",
      duration: 30,
      points: 35
    }
  ]
};
