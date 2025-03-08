
import simulatorMappings from "./simulator-mappings";
import React from "react";
import { Lesson } from "@/data/types/courseTypes";
import { SimulatorConfig } from "./simulator-mappings/types";

export const getSimulatorForLesson = (lessonId: string, lesson?: Lesson): React.ReactNode => {
  // First check if there's a specific mapping for this exact lesson ID
  const config = simulatorMappings[lessonId] || simulatorMappings["default"];
  
  // Get the title from either the config, the lesson component name, or a default
  const simulatorTitle = config.title || 
                        (lesson?.interactiveComponent ? `${lesson.interactiveComponent} Simulator` : "Quantum Simulator");
  
  // Get the mode from the simulator config or from the lesson's interactiveOptions
  const simulatorMode = config.props?.mode || lesson?.interactiveOptions?.simulatorType || "basic";
  
  // Apply any custom options from the lesson, but don't override simulator-specific props
  // Combine the configured props with any interactive options from the lesson
  const simulatorProps = {
    ...(config.props || {}),
    ...(lesson?.interactiveOptions || {}),
    title: simulatorTitle,
    mode: simulatorMode, // Ensure mode is set properly for the simulator
    lessonId: lessonId, // Pass the lesson ID to allow for more context-aware behavior
    lessonTitle: lesson?.title || "Quantum Interactive Lesson"
  };
  
  // Create the component with the combined props
  return React.createElement(config.component, simulatorProps);
};
