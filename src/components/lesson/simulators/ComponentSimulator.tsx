
import React from "react";
import { Lesson } from "@/data/types/courseTypes";

// External simulators - component mapping
const externalComponentMap: Record<string, React.ComponentType<any>> = {
  // Register your external React components here
  // Example: "QuantumEntanglementDemo": QuantumEntanglementDemo,
};

interface ComponentSimulatorProps {
  lesson: Lesson;
}

const ComponentSimulator: React.FC<ComponentSimulatorProps> = ({ lesson }) => {
  if (!lesson.externalSimulator?.componentName) {
    return (
      <div className="p-6 text-center text-gray-500">
        No component name specified for this simulator.
      </div>
    );
  }

  const ComponentToRender = externalComponentMap[lesson.externalSimulator.componentName];
  
  if (!ComponentToRender) {
    return (
      <div className="p-6 text-center text-red-500">
        Component "{lesson.externalSimulator.componentName}" is not registered.
      </div>
    );
  }
  
  return <ComponentToRender lesson={lesson} />;
};

export default ComponentSimulator;
