
import { Module } from "@/data/types/courseTypes";

// Module 1: Quantum Games & Simulations
export const module1: Module = {
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
};
