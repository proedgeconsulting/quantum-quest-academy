
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound, BookOpen, Award, Activity } from "lucide-react";

export const AdminStats = () => {
  // This would be fetched from your database in a real application
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: <UserRound className="h-4 w-4 text-muted-foreground" />,
      change: "+12% from last month",
      trend: "up"
    },
    {
      title: "Active Courses",
      value: "48",
      icon: <BookOpen className="h-4 w-4 text-muted-foreground" />,
      change: "+4 new courses",
      trend: "up"
    },
    {
      title: "Completion Rate",
      value: "76%",
      icon: <Award className="h-4 w-4 text-muted-foreground" />,
      change: "+2% from last month",
      trend: "up"
    },
    {
      title: "Daily Active Users",
      value: "342",
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
      change: "-3% from yesterday",
      trend: "down"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
