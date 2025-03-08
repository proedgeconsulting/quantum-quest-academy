
import React from "react";

// Map to store external component references
const externalSimulatorComponents: Record<string, React.ComponentType<any>> = {};

/**
 * Registers an external simulator component
 * @param name Unique identifier for the simulator
 * @param component React component to render
 */
export const registerSimulator = (name: string, component: React.ComponentType<any>) => {
  if (externalSimulatorComponents[name]) {
    console.warn(`Simulator "${name}" is already registered. It will be overwritten.`);
  }
  externalSimulatorComponents[name] = component;
};

/**
 * Gets a registered simulator component by name
 * @param name Name of the registered simulator
 * @returns The React component or undefined if not found
 */
export const getSimulator = (name: string): React.ComponentType<any> | undefined => {
  return externalSimulatorComponents[name];
};

/**
 * Lists all registered simulators
 * @returns Array of simulator names
 */
export const getRegisteredSimulators = (): string[] => {
  return Object.keys(externalSimulatorComponents);
};

export default externalSimulatorComponents;
