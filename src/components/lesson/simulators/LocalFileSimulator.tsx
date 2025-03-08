
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import LocalFileHelper from "../LocalFileHelper";

interface LocalFileSimulatorProps {
  url: string;
}

const LocalFileSimulator: React.FC<LocalFileSimulatorProps> = ({ url }) => {
  return (
    <>
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Local file access restricted</AlertTitle>
        <AlertDescription>
          Browser security prevents direct access to local files through iframes. 
          For deployment, please move your simulator files to the public folder and use relative paths.
        </AlertDescription>
      </Alert>
      
      <div className="text-center text-gray-500 mt-4 mb-4">
        <p>Attempted to load: {url}</p>
        <p className="mt-2 text-sm">
          For production deployments, move your simulator files to the <code>public/</code> folder and use a relative path like <code>/your-simulator.html</code>
        </p>
      </div>
      
      <LocalFileHelper />
    </>
  );
};

export default LocalFileSimulator;
