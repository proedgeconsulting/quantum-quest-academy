
import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import QubitStateSimulator from "@/components/quantum-simulator/QubitStateSimulator";
import QuantumCoinSimulator from "@/components/quantum-simulator/QuantumCoinSimulator";
import RandomNumberSimulator from "@/components/quantum-simulator/RandomNumberSimulator";
import SimulatorHeader from "@/components/quantum-simulator/SimulatorHeader";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface QuantumSimulatorProps {
  title?: string;
  mode?: string;
  simulatorType?: string; // For backward compatibility
  showControls?: boolean;
  lessonId?: string;
  lessonTitle?: string;
}

const QuantumSimulator = ({ 
  title = "Quantum Simulator", 
  mode = "basic",
  simulatorType, // For backward compatibility
  showControls = true,
  lessonId,
  lessonTitle
}: QuantumSimulatorProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [measurements, setMeasurements] = useState<Array<0 | 1>>([]);
  const [coinFlips, setCoinFlips] = useState<Array<"H" | "T">>([]);
  
  // Use simulatorType as fallback if provided (for backward compatibility)
  const actualMode = mode || simulatorType || "basic";
  
  // Set the initial tab based on the mode
  useEffect(() => {
    if (actualMode === "technologies") {
      // Technologies mode should start with the Random Numbers tab
      setSelectedTab(2);
    } else if (actualMode === "coin") {
      // Coin mode should start with the Quantum Coin tab
      setSelectedTab(1);
    } else if (actualMode === "circuit" || actualMode === "random") {
      // Circuit/random mode should start with the Random Numbers tab
      setSelectedTab(2);
    } else {
      // Default to the first tab (Qubit State)
      setSelectedTab(0);
    }
  }, [actualMode]);
  
  // Title and mode based on selected tab and provided props
  const getSimulatorTitle = () => {
    if (title !== "Quantum Simulator") {
      return title;
    }
    
    switch(selectedTab) {
      case 0: return "Qubit State Simulator";
      case 1: return "Quantum Coin Simulator";
      case 2: 
        return actualMode === "technologies" 
          ? "Quantum Technology Explorer" 
          : "Quantum Random Number Generator";
      default: return "Quantum Simulator";
    }
  };
  
  const getSimulatorMode = () => {
    switch(selectedTab) {
      case 0: return "state";
      case 1: return "coin";
      case 2: 
        return actualMode === "technologies" ? "technologies" : "circuit";
      default: return "state";
    }
  };
  
  return (
    <div className="bg-white dark:bg-quantum-950 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <SimulatorHeader 
          title={getSimulatorTitle()} 
          mode={getSimulatorMode()} 
          lessonId={lessonId}
          lessonTitle={lessonTitle}
        />
      </div>
      
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
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
            Qubit State
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
            Quantum Coin
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
            {actualMode === "technologies" ? "Quantum Technologies" : "Random Numbers"}
          </Tab>
        </Tab.List>
        <Tab.Panels className="p-4">
          <Tab.Panel>
            <QubitStateSimulator 
              measurements={measurements} 
              setMeasurements={setMeasurements} 
            />
          </Tab.Panel>
          <Tab.Panel>
            <QuantumCoinSimulator 
              coinFlips={coinFlips} 
              setCoinFlips={setCoinFlips} 
            />
          </Tab.Panel>
          <Tab.Panel>
            <RandomNumberSimulator 
              measurements={measurements} 
              setMeasurements={setMeasurements}
              mode={actualMode} 
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default QuantumSimulator;
