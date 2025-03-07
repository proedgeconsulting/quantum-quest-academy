
import { atomSimulatorMappings } from "./atom-simulators";
import { waveSimulatorMappings } from "./wave-simulators";
import { circuitSimulatorMappings } from "./circuit-simulators";
import { miscSimulatorMappings } from "./misc-simulators";
import { SimulatorConfig } from "./types";
import React from "react";
import { Lesson } from "@/data/types/courseTypes";

// Combine all simulator mappings
const simulatorMap: Record<string, SimulatorConfig> = {
  ...atomSimulatorMappings,
  ...waveSimulatorMappings,
  ...circuitSimulatorMappings,
  ...miscSimulatorMappings
};

export const getSimulatorForLesson = (lessonId: string, lesson?: Lesson): React.ReactNode => {
  const config = simulatorMap[lessonId] || simulatorMap["default"];
  
  // Combine any props from the lesson with the configured props
  const combinedProps = {
    ...(config.props || {}),
    ...(lesson?.interactiveOptions || {}),
    title: config.title || (lesson?.interactiveComponent ? `${lesson.interactiveComponent} Simulator` : "Quantum Simulator")
  };
  
  // Create the component with the combined props
  return <config.component {...combinedProps} />;
};
