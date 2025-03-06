
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { level1Courses, level2Courses, level3Courses } from "@/data/courseData";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseProgressSection, { CourseProgressItem } from "@/components/progress/CourseProgressSection";
import PointsSummarySection from "@/components/progress/PointsSummarySection";
import AchievementsSection, { Achievement } from "@/components/progress/AchievementsSection";
import LearningStatsSection from "@/components/progress/LearningStatsSection";
import ProgressPageLoading from "@/components/progress/ProgressPageLoading";

const Progress = () => {
  const { user, loading: authLoading } = useAuth();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [courseProgress, setCourseProgress] = useState<CourseProgressItem[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Combine all courses for processing
  const allCourses = [...level1Courses, ...level2Courses, ...level3Courses];

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

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
          .eq("user_id", user.id);

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
          .eq("user_id", user.id);

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

    if (user) {
      fetchData();
    } else if (!authLoading) {
      setLoading(false);
    }
  }, [user, authLoading, toast, allCourses]);

  if (!user && !authLoading) {
    return <Navigate to="/auth" replace />;
  }

  if (loading || authLoading) {
    return <ProgressPageLoading />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-8 px-4 flex-grow">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-quantum-900 dark:text-white mb-2">
            Your Learning Journey
          </h1>
          <p className="text-quantum-600 dark:text-quantum-300">
            Track your progress and achievements in quantum learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CourseProgressSection courseProgress={courseProgress} />
          </motion.div>

          {/* Points Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PointsSummarySection 
              totalPoints={totalPoints} 
              achievementsEarned={achievements.filter(a => a.earned_at).length} 
              totalAchievements={achievements.length}
            />
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <AchievementsSection achievements={achievements} />
        </motion.div>

        {/* Learning Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <LearningStatsSection courseProgress={courseProgress} totalPoints={totalPoints} />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Progress;
