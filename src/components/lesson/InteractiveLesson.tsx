
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import BuildAtomActivity from "@/components/BuildAtomActivity";
import AtomSimulation from "@/components/AtomSimulation";
import QuantumSimulator from "@/components/QuantumSimulator";
import { Lesson } from "@/data/types/courseTypes";
import { MarkdownContent } from "./VideoLesson";

interface InteractiveLessonProps {
  lesson: Lesson;
  onComplete: () => void;
}

const InteractiveLesson = ({ lesson, onComplete }: InteractiveLessonProps) => {
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
  
  return (
    <>
      <MarkdownContent content={lesson.content} />
      
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
  );
};

export default InteractiveLesson;
