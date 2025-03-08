
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lesson } from "@/data/types/courseTypes";
import { 
  IframeSimulator, 
  ComponentSimulator, 
  ApiSimulator, 
  UnsupportedSimulator,
  QuantumGamesSimulator
} from "./simulators";

// External simulators - component mapping
const externalComponentMap: Record<string, React.ComponentType<any>> = {
  // Register your external React components here
  // Example: "QuantumEntanglementDemo": QuantumEntanglementDemo,
};

// List of quantum games lesson IDs
const quantumGamesLessonIds = [
  "1.1.8.1", "1.1.8.2", "1.1.8.3", "1.1.8.4", 
  "1.1.8.5", "1.1.8.6", "1.1.8.7"
];

interface ExternalSimulatorProps {
  lesson: Lesson;
}

const ExternalSimulator: React.FC<ExternalSimulatorProps> = ({ lesson }) => {
  // Log for debugging
  console.log("Rendering external simulator for lesson:", lesson.id);
  console.log("Simulator URL:", lesson.externalSimulator?.url);
  
  if (!lesson.externalSimulator) {
    return (
      <Card className="bg-gray-50 dark:bg-gray-900">
        <CardContent className="p-6 text-center text-gray-500">
          No external simulator configuration found for this lesson.
        </CardContent>
      </Card>
    );
  }

  // Special case for quantum games
  if (quantumGamesLessonIds.includes(lesson.id)) {
    return <QuantumGamesSimulator lesson={lesson} />;
  }

  // Case 1: Render iframe for external HTML content
  if (lesson.externalSimulator.type === "iframe" && lesson.externalSimulator.url) {
    return (
      <IframeSimulator 
        lesson={lesson} 
        simulatorConfig={{
          url: lesson.externalSimulator.url,
          width: lesson.externalSimulator.width,
          height: lesson.externalSimulator.height
        }} 
      />
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
    
    return <ComponentSimulator lesson={lesson} ComponentToRender={ComponentToRender} />;
  }

  // Case 3: API-based simulators
  if (lesson.externalSimulator.type === "api") {
    return <ApiSimulator lesson={lesson} />;
  }

  // Default case: Unsupported simulator type
  return <UnsupportedSimulator />;
};

export default ExternalSimulator;
