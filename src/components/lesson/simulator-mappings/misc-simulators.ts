
import { SimulatorConfig } from "./types";
import { lazy } from "react";

export const miscSimulators: SimulatorConfig[] = [
  {
    name: "QuantumChessSimulator",
    component: lazy(() => import("../../quantum-simulator/QuantumChessSimulator")),
  },
];
