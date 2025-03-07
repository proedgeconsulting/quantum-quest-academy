
import React from "react";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import QuantumSimulator from "@/components/QuantumSimulator";

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
        <QuantumSimulator />
      </div>
    </>
  );
};

export default QuantumCircuitDialog;
