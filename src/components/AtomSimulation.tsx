
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

interface AtomSimulationProps {
  title?: string;
  simulationType?: string;
  simulatorType?: string; // Added this property to match the type definition
  waveColor?: string;
  showParticles?: boolean;
}

const AtomSimulation = ({
  title = "Atom Simulation",
  simulationType = "standard",
  simulatorType, // Accept the new property
  waveColor = "purple",
  showParticles = true
}: AtomSimulationProps) => {
  // Use simulatorType as fallback if simulationType is not provided
  const actualSimulationType = simulationType || simulatorType || "standard";
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const [particleSpeed, setParticleSpeed] = useState(1);
  const [particleSize, setParticleSize] = useState(6);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const nucleusRadius = 20;
    
    // Color mapping based on waveColor prop
    const colorMap: Record<string, string> = {
      "purple": "#9B87F5",
      "blue": "#6096FD",
      "green": "#4CAF50",
      "yellow": "#FFD600",
      "red": "#FF5252",
      "amber": "#FFB74D",
      "cyan": "#26C6DA",
      "pink": "#EC407A",
      "indigo": "#5C6BC0"
    };
    
    const baseColor = colorMap[waveColor] || "#9B87F5";
    
    // Create electron paths - adjusted for photon explorer
    const paths = [
      { radius: 60, speed: 0.005 * particleSpeed, angle: 0, color: baseColor },
      { radius: 100, speed: 0.003 * particleSpeed, angle: Math.PI / 3, color: baseColor },
      { radius: 140, speed: 0.002 * particleSpeed, angle: Math.PI / 6, color: baseColor }
    ];
    
    let photons: any[] = [];
    
    // For photon simulation, add some light particles
    if (actualSimulationType === "photon") {
      // Add 5 photons at random positions moving in random directions
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 40;
        photons.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          vx: (Math.random() - 0.5) * 2 * particleSpeed,
          vy: (Math.random() - 0.5) * 2 * particleSpeed,
          size: Math.random() * 3 + 4,
          color: baseColor
        });
      }
    }
    
    const drawAtom = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw orbital paths
      paths.forEach(path => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, path.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${path.color}40`; // Add transparency
        ctx.stroke();
      });
      
      // Draw nucleus (proton)
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0, 
        centerX, centerY, nucleusRadius
      );
      gradient.addColorStop(0, "#F97316");
      gradient.addColorStop(1, "#EA580C");
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, nucleusRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw glow around nucleus
      ctx.beginPath();
      ctx.arc(centerX, centerY, nucleusRadius + 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(249, 115, 22, 0.2)";
      ctx.fill();
      
      // Draw electrons or particles
      if (showParticles) {
        paths.forEach(path => {
          const x = centerX + Math.cos(path.angle) * path.radius;
          const y = centerY + Math.sin(path.angle) * path.radius;
          
          // Update angle for next frame
          path.angle += path.speed;
          
          // Draw electron
          ctx.beginPath();
          ctx.arc(x, y, particleSize, 0, Math.PI * 2);
          ctx.fillStyle = path.color;
          ctx.fill();
          
          // Draw glow around electron
          ctx.beginPath();
          ctx.arc(x, y, particleSize + 4, 0, Math.PI * 2);
          ctx.fillStyle = `${path.color}40`;
          ctx.fill();
        });
      }
      
      // Draw photons for photon simulation
      if (simulationType === "photon") {
        photons.forEach(photon => {
          // Move photon
          photon.x += photon.vx;
          photon.y += photon.vy;
          
          // Bounce off edges
          if (photon.x < 0 || photon.x > canvas.width) photon.vx *= -1;
          if (photon.y < 0 || photon.y > canvas.height) photon.vy *= -1;
          
          // Draw photon as a small glowing particle
          const photonGradient = ctx.createRadialGradient(
            photon.x, photon.y, 0,
            photon.x, photon.y, photon.size * 2
          );
          photonGradient.addColorStop(0, photon.color);
          photonGradient.addColorStop(1, `${photon.color}00`);
          
          ctx.beginPath();
          ctx.arc(photon.x, photon.y, photon.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = photonGradient;
          ctx.fill();
          
          // Draw core of photon
          ctx.beginPath();
          ctx.arc(photon.x, photon.y, photon.size, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
        });
      }
      
      requestAnimationFrame(drawAtom);
    };
    
    const animationId = requestAnimationFrame(drawAtom);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [actualSimulationType, waveColor, showParticles, particleSpeed, particleSize]);
  
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
        <div className="bg-quantum-100 dark:bg-quantum-800 p-4 rounded-lg text-sm mb-2">
          {actualSimulationType === "photon" ? (
            <div className="space-y-2">
              <p className="font-medium">Welcome to the Photon Explorer!</p>
              <p>This simulation demonstrates how light behaves as both a wave and a particle:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>The yellow particles represent photons (particles of light)</li>
                <li>Watch how they move in wave-like patterns but also act as discrete particles</li>
                <li>Use the controls below to adjust the simulation speed and particle size</li>
                <li>Observe how the photons interact with the nucleus at the center</li>
              </ul>
              <p>Try different speeds to see how the energy levels change!</p>
            </div>
          ) : (
            <div>
              <p className="font-medium">Atom Simulation Instructions:</p>
              <p>Use the controls below to adjust the simulation parameters and observe how atoms behave.</p>
            </div>
          )}
        </div>
      )}
      
      <div className="w-full h-64 rounded-lg overflow-hidden bg-quantum-100/50 dark:bg-quantum-900/50 border border-quantum-200 dark:border-quantum-800">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 p-3 bg-quantum-50 dark:bg-quantum-900 rounded-lg">
        <div className="flex flex-col space-y-1">
          <label className="text-xs text-quantum-600 dark:text-quantum-400">Particle Speed</label>
          <input 
            type="range" 
            min="0.5" 
            max="3" 
            step="0.1" 
            value={particleSpeed} 
            onChange={(e) => setParticleSpeed(parseFloat(e.target.value))}
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
            onChange={(e) => setParticleSize(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AtomSimulation;
