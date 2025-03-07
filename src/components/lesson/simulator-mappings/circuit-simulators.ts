
import QuantumCircuitSimulator from "@/components/quantum-simulator/QuantumCircuitSimulator";
import { SimulatorMappings } from "./types";

// Circuit-related simulator mappings
export const circuitSimulatorMappings: SimulatorMappings = {
  // Module 4: Quantum Superposition
  "1.1.4.3": {
    component: QuantumCircuitSimulator,
    title: "Superposition Simulator",
    props: { 
      initialState: "superposition",
      maxQubits: 1
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

  "3.2.3.2": {
    component: QuantumCircuitSimulator,
    title: "Train Your Quantum Neural Network",
    props: {
      maxQubits: 2,
      initialState: "entangled"
    }
  }
};
