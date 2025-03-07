
import QuantumWaveVisualizer from "@/components/quantum-simulator/QuantumWaveVisualizer";
import { SimulatorMappings } from "./types";

// Wave-related simulator mappings
export const waveSimulatorMappings: SimulatorMappings = {
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

  // Level 2 courses
  "2.1.8.1": {
    component: QuantumWaveVisualizer,
    title: "Quantum Gate Puzzles",
    props: {
      simulationType: "probability",
      gameMode: true,
      waveColor: "indigo"
    }
  },

  // Level 3 courses
  "3.2.2.2": {
    component: QuantumWaveVisualizer,
    title: "Quantum Pattern Detector",
    props: {
      simulationType: "probability",
      waveColor: "blue",
      showParticles: true
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
  }
};
