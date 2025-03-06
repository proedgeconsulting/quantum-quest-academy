
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Course } from "@/data/courseData";
import { updateProgress } from "@/data/courseData";

export const useCourseProgress = (course: Course | undefined, userId: string | undefined) => {
  const { toast } = useToast();
  const [userProgress, setUserProgress] = useState<Record<string, any>>({});
  const [loadingProgress, setLoadingProgress] = useState(true);
  
  // Fetch user progress
  useEffect(() => {
    const fetchProgress = async () => {
      if (!userId || !course) return;

      setLoadingProgress(true);
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', userId)
          .eq('course_id', course.id);

        if (error) throw error;

        // Convert array to object with lesson IDs as keys
        const progressMap: Record<string, any> = {};
        data.forEach(item => {
          progressMap[item.lesson_id] = item;
        });

        setUserProgress(progressMap);
      } catch (error) {
        console.error("Error fetching progress:", error);
        toast({
          title: "Failed to load progress",
          description: "There was an error loading your progress. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoadingProgress(false);
      }
    };

    fetchProgress();
  }, [userId, course, toast]);

  const handleLessonComplete = async (lessonId: string, completed: boolean, score?: number) => {
    if (!userId || !course) return;

    try {
      await updateProgress(userId, course.id, lessonId, completed, score);
      
      // Update local state
      setUserProgress(prev => ({
        ...prev,
        [lessonId]: {
          ...prev[lessonId],
          completed,
          score: score !== undefined ? score : prev[lessonId]?.score || 0
        }
      }));
      
      toast({
        title: "Progress saved",
        description: "Your progress has been saved successfully!",
        variant: "default",
      });
    } catch (error) {
      console.error("Error updating progress:", error);
      toast({
        title: "Failed to save progress",
        description: "There was an error saving your progress. Please try again.",
        variant: "destructive",
      });
    }
  };

  const calculateModuleProgress = (moduleId: string) => {
    if (!course) return 0;
    const module = course.modules.find(m => m.id === moduleId);
    if (!module) return 0;
    
    const lessonCount = module.lessons.length;
    if (lessonCount === 0) return 0;
    
    const completedLessons = module.lessons.filter(lesson => 
      userProgress[lesson.id]?.completed
    ).length;
    
    return Math.round((completedLessons / lessonCount) * 100);
  };

  const calculateCourseProgress = () => {
    if (!course) return 0;
    
    const totalLessons = course.modules.reduce(
      (total, module) => total + module.lessons.length, 0
    );
    
    if (totalLessons === 0) return 0;
    
    const completedLessons = Object.values(userProgress).filter(
      progress => progress.completed
    ).length;
    
    return Math.round((completedLessons / totalLessons) * 100);
  };

  return {
    userProgress,
    loadingProgress,
    handleLessonComplete,
    calculateModuleProgress,
    calculateCourseProgress
  };
};
