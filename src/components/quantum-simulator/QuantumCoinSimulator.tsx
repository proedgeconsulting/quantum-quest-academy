
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";

interface QuantumCoinSimulatorProps {
  coinFlips: Array<"H" | "T">;
  setCoinFlips: React.Dispatch<React.SetStateAction<Array<"H" | "T">>>;
}

const QuantumCoinSimulator = ({ coinFlips, setCoinFlips }: QuantumCoinSimulatorProps) => {
  const [coinBias, setCoinBias] = useState(50);
  const [animating, setAnimating] = useState(false);
  
  const handleFlipCoin = () => {
    setAnimating(true);
    
    // Simulate quantum coin flip with bias
    setTimeout(() => {
      const random = Math.random() * 100;
      const result = random < coinBias ? "H" : "T";
      setCoinFlips(prev => [...prev.slice(-9), result]);
      setAnimating(false);
    }, 300);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <motion.div 
          className="relative w-48 h-48 rounded-full bg-gradient-to-r from-quantum-300 to-quantum-500 flex items-center justify-center cursor-pointer"
          whileTap={{ rotateY: 180 }}
          onClick={() => !animating && handleFlipCoin()}
        >
          <div className="text-white text-4xl font-bold">
            {coinFlips.length > 0 ? coinFlips[coinFlips.length - 1] : "?"}
          </div>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotateY: animating ? 180 : 0 }}
          >
            <RefreshCw className={`h-12 w-12 text-white ${animating ? 'opacity-100' : 'opacity-0'}`} />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-quantum-700 dark:text-quantum-300">
            Adjust coin bias (H/T probability)
          </label>
          <Slider
            value={[coinBias]}
            onValueChange={(value) => setCoinBias(value[0])}
            min={0}
            max={100}
            step={1}
            disabled={animating}
          />
          <div className="flex justify-between text-xs text-quantum-500">
            <span>0% Heads</span>
            <span>{coinBias}% Heads</span>
            <span>100% Heads</span>
          </div>
        </div>
        
        <Button 
          onClick={handleFlipCoin} 
          disabled={animating}
          className="w-full"
        >
          {animating ? "Flipping..." : "Flip Quantum Coin"}
        </Button>
        
        {coinFlips.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-quantum-700 dark:text-quantum-300 mb-2">
              Flip history (last 10):
            </p>
            <div className="flex gap-2 flex-wrap">
              {coinFlips.map((result, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className={result === "H" ? 
                    "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" : 
                    "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                  }
                >
                  {result}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuantumCoinSimulator;
