
import React from "react";
import ParticleControls from "./ParticleControls";

interface BuildAtomControlsProps {
  protons: number;
  electrons: number;
  superpositionMode: boolean;
  superpositionActive: boolean;
  onProtonChange: (value: number[]) => void;
  onElectronChange: (value: number[]) => void;
  toggleSuperposition: () => void;
}

const BuildAtomControls: React.FC<BuildAtomControlsProps> = ({ 
  protons, 
  electrons, 
  superpositionMode,
  superpositionActive,
  onProtonChange, 
  onElectronChange,
  toggleSuperposition
}) => {
  return (
    <div className="flex-1 flex flex-col">
      <ParticleControls 
        protons={protons}
        electrons={electrons}
        onProtonChange={onProtonChange}
        onElectronChange={onElectronChange}
      />
      
      {superpositionMode && (
        <div className="my-4 p-3 border border-purple-300 dark:border-purple-700 rounded-md bg-purple-50 dark:bg-purple-900/30">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Quantum Superposition</span>
            <button 
              onClick={toggleSuperposition}
              className={`px-3 py-1 rounded-md text-xs font-medium ${
                superpositionActive 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {superpositionActive ? 'Active' : 'Inactive'}
            </button>
          </div>
          <p className="mt-2 text-xs text-purple-600 dark:text-purple-400">
            When active, your atom exists in multiple states simultaneously.
          </p>
        </div>
      )}
    </div>
  );
};

export default BuildAtomControls;
