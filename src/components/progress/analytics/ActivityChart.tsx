
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ActivityChartProps {
  activityData: Array<{
    date: string;
    activities: number;
  }>;
  title?: string;
  description?: string;
}

const ActivityChart: React.FC<ActivityChartProps> = ({ 
  activityData,
  title = "Learning Activity",
  description = "Your learning activity over the past 30 days"
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="text-energy-500" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                label={{ value: 'Date', position: 'insideBottom', offset: -10 }}
              />
              <YAxis 
                label={{ value: 'Activities', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="activities" 
                name="Learning Activities" 
                fill="rgba(99, 102, 241, 0.5)" 
                stroke="rgb(99, 102, 241)" 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
