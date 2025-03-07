
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface AtomVisualizerProps {
  protons: number;
  electrons: number;
  isStable: boolean;
}

const AtomVisualizer: React.FC<AtomVisualizerProps> = ({ protons, electrons, isStable }) => {
  return (
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
        <div 
          className={`inline-block rounded-full py-1 px-3 text-sm font-medium ${
            isStable 
              ? "bg-success-100 text-success-900 border border-success-500" 
              : "bg-red-100 text-red-900 border border-red-500"
          }`}
        >
          {isStable ? "Stable" : "Unstable"}
        </div>
      </div>
    </div>
  );
};

export default AtomVisualizer;
