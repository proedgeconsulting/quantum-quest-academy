
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
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [pathVariations, setPathVariations] = useState<string[]>([]);
  
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
    console.log(`Attempting to load simulator for ${lesson.id}: ${originalUrl}`);
    
    // Create multiple path variations to try
    const variations = generatePathVariations(originalUrl);
    setPathVariations(variations);
    setCurrentPathIndex(0);
    
    console.log("Generated path variations:", variations);
  }, [lesson.id, lesson.externalSimulator?.url]);
  
  const generatePathVariations = (originalUrl: string): string[] => {
    // Remove file extension if present
    const baseUrl = originalUrl.replace(/\.html$/, '');
    const withExtension = originalUrl.endsWith('.html') ? originalUrl : `${originalUrl}.html`;
    
    // Create normalized versions
    const noSpaces = baseUrl.replace(/\s+/g, '');
    const noSpacesWithExtension = `${noSpaces}.html`;
    
    // Generate variations with and without leading slash
    return [
      withExtension,                            // Original with extension
      originalUrl,                              // Original as-is
      originalUrl.startsWith('/') ? originalUrl.substring(1) : `/${originalUrl}`, // With/without leading slash
      noSpacesWithExtension,                    // No spaces with extension
      noSpacesWithExtension.startsWith('/') ? noSpacesWithExtension.substring(1) : `/${noSpacesWithExtension}`, // No spaces with/without leading slash
      `/simulators/${noSpaces}.html`,           // In /simulators/ folder
      `/public/${noSpaces}.html`,               // In /public/ folder
      
      // Additional variations based on common filename patterns
      withExtension.replace(/ /g, '-'),         // Replace spaces with hyphens
      withExtension.replace(/ /g, '_'),         // Replace spaces with underscores
      
      // Try without extension variants
      baseUrl,
      baseUrl.startsWith('/') ? baseUrl.substring(1) : `/${baseUrl}`,
      noSpaces,
      noSpaces.startsWith('/') ? noSpaces.substring(1) : `/${noSpaces}`,
    ];
  };
  
  const handleIframeError = () => {
    console.log(`Path ${pathVariations[currentPathIndex]} failed.`);
    
    // Try the next path variation
    if (currentPathIndex < pathVariations.length - 1) {
      setCurrentPathIndex(prevIndex => prevIndex + 1);
    } else {
      // If we've tried all paths, show error
      setError(`Could not load the simulator. Tried ${pathVariations.length} different paths.`);
      setLoading(false);
    }
  };
  
  const handleIframeLoad = () => {
    const successPath = pathVariations[currentPathIndex];
    console.log(`Successfully loaded simulator at: ${successPath}`);
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
            <p className="mt-2">Tried multiple path variations including:</p>
            <ul className="list-disc list-inside mt-2 text-left max-h-40 overflow-y-auto">
              {pathVariations.slice(0, 5).map((path, i) => (
                <li key={i} className="text-sm">{path}</li>
              ))}
              {pathVariations.length > 5 && <li className="text-sm">...and {pathVariations.length - 5} more</li>}
            </ul>
            <p className="mt-4 text-sm">
              Please check that the file exists in your public folder and that the path is correct.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  const currentPath = pathVariations[currentPathIndex];
  
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
