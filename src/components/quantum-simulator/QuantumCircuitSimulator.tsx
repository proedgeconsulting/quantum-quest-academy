
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Sparkles, Lock, Zap } from "lucide-react";
import SimulatorHeader from "@/components/quantum-simulator/SimulatorHeader";
import QubitStateSimulator from "@/components/quantum-simulator/QubitStateSimulator";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface QuantumCircuitSimulatorProps {
  initialState?: "superposition" | "entangled" | "standard";
  maxQubits?: number;
  inventionMode?: boolean;
  title?: string;
}

const QuantumCircuitSimulator = ({
  initialState = "standard",
  maxQubits = 2,
  inventionMode = false,
  title = "Quantum Circuit Simulator"
}: QuantumCircuitSimulatorProps) => {
  const [measurements, setMeasurements] = useState<Array<0 | 1>>([]);
  const [activeQubit, setActiveQubit] = useState(0);
  
  return (
    <div className="bg-white dark:bg-quantum-950 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <SimulatorHeader 
          title={title}
          mode="circuit" 
        />
        
        {inventionMode && (
          <div className="mt-2 p-2 bg-amber-100 dark:bg-amber-900 rounded-md">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
              Invention Mode: Design your own quantum technology!
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
            Circuit Design
          </Tab>
          {initialState === "superposition" && (
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
              Superposition View
            </Tab>
          )}
        </Tab.List>
        <Tab.Panels className="p-4">
          <Tab.Panel>
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Qubits ({maxQubits} max)</h3>
              <div className="flex space-x-2 mb-4">
                {Array.from({length: maxQubits}).map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveQubit(i)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center border-2 
                              ${activeQubit === i ? 'border-quantum-500 bg-quantum-100 dark:bg-quantum-900' : 'border-gray-300 dark:border-gray-700'}`}
                  >
                    Q{i}
                  </button>
                ))}
              </div>
            </div>
            
            <QubitStateSimulator 
              measurements={measurements} 
              setMeasurements={setMeasurements} 
              initialState={initialState}
            />
            
            <div className="mt-4 p-4 border border-quantum-200 dark:border-quantum-800 rounded-md">
              <h3 className="text-lg font-medium mb-2">Circuit Operations</h3>
              <div className="grid grid-cols-3 gap-2">
                <button className="h-10 w-full border-2 border-quantum-500 rounded-md flex items-center justify-center hover:bg-quantum-100 dark:hover:bg-quantum-900">
                  H
                </button>
                <button className="h-10 w-full border-2 border-quantum-500 rounded-md flex items-center justify-center hover:bg-quantum-100 dark:hover:bg-quantum-900">
                  X
                </button>
                <button className="h-10 w-full border-2 border-quantum-500 rounded-md flex items-center justify-center hover:bg-quantum-100 dark:hover:bg-quantum-900">
                  Z
                </button>
                {inventionMode && (
                  <>
                    <button className="h-10 w-full border-2 border-amber-500 rounded-md flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900 text-amber-700 dark:text-amber-300">
                      <Sparkles size={16} className="mr-1" /> Custom
                    </button>
                    <button className="h-10 w-full border-2 border-purple-500 rounded-md flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300">
                      <Lock size={16} className="mr-1" /> Encrypt
                    </button>
                    <button className="h-10 w-full border-2 border-green-500 rounded-md flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-900 text-green-700 dark:text-green-300">
                      <Zap size={16} className="mr-1" /> Power
                    </button>
                  </>
                )}
              </div>
            </div>
          </Tab.Panel>
          
          {initialState === "superposition" && (
            <Tab.Panel>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-4">Superposition Visualization</h3>
                <div className="relative h-40 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500 opacity-50 animate-pulse"></div>
                    <div className="w-16 h-16 rounded-full bg-purple-500 opacity-50 animate-pulse absolute"></div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
                  This qubit is in a superposition state, existing as both |0⟩ and |1⟩ simultaneously
                </div>
              </div>
            </Tab.Panel>
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default QuantumCircuitSimulator;
