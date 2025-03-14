
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminStats } from "@/components/admin/AdminStats";
import { UserManagement } from "@/components/admin/UserManagement";
import { CourseOverview } from "@/components/admin/CourseOverview";
import { ActivityMonitor } from "@/components/admin/ActivityMonitor";
import { AdminAnalytics } from "@/components/admin/AdminAnalytics";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

const AdminDashboard = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Check if user is admin - in a real app you'd verify this against your database
  useEffect(() => {
    // This is a placeholder for actual admin verification
    // In a production app, you would check the user's role in the database
    const checkAdminStatus = async () => {
      if (!user) {
        navigate("/auth");
        return;
      }
      
      // For demo purposes: consider the first created user as admin
      // In a real application, replace this with actual role verification
      if (user.id) {
        setIsAdmin(true);
      } else {
        navigate("/");
      }
    };
    
    checkAdminStatus();
  }, [user, navigate]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
        <Navbar />
        <div className="container mx-auto py-8 px-4 text-center">
          <ShieldAlert className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="mb-4">You don't have permission to access the admin dashboard.</p>
          <Button onClick={() => navigate("/")}>Return to Homepage</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <span className="text-sm text-muted-foreground">
            Welcome, {profile?.username || user?.email}
          </span>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid grid-cols-5 gap-4 bg-muted">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Platform Overview</CardTitle>
                <CardDescription>Key metrics and performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminStats />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage user accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <UserManagement />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>Monitor course engagement and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <CourseOverview />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity Monitor</CardTitle>
                <CardDescription>Real-time platform activity</CardDescription>
              </CardHeader>
              <CardContent>
                <ActivityMonitor />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Detailed platform analytics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminAnalytics />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
