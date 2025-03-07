import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Gauge, Activity } from "lucide-react";

interface ActivityMetricsProps {
  mostActiveHour: string;
  mostActiveDay: string;
  learningPattern: string;
  lastWeekActivity: number;
}

const ActivityMetrics: React.FC<ActivityMetricsProps> = ({
  mostActiveHour,
  mostActiveDay,
  learningPattern,
  lastWeekActivity
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gauge className="text-energy-500" />
          Learning Metrics
        </CardTitle>
        <CardDescription>Key metrics about your learning habits</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
            <Clock className="h-6 w-6 text-blue-500 mb-2" />
            <div className="text-sm font-semibold">{mostActiveHour}</div>
            <div className="text-xs text-muted-foreground text-center">Most Active Hour</div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
            <Calendar className="h-6 w-6 text-green-500 mb-2" />
            <div className="text-sm font-semibold">{mostActiveDay}</div>
            <div className="text-xs text-muted-foreground text-center">Most Active Day</div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
            <Gauge className="h-6 w-6 text-purple-500 mb-2" />
            <div className="text-sm font-semibold">{learningPattern}</div>
            <div className="text-xs text-muted-foreground text-center">Learning Pattern</div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
            <Activity className="h-6 w-6 text-yellow-500 mb-2" />
            <div className="text-sm font-semibold">{lastWeekActivity}</div>
            <div className="text-xs text-muted-foreground text-center">Last Week Activities</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityMetrics;
