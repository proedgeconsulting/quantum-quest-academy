
import simulatorMappings from "./simulator-mappings";
import React from "react";
import { Lesson } from "@/data/types/courseTypes";
import { SimulatorConfig } from "./simulator-mappings/types";

export const getSimulatorForLesson = (lessonId: string, lesson?: Lesson): React.ReactNode => {
  const config = simulatorMappings[lessonId] || simulatorMappings["default"];
  
  // Combine any props from the lesson with the configured props
  const combinedProps = {
    ...(config.props || {}),
    ...(lesson?.interactiveOptions || {}),
    title: config.title || (lesson?.interactiveComponent ? `${lesson.interactiveComponent} Simulator` : "Quantum Simulator")
  };
  
  // Create the component with the combined props
  return React.createElement(config.component, combinedProps);
};
