
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lesson } from "@/data/types/courseTypes";
import LocalFileHelper from "../LocalFileHelper";

interface IframeSimulatorProps {
  lesson: Lesson;
  simulatorConfig: {
    url: string;
    width?: string;
    height?: number;
  };
}

const IframeSimulator: React.FC<IframeSimulatorProps> = ({ 
  lesson, 
  simulatorConfig 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useFallbackPath, setUseFallbackPath] = useState(false);
  
  useEffect(() => {
    // Reset error state when lesson changes
    setError(null);
    setLoading(true);
    setUseFallbackPath(false);
  }, [lesson.id]);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    // If primary path fails, try fallback path
    if (!useFallbackPath) {
      setUseFallbackPath(true);
    } else {
      setLoading(false);
      setError("Failed to load external simulator. Please check if the file path is correct and accessible.");
    }
  };

  // Check if trying to load a local file that's not relative
  const isLocalFileProtocol = simulatorConfig.url.startsWith('file:///');
  
  if (isLocalFileProtocol) {
    return (
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="p-6">
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Local file access restricted</AlertTitle>
            <AlertDescription>
              Browser security prevents direct access to local files through iframes. 
              For deployment, please move your simulator files to the public folder and use relative paths.
            </AlertDescription>
          </Alert>
          
          <div className="text-center text-gray-500 mt-4 mb-4">
            <p>Attempted to load: {simulatorConfig.url}</p>
            <p className="mt-2 text-sm">
              For production deployments, move your simulator files to the <code>public/simulators/</code> folder and use a relative path like <code>/simulators/your-simulator.html</code>
            </p>
          </div>
          
          <LocalFileHelper />
        </CardContent>
      </Card>
    );
  }
  
  // Multiple path strategies for iframe source
  let primaryPath: string;
  let fallbackPath: string;
  
  const originalUrl = simulatorConfig.url;
  
  // For deployment environments where files might be in root public folder
  if (originalUrl.startsWith('/')) {
    // If it already has a leading slash
    primaryPath = originalUrl;
    fallbackPath = originalUrl.substring(1); // Try without the slash
  } else {
    // If it doesn't have a leading slash
    primaryPath = originalUrl; // Try as-is (relative path)
    fallbackPath = `/${originalUrl}`; // Try with a slash (absolute from root)
  }

  // Use the fallback path if primary path failed
  const currentPath = useFallbackPath ? fallbackPath : primaryPath;
  
  return (
    <Card className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <CardContent className="p-2 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 bg-opacity-75 z-10">
            <Loader2 className="h-8 w-8 animate-spin text-quantum-500" />
          </div>
        )}
        
        {error && (
          <div className="p-4 text-red-500 text-center">
            <p>{error}</p>
            <p className="text-sm mt-2">Attempted paths:</p>
            <p className="text-sm">Primary: {primaryPath}</p>
            <p className="text-sm">Fallback: {fallbackPath}</p>
          </div>
        )}
        
        <iframe 
          ref={iframeRef}
          src={currentPath}
          width={simulatorConfig.width || "100%"}
          height={simulatorConfig.height || 500}
          style={{ border: "none" }}
          title={`External simulator for ${lesson.title}`}
          sandbox="allow-scripts allow-same-origin allow-forms"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          className="w-full"
        />
      </CardContent>
    </Card>
  );
};

export default IframeSimulator;
