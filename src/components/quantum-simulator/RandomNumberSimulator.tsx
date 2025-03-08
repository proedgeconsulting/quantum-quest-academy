
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

interface RandomNumberSimulatorProps {
  measurements: Array<0 | 1>;
  setMeasurements: React.Dispatch<React.SetStateAction<Array<0 | 1>>>;
  probabilityBias?: number;
  mode?: string;
}

const RandomNumberSimulator = ({ 
  measurements,
  setMeasurements,
  probabilityBias = 0.5,
  mode
}: RandomNumberSimulatorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const generateRandomNumber = () => {
    // Use probability bias to affect the likelihood of getting 0 or 1
    const randomValue = Math.random() < probabilityBias ? 0 : 1;
    return randomValue as 0 | 1;
  };
  
  const handleGenerateClick = () => {
    const newValue = generateRandomNumber();
    setMeasurements(prev => [...prev, newValue]);
  };
  
  const handleGenerateMultiple = () => {
    setIsGenerating(true);
    
    const interval = setInterval(() => {
      setMeasurements(prev => {
        const newValue = generateRandomNumber();
        return [...prev, newValue];
      });
    }, 200);
    
    setTimeout(() => {
      clearInterval(interval);
      setIsGenerating(false);
    }, 2000);
  };
  
  const handleReset = () => {
    setMeasurements([]);
  };
  
  // Process data for chart
  const getData = () => {
    const zeros = measurements.filter(m => m === 0).length;
    const ones = measurements.filter(m => m === 1).length;
    
    return [
      { name: '0', value: zeros },
      { name: '1', value: ones }
    ];
  };

  // Custom title based on mode
  const getTitle = () => {
    if (mode === "technologies") {
      return "Quantum Technology Applications";
    }
    return "Measurement Results";
  };
  
  return (
    <div className="p-4">
      <div className="flex space-x-2 mb-6">
        <Button onClick={handleGenerateClick} disabled={isGenerating}>
          Measure Once
        </Button>
        <Button onClick={handleGenerateMultiple} disabled={isGenerating} variant="outline">
          Measure 10 Times
        </Button>
        <Button onClick={handleReset} variant="ghost" disabled={measurements.length === 0 || isGenerating}>
          Reset
        </Button>
      </div>
      
      <div className="p-4 border rounded-md bg-white dark:bg-quantum-900">
        <h3 className="text-sm font-medium mb-2">{getTitle()}</h3>
        <div className="flex flex-wrap gap-1 mb-4 min-h-10">
          {measurements.map((m, i) => (
            <span 
              key={i} 
              className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                m === 0 
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
              }`}
            >
              {m}
            </span>
          ))}
          {measurements.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">No measurements yet. Click "Measure" to begin.</p>
          )}
        </div>
        
        {measurements.length > 0 && (
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getData()}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomNumberSimulator;
