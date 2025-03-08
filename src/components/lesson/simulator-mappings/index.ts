
import { SimulatorConfig } from "./types";
import { circuitSimulators } from "./circuit-simulators";
import { waveSimulators } from "./wave-simulators";
import { atomSimulators } from "./atom-simulators";
import { miscSimulators } from "./misc-simulators";

// Combine all simulator mappings into a single record
const simulatorMappings: Record<string, SimulatorConfig> = {
  ...circuitSimulators,
  ...waveSimulators,
  ...atomSimulators,
  ...miscSimulators
};

export default simulatorMappings;
