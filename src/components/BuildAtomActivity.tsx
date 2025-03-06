
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, Check, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const BuildAtomActivity = () => {
  const [protons, setProtons] = useState(1);
  const [electrons, setElectrons] = useState(1);
  const [isStable, setIsStable] = useState(true);
  const [completed, setCompleted] = useState(false);
  
  const ELEMENTS = [
    { name: "Hydrogen", symbol: "H", protons: 1, stable: true },
    { name: "Helium", symbol: "He", protons: 2, stable: true },
    { name: "Lithium", symbol: "Li", protons: 3, stable: true },
    { name: "Beryllium", symbol: "Be", protons: 4, stable: true },
    { name: "Boron", symbol: "B", protons: 5, stable: true },
    { name: "Carbon", symbol: "C", protons: 6, stable: true },
    { name: "Nitrogen", symbol: "N", protons: 7, stable: true },
    { name: "Oxygen", symbol: "O", protons: 8, stable: true }
  ];
  
  const currentElement = ELEMENTS.find(el => el.protons === protons) || { 
    name: "Unknown", 
    symbol: "??", 
    protons: protons, 
    stable: false 
  };
  
  const handleProtonChange = (value: number[]) => {
    setProtons(value[0]);
    checkStability(value[0], electrons);
  };
  
  const handleElectronChange = (value: number[]) => {
    setElectrons(value[0]);
    checkStability(protons, value[0]);
  };
  
  const checkStability = (p: number, e: number) => {
    const element = ELEMENTS.find(el => el.protons === p);
    setIsStable(p === e && element?.stable === true);
  };
  
  const handleReset = () => {
    setProtons(1);
    setElectrons(1);
    setIsStable(true);
    setCompleted(false);
  };
  
  const handleComplete = () => {
    if (isStable) {
      setCompleted(true);
      toast.success(`You've built a stable ${currentElement.name} atom!`, {
        description: "Great job understanding the balance of protons and electrons."
      });
    } else {
      toast.error("Your atom is unstable!", {
        description: "Try to balance the number of protons and electrons."
      });
    }
  };
  
  return (
    <div className="p-6 quantum-card">
      <h3 className="text-xl font-bold mb-4">Build Your Atom</h3>
      <p className="text-muted-foreground mb-6">
        Balance protons and electrons to create stable atoms. Atoms are stable when they have equal numbers of protons and electrons.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col justify-center">
          <motion.div 
            className="relative w-full aspect-square rounded-full border-4 border-quantum-200 dark:border-quantum-700 flex items-center justify-center"
            animate={{ boxShadow: isStable ? "0 0 20px rgba(34, 197, 94, 0.5)" : "0 0 20px rgba(239, 68, 68, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Nucleus */}
            <motion.div 
              className="relative w-1/3 aspect-square rounded-full bg-gradient-to-br from-energy-400 to-energy-600 flex items-center justify-center z-10"
              animate={{ 
                scale: protons > 3 ? 1 + (protons * 0.05) : 1, 
                boxShadow: "0 0 15px rgba(249, 115, 22, 0.6)" 
              }}
            >
              <span className="text-white font-bold">{protons}p+</span>
            </motion.div>
            
            {/* Electron orbits */}
            <AnimatePresence>
              {Array.from({ length: electrons }).map((_, i) => {
                const orbitSize = 100 + (i * 20);
                const speed = 4 - (i * 0.5);
                
                return (
                  <motion.div
                    key={`electron-${i}`}
                    className="absolute rounded-full border border-quantum-300/30 dark:border-quantum-600/30"
                    style={{ 
                      width: `${orbitSize}%`, 
                      height: `${orbitSize}%`,
                      transform: `rotate(${i * 45}deg)`
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <motion.div
                      className="absolute w-4 h-4 bg-quantum-500 rounded-full shadow-md"
                      style={{ top: "-8px", left: "calc(50% - 8px)" }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-4 text-center">
            <Badge 
              variant="outline" 
              className={`text-lg py-1 px-3 ${
                isStable 
                  ? "bg-success-100 text-success-900 border-success-500" 
                  : "bg-red-100 text-red-900 border-red-500"
              }`}
            >
              {isStable ? "Stable" : "Unstable"}
            </Badge>
          </div>
        </div>
        
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
                  onClick={() => handleProtonChange([Math.max(1, protons - 1)])}
                  disabled={protons <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-mono text-lg w-6 text-center">{protons}</span>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => handleProtonChange([Math.min(8, protons + 1)])}
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
              onValueChange={handleProtonChange}
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
                  onClick={() => handleElectronChange([Math.max(0, electrons - 1)])}
                  disabled={electrons <= 0}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-mono text-lg w-6 text-center">{electrons}</span>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => handleElectronChange([Math.min(8, electrons + 1)])}
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
              onValueChange={handleElectronChange}
              className="mt-2"
            />
          </div>
          
          <div className="mt-4 bg-quantum-100 dark:bg-quantum-900 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-xl">{currentElement.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-quantum-200 dark:bg-quantum-800 font-bold text-quantum-800 dark:text-quantum-200">
                    {currentElement.symbol}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div>Protons: {protons}</div>
                    <div>Electrons: {electrons}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RefreshCw className="h-4 w-4 mr-1" /> Reset
                </Button>
                <Button 
                  onClick={handleComplete}
                  disabled={completed}
                  className={completed ? "bg-success-500 hover:bg-success-600" : ""}
                >
                  {completed ? (
                    <>
                      <Check className="h-4 w-4 mr-1" /> Completed
                    </>
                  ) : (
                    "Complete Activity"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildAtomActivity;
