
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import SimulatorHeader from "@/components/quantum-simulator/SimulatorHeader";
import RandomNumberSimulator from "@/components/quantum-simulator/RandomNumberSimulator";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface QuantumWaveVisualizerProps {
  simulationType?: "photon" | "uncertainty" | "tunneling" | "probability" | "art" | "time";
  waveColor?: string;
  showParticles?: boolean;
  showUncertaintyBands?: boolean;
  showBarrier?: boolean;
  barrierHeight?: number;
  gameMode?: boolean;
  drawingMode?: boolean;
  colorOptions?: string[];
  treasureMode?: boolean;
  timeReversalMode?: boolean;
  title?: string;
}

const QuantumWaveVisualizer = ({
  simulationType = "photon",
  waveColor = "blue",
  showParticles = false,
  showUncertaintyBands = false,
  showBarrier = false,
  barrierHeight = 30,
  gameMode = false,
  drawingMode = false,
  colorOptions = ["blue"],
  treasureMode = false,
  timeReversalMode = false,
  title = "Quantum Wave Visualizer"
}: QuantumWaveVisualizerProps) => {
  const [measurements, setMeasurements] = useState<Array<0 | 1>>([]);
  const [amplitude, setAmplitude] = useState<number>(60);
  
  // Apply specific configurations based on simulationType
  useEffect(() => {
    switch(simulationType) {
      case "photon":
        setAmplitude(60);
        break;
      case "uncertainty":
        setAmplitude(40 + Math.random() * 30);
        break;
      case "tunneling":
        setAmplitude(50);
        break;
      case "probability":
        setAmplitude(70);
        break;
      case "art":
        setAmplitude(80);
        break;
      case "time":
        setAmplitude(45);
        break;
      default:
        setAmplitude(60);
    }
  }, [simulationType]);
  
  return (
    <div className="bg-white dark:bg-quantum-950 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <SimulatorHeader 
          title={title || `${simulationType.charAt(0).toUpperCase() + simulationType.slice(1)} Visualizer`}
          mode={simulationType === "art" ? "creative" : "state"} 
        />
        
        {gameMode && (
          <div className="mt-2 p-2 bg-indigo-100 dark:bg-indigo-900 rounded-md">
            <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
              {treasureMode ? "Find the quantum treasure by observing the wave!" : 
               "Game Mode: Interact with the quantum system to complete the challenge!"}
            </p>
          </div>
        )}
      </div>
      
      <Tab.Group>
        <Tab.List className="flex space-x-1 p-1 bg-quantum-100 dark:bg-quantum-900">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-medium rounded-md',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-quantum-400 ring-white ring-opacity-60',
                selected
                  ? 'bg-white dark:bg-quantum-800 shadow text-quantum-700 dark:text-quantum-200'
                  : 'text-quantum-500 hover:bg-white/[0.12] hover:text-quantum-600 dark:hover:text-quantum-300'
              )
            }
          >
            Wave Visualization
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm font-medium rounded-md',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-quantum-400 ring-white ring-opacity-60',
                selected
                  ? 'bg-white dark:bg-quantum-800 shadow text-quantum-700 dark:text-quantum-200'
                  : 'text-quantum-500 hover:bg-white/[0.12] hover:text-quantum-600 dark:hover:text-quantum-300'
              )
            }
          >
            {simulationType === "probability" ? "Probability Distribution" : "Measurements"}
          </Tab>
        </Tab.List>
        <Tab.Panels className="p-4">
          <Tab.Panel>
            <div className="p-4 flex flex-col items-center">
              <div className="mb-4 w-full relative">
                {showBarrier && (
                  <div 
                    className="absolute bg-gray-700 dark:bg-gray-500 opacity-70" 
                    style={{ 
                      left: '50%', 
                      height: `${barrierHeight}%`, 
                      width: '10px',
                      bottom: '0',
                      transform: 'translateX(-50%)',
                      borderTopLeftRadius: '2px',
                      borderTopRightRadius: '2px',
                      zIndex: 1
                    }}
                  />
                )}
                {showUncertaintyBands && (
                  <div className="absolute inset-0 bg-purple-200 dark:bg-purple-900 opacity-30 rounded-md" />
                )}
                <svg width="100%" height="120" viewBox="0 0 360 120" className={`text-${waveColor}-500`}>
                  <path d={`M0,60 C30,${60-amplitude} 60,${60+amplitude} 90,60 C120,${60-amplitude} 150,${60+amplitude} 180,60 C210,${60-amplitude} 240,${60+amplitude} 270,60 C300,${60-amplitude} 330,${60+amplitude} 360,60`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" />
                  
                  {showParticles && Array.from({length: 8}).map((_, i) => (
                    <circle 
                      key={i} 
                      cx={i * 45 + 22.5} 
                      cy={60 + (i % 2 === 0 ? -amplitude/2 : amplitude/2) * Math.sin(i * 0.7)} 
                      r="4" 
                      fill={`var(--${waveColor}-500)`} 
                    />
                  ))}
                </svg>
              </div>
              <div className="mt-4 w-full flex justify-between px-4">
                <span>0</span>
                <span>π/2</span>
                <span>π</span>
                <span>3π/2</span>
                <span>2π</span>
              </div>
              
              {drawingMode && (
                <div className="mt-4 p-2 border border-gray-200 dark:border-gray-700 rounded-md">
                  <h3 className="text-sm font-medium mb-2">Drawing Tools</h3>
                  <div className="flex gap-2">
                    {colorOptions?.map((color, index) => (
                      <button 
                        key={index} 
                        className={`w-8 h-8 rounded-full bg-${color}-500`}
                        aria-label={`Select ${color} color`}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {timeReversalMode && (
                <div className="mt-4 flex justify-center gap-4">
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded-md">
                    Reverse Time
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Forward Time
                  </button>
                </div>
              )}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <RandomNumberSimulator 
              measurements={measurements} 
              setMeasurements={setMeasurements} 
              probabilityBias={simulationType === "tunneling" ? 0.3 : 0.5}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default QuantumWaveVisualizer;
