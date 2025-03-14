
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { ChartContainer, ChartTooltip, ChartLegend } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";

export const AdminAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState({
    userActivity: [],
    courseEngagement: [],
    learnerDemographics: []
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
        
        if (data && data.charts) {
          setAnalyticsData({
            userActivity: data.charts.userActivity || [],
            courseEngagement: data.charts.courseEngagement || [],
            learnerDemographics: data.charts.learnerDemographics || []
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
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const renderSkeleton = () => (
    <div className="w-full h-64">
      <Skeleton className="w-full h-full" />
    </div>
  );

  return (
    <Tabs defaultValue="overview">
      <TabsList className="mb-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="users">User Analytics</TabsTrigger>
        <TabsTrigger value="courses">Course Analytics</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Active Users</CardTitle>
              <CardDescription>User activity over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? renderSkeleton() : (
                <ChartContainer config={{}} className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData.userActivity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Learner Age Distribution</CardTitle>
              <CardDescription>Demographic breakdown of users</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? renderSkeleton() : (
                <ChartContainer config={{}} className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={analyticsData.learnerDemographics}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {analyticsData.learnerDemographics.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              )}
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Course Engagement</CardTitle>
            <CardDescription>Enrollments vs completions for top courses</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? renderSkeleton() : (
              <ChartContainer config={{}} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analyticsData.courseEngagement}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip />
                    <Legend />
                    <Bar dataKey="enrollments" fill="#8884d8" name="Enrollments" />
                    <Bar dataKey="completions" fill="#82ca9d" name="Completions" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="users" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>New registrations over time</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Detailed user analytics would be implemented here</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="courses" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Course Performance</CardTitle>
            <CardDescription>Detailed metrics for all courses</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Detailed course analytics would be implemented here</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
