
import { Module } from "@/data/types/courseTypes";

// Module 3: Quantum Particle Simulation
export const module3: Module = {
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
};
