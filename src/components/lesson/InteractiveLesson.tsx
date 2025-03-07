
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
  // Get the appropriate simulator component based on lesson ID
  const InteractiveComponent = useMemo(() => {
    const SimulatorComponent = getSimulatorForLesson(lesson.id);
    return <SimulatorComponent />;
  }, [lesson.id]);
  
  return (
    <>
      <MarkdownContent content={lesson.content} />
      
      <div className="mt-8">
        <div className="interactive-component-wrapper">
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
