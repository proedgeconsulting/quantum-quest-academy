
import React from "react";

interface InstructionPanelProps {
  simulationType: string;
}

const InstructionPanel: React.FC<InstructionPanelProps> = ({ simulationType }) => {
  return (
    <div className="bg-quantum-100 dark:bg-quantum-800 p-4 rounded-lg text-sm mb-2">
      {simulationType === "photon" ? (
        <div className="space-y-2">
          <p className="font-medium">Welcome to the Photon Explorer!</p>
          <p>This simulation demonstrates how light behaves as both a wave and a particle:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>The yellow particles represent photons (particles of light)</li>
            <li>Watch how they move in wave-like patterns but also act as discrete particles</li>
            <li>Use the controls below to adjust the simulation speed and particle size</li>
            <li>Observe how the photons interact with the nucleus at the center</li>
          </ul>
          <p>Try different speeds to see how the energy levels change!</p>
        </div>
      ) : (
        <div>
          <p className="font-medium">Atom Simulation Instructions:</p>
          <p>Use the controls below to adjust the simulation parameters and observe how atoms behave.</p>
        </div>
      )}
    </div>
  );
};

export default InstructionPanel;
