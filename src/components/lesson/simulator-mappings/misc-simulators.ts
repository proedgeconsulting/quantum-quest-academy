
import { SimulatorConfig } from "./types";
import { lazy } from "react";

// Export as an object with keys being component names, not an array
export const miscSimulators: Record<string, SimulatorConfig> = {
  "QuantumChessSimulator": {
    component: lazy(() => import("../../quantum-simulator/QuantumChessSimulator")),
    props: {},
    title: "Quantum Chess Simulator"
  }
};
