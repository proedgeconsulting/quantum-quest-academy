
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LearningAnalytics, StreakInfo } from "../types/analyticsTypes";

export const useAnalyticsCore = (userId: string | undefined) => {
  const [analytics, setAnalytics] = useState<LearningAnalytics | null>(null);
  const [streakInfo, setStreakInfo] = useState<StreakInfo | null>(null);
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

  // Load initial data
  useEffect(() => {
    if (userId) {
      fetchAnalytics();
    }
  }, [userId]);

  return {
    analytics,
    loading,
    streakInfo,
    trackActivity,
    refreshAnalytics: fetchAnalytics,
  };
};
