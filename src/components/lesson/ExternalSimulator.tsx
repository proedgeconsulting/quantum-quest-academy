
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, AlertCircle } from "lucide-react";
import { Lesson } from "@/data/types/courseTypes";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LocalFileHelper from "./LocalFileHelper";
import SimulatorPathResolver from "./SimulatorPathResolver";

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
  const [resolvedUrl, setResolvedUrl] = useState<string | null>(null);

  useEffect(() => {
    // Log for debugging
    console.log("Rendering external simulator for lesson:", lesson.id);
    
    // Reset error state when lesson changes
    setError(null);
    setLoading(true);
    setResolvedUrl(null);
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
    if (!resolvedUrl) {
      setError("Failed to load simulator. The file might not exist or there might be an issue with the simulator.");
    } else {
      setError(`Failed to load simulator at ${resolvedUrl}. There might be an issue with the simulator content.`);
    }
  };

  const handlePathResolved = (path: string) => {
    setResolvedUrl(path);
    setError(null);
  };

  const handlePathError = () => {
    setLoading(false);
    setError(`Could not find simulator file for "${lesson.title}". Please check that the file exists in the public folder.`);
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
                For production deployments, move your simulator files to the <code>public/</code> folder and use a relative path like <code>/your-simulator.html</code>
              </p>
            </div>
            
            <LocalFileHelper />
          </CardContent>
        </Card>
      );
    }
    
    return (
      <Card className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <CardContent className="p-2 relative">
          {/* Path resolution for the simulator file */}
          {!resolvedUrl && !error && (
            <SimulatorPathResolver 
              url={lesson.externalSimulator.url}
              onResolve={handlePathResolved}
              onError={handlePathError}
            />
          )}
          
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 bg-opacity-75 z-10">
              <Loader2 className="h-8 w-8 animate-spin text-quantum-500" />
            </div>
          )}
          
          {error && (
            <div className="p-4 text-red-500 text-center">
              <AlertCircle className="h-6 w-6 mx-auto mb-2" />
              <p>{error}</p>
              <p className="text-sm mt-2">
                Make sure the file exists at one of the following locations:
                <ul className="list-disc mt-1 text-left pl-6 text-gray-500">
                  <li><code>public{lesson.externalSimulator.url}</code></li>
                  <li><code>public/simulators/{lesson.externalSimulator.url.replace(/^\//, '')}</code></li>
                </ul>
              </p>
            </div>
          )}
          
          {resolvedUrl && (
            <iframe 
              ref={iframeRef}
              src={resolvedUrl}
              width={lesson.externalSimulator.width || "100%"}
              height={lesson.externalSimulator.height || 500}
              style={{ border: "none" }}
              title={`External simulator for ${lesson.title}`}
              sandbox="allow-scripts allow-same-origin allow-forms"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
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
