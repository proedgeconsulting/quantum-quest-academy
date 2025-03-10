
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface SimulatorErrorDisplayProps {
  errorMessage: string;
  simulatorUrl?: string;
}

const SimulatorErrorDisplay: React.FC<SimulatorErrorDisplayProps> = ({ 
  errorMessage, 
  simulatorUrl 
}) => {
  // Get the file name without path for cleaner display
  const fileName = simulatorUrl ? simulatorUrl.split('/').pop() : '';
  
  return (
    <div className="p-4 text-red-500 text-center">
      <AlertCircle className="h-6 w-6 mx-auto mb-2" />
      <p>{errorMessage}</p>
      
      {simulatorUrl && (
        <p className="text-sm mt-2">
          Make sure the file exists at one of the following locations:
          <ul className="list-disc mt-1 text-left pl-6 text-gray-500">
            <li><code>public/{simulatorUrl}</code></li>
            <li><code>public/simulators/{fileName}</code></li>
          </ul>
        </p>
      )}
    </div>
  );
};

export default SimulatorErrorDisplay;
