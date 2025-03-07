
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CourseProgressItem } from "@/components/progress/CourseProgressSection";
import { Achievement } from "@/components/progress/AchievementsSection";
import { level1Courses, level2Courses, level3Courses } from "@/data/courseData";
import { useAchievements } from "./useAchievements";
import { useRecommendations } from "./useRecommendations";

export interface ProgressData {
  achievements: Achievement[];
  courseProgress: CourseProgressItem[];
  recommendations: any[];
  totalPoints: number;
  loading: boolean;
  newAchievements: Achievement[];
}

export const useProgressData = (userId: string | undefined) => {
  const [courseProgress, setCourseProgress] = useState<CourseProgressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Use the separated hooks
  const { 
    achievements, 
    totalPoints, 
    newAchievements, 
    checkAchievements 
  } = useAchievements(userId);
  
  const { 
    recommendations, 
    generateRecommendations 
  } = useRecommendations(userId, checkAchievements);

  // Combine all courses for processing
  const allCourses = [...level1Courses, ...level2Courses, ...level3Courses];

  const fetchData = async () => {
    if (!userId) {
      console.log("No user ID provided to useProgressData");
      setLoading(false);
      return;
    }

    console.log("Fetching progress data for user:", userId);
    
    try {
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
    } catch (error: any) {
      console.error("Error loading progress data:", error);
      toast({
        title: "Error loading progress data",
        description: error.message || "Failed to load your progress",
        variant: "destructive",
      });
      
      // Set default empty data on error
      setCourseProgress([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [userId]);

  return {
    achievements,
    courseProgress,
    recommendations,
    totalPoints,
    loading,
    newAchievements,
    refreshRecommendations: generateRecommendations,
    checkAchievements
  };
};
