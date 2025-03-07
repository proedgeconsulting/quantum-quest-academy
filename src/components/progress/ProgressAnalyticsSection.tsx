
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo } from "react";
import { Chart } from "@/components/ui/chart";
import PersonalizedQuiz from "../quiz/PersonalizedQuiz";
import CertificatesList from "../certificates/CertificatesList";

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
  
  return (
    <Tabs defaultValue="analytics" className="w-full">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="personalized">Personalized Quiz</TabsTrigger>
        <TabsTrigger value="certificates">Certificates</TabsTrigger>
      </TabsList>
      
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Learning Analytics</CardTitle>
            <CardDescription>Your learning activity over the past 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Chart
                type="bar"
                data={activityData}
                options={{
                  scales: {
                    x: {
                      type: 'category',
                      title: {
                        display: true,
                        text: 'Date'
                      }
                    },
                    y: {
                      type: 'linear',
                      min: 0,
                      title: {
                        display: true,
                        text: 'Activities'
                      }
                    }
                  }
                }}
                className="w-full h-full"
                xField="date"
                series={[
                  {
                    label: 'Learning Activities',
                    data: activityData.map(d => d.activities),
                    backgroundColor: 'rgba(99, 102, 241, 0.5)',
                    borderColor: 'rgb(99, 102, 241)',
                    borderWidth: 1
                  }
                ]}
              />
            </div>
          </CardContent>
        </Card>
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
