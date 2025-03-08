
import { SimulatorConfig } from "./types";
import { circuitSimulatorMappings } from "./circuit-simulators";
import { waveSimulatorMappings } from "./wave-simulators";
import { atomSimulatorMappings } from "./atom-simulators";
import { miscSimulators } from "./misc-simulators";

// Combine all simulator mappings into a single record
const simulatorMappings: Record<string, SimulatorConfig> = {
  ...circuitSimulatorMappings,
  ...waveSimulatorMappings,
  ...atomSimulatorMappings,
  ...miscSimulators
};

export default simulatorMappings;
