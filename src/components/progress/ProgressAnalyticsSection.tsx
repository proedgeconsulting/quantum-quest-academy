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
import HourlyDistributionChart from "./analytics/HourlyDistributionChart";
import MonthlyConsistencyChart from "./analytics/MonthlyConsistencyChart";
import LearningCalendarHeatmap from "./analytics/LearningCalendarHeatmap";
import LearningFocusChart from "./analytics/LearningFocusChart";

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
  
  // Generate hourly distribution data (mock data for now)
  const hourlyData = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => {
      const hour = i.toString().padStart(2, '0');
      // Generate random number of sessions with a peak during working hours
      let sessions = Math.floor(Math.random() * 10);
      if (i >= 9 && i <= 17) {
        sessions += Math.floor(Math.random() * 15); // More activity during the day
      }
      return {
        hour: `${hour}:00`,
        sessions
      };
    });
  }, []);

  // Generate monthly consistency data (mock data for now)
  const monthlyData = useMemo(() => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString().split('T')[0];
    });
    
    return last30Days.map(date => {
      const sessionsCount = Math.floor(Math.random() * 5);
      return {
        date,
        sessionsCount,
        avgSessionsCount: 2.5 // Example average
      };
    });
  }, []);

  // Generate calendar heatmap data (mock data for now)
  const calendarData = useMemo(() => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 90); // Last 90 days
    
    const days = [];
    const current = new Date(startDate);
    
    while (current <= endDate) {
      const dateStr = current.toISOString().split('T')[0];
      // Random intensity level (0-4)
      const intensity = Math.floor(Math.random() * 5);
      days.push({
        date: dateStr,
        intensity
      });
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  }, []);

  // Generate learning focus data (mock data for now)
  const focusData = useMemo(() => {
    return [
      { name: "Quantum Computing", value: 120, color: "#8884d8" },
      { name: "Quantum Circuits", value: 90, color: "#82ca9d" },
      { name: "Quantum Algorithms", value: 60, color: "#ffc658" },
      { name: "Quantum ML", value: 30, color: "#ff8042" },
      { name: "Quantum Chemistry", value: 15, color: "#0088fe" }
    ];
  }, []);
  
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
                
                {/* Activity Charts */}
                <Tabs defaultValue="daily" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="daily">Daily Activity</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly Patterns</TabsTrigger>
                    <TabsTrigger value="hourly">Hourly Distribution</TabsTrigger>
                    <TabsTrigger value="topics">Topic Focus</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="daily">
                    <div className="space-y-4">
                      <ActivityChart activityData={activityData} />
                      <MonthlyConsistencyChart monthlyData={monthlyData} />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="weekly">
                    <div className="space-y-4">
                      <LearningPatternChart weeklyData={weeklyPatternData} />
                      <LearningCalendarHeatmap 
                        calendarData={calendarData}
                        startDate={new Date(new Date().setDate(new Date().getDate() - 90))}
                        endDate={new Date()}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="hourly">
                    <div className="space-y-4">
                      <HourlyDistributionChart hourlyData={hourlyData} />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="topics">
                    <div className="space-y-4">
                      <LearningFocusChart focusData={focusData} />
                    </div>
                  </TabsContent>
                </Tabs>
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
