
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lesson } from "@/data/types/courseTypes";

interface ApiSimulatorProps {
  lesson: Lesson;
}

const ApiSimulator: React.FC<ApiSimulatorProps> = ({ lesson }) => {
  return (
    <Card className="bg-gray-50 dark:bg-gray-900">
      <CardContent className="p-6 text-center text-gray-500">
        API-based simulator integration is configured but not yet implemented.
      </CardContent>
    </Card>
  );
};

export default ApiSimulator;
