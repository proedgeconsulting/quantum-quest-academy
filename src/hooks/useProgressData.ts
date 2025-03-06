
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CourseProgressItem } from "@/components/progress/CourseProgressSection";
import { Achievement } from "@/components/progress/AchievementsSection";
import { level1Courses, level2Courses, level3Courses } from "@/data/courseData";

export interface ProgressData {
  achievements: Achievement[];
  courseProgress: CourseProgressItem[];
  totalPoints: number;
  loading: boolean;
}

export const useProgressData = (userId: string | undefined) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [courseProgress, setCourseProgress] = useState<CourseProgressItem[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Combine all courses for processing
  const allCourses = [...level1Courses, ...level2Courses, ...level3Courses];

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;

      try {
        // Fetch achievements
        const { data: achievementsData, error: achievementsError } = await supabase
          .from("achievements")
          .select("*");

        if (achievementsError) throw achievementsError;

        // Fetch user's earned achievements
        const { data: userAchievementsData, error: userAchievementsError } = await supabase
          .from("user_achievements")
          .select("achievement_id, earned_at")
          .eq("user_id", userId);

        if (userAchievementsError) throw userAchievementsError;

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

        if (progressError) throw progressError;

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
      } catch (error: any) {
        console.error("Error loading progress data:", error);
        toast({
          title: "Error loading progress data",
          description: error.message || "Failed to load your progress",
          variant: "destructive",
        });
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
    totalPoints,
    loading,
  };
};
