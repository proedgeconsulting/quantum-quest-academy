
import React from "react";
import ParticleControls from "./ParticleControls";
import { HelpCircle, Waves } from "lucide-react";

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
            <div className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-purple-700 dark:text-purple-300" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Quantum Uncertainty</span>
            </div>
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
            When active, your atom exists in a state of quantum uncertainty. Position and momentum cannot both be precisely known, as described by Heisenberg's Uncertainty Principle.
          </p>
          <div className="mt-2 flex items-center gap-1">
            <HelpCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-xs text-purple-600 dark:text-purple-400">
              {superpositionActive ? "Notice how the electron positions become blurred and less definite." : "Activate to see uncertainty in action."}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildAtomControls;
