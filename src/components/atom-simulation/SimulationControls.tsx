
import React from "react";

interface SimulationControlsProps {
  particleSpeed: number;
  particleSize: number;
  onSpeedChange: (speed: number) => void;
  onSizeChange: (size: number) => void;
}

const SimulationControls: React.FC<SimulationControlsProps> = ({
  particleSpeed,
  particleSize,
  onSpeedChange,
  onSizeChange
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-3 bg-quantum-50 dark:bg-quantum-900 rounded-lg">
      <div className="flex flex-col space-y-1">
        <label className="text-xs text-quantum-600 dark:text-quantum-400">Particle Speed</label>
        <input 
          type="range" 
          min="0.5" 
          max="3" 
          step="0.1" 
          value={particleSpeed} 
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
      
      <div className="flex flex-col space-y-1">
        <label className="text-xs text-quantum-600 dark:text-quantum-400">Particle Size</label>
        <input 
          type="range" 
          min="3" 
          max="12" 
          step="1" 
          value={particleSize} 
          onChange={(e) => onSizeChange(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SimulationControls;
