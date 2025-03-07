
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CourseProgressSection from "@/components/progress/CourseProgressSection";
import PointsSummarySection from "@/components/progress/PointsSummarySection";
import AchievementsSection from "@/components/progress/AchievementsSection";
import LearningStatsSection from "@/components/progress/LearningStatsSection";
import RecommendationsSection from "@/components/progress/RecommendationsSection";
import ProgressAnalyticsSection from "@/components/progress/ProgressAnalyticsSection";
import StreakNotification from "@/components/progress/StreakNotification";
import { Achievement } from "@/components/progress/AchievementsSection";
import { useLearningAnalytics } from "@/hooks/useLearningAnalytics";

interface ProgressContentProps {
  userId: string;
  achievements: Achievement[];
  courseProgress: any[];
  recommendations: any[];
  totalPoints: number;
  newAchievements: Achievement[];
  refreshRecommendations: () => Promise<void>;
  isRefreshing: boolean;
  streakInfo: any;
}

const ProgressContent: React.FC<ProgressContentProps> = ({
  userId,
  achievements,
  courseProgress,
  recommendations,
  totalPoints,
  newAchievements,
  refreshRecommendations,
  isRefreshing,
  streakInfo,
}) => {
  const {
    analytics,
    loading: analyticsLoading,
    trackActivity
  } = useLearningAnalytics(userId);
  
  // Create a mapping of course IDs to names
  const courseNames = courseProgress.reduce((acc, course) => {
    acc[course.course_id] = course.course_name;
    return acc;
  }, {} as Record<string, string>);

  // Track page visit for learning streak when user views progress page
  useEffect(() => {
    if (userId) {
      trackActivity('progress_view');
    }
  }, [userId, trackActivity]);

  return (
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
          onRefresh={refreshRecommendations}
          isRefreshing={isRefreshing}
          newAchievements={newAchievements}
        />
      </motion.div>

      {/* Progress Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8"
      >
        <ProgressAnalyticsSection 
          userId={userId}
          userProgress={analytics?.learning_activity || []} 
          isLoading={analyticsLoading} 
        />
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
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

      {/* Learning Streak Notification */}
      <StreakNotification 
        streakInfo={streakInfo} 
        onClose={() => {}} 
      />
    </>
  );
};

export default ProgressContent;
