
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lesson } from "@/data/types/courseTypes";

interface ComponentSimulatorProps {
  lesson: Lesson;
  ComponentToRender: React.ComponentType<any>;
}

const ComponentSimulator: React.FC<ComponentSimulatorProps> = ({ 
  lesson, 
  ComponentToRender 
}) => {
  return (
    <Card className="bg-gray-50 dark:bg-gray-900">
      <CardContent className="p-2">
        <ComponentToRender lesson={lesson} />
      </CardContent>
    </Card>
  );
};

export default ComponentSimulator;
