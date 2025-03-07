
import { useState } from "react";
import { Tab } from "@headlessui/react";
import SimulatorHeader from "@/components/quantum-simulator/SimulatorHeader";
import QubitStateSimulator from "@/components/quantum-simulator/QubitStateSimulator";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const QuantumCircuitSimulator = () => {
  const [measurements, setMeasurements] = useState<Array<0 | 1>>([]);
  
  return (
    <div className="bg-white dark:bg-quantum-950 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <SimulatorHeader 
          title="Quantum Circuit Simulator" 
          mode="circuit" 
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
            Circuit Design
          </Tab>
        </Tab.List>
        <Tab.Panels className="p-4">
          <Tab.Panel>
            <QubitStateSimulator 
              measurements={measurements} 
              setMeasurements={setMeasurements} 
            />
            <div className="mt-4 p-4 border border-quantum-200 dark:border-quantum-800 rounded-md">
              <h3 className="text-lg font-medium mb-2">Circuit Operations</h3>
              <div className="grid grid-cols-3 gap-2">
                <button className="h-10 w-full border-2 border-quantum-500 rounded-md flex items-center justify-center hover:bg-quantum-100 dark:hover:bg-quantum-900">H</button>
                <button className="h-10 w-full border-2 border-quantum-500 rounded-md flex items-center justify-center hover:bg-quantum-100 dark:hover:bg-quantum-900">X</button>
                <button className="h-10 w-full border-2 border-quantum-500 rounded-md flex items-center justify-center hover:bg-quantum-100 dark:hover:bg-quantum-900">Z</button>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default QuantumCircuitSimulator;
