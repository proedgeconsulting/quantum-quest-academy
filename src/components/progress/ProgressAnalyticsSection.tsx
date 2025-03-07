
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo } from "react";
import PersonalizedQuiz from "../quiz/PersonalizedQuiz";
import CertificatesList from "../certificates/CertificatesList";
import AIAssistanceSection from "../quantum-learning/AIAssistanceSection";
import { ChartBar } from "lucide-react";
import ActivityChart from "./analytics/ActivityChart";
import CompletionRateChart from "./analytics/CompletionRateChart";
import LearningPatternChart from "./analytics/LearningPatternChart";
import StreakWidget from "./analytics/StreakWidget";
import ActivityMetrics from "./analytics/ActivityMetrics";

interface ProgressAnalyticsProps {
  userId: string;
  userProgress: any[];
  isLoading: boolean;
}

const ProgressAnalyticsSection = ({ userId, userProgress, isLoading }: ProgressAnalyticsProps) => {
  // Calculate learning activity data for the chart
  const activityData = useMemo(() => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString().slice(0, 10);
    });
    
    const activityMap = new Map();
    
    // Initialize with all dates
    last30Days.forEach(date => {
      activityMap.set(date, 0);
    });
    
    // Count progress entries by day
    if (userProgress) {
      userProgress.forEach(entry => {
        const date = new Date(entry.updated_at).toISOString().slice(0, 10);
        if (activityMap.has(date)) {
          activityMap.set(date, activityMap.get(date) + 1);
        }
      });
    }
    
    return Array.from(activityMap).map(([date, count]) => ({
      date,
      activities: count
    }));
  }, [userProgress]);
  
  // Generate weekly pattern data - this would ideally come from the backend
  const weeklyPatternData = useMemo(() => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    // Create simulated data based on actual activity
    return daysOfWeek.map(day => {
      // Get a count of activities for this day of week
      const activitiesForDay = userProgress?.filter(entry => {
        const entryDate = new Date(entry.updated_at);
        const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][entryDate.getDay()];
        return dayName === day;
      }).length || 0;
      
      // Generate minutes based on activities (for visualization purposes)
      const minutes = activitiesForDay * 15 + Math.floor(Math.random() * 20);
      
      return {
        day,
        minutes,
        lessons: activitiesForDay
      };
    });
  }, [userProgress]);
  
  // Get course IDs from progress
  const courseIds = useMemo(() => {
    const ids = new Set();
    if (userProgress) {
      userProgress.forEach(entry => {
        if (entry.course_id) {
          ids.add(entry.course_id);
        }
      });
    }
    return Array.from(ids) as string[];
  }, [userProgress]);
  
  // Mock data - in a real app, these would come from the API
  const analyticsData = {
    completion_rate: 45,
    total_completed: userProgress?.filter(p => p.completed).length || 0,
    total_lessons: 100,
    most_active_hour: "3PM - 4PM",
    most_active_day: "Wednesday",
    current_streak: 3,
    longest_streak: 7,
    last_week_activity: userProgress?.filter(entry => {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      return new Date(entry.updated_at) >= oneWeekAgo;
    }).length || 0,
    learning_pattern: "Consistent"
  };
  
  return (
    <Tabs defaultValue="analytics" className="w-full">
      <TabsList className="grid grid-cols-4 mb-4">
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
        <TabsTrigger value="personalized">Personalized Quiz</TabsTrigger>
        <TabsTrigger value="certificates">Certificates</TabsTrigger>
      </TabsList>
      
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChartBar className="text-energy-500" />
              Learning Analytics
            </CardTitle>
            <CardDescription>Detailed insights about your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center h-[400px]">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Summary widgets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CompletionRateChart 
                    completionRate={analyticsData.completion_rate}
                    totalCompleted={analyticsData.total_completed}
                    totalLessons={analyticsData.total_lessons}
                  />
                  <StreakWidget 
                    currentStreak={analyticsData.current_streak}
                    longestStreak={analyticsData.longest_streak}
                  />
                </div>
                
                {/* Activity metrics */}
                <ActivityMetrics 
                  mostActiveHour={analyticsData.most_active_hour}
                  mostActiveDay={analyticsData.most_active_day}
                  learningPattern={analyticsData.learning_pattern}
                  lastWeekActivity={analyticsData.last_week_activity}
                />
                
                {/* Charts */}
                <div className="space-y-4">
                  <ActivityChart activityData={activityData} />
                  <LearningPatternChart weeklyData={weeklyPatternData} />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="ai-assistant">
        <AIAssistanceSection userId={userId} />
      </TabsContent>
      
      <TabsContent value="personalized">
        <PersonalizedQuiz 
          courseId={courseIds[0] || "1.1"} // Use the first course ID if available
        />
      </TabsContent>
      
      <TabsContent value="certificates">
        <CertificatesList />
      </TabsContent>
    </Tabs>
  );
};

export default ProgressAnalyticsSection;
