
import { Button } from "@/components/ui/button";
import { CheckCircle, Trophy } from "lucide-react";
import { Lesson } from "@/data/types/courseTypes";
import { MarkdownContent } from "./VideoLesson";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { getSimulatorForLesson } from "./SimulatorMapping";

interface InteractiveLessonProps {
  lesson: Lesson;
  onComplete: () => void;
  isLastLesson?: boolean;
}

const InteractiveLesson = ({ lesson, onComplete, isLastLesson = false }: InteractiveLessonProps) => {
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();

  const handleComplete = () => {
    setCompleted(true);
    onComplete();
    
    if (isLastLesson) {
      toast({
        title: "Course Module Completed! 🎉",
        description: "Congratulations on completing this module of the course!",
        variant: "default",
      });
    }
  };

  return (
    <div className="interactive-lesson">
      <MarkdownContent content={lesson.content} />
      
      <div className="mt-8">
        <div className="interactive-component-wrapper bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
          {/* Render the appropriate simulator component based on the lesson ID and pass full lesson context */}
          {lesson.interactiveComponent && getSimulatorForLesson(lesson.id, lesson)}
          
          {completed && isLastLesson ? (
            <div className="mt-6 flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-semibold text-center">Module Completed!</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Congratulations on completing this module. Continue your quantum learning journey with the next module.
              </p>
            </div>
          ) : (
            <div className="mt-6 flex justify-center">
              <Button onClick={handleComplete} className="gap-2">
                <CheckCircle size={16} />
                Complete {lesson.title}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveLesson;
