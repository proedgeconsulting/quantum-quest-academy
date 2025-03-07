
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface LearningAnalytics {
  completion_rate: number;
  total_completed: number;
  total_lessons: number;
  most_active_hour: string;
  most_active_day: string;
  current_streak: number;
  longest_streak: number;
  last_week_activity: number;
  learning_pattern: string;
}

export interface StreakInfo {
  current_streak: number;
  longest_streak: number;
  is_new_streak: boolean;
  is_continued_streak: boolean;
}

export const useLearningAnalytics = (userId: string | undefined) => {
  const [analytics, setAnalytics] = useState<LearningAnalytics | null>(null);
  const [streakInfo, setStreakInfo] = useState<StreakInfo | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Fetch learning analytics
  const fetchAnalytics = async () => {
    if (!userId) return;

    try {
      setLoading(true);
      // Use a typed function call instead of a direct table query
      const { data, error } = await supabase.functions.invoke('get-learning-analytics', {
        body: { user_id: userId }
      });

      if (error) throw error;
      
      console.log("Analytics data:", data);
      setAnalytics(data);
    } catch (error) {
      console.error("Error fetching learning analytics:", error);
      toast({
        title: "Error",
        description: "Failed to load your learning analytics",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Track learning activity
  const trackActivity = async (activityType: string = 'lesson_completed') => {
    if (!userId) return;
    
    try {
      const { data, error } = await supabase.functions.invoke('track-learning-activity', {
        body: { user_id: userId, activity_type: activityType }
      });
      
      if (error) throw error;
      
      console.log("Activity tracked:", data);
      
      // Update streak info
      if (data?.streak) {
        setStreakInfo(data.streak);
      }
      
      // Show notification if needed
      if (data?.notification) {
        toast({
          title: data.notification.title,
          description: data.notification.message,
          variant: "default",
        });
      }
      
      // Refresh analytics
      fetchAnalytics();
      
      return data;
    } catch (error) {
      console.error("Error tracking learning activity:", error);
      return null;
    }
  };

  // Fetch notifications - temporarily disabled until the table is created
  const fetchNotifications = async () => {
    if (!userId) return;
    
    // Since the user_notifications table doesn't exist yet, we'll just return an empty array
    setNotifications([]);
    
    // Once the table is created, this code would work:
    /*
    try {
      const { data, error } = await supabase.functions.invoke('get-user-notifications', {
        body: { user_id: userId }
      });
        
      if (error) throw error;
      
      setNotifications(data || []);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
    */
  };

  // Mark notification as read - temporarily disabled until the table is created
  const markNotificationAsRead = async (notificationId: string) => {
    // Since the user_notifications table doesn't exist yet, this is a no-op
    
    // Once the table is created, this code would work:
    /*
    try {
      await supabase.functions.invoke('mark-notification-read', {
        body: { notification_id: notificationId }
      });
        
      // Update local state
      setNotifications(prev => prev.filter(n => n.id !== notificationId));
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
    */
  };

  // Load initial data
  useEffect(() => {
    if (userId) {
      fetchAnalytics();
      fetchNotifications();
    }
  }, [userId]);

  return {
    analytics,
    loading,
    streakInfo,
    notifications,
    trackActivity,
    refreshAnalytics: fetchAnalytics,
    refreshNotifications: fetchNotifications,
    markNotificationAsRead
  };
};
