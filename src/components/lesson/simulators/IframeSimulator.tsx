
import React, { useRef, useState, useEffect } from "react";
import { Lesson } from "@/data/types/courseTypes";
import SimulatorPathResolver from "../SimulatorPathResolver";
import SimulatorLoadingIndicator from "./SimulatorLoadingIndicator";
import SimulatorErrorDisplay from "./SimulatorErrorDisplay";
import SimulatorSuccessIndicator from "./SimulatorSuccessIndicator";

interface IframeSimulatorProps {
  lesson: Lesson;
}

const IframeSimulator: React.FC<IframeSimulatorProps> = ({ lesson }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [resolvedUrl, setResolvedUrl] = useState<string | null>(null);
  const [simulatorLoaded, setSimulatorLoaded] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);
    setResolvedUrl(null);
    setSimulatorLoaded(false);
  }, [lesson.id]);

  if (!lesson.externalSimulator?.url) {
    return null;
  }

  const handleIframeLoad = () => {
    setLoading(false);
    setSimulatorLoaded(true);
    console.log(`Simulator loaded successfully: ${resolvedUrl}`);
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
    console.log(`Path resolved to: ${path}`);
  };

  const handlePathError = () => {
    setLoading(false);
    setError(`Could not find simulator file for "${lesson.title}". Please check that the file exists in the public folder.`);
  };

  return (
    <>
      {/* Path resolution for the simulator file */}
      {!resolvedUrl && !error && (
        <SimulatorPathResolver 
          url={lesson.externalSimulator.url}
          onResolve={handlePathResolved}
          onError={handlePathError}
        />
      )}
      
      {loading && <SimulatorLoadingIndicator />}
      
      {error && (
        <SimulatorErrorDisplay 
          errorMessage={error} 
          simulatorUrl={lesson.externalSimulator.url} 
        />
      )}
      
      {simulatorLoaded && <SimulatorSuccessIndicator />}
      
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
    </>
  );
};

export default IframeSimulator;
