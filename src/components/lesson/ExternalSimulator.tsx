
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiSimulator from "./simulators/ApiSimulator";

interface IframeSimulatorProps {
  url: string;
  height?: number | string;
  width?: number | string;
  title?: string;
}

interface ApiSimulatorProps {
  apiEndpoint: string;
  height?: number | string;
  width?: number | string;
  params?: Record<string, string>;
}

interface ExternalSimulatorProps {
  simulator: {
    type: "iframe" | "api";
    url?: string;
    apiEndpoint?: string;
    height?: number | string;
    width?: number | string;
    title?: string;
    params?: Record<string, string>;
  };
}

const IframeSimulator: React.FC<IframeSimulatorProps> = ({ url, height = 500, width = "100%", title = "Simulator" }) => {
  return (
    <iframe
      src={url}
      height={height}
      width={width}
      style={{ border: "none", borderRadius: "8px", overflow: "hidden" }}
      title={title}
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      loading="lazy"
    />
  );
};

const ExternalSimulator: React.FC<ExternalSimulatorProps> = ({ simulator }) => {
  if (simulator.type === "iframe" && simulator.url) {
    return (
      <Card>
        <CardContent className="p-1 sm:p-2 overflow-hidden">
          <IframeSimulator 
            url={simulator.url} 
            height={simulator.height} 
            width={simulator.width} 
            title={simulator.title}
          />
        </CardContent>
      </Card>
    );
  } else if (simulator.type === "api" && simulator.apiEndpoint) {
    return (
      <Card>
        <CardContent className="p-1 sm:p-2 overflow-hidden">
          <ApiSimulator 
            apiEndpoint={simulator.apiEndpoint}
            height={simulator.height}
            width={simulator.width}
            params={simulator.params}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-center text-muted-foreground">Simulator type not supported or configuration incomplete.</p>
      </CardContent>
    </Card>
  );
};

export default ExternalSimulator;
