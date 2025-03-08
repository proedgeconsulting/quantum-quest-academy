
import React from "react";
import { CheckCircle } from "lucide-react";

const SimulatorSuccessIndicator: React.FC = () => {
  return (
    <div className="absolute top-2 right-2 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full p-1 z-20">
      <CheckCircle size={16} />
    </div>
  );
};

export default SimulatorSuccessIndicator;
