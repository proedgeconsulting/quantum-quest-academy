
import { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import AtomCanvas from "./atom-simulation/AtomCanvas";
import SimulationControls from "./atom-simulation/SimulationControls";
import InstructionPanel from "./atom-simulation/InstructionPanel";

interface AtomSimulationProps {
  title?: string;
  simulationType?: string;
  simulatorType?: string;
  waveColor?: string;
  showParticles?: boolean;
}

const AtomSimulation = ({
  title = "Atom Simulation",
  simulationType = "standard",
  simulatorType,
  waveColor = "purple",
  showParticles = true
}: AtomSimulationProps) => {
  // Use simulatorType as fallback if simulationType is not provided
  const actualSimulationType = simulationType || simulatorType || "standard";
  
  const [showInstructions, setShowInstructions] = useState(true);
  const [particleSpeed, setParticleSpeed] = useState(1);
  const [particleSize, setParticleSize] = useState(6);
  
  return (
    <motion.div 
      className="flex flex-col w-full space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-quantum-700 dark:text-quantum-300">{title}</h3>
        <button 
          onClick={() => setShowInstructions(!showInstructions)}
          className="text-quantum-500 hover:text-quantum-700 dark:hover:text-quantum-300"
        >
          <Info size={20} />
        </button>
      </div>
      
      {showInstructions && (
        <InstructionPanel simulationType={actualSimulationType} />
      )}
      
      <div className="w-full h-64 rounded-lg overflow-hidden bg-quantum-100/50 dark:bg-quantum-900/50 border border-quantum-200 dark:border-quantum-800">
        <AtomCanvas 
          simulationType={actualSimulationType}
          waveColor={waveColor}
          showParticles={showParticles}
          particleSpeed={particleSpeed}
          particleSize={particleSize}
        />
      </div>
      
      <SimulationControls
        particleSpeed={particleSpeed}
        particleSize={particleSize}
        onSpeedChange={setParticleSpeed}
        onSizeChange={setParticleSize}
      />
    </motion.div>
  );
};

export default AtomSimulation;
