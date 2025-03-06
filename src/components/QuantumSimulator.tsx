
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Info, RefreshCw, RotateCw, Cpu } from "lucide-react";

const QuantumSimulator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [probability, setProbability] = useState(50);
  const [measurements, setMeasurements] = useState<Array<0 | 1>>([]);
  const [animating, setAnimating] = useState(false);
  const [simulatorMode, setSimulatorMode] = useState<"state" | "coin" | "circuit">("state");
  const [coinBias, setCoinBias] = useState(50);
  const [coinFlips, setCoinFlips] = useState<Array<"H" | "T">>([]);
  const [numQubits, setNumQubits] = useState(1);
  
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

  // State simulator functions
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
  
  // Quantum Coin Flipper functions
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
  
  // Random Number Generator functions
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
    <motion.div 
      className="w-full rounded-lg overflow-hidden bg-white dark:bg-quantum-900 border border-quantum-200 dark:border-quantum-800 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Quantum Simulator</h3>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-quantum-100 dark:bg-quantum-800">
            {simulatorMode === "state" && (isCollapsed ? "Measured" : "Superposition")}
            {simulatorMode === "coin" && "Quantum Coin"}
            {simulatorMode === "circuit" && `${numQubits} Qubits`}
          </Badge>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Info className="h-5 w-5 text-quantum-500 cursor-pointer" />
          </motion.div>
        </div>
      </div>
      
      <Tabs value={simulatorMode} onValueChange={(value) => setSimulatorMode(value as "state" | "coin" | "circuit")}>
        <TabsList className="mb-4">
          <TabsTrigger value="state">Qubit State</TabsTrigger>
          <TabsTrigger value="coin">Quantum Coin</TabsTrigger>
          <TabsTrigger value="circuit">Random Numbers</TabsTrigger>
        </TabsList>
        
        {/* Qubit State Simulator */}
        <TabsContent value="state" className="space-y-6">
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
        </TabsContent>
        
        {/* Quantum Coin Flipper */}
        <TabsContent value="coin" className="space-y-6">
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
        </TabsContent>
        
        {/* Random Number Generator */}
        <TabsContent value="circuit" className="space-y-6">
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
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default QuantumSimulator;
