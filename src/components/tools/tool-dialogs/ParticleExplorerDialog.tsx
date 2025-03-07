
import React from "react";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ParticleExplorerDialog: React.FC = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Particle Explorer</DialogTitle>
        <DialogDescription>
          Learn about fundamental particles and their properties
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Electron", symbol: "e-", charge: "-1", mass: "0.511 MeV/c²", spin: "1/2", color: "bg-blue-500" },
            { name: "Proton", symbol: "p+", charge: "+1", mass: "938.3 MeV/c²", spin: "1/2", color: "bg-red-500" },
            { name: "Neutron", symbol: "n", charge: "0", mass: "939.6 MeV/c²", spin: "1/2", color: "bg-gray-500" },
            { name: "Photon", symbol: "γ", charge: "0", mass: "0", spin: "1", color: "bg-yellow-500" },
            { name: "Muon", symbol: "μ-", charge: "-1", mass: "105.7 MeV/c²", spin: "1/2", color: "bg-purple-500" },
            { name: "Tau", symbol: "τ-", charge: "-1", mass: "1777 MeV/c²", spin: "1/2", color: "bg-green-500" }
          ].map((particle, index) => (
            <div key={index} className="border border-quantum-200 dark:border-quantum-800 rounded-lg p-4 hover:shadow-md transition-all">
              <div className="flex justify-center mb-3">
                <div className={`h-12 w-12 rounded-full ${particle.color} flex items-center justify-center text-white font-bold`}>
                  {particle.symbol}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{particle.name}</h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-quantum-600 dark:text-quantum-400">Charge:</span>
                  <span>{particle.charge}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-quantum-600 dark:text-quantum-400">Mass:</span>
                  <span>{particle.mass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-quantum-600 dark:text-quantum-400">Spin:</span>
                  <span>{particle.spin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParticleExplorerDialog;
