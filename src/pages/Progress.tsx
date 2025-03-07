
import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressPageLoading from "@/components/progress/ProgressPageLoading";
import ProgressContent from "@/components/progress/ProgressContent";
import NoProgressContent from "@/components/progress/NoProgressContent";

// Custom hooks
import { useProgressPageData } from "@/hooks/useProgressPageData";

const Progress = () => {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  
  const {
    achievements,
    courseProgress,
    recommendations,
    totalPoints,
    loading,
    newAchievements,
    streakInfo,
    isRefreshing,
    hasNoData,
    handleRefreshRecommendations
  } = useProgressPageData(user?.id);

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
          <NoProgressContent />
        ) : (
          <ProgressContent 
            userId={user?.id || ""}
            achievements={achievements}
            courseProgress={courseProgress}
            recommendations={recommendations}
            totalPoints={totalPoints}
            newAchievements={newAchievements}
            refreshRecommendations={handleRefreshRecommendations}
            isRefreshing={isRefreshing}
            streakInfo={streakInfo}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Progress;
