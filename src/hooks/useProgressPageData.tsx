
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useProgressData } from "@/hooks/useProgressData";
import { useLearningAnalytics } from "@/hooks/useLearningAnalytics";

export const useProgressPageData = (userId: string | undefined) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();
  
  const { 
    achievements, 
    courseProgress, 
    recommendations,
    totalPoints, 
    loading,
    newAchievements,
    refreshRecommendations
  } = useProgressData(userId);
  
  const {
    streakInfo,
    loading: analyticsLoading
  } = useLearningAnalytics(userId);

  // Handle refresh of recommendations
  const handleRefreshRecommendations = async () => {
    if (!userId) return;
    
    setIsRefreshing(true);
    try {
      await refreshRecommendations();
      toast({
        title: "Recommendations updated",
        description: "Your personalized recommendations have been refreshed.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error refreshing recommendations:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const hasNoData = courseProgress.every(course => course.completed_lessons === 0) && 
                    achievements.filter(a => a.earned_at).length === 0;

  return {
    achievements,
    courseProgress,
    recommendations,
    totalPoints,
    loading,
    analyticsLoading,
    newAchievements,
    streakInfo,
    isRefreshing,
    hasNoData,
    handleRefreshRecommendations
  };
};
