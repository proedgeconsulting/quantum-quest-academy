
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
    description: "Create stable atoms by balancing protons and electrons",
    props: {
      gameMode: false
    }
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
      treasureMode: true,
      waveColor: "amber"
    }
  },

  // Module 9: Quantum Art
  "1.1.9.3": {
    component: QuantumWaveVisualizer,
    title: "Create Your Quantum Artwork",
    props: {
      simulationType: "art",
      drawingMode: true,
      colorOptions: ["red", "blue", "green", "purple", "yellow", "pink"]
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
      timeReversalMode: true,
      waveColor: "cyan"
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

  // Level 2 courses
  "2.1.1.3": {
    component: QuantumCircuitSimulator,
    title: "Build Your First Quantum Circuit",
    props: {
      maxQubits: 2,
      initialState: "standard"
    }
  },
  
  "2.1.2.3": {
    component: AtomSimulation,
    title: "Grover's Search Algorithm Simulation",
    props: {
      simulationType: "search",
      searchMode: true
    }
  },
  
  "2.1.8.1": {
    component: QuantumWaveVisualizer,
    title: "Quantum Gate Puzzles",
    props: {
      simulationType: "probability",
      gameMode: true,
      waveColor: "indigo"
    }
  },
  
  "2.1.8.2": {
    component: BuildAtomActivity,
    title: "Quantum Circuit Race",
    props: {
      gameMode: true,
      superpositionMode: false
    }
  },
  
  "2.1.8.3": {
    component: AtomSimulation,
    title: "Quantum Error Defenders",
    props: {
      simulationType: "error",
      gameMode: true
    }
  },
  
  // Level 3 courses
  "3.2.1.2": {
    component: QuantumCircuitSimulator,
    title: "Quantum Game: AI Challenge",
    props: {
      initialState: "superposition",
      maxQubits: 2,
      inventionMode: false
    }
  },
  
  "3.2.1.3": {
    component: BuildAtomActivity,
    title: "Design Your Quantum AI App",
    props: {
      creativeMode: true,
      animalTheme: false
    }
  },
  
  "3.2.2.2": {
    component: QuantumWaveVisualizer,
    title: "Quantum Pattern Detector",
    props: {
      simulationType: "probability",
      waveColor: "blue",
      showParticles: true
    }
  },
  
  "3.2.2.3": {
    component: AtomSimulation,
    title: "Quantum vs. Classical Challenge",
    props: {
      simulationType: "comparison",
      showComparison: true
    }
  },
  
  "3.2.3.2": {
    component: QuantumCircuitSimulator,
    title: "Train Your Quantum Neural Network",
    props: {
      maxQubits: 2,
      initialState: "entangled"
    }
  },
  
  "3.2.3.3": {
    component: AtomSimulation,
    title: "Quantum Image Detective",
    props: {
      simulationType: "image",
      imageAnalysisMode: true
    }
  },
  
  "3.2.5.2": {
    component: QuantumWaveVisualizer,
    title: "Quantum Music Composer",
    props: {
      simulationType: "art",
      drawingMode: false,
      waveColor: "purple",
      musicMode: true
    }
  },
  
  "3.2.5.3": {
    component: AtomSimulation,
    title: "Quantum Fashion Designer",
    props: {
      simulationType: "creative",
      fashionMode: true
    }
  },
  
  "3.2.8.1": {
    component: AtomSimulation,
    title: "The Quantum Hospital Adventure",
    props: {
      simulationType: "healthcare",
      hospitalMode: true
    }
  },
  
  "3.2.8.3": {
    component: BuildAtomActivity,
    title: "Design a Quantum Medicine",
    props: {
      creativeMode: true,
      medicineMode: true
    }
  },

  // Default fallback
  "default": {
    component: AtomSimulation,
    title: "Quantum Simulation"
  }
};

export const getSimulatorForLesson = (lessonId: string, lesson?: Lesson): React.ReactNode => {
  const config = simulatorMap[lessonId] || simulatorMap["default"];
  
  // Combine any props from the lesson with the configured props
  const combinedProps = {
    ...(config.props || {}),
    ...(lesson?.interactiveOptions || {}),
    title: config.title || (lesson?.interactiveComponent ? `${lesson.interactiveComponent} Simulator` : "Quantum Simulator")
  };
  
  // Create the component with the combined props
  return <config.component {...combinedProps} />;
};
