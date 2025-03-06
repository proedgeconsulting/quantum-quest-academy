
import { useState } from "react";
import { Tab } from "@headlessui/react";
import QubitStateSimulator from "@/components/quantum-simulator/QubitStateSimulator";
import QuantumCoinSimulator from "@/components/quantum-simulator/QuantumCoinSimulator";
import RandomNumberSimulator from "@/components/quantum-simulator/RandomNumberSimulator";
import SimulatorHeader from "@/components/quantum-simulator/SimulatorHeader";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const QuantumSimulator = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [measurements, setMeasurements] = useState<Array<0 | 1>>([]);
  const [coinFlips, setCoinFlips] = useState<Array<"H" | "T">>([]);
  
  // Title and mode based on selected tab
  const getSimulatorTitle = () => {
    switch(selectedTab) {
      case 0: return "Qubit State Simulator";
      case 1: return "Quantum Coin Simulator";
      case 2: return "Quantum Random Number Generator";
      default: return "Quantum Simulator";
    }
  };
  
  const getSimulatorMode = () => {
    switch(selectedTab) {
      case 0: return "state";
      case 1: return "coin";
      case 2: return "circuit";
      default: return "state";
    }
  };
  
  return (
    <div className="bg-white dark:bg-quantum-950 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <SimulatorHeader 
          title={getSimulatorTitle()} 
          mode={getSimulatorMode()} 
        />
      </div>
      
      <Tab.Group onChange={setSelectedTab}>
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
            Random Numbers
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
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default QuantumSimulator;
