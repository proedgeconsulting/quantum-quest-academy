
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award, Book, CheckCircle2, GraduationCap, Star, Trophy, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { level1Courses, level2Courses, level3Courses } from "@/data/courseData";

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
  level: number;
}

const IconMap: Record<string, React.ReactNode> = {
  "LogIn": <CheckCircle2 className="h-6 w-6 text-energy-500" />,
  "Search": <Book className="h-6 w-6 text-energy-500" />,
  "GraduationCap": <GraduationCap className="h-6 w-6 text-energy-500" />,
  "Atom": <Star className="h-6 w-6 text-energy-500" />,
  "Award": <Award className="h-6 w-6 text-energy-500" />,
  "Clock": <Clock className="h-6 w-6 text-energy-500" />,
};

const Progress = () => {
  const { user, loading: authLoading } = useAuth();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Combine all courses for processing
  const allCourses = [...level1Courses, ...level2Courses, ...level3Courses];

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
          userAchievementsData?.map((ua) => [ua.achievement_id, ua.earned_at]) || []
        );

        const enhancedAchievements = achievementsData?.map((achievement) => ({
          ...achievement,
          earned_at: userAchievementsMap.get(achievement.id),
        })) || [];

        setAchievements(enhancedAchievements);

        // Calculate total points
        const earned = enhancedAchievements
          .filter((a) => a.earned_at)
          .reduce((sum, a) => sum + a.points, 0);
        
        setTotalPoints(earned);

        // Fetch actual course progress from the database
        const { data: progressData, error: progressError } = await supabase
          .from("user_progress")
          .select("*")
          .eq("user_id", user.id);

        if (progressError) throw progressError;

        // Process the data to get course progress
        const progressByCourseLessons = progressData?.reduce((acc: Record<string, string[]>, item) => {
          if (!acc[item.course_id]) {
            acc[item.course_id] = [];
          }
          if (item.completed) {
            acc[item.course_id].push(item.lesson_id);
          }
          return acc;
        }, {}) || {};

        // Map the progress data to courses
        const courseProgressData = allCourses.map(course => {
          // Calculate total lessons in the course
          const totalLessons = course.modules?.reduce(
            (total, module) => total + (module.lessons?.length || 0), 0
          ) || 0;

          // Get completed lessons for this course
          const completedLessons = progressByCourseLessons[course.id]?.length || 0;
          
          // Calculate percent complete
          const percentComplete = totalLessons > 0 
            ? Math.round((completedLessons / totalLessons) * 100) 
            : 0;

          return {
            course_id: course.id,
            course_name: course.title,
            completed_lessons: completedLessons,
            total_lessons: totalLessons,
            percent_complete: percentComplete,
            level: course.level || parseInt(course.id.split('.')[0]) || 1
          };
        });

        // Sort by level and progress
        courseProgressData.sort((a, b) => {
          if (a.level !== b.level) return a.level - b.level;
          return b.percent_complete - a.percent_complete;
        });

        setCourseProgress(courseProgressData);
      } catch (error: any) {
        console.error("Error loading progress data:", error);
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
  }, [user, authLoading, toast, allCourses]);

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
                  {courseProgress.length > 0 ? (
                    courseProgress.map((course) => (
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
                    ))
                  ) : (
                    <div className="text-center py-8 text-quantum-500 dark:text-quantum-400">
                      <Book className="h-12 w-12 mx-auto mb-2 opacity-40" />
                      <p>You haven't started any courses yet.</p>
                      <Button className="mt-4" asChild>
                        <a href="/curriculum">Browse Courses</a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Points Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-energy-500" />
                Achievements
              </CardTitle>
              <CardDescription>Badges and honors you've earned on your quantum journey</CardDescription>
            </CardHeader>
            <CardContent>
              {achievements.length > 0 ? (
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
              ) : (
                <div className="text-center py-8 text-quantum-500 dark:text-quantum-400">
                  <Award className="h-12 w-12 mx-auto mb-2 opacity-40" />
                  <p>Complete courses and quizzes to earn achievements!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
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
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Progress;
