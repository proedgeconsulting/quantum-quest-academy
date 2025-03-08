
import React from "react";
import { Loader2 } from "lucide-react";

const SimulatorLoadingIndicator: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 bg-opacity-75 z-10">
      <Loader2 className="h-8 w-8 animate-spin text-quantum-500" />
    </div>
  );
};

export default SimulatorLoadingIndicator;
