
import React from "react";
import BuildAtomActivity from "@/components/BuildAtomActivity";
import AtomSimulation from "@/components/AtomSimulation";
import QuantumWaveVisualizer from "@/components/quantum-simulator/QuantumWaveVisualizer";
import QuantumCircuitSimulator from "@/components/quantum-simulator/QuantumCircuitSimulator";
import { Lesson } from "@/data/types/courseTypes";

// Define simulator configuration types
interface SimulatorConfig {
  component: React.FC<any>;
  props?: Record<string, any>;
  title?: string;
  description?: string;
}

// Map lesson IDs to specific simulator components with configuration
const simulatorMap: Record<string, SimulatorConfig> = {
  // Module 1: Introduction to Quantum World
  "1.1.1.3": {
    component: BuildAtomActivity,
    title: "Build Your Own Atom",
    description: "Create stable atoms by balancing protons and electrons"
  },

  // Module 2: Light and Energy
  "1.1.2.3": {
    component: QuantumWaveVisualizer,
    title: "Photon Explorer",
    props: { 
      simulationType: "photon",
      waveColor: "yellow",
      showParticles: true 
    }
  },

  // Module 3: Quantum Uncertainty
  "1.1.3.3": {
    component: QuantumWaveVisualizer,
    title: "Uncertainty Explorer",
    props: { 
      simulationType: "uncertainty",
      waveColor: "purple",
      showUncertaintyBands: true 
    }
  },

  // Module 4: Quantum Superposition
  "1.1.4.3": {
    component: QuantumCircuitSimulator,
    title: "Superposition Simulator",
    props: { 
      initialState: "superposition",
      maxQubits: 1
    }
  },

  // Module 5: Quantum Tunneling
  "1.1.5.3": {
    component: QuantumWaveVisualizer,
    title: "Barrier Penetration Simulator",
    props: { 
      simulationType: "tunneling",
      waveColor: "blue",
      showBarrier: true,
      barrierHeight: 50
    }
  },

  // Module 6: Quantum Applications
  "1.1.6.3": {
    component: AtomSimulation,
    title: "Quantum Technology Explorer",
    props: {
      simulationType: "technology",
      showApplications: true
    }
  },

  // Module 7: Quantum Heroes
  "1.1.7.3": {
    component: AtomSimulation,
    title: "Quantum Heroes Card Game",
    props: {
      simulationType: "heroes",
      gameMode: true
    }
  },

  // Module 8: Quantum Games
  "1.1.8.1": {
    component: QuantumWaveVisualizer,
    title: "Quantum Leaper",
    props: {
      simulationType: "tunneling",
      gameMode: true,
      waveColor: "green"
    }
  },
  "1.1.8.2": {
    component: BuildAtomActivity,
    title: "Superposition Sorter",
    props: {
      gameMode: true,
      superpositionMode: true
    }
  },
  "1.1.8.3": {
    component: QuantumWaveVisualizer,
    title: "Quantum Treasure Hunt",
    props: {
      simulationType: "probability",
      gameMode: true,
      treasureMode: true
    }
  },

  // Module 9: Quantum Art
  "1.1.9.3": {
    component: QuantumWaveVisualizer,
    title: "Create Your Quantum Artwork",
    props: {
      simulationType: "art",
      drawingMode: true,
      colorOptions: ["red", "blue", "green", "purple"]
    }
  },

  // Module 10: Quantum Animals
  "1.1.10.3": {
    component: BuildAtomActivity,
    title: "Design a Quantum Animal",
    props: {
      creativeMode: true,
      animalTheme: true
    }
  },

  // Module 11: Quantum Time
  "1.1.11.3": {
    component: QuantumWaveVisualizer,
    title: "Quantum Time Adventure",
    props: {
      simulationType: "time",
      timeReversalMode: true
    }
  },

  // Module 12: Quantum Future
  "1.1.12.3": {
    component: QuantumCircuitSimulator,
    title: "Design Your Quantum Invention",
    props: {
      inventionMode: true,
      maxQubits: 3
    }
  },

  // Default fallback
  "default": {
    component: AtomSimulation,
    title: "Atom Simulation"
  }
};

export const getSimulatorForLesson = (lessonId: string, lesson?: Lesson): React.ReactNode => {
  const config = simulatorMap[lessonId] || simulatorMap["default"];
  
  // Combine any props from the lesson with the configured props
  const combinedProps = {
    ...(config.props || {}),
    ...(lesson?.interactiveOptions || {})
  };
  
  // Create the component with the combined props
  return <config.component {...combinedProps} title={config.title} />;
};

