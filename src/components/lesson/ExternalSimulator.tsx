
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, AlertCircle } from "lucide-react";
import { Lesson } from "@/data/types/courseTypes";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LocalFileHelper from "./LocalFileHelper";

// External simulators - component mapping
const externalComponentMap: Record<string, React.ComponentType<any>> = {
  // Register your external React components here
  // Example: "QuantumEntanglementDemo": QuantumEntanglementDemo,
};

interface ExternalSimulatorProps {
  lesson: Lesson;
}

const ExternalSimulator: React.FC<ExternalSimulatorProps> = ({ lesson }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Log for debugging
    console.log("Rendering external simulator for lesson:", lesson.id);
    console.log("Simulator URL:", lesson.externalSimulator?.url);
    
    // Reset error state when lesson changes
    setError(null);
    setLoading(true);
  }, [lesson.id]);

  if (!lesson.externalSimulator) {
    return (
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="p-6 text-center text-gray-500">
          No external simulator configuration found for this lesson.
        </CardContent>
      </Card>
    );
  }

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    setLoading(false);
    setError("Failed to load external simulator. Please check if the file path is correct and accessible.");
  };

  // Case 1: Render iframe for external HTML content
  if (lesson.externalSimulator.type === "iframe" && lesson.externalSimulator.url) {
    // Check if trying to load a local file that's not relative
    const isLocalFileProtocol = lesson.externalSimulator.url.startsWith('file:///');
    
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
              <p>Attempted to load: {lesson.externalSimulator.url}</p>
              <p className="mt-2 text-sm">
                For production deployments, move your simulator files to the <code>public/simulators/</code> folder and use a relative path like <code>/simulators/your-simulator.html</code>
              </p>
            </div>
            
            <LocalFileHelper />
          </CardContent>
        </Card>
      );
    }
    
    // Ensure URL has a leading slash for absolute path from public folder
    let simulatorUrl = lesson.externalSimulator.url;
    if (!simulatorUrl.startsWith('/') && !simulatorUrl.startsWith('http')) {
      simulatorUrl = `/${simulatorUrl}`;
    }
    
    return (
      <Card className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <CardContent className="p-2 relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 bg-opacity-75 z-10">
              <Loader2 className="h-8 w-8 animate-spin text-quantum-500" />
            </div>
          )}
          
          {error && (
            <div className="p-4 text-red-500 text-center">{error}</div>
          )}
          
          <iframe 
            ref={iframeRef}
            src={simulatorUrl}
            width={lesson.externalSimulator.width || "100%"}
            height={lesson.externalSimulator.height || 500}
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
  }

  // Case 2: Render React component
  if (lesson.externalSimulator.type === "component" && lesson.externalSimulator.componentName) {
    const ComponentToRender = externalComponentMap[lesson.externalSimulator.componentName];
    
    if (!ComponentToRender) {
      return (
        <Card className="bg-gray-50 dark:bg-gray-900">
          <CardContent className="p-6 text-center text-red-500">
            Component "{lesson.externalSimulator.componentName}" is not registered.
          </CardContent>
        </Card>
      );
    }
    
    return (
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="p-2">
          <ComponentToRender lesson={lesson} />
        </CardContent>
      </Card>
    );
  }

  // Case 3: API-based simulators would go here
  if (lesson.externalSimulator.type === "api") {
    // Implementation for API-based simulators
    return (
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="p-6 text-center text-gray-500">
          API-based simulator integration is configured but not yet implemented.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-50 dark:bg-gray-900">
      <CardContent className="p-6 text-center text-gray-500">
        Unsupported external simulator type.
      </CardContent>
    </Card>
  );
};

export default ExternalSimulator;
