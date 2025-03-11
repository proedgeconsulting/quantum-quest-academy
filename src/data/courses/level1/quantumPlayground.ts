
import { Course } from "@/data/types/courseTypes";

// Level 1 Course: Quantum Playground
export const quantumPlaygroundCourse: Course = {
  id: "1.2",
  title: "Quantum Playground",
  description: "Explore quantum concepts through fun games and activities.",
  level: 1,
  duration: "4 weeks",
  icon: "wave",
  weeks: 4,
  modules: [
    {
      id: "1.2.1",
      title: "Quantum Games & Simulations",
      description: "Learn quantum principles through interactive simulations and games.",
      lessons: [
        {
          id: "1.2.1.1",
          title: "Quantum Superposition Simulator",
          description: "Experiment with quantum states and superposition through an interactive visualization.",
          content: `# Quantum Superposition Simulator

## Understanding Quantum Superposition

Quantum superposition is one of the most fascinating aspects of quantum mechanics - the principle that quantum systems can exist in multiple states simultaneously until measured.

## Simulator Overview

In this interactive simulator, you can experiment with quantum bits (qubits) and see how they behave in superposition. The simulator below visualizes a qubit on the Bloch sphere, where:

- The north pole represents state |0⟩
- The south pole represents state |1⟩
- Points on the sphere represent superpositions of these states

## How to Use the Simulator

1. Adjust the sliders to change the probability amplitudes
2. Observe how the quantum state vector moves on the Bloch sphere
3. Click "Measure" to collapse the superposition into either state |0⟩ or |1⟩
4. Notice how probabilities affect measurement outcomes when repeated`,
          type: "interactive",
          externalSimulator: {
            type: "iframe",
            url: "/simulators/quantum-superposition.html",
            height: 500,
            width: "100%"
          },
          duration: 30,
          points: 25
        },
        {
          id: "1.2.1.2",
          title: "Quantum Billiards Game",
          description: "Play with quantum particles in a gamified billiard simulation.",
          content: `# Quantum Billiards Game

## Quantum Mechanics as a Game

Welcome to Quantum Billiards, where the familiar game of billiards takes on quantum mechanical properties!

## Game Concept

In classical billiards, balls follow predictable paths based on Newton's laws of motion. But in quantum billiards, particles behave according to quantum mechanics:

- Particles exist as probability waves
- They can tunnel through barriers
- They demonstrate interference patterns
- Measurement collapses their wave function

## How to Play

1. Launch the "quantum ball" with varying energy levels
2. Observe how it behaves differently from a classical ball
3. Create barriers and see quantum tunneling in action
4. Score points by getting the quantum ball to reach target positions`,
          type: "interactive",
          externalSimulator: {
            type: "iframe",
            url: "/simulators/Quantum-Billiards.html",
            height: 500,
            width: "100%"
          },
          duration: 35,
          points: 30
        },
        {
          id: "1.2.1.3",
          title: "Quantum Games Quiz",
          description: "Test your understanding of quantum game concepts.",
          content: "Let's check what you've learned about quantum games and their connection to quantum principles.",
          type: "quiz",
          duration: 15,
          points: 15
        }
      ]
    },
    {
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
    },
    {
      id: "1.2.3",
      title: "Quantum Particle Simulation",
      description: "Visualize and interact with quantum particles and their wave-like behavior.",
      lessons: [
        {
          id: "1.2.3.1",
          title: "Double-Slit Experiment Simulator",
          description: "Experience the famous experiment that demonstrates wave-particle duality.",
          content: `# Double-Slit Experiment Simulator

## The Experiment That Changed Physics

The double-slit experiment is perhaps the most iconic demonstration of quantum mechanics, showing how particles like electrons behave as both particles and waves.

## What You'll See

This simulator allows you to:
1. Fire individual particles (electrons, photons) through a double-slit barrier
2. Observe the interference pattern that forms over time
3. Place detectors at the slits to observe the "measurement effect"
4. Compare quantum behavior with classical particles

## The Quantum Mystery

The key quantum mystery you'll observe:
- When unobserved, particles create an interference pattern (wave behavior)
- When observed at the slits, the interference pattern disappears (particle behavior)
- This demonstrates the fundamental role of measurement in quantum mechanics`,
          type: "interactive",
          externalSimulator: {
            type: "iframe",
            url: "/simulators/Quantum-Teleportation.html",
            height: 500,
            width: "100%"
          },
          duration: 35,
          points: 30
        },
        {
          id: "1.2.3.2",
          title: "Quantum Wave Function Explorer",
          description: "Visualize quantum wave functions and probability distributions.",
          content: `# Quantum Wave Function Explorer

## Visualizing the Invisible

Quantum wave functions are mathematical descriptions of quantum states that can't be directly observed. This explorer helps you visualize them and build intuition.

## Explorer Features

With this interactive tool, you can:
1. Create and manipulate quantum wave functions
2. See how they evolve over time
3. Observe how measurement collapses the wave function
4. Experiment with quantum tunneling and barriers

## Key Concepts

- Wave functions and probability amplitudes
- Born rule for calculating probabilities
- Wave function collapse upon measurement
- Time evolution according to Schrödinger's equation`,
          type: "interactive",
          externalSimulator: {
            type: "iframe",
            url: "/simulators/Qubit-Measurement-Probability.html",
            height: 500,
            width: "100%"
          },
          duration: 30,
          points: 25
        },
        {
          id: "1.2.3.3",
          title: "Quantum Particle Simulation Quiz",
          description: "Test your understanding of quantum particle behavior and wave functions.",
          content: "Let's check what you've learned about quantum particles and their wave-like properties.",
          type: "quiz",
          duration: 15,
          points: 15
        }
      ]
    },
    {
      id: "1.2.4",
      title: "Quantum Games Tournament",
      description: "Apply your quantum knowledge in competitive quantum games.",
      lessons: [
        {
          id: "1.2.4.1",
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

1. Make classical moves as in regular chess
2. Use quantum moves to place pieces in superposition
3. Strategic measurement forces pieces to resolve to definite positions
4. Win by checkmating the opponent's king`,
          type: "interactive",
          externalSimulator: {
            type: "iframe",
            url: "/simulators/Quantum-Chess.html",
            height: 500,
            width: "100%"
          },
          duration: 40,
          points: 35
        },
        {
          id: "1.2.4.2",
          title: "Quantum Tic-Tac-Toe",
          description: "Play tic-tac-toe with quantum moves and entanglement.",
          content: `# Quantum Tic-Tac-Toe

## A Quantum Twist on a Simple Game

Quantum Tic-Tac-Toe transforms the simple game of Tic-Tac-Toe by adding quantum mechanical principles, making it much more complex and strategically rich.

## Game Rules

1. Players make quantum marks that exist in superposition across two squares
2. Each move creates entanglement between squares
3. When a cycle of entanglement forms, a "quantum collapse" occurs
4. Win by getting three classical marks in a row after collapses

## Strategic Thinking

Quantum Tic-Tac-Toe requires:
- Thinking about probabilities and possibilities
- Creating advantageous entanglements
- Forcing collapses at strategically beneficial times
- Planning several moves ahead with branching possibilities`,
          type: "interactive",
          externalSimulator: {
            type: "iframe",
            url: "/simulators/Quantum-Tic-Tac-Toe.html",
            height: 500,
            width: "100%"
          },
          duration: 30,
          points: 25
        },
        {
          id: "1.2.4.3",
          title: "Quantum Games Tournament Quiz",
          description: "Test your understanding of quantum gaming strategies and concepts.",
          content: "Let's check what you've learned about quantum gaming principles and strategies.",
          type: "quiz",
          duration: 15,
          points: 15
        }
      ]
    }
  ]
};
