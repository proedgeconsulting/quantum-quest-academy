
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseProgressSection from "@/components/progress/CourseProgressSection";
import PointsSummarySection from "@/components/progress/PointsSummarySection";
import AchievementsSection from "@/components/progress/AchievementsSection";
import LearningStatsSection from "@/components/progress/LearningStatsSection";
import ProgressPageLoading from "@/components/progress/ProgressPageLoading";

// Custom hook for fetching progress data
import { useProgressData } from "@/hooks/useProgressData";

const Progress = () => {
  const { user, loading: authLoading } = useAuth();
  const { achievements, courseProgress, totalPoints, loading } = useProgressData(user?.id);

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
