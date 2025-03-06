
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCourseById, updateProgress } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Play, 
  Award,
  Star
} from "lucide-react";
import LessonContent from "@/components/LessonContent";
import QuizComponent from "@/components/QuizComponent";
import { Badge } from "@/components/ui/badge";

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<Record<string, any>>({});
  const [loadingProgress, setLoadingProgress] = useState(true);

  const course = courseId ? getCourseById(courseId) : undefined;

  // Redirect if course not found
  useEffect(() => {
    if (!courseId || (!course && !authLoading)) {
      navigate("/courses");
      toast({
        title: "Course not found",
        description: "The course you're looking for doesn't exist.",
        variant: "destructive",
      });
    }
  }, [course, courseId, authLoading, navigate, toast]);

  // Set initial active module and lesson
  useEffect(() => {
    if (course && course.modules.length > 0) {
      setActiveModule(course.modules[0].id);
      if (course.modules[0].lessons.length > 0) {
        setActiveLesson(course.modules[0].lessons[0].id);
      }
    }
  }, [course]);

  // Fetch user progress
  useEffect(() => {
    const fetchProgress = async () => {
      if (!user || !course) return;

      setLoadingProgress(true);
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .eq('course_id', course.id);

        if (error) throw error;

        // Convert array to object with lesson IDs as keys
        const progressMap: Record<string, any> = {};
        data.forEach(item => {
          progressMap[item.lesson_id] = item;
        });

        setUserProgress(progressMap);
      } catch (error) {
        console.error("Error fetching progress:", error);
        toast({
          title: "Failed to load progress",
          description: "There was an error loading your progress. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoadingProgress(false);
      }
    };

    fetchProgress();
  }, [user, course, toast]);

  const handleLessonComplete = async (lessonId: string, completed: boolean, score?: number) => {
    if (!user || !course) return;

    try {
      await updateProgress(user.id, course.id, lessonId, completed, score);
      
      // Update local state
      setUserProgress(prev => ({
        ...prev,
        [lessonId]: {
          ...prev[lessonId],
          completed,
          score: score !== undefined ? score : prev[lessonId]?.score || 0
        }
      }));
      
      toast({
        title: "Progress saved",
        description: "Your progress has been saved successfully!",
        variant: "default",
      });
    } catch (error) {
      console.error("Error updating progress:", error);
      toast({
        title: "Failed to save progress",
        description: "There was an error saving your progress. Please try again.",
        variant: "destructive",
      });
    }
  };

  const calculateModuleProgress = (moduleId: string) => {
    const module = course?.modules.find(m => m.id === moduleId);
    if (!module) return 0;
    
    const lessonCount = module.lessons.length;
    if (lessonCount === 0) return 0;
    
    const completedLessons = module.lessons.filter(lesson => 
      userProgress[lesson.id]?.completed
    ).length;
    
    return Math.round((completedLessons / lessonCount) * 100);
  };

  const calculateCourseProgress = () => {
    if (!course) return 0;
    
    const totalLessons = course.modules.reduce(
      (total, module) => total + module.lessons.length, 0
    );
    
    if (totalLessons === 0) return 0;
    
    const completedLessons = Object.values(userProgress).filter(
      progress => progress.completed
    ).length;
    
    return Math.round((completedLessons / totalLessons) * 100);
  };

  const currentModule = course?.modules.find(m => m.id === activeModule);
  const currentLesson = currentModule?.lessons.find(l => l.id === activeLesson);
  
  const handleNextLesson = () => {
    if (!currentModule || !currentLesson) return;
    
    const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
    
    // If there's another lesson in the current module
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setActiveLesson(currentModule.lessons[currentLessonIndex + 1].id);
    } 
    // If we need to move to the next module
    else {
      const currentModuleIndex = course?.modules.findIndex(m => m.id === currentModule.id) || 0;
      
      // If there's another module
      if (course && currentModuleIndex < course.modules.length - 1) {
        const nextModule = course.modules[currentModuleIndex + 1];
        setActiveModule(nextModule.id);
        if (nextModule.lessons.length > 0) {
          setActiveLesson(nextModule.lessons[0].id);
        }
      }
    }
  };
  
  const handlePrevLesson = () => {
    if (!currentModule || !currentLesson) return;
    
    const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
    
    // If there's a previous lesson in the current module
    if (currentLessonIndex > 0) {
      setActiveLesson(currentModule.lessons[currentLessonIndex - 1].id);
    } 
    // If we need to move to the previous module
    else {
      const currentModuleIndex = course?.modules.findIndex(m => m.id === currentModule.id) || 0;
      
      // If there's a previous module
      if (currentModuleIndex > 0 && course) {
        const prevModule = course.modules[currentModuleIndex - 1];
        setActiveModule(prevModule.id);
        if (prevModule.lessons.length > 0) {
          setActiveLesson(prevModule.lessons[prevModule.lessons.length - 1].id);
        }
      }
    }
  };

  if (!course) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course Header */}
        <section className="bg-quantum-100 dark:bg-quantum-900 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <Button 
                  variant="ghost" 
                  className="mb-2" 
                  onClick={() => navigate("/courses")}
                >
                  <ChevronLeft className="mr-1" size={16} />
                  Back to Courses
                </Button>
                <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <Badge variant="outline" className="bg-quantum-100 dark:bg-quantum-800 border-none">
                    Level {course.level}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
              
              <Card className="w-full md:w-64 bg-white/80 dark:bg-quantum-800/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Completion</span>
                      <span>{calculateCourseProgress()}%</span>
                    </div>
                    <Progress value={calculateCourseProgress()} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Course Content Sidebar */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                    <CardDescription>
                      {course.modules.length} modules • {
                        course.modules.reduce((total, module) => total + module.lessons.length, 0)
                      } lessons
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="space-y-6">
                      {course.modules.map((module, index) => (
                        <div key={module.id} className="space-y-2">
                          <div 
                            className="flex justify-between items-center cursor-pointer" 
                            onClick={() => setActiveModule(module.id)}
                          >
                            <h3 className="font-medium">
                              {index + 1}. {module.title}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {calculateModuleProgress(module.id)}%
                            </Badge>
                          </div>
                          
                          {activeModule === module.id && (
                            <motion.div 
                              className="pl-4 border-l-2 border-quantum-200 dark:border-quantum-700 ml-2 mt-3 space-y-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div 
                                  key={lesson.id}
                                  className={`flex items-center gap-2 py-1 px-2 rounded-md cursor-pointer ${
                                    activeLesson === lesson.id 
                                      ? 'bg-quantum-100 dark:bg-quantum-800' 
                                      : 'hover:bg-quantum-50 dark:hover:bg-quantum-900'
                                  }`}
                                  onClick={() => setActiveLesson(lesson.id)}
                                >
                                  {userProgress[lesson.id]?.completed ? (
                                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-quantum-300 dark:border-quantum-600 flex-shrink-0" />
                                  )}
                                  <span className="text-sm truncate">
                                    {lessonIndex + 1}. {lesson.title}
                                  </span>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Main Lesson Content */}
              <div className="lg:col-span-9">
                <Card className="mb-4">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle>{currentLesson?.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{currentLesson?.duration} min</span>
                        </div>
                        <Separator orientation="vertical" className="h-4" />
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-amber-500" />
                          <span>{currentLesson?.points} points</span>
                        </div>
                      </CardDescription>
                    </div>
                    
                    {currentLesson?.type === "interactive" && (
                      <Badge variant="secondary" className="bg-quantum-500/10 text-quantum-500">
                        Interactive
                      </Badge>
                    )}
                    
                    {currentLesson?.type === "video" && (
                      <Badge variant="secondary" className="bg-red-500/10 text-red-500">
                        Video
                      </Badge>
                    )}
                    
                    {currentLesson?.type === "quiz" && (
                      <Badge variant="secondary" className="bg-amber-500/10 text-amber-500">
                        Quiz
                      </Badge>
                    )}
                    
                    {currentLesson?.type === "reading" && (
                      <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
                        Reading
                      </Badge>
                    )}
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    {currentLesson?.type === "quiz" ? (
                      <QuizComponent 
                        lessonId={currentLesson.id}
                        quizContent={currentLesson.content}
                        onComplete={(score) => {
                          handleLessonComplete(currentLesson.id, true, score);
                          handleNextLesson();
                        }}
                      />
                    ) : (
                      <LessonContent 
                        lesson={currentLesson} 
                        onComplete={() => handleLessonComplete(currentLesson?.id || "", true)}
                        isCompleted={!!userProgress[currentLesson?.id || ""]?.completed}
                      />
                    )}
                  </CardContent>
                </Card>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevLesson}
                    disabled={
                      activeModule === course.modules[0].id && 
                      activeLesson === course.modules[0].lessons[0].id
                    }
                  >
                    <ChevronLeft className="mr-1" size={16} />
                    Previous Lesson
                  </Button>
                  
                  <Button 
                    onClick={handleNextLesson}
                    disabled={
                      activeModule === course.modules[course.modules.length - 1].id && 
                      activeLesson === course.modules[course.modules.length - 1].lessons[
                        course.modules[course.modules.length - 1].lessons.length - 1
                      ].id
                    }
                  >
                    Next Lesson
                    <ChevronRight className="ml-1" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetails;
