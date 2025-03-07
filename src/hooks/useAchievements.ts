
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Achievement } from "@/components/progress/AchievementsSection";

export const useAchievements = (userId: string | undefined) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const { toast } = useToast();

  // Check for achievements
  const checkAchievements = async () => {
    if (!userId) return;
    
    try {
      // Call the edge function to check achievements
      const { data, error } = await supabase.functions.invoke('check-achievements', {
        body: { user_id: userId }
      });
      
      if (error) {
        console.error("Error checking achievements:", error);
        throw error;
      }
      
      console.log("Achievement check results:", data);
      
      // If there are new achievements, update state
      if (data.newAchievements && data.newAchievements.length > 0) {
        setNewAchievements(data.newAchievements);
        
        // Show a toast notification
        toast({
          title: "Achievement Unlocked!",
          description: `You've earned ${data.newAchievements.length} new achievement${data.newAchievements.length > 1 ? 's' : ''}!`,
          variant: "default",
        });
        
        // Update total points
        setTotalPoints(data.totalPoints);
        
        // Refresh achievements list
        await fetchAchievements();
      }
    } catch (error: any) {
      console.error("Error in achievement check process:", error);
      toast({
        title: "Error checking achievements",
        description: error.message || "Failed to check for new achievements",
        variant: "destructive",
      });
    }
  };

  const fetchAchievements = async () => {
    if (!userId) return;

    try {
      // Fetch achievements
      const { data: achievementsData, error: achievementsError } = await supabase
        .from("achievements")
        .select("*");

      if (achievementsError) {
        console.error("Error fetching achievements:", achievementsError);
        throw achievementsError;
      }

      console.log("Fetched achievements:", achievementsData?.length || 0);

      // Fetch user's earned achievements
      const { data: userAchievementsData, error: userAchievementsError } = await supabase
        .from("user_achievements")
        .select("achievement_id, earned_at")
        .eq("user_id", userId);

      if (userAchievementsError) {
        console.error("Error fetching user achievements:", userAchievementsError);
        throw userAchievementsError;
      }

      console.log("Fetched user achievements:", userAchievementsData?.length || 0);

      // Combine the data
      const userAchievementsMap = new Map(
        userAchievementsData?.map((ua) => [ua.achievement_id, ua.earned_at]) || []
      );

      const enhancedAchievements = achievementsData?.map((achievement) => ({
        ...achievement,
        earned_at: userAchievementsMap.get(achievement.id),
      })) || [];

      setAchievements(enhancedAchievements);

      // Calculate total points
      const earned = enhancedAchievements
        .filter((a) => a.earned_at)
        .reduce((sum, a) => sum + a.points, 0);
      
      setTotalPoints(earned);
    } catch (error: any) {
      console.error("Error fetching achievements:", error);
      toast({
        title: "Error fetching achievements",
        description: error.message || "Failed to load your achievements",
        variant: "destructive",
      });
      setAchievements([]);
      setTotalPoints(0);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchAchievements();
    }
  }, [userId]);

  return {
    achievements,
    newAchievements,
    totalPoints,
    checkAchievements
  };
};
