
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
  learning_activity?: any[]; // Add this property to fix the type error
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

  // Get AI assistance for a specific concept
  const getAIAssistance = async (concept: string, question: string) => {
    if (!userId) return null;
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-learning-assistant', {
        body: { 
          user_id: userId, 
          concept: concept,
          question: question 
        }
      });
      
      if (error) throw error;
      
      // Track this interaction for analytics
      await supabase.from('user_learning_interactions').insert({
        user_id: userId,
        concept: concept,
        interaction_type: 'ai_assistance'
      });
      
      return data;
    } catch (error) {
      console.error("Error getting AI assistance:", error);
      toast({
        title: "AI Assistant Error",
        description: "Couldn't get an answer right now. Please try again later.",
        variant: "destructive",
      });
      return null;
    }
  };

  // Generate a personalized quiz
  const generatePersonalizedQuiz = async (courseId: string) => {
    if (!userId) return null;
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-personalized-quiz', {
        body: { 
          user_id: userId, 
          course_id: courseId 
        }
      });
      
      if (error) throw error;
      
      return data;
    } catch (error) {
      console.error("Error generating personalized quiz:", error);
      toast({
        title: "Quiz Generation Error",
        description: "Couldn't generate a quiz right now. Please try again later.",
        variant: "destructive",
      });
      return null;
    }
  };

  // Generate a certificate
  const generateCertificate = async (courseId: string, courseName: string) => {
    if (!userId) return false;
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-certificate', {
        body: { 
          userId: userId,
          courseId: courseId,
          courseName: courseName
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Certificate Generated",
        description: "Your certificate has been generated and sent to your email!",
        variant: "default",
      });
      
      return true;
    } catch (error) {
      console.error("Error generating certificate:", error);
      toast({
        title: "Certificate Generation Error",
        description: "Couldn't generate your certificate right now. Please try again later.",
        variant: "destructive",
      });
      return false;
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
    getAIAssistance,
    generatePersonalizedQuiz,
    generateCertificate,
    refreshAnalytics: fetchAnalytics,
    refreshNotifications: fetchNotifications,
    markNotificationAsRead
  };
};
