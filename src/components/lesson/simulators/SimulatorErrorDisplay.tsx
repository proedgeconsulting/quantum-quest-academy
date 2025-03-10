
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
  
  // Generate alternate file names for suggestions
  const getAlternateFileNames = (name: string) => {
    if (!name) return [];
    
    const hyphenated = name.replace(/ /g, '-').toLowerCase();
    const spaceSeparated = name.includes('-') 
      ? name.replace(/-/g, ' ') 
      : undefined;
    
    return [hyphenated, spaceSeparated].filter(Boolean);
  };
  
  const alternateNames = fileName ? getAlternateFileNames(fileName) : [];
  
  return (
    <Alert variant="destructive" className="p-4">
      <AlertCircle className="h-6 w-6" />
      <AlertTitle className="ml-2">Simulator Error</AlertTitle>
      <AlertDescription className="mt-2">
        {errorMessage}
        
        {simulatorUrl && (
          <div className="text-sm mt-2">
            <p>Make sure the file exists at one of the following locations:</p>
            <ul className="list-disc mt-1 text-left pl-6 text-gray-500">
              <li><code>public/simulators/{fileName}</code></li>
              <li><code>public/{simulatorUrl}</code></li>
              {alternateNames.map((name, index) => (
                <li key={index}><code>public/simulators/{name}</code></li>
              ))}
            </ul>
            
            {simulatorUrl.includes('Quantum Technologies') && (
              <p className="mt-2 font-medium text-red-600">
                Note: For "Quantum Technologies", try using the filename "quantum-technologies.html" instead.
              </p>
            )}
          </div>
        )}
      </AlertDescription>
    </Alert>
  );
};

export default SimulatorErrorDisplay;
