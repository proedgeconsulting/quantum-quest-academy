
import { Lesson } from "@/data/types/courseTypes";
import React from "react";

// Define simulator configuration types
export interface SimulatorConfig {
  component: React.FC<any>;
  props?: Record<string, any>;
  title?: string;
  description?: string;
}

export type SimulatorMappings = Record<string, SimulatorConfig>;
