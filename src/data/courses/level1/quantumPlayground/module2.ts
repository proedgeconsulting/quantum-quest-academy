
import { Module } from "@/data/types/courseTypes";

// Module 2: Quantum Circuit Puzzles
export const module2: Module = {
  id: "1.2.2",
  title: "Quantum Circuit Puzzles",
  description: "Build and experiment with simple quantum circuits to solve puzzles.",
  lessons: [
    {
      id: "1.2.2.1",
      title: "Quantum Circuit Sandbox",
      description: "Learn the basics of quantum circuits through an interactive sandbox environment.",
      content: `# Quantum Circuit Sandbox

## Introduction to Quantum Circuits

Quantum circuits are the foundation of quantum computing. Just as classical computers use logic gates to process bits, quantum computers use quantum gates to manipulate qubits.

## Sandbox Features

In this interactive sandbox, you can:

1. Add qubits to your quantum register
2. Apply various quantum gates (X, H, CNOT, etc.)
3. Measure the results and see probabilities
4. Run simple quantum algorithms

## How to Use the Sandbox

- Drag and drop gates onto the circuit
- Connect gates to create your circuit
- Click "Run" to simulate the quantum computation
- Observe the output probabilities`,
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-circuit-designer.html",
        height: 500,
        width: "100%"
      },
      duration: 40,
      points: 30
    },
    {
      id: "1.2.2.2",
      title: "Quantum Logic Puzzles",
      description: "Solve puzzles using quantum gates and quantum logic.",
      content: `# Quantum Logic Puzzles

## Thinking in Quantum

Quantum logic differs fundamentally from classical logic. In these puzzles, you'll need to think "quantumly" to find solutions!

## Puzzle Concepts

You'll work with several quantum concepts:
- Superposition and interference
- Quantum entanglement
- The no-cloning theorem
- Quantum measurement

## How to Play

1. Each puzzle presents a quantum circuit with missing gates
2. Your goal is to complete the circuit to achieve the target output state
3. Choose from available quantum gates to fill in the blanks
4. Test your solution by running the completed circuit`,
      type: "interactive",
      externalSimulator: {
        type: "iframe",
        url: "/simulators/quantum-gate-puzzle.html",
        height: 500,
        width: "100%"
      },
      duration: 35,
      points: 30
    },
    {
      id: "1.2.2.3",
      title: "Quantum Circuit Puzzles Quiz",
      description: "Test your understanding of quantum circuits and quantum logic.",
      content: "Let's check what you've learned about quantum circuits and logic.",
      type: "quiz",
      duration: 15,
      points: 15
    }
  ]
};
