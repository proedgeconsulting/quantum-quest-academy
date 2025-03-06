
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AtomSimulation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
    
    // Create electron paths
    const paths = [
      { radius: 60, speed: 0.005, angle: 0, color: "#9B87F5" },
      { radius: 100, speed: 0.003, angle: Math.PI / 3, color: "#805AD5" },
      { radius: 140, speed: 0.002, angle: Math.PI / 6, color: "#6B46C1" }
    ];
    
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
      
      // Draw electrons
      paths.forEach(path => {
        const x = centerX + Math.cos(path.angle) * path.radius;
        const y = centerY + Math.sin(path.angle) * path.radius;
        
        // Update angle for next frame
        path.angle += path.speed;
        
        // Draw electron
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = path.color;
        ctx.fill();
        
        // Draw glow around electron
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = `${path.color}40`;
        ctx.fill();
      });
      
      requestAnimationFrame(drawAtom);
    };
    
    const animationId = requestAnimationFrame(drawAtom);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <motion.div 
      className="w-full h-64 rounded-lg overflow-hidden bg-quantum-100/50 dark:bg-quantum-900/50 border border-quantum-200 dark:border-quantum-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default AtomSimulation;
