
import React from "react";
import BuildAtomActivity from "@/components/BuildAtomActivity";
import AtomSimulation from "@/components/AtomSimulation";
import QuantumWaveVisualizer from "@/components/quantum-simulator/QuantumWaveVisualizer";
import QuantumCircuitSimulator from "@/components/quantum-simulator/QuantumCircuitSimulator";

// Map lesson IDs to specific simulator components
const simulatorMap: Record<string, React.FC> = {
  // Module 1: Introduction to Quantum World
  "1.1.1.3": BuildAtomActivity, // Build Your Own Atom

  // Module 2: Light and Energy
  "1.1.2.3": QuantumWaveVisualizer, // Photon Explorer

  // Module 3: Quantum Uncertainty
  "1.1.3.3": QuantumWaveVisualizer, // Uncertainty Explorer

  // Module 4: Quantum Superposition
  "1.1.4.3": QuantumCircuitSimulator, // Superposition Simulator

  // Module 5: Quantum Tunneling
  "1.1.5.3": QuantumWaveVisualizer, // Barrier Penetration Simulator

  // Module 6: Quantum Applications
  "1.1.6.3": AtomSimulation, // Quantum Technology Explorer

  // Module 7: Quantum Heroes
  "1.1.7.3": AtomSimulation, // Quantum Heroes Card Game

  // Module 8: Quantum Games
  "1.1.8.1": QuantumWaveVisualizer, // Quantum Leaper
  "1.1.8.2": BuildAtomActivity, // Superposition Sorter
  "1.1.8.3": QuantumWaveVisualizer, // Quantum Treasure Hunt

  // Module 9: Quantum Art
  "1.1.9.3": QuantumWaveVisualizer, // Create Your Quantum Artwork

  // Module 10: Quantum Animals
  "1.1.10.3": BuildAtomActivity, // Design a Quantum Animal

  // Module 11: Quantum Time
  "1.1.11.3": QuantumWaveVisualizer, // Quantum Time Adventure

  // Module 12: Quantum Future
  "1.1.12.3": QuantumCircuitSimulator, // Design Your Quantum Invention

  // Default fallback
  "default": AtomSimulation
};

export const getSimulatorForLesson = (lessonId: string): React.FC => {
  return simulatorMap[lessonId] || simulatorMap["default"];
};
