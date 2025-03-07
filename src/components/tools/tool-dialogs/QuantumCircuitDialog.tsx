
import React from "react";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import QuantumCircuitSimulator from "@/components/quantum-simulator/QuantumCircuitSimulator";

const QuantumCircuitDialog: React.FC = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Quantum Circuit Simulator</DialogTitle>
        <DialogDescription>
          Design and test simple quantum circuits with gates and qubits
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <QuantumCircuitSimulator />
      </div>
    </>
  );
};

export default QuantumCircuitDialog;
