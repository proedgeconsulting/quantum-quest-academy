
import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

interface ParticleControlsProps {
  protons: number;
  electrons: number;
  onProtonChange: (value: number[]) => void;
  onElectronChange: (value: number[]) => void;
}

const ParticleControls: React.FC<ParticleControlsProps> = ({
  protons,
  electrons,
  onProtonChange,
  onElectronChange,
}) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="mb-8">
        <motion.div 
          className="flex items-end justify-between mb-2"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <div>
            <h4 className="font-semibold">Protons</h4>
            <p className="text-sm text-muted-foreground">Positive particles in the nucleus</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => onProtonChange([Math.max(1, protons - 1)])}
              disabled={protons <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-mono text-lg w-6 text-center">{protons}</span>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => onProtonChange([Math.min(8, protons + 1)])}
              disabled={protons >= 8}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        
        <Slider
          value={[protons]}
          min={1}
          max={8}
          step={1}
          onValueChange={onProtonChange}
          className="mt-2"
        />
      </div>
      
      <div className="mb-8">
        <motion.div 
          className="flex items-end justify-between mb-2"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <h4 className="font-semibold">Electrons</h4>
            <p className="text-sm text-muted-foreground">Negative particles orbiting the nucleus</p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => onElectronChange([Math.max(0, electrons - 1)])}
              disabled={electrons <= 0}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-mono text-lg w-6 text-center">{electrons}</span>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => onElectronChange([Math.min(8, electrons + 1)])}
              disabled={electrons >= 8}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        
        <Slider
          value={[electrons]}
          min={0}
          max={8}
          step={1}
          onValueChange={onElectronChange}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default ParticleControls;
