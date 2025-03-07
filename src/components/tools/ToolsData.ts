
import { Atom, Calculator, Code, Dna, Lightbulb, Microscope, Telescope, Wand2 } from "lucide-react";

export interface ToolData {
  id: string;
  title: string;
  description: string;
  icon: any;
  visualization: JSX.Element;
}

export const TOOL_DATA = [
  {
    id: "atom-builder",
    title: "Atom Builder",
    description: "Build and explore atomic structures with protons, neutrons, and electrons",
    icon: Atom,
    visualization: (
      <div className="relative">
        <Atom size={64} className="text-quantum-500 animate-spin-slow" />
        <div className="absolute inset-0 bg-quantum-500/20 rounded-full animate-quantum-pulse"></div>
      </div>
    )
  },
  {
    id: "quantum-circuit",
    title: "Quantum Circuit Simulator",
    description: "Design and test simple quantum circuits with gates and qubits",
    icon: Code,
    visualization: (
      <div className="grid grid-cols-3 gap-2">
        <div className="h-8 w-8 border-2 border-quantum-500 rounded-md flex items-center justify-center">H</div>
        <div className="h-8 w-8 border-2 border-quantum-500 rounded-md flex items-center justify-center">X</div>
        <div className="h-8 w-8 border-2 border-quantum-500 rounded-md flex items-center justify-center">Z</div>
      </div>
    )
  },
  {
    id: "quantum-calculator",
    title: "Quantum Calculator",
    description: "Perform calculations with quantum numbers and constants",
    icon: Calculator,
    visualization: (
      <div className="text-2xl font-mono text-quantum-700 dark:text-quantum-300">ℏ = h/2π</div>
    )
  },
  {
    id: "quantum-visualizer",
    title: "Quantum Visualizer",
    description: "Visualize quantum waves and probability distributions",
    icon: Wand2,
    visualization: (
      <svg width="120" height="60" viewBox="0 0 120 60" className="text-energy-500">
        <path d="M0,30 C20,10 40,50 60,30 C80,10 100,50 120,30" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: "particle-explorer",
    title: "Particle Explorer",
    description: "Learn about fundamental particles and their properties",
    icon: Microscope,
    visualization: (
      <div className="grid grid-cols-2 gap-4">
        <div className="h-10 w-10 rounded-full bg-quantum-500 flex items-center justify-center text-white">e-</div>
        <div className="h-10 w-10 rounded-full bg-energy-500 flex items-center justify-center text-white">p+</div>
      </div>
    )
  },
  {
    id: "quantum-experiments",
    title: "Quantum Experiments",
    description: "Simulations of famous experiments in quantum physics",
    icon: Lightbulb,
    visualization: (
      <Telescope className="h-12 w-12 text-quantum-500" />
    )
  }
];
