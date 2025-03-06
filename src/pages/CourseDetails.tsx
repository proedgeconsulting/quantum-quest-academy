
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCourseById } from "@/data/courseData";
import CourseHeader from "@/components/courses/CourseHeader";
import ModuleSidebar from "@/components/courses/ModuleSidebar";
import LessonContainer from "@/components/courses/LessonContainer";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useLessonNavigation } from "@/hooks/useLessonNavigation";

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const course = courseId ? getCourseById(courseId) : undefined;

  // Course progress management
  const { 
    userProgress, 
    loadingProgress, 
    handleLessonComplete, 
    calculateModuleProgress, 
    calculateCourseProgress 
  } = useCourseProgress(course, user?.id);
  
  // Lesson navigation management
  const {
    activeModule,
    activeLesson,
    setActiveModule,
    setActiveLesson,
    currentModule,
    currentLesson,
    handleNextLesson,
    handlePrevLesson,
    isFirstLesson,
    isLastLesson
  } = useLessonNavigation(course);

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

  if (!course) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course Header */}
        <CourseHeader 
          course={course} 
          courseProgress={calculateCourseProgress()} 
        />
        
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Course Content Sidebar */}
              <div className="lg:col-span-3">
                <ModuleSidebar 
                  course={course}
                  activeModule={activeModule || ""}
                  activeLesson={activeLesson || ""}
                  userProgress={userProgress}
                  setActiveModule={setActiveModule}
                  setActiveLesson={setActiveLesson}
                  calculateModuleProgress={calculateModuleProgress}
                />
              </div>
              
              {/* Main Lesson Content */}
              <div className="lg:col-span-9">
                <LessonContainer 
                  currentLesson={currentLesson}
                  userProgress={userProgress}
                  handleLessonComplete={handleLessonComplete}
                  handleNextLesson={handleNextLesson}
                  handlePrevLesson={handlePrevLesson}
                  isFirstLesson={isFirstLesson}
                  isLastLesson={isLastLesson}
                />
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
