
import { useState, useEffect } from "react";
import { Lesson } from "@/data/types/courseTypes";
import ReadingLesson from "./ReadingLesson";
import VideoLesson from "./VideoLesson";
import InteractiveLesson from "./InteractiveLesson";
import CompletionStatus from "./CompletionStatus";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { useLearningAnalytics } from "@/hooks/useLearningAnalytics";
import AIAssistant from "../quantum-assistant/AIAssistant";

interface LessonContentWrapperProps {
  lesson?: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
  isLastLesson?: boolean;
}

const LessonContentWrapper = ({ lesson, onComplete, isCompleted, isLastLesson = false }: LessonContentWrapperProps) => {
  const [showComplete, setShowComplete] = useState(false);
  const { user } = useAuth();
  const { trackActivity } = useLearningAnalytics(user?.id);
  
  // Auto-show complete button after 80% of the estimated reading time
  useEffect(() => {
    if (!lesson || lesson.type === "quiz" || isCompleted) return;
    
    // Calculate reading time: average reading speed is 200-250 words per minute
    // Subtract 10% of the duration to give users time to click the button
    const timeToShowButton = (lesson.duration * 60 * 0.8) * 1000; 
    
    const timer = setTimeout(() => {
      setShowComplete(true);
    }, timeToShowButton);
    
    return () => clearTimeout(timer);
  }, [lesson, isCompleted, lesson?.duration, lesson?.type]);
  
  // Log when rendering video lesson for debugging
  useEffect(() => {
    if (lesson?.type === "video") {
      console.log("Rendering video lesson:", lesson.title, "Video URL:", lesson.videoUrl);
    }
  }, [lesson]);
  
  const handleComplete = async () => {
    // First trigger the regular completion logic
    onComplete();
    
    // Then check for achievements and track learning activity
    if (user) {
      try {
        // Call the achievement check function silently
        await supabase.functions.invoke('check-achievements', {
          body: { user_id: user.id }
        });
        
        // Track this activity for learning streak
        await trackActivity('lesson_completed');
      } catch (error) {
        console.error("Error after lesson completion:", error);
      }
    }
  };
  
  if (!lesson) return null;
  
  return (
    <div className="space-y-6">
      {/* Reading Content */}
      {lesson.type === "reading" && <ReadingLesson lesson={lesson} />}
      
      {/* Video Content */}
      {lesson.type === "video" && (
        <>
          <VideoLesson lesson={lesson} />
          <div className="text-sm text-gray-500 dark:text-gray-400 italic mt-2">
            If the video doesn't load, please check your internet connection or try refreshing the page.
          </div>
        </>
      )}
      
      {/* Interactive Content */}
      {lesson.type === "interactive" && (
        <InteractiveLesson 
          lesson={lesson} 
          onComplete={handleComplete} 
          isLastLesson={isLastLesson} 
        />
      )}
      
      {/* Complete Button or Completed Status */}
      {lesson.type !== "interactive" && (
        <CompletionStatus
          isCompleted={isCompleted}
          showComplete={showComplete}
          type={lesson.type}
          onComplete={handleComplete}
          isLastLesson={isLastLesson}
        />
      )}
      
      {/* AI Assistant */}
      <AIAssistant 
        lessonId={lesson.id}
        conceptContext={`This question is related to the lesson: "${lesson.title}". The lesson content is about: "${lesson.description}"`}
      />
    </div>
  );
};

export default LessonContentWrapper;

