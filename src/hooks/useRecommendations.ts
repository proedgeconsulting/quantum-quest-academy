
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Recommendation {
  id: string;
  course_id: string;
  relevance_score: number;
  reason: string;
  created_at: string;
}

export const useRecommendations = (
  userId: string | undefined, 
  checkAchievements: () => Promise<void>
) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const { toast } = useToast();

  // Generate recommendations
  const generateRecommendations = async () => {
    if (!userId) return;
    
    try {
      // Call the edge function to generate recommendations
      const { error } = await supabase.functions.invoke('generate-recommendations');
      
      if (error) {
        console.error("Error generating recommendations:", error);
        throw error;
      }
      
      console.log("Recommendations generated successfully");
      
      // Fetch the newly generated recommendations
      await fetchRecommendations();
      
      // Check for achievements after generating recommendations
      await checkAchievements();
    } catch (error: any) {
      console.error("Error in recommendation process:", error);
      toast({
        title: "Error generating recommendations",
        description: error.message || "Failed to generate course recommendations",
        variant: "destructive",
      });
    }
  };

  const fetchRecommendations = async () => {
    if (!userId) return;
    
    try {
      // Fetch recommendations
      const { data: recommendationsData, error: recommendationsError } = await supabase
        .from("recommendations")
        .select("*")
        .eq("user_id", userId)
        .order("relevance_score", { ascending: false });
        
      if (recommendationsError) {
        console.error("Error fetching recommendations:", recommendationsError);
        throw recommendationsError;
      }
      
      setRecommendations(recommendationsData || []);
      console.log("Fetched recommendations:", recommendationsData?.length || 0);
    } catch (error: any) {
      console.error("Error fetching recommendations:", error);
      toast({
        title: "Error fetching recommendations",
        description: error.message || "Failed to load your course recommendations",
        variant: "destructive",
      });
      setRecommendations([]);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchRecommendations();
    }
  }, [userId]);

  useEffect(() => {
    // If no recommendations exist, generate them
    if (userId && recommendations.length === 0) {
      generateRecommendations();
    }
  }, [userId, recommendations.length]);

  return {
    recommendations,
    generateRecommendations
  };
};
