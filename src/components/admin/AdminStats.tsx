
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound, BookOpen, Award, Activity } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const AdminStats = () => {
  const [statsData, setStatsData] = useState({
    totalUsers: "...",
    activeCourses: "...",
    completionRate: "...",
    dailyActiveUsers: "..."
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminAnalytics = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke('admin-analytics');
        
        if (error) {
          console.error("Error fetching admin analytics:", error);
          return;
        }
        
        if (data && data.stats) {
          setStatsData({
            totalUsers: data.stats.totalUsers.toLocaleString(),
            activeCourses: data.stats.activeCourses.toString(),
            completionRate: `${data.stats.completionRate}%`,
            dailyActiveUsers: data.stats.dailyActiveUsers.toString()
          });
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminAnalytics();
  }, []);

  const stats = [
    {
      title: "Total Users",
      value: statsData.totalUsers,
      icon: <UserRound className="h-4 w-4 text-muted-foreground" />,
      change: "+12% from last month",
      trend: "up"
    },
    {
      title: "Active Courses",
      value: statsData.activeCourses,
      icon: <BookOpen className="h-4 w-4 text-muted-foreground" />,
      change: "+4 new courses",
      trend: "up"
    },
    {
      title: "Completion Rate",
      value: statsData.completionRate,
      icon: <Award className="h-4 w-4 text-muted-foreground" />,
      change: "+2% from last month",
      trend: "up"
    },
    {
      title: "Daily Active Users",
      value: statsData.dailyActiveUsers,
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
            <div className="text-2xl font-bold">{loading ? "..." : stat.value}</div>
            <p className={`text-xs ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
