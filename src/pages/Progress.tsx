
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award, Book, CheckCircle2, GraduationCap, Star, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  earned_at?: string;
}

interface CourseProgress {
  course_id: string;
  course_name: string;
  completed_lessons: number;
  total_lessons: number;
  percent_complete: number;
}

const IconMap: Record<string, React.ReactNode> = {
  "LogIn": <CheckCircle2 className="h-6 w-6 text-energy-500" />,
  "Search": <Book className="h-6 w-6 text-energy-500" />,
  "GraduationCap": <GraduationCap className="h-6 w-6 text-energy-500" />,
  "Atom": <Star className="h-6 w-6 text-energy-500" />,
  "Award": <Award className="h-6 w-6 text-energy-500" />,
};

const Progress = () => {
  const { user, loading: authLoading } = useAuth();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

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
          userAchievementsData.map((ua) => [ua.achievement_id, ua.earned_at])
        );

        const enhancedAchievements = achievementsData.map((achievement) => ({
          ...achievement,
          earned_at: userAchievementsMap.get(achievement.id),
        }));

        setAchievements(enhancedAchievements);

        // Calculate total points
        const earned = enhancedAchievements
          .filter((a) => a.earned_at)
          .reduce((sum, a) => sum + a.points, 0);
        
        setTotalPoints(earned);

        // Mock course progress data (would be fetched from API in a real app)
        setCourseProgress([
          {
            course_id: "qm101",
            course_name: "Quantum Mechanics 101",
            completed_lessons: 3,
            total_lessons: 5,
            percent_complete: 60,
          },
          {
            course_id: "qc201",
            course_name: "Quantum Computing Basics",
            completed_lessons: 1,
            total_lessons: 8,
            percent_complete: 13,
          },
          {
            course_id: "qp301",
            course_name: "Quantum Physics Applications",
            completed_lessons: 0,
            total_lessons: 6,
            percent_complete: 0,
          },
        ]);

      } catch (error: any) {
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
  }, [user, authLoading, toast]);

  if (!user && !authLoading) {
    return <Navigate to="/auth" replace />;
  }

  if (loading || authLoading) {
    return (
      <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
        <Navbar />
        <div className="container mx-auto py-8 flex justify-center items-center h-[calc(100vh-80px)]">
          <div className="animate-pulse flex flex-col items-center">
            <div className="relative">
              <Trophy size={48} className="text-quantum-300 dark:text-quantum-700" />
            </div>
            <div className="mt-4 text-lg text-quantum-500">Loading your progress...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-quantum-900 dark:text-white mb-2">
            Your Learning Journey
          </h1>
          <p className="text-quantum-600 dark:text-quantum-300">
            Track your progress and achievements in quantum learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="text-quantum-500" />
                  Course Progress
                </CardTitle>
                <CardDescription>Your progress through quantum courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courseProgress.map((course) => (
                    <div key={course.course_id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-quantum-900 dark:text-quantum-100">
                          {course.course_name}
                        </h3>
                        <Badge variant={course.percent_complete === 100 ? "default" : "outline"}>
                          {course.completed_lessons}/{course.total_lessons} lessons
                        </Badge>
                      </div>
                      <ProgressBar value={course.percent_complete} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Points Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="text-energy-500" />
                  Quantum Points
                </CardTitle>
                <CardDescription>Points earned from achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-energy-500">{totalPoints}</div>
                    <div className="text-sm text-quantum-600 dark:text-quantum-400 mt-2">
                      Total Points
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="text-sm text-quantum-600 dark:text-quantum-400">
                  <div className="flex justify-between">
                    <span>Achievements Earned:</span>
                    <span className="font-medium">
                      {achievements.filter(a => a.earned_at).length}/{achievements.length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="text-energy-500" />
              Achievements
            </CardTitle>
            <CardDescription>Badges and honors you've earned on your quantum journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`overflow-hidden transition-all ${achievement.earned_at ? "border-energy-500" : "opacity-60"}`}>
                  <CardContent className="p-4 flex gap-3">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-quantum-100 dark:bg-quantum-800 flex items-center justify-center">
                      {IconMap[achievement.icon] || <Star className="h-6 w-6 text-energy-500" />}
                    </div>
                    <div>
                      <h3 className="font-medium text-quantum-900 dark:text-quantum-100">{achievement.name}</h3>
                      <p className="text-sm text-quantum-600 dark:text-quantum-400">{achievement.description}</p>
                      <div className="flex items-center mt-2 gap-1">
                        <Star className="h-3 w-3 text-energy-500" />
                        <span className="text-xs font-medium text-quantum-600 dark:text-quantum-400">{achievement.points} points</span>
                        {achievement.earned_at && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            Earned
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
