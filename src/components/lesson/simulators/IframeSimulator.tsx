
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
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [pathVariations, setPathVariations] = useState<string[]>([]);
  
  useEffect(() => {
    // Reset error state when lesson changes
    setError(null);
    setLoading(true);
    
    // Generate path variations to try
    const variations = generatePathVariations(simulatorConfig.url);
    setPathVariations(variations);
    setCurrentPathIndex(0);
    
    console.log(`Attempting to load simulator for ${lesson.id}: ${simulatorConfig.url}`);
    console.log("Path variations:", variations);
  }, [lesson.id, simulatorConfig.url]);

  const generatePathVariations = (originalUrl: string): string[] => {
    // Remove file extension if present
    const baseUrl = originalUrl.replace(/\.html$/, '');
    const withExtension = originalUrl.endsWith('.html') ? originalUrl : `${originalUrl}.html`;
    
    // Create normalized versions
    const noSpaces = baseUrl.replace(/\s+/g, '');
    const noSpacesWithExtension = `${noSpaces}.html`;
    
    return [
      originalUrl,                              // Original as-is
      originalUrl.startsWith('/') ? originalUrl.substring(1) : `/${originalUrl}`, // With/without leading slash
      withExtension,                            // Original with extension
      noSpacesWithExtension,                    // No spaces with extension
      noSpacesWithExtension.startsWith('/') ? noSpacesWithExtension.substring(1) : `/${noSpacesWithExtension}`, // No spaces with/without leading slash
      `/simulators/${noSpaces}.html`,           // In /simulators/ folder
      `/public/${noSpaces}.html`,               // In /public/ folder
      
      // Additional variations 
      withExtension.replace(/ /g, '-'),         // Replace spaces with hyphens
      withExtension.replace(/ /g, '_'),         // Replace spaces with underscores
      
      // Without extension variants
      baseUrl,
      baseUrl.startsWith('/') ? baseUrl.substring(1) : `/${baseUrl}`,
      noSpaces,
      noSpaces.startsWith('/') ? noSpaces.substring(1) : `/${noSpaces}`,
    ];
  };

  const handleIframeLoad = () => {
    const successPath = pathVariations[currentPathIndex];
    console.log(`Successfully loaded simulator at: ${successPath}`);
    setLoading(false);
  };

  const handleIframeError = () => {
    console.log(`Path ${pathVariations[currentPathIndex]} failed.`);
    
    // Try the next path
    if (currentPathIndex < pathVariations.length - 1) {
      setCurrentPathIndex(prevIndex => prevIndex + 1);
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
  
  // If we have an error, show it
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
            <p>Attempted to load: {simulatorConfig.url}</p>
            <p className="mt-2">Tried multiple path variations including:</p>
            <ul className="list-disc list-inside mt-2 text-left max-h-40 overflow-y-auto">
              {pathVariations.slice(0, 5).map((path, i) => (
                <li key={i} className="text-sm">{path}</li>
              ))}
              {pathVariations.length > 5 && <li className="text-sm">...and {pathVariations.length - 5} more</li>}
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Use the current path from our variations
  const currentPath = pathVariations[currentPathIndex];
  
  return (
    <Card className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <CardContent className="p-2 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 bg-opacity-75 z-10">
            <Loader2 className="h-8 w-8 animate-spin text-quantum-500" />
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
