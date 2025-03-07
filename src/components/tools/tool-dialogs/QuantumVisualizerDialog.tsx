
import React from "react";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import QuantumWaveVisualizer from "@/components/quantum-simulator/QuantumWaveVisualizer";

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
        <QuantumWaveVisualizer />
      </div>
    </>
  );
};

export default QuantumVisualizerDialog;
