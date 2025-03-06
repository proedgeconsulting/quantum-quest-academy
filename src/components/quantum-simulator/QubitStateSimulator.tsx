
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface QubitStateSimulatorProps {
  measurements: Array<0 | 1>;
  setMeasurements: React.Dispatch<React.SetStateAction<Array<0 | 1>>>;
}

const QubitStateSimulator = ({ measurements, setMeasurements }: QubitStateSimulatorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [probability, setProbability] = useState(50);
  const [animating, setAnimating] = useState(false);
  
  // Draw the Bloch sphere visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 50;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Bloch sphere
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#9B87F5";
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX, centerY + radius);
    ctx.moveTo(centerX - radius, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.strokeStyle = "#5555558a";
    ctx.stroke();
    
    // Draw state labels
    ctx.font = "16px Arial";
    ctx.fillStyle = "#805AD5";
    ctx.textAlign = "center";
    ctx.fillText("|0⟩", centerX, centerY - radius - 15);
    ctx.fillText("|1⟩", centerX, centerY + radius + 25);
    
    // Calculate state vector position based on probability
    const angle = (probability / 100) * Math.PI;
    const vectorX = centerX;
    const vectorY = centerY - radius * Math.cos(angle);
    
    // Draw state vector
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(vectorX, vectorY);
    ctx.strokeStyle = !isCollapsed ? "#6B46C1" : (vectorY < centerY ? "#22C55E" : "#EF4444");
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw vector arrowhead
    ctx.beginPath();
    ctx.arc(vectorX, vectorY, 6, 0, Math.PI * 2);
    ctx.fillStyle = !isCollapsed ? "#6B46C1" : (vectorY < centerY ? "#22C55E" : "#EF4444");
    ctx.fill();
    
    // Draw probability text
    ctx.font = "14px Arial";
    ctx.fillStyle = "#333";
    ctx.textAlign = "left";
    ctx.fillText(`Prob(|0⟩): ${100 - probability}%`, centerX - radius, centerY + radius + 40);
    ctx.fillText(`Prob(|1⟩): ${probability}%`, centerX - radius, centerY + radius + 60);
    
  }, [probability, isCollapsed]);

  const handleMeasure = () => {
    setAnimating(true);
    
    // Simulate quantum measurement
    setTimeout(() => {
      const random = Math.random() * 100;
      const result = random < probability ? 1 : 0;
      setMeasurements(prev => [...prev.slice(-9), result]);
      setIsCollapsed(true);
      setProbability(result === 1 ? 100 : 0);
      setAnimating(false);
    }, 500);
  };

  const handleReset = () => {
    setIsCollapsed(false);
    setProbability(50);
  };
  
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <canvas 
          ref={canvasRef} 
          className="w-full h-[300px]"
        />
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm text-quantum-700 dark:text-quantum-300">
            Adjust quantum state (|0⟩ ↔ |1⟩ probability)
          </label>
          <Slider
            value={[probability]}
            onValueChange={(value) => {
              if (!isCollapsed) setProbability(value[0]);
            }}
            min={0}
            max={100}
            step={1}
            disabled={isCollapsed || animating}
          />
        </div>
        
        <div className="flex gap-4">
          <Button 
            onClick={handleMeasure} 
            disabled={isCollapsed || animating}
            className="flex-1"
          >
            {animating ? "Measuring..." : "Measure Qubit"}
          </Button>
          
          <Button 
            onClick={handleReset} 
            variant="outline" 
            disabled={!isCollapsed || animating}
            className="flex-1"
          >
            Reset Qubit
          </Button>
        </div>
        
        {measurements.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-quantum-700 dark:text-quantum-300 mb-2">
              Measurement history (last 10):
            </p>
            <div className="flex gap-2 flex-wrap">
              {measurements.map((result, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className={result === 1 ? 
                    "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" : 
                    "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                  }
                >
                  |{result}⟩
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QubitStateSimulator;
