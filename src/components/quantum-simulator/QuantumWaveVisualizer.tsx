
import { useState } from "react";
import { Tab } from "@headlessui/react";
import SimulatorHeader from "@/components/quantum-simulator/SimulatorHeader";
import RandomNumberSimulator from "@/components/quantum-simulator/RandomNumberSimulator";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const QuantumWaveVisualizer = () => {
  const [measurements, setMeasurements] = useState<Array<0 | 1>>([]);
  
  return (
    <div className="bg-white dark:bg-quantum-950 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <SimulatorHeader 
          title="Quantum Wave Visualizer" 
          mode="visualizer" 
        />
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
            Probability Distribution
          </Tab>
        </Tab.List>
        <Tab.Panels className="p-4">
          <Tab.Panel>
            <div className="p-4 flex flex-col items-center">
              <svg width="100%" height="120" viewBox="0 0 360 120" className="text-energy-500">
                <path d="M0,60 C30,20 60,100 90,60 C120,20 150,100 180,60 C210,20 240,100 270,60 C300,20 330,100 360,60" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" />
              </svg>
              <div className="mt-4 w-full flex justify-between px-4">
                <span>0</span>
                <span>π/2</span>
                <span>π</span>
                <span>3π/2</span>
                <span>2π</span>
              </div>
            </div>
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

export default QuantumWaveVisualizer;
