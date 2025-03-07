
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
import { Clock } from "lucide-react";

interface HourlyDistributionProps {
  hourlyData: Array<{
    hour: string;
    sessions: number;
  }>;
}

const HourlyDistributionChart: React.FC<HourlyDistributionProps> = ({ hourlyData }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="text-energy-500" />
          Learning Time Distribution
        </CardTitle>
        <CardDescription>When you're most active during the day</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hourlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="hour" 
                label={{ value: 'Hour of Day', position: 'insideBottom', offset: -10 }}
              />
              <YAxis 
                label={{ value: 'Sessions', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip formatter={(value) => [`${value} sessions`, 'Activity']} />
              <Legend />
              <Bar 
                dataKey="sessions" 
                name="Learning Sessions" 
                fill="rgba(129, 140, 248, 0.8)" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyDistributionChart;
