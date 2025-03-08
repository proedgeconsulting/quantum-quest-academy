
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lesson } from "@/data/types/courseTypes";

interface QuantumGamesSimulatorProps {
  lesson: Lesson;
}

const QuantumGamesSimulator: React.FC<QuantumGamesSimulatorProps> = ({ lesson }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  
  useEffect(() => {
    if (!lesson.externalSimulator?.url) {
      setError("No simulator URL provided");
      setLoading(false);
      return;
    }
    
    // Reset states
    setLoading(true);
    setError(null);
    
    // Get original URL from lesson config
    const originalUrl = lesson.externalSimulator.url;
    
    // Create multiple path variations to try
    const pathVariations = [
      originalUrl,                                  // Original path as-is
      originalUrl.startsWith('/') ? originalUrl.substring(1) : `/${originalUrl}`, // With/without leading slash
      originalUrl.replace(/\s+/g, ''),              // Without spaces
      originalUrl.startsWith('/') ? originalUrl.substring(1).replace(/\s+/g, '') : `/${originalUrl.replace(/\s+/g, '')}`, // Without spaces, with/without leading slash
      `/simulators/${originalUrl.replace(/\s+/g, '').replace(/\.html$/, '')}.html`, // In /simulators/ folder without spaces
      `/public/${originalUrl.replace(/\s+/g, '').replace(/\.html$/, '')}.html`,     // In /public/ folder without spaces
    ];
    
    // Set the first path to try
    setCurrentPath(pathVariations[0]);
    
    // We'll attempt each path in sequence in the onError handler of the iframe
    console.log("Initial path to try:", pathVariations[0]);
  }, [lesson.id, lesson.externalSimulator?.url]);
  
  const handleIframeError = () => {
    if (!lesson.externalSimulator?.url) return;
    
    // Original URL from lesson config
    const originalUrl = lesson.externalSimulator.url;
    
    // Path variations to try in sequence
    const pathVariations = [
      originalUrl,                                  // Original path as-is
      originalUrl.startsWith('/') ? originalUrl.substring(1) : `/${originalUrl}`, // With/without leading slash
      originalUrl.replace(/\s+/g, ''),              // Without spaces
      originalUrl.startsWith('/') ? originalUrl.substring(1).replace(/\s+/g, '') : `/${originalUrl.replace(/\s+/g, '')}`, // Without spaces, with/without leading slash
      `/simulators/${originalUrl.replace(/\s+/g, '').replace(/\.html$/, '')}.html`, // In /simulators/ folder without spaces
      `/public/${originalUrl.replace(/\s+/g, '').replace(/\.html$/, '')}.html`,     // In /public/ folder without spaces
    ];
    
    // Find the current path in the variations
    const currentIndex = pathVariations.indexOf(currentPath || '');
    
    // If we've tried all paths, show error
    if (currentIndex === pathVariations.length - 1 || currentIndex === -1) {
      setError(`Could not load the simulator at any of the attempted paths. Please check if the file exists and is accessible.`);
      setLoading(false);
      return;
    }
    
    // Try the next path
    const nextPath = pathVariations[currentIndex + 1];
    console.log(`Path ${currentPath} failed. Trying next path: ${nextPath}`);
    setCurrentPath(nextPath);
  };
  
  const handleIframeLoad = () => {
    console.log(`Successfully loaded simulator at: ${currentPath}`);
    setLoading(false);
    setError(null);
  };
  
  if (error) {
    return (
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="p-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error loading simulator</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          
          <div className="mt-4 text-center text-gray-500">
            <p>Attempted to load: {lesson.externalSimulator?.url}</p>
            <p className="mt-2">Current path attempted: {currentPath}</p>
            <p className="mt-4 text-sm">
              Please check that the file exists in your public folder and that the path is correct.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <CardContent className="p-2 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 bg-opacity-75 z-10">
            <Loader2 className="h-8 w-8 animate-spin text-quantum-500" />
          </div>
        )}
        
        {currentPath && (
          <iframe 
            ref={iframeRef}
            src={currentPath}
            width={lesson.externalSimulator?.width || "100%"}
            height={lesson.externalSimulator?.height || 500}
            style={{ border: "none" }}
            title={`External simulator for ${lesson.title}`}
            sandbox="allow-scripts allow-same-origin allow-forms"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            className="w-full"
          />
        )}
      </CardContent>
    </Card>
  );
};

export default QuantumGamesSimulator;
