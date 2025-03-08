
import { SimulatorConfig } from "./types";
import QuantumSimulator from "@/components/QuantumSimulator";
import BuildAtomActivity from "@/components/BuildAtomActivity";
import AtomSimulation from "@/components/AtomSimulation";

// Miscellaneous simulators for various quantum concepts
export const miscSimulators: Record<string, SimulatorConfig> = {
  // Default fallback simulator
  "default": {
    component: QuantumSimulator,
    title: "Quantum Simulator",
    props: { mode: "basic" }
  },

  // Module 12: Quantum Future - Design Your Quantum Invention
  "1.1.12.3": {
    component: QuantumSimulator,
    title: "Quantum Invention Designer",
    props: { 
      mode: "invention",
      showControls: true,
      initialState: "design"
    }
  },

  // Module 6: Quantum Applications - Quantum Technology Explorer
  "1.1.6.3": {
    component: QuantumSimulator,
    title: "Quantum Technology Explorer",
    props: { 
      mode: "technologies",
      showControls: true
    }
  },

  // Quantum Games - Quantum Leaper (Tunneling game)
  "1.1.8.1": {
    component: QuantumSimulator,
    title: "Quantum Tunneling Game",
    props: { 
      mode: "game",
      gameType: "tunneling"
    }
  },

  // Quantum Games - Superposition Sorter
  "1.1.8.2": {
    component: QuantumSimulator,
    title: "Superposition Game",
    props: { 
      mode: "game",
      gameType: "superposition"
    }
  },

  // Quantum Games - Quantum Treasure Hunt
  "1.1.8.3": {
    component: QuantumSimulator,
    title: "Quantum Probability Game",
    props: { 
      mode: "game",
      gameType: "probability"
    }
  },

  // Level 3 - Quantum AI Weather Explorers
  "3.2.7.1": {
    component: QuantumSimulator,
    title: "Weather Pattern Recognition",
    props: { 
      mode: "ai",
      aiMode: "pattern-recognition",
      dataset: "weather"
    }
  },

  // Level 3 - Quantum AI Weather Prediction
  "3.2.7.3": {
    component: QuantumSimulator,
    title: "Weather Emergency Simulator",
    props: { 
      mode: "ai",
      aiMode: "prediction",
      scenario: "emergency-response"
    }
  },

  // Level 3 - Quantum Medicine
  "3.2.8.2": {
    component: QuantumSimulator,
    title: "Medical Pattern Recognition",
    props: { 
      mode: "ai",
      aiMode: "medical-diagnosis"
    }
  },

  // Level 3 - Quantum Wildlife Tracking
  "3.2.9.1": {
    component: QuantumSimulator,
    title: "Wildlife Image Analyzer",
    props: { 
      mode: "ai",
      aiMode: "image-recognition",
      dataset: "wildlife"
    }
  },

  // Level 3 - Quantum Space Explorer
  "3.2.10.1": {
    component: QuantumSimulator,
    title: "Exoplanet Hunter",
    props: { 
      mode: "ai",
      aiMode: "signal-processing",
      dataset: "stellar-light-curves"
    }
  },

  // Level 3 - Neural Networks and other AI-specific modules
  "3.2.2.2": {
    component: QuantumSimulator,
    title: "Quantum Pattern Detector",
    props: { 
      mode: "ai",
      aiMode: "pattern-recognition",
      dataset: "general"
    }
  },
  
  "3.2.3.2": {
    component: QuantumSimulator,
    title: "Quantum Neural Network Trainer",
    props: { 
      mode: "ai",
      aiMode: "neural-network-training"
    }
  },
  
  "3.2.4.2": {
    component: QuantumSimulator,
    title: "Quantum Maze Solver",
    props: { 
      mode: "ai",
      aiMode: "reinforcement-learning",
      environment: "maze"
    }
  },
  
  "3.2.5.2": {
    component: QuantumSimulator,
    title: "Quantum Music Composer",
    props: { 
      mode: "ai",
      aiMode: "generative",
      generativeType: "music"
    }
  },
  
  "3.2.6.2": {
    component: QuantumSimulator,
    title: "Quantum Ethics Simulator",
    props: { 
      mode: "ai",
      aiMode: "ethics-scenarios"
    }
  }
};

// Build Atom Activities for specific lessons
export const atomBuildingSimulators: Record<string, SimulatorConfig> = {
  // Original Build Atom Activity
  "1.1.1.3": {
    component: BuildAtomActivity,
    title: "Build Your Own Atom",
    props: { mode: "basic" }
  },
  
  // Weather Prediction Machine Builder
  "3.2.7.2": {
    component: BuildAtomActivity,
    title: "Quantum Weather Predictor Builder",
    props: { 
      mode: "customized",
      theme: "weather",
      customTitle: "Build Your Weather Prediction Machine"
    }
  },
  
  // Quantum Medicine Designer
  "3.2.8.3": {
    component: BuildAtomActivity,
    title: "Quantum Medicine Designer",
    props: { 
      mode: "customized",
      theme: "medical",
      customTitle: "Design a Quantum Medicine"
    }
  },
  
  // Quantum Conservation Game
  "3.2.9.3": {
    component: BuildAtomActivity,
    title: "Wildlife Conservation Simulator",
    props: { 
      mode: "customized",
      theme: "wildlife",
      customTitle: "Conservation Strategy Builder"
    }
  },
  
  // Space Colony Designer
  "3.2.10.3": {
    component: BuildAtomActivity,
    title: "Space Habitat Designer",
    props: { 
      mode: "customized",
      theme: "space",
      customTitle: "Quantum Space Colony Designer"
    }
  },
  
  // Resource Manager
  "3.2.4.3": {
    component: BuildAtomActivity,
    title: "Resource Management Simulator",
    props: { 
      mode: "customized",
      theme: "city",
      customTitle: "Quantum Resource Manager"
    }
  },
  
  // AI Guidelines Designer
  "3.2.6.3": {
    component: BuildAtomActivity,
    title: "Ethics Guidelines Creator",
    props: { 
      mode: "customized", 
      theme: "ethics",
      customTitle: "Design Your Quantum AI Guidelines"
    }
  }
};

// Combine the specialized atom building simulators with misc simulators
Object.assign(miscSimulators, atomBuildingSimulators);
