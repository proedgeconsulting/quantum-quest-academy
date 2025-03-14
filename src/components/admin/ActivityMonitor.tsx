
import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Eye, BookOpen, CheckCircle, UserCog, FileInput } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const ActivityMonitor = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserActivities = async () => {
      try {
        setLoading(true);
        // Get recent user progress updates
        const { data: progressData, error: progressError } = await supabase
          .from("user_progress")
          .select(`
            id,
            user_id,
            course_id,
            lesson_id,
            completed,
            updated_at,
            profiles:user_id (username, avatar_url)
          `)
          .order('updated_at', { ascending: false })
          .limit(10);

        if (progressError) {
          console.error("Error fetching user activities:", progressError);
          return;
        }

        // Transform the data for the activity feed
        const formattedActivities = progressData.map(item => {
          const actionType = item.completed ? "completed" : "viewed";
          const username = item.profiles?.username || "Anonymous User";
          const avatarUrl = item.profiles?.avatar_url || null;
          const userInitial = username ? username[0].toUpperCase() : "A";
          
          return {
            id: item.id,
            userId: item.user_id,
            username,
            avatarUrl,
            userInitial,
            courseId: item.course_id,
            lessonId: item.lesson_id,
            actionType,
            time: new Date(item.updated_at),
            timeAgo: formatTimeAgo(new Date(item.updated_at))
          };
        });

        setActivities(formattedActivities);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserActivities();

    // Set up realtime subscription for activity updates
    const channel = supabase
      .channel('public:user_progress')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'user_progress'
      }, payload => {
        fetchUserActivities();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Helper function to format time ago
  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  // Helper function to get action icon
  const getActionIcon = (actionType) => {
    switch (actionType) {
      case "viewed":
        return <Eye className="h-4 w-4" />;
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "edited":
        return <FileInput className="h-4 w-4" />;
      case "registered":
        return <UserCog className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading activity data...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Recent Activity</h3>
        <Badge variant="outline">{activities.length} events</Badge>
      </div>
      
      <div className="space-y-6">
        {activities.length > 0 ? activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <Avatar className="h-9 w-9">
              <AvatarImage src={activity.avatarUrl} alt={activity.username} />
              <AvatarFallback>{activity.userInitial}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                <span className="font-semibold">{activity.username}</span>
                {" "}
                <span className="inline-flex items-center gap-1">
                  {getActionIcon(activity.actionType)}
                  {activity.actionType === "completed" ? "completed" : "viewed"}
                </span>
                {" "}
                <span className="font-medium">Lesson {activity.lessonId}</span>
                {" "}
                in Course <span className="font-medium">{activity.courseId}</span>
              </p>
              <p className="text-xs text-muted-foreground">{activity.timeAgo}</p>
            </div>
          </div>
        )) : (
          <div className="text-center py-8 text-muted-foreground">
            No recent activity to display
          </div>
        )}
      </div>
    </div>
  );
};
