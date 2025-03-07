
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Lesson } from "@/data/types/courseTypes";
import { MarkdownContent } from "./VideoLesson";
import { getSimulatorForLesson } from "./SimulatorMapping";

interface InteractiveLessonProps {
  lesson: Lesson;
  onComplete: () => void;
}

const InteractiveLesson = ({ lesson, onComplete }: InteractiveLessonProps) => {
  // Get the appropriate simulator component based on lesson ID with full lesson context
  const InteractiveComponent = useMemo(() => {
    return getSimulatorForLesson(lesson.id, lesson);
  }, [lesson.id, lesson]);
  
  return (
    <>
      <MarkdownContent content={lesson.content} />
      
      <div className="mt-8">
        <div className="interactive-component-wrapper bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
          {InteractiveComponent}
          <div className="mt-6 flex justify-center">
            <Button onClick={onComplete} className="gap-2">
              <CheckCircle size={16} />
              Complete {lesson.title}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveLesson;
