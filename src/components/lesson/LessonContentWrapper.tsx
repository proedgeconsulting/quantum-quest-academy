
import { useState, useEffect } from "react";
import { Lesson } from "@/data/types/courseTypes";
import ReadingLesson from "./ReadingLesson";
import VideoLesson from "./VideoLesson";
import InteractiveLesson from "./InteractiveLesson";
import CompletionStatus from "./CompletionStatus";

interface LessonContentWrapperProps {
  lesson?: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
}

const LessonContentWrapper = ({ lesson, onComplete, isCompleted }: LessonContentWrapperProps) => {
  const [showComplete, setShowComplete] = useState(false);
  
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
  
  if (!lesson) return null;
  
  return (
    <div className="space-y-6">
      {/* Reading Content */}
      {lesson.type === "reading" && <ReadingLesson lesson={lesson} />}
      
      {/* Video Content */}
      {lesson.type === "video" && <VideoLesson lesson={lesson} />}
      
      {/* Interactive Content */}
      {lesson.type === "interactive" && (
        <InteractiveLesson lesson={lesson} onComplete={onComplete} />
      )}
      
      {/* Complete Button or Completed Status */}
      <CompletionStatus
        isCompleted={isCompleted}
        showComplete={showComplete}
        type={lesson.type}
        onComplete={onComplete}
      />
    </div>
  );
};

export default LessonContentWrapper;
