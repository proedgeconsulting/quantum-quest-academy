
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Cpu, RotateCw } from "lucide-react";

interface RandomNumberSimulatorProps {
  measurements: Array<0 | 1>;
  setMeasurements: React.Dispatch<React.SetStateAction<Array<0 | 1>>>;
}

const RandomNumberSimulator = ({ measurements, setMeasurements }: RandomNumberSimulatorProps) => {
  const [numQubits, setNumQubits] = useState(1);
  const [animating, setAnimating] = useState(false);
  
  const handleGenerateRandomNumber = () => {
    setAnimating(true);
    
    // Generate a random number based on number of qubits
    setTimeout(() => {
      const maxValue = Math.pow(2, numQubits) - 1;
      const results: Array<0 | 1> = [];
      
      // Generate random binary digits for each qubit
      for (let i = 0; i < numQubits; i++) {
        const random = Math.random() * 100;
        const bit = random < 50 ? 0 : 1;
        results.push(bit);
      }
      
      // Add to measurements history
      setMeasurements(prev => [...prev.slice(-9), ...results]);
      setAnimating(false);
    }, 500);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <div className="bg-quantum-100 dark:bg-quantum-800 p-6 rounded-lg w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-quantum-500" />
              <span className="font-medium">Quantum Random Number Generator</span>
            </div>
            <Badge>{Math.pow(2, numQubits)} states</Badge>
          </div>
          
          <div className="grid grid-cols-4 gap-2 mb-4">
            {Array.from({ length: numQubits }).map((_, index) => (
              <motion.div 
                key={index}
                className="aspect-square rounded-md bg-quantum-200 dark:bg-quantum-700 flex items-center justify-center text-2xl font-mono"
                animate={{ 
                  backgroundColor: animating 
                    ? ['#A78BFA', '#8B5CF6', '#7C3AED', '#6D28D9'] 
                    : '#A78BFA'
                }}
                transition={{ duration: 0.3, repeat: animating ? Infinity : 0 }}
              >
                {measurements.length > 0 && measurements.length >= numQubits
                  ? measurements[measurements.length - numQubits + index]
                  : "?"}
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-quantum-700 dark:text-quantum-300">
                Number of qubits
              </label>
              <Slider
                value={[numQubits]}
                onValueChange={(value) => setNumQubits(value[0])}
                min={1}
                max={4}
                step={1}
                disabled={animating}
              />
              <div className="flex justify-between text-xs text-quantum-500">
                <span>1 qubit (0-1)</span>
                <span>2 qubits (0-3)</span>
                <span>3 qubits (0-7)</span>
                <span>4 qubits (0-15)</span>
              </div>
            </div>
            
            <Button 
              onClick={handleGenerateRandomNumber} 
              disabled={animating}
              className="w-full gap-2"
            >
              <RotateCw className={`h-4 w-4 ${animating ? 'animate-spin' : ''}`} />
              {animating ? "Generating..." : "Generate Random Number"}
            </Button>
            
            {measurements.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-quantum-700 dark:text-quantum-300 mb-2">
                  Generated values:
                </p>
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: Math.floor(measurements.length / numQubits) }).map((_, groupIndex) => {
                    const start = measurements.length - (groupIndex + 1) * numQubits;
                    const bits = measurements.slice(start, start + numQubits);
                    const value = bits.reduce((acc, bit, idx) => acc + (bit * Math.pow(2, numQubits - 1 - idx)), 0);
                    
                    return (
                      <Badge 
                        key={groupIndex} 
                        variant="outline" 
                        className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                      >
                        {value}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomNumberSimulator;
