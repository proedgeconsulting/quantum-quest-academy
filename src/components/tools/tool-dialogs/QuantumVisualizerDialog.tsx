
import React from "react";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import QuantumSimulator from "@/components/QuantumSimulator";

const QuantumVisualizerDialog: React.FC = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Quantum Visualizer</DialogTitle>
        <DialogDescription>
          Visualize quantum waves and probability distributions
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <QuantumSimulator />
      </div>
    </>
  );
};

export default QuantumVisualizerDialog;
