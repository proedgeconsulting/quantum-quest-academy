
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
import { AdminAuth } from "@/components/admin/AdminAuth";
import { Button } from "@/components/ui/button";
import { ShieldAlert, LogOut } from "lucide-react";

const AdminDashboard = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPasswordAuthenticated, setIsPasswordAuthenticated] = useState(false);
  
  // Check if user is logged in
  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  // If not authenticated and not an admin, show access denied
  if (!user) {
    return null; // Loading or redirecting
  }
  
  // User is logged in but hasn't entered admin password yet
  if (!isPasswordAuthenticated) {
    return (
      <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
        <Navbar />
        <div className="container mx-auto py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
            <AdminAuth onAuthenticate={setIsPasswordAuthenticated} />
          </div>
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
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {profile?.username || user?.email}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsPasswordAuthenticated(false)}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Exit Admin
            </Button>
          </div>
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
