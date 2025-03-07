
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface AtomVisualizerProps {
  protons: number;
  electrons: number;
  isStable: boolean;
  superposition?: boolean;
  animalTheme?: boolean;
}

const AtomVisualizer: React.FC<AtomVisualizerProps> = ({ 
  protons, 
  electrons, 
  isStable,
  superposition = false,
  animalTheme = false
}) => {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <motion.div 
        className={`relative w-full aspect-square rounded-full border-4 ${
          animalTheme ? 'border-amber-200 dark:border-amber-700' : 'border-quantum-200 dark:border-quantum-700'
        } flex items-center justify-center`}
        animate={{ 
          boxShadow: isStable 
            ? "0 0 20px rgba(34, 197, 94, 0.5)" 
            : "0 0 20px rgba(239, 68, 68, 0.5)",
          rotate: superposition ? [0, 5, 0, -5, 0] : 0
        }}
        transition={{ 
          duration: superposition ? 3 : 0.3,
          repeat: superposition ? Infinity : 0,
          ease: superposition ? "easeInOut" : "linear"
        }}
      >
        {/* Nucleus */}
        <motion.div 
          className={`relative w-1/3 aspect-square rounded-full ${
            animalTheme 
              ? 'bg-gradient-to-br from-amber-400 to-amber-600' 
              : 'bg-gradient-to-br from-energy-400 to-energy-600'
          } flex items-center justify-center z-10`}
          animate={{ 
            scale: protons > 3 ? 1 + (protons * 0.05) : 1, 
            boxShadow: animalTheme
              ? "0 0 15px rgba(245, 158, 11, 0.6)"
              : "0 0 15px rgba(249, 115, 22, 0.6)"
          }}
        >
          <span className="text-white font-bold">{protons}p+</span>
        </motion.div>
        
        {/* Electron orbits */}
        <AnimatePresence>
          {Array.from({ length: electrons }).map((_, i) => {
            const orbitSize = 100 + (i * 20);
            const speed = 4 - (i * 0.5);
            const orbitColor = animalTheme ? 'quantum-400' : 'quantum-300/30';
            const electronColor = animalTheme ? 'amber-500' : 'quantum-500';
            
            return (
              <motion.div
                key={`electron-${i}`}
                className={`absolute rounded-full border border-${orbitColor} dark:border-quantum-600/30`}
                style={{ 
                  width: `${orbitSize}%`, 
                  height: `${orbitSize}%`,
                  transform: `rotate(${i * 45}deg)`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  filter: superposition ? "blur(1px)" : "none"
                }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <motion.div
                  className={`absolute w-4 h-4 bg-${electronColor} rounded-full shadow-md`}
                  style={{ 
                    top: "-8px", 
                    left: "calc(50% - 8px)",
                    // Add position uncertainty when in superposition mode
                    filter: superposition ? "blur(2px)" : "none"
                  }}
                  animate={{
                    rotate: [0, 360],
                    // In superposition mode, add a slight position randomness to simulate uncertainty
                    top: superposition ? ["-8px", "-10px", "-6px", "-8px"] : "-8px",
                    left: superposition ? ["calc(50% - 8px)", "calc(50% - 10px)", "calc(50% - 6px)", "calc(50% - 8px)"] : "calc(50% - 8px)"
                  }}
                  transition={{
                    rotate: {
                      duration: superposition ? speed * 0.8 : speed,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    top: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    left: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {/* Uncertainty visualization */}
        {superposition && (
          <motion.div 
            className="absolute inset-0 rounded-full bg-purple-500/5 dark:bg-purple-500/10"
            animate={{
              scale: [1, 1.05, 1, 0.95, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
      
      <div className="mt-4 text-center">
        <div 
          className={`inline-block rounded-full py-1 px-3 text-sm font-medium ${
            isStable 
              ? "bg-success-100 text-success-900 border border-success-500" 
              : "bg-red-100 text-red-900 border border-red-500"
          }`}
        >
          {superposition ? "Quantum Uncertainty" : isStable ? "Stable" : "Unstable"}
        </div>
      </div>
    </div>
  );
};

export default AtomVisualizer;
