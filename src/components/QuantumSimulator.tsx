
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import SimulatorHeader from "./quantum-simulator/SimulatorHeader";
import QubitStateSimulator from "./quantum-simulator/QubitStateSimulator";
import QuantumCoinSimulator from "./quantum-simulator/QuantumCoinSimulator";
import RandomNumberSimulator from "./quantum-simulator/RandomNumberSimulator";

const QuantumSimulator = () => {
  const [measurements, setMeasurements] = useState<Array<0 | 1>>([]);
  const [simulatorMode, setSimulatorMode] = useState<"state" | "coin" | "circuit">("state");
  const [coinFlips, setCoinFlips] = useState<Array<"H" | "T">>([]);
  
  return (
    <motion.div 
      className="w-full rounded-lg overflow-hidden bg-white dark:bg-quantum-900 border border-quantum-200 dark:border-quantum-800 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SimulatorHeader 
        title="Quantum Simulator" 
        mode={simulatorMode} 
      />
      
      <Tabs value={simulatorMode} onValueChange={(value) => setSimulatorMode(value as "state" | "coin" | "circuit")}>
        <TabsList className="mb-4">
          <TabsTrigger value="state">Qubit State</TabsTrigger>
          <TabsTrigger value="coin">Quantum Coin</TabsTrigger>
          <TabsTrigger value="circuit">Random Numbers</TabsTrigger>
        </TabsList>
        
        {/* Qubit State Simulator */}
        <TabsContent value="state" className="space-y-6">
          <QubitStateSimulator 
            measurements={measurements}
            setMeasurements={setMeasurements}
          />
        </TabsContent>
        
        {/* Quantum Coin Flipper */}
        <TabsContent value="coin" className="space-y-6">
          <QuantumCoinSimulator 
            coinFlips={coinFlips}
            setCoinFlips={setCoinFlips}
          />
        </TabsContent>
        
        {/* Random Number Generator */}
        <TabsContent value="circuit" className="space-y-6">
          <RandomNumberSimulator 
            measurements={measurements}
            setMeasurements={setMeasurements}
          />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default QuantumSimulator;
