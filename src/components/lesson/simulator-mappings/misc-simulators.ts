import { SimulatorMapping } from "@/components/types";
import { lazy } from "react";

export const miscSimulators: SimulatorMapping[] = [
  {
    name: "QuantumChessSimulator",
    component: lazy(() => import("../../quantum-simulator/QuantumChessSimulator")),
  },
];
