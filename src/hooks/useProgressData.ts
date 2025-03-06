
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CourseProgressItem } from "@/components/progress/CourseProgressSection";
import { Achievement } from "@/components/progress/AchievementsSection";
import { level1Courses, level2Courses, level3Courses } from "@/data/courseData";

export interface Recommendation {
  id: string;
  course_id: string;
  relevance_score: number;
  reason: string;
  created_at: string;
}

export interface ProgressData {
  achievements: Achievement[];
  courseProgress: CourseProgressItem[];
  recommendations: Recommendation[];
  totalPoints: number;
  loading: boolean;
}

export const useProgressData = (userId: string | undefined) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [courseProgress, setCourseProgress] = useState<CourseProgressItem[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Combine all courses for processing
  const allCourses = [...level1Courses, ...level2Courses, ...level3Courses];

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
      const { data: recommendationsData, error: fetchError } = await supabase
        .from("recommendations")
        .select("*")
        .eq("user_id", userId)
        .order("relevance_score", { ascending: false });
        
      if (fetchError) {
        console.error("Error fetching recommendations:", fetchError);
        throw fetchError;
      }
      
      setRecommendations(recommendationsData || []);
      console.log("Fetched recommendations:", recommendationsData?.length || 0);
    } catch (error: any) {
      console.error("Error in recommendation process:", error);
      toast({
        title: "Error generating recommendations",
        description: error.message || "Failed to generate course recommendations",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        console.log("No user ID provided to useProgressData");
        setLoading(false);
        return;
      }

      console.log("Fetching progress data for user:", userId);
      
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

        // Fetch actual course progress from the database
        const { data: progressData, error: progressError } = await supabase
          .from("user_progress")
          .select("*")
          .eq("user_id", userId);

        if (progressError) {
          console.error("Error fetching user progress:", progressError);
          throw progressError;
        }

        console.log("Fetched user progress entries:", progressData?.length || 0);

        // Process the data to get course progress
        const progressByCourseLessons = progressData?.reduce((acc: Record<string, string[]>, item) => {
          if (!acc[item.course_id]) {
            acc[item.course_id] = [];
          }
          if (item.completed) {
            acc[item.course_id].push(item.lesson_id);
          }
          return acc;
        }, {}) || {};

        console.log("Progress by course:", Object.keys(progressByCourseLessons).length);
        console.log("All courses count:", allCourses.length);

        // Map the progress data to courses
        const courseProgressData = allCourses.map(course => {
          // Calculate total lessons in the course
          const totalLessons = course.modules?.reduce(
            (total, module) => total + (module.lessons?.length || 0), 0
          ) || 0;

          // Get completed lessons for this course
          const completedLessons = progressByCourseLessons[course.id]?.length || 0;
          
          // Calculate percent complete
          const percentComplete = totalLessons > 0 
            ? Math.round((completedLessons / totalLessons) * 100) 
            : 0;

          return {
            course_id: course.id,
            course_name: course.title,
            completed_lessons: completedLessons,
            total_lessons: totalLessons,
            percent_complete: percentComplete,
            level: course.level || parseInt(course.id.split('.')[0]) || 1
          };
        });

        // Sort by level and progress
        courseProgressData.sort((a, b) => {
          if (a.level !== b.level) return a.level - b.level;
          return b.percent_complete - a.percent_complete;
        });

        setCourseProgress(courseProgressData);
        console.log("Course progress data prepared:", courseProgressData.length);
        
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
        
        // If no recommendations exist, generate them
        if (!recommendationsData || recommendationsData.length === 0) {
          await generateRecommendations();
        }
      } catch (error: any) {
        console.error("Error loading progress data:", error);
        toast({
          title: "Error loading progress data",
          description: error.message || "Failed to load your progress",
          variant: "destructive",
        });
        
        // Set default empty data on error
        setAchievements([]);
        setCourseProgress([]);
        setRecommendations([]);
        setTotalPoints(0);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [userId, toast, allCourses]);

  return {
    achievements,
    courseProgress,
    recommendations,
    totalPoints,
    loading,
    refreshRecommendations: generateRecommendations
  };
};
