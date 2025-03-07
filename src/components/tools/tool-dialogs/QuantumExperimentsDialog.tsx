
import React from "react";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const QuantumExperimentsDialog: React.FC = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Quantum Experiments</DialogTitle>
        <DialogDescription>
          Simulations of famous experiments in quantum physics
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <div className="space-y-6">
          <div className="border border-quantum-200 dark:border-quantum-800 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Double Slit Experiment</h3>
            <p className="text-sm text-quantum-600 dark:text-quantum-400 mb-4">
              The experiment that demonstrates the wave-particle duality of quantum objects
            </p>
            <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md flex items-center justify-center">
              <div className="text-center">
                <p className="mb-2">Interactive simulation coming soon</p>
                <Button variant="outline" size="sm">Watch Video</Button>
              </div>
            </div>
          </div>
          
          <div className="border border-quantum-200 dark:border-quantum-800 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Quantum Entanglement</h3>
            <p className="text-sm text-quantum-600 dark:text-quantum-400 mb-4">
              Explore the "spooky action at a distance" of entangled particles
            </p>
            <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md flex items-center justify-center">
              <div className="text-center">
                <p className="mb-2">Interactive simulation coming soon</p>
                <Button variant="outline" size="sm">Watch Video</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantumExperimentsDialog;
