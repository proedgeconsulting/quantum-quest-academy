
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { CourseProgressItem } from "./CourseProgressSection";

interface LearningStatsSectionProps {
  courseProgress: CourseProgressItem[];
  totalPoints: number;
}

const LearningStatsSection: React.FC<LearningStatsSectionProps> = ({ 
  courseProgress,
  totalPoints 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="text-quantum-500" />
          Learning Stats
        </CardTitle>
        <CardDescription>Summary of your learning journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-quantum-100 dark:bg-quantum-800/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-quantum-900 dark:text-quantum-100">
              {courseProgress.filter(c => c.percent_complete > 0).length}
            </div>
            <div className="text-sm text-quantum-600 dark:text-quantum-400">
              Courses Started
            </div>
          </div>
          
          <div className="bg-quantum-100 dark:bg-quantum-800/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-quantum-900 dark:text-quantum-100">
              {courseProgress.filter(c => c.percent_complete === 100).length}
            </div>
            <div className="text-sm text-quantum-600 dark:text-quantum-400">
              Courses Completed
            </div>
          </div>
          
          <div className="bg-quantum-100 dark:bg-quantum-800/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-quantum-900 dark:text-quantum-100">
              {courseProgress.reduce((sum, course) => sum + course.completed_lessons, 0)}
            </div>
            <div className="text-sm text-quantum-600 dark:text-quantum-400">
              Lessons Completed
            </div>
          </div>
          
          <div className="bg-quantum-100 dark:bg-quantum-800/50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-energy-500">
              {totalPoints}
            </div>
            <div className="text-sm text-quantum-600 dark:text-quantum-400">
              Points Earned
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningStatsSection;
