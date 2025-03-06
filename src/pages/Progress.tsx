
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseProgressSection from "@/components/progress/CourseProgressSection";
import PointsSummarySection from "@/components/progress/PointsSummarySection";
import AchievementsSection from "@/components/progress/AchievementsSection";
import LearningStatsSection from "@/components/progress/LearningStatsSection";
import RecommendationsSection from "@/components/progress/RecommendationsSection";
import ProgressPageLoading from "@/components/progress/ProgressPageLoading";

// Custom hook for fetching progress data
import { useProgressData } from "@/hooks/useProgressData";
import { useToast } from "@/hooks/use-toast";

const Progress = () => {
  const { user, loading: authLoading } = useAuth();
  const { 
    achievements, 
    courseProgress, 
    recommendations,
    totalPoints, 
    loading,
    refreshRecommendations
  } = useProgressData(user?.id);
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Create a mapping of course IDs to names
  const courseNames = courseProgress.reduce((acc, course) => {
    acc[course.course_id] = course.course_name;
    return acc;
  }, {} as Record<string, string>);

  // Handle refresh of recommendations
  const handleRefreshRecommendations = async () => {
    if (!user) return;
    
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

  useEffect(() => {
    console.log("Progress page render:", { 
      userId: user?.id,
      authLoading,
      dataLoading: loading,
      hasAchievements: achievements.length > 0,
      hasCourseProgress: courseProgress.length > 0
    });

    // Show a toast if the user is logged in but no data is loaded
    if (!authLoading && !loading && user && courseProgress.length === 0 && achievements.length === 0) {
      toast({
        title: "No progress data found",
        description: "Start a course to see your progress here!",
        variant: "default",
      });
    }
  }, [user, authLoading, loading, achievements, courseProgress, toast]);

  if (!user && !authLoading) {
    return <Navigate to="/auth" replace />;
  }

  if (loading || authLoading) {
    return <ProgressPageLoading />;
  }

  const hasNoData = courseProgress.every(course => course.completed_lessons === 0) && 
                     achievements.filter(a => a.earned_at).length === 0;

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

        {hasNoData ? (
          <motion.div
            className="text-center py-12 my-12 bg-quantum-100 dark:bg-quantum-900 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Book className="h-16 w-16 mx-auto mb-4 text-quantum-400 dark:text-quantum-600" />
            <h2 className="text-xl font-bold mb-2 text-quantum-800 dark:text-quantum-200">
              Your progress will appear here
            </h2>
            <p className="text-quantum-600 dark:text-quantum-400 max-w-md mx-auto mb-6">
              Start learning quantum computing concepts to track your progress and earn achievements.
            </p>
            <Button asChild>
              <a href="/curriculum">Start Learning</a>
            </Button>
          </motion.div>
        ) : (
          <>
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

            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8"
            >
              <RecommendationsSection 
                recommendations={recommendations} 
                courseNames={courseNames}
                onRefresh={handleRefreshRecommendations}
                isRefreshing={isRefreshing}
              />
            </motion.div>

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
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Progress;
