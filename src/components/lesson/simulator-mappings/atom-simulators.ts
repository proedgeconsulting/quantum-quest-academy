
import BuildAtomActivity from "@/components/BuildAtomActivity";
import { SimulatorMappings } from "./types";

// Atom-related simulator mappings
export const atomSimulatorMappings: SimulatorMappings = {
  // Module 1: Quantum World Introduction
  "1.1.1.3": {
    component: BuildAtomActivity,
    title: "Build Your First Atom",
    props: { 
      gameMode: false 
    }
  },

  // Module 3: Quantum Uncertainty
  "1.1.3.3": {
    component: BuildAtomActivity,
    title: "Uncertainty Explorer",
    props: { 
      superpositionMode: true,
      gameMode: false
    }
  },

  // Module 7: Quantum Biology
  "1.1.7.3": {
    component: BuildAtomActivity,
    title: "Quantum Life Forms",
    props: { 
      animalTheme: true,
      gameMode: false
    }
  },

  // Module 9: Quantum Art
  "1.1.9.1": {
    component: BuildAtomActivity,
    title: "Quantum Art Creator",
    props: { 
      creativeMode: true,
      gameMode: false
    }
  },

  // Generic atom builder (default)
  "atom-builder": {
    component: BuildAtomActivity,
    title: "Atom Builder",
    props: {}
  },

  // Default simulator as fallback
  "default": {
    component: BuildAtomActivity,
    title: "Quantum Simulator",
    props: { 
      superpositionMode: true 
    }
  }
};
