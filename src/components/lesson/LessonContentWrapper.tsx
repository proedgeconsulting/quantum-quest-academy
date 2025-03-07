
import { useState, useEffect } from "react";
import { Lesson } from "@/data/types/courseTypes";
import ReadingLesson from "./ReadingLesson";
import VideoLesson from "./VideoLesson";
import InteractiveLesson from "./InteractiveLesson";
import CompletionStatus from "./CompletionStatus";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { useLearningAnalytics } from "@/hooks/useLearningAnalytics";

interface LessonContentWrapperProps {
  lesson?: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
}

const LessonContentWrapper = ({ lesson, onComplete, isCompleted }: LessonContentWrapperProps) => {
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
      {lesson.type === "video" && <VideoLesson lesson={lesson} />}
      
      {/* Interactive Content */}
      {lesson.type === "interactive" && (
        <InteractiveLesson lesson={lesson} onComplete={handleComplete} />
      )}
      
      {/* Complete Button or Completed Status */}
      <CompletionStatus
        isCompleted={isCompleted}
        showComplete={showComplete}
        type={lesson.type}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default LessonContentWrapper;
