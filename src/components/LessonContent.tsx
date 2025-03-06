
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";
import BuildAtomActivity from "@/components/BuildAtomActivity";
import AtomSimulation from "@/components/AtomSimulation";
import QuantumSimulator from "@/components/QuantumSimulator";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

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
    videoUrl?: string;  // Added videoUrl property
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
  }, [lesson, isCompleted, lesson?.duration, lesson?.type]);
  
  if (!lesson) return null;
  
  // Check if content has iframe
  const hasIframe = lesson.content.includes('<iframe');
  
  // Default video URLs based on the lesson content
  // In a real application, these would come from your database
  const getDefaultVideoUrl = (lessonId: string) => {
    const videoMap: Record<string, string> = {
      // Level 1 videos
      "1.1.2.2": "https://www.youtube.com/embed/FjHJ7FjgL34", // Light in Action
      "1.1.3.2": "https://www.youtube.com/embed/TQKELOE9eY4", // Uncertainty in Everyday Life
      "1.1.4.2": "https://www.youtube.com/embed/UjaAxUO6-Uw", // Schrödinger's Cat
      "1.1.5.2": "https://www.youtube.com/embed/cTodS8hkSDg", // Tunneling in the Real World
      "1.1.6.2": "https://www.youtube.com/embed/7SEmv2f8w5I", // Medical Quantum Technologies
      
      // Level 2 videos
      "2.1.1.2": "https://www.youtube.com/embed/F_Riqjdh2oM", // Quantum Gates: The Building Blocks
      "2.1.2.2": "https://www.youtube.com/embed/F8U1d2Hqark", // The Deutsch-Jozsa Algorithm
      "2.1.3.2": "https://www.youtube.com/embed/0Zzw6XGwZOE", // Multi-Qubit Gates
      "2.1.4.2": "https://www.youtube.com/embed/q7FS0YTRzKI", // Visualizing Quantum States
      "2.1.5.2": "https://www.youtube.com/embed/QHZ_XLxERzA", // Error Mitigation Techniques
      "2.1.6.2": "https://www.youtube.com/embed/OqUGBjp2aKs", // Circuit Transformation Techniques
      
      // Level 3 videos
      "3.3.2.2": "https://www.youtube.com/embed/2w7Y5H85xX8", // Quantum Policy and Governance
      "3.3.3.3": "https://www.youtube.com/embed/RZfYLNDKu0o", // Quantum IP Strategy
    };
    
    return videoMap[lessonId] || "https://www.youtube.com/embed/0gh3JrdL-Zg"; // Default quantum computing video
  };
  
  // Memoize interactive component to prevent unnecessary re-renders
  const InteractiveComponent = useMemo(() => {
    switch (lesson.interactiveComponent) {
      case "BuildAtomActivity":
        return <BuildAtomActivity />;
      case "AtomSimulation":
        return <AtomSimulation />;
      case "QuantumSimulator":
        return <QuantumSimulator />;
      default:
        return (
          <div className="p-6 text-center bg-quantum-50 dark:bg-quantum-900 rounded-lg">
            <p>Interactive component not available.</p>
          </div>
        );
    }
  }, [lesson.interactiveComponent]);
  
  // Render video component 
  const renderVideo = () => {
    const videoUrl = lesson.videoUrl || getDefaultVideoUrl(lesson.id);
    
    return (
      <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
        <iframe 
          src={videoUrl}
          title={lesson.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  // Function to render markdown with iframe support
  const renderContent = () => {
    if (hasIframe) {
      // Split content by iframe tags and render each part
      const parts = lesson.content.split(/(<iframe.*?<\/iframe>)/s);
      
      return (
        <div className="prose dark:prose-invert max-w-none">
          {parts.map((part, index) => {
            if (part.startsWith('<iframe')) {
              // Extract iframe src and attributes
              return (
                <div key={`iframe-${index}`} className="my-6 rounded-lg overflow-hidden border border-quantum-200 dark:border-quantum-700">
                  <div dangerouslySetInnerHTML={{ __html: part }} />
                </div>
              );
            } else {
              // Render markdown for non-iframe parts
              return <div key={`markdown-${index}`}>
                <ReactMarkdown>{part}</ReactMarkdown>
              </div>;
            }
          })}
        </div>
      );
    } else {
      // Regular markdown rendering - wrap in div instead of directly in prose div
      return (
        <div className="prose dark:prose-invert max-w-none">
          <div>
            <ReactMarkdown>{lesson.content}</ReactMarkdown>
          </div>
        </div>
      );
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Reading Content */}
      {lesson.type === "reading" && renderContent()}
      
      {/* Video Content */}
      {lesson.type === "video" && (
        <>
          {renderVideo()}
          {renderContent()}
        </>
      )}
      
      {/* Interactive Content */}
      {lesson.type === "interactive" && (
        <>
          {renderContent()}
          
          <div className="mt-8">
            <div className="interactive-component-wrapper">
              {InteractiveComponent}
              <div className="mt-6 flex justify-center">
                <Button onClick={onComplete} className="gap-2">
                  <CheckCircle size={16} />
                  Complete {lesson.interactiveComponent?.replace(/([A-Z])/g, ' $1').trim()}
                </Button>
              </div>
            </div>
          </div>
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
