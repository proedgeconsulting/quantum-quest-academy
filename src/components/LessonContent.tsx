
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";
import BuildAtomActivity from "@/components/BuildAtomActivity";
import AtomSimulation from "@/components/AtomSimulation";
import { motion } from "framer-motion";

interface LessonContentProps {
  lesson?: {
    id: string;
    title: string;
    description: string;
    content: string;
    type: "reading" | "interactive" | "video" | "quiz";
    duration: number;
    points: number;
    interactiveComponent?: string;
  };
  onComplete: () => void;
  isCompleted: boolean;
}

const LessonContent = ({ lesson, onComplete, isCompleted }: LessonContentProps) => {
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
  }, [lesson, isCompleted]);
  
  if (!lesson) return null;
  
  // Render interactive components
  const renderInteractiveComponent = () => {
    switch (lesson.interactiveComponent) {
      case "BuildAtomActivity":
        return <BuildAtomActivity onComplete={onComplete} />;
      case "AtomSimulation":
        return <AtomSimulation onComplete={onComplete} />;
      default:
        return (
          <div className="p-6 text-center bg-quantum-50 dark:bg-quantum-900 rounded-lg">
            <p>Interactive component not available.</p>
          </div>
        );
    }
  };
  
  // Render video component (placeholder for now)
  const renderVideo = () => {
    return (
      <div className="aspect-video bg-black rounded-lg flex flex-col items-center justify-center mb-6">
        <div className="bg-quantum-500 rounded-full p-4 mb-4 cursor-pointer hover:bg-quantum-600 transition-colors">
          <Play className="text-white h-8 w-8" />
        </div>
        <p className="text-white text-sm">Video content is not available in the preview.</p>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Reading Content */}
      {lesson.type === "reading" && (
        <div className="prose dark:prose-invert max-w-none">
          {lesson.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      
      {/* Video Content */}
      {lesson.type === "video" && (
        <>
          {renderVideo()}
          <div className="prose dark:prose-invert max-w-none">
            {lesson.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </>
      )}
      
      {/* Interactive Content */}
      {lesson.type === "interactive" && (
        <>
          <div className="prose dark:prose-invert max-w-none mb-6">
            {lesson.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          {renderInteractiveComponent()}
        </>
      )}
      
      {/* Complete Button */}
      {!isCompleted && showComplete && lesson.type !== "interactive" && (
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button onClick={onComplete} className="gap-2">
            <CheckCircle size={16} />
            Mark as Complete
          </Button>
        </motion.div>
      )}
      
      {/* Already Completed Message */}
      {isCompleted && (
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-green-500 font-medium bg-green-50 dark:bg-green-950/30 px-4 py-2 rounded-md">
            <CheckCircle size={16} />
            <span>Completed</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonContent;
