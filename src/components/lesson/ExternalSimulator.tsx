
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lesson } from "@/data/types/courseTypes";
import IframeSimulator from "./simulators/IframeSimulator";
import LocalFileSimulator from "./simulators/LocalFileSimulator";
import ComponentSimulator from "./simulators/ComponentSimulator";
import ApiSimulator from "./simulators/ApiSimulator";

interface ExternalSimulatorProps {
  lesson: Lesson;
}

const ExternalSimulator: React.FC<ExternalSimulatorProps> = ({ lesson }) => {
  useEffect(() => {
    // Log for debugging
    console.log("Rendering external simulator for lesson:", lesson.id);
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

  // Case 1: Handle local file protocol (file:///)
  if (lesson.externalSimulator.type === "iframe" && 
      lesson.externalSimulator.url && 
      lesson.externalSimulator.url.startsWith('file:///')) {
    return (
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="p-6">
          <LocalFileSimulator url={lesson.externalSimulator.url} />
        </CardContent>
      </Card>
    );
  }
  
  // Case 2: Handle iframe-based simulators
  if (lesson.externalSimulator.type === "iframe" && lesson.externalSimulator.url) {
    return (
      <Card className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <CardContent className="p-2 relative">
          <IframeSimulator lesson={lesson} />
        </CardContent>
      </Card>
    );
  }

  // Case 3: Handle component-based simulators
  if (lesson.externalSimulator.type === "component" && lesson.externalSimulator.componentName) {
    return (
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="p-2">
          <ComponentSimulator lesson={lesson} />
        </CardContent>
      </Card>
    );
  }

  // Case 4: Handle API-based simulators
  if (lesson.externalSimulator.type === "api") {
    return (
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="p-6">
          <ApiSimulator />
        </CardContent>
      </Card>
    );
  }

  // Default case: Unsupported simulator type
  return (
    <Card className="bg-gray-50 dark:bg-gray-900">
      <CardContent className="p-6 text-center text-gray-500">
        Unsupported external simulator type.
      </CardContent>
    </Card>
  );
};

export default ExternalSimulator;
