
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const UnsupportedSimulator: React.FC = () => {
  return (
    <Card className="bg-gray-50 dark:bg-gray-900">
      <CardContent className="p-6 text-center text-gray-500">
        Unsupported external simulator type.
      </CardContent>
    </Card>
  );
};

export default UnsupportedSimulator;
