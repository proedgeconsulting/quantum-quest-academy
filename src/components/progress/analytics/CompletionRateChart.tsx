
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartPie } from "lucide-react";

interface CompletionRateChartProps {
  completionRate: number;
  totalCompleted: number;
  totalLessons: number;
}

const CompletionRateChart: React.FC<CompletionRateChartProps> = ({
  completionRate,
  totalCompleted,
  totalLessons
}) => {
  const data = [
    { name: "Completed", value: totalCompleted },
    { name: "Remaining", value: totalLessons - totalCompleted }
  ];

  const COLORS = ["rgba(99, 102, 241, 0.8)", "rgba(203, 213, 225, 0.5)"];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChartPie className="text-energy-500" />
          Completion Progress
        </CardTitle>
        <CardDescription>Overall course completion rate</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl font-bold mb-2">{completionRate}%</div>
          <div className="text-sm text-muted-foreground mb-4">
            {totalCompleted} of {totalLessons} lessons completed
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompletionRateChart;
