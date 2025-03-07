
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface MonthlyConsistencyProps {
  monthlyData: Array<{
    date: string;
    sessionsCount: number;
    avgSessionsCount: number;
  }>;
}

const MonthlyConsistencyChart: React.FC<MonthlyConsistencyProps> = ({ monthlyData }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="text-energy-500" />
          Monthly Learning Consistency
        </CardTitle>
        <CardDescription>Your learning activity compared to your average</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                label={{ value: 'Date', position: 'insideBottom', offset: -10 }}
              />
              <YAxis 
                label={{ value: 'Sessions', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip />
              <Legend />
              <ReferenceLine y={0} stroke="#666" />
              <Line 
                type="monotone" 
                dataKey="sessionsCount" 
                name="Daily Sessions" 
                stroke="#8884d8" 
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="avgSessionsCount" 
                name="Your Average" 
                stroke="#82ca9d" 
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyConsistencyChart;
