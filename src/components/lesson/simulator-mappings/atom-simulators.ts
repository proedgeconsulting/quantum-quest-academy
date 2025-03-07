
import AtomSimulation from "@/components/AtomSimulation";
import BuildAtomActivity from "@/components/BuildAtomActivity";
import { SimulatorMappings } from "./types";

// Atom-related simulator mappings
export const atomSimulatorMappings: SimulatorMappings = {
  // Module 1: Introduction to Quantum World
  "1.1.1.3": {
    component: BuildAtomActivity,
    title: "Build Your Own Atom",
    description: "Create stable atoms by balancing protons and electrons",
    props: {
      gameMode: false
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

  // Module 10: Quantum Animals
  "1.1.10.3": {
    component: BuildAtomActivity,
    title: "Design a Quantum Animal",
    props: {
      creativeMode: true,
      animalTheme: true
    }
  },

  // Level 2 courses
  "2.1.2.3": {
    component: AtomSimulation,
    title: "Grover's Search Algorithm Simulation",
    props: {
      simulationType: "search",
      searchMode: true
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
  "3.2.1.3": {
    component: BuildAtomActivity,
    title: "Design Your Quantum AI App",
    props: {
      creativeMode: true,
      animalTheme: false
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

  "3.2.3.3": {
    component: AtomSimulation,
    title: "Quantum Image Detective",
    props: {
      simulationType: "image",
      imageAnalysisMode: true
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
  }
};
