
import React from "react";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const QuantumCalculatorDialog: React.FC = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Quantum Calculator</DialogTitle>
        <DialogDescription>
          Perform calculations with quantum numbers and constants
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="text-2xl font-mono bg-quantum-100 dark:bg-quantum-900 p-6 rounded-md">
              <div className="mb-4">ℏ = 1.054571817 × 10<sup>-34</sup> J·s</div>
              <div className="mb-4">E = ℏω</div>
              <div>Δx·Δp ≥ ℏ/2</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-quantum-700 dark:text-quantum-300 mb-2 block">
                Calculate photon energy (E = hf)
              </label>
              <div className="flex gap-2">
                <input 
                  type="number" 
                  placeholder="Frequency (Hz)" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" 
                />
                <Button>Calculate</Button>
              </div>
            </div>
            <div>
              <label className="text-sm text-quantum-700 dark:text-quantum-300 mb-2 block">
                Calculate wavelength (λ = h/p)
              </label>
              <div className="flex gap-2">
                <input 
                  type="number" 
                  placeholder="Momentum (kg·m/s)" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" 
                />
                <Button>Calculate</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantumCalculatorDialog;
