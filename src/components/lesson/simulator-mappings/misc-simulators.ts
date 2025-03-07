
import BuildAtomActivity from "@/components/BuildAtomActivity";
import AtomSimulation from "@/components/AtomSimulation";
import { SimulatorMappings } from "./types";

// Miscellaneous simulator mappings
export const miscSimulatorMappings: SimulatorMappings = {
  // Module 8: Quantum Games (additional)
  "1.1.8.2": {
    component: BuildAtomActivity,
    title: "Superposition Sorter",
    props: {
      gameMode: true,
      superpositionMode: true
    }
  },

  // Level 2 courses (additional)
  "2.1.8.2": {
    component: BuildAtomActivity,
    title: "Quantum Circuit Race",
    props: {
      gameMode: true,
      superpositionMode: false
    }
  },

  // Default fallback
  "default": {
    component: AtomSimulation,
    title: "Quantum Simulation"
  }
};
