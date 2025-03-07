
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Clock, LineChart, Flame } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { LearningAnalytics } from "@/hooks/useLearningAnalytics";
import { motion } from "framer-motion";

interface ProgressAnalyticsSectionProps {
  analytics: LearningAnalytics | null;
  loading: boolean;
}

const ProgressAnalyticsSection: React.FC<ProgressAnalyticsSectionProps> = ({ 
  analytics, 
  loading 
}) => {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="text-quantum-500" />
            Progress Analytics
          </CardTitle>
          <CardDescription>Loading your learning insights...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-20 bg-quantum-100 dark:bg-quantum-800/30 rounded-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-24 bg-quantum-100 dark:bg-quantum-800/30 rounded-lg"></div>
              <div className="h-24 bg-quantum-100 dark:bg-quantum-800/30 rounded-lg"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!analytics) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="text-quantum-500" />
            Progress Analytics
          </CardTitle>
          <CardDescription>Insights into your learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6 text-quantum-500">
            <p>No analytics data available yet. Continue learning to see insights.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LineChart className="text-quantum-500" />
          Progress Analytics
        </CardTitle>
        <CardDescription>Insights into your learning journey</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Completion Rate */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-quantum-900 dark:text-quantum-100 flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-quantum-500" />
              Completion Rate
            </h3>
            <span className="text-sm text-quantum-600 dark:text-quantum-400">
              {analytics.total_completed} of {analytics.total_lessons} lessons
            </span>
          </div>
          <Progress value={analytics.completion_rate} className="h-2" />
          <p className="text-sm text-quantum-600 dark:text-quantum-400">
            You've completed {analytics.completion_rate.toFixed(1)}% of your enrolled courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Learning Streak */}
          <motion.div 
            className="bg-quantum-50 dark:bg-quantum-900/50 rounded-lg p-4"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="bg-energy-100 dark:bg-energy-900/30 rounded-full p-2">
                <Flame className="h-5 w-5 text-energy-500" />
              </div>
              <div>
                <h3 className="font-medium text-quantum-900 dark:text-quantum-100">Learning Streak</h3>
                <div className="mt-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-quantum-600 dark:text-quantum-400">Current Streak</span>
                    <span className="font-bold text-energy-600 dark:text-energy-400">
                      {analytics.current_streak} {analytics.current_streak === 1 ? 'day' : 'days'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-quantum-600 dark:text-quantum-400">Longest Streak</span>
                    <span className="font-medium text-quantum-900 dark:text-quantum-100">
                      {analytics.longest_streak} {analytics.longest_streak === 1 ? 'day' : 'days'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Learning Pattern */}
          <motion.div 
            className="bg-quantum-50 dark:bg-quantum-900/50 rounded-lg p-4"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2">
                <Clock className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium text-quantum-900 dark:text-quantum-100">Learning Pattern</h3>
                <div className="mt-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-quantum-600 dark:text-quantum-400">Active Days (Last Week)</span>
                    <span className="font-medium text-quantum-900 dark:text-quantum-100">
                      {analytics.last_week_activity} of 7 days
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-quantum-600 dark:text-quantum-400">Learning Style</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {analytics.learning_pattern}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Peak Learning Times */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-quantum-50 dark:bg-quantum-900/50 rounded-lg p-4">
          <div>
            <span className="text-sm text-quantum-600 dark:text-quantum-400">Most Active Day</span>
            <p className="font-medium text-quantum-900 dark:text-quantum-100">{analytics.most_active_day}</p>
          </div>
          <div>
            <span className="text-sm text-quantum-600 dark:text-quantum-400">Most Active Time</span>
            <p className="font-medium text-quantum-900 dark:text-quantum-100">{analytics.most_active_hour}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressAnalyticsSection;
